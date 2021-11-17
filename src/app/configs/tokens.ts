import {inject, InjectionToken} from '@angular/core';

interface AppConfig {
  apiEndpoint: string;
  title: string;
}

class AppConfigClass {
  constructor(readonly appConfig: AppConfig) {
  }
}

// APP_CONFIG act as interface, APP_CONFIG is inferred to be interface AppConfig
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');


// @ts-ignore
export const APP_CONFIG1 = new InjectionToken<AppConfig>('app.config', {
  providedIn:  'root',
  // @ts-ignore
  factory: () => new AppConfigClass(inject(AppConfig))
});
console.log('APP_CONFIG', APP_CONFIG);
console.log('APP_CONFIG1', APP_CONFIG1);
