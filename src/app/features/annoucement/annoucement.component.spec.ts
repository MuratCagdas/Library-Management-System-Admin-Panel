import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementComponent } from './annoucement.component';

describe('AnnoucementComponent', () => {
  let component: AnnoucementComponent;
  let fixture: ComponentFixture<AnnoucementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnoucementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnoucementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
