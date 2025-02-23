import { MongoClient } from "mongodb";

const URI = "mongodb+srv://walmirlima:uTxopQpTxOlSu4uF@cluster0.4lrrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyDB");

//const songCollection = await db.collection("songs").find({}).toArray(); // Testar busca de dados da tabela

//console.log(songCollection); //Apenas testar conexão e tabelas