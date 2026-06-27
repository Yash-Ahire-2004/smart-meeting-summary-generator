package com.yash.summary_meeting.controller;

import org.springframework.web.bind.annotation.*;

import com.yash.summary_meeting.dto.SummaryRequest;
import com.yash.summary_meeting.dto.SummaryResponse;
import com.yash.summary_meeting.service.SummaryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class SummaryController {

    private final SummaryService summaryService;

    public SummaryController(SummaryService summaryService) {
        this.summaryService = summaryService;
    }

    @PostMapping("/summarize")
    public SummaryResponse summarize(@Valid @RequestBody SummaryRequest request) {
        return summaryService.generateSummary(request.getTranscript());
    }

}