import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("blockTrip",[
      state('unstatic',style({
        'background-color': 'rgba(99, 95, 91, 0.7)',
      })),
      state('static',style({
        'background-color': 'none',

      })),
      transition("void => *",animate("2s 1s",style({opacity: '1'})))
    ])
  ]

 })
export class AppComponent {
  title = 'studyquest3I2048';
  statet: string = 'static';
  endGame: boolean = false;

  grid = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  value_cell =
     [0,0,0,0,
       0,0,0,0,
       0,0,0,0,
       0,0,0,0]

      // [2,4,8,16,
      // 16,8,4,2,
      // 128,256,512,1024,
      // 1024,2048,256,0]

  @HostListener('document:keydown.ArrowDown') onKeydown(event: KeyboardEvent) {
    let btnActive: boolean = false
    let sumActive: boolean = false
    btnActive = this.down()
    this.statet = this.down()? 'unstatic': 'static'
    sumActive = this.downSum ()
    this.down()
    if (btnActive || sumActive ) {
      this.newGeneration ();
    }
      if (this.value_cell.indexOf(0)<0) {
        this.endThisGame()
      }

  }

  @HostListener('document:keydown.ArrowUp') onKeyUp(event: KeyboardEvent) {
    let btnActive: boolean = false
    let sumActive: boolean = false
    btnActive = this.up()
    sumActive = this.upSum ()
    this.up()
    if (btnActive || sumActive ) {
      this.newGeneration ();
    }
      if (this.value_cell.indexOf(0)<0) {
        this.endThisGame()
      }

  }

  @HostListener('document:keydown.ArrowRight') onKeyRight(event: KeyboardEvent) {
    let btnActive: boolean = false
    let sumActive: boolean = false
    btnActive = this.right()
    sumActive = this.rightSum ()
    this.right()
    if (btnActive || sumActive ) {
      this.newGeneration ();
    }
      if (this.value_cell.indexOf(0)<0) {
        this.endThisGame()
      }

  }

  @HostListener('document:keydown.ArrowLeft') onKeyLeft(event: KeyboardEvent) {
    let btnActive:boolean = false
    let sumActive:boolean = false
    let nullElem:boolean = false
    btnActive = this.left()
    sumActive = this.leftSum ()
    this.left()
    if (btnActive || sumActive ) {
      this.newGeneration ();
    }

      if (this.value_cell.indexOf(0)<0) {
        this.endThisGame()
      }

  }


  // onKeydown(event: KeyboardEvent) {
  //   debugger
  //   if(event.key =="ArrowUp") {
  //     this.up();
  //   }
  // }
  // isNegative(element, index, array) {
  //   return element == 0;
  // }

  up () {
    let active: boolean = false
    let n: number
    for (let i=0; i<4; i++ ) {
      n = 0
      for (let j=0; j<4; j++) {
        if (this.value_cell[i+j*4] !== 0) {
          if (this.value_cell[i+n*4] == 0) {
            this.value_cell[i + n * 4] = this.value_cell[i + 4 * j]
            active = true;
            if (j !== 0) {
              this.value_cell[i+4*j] = 0
            }
          }
          n = n + 1

        }
      }
    }
    return active
  }

  upSum () {
    let active: boolean = false
    let n: number
    for (let i=0; i<4; i++ ) {
      n = 0
      for (let j=0; j<4; j++) {
        if ((this.value_cell[i+j*4] == this.value_cell[i+(j+1)*4]) && (this.value_cell[i+j*4] !== 0)){
          this.value_cell[i+j*4] = this.value_cell[i+j*4] * 2
          this.value_cell[i+(j+1)*4] = 0
          active = true
        }
      }
    }
    return active
  }

  down () {
    let active: boolean = false
    let n: number
    for (let i=12; i<16; i++ ) {
      n = 0
      for (let j=0; j<4; j++) {
        if (this.value_cell[i-j*4] !== 0) {
          if (this.value_cell[i-n*4] == 0) {
            this.value_cell[i-n*4] = this.value_cell[i-4*j]
            active = true;
            if (j !== 0) {
              this.value_cell[i-4*j] = 0
            }
          }
          n = n + 1
        }
      }
    }
    return active
  }

  downSum () {
    let active: boolean = false
    let n: number
    for (let i=12; i<16; i++ ) {
      n = 0
      for (let j=0; j<4; j++) {
        if ((this.value_cell[i-j*4] == this.value_cell[i-(j-1)*4]) && (this.value_cell[i-j*4] !== 0)){
          this.value_cell[i-j*4] = this.value_cell[i-j*4] * 2
          this.value_cell[i-(j-1)*4] = 0
          active = true
        }
      }
    }
    return active
  }

