import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';
import { Question } from 'src/app/interfaces/question';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  /**
   *
   */
  constructor(private questionService: QuestionService) { 

  }
    // Add a new response to the list
    addResponse() {
      const responseText = '';
      this.questionService.addResponse(0, responseText);
    }
  
    // Delete a response by index
    deleteResponse(responseIndex: number) {
      this.questionService.removeResponse(0, responseIndex);
    }
    
      // Get the questions for display in the template
    getQuestion(index: number): Question  {
      return this.questionService.getQuestion(index);
    }

}
