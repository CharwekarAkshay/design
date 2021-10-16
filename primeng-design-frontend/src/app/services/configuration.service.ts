import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../global.constats';
import { Configuration } from '../models/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private httpClient: HttpClient) { }


  getConfigurationByName(configurationName: String): Observable<Configuration> {
    return this.httpClient.get<Configuration>(GlobalConstants.backendAPI + '/' + GlobalConstants.configuration + '/' + configurationName);
  }
}
