/* ═══════════════════════════════════════════════════════════
   script.js — VELOZES E FURIOSOS MAP
   
   COMO LER ESTE ARQUIVO:
   O JS é dividido em seções:
   1. DADOS     → os arrays de carros e personagens
   2. ESTADO    → variáveis que controlam qual item está visível
   3. FUNÇÕES   → cada função faz uma coisa só
   4. INÍCIO    → o que roda quando a página carrega
═══════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════
   SEÇÃO 1 — DADOS DOS CARROS
   
   Um array [ ] com vários objetos { }.
   Cada objeto tem as propriedades do carro:
   nome, img (link da imagem), specs (especificações), desc.
═══════════════════════════════════════════════════════════ */
const carros = [
  {
    nome: 'Nissan Skyline GT-R R34',
    img: 'imagens/skyline2.png',
    specs: {
      'PILOTO':   "Brian O'Conner",
      'ANO':      '1999',
      'MOTOR':    'RB26DETT Twin Turbo',
      'POTÊNCIA': '280–560 cv',
      'CÂMBIO':   'Manual 6v',
      'TRAÇÃO':   'ATTESA AWD',
      'FILME':    'VF 2, 4'
    },
    desc: "O carro favorito de Brian O'Conner e o mais icônico japonês da franquia. O R34 com seu AWD e motor RB26 twin-turbo é uma lenda das corridas de rua."
  },
  {
    nome: 'Dodge Charger R/T 1970',
    img: 'imagens/Dodge-Charger-1970.png',
    specs: {
      'PILOTO':   'Dominic Toretto',
      'ANO':      '1970',
      'MOTOR':    'V8 426 HEMI',
      'POTÊNCIA': '425 cv',
      'CÂMBIO':   'Manual 4v',
      'TRAÇÃO':   'RWD',
      'FILME':    'VF 1, 4, 5, 6, 7'
    },
    desc: 'O carro mais icônico de toda a franquia. Herdado do pai de Dom, o Charger preto simboliza força e família. Destruído e reconstruído várias vezes, ele sempre retorna.'
  },
  {
    nome: 'Toyota Supra MK IV 1993',
    img: 'imagens/Toyota-Supra-MK-IV-1993.png',
    specs: {
      'PILOTO':   "Brian O'Conner",
      'ANO':      '1993',
      'MOTOR':    '2JZ-GTE Turbo',
      'POTÊNCIA': '320 cv (tuned)',
      'CÂMBIO':   'Manual 6v',
      'TRAÇÃO':   'RWD',
      'FILME':    'VF 1, 7 (tributo)'
    },
    desc: 'O lendário "carro de 10 segundos" na cor laranja. Brian o reconstruiu do zero e venceu uma Ferrari. Reapareceu em VF7 como homenagem a Paul Walker.'
  },
  {
    nome: 'Mazda RX-7 FD3S 1993',
    img: 'imagens/rx7.png',
    specs: {
      'PILOTO':   'Dominic Toretto',
      'ANO':      '1993',
      'MOTOR':    'Rotativo 13B-REW',
      'POTÊNCIA': '255 cv',
      'CÂMBIO':   'Manual 5v',
      'TRAÇÃO':   'RWD',
      'FILME':    'VF 1'
    },
    desc: 'O único carro japonês que Dom Toretto dirigiu. O motor rotativo e a cor laranja o tornaram inesquecível no primeiro filme.'
  },
  {
    nome: 'Mitsubishi Eclipse 1995',
    img: 'imagens/Mitsubishi-Eclipse-1995.png',
    specs: {
      'PILOTO':   "Brian O'Conner",
      'ANO':      '1995',
      'MOTOR':    '4G63 Turbo',
      'POTÊNCIA': '210 cv',
      'CÂMBIO':   'Manual 5v',
      'TRAÇÃO':   'FWD',
      'FILME':    'VF 1'
    },
    desc: 'O primeiro carro de Brian. Verde neon, nitro e muito estilo tuning dos anos 2000. Foi destruído numa corrida contra Toretto.'
  },
  {
    nome: 'Honda S2000 2001',
    img: 'imagens/s2000.png',
    specs: {
      'PILOTO':   'Suki (Devon Aoki)',
      'ANO':      '2001',
      'MOTOR':    'F20C VTEC',
      'POTÊNCIA': '240 cv',
      'CÂMBIO':   'Manual 6v',
      'TRAÇÃO':   'RWD',
      'FILME':    'VF 2'
    },
    desc: 'O S2000 rosa de Suki. Com luz neon e aerofólio, atravessou uma ponte elevada em uma das corridas mais estilosas da saga. Um ícone feminino da franquia.'
  },
  {
    nome: 'Subaru Impreza WRX STI',
    img: 'imagens/subaru.png',
    specs: {
      'PILOTO':   "Brian O'Conner",
      'ANO':      '2003',
      'MOTOR':    'EJ257 Boxer Turbo',
      'POTÊNCIA': '300 cv',
      'CÂMBIO':   'Manual 6v',
      'TRAÇÃO':   'AWD',
      'FILME':    'VF 4'
    },
    desc: 'O Subaru azul de Brian no quarto filme. O sistema AWD garantiu tração perfeita nas ruas molhadas de Los Angeles durante perseguição com Dom.'
  },
  {
    nome: 'Lykan HyperSport 2014',
    img: 'imagens/lykan.png',
    specs: {
      'PILOTO':   'Dom & Brian',
      'ANO':      '2014',
      'MOTOR':    'Flat-6 Twin Turbo',
      'POTÊNCIA': '780 cv',
      'CÂMBIO':   'PDK 6v',
      'TRAÇÃO':   'RWD',
      'FILME':    'VF 7'
    },
    desc: 'O carro de US$ 3,4 milhões voado entre três arranha-céus em Abu Dhabi. Apenas 7 unidades existem. Um dos momentos mais insanos de toda a franquia.'
  },
  {
    nome: 'Dodge Challenger SRT Hellcat',
    img: 'imagens/dodge2.png',
    specs: {
      'PILOTO':   'Dominic Toretto',
      'ANO':      '2015',
      'MOTOR':    'HEMI Supercharged 6.2L',
      'POTÊNCIA': '707 cv',
      'CÂMBIO':   'Manual 6v',
      'TRAÇÃO':   'RWD',
      'FILME':    'VF 8'
    },
    desc: 'Pilotado por Dom sob controle da vilã Cipher. A perseguição em Nova York com dezenas deles dirigindo sozinhos é uma das sequências mais espetaculares da saga.'
  },
  {
    nome: 'Mitsubishi Lancer Evo IX',
    img: 'imagens/Mitsubishi-Lancer-Evolution-IX.png',
    specs: {
      'PILOTO':   'Vários agentes',
      'ANO':      '2006',
      'MOTOR':    '4G63T Turbo',
      'POTÊNCIA': '291 cv',
      'CÂMBIO':   'Manual 6v',
      'TRAÇÃO':   'AWD',
      'FILME':    'VF: Desafio Tóquio'
    },
    desc: 'Protagonista do Desafio em Tóquio, usado em cenas de drift pelas ruas do Japão. O AWD e a resposta do motor fizeram dele o preferido dos drifters da franquia.'
  },
];


