package com.yash.summary_meeting.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MeetingStatistics {

    private int agendaCount;

    private int decisionCount;

    private int actionItemCount;

    private int transcriptCharacters;

}