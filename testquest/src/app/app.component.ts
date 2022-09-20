import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup} from "@angular/forms";
import {LocalStorageService} from "./service/localStorage.service";
import {Profile} from "./components/profile.component";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(
    private storage: LocalStorageService
  ) { }

  public mySub: Subject<void> = new Subject<void>()

/*allProfiles = [
  new Profile('mex', 'Механик'),
  new Profile('str', 'Строитель'),
  new Profile('pov', 'Повар'),
  new Profile('xyd', 'Художник')
]*/

myForm : FormGroup = new FormGroup({
    'routeName' : new FormControl(''),
    'routeAuthor' : new FormControl(''),
    'profile': new FormControl(null),
    'week': new FormControl(null),
    'longTrip': new FormControl(null),
    'save': new FormControl(null)
  })

  saveForm(){
    this.storage.clear()
    this.storage.setItem('routeName',this.myForm.controls['routeName'].value);
    this.storage.setItem('routeAuthor',this.myForm.controls['routeAuthor'].value);
    this.storage.setItem('profile',this.myForm.controls['profile'].value);
    this.storage.setItem('week',this.myForm.get('week')?.value);
    this.storage.setItem('longTrip',this.myForm.controls['longTrip'].value)
  }

  submit(){
  }

  ngOnInit () {
    this.myForm.patchValue({
      routeName: this.storage.getItem('routeName'),
      routeAuthor:this.storage.getItem('routeAuthor'),
      profile:this.storage.getItem('profile'),
      week:this.storage.getItem('week'),
      longTrip:this.storage.getItem('longTrip')
    });

    this.myForm.get('longTrip')?.valueChanges.pipe(takeUntil(this.mySub)).subscribe(e => {
      if (e) {
        this.myForm.controls['routeName'].setValidators(Validators.required)
        this.myForm.controls['routeAuthor'].setValidators(Validators.required)
        this.myForm.controls['profile'].setValidators(Validators.required)
        this.myForm.controls['week'].setValidators(Validators.required)
      } else {
        this.myForm.controls['routeName'].clearValidators()
        this.myForm.controls['routeAuthor'].clearValidators()
        this.myForm.controls['profile'].clearValidators()
        this.myForm.controls['week'].clearValidators()
      }
      this.myForm.controls['routeName'].updateValueAndValidity()
      this.myForm.controls['routeAuthor'].updateValueAndValidity()
      this.myForm.controls['profile'].updateValueAndValidity()
      this.myForm.controls['week'].updateValueAndValidity()
    })
  }

  public ngOnDestroy() {
    this.mySub.next();
    this.mySub.complete();
  }
}
