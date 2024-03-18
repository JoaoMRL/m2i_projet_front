import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent {
  @Input() name:string="";
  @Input() msg:string="";
  @Input() img?:string;
  @Input() status?:string;
  @Input() id?:string ="";

  
}
