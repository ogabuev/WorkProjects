import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
}

export interface character {
  created: string,
  episode: [string],
  gender: string,
  id: number,
  image: string,

  location(name: string,
           url: string):object

  name: string,

  origin(name: string,
         url: string):object

  species: string,
  status: string,
  type: string,
  url: string
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {



  constructor(
    public dialogRef: MatDialogRef<CharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: character) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
