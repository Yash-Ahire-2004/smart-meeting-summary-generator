package com.yash.summary_meeting.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SummaryResponse {

    private String reportId;

    private String generatedAt;

    private List<String> agenda;

    private List<String> keyDecisions;

    private List<ActionItem> actionItems;

    private MeetingStatistics statistics;

}