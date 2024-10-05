type Register = {
    nome:string;
    email:string;
    cpf:string;
    senha:string;
    endereco: Endereco[]
}

type Endereco = {
    cep:string;
    rua:string;
    bairro:string;
    cidade:string;
    complemento:string;
}