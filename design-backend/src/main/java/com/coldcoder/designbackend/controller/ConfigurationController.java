package com.coldcoder.designbackend.controller;

import com.coldcoder.designbackend.models.Configuration;
import com.coldcoder.designbackend.service.ConfigurationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/configuration")
@AllArgsConstructor
public class ConfigurationController {

    private ConfigurationService configurationService;

    @GetMapping("/{configurationName}")
    private Configuration getSidenavConfiguration(@PathVariable String configurationName) {
        return configurationService.getConfigurationByName(configurationName);
    }
}
