import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// 提供eg：(ngModel) 双向绑定 等等 内置指令

import { AppComponent }  from './app.component';
import { ChildComponent } from './child.component';
import { HighlightDirective } from './highlight.directive';          // 为项目 导入 自定义的 高亮 指令1
import { LoggerService } from './logger.service';

@NgModule({ //项目 root module !!!
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent, HighlightDirective ],// 为项目 导入 自定义的 高亮 指令2
  providers: [ LoggerService ],           //注入 服务类
  bootstrap: [ AppComponent ]
})
export class AppModule { }
