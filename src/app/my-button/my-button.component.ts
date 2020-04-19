import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, state, transition, keyframes, group } from '@angular/animations'

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  animations: [
    trigger('btnState', [
      state('inactive', style({
        backgroundColor: 'gray',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: 'green',
        transform: 'scale(1.4)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),
    trigger('listState', [
      state('in', style({transform: 'translateX(0)', opacity: 1})),
      transition(':enter', [
        style({
          transform: 'translateX(-50%)'
        }),
        animate(300)
      ]),
      transition(':leave', [
        animate(800, keyframes([
          style({
            backgroundColor: 'red',
            offset: 0
          }),
          style({
            width: '50%',
            offset: 0.5
          }),
          style({
            transform: 'translateX(30%)',
            opacity: 0,
            offset: 1
          })
        ]))
      ])
    ]),

    trigger('listOpen', [
      state('open', style({
        height: '*',
        fontSize: 16
      })),
      state('closed', style({
        height: 0,
      })),
      transition('closed => open', animate('800ms cubic-bezier(0.680, -0.550, 0.265, 1.550)')),
      transition('open => closed', [
        group([
          animate('800ms ease', style({
            fontSize: 0
          })),
          animate('800ms cubic-bezier(0.680, -0.550, 0.265, 1.550)', style({
            height: 0
          }))
        ])
      ])
    ])
  ]
})
export class MyButtonComponent implements OnInit {

  myState = 'active';
  myList = [];
  myListState = 'open'

  constructor() { }

  ngOnInit(): void {
  }

  toggleState(){
    this.insertItem();
    this.myState = this.myState === 'active' ? 'inactive' : 'active';
  }

  insertItem(){
    this.myList.push(this.myList.length);
  }

  removeItem(index){
    this.myList.splice(index, 1);
  }

  toggleListState(){
    this.myListState = this.myListState === 'open' ? 'closed' : 'open';
  }

  animationEnd(event){
    console.log(event);
  }

  animationStart(event){
    console.log(event);
  }

}
