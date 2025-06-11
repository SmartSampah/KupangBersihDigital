const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'petugas', password: 'petugas123', role: 'petugas' },
  { username: 'warga', password: 'warga123', role: 'masyarakat' },
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).send('Invalid credentials');
  const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, role: user.role });
});

app.get('/api/notifications', (req, res) => {
  res.json({ pending: 2, inProgress: 1, done: 3 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
