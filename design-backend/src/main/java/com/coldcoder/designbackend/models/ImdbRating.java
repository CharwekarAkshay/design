package com.coldcoder.designbackend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ImdbRating {
    private Integer id;
    private Long votes;
    private Double rating;
}
