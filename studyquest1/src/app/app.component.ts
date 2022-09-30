import { Component } from '@angular/core';
import {batyaMan, man} from "./components/man.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {observable, of, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studyquest1';

  MansForm : FormGroup = new FormGroup({
    'ManName' : new FormControl('',Validators.required),
    'ManAge' : new FormControl('', [Validators.min(0),Validators.required]),
  })

  allMans = [
    new man('вася', 45),
    new man('петя', 56),
    new man('вова', 37),
    new man('леня', 70)]

  BatyaMans:Array<batyaMan>=[]
  OldBatyaMans:Array<batyaMan>=[]

  addNewMan() {
    this.allMans=[...this.allMans,new man(this.MansForm.controls['ManName'].value,this.MansForm.controls['ManAge'].value)]
    this.BatyaMans = this.allMans.map(one => ({...one, batya:one.age>55}))
    this.OldBatyaMans= this.BatyaMans.filter(age => age.batya && age.name.length < 4)
  }

  submit() {
    console.log(this.allMans)
  }

  ngOnInit () {
    this.BatyaMans = this.allMans.map(one => ({...one, batya:one.age>55}))
    this.OldBatyaMans= this.BatyaMans.filter(age => age.age>65)
  }
}
