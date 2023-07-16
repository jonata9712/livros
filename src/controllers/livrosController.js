import livros from '../model/Livro.js'

class LivroController{

    static listarLivros = (req, res) => {
        livros.find((e, livros) => {
            res.status(200).send(livros)
        })
    }

}

export default LivroController