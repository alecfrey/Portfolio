import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniordesignComponent } from './seniordesign.component';

describe('SeniordesignComponent', () => {
  let component: SeniordesignComponent;
  let fixture: ComponentFixture<SeniordesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeniordesignComponent]
    });
    fixture = TestBed.createComponent(SeniordesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
