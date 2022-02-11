// O package.json é um arquivo muito utilizado em aplicações 
// JS modernas que guarda vários dados de nossa aplicação.

// Importando
import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
            //As classes estão nos arquivos
//  uma classe é o molde que define o resultado que queremos obter, 
//e os objetos são criados a partir desse molde.

// Com o constructor
const cliente1 = new Cliente("Ricardo",11122233309);

const cliente2 = new Cliente("Alice",88822233309);

           
// Sem o constructor
// Nome da variavel acessa o atributo
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;



  // Com o constructor
                  // Ciente 1
const ContaCorrenteRicardo = new ContaCorrente(cliente1,1001);

// Sem o constructor
//ContaCorrenteRicardo.cliente = cliente1;
//ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.depositar(500);


  // Com o constructor
                    // Cliente 2
const conta2 = new ContaCorrente(cliente2,1002 );

// Sem o constructor
// conta2.cliente =cliente2;
// conta2.agencia = 1002;
//conta2.depositar(50);

        // transferencia
let valor = 200;
ContaCorrenteRicardo.transferir(valor, conta2);
//let valor = 30;
//conta2.transferir(valor,ContaCorrenteRicardo);

//conta2.saldo = 3000;
//Não conseguimos atribuir um propriedade pq so tem o acessor de acesso(get) não tem o acessor de atribuição

// console.log(cliente2);

// console.log(conta2.numeroDeContas);

// Para acessar o numero de contas:
// console.log(ContaCorrente.numeroDeContas);

