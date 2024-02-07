require('dotenv').config();
const express=require('express');
const app=express();

const connectDB=require('./db/connect');
const productsRouter= require('./routes/products');

//middleware
app.use(express.json());

//routes
app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1>');
})

app.use('/api/v1/products',productsRouter)


const port= process.env.PORT || 3000;
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log('server is running...')
        })
    } catch (error) {
        console.log(error);
    }
}
start();