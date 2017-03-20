import 'zone.js';

// 如果希望你的应用支持更多浏览器，可以反注释下面这样，
// import core-js;

// JiT模式下 reflect-metadata 必不可少。
// core-js 包含 reflect-metadata，如果引入了 core-js，需注释下面 reflect-metadata 的导入。
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
