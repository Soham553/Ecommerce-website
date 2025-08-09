import express from 'express';


const app = express();

const PORT = 8000;

 app.get('/', (req, res) => {
        console.log(PORT)
        res.send("hello world")
    })

    app.listen(PORT, () => {
        console.log(PORT)
    })
