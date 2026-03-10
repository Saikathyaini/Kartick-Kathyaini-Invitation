import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartickKatyComponent } from './kartick-katy.component';

describe('KartickKatyComponent', () => {
  let component: KartickKatyComponent;
  let fixture: ComponentFixture<KartickKatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KartickKatyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KartickKatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
