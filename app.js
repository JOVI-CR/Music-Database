function buscar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e o converte para minúsculas
    // para facilitar a comparação, ignorando maiúsculas e minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Se estiver vazio, exibe uma mensagem informando que é necessário inserir um dado
      section.innerHTML = "<p>Insira um dado</p>";
      // Centraliza a mensagem na seção
      section.style.display = 'flex';
      section.style.alignItems = 'center';
      // Interrompe a função, pois não há dados para pesquisar
      return null;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item (dado) no array de dados (assumindo que 'dados' esteja definido em outro lugar)
    for (let dado of dados) {
      // Converte o título, descrição e tags para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar uma correspondência, adiciona um novo item de resultado à string 'resultados'
        // O HTML construído aqui cria um elemento div com as informações do dado encontrado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href=${dado.link} target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao} </p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem informando que nada foi encontrado
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }