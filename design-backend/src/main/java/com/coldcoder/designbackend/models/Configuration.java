package com.coldcoder.designbackend.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "configurations")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Configuration {
    @Id
    private String id;

    private String configurationName;
    private String configurationData;
}
