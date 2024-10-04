import { Injectable } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions: Question[] = [
    {
      name: '',
      response: [{ text: '' }],
    },
  ];
  constructor() {}
  // Add a new question
  addQuestion(question: Question) {
    this.questions.push(question);
  }

  // Get all questions
  getQuestion(index: number): Question {
    return this.questions[index];
  }

  // Add a response to a specific question
  addResponse(questionIndex: number, responseText: string) {
    const question = this.questions[questionIndex];
    question.response.push({ text: responseText });
  }

  // Remove a response from a specific question by response index
  removeResponse(questionIndex: number, responseIndex: number) {
    const question = this.questions[questionIndex];
    question.response.splice(responseIndex, 1);
  }
}
