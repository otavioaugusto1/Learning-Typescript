//sem retorno
function semRetorno():void{
  console.log("Não retorna nada");
}

const pessoa = {
  nome:'Otávio',
  sobrenome:'Augusto',
  exibirNome():void{
    console.log(this.nome + ' ' +  this.sobrenome);
  }
}
export {pessoa}
