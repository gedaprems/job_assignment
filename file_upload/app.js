const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs')


const app = express();

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        return cb(null,'./uploads');
    },
    filename: (req,file,cb)=>{
        return cb(null, `${Date.now()}-${file.originalname}`);
    },

});

const upload = multer({storage});

const fileUploadMiddleware = upload.fields([{name:'fileName'},{name:'fileName2'}])

app.set('view engine','ejs');
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/uploads',fileUploadMiddleware,(req,res)=>{
    const arr = req.files;
    console.log(arr.fileName1[0].filename);
    console.log(arr.fileName2[0].filename);
    
    res.redirect('/');
})

app.listen(3000);