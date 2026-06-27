package com.yash.summary_meeting.service;

import com.fasterxml.jackson.databind.JsonNode;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yash.summary_meeting.dto.MeetingStatistics;
import com.yash.summary_meeting.dto.SummaryResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class SummaryService {

    private static final Logger log = LoggerFactory.getLogger(SummaryService.class);

    private final GeminiService geminiService;
    private final ObjectMapper objectMapper;

    public SummaryService(GeminiService geminiService) {
        this.geminiService = geminiService;
        this.objectMapper = new ObjectMapper();
    }

    public SummaryResponse generateSummary(String transcript) {

        log.info("Summary generation request received.");

        String prompt = """
                You are an AI Meeting Assistant.

                Analyze the meeting transcript carefully.

                Extract ONLY the information explicitly mentioned.

                Return ONLY valid JSON in the following format:

                {
                  "agenda": [],
                  "keyDecisions": [],
                  "actionItems": [
                    {
                      "owner": "",
                      "task": "",
                      "dueDate": ""
                    }
                  ]
                }

                Rules:
                1. Never invent information.
                2. If owner is missing, return "Not specified".
                3. If due date is missing, return "Not specified".
                4. Return ONLY JSON.
                5. Do not include markdown like ```json.

                Meeting Transcript:

                """ + transcript;

        try {

            log.info("Calling Gemini API...");

            String response = geminiService.generateContent(prompt);

            JsonNode root = objectMapper.readTree(response);

            String text = root
                    .path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();

            text = text
                    .replace("```json", "")
                    .replace("```", "")
                    .trim();

            SummaryResponse summary =
                    objectMapper.readValue(text, SummaryResponse.class);

            summary.setReportId(
                    "MSG-" + UUID.randomUUID()
                            .toString()
                            .substring(0, 8)
                            .toUpperCase()
            );

            summary.setGeneratedAt(
                    LocalDateTime.now()
                            .format(
                                    DateTimeFormatter.ofPattern(
                                            "dd MMM yyyy hh:mm a"
                                    )
                            )
            );

            MeetingStatistics statistics = new MeetingStatistics(

                    summary.getAgenda() != null
                            ? summary.getAgenda().size()
                            : 0,

                    summary.getKeyDecisions() != null
                            ? summary.getKeyDecisions().size()
                            : 0,

                    summary.getActionItems() != null
                            ? summary.getActionItems().size()
                            : 0,

                    transcript.length()

            );

            summary.setStatistics(statistics);

            log.info("Meeting summary generated successfully.");

            return summary;

        } catch (Exception e) {

            log.error("Failed to generate meeting summary.", e);

            throw new RuntimeException(
                    e.getMessage()
            );

        }

    }

}