/* ═══════════════════════════════════════════════════════════
   SEÇÃO 2 — DADOS DOS PERSONAGENS
═══════════════════════════════════════════════════════════ */
const personagens = [
  {
    nome: 'Dominic Toretto',
    ator: 'Vin Diesel',
    foto: 'imagens/toreto.png',
    bio: 'Líder nato e mecânico genial. Dom Toretto vive guiado pela família acima de tudo. Pilota Dodge Chargers clássicos com força bruta e instinto. Praticamente indestrutível, já sobreviveu a situações que desafiam as leis da física.',
    tags: ['LÍDER', 'PILOTO', 'MECÂNICO', 'FAMÍLIA', 'DODGE CHARGER', 'INVENCÍVEL']
  },
  {
    nome: "Brian O'Conner",
    ator: 'Paul Walker',
    foto: 'imagens/brian.png',
    bio: 'Policial infiltrado que se tornou o melhor amigo de Dom. Brian é o piloto mais técnico da equipe, com talento para drift. Seu legado permanece vivo na franquia. Skyline e Supra são seus maiores ícones.',
    tags: ['AGENTE FBI', 'PILOTO', 'DRIFT', 'NISSAN SKYLINE', 'TOYOTA SUPRA', 'LENDA']
  },
  {
    nome: 'Letty Ortiz',
    ator: 'Michelle Rodriguez',
    foto: 'imagens/Letty.png',
    bio: 'Parceira e esposa de Dom. Letty é motorista formidável e lutadora feroz. Sobreviveu a uma tentativa de assassinato, perdeu a memória e ainda assim lutou para recuperar sua identidade e se reunir à família.',
    tags: ['GUERREIRA', 'PILOTA', 'LUTADORA', 'ESPOSA DE DOM', 'SOBREVIVENTE']
  },
  {
    nome: 'Luke Hobbs',
    ator: 'Dwayne Johnson',
    foto: 'imagens/hobbs.png',
    bio: 'Agente do DSS com força física extraordinária. Começou perseguindo Dom, mas virou aliado indispensável. Nunca desiste de uma missão e tem lealdade inabalável a quem chama de amigo.',
    tags: ['AGENTE DSS', 'FORÇA BRUTA', 'ALIADO', 'THE ROCK', 'HOBBS & SHAW']
  },
  {
    nome: 'Roman Pearce',
    ator: 'Tyrese Gibson',
    foto: 'imagens/roman.png',
    bio: 'Melhor amigo de Brian desde a infância. O alívio cômico da equipe — sempre com uma piada, mas presente na hora que importa. Motorista talentoso que nunca perde a oportunidade de dirigir um carro de luxo.',
    tags: ['PILOTO', 'HUMOR', 'AMIGO DE BRIAN', 'CARROS DE LUXO', 'EQUIPE DOM']
  },
  {
    nome: 'Tej Parker',
    ator: 'Ludacris',
    foto: 'imagens/tej.png',
    bio: "O gênio da tecnologia. Tej hackeia sistemas, fabrica gadgets e resolve qualquer problema de engenharia. Em VF7 foi ele quem operou o God's Eye ao lado de Ramsey — o sistema de vigilância global mais poderoso do mundo.",
    tags: ['HACKER', 'MECÂNICO', 'GÊNIO', "GOD'S EYE", 'TECNOLOGIA']
  },
  {
    nome: 'Mia Toretto',
    ator: 'Jordana Brewster',
    foto: 'imagens/Mia.png',
    bio: 'Irmã de Dom e esposa de Brian. Mia é o coração emocional da família Toretto. Prefere vida tranquila, mas não hesita em entrar em ação quando a família está em perigo.',
    tags: ['FAMÍLIA', 'IRMÃ DE DOM', 'ESPOSA DE BRIAN', 'CORAGEM', 'EQUIPE DOM']
  },
  {
    nome: 'Deckard Shaw',
    ator: 'Jason Statham',
    foto: 'imagens/shaw.png',
    bio: 'Ex-operativo de elite britânico e irmão de Owen Shaw. O vilão mais ameaçador de VF7 — letal, calculista e implacável. Com o tempo, o inimigo mais perigoso da equipe se tornou um aliado improvável.',
    tags: ['EX-VILÃO', 'OPERATIVO ELITE', 'BRITÂNICO', 'ALIADO', 'HOBBS & SHAW']
  },
   {
    nome: 'Han Lue',
    ator: 'Sung Kang',
    foto: 'imagens/han.png',
    bio: 'É um especialista em drift, ladrão e piloto de corridas clandestinas. Antes de entrar para a equipe de Dom, ele teve uma vida criminal no ensino médio. Acreditado como morto após uma explosão de carro em Desafio em Tóquio, foi revelado em Velozes e Furiosos 9 que ele fingiu sua morte com a ajuda do agente Mr.  Nobody (Kurt Russell). Han estava em escondederijo protegendo Elle, filha dos criadores do Projeto Áries, antes de retornar à família em F9 e Velozes e Furiosos 10.',
  tags: ['PILOTO DE DRIFT', 'EX-LADRÃO', 'EQUIPE DOM', 'ALIADO', 'FORJOU PRÓPRIA MORTE']
  },
   {
    nome: 'Gisele Yashar',
    ator: 'Gal Gadot',
    foto: 'imagens/gisele.png',
    bio: 'Especialista em combate corpo a corpo e tática de guerra. Gisele é uma das principais aliadas de Dom e parte integrante da equipe Toretto.Gisele se sacrificou para salvar Han de ser morto por Adolfson. No entanto, ela sobreviveu aos ferimentos e foi dada como morta por quase uma década. Ela retornou em Velozes e Furiosos 10, revelando que estava viva e trabalhando para proteger Elle, filha dos criadores do Projeto Áries. Gisele é uma personagem forte e corajosa, conhecida por sua habilidade em combate e lealdade à família Toretto.',
    tags: ['COMBATE', 'TÁTICA', 'ALIADA', 'EQUIPE DOM', 'RESSURREIÇÃO EM VF7']
  },
];


