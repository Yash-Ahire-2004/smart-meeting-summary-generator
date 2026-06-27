package com.yash.summary_meeting.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SummaryRequest {

    @NotBlank(message = "Transcript cannot be empty")
    @Size(min = 20,
            max = 10000,
            message = "Transcript should contain between 20 and 10000 characters")
    private String transcript;

}