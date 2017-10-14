import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'my-child',
  templateUrl: './app/child.component.html'
})
export class ChildComponent { //父子组件通讯之 子组件
  @Input() private message: string; 			//子组件 想要接收父组件的msg，必须定义输入属性@Input()
  @Output() private outer = new EventEmitter<string>(); //子组件 想要send msg就必须 定义输出属性    @Output()(通常与EventEmitter配合使用)
	constructor() {	}
  
  sendToParent() {
    this.outer.emit('message from child');
  }
}
