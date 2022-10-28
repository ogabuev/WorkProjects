import {Component, OnDestroy, OnInit} from '@angular/core';
import {RequestsService} from "./service/requests/requests.service";
import {delay, Subject, takeUntil} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {CharacterComponent} from "./character/character.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'studyquest6IinteractionsWithApi';
  animal: string = ''

  constructor(
    private http: RequestsService,
    public dialog: MatDialog
  ) {}

  public RickMortyUniverse: any;
  public mySub: Subject<void> = new Subject<void>()


  openDialog(i:number = 0): void {

    const dialogRef = this.dialog.open(CharacterComponent, {
      width: '550px',
      height: 'auto',
       data: this.RickMortyUniverse.results[i]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  ngOnInit() {
    this.http.getRickMorty()?.pipe(takeUntil(this.mySub)).subscribe((character) => this.RickMortyUniverse = character);

  }

  ngOnDestroy() {
    this.mySub.next();
    this.mySub.complete();
  }

}
