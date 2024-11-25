import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})

export class SolicitudPage implements OnInit {

  correctAnswers: Record<string, string> = {
    q1: 'b',
    q2: 'b',
    q3: 'a',
    q4: 'b',
    q5: 'a',
    q6: 'a',
    q7: 'c',
    q8: 'a',
    q9: 'b',
    q10: 'a'
  };

  score: number = 0;
  totalQuestions: number = Object.keys(this.correctAnswers).length;
  resultMessage: string = '';
  passingScore: number = 0.6; // 60%

  constructor() { }

  ngOnInit() { }

  checkAnswers() {
    this.score = 0;

    // Recorremos las respuestas correctas y comparamos con las seleccionadas por el usuario
    for (let question in this.correctAnswers) {
      const selectedAnswer = (document.querySelector(`input[name="${question}"]:checked`) as HTMLInputElement);
      if (selectedAnswer && selectedAnswer.value === this.correctAnswers[question as keyof typeof this.correctAnswers]) {
        this.score++;
      }
    }

    // Llamamos a la función que muestra el resultado
    this.displayResult();
  }

  displayResult() {
    const percentage = (this.score / this.totalQuestions) * 100;

    if (percentage >= this.passingScore * 100) {
      this.resultMessage = `Tu puntuación es ${this.score}/${this.totalQuestions} (${percentage.toFixed(2)}%). ¡Felicidades, has aprobado!`;
    } else {
      this.resultMessage = `Tu puntuación es ${this.score}/${this.totalQuestions} (${percentage.toFixed(2)}%). Lo siento, no has aprobado.`;
    }

    const resultDiv = document.getElementById('result');
    if (resultDiv) {
      resultDiv.classList.remove('hidden');
    }
  }
}

