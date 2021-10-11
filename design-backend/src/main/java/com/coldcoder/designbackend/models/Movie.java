package com.coldcoder.designbackend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Document(value = "movies")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Movie {
    @Id
    private String id;
    private String title;
    private String plot;
    private List<String> genres;
    private String runtime;
    private List<String> cast;
    private String poster;
    private String fullplot;
    private List<String> languages;
    private ImdbRating imdb;
    private String released;
}
