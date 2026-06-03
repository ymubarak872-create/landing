const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { id: 2, email: 'user@example.com', password: 'user123', role: 'user' }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'novaLaunchSecret123',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 // 1 hour
    }
  })
);

const requireAuth = (requiredRole) => (req, res, next) => {
  const user = req.session.user;
  if (!user) {
    return res.redirect('/login.html');
  }

  if (requiredRole && user.role !== requiredRole) {
    return res.status(403).send('Access denied.');
  }

  return next();
};

app.post('/api/login', (req, res) => {
  const email = String(req.body?.email || '').trim();
  const password = String(req.body?.password || '').trim();

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  const user = users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password
  );

  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }

  req.session.user = {
    id: user.id,
    email: user.email,
    role: user.role
  };

  return res.json({ success: true, role: user.role, redirect: `/${user.role}-dashboard.html` });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Logout failed.' });
    }

    res.clearCookie('connect.sid');
    return res.json({ success: true, redirect: '/login.html' });
  });
});

app.get('/admin-dashboard.html', requireAuth('admin'), (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});

app.get('/user-dashboard.html', requireAuth('user'), (req, res) => {
  res.sendFile(path.join(__dirname, 'user-dashboard.html'));
});

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`NovaLaunch backend running on http://localhost:${PORT}`);
});
