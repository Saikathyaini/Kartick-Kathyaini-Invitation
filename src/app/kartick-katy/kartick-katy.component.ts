import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-kartick-katy',
  standalone: true,
  imports: [],
  templateUrl: './kartick-katy.component.html',
  styleUrl: './kartick-katy.component.css'
})
export class KartickKatyComponent {

days:number=0;
hours:number=0;
minutes:number=0;
seconds:number=0;

ngOnInit(){

setInterval(()=>{

const weddingDate=new Date("May 3, 2026 12:18:00").getTime();

const now=new Date().getTime();

const gap=weddingDate-now;

this.days=Math.floor(gap/(1000*60*60*24));
this.hours=Math.floor((gap%(1000*60*60*24))/(1000*60*60));
this.minutes=Math.floor((gap%(1000*60*60))/(1000*60));
this.seconds=Math.floor((gap%(1000*60))/1000);

},1000)

}
@HostListener('window:scroll', [])
onScroll() {

const sections = document.querySelectorAll('.fade-section');

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
section.classList.add('show');
}

});

}


}

