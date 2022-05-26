const express = require('express')
const db = require('./dbConnection')
const sortes = require('./mockup')

const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------

//rota home


// Rota sorteio de carta
app.get('/', (req, res) => {
  var indice = parseInt(Math.random() * cartas.length)
  res.render('index', {mensagem: cartas[indice]})

  //var texto = sortes {0}
  //res.render('index',{mensagem: texto})

});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});