/* ═══════════════════════════════════════════════════════════
   SEÇÃO 3 — ESTADO
   
   Variáveis simples que guardam "onde estamos agora".
   carIdx = índice do carro atual (0 = primeiro)
   charIdx = índice do personagem atual (0 = primeiro)
═══════════════════════════════════════════════════════════ */
let carIdx  = 0;
let charIdx = 0;


/* ═══════════════════════════════════════════════════════════
   SEÇÃO 4 — FUNÇÕES

   Cada função tem um objetivo único e claro.
   Leia o comentário acima de cada uma.
═══════════════════════════════════════════════════════════ */


/* ───────────────────────────────────────
   showPage(nome)
   
   Troca a página visível.
   Recebe: 'inicio', 'carros', 'personagens' ou 'olho'
   
   Como funciona:
   1. Pega TODAS as .page e remove a classe 'active'
   2. Pega TODOS os .nav-btn e remove 'active'
   3. Adiciona 'active' só na página e botão certos
─────────────────────────────────────── */
function showPage(nome) {
  // querySelectorAll retorna uma lista de elementos
  // forEach percorre cada um deles
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  // getElementById pega UM elemento pelo id
  document.getElementById('page-' + nome).classList.add('active');

  // dataset.page lê o atributo data-page do botão no HTML
  document.querySelectorAll('.nav-btn').forEach(b => {
    if (b.dataset.page === nome) b.classList.add('active');
  });
}


