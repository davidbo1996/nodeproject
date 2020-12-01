const express = require('express'); 
const expressHandlebars = require('express-handlebars');

const app = express(); 

const port = process.env.PORT || 8080 


//Configure handlebars 
app.engine('handlebars', expressHandlebars({
    defaultLayout = 'main',
}))

app.set('view engine', 'handlebars')

//Page 404 : Page cannnot found
app.use((req,res) => { 
    res.status(404)
    res.render('404')
});

// Custom 505 : Error server 

app.use((req,res)=> {
    res.status(500); 
    res.render('500');
})
//Page Home
app.get('/', (req,res) => { 
    res.type('text/plain'); 
    res.send("David BO")
});
// Page about me
app.get('/about', (req,res) => { 
    res.type('text/plain'); 
    res.send("David BO")
});


app.listen(port, ()=> console.log(`Express started on http://localhost:${port} ; ` + 'press Ctrl + C to terminate'));

