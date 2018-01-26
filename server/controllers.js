module.exports = {
    getBody: (req, res) => {
        const db = req.app.get('db')
        const params = req
        db.get_body([params.id]).then((body) => {
            console.log(res)
            res.status(200).send(body)
        }).catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
    },
    postBody: (req, res, next) => {
        const db = req.app.get('db')
        console.log(req.body)
        db.post_body([
            req.body.body
        ]).then(() => {
            res.status(200)
        }).catch(() => {
            // console.log(error)
            res.status(500).send()
        })
    },
    putBody: (req, res, next) => {
        const db = req.app.get('db')
        console.log(req.body)
        db.put_body([req.body.body, req.body.id])
            .then(() => res.status(200).send())
            .catch((error) => {
                console.log(error)
                res.status(500).send()
            })
    },
    deleteBody: (req, res, next)=> {
        const db = req.app.get('db')
        const {params} = req
        console.log(params.id + ' here')
        db.delete_body([params.id])
            .then(() => res.status(200).send())
            .catch((error) => {
                console.log(error)
                res.status(500).send()
            })
    }
}