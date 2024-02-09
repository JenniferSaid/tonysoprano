const perguntas = [
    {
      pergunta: "Qual é o nome do restaurante favorito de Tony Soprano, onde ele frequentemente se encontra com membros da máfia?",
      respostas: [
        "a) Vesuvio",
        "b) Satriale's Pork Store",
        "c) Nuovo Vesuvio"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o único personagem a aparecer em todos os episódios de 'The Sopranos', incluindo a primeira e a última cena?",
      respostas: [
        "a) Tony Soprano",
        "b) Christopher Moltisanti",
        "c) Carmela Soprano"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do filho biológico de Tony Soprano?",
      respostas: [
        "a) Anthony Jr.",
        "b) Michael",
        "c) Bobby"
      ],
      correta: 0
    },
    {
      pergunta: "Em que estação de trem Tony Soprano tem uma experiência de quase morte em 'The Sopranos'?",
      respostas: [
        "a) Estação de Hoboken",
        "b) Estação de Penn",
        "c) Estação de Newark"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o dono original do Bada Bing! antes de se tornar um clube de strip-tease?",
      respostas: [
        "a) Tony Soprano",
        "b) Silvio Dante",
        "c) Ralph Cifaretto"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome da irmã de Tony Soprano, que frequentemente entra em conflito com ele?",
      respostas: [
        "a) Janice Soprano",
        "b) Barbara Soprano",
        "c) Carmela Soprano"
      ],
      correta: 0
    },
    {
      pergunta: "Quantos anos James Gandolfini tinha quando ele morreu em 2013?",
      respostas: [
        "a) 47",
        "b) 50",
        "c) 53"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do personagem interpretado pelo ator Steve Buscemi em 'The Sopranos'?",
      respostas: [
        "a) Bobby Bacala",
        "b) Tony Blundetto",
        "c) Phil Leotardo"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o padrinho de batismo de Tony Soprano?",
      respostas: [
        "a) Junior Soprano",
        "b) Paulie 'Walnuts' Gualtieri",
        "c) Corrado Soprano Jr."
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do cão de estimação de Tony Soprano?",
      respostas: [
        "a) Sparky",
        "b) Phil",
        "c) Bear"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
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
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
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