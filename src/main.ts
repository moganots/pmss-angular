/*!

=========================================================
* Argon Dashboard Angular - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/pmss-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/pmss-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SharedConfiguration } from './app/@shared/configuration/shared-configuration';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let html = document.documentElement.innerHTML;
html = html.replace("@applicationTitle@", SharedConfiguration.applicationShortName);
html = html.replace("@applicationIcon@", SharedConfiguration.applicationSrcIcon);
html = html.replace("@applicationAuthor@", SharedConfiguration.companyName);
html = html.replace("@applicationDescription@", SharedConfiguration.applicationFullName);
document.documentElement.innerHTML = html;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
