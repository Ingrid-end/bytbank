
import{Cliente} from "./Cliente.js"

// função/ metado/comportamento = regra de negocio

export class ContaCorrente{
    // Contador de contas:
        //static : atributo estático, do tipo que reflete as alterações em todos os objetos daquela classe. 
   static numeroDeContas = 0;
    agencia;

      //#saldo Proposta de  privar uma class(não pode alterar ele, apenas as funções sacar, depoistar ...), mas ainda não é formal
    //https://github.com/tc39/proposal-class-fields#private-fields
    //_ "priva" de forma formal(não é privado de vdd)
    _saldo = 0;

    //  é possível utilizar classes como atributo de outras classes,
// compondo objetos mais complexos e relacionados.
    _cliente;




//set=atribuir
set cliente(novoValor){
    //instanceof= uma nova instancia 
    if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }
//get= pegar 
    get cliente(){
        //Acessor do cliente
        return this._cliente;
            // Ele fica sem o _ pq vai ser um acessor publico
    }
   
    get saldo(){
        return this._saldo;
    }


constructor (cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        // numero de contas da contaCorrente como um todo:
        ContaCorrente.numeroDeContas += 1;
}


    sacar(valor){
        // O saldo dessa conta corrente ...
        if(this._saldo >= valor){
            this._saldo -= valor;

            return valor;

        }
    }
    depositar(valor){
        if(valor <= 0 )
        {
            return;
            }
         this._saldo += valor;
     }
        // Recebendo um valor
    transferir(valor, conta){
            // Sacando da minha conta
            const valorSacado = this.sacar(valor);
            // deposita na conta do outro
            conta.depositar(valorSacado);
    }
}

//quando passamos como parâmetro de um método os tipos primitivos, também chamados de tipos de 
//valor, estamos na verdade copiando aquela informação para utilizá-la; já com tipos de referência, 
//como objetos de classes, estamos trabalhando com a informação direta, e todas as alterações 
//serão refletidas no objeto original.