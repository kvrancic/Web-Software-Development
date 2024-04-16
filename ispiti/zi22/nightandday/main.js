const express = require('express');
const session = require('express-session')
const app = express();

// middleware
app.use(express.urlencoded({ extended: false })); //
app.use(express.json());
app.use(
    session({
        secret: "goblin",
        resave: false,
        saveUninitialized: true,
    })
);

; 

app.get('/toggle/:pathArg(*)',(req, res) => {
    req.session.darkMode = !req.session.darkMode;
    console.log(req.session.darkMode);
    if(req.session.darkMode){
        return res.send(
            `
            <style>
                *{
                    background-color: black;
                    color: white;
                }
            </style>
    
            <h2>Pristupljeno putu uz toggle ${req.params.pathArg}</h2>
            <a href="/toggle/">Promijeni pozadinu</a>
            <a href="/">Povratak na osnovni dokument</a>
            ` 
        );
    } 
    else{
        return res.send(
            `
            <style>
                *{
                    background-color: white;
                    color: black;
                }
            </style>
    
            <h2>Pristupljeno putu uz toggle ${req.params.pathArg}</h2>
            <a href="/toggle/">Promijeni pozadinu</a>
            <a href="/">Povratak na osnovni dokument</a>
            ` 
        );
    }
    
})

app.get('*', (req, res) => {
    if(req.session.darkMode){
        return res.send(
            `
            <style>
                body{
                    background-color: black;
                    color: white;
                }
            </style>
    
            <h2>Pristupljeno putu ${req.path}</h2>
            <a href="/toggle/">Promijeni pozadinu</a>
            <a href="/">Povratak na osnovni dokument</a>
            ` 
        );
    } 
    else{
        return res.send(
            `
            <style>
                body{
                    background-color: white;
                    color: black;
                }
            </style>
    
            <h2>Pristupljeno putu ${req.path}</h2>
            <a href="/toggle/">Promijeni pozadinu</a>
            <a href="/">Povratak na osnovni dokument</a>
            ` 
        );
    }
})

app.listen(3000, () => {console.log(`Server running on port 3000`);})