const express=require('express')
const dateformat=require('date-format')

const PORT= 4000 || process.env.PORT

const app=express()

app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Hello World</h1>`);
})

app.get('/api/v1/instagram',(req,res)=>{
    const instasocial={
        name:"Harsh",
        username:"Harsh2404",
        followers:40,
        following:50,
        date:dateformat.asString('dd-MM hh:mm:ss',new Date)
    }

    res.status(200).json(instasocial);
})

app.get('/api/v1/fb',(req,res)=>{
    const fbsocial={
        name:"Harsh",
        username:"Harsh2404",
        followers:400,
        following:500,
        date:dateformat.asString('dd-MM hh:mm:ss',new Date)
    }

    res.status(200).json(fbsocial);
})

app.get('/api/v1/linkedin',(req,res)=>{
    const linkedinsocial={
        name:"Harsh",
        username:"Harsh2404",
        followers:4,
        following:5,
        date:Date.now()
    }

    res.status(200).json(linkedinsocial);
})

app.get('/api/v1/:token',(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({param:req.params.token});
})

app.listen(PORT, () => {
    console.log(`app listening at ${PORT}`);
  })