/* ───────────────────────────────────────
   renderDots(id, total, ativo, callback)
   
   Cria os pontinhos de navegação do carrossel.
   É reutilizável — usamos tanto nos carros
   quanto nos personagens.
   
   Parâmetros:
   id       = id do container dos dots no HTML
   total    = quantos dots criar
   ativo    = qual dot fica aceso (índice)
   callback = função que roda ao clicar num dot
─────────────────────────────────────── */
function renderDots(id, total, ativo, callback) {
  const container = document.getElementById(id);

  // Array.from cria um array com 'total' posições
  // (_, i) → ignoramos o valor, usamos só o índice i
  container.innerHTML = Array.from({ length: total }, (_, i) => `
    <div class="dot ${i === ativo ? 'active' : ''}"
         onclick="(${callback})(${i})">
    </div>
  `).join(''); // join('') transforma o array em uma string só
}


/* ───────────────────────────────────────
   renderCarro()
   
   Pega o carro atual (carros[carIdx]) e
   coloca os dados dele nos elementos HTML.
─────────────────────────────────────── */
function renderCarro() {
  const c = carros[carIdx]; // objeto do carro atual

  // Atualiza a imagem
  document.getElementById('c-img').src = c.img;
  document.getElementById('c-img').alt = c.nome;

  // Atualiza o nome e o contador "3 / 10"
  document.getElementById('c-nome').textContent  = c.nome;
  document.getElementById('c-count').textContent = `${carIdx + 1} / ${carros.length}`;

  /*
    Object.entries(c.specs) transforma o objeto specs em pares:
    [['PILOTO', 'Brian'], ['ANO', '1999'], ...]
    
    .map() transforma cada par em HTML de uma spec.
    Template literals (`) permitem escrever HTML com variáveis ${}.
  */
  const specsHTML = Object.entries(c.specs).map(([label, valor]) => `
    <div class="spec">
      <div class="spec-l">${label}</div>
      <div class="spec-v ${label === 'POTÊNCIA' ? 'hl' : ''}">${valor}</div>
    </div>
  `).join('');

  document.getElementById('c-specs').innerHTML = specsHTML;
  document.getElementById('c-desc').textContent = c.desc;

  // Redesenha os pontinhos com o ativo correto
  renderDots('c-dots', carros.length, carIdx, (i) => {
    carIdx = i;
    renderCarro();
  });
}


