import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTreeComponent } from './result-tree.component';

describe('ResultTreeComponent', () => {
  let component: ResultTreeComponent;
  let fixture: ComponentFixture<ResultTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
