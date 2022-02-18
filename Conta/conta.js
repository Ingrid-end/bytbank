// Class abstrata, so serve para ser herdada
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
                 // Block, so deixando a class como extensão
      if(this.constructor == Conta){
                  // thorw = lançar, lançando um novo erro

          throw new Error("Você não deveria fazer isso!");
      }

      this._saldo = saldoInicial;
      this._cliente = cliente;
      this.agencia = agencia;

     
  }

  set cliente(novoValor){
      if(novoValor instanceof Cliente){
          this._cliente = novoValor;
          }
      }
      get cliente(){
          return this._cliente;
      }
     
      get saldo(){
          return this._saldo;
      }
  
      // metodo publico usando o privado
  sacar(valor){
   
      throw new Error("O metodo sacar da conta é abstrato");
  }

  _sacar(valor, taxa){
      const valorSacado  = taxa * valor;
      if(this._saldo >= valorSacado){
           this._saldo -= valorSacado;
           return valorSacado;

       }
      //  Se não tiver saldo suficiente
      return  0;
  }

  depositar(valor){
       this._saldo += valor;
   }
  transferir(valor, conta){
          const valorSacado = this.sacar(valor);
          conta.depositar(valorSacado);
  }

}