import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHalfComponent } from './top-half.component';

describe('TopHalfComponent', () => {
  let component: TopHalfComponent;
  let fixture: ComponentFixture<TopHalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHalfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
