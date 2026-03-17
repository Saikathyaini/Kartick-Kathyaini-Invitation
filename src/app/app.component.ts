import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KartickKatyComponent } from './kartick-katy/kartick-katy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KartickKatyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invitation';
}
