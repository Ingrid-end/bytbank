import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcinarios/Gerente.js";
import { Diretor } from "./Funcinarios/Diretor.js";
import { SistemadeAutenticação } from "./SistemadeAutenticação.js";


const diretor = new Diretor("Rodrigo", 10000, 1213254525);
diretor.CadastrarSenha("123456789");
const gerente = new Gerente("Vanda", 5000, 25635615456);
gerente.CadastrarSenha("123");

const gerenteEstalogado = SistemadeAutenticação.login(gerente, "123");
const diretorEstalogado = SistemadeAutenticação.login(diretor, "123456789");

const cliente = new Cliente ("Lais", 12364568741, "456");
const clienteEstalogado = SistemadeAutenticação.login(cliente, "456");

console.log(diretorEstalogado, gerenteEstalogado, clienteEstalogado);


// console.log(gerenteEstalogado);