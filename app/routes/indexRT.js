//ROTA INICIAL

module.exports = function(mocai){

  mocai.get('/', function (req, res) {//ROTA INICIAL DA APLICAÇÃO
    res.render('index');  
  });
  
};