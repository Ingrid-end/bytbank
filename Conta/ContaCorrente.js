import {Conta} from "./conta.js";
// Extends = Estende tudo q estiver na class conta
export class ContaCorrente extends Conta{
   static numeroDeContas = 0;
    constructor ( cliente, agencia){
        // super é uma palavra especial que vai chamar o construtor da classe pai.
        // Não é sempre que ele vai chamar o construtor, na verdade, ele depende do 
        //método em que ele está dentro.
        // 0 = saldo
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    // Esta sobreescrevendo o comportamento de sacar
    //sobreescrever a class mãe q seria a  class conta
    sacar(valor){
        let taxa = 1.1 
       return this._sacar(valor, taxa);
     }

  
}

