import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigSettingsService {
  static settings: IAppConfig;

  constructor(private http: HttpClient) {}
  load() {

    const jsonFile = `assets/config/configSettings.json`;
    return new Promise<void>((resolve, reject) => {
        this.http.get(jsonFile).toPromise().then((response : IAppConfig) => {
          ConfigSettingsService.settings = <IAppConfig>response;

           console.log('Config Loaded');
           console.log( ConfigSettingsService.settings);
           resolve();
           
        }).catch((response: any) => {
           reject(`Could not load the config file`);
        });
    });
  }
}

export interface IAppConfig {

  env: {
      name: string
  }

  apiServer: {
      link1:string,
      link2:string,
  }
}
