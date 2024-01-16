import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCard:string = ""
  //https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg
  @Input()
  cardTitle: string = ""
  @Input()
  id:string = "0"

  constructor() {}
  
  ngOnInit(): void {
  }

}
