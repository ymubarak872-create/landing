const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#loginError');

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorMessage.textContent = '';

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();
      if (!result.success) {
        errorMessage.textContent = result.message || 'Login failed. Please try again.';
        return;
      }

      window.location.href = result.redirect;
    } catch (error) {
      errorMessage.textContent = 'Unable to connect to the server. Please try again later.';
    }
  });
}
