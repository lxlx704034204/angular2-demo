//import 'reflect-metadata';//这个库处理元数据相关的
import 'zone.js';//catch浏览器的一些异步事件，帮助an2实现高效的变化检测特性

import 'core-js/es6/reflect';
import 'core-js/es7/reflect';


// JiT启动模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
//  .then(success => console.log('bootstrap success'))
//  .catch(error => console.log(error))
;
