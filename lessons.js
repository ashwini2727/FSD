document.addEventListener('DOMContentLoaded', () => {
  const lessons = [
    {
      _id: 1,
      title: 'Pollution',
      content: 'Pollution is the introduction of harmful substances into the environment. It can be air, water, or soil pollution caused by human activities.',
      tip: 'Reduce plastic use by using reusable bags and bottles.',
    },
    {
      _id: 2,
      title: 'Climate Change',
      content: 'Climate change is the long-term alteration of temperature and typical weather patterns in a place. It is mainly caused by greenhouse gases.',
      tip: 'Plant trees to absorb CO2 and reduce your carbon footprint.',
    },
    {
      _id: 3,
      title: 'Recycling',
      content: 'Recycling is the process of converting waste materials into new products to prevent waste of potentially useful materials.',
      tip: 'Sort your waste properly into recyclables and non-recyclables.',
    }
  ];
  const list = document.getElementById('lessons-list');
  lessons.forEach(lesson => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.content}</p>
      <p>Tip: ${lesson.tip}</p>
      <button onclick="completeLesson('${lesson._id}')">Complete</button>
      <a href="quiz.html?lessonId=${lesson._id}">Take Quiz</a>
    `;
    list.appendChild(div);
  });
});

function completeLesson(id) {
  alert('Lesson completed!');
}