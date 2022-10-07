import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {HttpClient} from "@angular/common/http";
import {delay, map, Observable, Subject, takeUntil, timeout} from "rxjs";
import * as Http from "http";
import {LocalStorageService} from "./service/localStorage.service";
import {DataService} from "./service/getJSONdata";
import {animate, state, style, transition, trigger} from "@angular/animations";

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
//
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class AppComponent implements OnInit, OnDestroy  {

  constructor(
    private http: DataService,
    private storage: LocalStorageService
  ) {}

  isEdit=false
  title = 'studyquest4IJSONtable';
  public mySub: Subject<void> = new Subject<void>()
  elementRow: any
  public PeriodicElements: any;
  displayedColumns: string[] = ['position', 'name', 'weight','symbol',' '];
  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: any | null;

  editRow(i:number) {
    this.isEdit=!this.isEdit
    this.elementRow=i
  }

  saveEdit(i:any) {
    console.log(this.storage.getItem('5'))
    this.storage.removeItem(i)
    this.storage.setItem(i,this.PeriodicElements.atoms[i-1])
    this.isEdit=!this.isEdit

  }

  newAtom() {
    this.PeriodicElements.atoms = [...this.PeriodicElements.atoms,{position: this.PeriodicElements.atoms.length +1 , name: '', weight: 0, symbol: ''}]

  }

  ngOnInit() {
     this.storage.clear()
     this.http.getJSON()?.pipe(takeUntil(this.mySub)).subscribe((atoms) => this.PeriodicElements = atoms);
  }

  public ngOnDestroy() {
    this.mySub.next();
    this.mySub.complete();
  }
}
