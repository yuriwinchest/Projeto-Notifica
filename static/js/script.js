// Variável global para o índice da página atual
let currentPageIndex = 0;

// Função para alternar o menu de regionais
function toggleRegionalMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu) {
        // Alterna a exibição do menu (se visível, esconde; se escondido, exibe)
        menu.style.display = (menu.style.display === "block" || menu.style.display === "") ? "none" : "block";
    }
}


// Função para carregar o conteúdo de uma página
function loadContent(page) {
    fetch(`/templates/${page}`)
        .then(response => response.text())
        .then(data => {
            const contentArea = document.getElementById('content-area');
            if (contentArea) {
                contentArea.innerHTML = data;
            } else {
                console.error('Elemento com ID "content-area" não encontrado.');
            }
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
}

// Função para ocultar o menu de regionais ao carregar a página
window.onload = function() {
    const regionalMenu = document.getElementById('regional-menu');
    if (regionalMenu) {
        regionalMenu.style.display = 'none'; // Oculta o menu por padrão
    }
    showCity('brasilia'); // Exibe a cidade padrão
}

// Função para exibir e esconder tooltip
function showTooltip(element) {
    var tooltip = element.querySelector('.tooltip-text');
    if (tooltip) {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    }
}

function hideTooltip(element) {
    var tooltip = element.querySelector('.tooltip-text');
    if (tooltip) {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    }
}

// Função para filtrar as tabelas
function filterTable(status) {
    const tables = document.querySelectorAll('.tributos-table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.style.display = (status === 'todos' || row.getAttribute('data-status') === status) ? '' : 'none';
        });
    });
}

// Função para navegar para a próxima página
function navigateToNext() {
    const pages = [
        'cidades_centro_oeste.html',
        'cidades_sudeste.html',
        'cidades_nordeste.html',
        'cidades_norte.html',
        'cidades_sul.html'
    ];
    currentPageIndex = (currentPageIndex + 1) % pages.length; // Volta ao início se chegar ao fim
    loadContent(pages[currentPageIndex]);
}

// Função para navegar para a página anterior
function navigateToPrevious() {
    const pages = [
        'cidades_centro_oeste.html',
        'cidades_sudeste.html',
        'cidades_nordeste.html',
        'cidades_norte.html',
        'cidades_sul.html'
    ];
    currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length; // Vai para o fim se estiver no início
    loadContent(pages[currentPageIndex]);
}

// Função para voltar para a página inicial
function goToHome() {
    const regionalMenu = document.getElementById('regional-menu');
    if (regionalMenu) {
        regionalMenu.style.display = 'none'; // Oculta o menu de regionais ao voltar para a home
    }
    window.location.href = 'home.html'; // Redireciona para home.html
}

// Função para mostrar a cidade selecionada
function showCity(cityId) {
    const sections = document.querySelectorAll('.city-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Esconde todas as seções
    });

    const selectedSection = document.getElementById(cityId);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // Exibe a seção correspondente
    }

    const tributosSection = document.getElementById('tributos-' + cityId); // Seção de tributos correspondente
    if (tributosSection) {
        tributosSection.style.display = 'block'; // Exibe a tabela de tributos específica da cidade
    }
}
