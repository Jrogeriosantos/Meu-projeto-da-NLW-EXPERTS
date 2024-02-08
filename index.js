const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilo de folhas",
        "Um banco de dados relacional",
        "Uma linguagem de programação para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro no console",
        "Imprimir dados no console",
        "Executar uma função assíncrona",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Uma condição de controle de fluxo",
        "Um valor constante",
        "Um nome simbólico para armazenar e referenciar valores",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença, ambos são usados para variáveis imutáveis",
        "let é usado para variáveis mutáveis, enquanto const é para variáveis imutáveis",
        "const é usado para variáveis mutáveis, enquanto let é para variáveis imutáveis",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma biblioteca popular de JavaScript",
        "Uma linguagem de marcação para documentos web",
        "A representação em árvore dos elementos HTML na página",
      ],
      correta: 2
    },
    {
      pergunta: "O que significa AJAX em JavaScript?",
      respostas: [
        "Uma técnica para criar animações em páginas web",
        "Uma abordagem de programação assíncrona",
        "Uma biblioteca de gráficos 3D",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos",
        "Concatenação de strings",
        "Verificação de igualdade sem levar em conta os tipos",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que retorna um valor",
        "Uma função que chama outras funções",
        "Uma função passada como argumento para outra função, a ser executada posteriormente",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento de teclado",
        "Um evento de mouse",
        "Um evento de carregamento da página",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma Promise em JavaScript?",
      respostas: [
        "Uma declaração de variável",
        "Uma forma de lidar com operações assíncronas",
        "Uma estrutura de controle de fluxo",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template');
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
     
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector ('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector ('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
    
  