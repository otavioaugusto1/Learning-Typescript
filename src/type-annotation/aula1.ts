/* eslint-disable */
let nome: string = "Otávio";
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true;
let simbolo:symbol = Symbol('qualquer-simbolo');
//let big:bigint = 10;


//arrays
let arrayDeNumeros:Array<number> = [1,2,3];
let arrayDeNumeros2:number[] = [1,2,3];
let arrayDeStrings:Array<string> = ['1','2','3'];

//objetos
let pessoa: {nome:string, idade:number, adulto?:boolean} = {
  nome:"Otávio",
  idade:22,
  adulto: true
}

//funções
function soma(x:number,y:number):number{
  return x + y
}
const result = soma(2,2)

const soma2: (x:number, y:number) => number = (x,y) => x + y;

