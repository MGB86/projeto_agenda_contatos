const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];
const imgContato = '<img src="./imgs/profile-user_64572.png" alt="foto do contato" />'

let linhas = '';

form.addEventListener('submit', function(e){ 
    e.preventDefault();

    addLinha();
    refreshTable();
    refreshSoma();
})

function addLinha(){
    const inputContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    if (contatos.includes(inputContato.value)) {
        alert(`Esse contato já existe. Verifique e tente novamente!`)
    } else if (numeros.includes(inputNumero.value)) {
        alert(`Já existe um contato com esse número. Verifique e tente novamente`)
    } else {
        contatos.push(inputContato.value);
        numeros.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${imgContato}</td>`;
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputContato.value = '';
    inputNumero.value = '';
}

function refreshTable(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function refreshSoma(){
    const somaTotal = somaFinal();

    document.getElementById('soma-contatos').innerHTML = somaTotal; 
}

function somaFinal(){
    let somaContatos = 0;

    for (i = 0; i < contatos.length; i++){
        somaContatos += contatos[i];
    }

    return contatos.length;
}