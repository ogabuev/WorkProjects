import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {one_card} from "./components/man.component";
import {ModalComponent} from "./modal/modal.component";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studyquest2';


  MansForm : FormGroup = new FormGroup({
    'ManName' : new FormControl('',Validators.required),
    'ManAge' : new FormControl('', [Validators.min(0),Validators.required]),
  })

  list_title: string =''
  task_text: string =''
  id_card: number = -1
  el_focus: boolean = false

  allCards=[
    { id: 0,
      list_title: 'Задачи',
      card_array:
        [new  one_card('вася'),
        new one_card('петя'),
        new one_card('вова')]
        },
    { id: 1,
      list_title: 'Задачи2',
      card_array:
        [new one_card('вася1'),
          new one_card('петя2'),
          new one_card('вова3')]
    }, {
      id: 2,
      list_title: 'Задачи3',
      card_array:
        [new one_card('вася12'),
          new one_card('петя22'),
          new one_card('вова32')]
    }]

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.allCards, event.previousIndex, event.currentIndex);
  }

  drop2(event: CdkDragDrop<one_card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addNewCards() {
    if (this.list_title!=='') {
      this.allCards = [...this.allCards, {id: this.allCards.length, list_title: this.list_title, card_array: [new one_card('')]}]
      this.list_title=''
    }
  }

  delCards (i:number) {
    this.allCards.splice(i,1)
  }

  addNewCard() {
    if (this.task_text!=='') {
      this.allCards[this.id_card].card_array.push(new one_card(this.task_text))
      this.task_text=''
    }
    this.closeDialog()
  }

  delCard (i:number,j:number) {
    this.allCards[i].card_array.splice(j,1)
  }

  showDialog(i:number){
    let modal_t: HTMLElement
    this.id_card=i
    // @ts-ignore
    modal_t = document.getElementById('modal_1')
    modal_t.classList.remove('hhidden')
    modal_t.classList.add('sshow');
  }
  closeDialog() {
    let modal_t: HTMLElement
    // @ts-ignore
    modal_t = document.getElementById('modal_1')
    modal_t.classList.remove('sshow')
    modal_t.classList.add('hhidden');

  }

  edit(i:any) {
    debugger
    let add_px: number
    add_px=41+i.target.scrollHeight
     if (!this.el_focus) {
       i.target.style.height = (add_px)+"px";
     } else {
       debugger
       i.target.style.height = i.target.scrollHeight-49 + "px";
     }
    this.el_focus=!this.el_focus
  }

  textAreaAdjust(ev: any) {
    debugger
    ev.target.style.height = "1px";
    ev.target.style.height = (59+ev.target.scrollHeight)+"px";
  }


  submit() {

  }

  ngOnInit () {

  }
}
