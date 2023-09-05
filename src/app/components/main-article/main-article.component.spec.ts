import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArticleComponent } from './main-article.component';

describe('MainArticleComponent', () => {
  let component: MainArticleComponent;
  let fixture: ComponentFixture<MainArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainArticleComponent]
    });
    fixture = TestBed.createComponent(MainArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
