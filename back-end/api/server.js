import express, { request, response } from 'express';
import { artistArray } from '../../front-end/src/assets/database/artists.js';
import { songsArray } from '../../front-end/src/assets/database/songs.js';

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send("API para artists e songs");
});

app.get("/artists", (request, response) => {
    response.send(artistArray);
})

app.get("/songs", (request, response) => {
    response.send(songsArray);
})

app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
})