import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { ngHapiEngine } from "@nguniversal/hapi-engine";
export { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";

