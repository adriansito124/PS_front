import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app.routes';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));