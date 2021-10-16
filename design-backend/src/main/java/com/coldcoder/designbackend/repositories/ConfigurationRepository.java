package com.coldcoder.designbackend.repositories;

import com.coldcoder.designbackend.models.Configuration;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConfigurationRepository extends MongoRepository<Configuration, String> {
    public Configuration findByConfigurationName(String configurationName);
}
