document.addEventListener('DOMContentLoaded', () => {
  // Hardcoded user data
  const user = {
    points: 50,
    badges: ['Eco Warrior', 'Quiz Master'],
    completedLessons: [1, 2] // assume 3 total
  };
  document.getElementById('points').textContent = user.points;
  document.getElementById('badges').textContent = user.badges.join(', ');
  const progress = (user.completedLessons.length / 3) * 100;
  document.getElementById('progress-fill').style.width = progress + '%';

  document.getElementById('logout').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});