import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomHalfComponent } from './bottom-half.component';

describe('BottomHalfComponent', () => {
  let component: BottomHalfComponent;
  let fixture: ComponentFixture<BottomHalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomHalfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
