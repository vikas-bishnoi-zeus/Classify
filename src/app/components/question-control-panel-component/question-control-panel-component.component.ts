import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-question-control-panel-component',
  templateUrl: './question-control-panel-component.component.html',
  styleUrls: ['./question-control-panel-component.component.scss']
})
export class QuestionControlPanelComponentComponent {
  @Input() name: string = '';
}

