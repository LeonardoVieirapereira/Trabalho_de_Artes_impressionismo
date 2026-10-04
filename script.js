// Navegação do estilo Single Page Application (SPA)
const navButtons = document.querySelectorAll('.nav-btn');
const pageSections = document.querySelectorAll('.page-section');

function navigateTo(targetId) {
    pageSections.forEach(section => {
        section.classList.remove('active');
    });

    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const activeBtn = document.querySelector(`.nav-btn[href="#${targetId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('href').replace('#', '');
        navigateTo(targetId);
    });
});

// Modal / Pop-up de Detalhes da Galeria
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

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Alternador de Temas
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('alt-theme');
    });
                        }
