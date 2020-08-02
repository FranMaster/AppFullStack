const express=require('express')
const bodyParser = require('body-parser')
let app=express()

const ArrayUsuario=[
    {
        name:'fran',
        pass:'1234'
    },
    {
        name:'Cris',
        pass:'1234'
    }
]

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.status(200).json({mensaje:'Hola Mundo'})
})


app.post('/login',(req,res)=>{
    let body=req.body
    let respuesta=false;
    ArrayUsuario.forEach(item => {
        if(body.name==item.name && body.pass==item.pass){
            respuesta=true            
        }
    });

    if (respuesta){
        res.status(200).json({mensaje:'Bienvenido'})       
    }else{
        res.status(401).json({mensaje:'Usuario o contraseña erronea'})
    }
})




app.listen(3000,()=>{console.log('Servidor corriendo en el puerto 3000')})