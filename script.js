const produtos = [
    {
      nome: "Controle Bluetooth",
      preco: "R$ 49,90",
      descricao: "Controle compatível com Android, PC e iOS.",
      imagem: "https://m.media-amazon.com/images/I/51J-XPv1TRL._AC_SX679_.jpg"
    },
    {
      nome: "Smartwatch",
      preco: "R$ 79,90",
      descricao: "Relógio inteligente com monitor cardíaco e Bluetooth.",
      imagem: "https://m.media-amazon.com/images/I/71VjK6hi8zL._AC_SX679_.jpg"
    },
    {
      nome: "Fone de Ouvido Bluetooth",
      preco: "R$ 39,90",
      descricao: "Fone com cancelamento de ruído e microfone embutido.",
      imagem: "https://m.media-amazon.com/images/I/51hHNsZLdoL._AC_SX679_.jpg"
    }
  ];
  
  const lista = document.getElementById("lista-produtos");
  const popup = document.getElementById("popup");
  
  function exibirProdutos() {
    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.className = "produto";
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="info">
          <h2>${produto.nome}</h2>
          <p>${produto.descricao}</p>
          <button onclick="abrirPopup('${produto.nome}', '${produto.preco}', '${produto.descricao}', '${produto.imagem}')">Comprar</button>
        </div>
      `;
      lista.appendChild(card);
    });
  }
  
  function abrirPopup(nome, preco, descricao, imagem) {
    document.getElementById("popup-nome").textContent = nome;
    document.getElementById("popup-preco").textContent = preco;
    document.getElementById("popup-desc").textContent = descricao;
    document.getElementById("popup-img").src = imagem;
    popup.style.display = "flex";
    console.log(`Produto exibido: ${nome}`);
  }
  
  function fecharPopup() {
    popup.style.display = "none";
  }
  
  // Inicializa a página
  exibirProdutos();
  