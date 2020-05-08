import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-song-form',
  templateUrl: './create-song-form.component.html',
  styleUrls: ['./create-song-form.component.css']
})
export class CreateSongFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alert(message) {
    window.alert(message);
  }
}
