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

console.log(animal);

// Usando na web
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});


// Generic Types
function adicionaApendiceALista<T>(array: any[], valor: T) {
  return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3, 4, 5], 1);