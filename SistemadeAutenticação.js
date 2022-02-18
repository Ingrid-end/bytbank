/*
Ser autenticavel significa ter o metodo autenticar

duck type = muito comum em linguagens que são fracamente tipadas
*/

export class SistemadeAutenticação{
    // Metodo login receber quem esta logando
    static login(autenticavel, senha){
        // Camada de verificação
       if(SistemadeAutenticação.ehAutenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
       }
       return false;
    }
    // Podendo chamar ele diretamente
    static ehAutenticavel(autenticavel){
        // O operador in = vai verificar se a chave "autenticar" ta dentro do autenticavel,
            // E se o autenticavel.autenticar é do tipo de uma funcão (instanceof=instancia)
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}