/* ───────────────────────────────────────
   mudarCarro(direcao)
   
   Avança (+1) ou volta (-1) no carrossel.
   O operador % (módulo) faz o carrossel ser
   circular: vai além do último → volta ao primeiro.
   
   Exemplo com 10 carros (índices 0-9):
   carIdx = 9, dir = +1
   (9 + 1 + 10) % 10 = 20 % 10 = 0  ← volta ao início!
─────────────────────────────────────── */
function mudarCarro(dir) {
  carIdx = (carIdx + dir + carros.length) % carros.length;
  renderCarro();
}


/* ───────────────────────────────────────
   renderChar()
   
   Igual ao renderCarro, mas para personagens.
─────────────────────────────────────── */
function renderChar() {
  const p = personagens[charIdx];

  document.getElementById('p-foto').src  = p.foto;
  document.getElementById('p-foto').alt  = p.nome;
  document.getElementById('p-nome').textContent  = p.nome;
  document.getElementById('p-ator').textContent  = p.ator;
  document.getElementById('p-count').textContent = `${charIdx + 1} / ${personagens.length}`;
  document.getElementById('p-bio').textContent   = p.bio;

  // Tags: cada item do array vira um <span class="tag">
  document.getElementById('p-tags').innerHTML =
    p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  renderDots('p-dots', personagens.length, charIdx, (i) => {
    charIdx = i;
    renderChar();
  });
}


/* ───────────────────────────────────────
   mudarChar(direcao)
   
   Igual ao mudarCarro, mas para personagens.
─────────────────────────────────────── */
function mudarChar(dir) {
  charIdx = (charIdx + dir + personagens.length) % personagens.length;
  renderChar();
}


/* ───────────────────────────────────────
   updateBars()
   
   Atualiza as barras de sistema do Olho de Deus.
   Math.random() gera número entre 0 e 1.
   Multiplicamos e somamos para ter o intervalo certo.
─────────────────────────────────────── */
function updateBars() {
  // Função auxiliar local — só existe dentro de updateBars
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const cpu = rand(55, 95);
  const sig = rand(78, 99);
  const up  = rand(45, 82);

  // Atualiza texto e largura de cada barra
  document.getElementById('b-cpu').textContent  = cpu + '%';
  document.getElementById('f-cpu').style.width  = cpu + '%';

  document.getElementById('b-sig').textContent  = sig + '%';
  document.getElementById('f-sig').style.width  = sig + '%';

  document.getElementById('b-up').textContent   = up  + '%';
  document.getElementById('f-up').style.width   = up  + '%';
}


