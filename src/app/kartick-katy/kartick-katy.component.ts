import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kartick-katy',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './kartick-katy.component.html',
  styleUrl: './kartick-katy.component.css'
})
export class KartickKatyComponent {
opened = false;
opening = false;

openInvitation() {

  this.opening = true;

  const music = document.querySelector("audio") as HTMLAudioElement;
  music.play();

  setTimeout(()=>{
    this.opened = true;
  },1500);

}

}