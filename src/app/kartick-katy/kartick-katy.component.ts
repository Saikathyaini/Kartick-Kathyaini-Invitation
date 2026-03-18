import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-kartick-katy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kartick-katy.component.html',
  styleUrl: './kartick-katy.component.css'
})
export class KartickKatyComponent  {

  @ViewChild('bgMusic') music!: ElementRef<HTMLAudioElement>;

showMusicHint = true;

toggleMusic(){

const audio = this.music.nativeElement;

if(audio.paused){
audio.play();
} else {
audio.pause();
}

this.showMusicHint = false;

}

}