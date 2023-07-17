import livros from '../model/Livro.js'

class LivroController{

    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor').exec((e, livros) => {
            res.status(200).send(livros)
        })
    }

    static cadastrarLivro = ((req, res) => {
        let livro = new livros(req.body)

        livro.save((err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send(livro.toJSON())
            }
        })
    })

    static atualizarLivro = ((req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set:req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: "livro atualizado com sucesso!"})
            }
        })
    })

    static obterLivroPorId = (req, res) => {
        const id = req.params.id
        livros.findById(id).populate('autor', 'nome').exec((err, livro) => {
            if(err){
                res.status(400).send({message: err.message})
            }else{
                res.status(200).send(livro)
            }
        })
        
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: 'livro excluido com sucesso'})
            }
        })
    }

}

export default LivroController