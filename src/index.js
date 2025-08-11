import { app } from './app.js';
import connectdb from './db/index.js';

connectdb()

app.listen(8000, () => {
    console.log("hello listening");
})



