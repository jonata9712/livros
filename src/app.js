import express from 'express';
import db from './config/dbConnect.js'
import livros from './model/Livro.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conectado com sucesso')
})

const app = express();

app.use(express.json())

routes(app)


app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo

    res.json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})

app.delete('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros.splice(index, 1)
    res.send(`Livro ${index} removido com sucesso`)
})

function buscaLivro(id){
   return livros.findIndex(l => l.id == id)
}

export default app