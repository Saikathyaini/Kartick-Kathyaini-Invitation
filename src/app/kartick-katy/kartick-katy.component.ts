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

@ViewChild('bgMusic') music!: ElementRef;

openInvitation(){
  this.opened = true;
  this.music.nativeElement.play();
}

}