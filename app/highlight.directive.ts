import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: "[highlight]"
})
export class HighlightDirective { // 自定义的 高亮 指令。项目要使用此指令还必须在app.module.ts根模块中导入进去
  constructor(
    private el: ElementRef,    //元素
    private renderer: Renderer //渲染器
  ) { 
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
      //                        获取元素本地引用
  }
}
