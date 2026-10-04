// Navegação do estilo "Single Page Application" (SPA)
const navButtons = document.querySelectorAll('.nav-btn');
const pageSections = document.querySelectorAll('.page-section');

function navigateTo(targetId) {
    // Esconde todas as seções
    pageSections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove estado ativo dos botões do menu
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Ativa a seção selecionada
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Marca o botão do menu como ativo
    const activeBtn = document.querySelector(`.nav-btn[href="#${targetId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Adiciona eventos de clique nos links da Navbar
navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('href').replace('#', '');
        navigateTo(targetId);
    });
});

// Lógica da Janela Pop-up (Modal) para Detalhes
const modal = document.getElementById('artModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalDesc = document.getElementById('modalDesc');

function openModal(buttonElement) {
    const card = buttonElement.closest('.card');
    
    modalImg.src = card.querySelector('img').src;
    modalTitle.textContent = card.dataset.title;
    modalAuthor.textContent = card.dataset.author;
    modalDesc.textContent = card.dataset.desc;

    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Fechar Modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Alternador de Temas Dinâmico
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('alt-theme');
});
