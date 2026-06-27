package com.yash.summary_meeting.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActionItem {

	private String owner;
	private String task;
	private String dueDate;

}