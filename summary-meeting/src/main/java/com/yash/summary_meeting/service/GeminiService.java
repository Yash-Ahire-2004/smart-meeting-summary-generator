package com.yash.summary_meeting.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String generateContent(String prompt) {

        String url =
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="
                        + apiKey;

        String requestBody = """
        {
          "contents":[
            {
              "parts":[
                {
                  "text":"%s"
                }
              ]
            }
          ]
        }
        """.formatted(prompt.replace("\"", "\\\""));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity =
                new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response =
                restTemplate.exchange(
                        url,
                        HttpMethod.POST,
                        entity,
                        String.class
                );

        return response.getBody();
    }
}