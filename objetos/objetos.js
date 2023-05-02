// primeiros exemplos e testes de programação orientada a objetos

//exemplo da bicicleta
//const bicicleta = {
    //cor: 'azul',
    //marchas: 21,
    //estilo: 'speed'
//}

//console.log(bicicleta['estilo'],bicicleta['marchas'])

//exemplo nomes, idade e emails
//const professor = {
    //nome: 'Senac',
    //idade: 28,
    //email: 'senac@senac.com',
//}
//console.log(professor.nome, professor.idade)
//console.log('email:' + professor.email)

//exemplo misturando os dois exemplos
//bicicleta marchas = 18;
//console.log(bicicleta.marchas);
//professor ['email'] = 'prof@senac.com';
//console.log(professor.email);

//Exercicio aula do dia 02/05
//const professores = [
    //{nome: 'Andrei', modulo: 1},
    //{nome: 'Vitor', modulo: 2}
//]

//console.log(professores);
//console.log(professores[1]);
//console.log(professores[1].nome); //Vitor

// outro exercicio

const curso = {
    nome: "FrontEnd"  //string
}
//adicionando atributo ao objeto (podemos ter //number, // array [] //objetos
curso.numeroEstudantes = 50;
curso['numeroEstudantes'] = 80;

console.log(curso.numeroEstudantes) //frontEnd
   
/* Crie um objeto que represente um filme. Ele deve ter dados da direção, o nome, o ano de lançamento, uma lista com o elenco
e uma propriedade que diga se você já viu ou não.

//Acesse e imprima no console cada uma das propriedades: metade usando notação do ponto e a outra metade com notação 
de colchetes.*/
//Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem 
//Altere a primeira pessoa do elenco por Xuxa
// Alterar a primeira pessoa do elenco para Xuxa
//Imprima no console todas as propriedades do objeto

   const novoFilme = {
    nome: 'Os Outros',
    diretor: 'Alejandro Amenábar',
    anoLancamento: 2001,
    elenco: [
      { nome: 'Nicole Kidman', personagem: 'Grace Stewart' },
      { nome: 'Elaine Cassidy', personagem: 'Lydia' },
      { nome: 'Christopher Eccleston', personagem: 'Charles Stewart' }
    ],
    jaAssistido: true
  };
  
  console.log('Filme: ' + novoFilme.nome + ', diretor: ' + novoFilme.diretor + ', elenco: ' + novoFilme.elenco[0] + ', ano de lançamento: ' + novoFilme.anoLancamento + ', já assistido: ' + novoFilme.jaAssistido);
  console.log('Filme: ' + novoFilme.nome + ', diretor: ' + novoFilme.diretor + ', elenco: ');
  novoFilme.elenco.forEach(function(pessoa) {
    console.log(pessoa.nome + ' - ' + pessoa.personagem);
  });
  novoFilme.elenco[0].nome = 'Xuxa';
  console.log(Object.keys(novoFilme));
 
