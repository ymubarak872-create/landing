const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { email: 'user@example.com', password: 'user123', role: 'user' }
];

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  const user = users.find(
    (item) => item.email.toLowerCase() === String(email).toLowerCase() && item.password === password
  );

  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }

  return res.json({ success: true, role: user.role, redirect: `/${user.role}-dashboard.html` });
});

app.listen(PORT, () => {
  console.log(`NovaLaunch backend running on http://localhost:${PORT}`);
});
