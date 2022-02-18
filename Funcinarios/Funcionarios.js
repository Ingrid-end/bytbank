export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome= nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;

        // Autenticação
        this._senha;
    }

    // Propriedade senha não consegue ser atribuida
    // Apenas no Cadastrar senha
    // get senha(){
    //     return this._senha
    // }

    // Todo funcionario vai ser autenticado;
    // Metodo q vai receber uma senha e retorna se a senha for igual a senha q tem internamente
    autenticar(senha){
        return senha == this._senha;
    }
    // Metodo para cadastrar/confingurar a senha
    CadastrarSenha(senha){
        this._senha = senha;
    }
}