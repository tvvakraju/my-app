import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  public ages:number[] = [10,20,30,40,50];
  public states:string[] = ['Telangana','andhra','Tamilnadu','Kerala'];
  public products :any = [
    {name:'pen',price:20,rating:3},
    {name:'phone',price:20000,rating:4},
    {name:'shirt',price:3000,rating:5},
    {name:'laptop',price:50000,rating:2},

  ]
  public companies :any = [
    {name:'a', company:'Tcs', Exp:'3'},
    {name:'b', company:'wipro', Exp:'4'},
    {name:'c', company:'capgemini', Exp:'5'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
