/**
 * Created by ramtinkermani on 8/3/16.
 */

// Needed for deployment with Webpack
import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { bootstrap } from "@angular/platform-browser-dynamic/"
import { AppComponent } from "./components/app.component"

bootstrap(AppComponent)