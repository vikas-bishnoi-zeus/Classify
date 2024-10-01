import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionControlPanelComponentComponent } from './question-control-panel-component.component';

describe('QuestionControlPanelComponentComponent', () => {
  let component: QuestionControlPanelComponentComponent;
  let fixture: ComponentFixture<QuestionControlPanelComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionControlPanelComponentComponent]
    });
    fixture = TestBed.createComponent(QuestionControlPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
