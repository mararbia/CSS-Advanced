var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('../index.ejs');
});

app.listen(3000, () => {
    console.log("Executando na porta 3000");
});