function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(1, 4));

// Types
// Interfaces
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'terrestre'
}

// const felino: IFelino = {
//   nome: 'Leão',
//   tipo: 'terrestre',
//   visaoNoturna: true
// }

console.log(animal);
