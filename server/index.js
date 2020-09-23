require("./init");
const app = require('express')();
const bodyParser = require("body-parser");
const database = require("./database");
const Telefon = require("./Telefon");
const connection = require("./connection");
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    return res.send("Bine ai venit pe telefoane.com");
})

app.get("/telefoane",(req,res)=>{
    //return res.json(database.getAll());
    database.getAll().then(result =>{
        return res.json(result);
    })
})

app.get("/telefoane/:id",(req,res)=>{
    const {id} = req.params;
    database.getOne(id).then(result =>{
        return res.json(result[0]);
    })
})


app.post("/telefoane",(req,res)=>{
    const {marca,model,rezolutieCamera,are5G} = req.body;
    const newTelefon = Telefon( marca,
                                model,
                                rezolutieCamera,
                                are5G);
    database.create(newTelefon);
    return res.json(newTelefon);
})

app.put("/telefoane/:id",(req,res)=>{
    const {id} = req.params;

    database.getOne(id).then(result=>{
        const tel = result[0].dataValues;
        if(req.query.id)
            delete req.query.id;

        if(!tel)
            return res.json({});

        const newTelefon = {...tel,
                            ...req.query};

        database.update(id,newTelefon);
        return res.json(newTelefon);
    });
});

app.delete("/telefoane/:id",(req,res)=>{
    const {id} = req.params;

    database.getOne(id).then(result =>{
        if(!result[0])
            return res.json({});
            
        database.deleteOne(id);
        return res.json(result[0]);
    })


})




app.listen(port,()=>{
    try{
        connection.authenticate();
    }
    catch(e){
        console.log(e);
    }
    console.log(`Listening ${port}...`);
})
