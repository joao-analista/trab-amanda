let atletas = JSON.parse(localStorage.getItem('atletas')) || [];

function atualizarLista() {
    const listaAtletas = document.getElementById('listaAtletas');
    listaAtletas.innerHTML = '';
    atletas.forEach((atleta, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${atleta.nome} - ${atleta.esporte} 
            <button onclick="removerAtleta(${index})">Remover</button>
            <button onclick="editarAtleta(${index})">Editar</button>
        `;
        listaAtletas.appendChild(li);
    });
}

function salvarAtleta(event) {
    event.preventDefault();
    const atleta = {
        nome: document.getElementById('nome').value,
        nacionalidade: document.getElementById('nacionalidade').value,
        esporte: document.getElementById('esporte').value,
        anoNascimento: document.getElementById('anoNascimento').value,
        altura: document.getElementById('altura').value,
        peso: document.getElementById('peso').value,
        medalhasOuro: document.getElementById('medalhasOuro').value,
        medalhasPrata: document.getElementById('medalhasPrata').value,
        medalhasBronze: document.getElementById('medalhasBronze').value,
        descricao: document.getElementById('descricao').value,
    };
    const index = document.getElementById('atletaIndex').value;
    if (index) {
        atletas[index] = atleta; // Editar atleta existente
    } else {
        atletas.push(atleta); // Adicionar novo atleta
    }
    localStorage.setItem('atletas', JSON.stringify(atletas));
    document.getElementById('formAtleta').reset();
    atualizarLista();
    window.location.href = 'index.html';
}

function removerAtleta(index) {
    atletas.splice(index, 1);
    localStorage.setItem('atletas', JSON.stringify(atletas));
    atualizarLista();
}

function editarAtleta(index) {
    const atleta = atletas[index];
    document.getElementById('nome').value = atleta.nome;
    document.getElementById('nacionalidade').value = atleta.nacionalidade;
    document.getElementById('esporte').value = atleta.esporte;
    document.getElementById('anoNascimento').value = atleta.anoNascimento;
    document.getElementById('altura').value = atleta.altura;
    document.getElementById('peso').value = atleta.peso;
    document.getElementById('medalhasOuro').value = atleta.medalhasOuro;
    document.getElementById('medalhasPrata').value = atleta.medalhasPrata;
    document.getElementById('medalhasBronze').value = atleta.medalhasBronze;
    document.getElementById('descricao').value = atleta.descricao;
    document.getElementById('atletaIndex').value = index;
}

document.getElementById('formAtleta')?.addEventListener('submit', salvarAtleta);
if (document.getElementById('listaAtletas')) atualizarLista();