  left () {
    let active: boolean = false
    let n: number //количество ячеек которые заполнены с необходимой стороны
    for (let i=0; i<4; i++ ) {
      n = 0
      for (let j=0; j<4; j++) {
        if (this.value_cell[j+i*4] !== 0) {  //ЕСЛИ НАЙДЕНА ЯЧЕЙКА КОТОРЫЙ СЛЕДУЕТ СМЕСТИТЬ
          if (this.value_cell[n+i*4] == 0) { //ЕСЛИ ЯЧЕЙКА В КОТОРУЮ ВСТАВЛЯЕМ ПУСТАЯ
            this.value_cell[n+i*4] = this.value_cell[j+4*i]
            active = true;
            if (j !== 0) {                   //НЕ УДАЛЯТЬ НУЛЕВОЙ ЭЛЕМЕНТ
              this.value_cell[j+4*i] = 0
            }
          }
          n = n + 1
        }
      }
    }
    return active
  }

  leftSum () {
    let active:boolean=false
    let n:number
    for (let i=0; i<4; i++ ) {
      n = 0
      for (let j=0; j<3; j++) {
        if ((this.value_cell[j+i*4] == this.value_cell[j+1+i*4]) && (this.value_cell[j+i*4] !== 0)){
          this.value_cell[j+i*4] = this.value_cell[j+i*4] * 2
          this.value_cell[j+1+i*4] = 0
          active = true
        }
      }
    }
    return active
  }

  right () {
    let active: boolean = false
    let n: number
    for (let i=1; i<5; i++ ) {
      n = 0
      for (let j=0; j<4; j++) {
        if (this.value_cell[i*4-1-j] !== 0) {  //ЕСЛИ НАЙДЕНА ЯЧЕЙКА КОТОРЫЙ СЛЕДУЕТ СМЕСТИТЬ
          if (this.value_cell[i*4-1-n] == 0) { //ЕСЛИ ЯЧЕЙКА В КОТОРУЮ ВСТАВЛЯЕМ ПУСТАЯ
            this.value_cell[i*4-1-n] = this.value_cell[4*i-1-j]
            active = true;
            if (j !== 0) {
              this.value_cell[4*i-1-j] = 0
            }
          }
          n = n + 1
        }
      }
    }
    return active
  }

  rightSum () {
    let active: boolean=false
    let n: number
    for (let i=1; i<5; i++ ) {
      n=0
      for (let j=0; j<3; j++) {
        if ((this.value_cell[i*4-1-j] == this.value_cell[i*4-1-j-1]) && (this.value_cell[i*4-1-j] !== 0)){
          this.value_cell[i*4-1-j] = this.value_cell[i*4-1-j] * 2
          this.value_cell[i*4-1-j-1] = 0
          active = true
        }
      }
    }
    return active
  }

  newGeneration () {
    let quantityOfZero = []
    let random_cell: number


        for (let i = 0; i < this.value_cell.length; i++) {
          if (this.value_cell[i] == 0) {
            quantityOfZero.push(i)
          }
        }

    if (quantityOfZero.length > 0) {
      random_cell = Math.floor(Math.random() * (quantityOfZero.length));
      this.value_cell[quantityOfZero[random_cell]] = (1 + (Math.floor(Math.random() * 2))) * 2
      quantityOfZero = []
    }
  }

  startGenereation () {
    let quantityOfZero = []
    let random_cell: number

    this.endGame = false

    // let index: number
    // this.value_cell.map(cell =>  (cell = 0))
    // this.value_cell.map(cell => cell==0?quantityOfZero.push(index):cell=cell,index)

    for (let i=0; i<this.value_cell.length; i++) {
      this.value_cell[i] = 0
      if (this.value_cell[i] == 0) {
        quantityOfZero.push(i)
      }
    }

    for (let i=0; i<2; i++) {
      random_cell = Math.floor(Math.random() * quantityOfZero.length);
      this.value_cell[quantityOfZero[random_cell]] = (1 + (Math.floor(Math.random() * 2))) * 2;
      quantityOfZero.splice(random_cell, 1)
    }
  }

   endThisGame() {
    debugger
    let saveValue: number []
    let noFullBlock: number = 0
     this.value_cell.map(cell => cell == 0? noFullBlock = noFullBlock + 1: false)
    if (!noFullBlock) {
      saveValue = [...this.value_cell]
      if (this.up() || this.upSum() || this.down() || this.downSum() || this.right() || this.rightSum() || this.left() || this.leftSum()) {
        this.value_cell=[...saveValue]
      } else {
        this.value_cell=[...saveValue]
        this.endGame = true
      }
    }
  }

   ngOnInit () {
     this.startGenereation ()
   }
}
