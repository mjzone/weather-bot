import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import amplify from './aws-exports';

Amplify.configure(amplify);
Amplify.configure({
  Interactions: {
    bots: {
      "WeatherBot": {
        "name": "WeatherBot",
        "alias": "$LATEST",
        "region": "us-east-1",
      }
    }
  }
});
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
