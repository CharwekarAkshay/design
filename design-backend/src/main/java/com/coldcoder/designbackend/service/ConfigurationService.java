package com.coldcoder.designbackend.service;

import com.coldcoder.designbackend.models.Configuration;
import com.coldcoder.designbackend.repositories.ConfigurationRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ConfigurationService {

    private ConfigurationRepository configurationRepository;

    public Configuration getConfigurationByName(String configurationName) {
     return configurationRepository.findByConfigurationName(configurationName);
    }
}
