//ROTA INICIAL

module.exports = function(mocai){

  mocai.get('/', function (req, res) {//ROTA INICIAL DA APLICAÇÃO
    var dados = {
      'pessoa': [{
        'nome':'Gaston',
        'idade':30,
        'peso':100,
        'profissao':'Estudante'
      },{
        'nome':'Henning',
        'idade':37,
        'peso':90,
        'profissao':'Professor'
      }]
    }
    res.render('index', {dados});  
  });

  mocai.get('/contatos', function (req, res) {//ROTA INICIAL DA APLICAÇÃO
    res.render('contatos');  
  });
  
};