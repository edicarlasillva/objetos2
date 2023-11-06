// const pessoa = {
//   id: '2',
//   nome: 'Carla',
//   email: 'carla@gmail.com',
//   telefone: '7199999999',
//   endereco: {
//     logradouro: "Rua ...",
//     cidade: "Salvador"
//   },
//   habilidades: ['comunicação', 'criatividade'],
//   temFilho: true,

// }

// console.log(pessoa.nome)
// console.log(pessoa.email)
// console.log(pessoa.telefone)

// const carro = {}

// carro.marca = 'Toyota'
// carro.modelo = 'Corola'
// carro.ano = 2022
// carro.cor = 'Branco'

// console.log(carro)

// console.log(carro.cor)

// const titulo = "Roube como um artista"
// const autor = "Austin Kleon"
// const ano = 2015

// const livro = {
//   titulo,
//   autor,
//   ano
// }

// document.write(livro)
// console.log(pessoa.habilidades[0], pessoa.habilidades[1])

// pessoa.nome = 'Mirna'
// pessoa.profissao = 'Programadora'
// console.log(pessoa)

// const key = 'id'

// console.log(pessoa.temFilho)

// delete pessoa

// console.log(pessoa)

// // Criar um objeto de aluno (nome, idade, curso)
// // Exibir no console o nome do aluno
// // Alterar o valor de curso
// // Incluir a propriedade nota


// for (let key in carro) {
//   console.log(key)
// }

// let livro2 = {}
// for (let chave in livro) {
//   livro2[chave] = livro[chave]
//   console.log(chave)
// }

// livro2.editora = 'Qualquer uma'
// console.log(livro2)
// console.log(livro)

//pessoas, mas solicitar as informações 
// (nome, idade, cidade) via prompt. 

const pessoas = []

let continuar = true

while (continuar) {
  const nome = prompt("Digite o nome da pessoa")
  const idade = Number(prompt("Digite o idade da pessoa"))
  const cidade = prompt("Digite o cidade da pessoa")

  const pessoa = {
    nome,
    idade,
    cidade
  }

  pessoas.push(pessoa)

  continuar = confirm('Deseja continuar?')
}

console.log(pessoas)

// Cadastro de produtos (nome, preco, categoria)
const produtos = [
  { nome: 'Smartphone', preco: 1500, categoria: 'Eletrônicos' },
  { nome: 'Notebook', preco: 5000, categoria: 'Eletrônicos' },
  { nome: 'Camiseta', preco: 120, categoria: 'Vestuário' },
  { nome: 'Torneira', preco: 600, categoria: 'Luxo' }
]

// Exibir as informações dos produtos no console
// ex.: Nome: Smartphone, Preço: 1500, Categoria: Eletrônicos
for (let produto of produtos) {
  console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria}`)
}


// 1) Filmes (título, diretor, gênero) -> 5 filmes
// 2) Alunos (nome, idade, curso, nota) -> 5 alunos

// 3) Cadastro de pessoas, mas solicitar as informações 
// (nome, idade, cidade) via prompt. 

