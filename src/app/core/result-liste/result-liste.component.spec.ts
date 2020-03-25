import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListeComponent } from './result-liste.component';

describe('ResultListeComponent', () => {
  let component: ResultListeComponent;
  let fixture: ComponentFixture<ResultListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
