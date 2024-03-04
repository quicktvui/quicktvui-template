//

import {ESApp} from '@extscreen/es3-vue';
import application from './App.vue';

import routes from "./routes";

const routerOptions = {
  main: 'index',
  error: 'error',
  limit: 10,
  routes: routes,
}

import {createESApp} from "@extscreen/es3-core";

const app: ESApp = createESApp(application, routerOptions);

//------------------------------Component-------------------------

import {ESComponent} from "@extscreen/es3-component";

app.use(ESComponent);

//------------------------------QUICK UI-------------------------
import '@quicktvui/quicktvui3/dist/index.css';
import {QuickTVUI} from "@quicktvui/quicktvui3";

app.use(QuickTVUI);





