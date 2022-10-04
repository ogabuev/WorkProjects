import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef) { }


  close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
  }



  ngOnInit(): void {
     // this.el.nativeElement.addEventListener('click', ()=> {
     //   this.close()
     // })
  }



}
