import express from 'express';



const app = express();

app.use('/', (req, res) => {
    return res.json('Hello from Food Delivery App');
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})