/* ───────────────────────────────────────
   Terminal — linhas e índice
─────────────────────────────────────── */
const linhasTerminal = [
  '> SISTEMA ONLINE...',
  '> SAT UPLINK: OK',
  '> SCANNING TARGETS...',
  '> 3 CONTATOS DETECTADOS',
  '> CRIPTOGRAFANDO CANAL',
  "> GOD'S EYE ATIVO",
  '> RASTREANDO ALVO-01',
  '> FACIAL MATCH: 97%',
  '> CANAL 7 DESCRIPTOGRAFADO',
  '> TODOS OS SISTEMAS: OK',
];

let termIdx = 0; // qual linha do terminal adicionar agora

function updateHudClock() {
  const agora = new Date();
  const h = String(agora.getHours()).padStart(2, '0');
  const m = String(agora.getMinutes()).padStart(2, '0');
  const el = document.getElementById('hud-clock');
  if (el) 
    el.textContent = h + ':' + m;
}

/* ───────────────────────────────────────
   addTermLine()
   
   Adiciona uma linha nova no terminal.
   Mantém só as últimas 5 linhas visíveis.
─────────────────────────────────────── */
function addTermLine() {
  const el = document.getElementById('mini-terminal');
  if (!el) return; // sai se o elemento não existir

  // Cria um novo elemento <div> com o texto da linha
  const linha = document.createElement('div');
  linha.textContent = linhasTerminal[termIdx % linhasTerminal.length];
  el.appendChild(linha); // adiciona ao final do terminal

  // Remove a linha mais antiga se tiver mais de 5
  while (el.children.length > 5) {
    el.removeChild(el.firstChild);
  }

  termIdx++; // avança para a próxima linha
}


/* ───────────────────────────────────────
   updateCoords()
   
   Muda as coordenadas do mapa levemente,
   simulando rastreamento em tempo real.
   
   toFixed(4) = 4 casas decimais: 34.0521
─────────────────────────────────────── */
function updateCoords() {
  const lat = (34.0522 + (Math.random() - 0.5) * 0.003).toFixed(4);
  const lon = (118.243 + (Math.random() - 0.5) * 0.003).toFixed(4);

  const el = document.getElementById('live-coords');
  if (el) el.textContent = `${lat}°N ${lon}°W`;
}


/* ═══════════════════════════════════════════════════════════
   SEÇÃO 5 — INICIALIZAÇÃO
   
   Tudo que está aqui roda UMA VEZ quando a página abre.
   
   setInterval(função, ms) = repete a função a cada X ms
   1000ms = 1 segundo
═══════════════════════════════════════════════════════════ */

// Renderiza o primeiro carro e personagem
renderCarro();
renderChar();

// Inicia os loops do Olho de Deus
setInterval(updateBars,    1500); // barras: a cada 1.5s
setInterval(addTermLine,   1100); // terminal: a cada 1.1s
setInterval(updateCoords,  2000); // coordenadas: a cada 2s
setInterval(updateHudClock, 1000); // relógio: a cada 60s (1 min)
updateHudClock();

// Adiciona a primeira linha do terminal já na abertura
addTermLine();
 
// Glow que segue o mouse no fundo
document.addEventListener('mousemove', function(e) {
  // e.clientX e e.clientY = posição do mouse na tela
  const x = e.clientX;
  const y = e.clientY;

  // Muda a variável CSS com a posição do mouse
  document.documentElement.style.setProperty('--mouse-x', x + 'px');
  document.documentElement.style.setProperty('--mouse-y', y + 'px');
});

/* ═══════════════════════════════════════════════════════════
   PROTEÇÃO DE IMAGENS — Bloqueando uso não autorizado
═══════════════════════════════════════════════════════════ */

// Bloqueia clique direito em todas as imagens (menu contextual)
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
});

// Bloqueia arrastar imagens para fora da página
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});
