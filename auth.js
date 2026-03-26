document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('auth-form');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Dummy login
    window.location.href = 'dashboard.html';
  });

  signupBtn.addEventListener('click', () => {
    // Dummy signup
    window.location.href = 'dashboard.html';
  });
});