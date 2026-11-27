const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');


const app = express();
const PORT = 5000;
const database = new Database('chat.db');

app.use(cors());
app.use(express.json());

database.exec('CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, author TEXT, content TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)');

app.get('/', (req, res) => {
    res.send('functioneaza an plm');
});

app.get('/api/posts', (req, res) => {
    const posts = database.prepare('SELECT * FROM posts ORDER BY id DESC').all();
    res.json(posts);
});

app.post('/api/posts', (req, res) => {
    const {author, content } = req.body;
    if(!author || !content) {
        return res.status(400).json({ error: 'Author and content are required' });
    }
    const insert = database.prepare('INSERT INTO posts (author, content) VALUES (?, ?)');
    const result = insert.run(author, content);
    res.status(201).json({ id: result.lastInsertRowid, author, content });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


