import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-of-list-object',
  templateUrl: './one-of-list-object.component.html',
  styleUrl: './one-of-list-object.component.css'
})
export class OneOfListObjectComponent {
  
  @Input() wtiam?:string;
  @Input() id?:number;
  @Input() name?:string;
  @Input() description?:string;
  @Input() status?:string;

}
