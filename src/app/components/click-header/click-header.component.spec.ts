import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickHeaderComponent } from './click-header.component';

describe('ClickHeaderComponent', () => {
  let component: ClickHeaderComponent;
  let fixture: ComponentFixture<ClickHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickHeaderComponent]
    });
    fixture = TestBed.createComponent(ClickHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
