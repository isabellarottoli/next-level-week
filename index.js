const perguntas = [
  {
    pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
    resposta: [
      "var",
      "let",
      "const",
    ],
    correta: 1,
  },
  {
    pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
    resposta: [
      "// Comentário",
      "# Comentário",
      "/* Comentário */",
    ],
    correta: 0,
  },
  {
    pergunta: "O que o método 'console.log()' faz em JavaScript?",
    resposta: [
      "Exibe uma mensagem de erro no console",
      "Exibe uma mensagem de alerta na página",
      "Exibe uma mensagem no console ou terminal",
    ],
    correta: 2,
  },
  {
    pergunta: "Como você concatena strings em JavaScript?",
    resposta: [
      "concatString('a', 'b')",
      "'a' + 'b'",
      "mergeStrings('a', 'b')",
    ],
    correta: 1,
  },
  {
    pergunta: "O que o operador '==' faz em comparações JavaScript?",
    resposta: [
      "Compara valor e tipo",
      "Compara apenas valor",
      "Atribui um valor",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a estrutura básica de um loop 'for' em JavaScript?",
    resposta: [
      "for (inicialização; condição; incremento) { /* código aqui */ }",
      "loop { /* código aqui */ }",
      "forEach (elemento) { /* código aqui */ }",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é uma array em JavaScript?",
    resposta: [
      "Um tipo de dado que representa uma coleção ordenada de elementos",
      "Um operador lógico",
      "Um método de string",
    ],
    correta: 0,
  },
  {
    pergunta: "Como você define uma função em JavaScript?",
    resposta: [
      "function: minhaFuncao() { /* código aqui */ }",
      "def minhaFuncao() { /* código aqui */ }",
      "function minhaFuncao() { /* código aqui */ }",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é o resultado da expressão '2 + '2' em JavaScript?",
    resposta: [
      "4",
      "22",
      "Erro",
    ],
    correta: 1,
  },
  {
    pergunta: "Como você faz um comentário de várias linhas em JavaScript?",
    resposta: [
      "// Comentário",
      "# Comentário",
      "/* Comentário */",
    ],
    correta: 2,
  },
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")


//loop ou laço de repetição
for(const [index, item] of perguntas.entries()) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = "Pergunta " + (index + 1) + " - " + item.pergunta

 for(let resposta of item.resposta) {
  const dt = quizItem.querySelector("dl dt").cloneNode(true)
  dt.querySelector("span").textContent = resposta

  quizItem.querySelector("dl").appendChild(dt)  
}

quizItem.querySelector("dl dt").remove()

//coloca a pergunta na tela
quiz.appendChild(quizItem)
}
