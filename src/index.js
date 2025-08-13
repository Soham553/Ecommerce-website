import { app } from './app.js';
import connectdb from './db/index.js';




connectdb()
.then( () => {
    app.get('/', (req, res) => {
        res.send("Hello let's start")
    }),

    app.listen(8000, () => {
        console.log("hello listening");
    })
})
.catch( (error) => {
    console.log("Got an error in connection")
})





