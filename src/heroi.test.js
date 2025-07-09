const Heroi = require('./heroi');

const heroi1 = new Heroi("Arus", 30, "mago");
heroi1.atacar(); // Saída esperada: O mago atacou usando magia

const heroi2 = new Heroi("Baldur", 35, "guerreiro");
heroi2.atacar(); // Saída esperada: O guerreiro atacou usando espada

const heroi3 = new Heroi("Shifu", 50, "monge");
heroi3.atacar(); // Saída esperada: O monge atacou usando artes marciais

const heroi4 = new Heroi("Hanzo", 28, "ninja");
heroi4.atacar(); // Saída esperada: O ninja