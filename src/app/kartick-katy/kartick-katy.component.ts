import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-kartick-katy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kartick-katy.component.html',
  styleUrl: './kartick-katy.component.css'
})
export class KartickKatyComponent implements AfterViewInit {

  @ViewChild('bgMusic') music!: ElementRef;

  ngAfterViewInit(){
    this.music.nativeElement.play().catch(()=>{});
  }

}