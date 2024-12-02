const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Viera',
        age: 18,
        job: 'Programmer',
        interests: ['Coding stuff', 'Playing videogames', 'Listening to music'],
        socialLinks: {
            github: 'https://github.com/V1ERA',
            spotify: 'https://open.spotify.com/user/31stlr4sagr5elobr6tqx2hlwdwy',
            discord: 'https://discord.com/users/167905413457641473',
            steam: 'https://steamcommunity.com/profiles/76561199321398327'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
