import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-kartick-katy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kartick-katy.component.html',
  styleUrl: './kartick-katy.component.css'
})
export class KartickKatyComponent implements OnDestroy {

@ViewChild('bgMusic') music!: ElementRef<HTMLAudioElement>;

toggleMusic(){

const audio = this.music.nativeElement;

if(audio.paused){
audio.play();
}else{
audio.pause();
}

}

/* STOP MUSIC WHEN PAGE CHANGES */

ngOnDestroy(){

if(this.music){
this.music.nativeElement.pause();
this.music.nativeElement.currentTime = 0;
}

}

}