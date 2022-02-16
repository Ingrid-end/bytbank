import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./contaPoupanca.js";
import { Conta } from "./conta.js";
const cliente1 = new Cliente("Ricardo",11122233309);

const ContaCorrenteRicardo = new ContaCorrente( 0, cliente1,1001);

// ContaCorrenteRicardo.depositar(500);
// ContaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
// contaPoupanca.sacar(10); 

const conta = new Conta ( 0, cliente1, 1001)

// console.log(contaPoupanca);
// console.log(ContaCorrenteRicardo);
console.log(conta);