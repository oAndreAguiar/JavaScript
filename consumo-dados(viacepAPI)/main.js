function buscarDados() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url).then(
        response => {
            return response.json()
        }).then(dados => {
           atribuirDados(dados);
        });
}

function atribuirDados(dados){
    const rua = document.getElementById('rua');
    const complemento = document.getElementById('complemento');
    const cidade = document.getElementById('cidade');
    const bairro = document.getElementById('bairro');
    const estado = document.getElementById('estado');

    rua.value = dados.logradouro
    complemento.value = dados.complemento
    cidade.value = dados.localidade
    bairro.value = dados.bairro
    estado.value = dados.uf
}

function limparDados(){
    
    rua.value = "";
    complemento.value = "";
    cidade.value = "";
    bairro.value = "";
    estado.value = "";
}