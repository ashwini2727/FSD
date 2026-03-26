document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lessonId = urlParams.get('lessonId');
  const quizzes = {
    1: {
      questions: [
        {
          question: 'What is pollution?',
          options: ['Good for the environment', 'Introduction of harmful substances', 'A natural process'],
          correct: 1
        },
        {
          question: 'Which is a type of pollution?',
          options: ['Air', 'Water', 'Both'],
          correct: 2
        }
      ]
    },
    2: {
      questions: [
        {
          question: 'What causes climate change?',
          options: ['Greenhouse gases', 'Volcanoes', 'Earthquakes'],
          correct: 0
        }
      ]
    },
    3: {
      questions: [
        {
          question: 'What should you recycle?',
          options: ['Plastic bottles', 'Food waste', 'Both'],
          correct: 0
        }
      ]
    }
  };
  const quiz = quizzes[lessonId];
  if (!quiz) return;
  const section = document.getElementById('quiz-section');
  quiz.questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${q.question}</p>
      ${q.options.map((opt, j) => `<input type="radio" name="q${i}" value="${j}"> ${opt}<br>`).join('')}
    `;
    section.appendChild(div);
  });
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.addEventListener('click', () => {
    let score = 0;
    quiz.questions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && parseInt(selected.value) === q.correct) score++;
    });
    alert(`Score: ${score}/${quiz.questions.length}`);
  });
  section.appendChild(submitBtn);
});