import autores from '../model/Autor.js'

class AutoresController{

    static listarAutores = (req, res) => {
        autores.find((e, autores) => {
            res.status(200).send(autores)
        })
    }

    static cadastrarAutor = ((req, res) => {
        let autor = new autores(req.body)

        autor.save((err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send(autor.toJSON())
            }
        })
    })

    static atualizarAutor = ((req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set:req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: "autor atualizado com sucesso!"})
            }
        })
    })

    static obterAutorPorId = (req, res) => {
        const id = req.params.id
        autores.findById(id, (err, autor) => {
            if(err){
                res.status(400).send({message: err.message})
            }else{
                res.status(200).send(autor)
            }
        })
        
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: 'autor excluido com sucesso'})
            }
        })
    }

}

export default AutoresController