import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studyquest3I2048';


  @HostListener('document:keydown.ArrowDown') onKeydown(event: KeyboardEvent) {
    if (this.down()) this.newGeneration ();
  }

  @HostListener('document:keydown.ArrowUp') onKeyUp(event: KeyboardEvent) {
    if (this.up() || this.upSum () ) this.newGeneration ();
  }

  @HostListener('document:keydown.ArrowRight') onKeyRight(event: KeyboardEvent) {
    if (this.right()) this.newGeneration ();
  }

  @HostListener('document:keydown.ArrowLeft') onKeyLeft(event: KeyboardEvent) {
    if (this.left()) this.newGeneration ();
  }



  grid = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  value_cell =
    [0,2048,0,0,
     4,0,0,8,
     0,0,32,0,
     0,16,0,256]

  // onKeydown(event: KeyboardEvent) {
  //   debugger
  //   if(event.key =="ArrowUp") {
  //     this.up();
  //   }
  // }

  up () {
    let active:boolean=false
    let n:number
    for (let i=0;i<4;i++ ) {
      n=0
      for (let j=0;j<4;j++) {
        if (this.value_cell[i+j*4]!==0) {
          if (this.value_cell[i+n*4]==0) {
            this.value_cell[i + n * 4] = this.value_cell[i + 4 * j]
            active=true;
            if (j!==0) {
              this.value_cell[i+4*j]=0
            }
          }
          n=n+1

        }
      }
    }
    return active
  }

  upSum () {
    let n:number
    for (let i=0;i<4;i++ ) {
      n=0
      for (let j=0;j<4;j++) {
        if ((this.value_cell[i+j*4]==this.value_cell[i+(j+1)*4]) && (this.value_cell[i+j*4]!==0)){
          this.value_cell[i+j*4]=this.value_cell[i+j*4]*2
          this.value_cell[i+(j+1)*4]=0
        }
      }
    }
    return false
  }

  down () {
    let active:boolean=false
    let n:number
    for (let i=12;i<16;i++ ) {
      n=0
      for (let j=0;j<4;j++) {
        if (this.value_cell[i-j*4]!==0) {
          if (this.value_cell[i-n*4]==0) {
            this.value_cell[i-n*4] = this.value_cell[i-4*j]
            active=true;
            if (j!==0) {
              this.value_cell[i-4*j]=0
            }
          }
          n=n+1
        }
      }
    }
    return active
  }

  left () {
    let active:boolean=false
    let n:number
    for (let i=0;i<4;i++ ) {
      n=0
      for (let j=0;j<4;j++) {
        if (this.value_cell[j+i*4]!==0) {  //ЕСЛИ НАЙДЕНА ЯЧЕЙКА КОТОРЫЙ СЛЕДУЕТ СМЕСТИТЬ
          if (this.value_cell[n+i*4]==0) { //ЕСЛИ ЯЧЕЙКА В КОТОРУЮ ВСТАВЛЯЕМ ПУСТАЯ
            this.value_cell[n+i*4]=this.value_cell[j+4*i]
            active=true;
            if (j!==0) {                   //НЕ УДАЛЯТЬ НУЛЕВОЙ ЭЛЕМЕНТ
              this.value_cell[j+4*i]=0
            }
          }
          n=n+1
        }
      }
    }
    return active
  }

  right () {
    let active:boolean=false
    let n:number
    for (let i=1;i<5;i++ ) {
      n=0
      for (let j=0;j<4;j++) {
        if (this.value_cell[i*4-1-j]!==0) {  //ЕСЛИ НАЙДЕНА ЯЧЕЙКА КОТОРЫЙ СЛЕДУЕТ СМЕСТИТЬ
          if (this.value_cell[i*4-1-n]==0) { //ЕСЛИ ЯЧЕЙКА В КОТОРУЮ ВСТАВЛЯЕМ ПУСТАЯ
            this.value_cell[i*4-1-n]=this.value_cell[4*i-1-j]
            active=true;
            if (j!==0) {
              this.value_cell[4*i-1-j]=0
            }
          }
          n=n+1
        }
      }
    }
    return active
  }

  newGeneration () {
    let quantityOfZero=[]
    let j:number
    let i:number
    j=0
    quantityOfZero=[]
    debugger
    for (let i=0;i<this.value_cell.length;i++) {
      if (this.value_cell[i]==0) {
        quantityOfZero.push(i)
      }
    }
    i = Math.floor(Math.random() * quantityOfZero.length);
    this.value_cell[quantityOfZero[i]]=(1+(Math.floor(Math.random()*2 )))*2;
  }






}
