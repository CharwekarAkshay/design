package com.coldcoder.designbackend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(value = "movies")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Movie {
	@Id
	private String id;
	private String title;
	private String plot;
}
