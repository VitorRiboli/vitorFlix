//selecionando a lista ul do meu html
const listaFilme = document.querySelector(".listaFilme")


//função que vai listar os filmes
function listarFilmes(colecaoFilmes){

        //limpa a exibição dos filmes
        listaFilme.innerHTML = ""

        //acessando a coleção de filmes > passando para função template
        colecaoFilmes.forEach(function(filme){

            //passando cada um dos filmes para criar o template para cada filme
            const template = criarTemplate(filme)
        
            // adicionando o filme de forma visual no html
            listaFilme.appendChild(template)

        });

};
//chamando função
listarFilmes(filmes);

//função que cria o template
function criarTemplate(filme){
    //criando um template do tipo html
    const li = document.createElement("li")
    //adicionando uma estrutura html pra dentro do LI
    li.innerHTML = `
        <figure>
            <img src="${filme.url}" alt="${filme.nome}" />
        </figure>
        <h2>${filme.nome}</h2>
    `
    return li
};

//filtrar filme por categoria
function filtrarFilme(filtroCategoria){

    //Loop para achar os filmes
    const filmesFiltrados = filmes.filter(function(filme){

        //se a categoria buscada for === a do filme, mostre o filme/ retorne
        if(filtroCategoria == filme.categoria){
            //retorne o filme 
            return filme

        };

    });

    listarFilmes(filmesFiltrados);

};


//Selecionando menu
const categorias = document.querySelector(".categorias")

categorias.addEventListener("click", function(event){

    //CANCELAR EVENTO DO LINK => NÃO RECARREGAR A TELA
    event.preventDefault();
    
    //ONDE FOI CLICADO
    const categoriaSelecionada = event.target.text

    //VERIFICANDO PARA MOSTRAR TOFDAS
    if(categoriaSelecionada == "Mostrar Todos"){
    
        listarFilmes(filmes)
    }else{
        filtrarFilme(categoriaSelecionada)
    }
    

});