// molde
// Exportando a definição da class cliente
export class Cliente{
    nome;
    _cpf;

    get cpf(){
      return  this._cpf;
    }
//Constuindo meu ob
    // Construtores são utilizados para inicializar os atributos.
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
