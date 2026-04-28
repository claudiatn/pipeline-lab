const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: process.env.APP_VERSION || '1.0.0' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello from DevOps App!', env: process.env.NODE_ENV || 'development' });
});

app.get('/api/items', (req, res) => {
  res.json({ items: ['item1', 'item2', 'item3'] });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
