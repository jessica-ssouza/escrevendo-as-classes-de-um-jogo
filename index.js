class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
    }

    console.log(`O ${this.tipo} ${this.nome}, ${this.idade} anos, atacou usando ${ataque}`);
  }
}

// Exemplo de uso
const heroi1 = new Heroi('Herói 1', 33, 'mago');
const heroi2 = new Heroi('Herói 2', 27, 'guerreiro');
const heroi3 = new Heroi('Herói 3', 15, 'monge');
const heroi4 = new Heroi('Herói 4', 8, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

  