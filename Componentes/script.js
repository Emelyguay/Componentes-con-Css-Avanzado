// script.js o dentro de un <script> al final del body
document.addEventListener('DOMContentLoaded', () => {
    const primaryButton = document.querySelector('.btn-primary');

    if (primaryButton) {
        primaryButton.addEventListener('click', () => {
            alert('¡Hiciste clic en el botón primario!');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    if (navbarToggle && navbarLinks) {
        navbarToggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('is-open'); // Agrega/quita la clase para mostrar/ocultar
            navbarToggle.setAttribute('aria-expanded', navbarLinks.classList.contains('is-open'));
        });

        // Opcional: Cerrar menú al hacer clic en un enlace (para single-page apps)
        navbarLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarLinks.classList.contains('is-open')) {
                    navbarLinks.classList.remove('is-open');
                    navbarToggle.setAttribute('aria-expanded', false);
                }
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal-btn');
    const modal = document.getElementById('modal');
    const modalCloseBtn = modal ? modal.querySelector('.modal-close') : null;
    const modalCancelBtn = modal ? modal.querySelector('.modal-footer .btn-secondary') : null;

    function openModal() {
        if (modal) {
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden'; // Evita scroll en el body
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('is-open');
            document.body.style.overflow = ''; // Restaura scroll
        }
    }

    if (openModalBtn) {
        openModalBtn.addEventListener('click', openModal);
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalCancelBtn) {
        modalCancelBtn.addEventListener('click', closeModal);
    }

    // Cerrar modal al hacer clic fuera del contenido del modal
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) { // Si el clic es directamente en el overlay
                closeModal();
            }
        });
    }

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentAccordionItem = header.closest('.accordion-item');
            const currentContent = currentAccordionItem.querySelector('.accordion-content');

            // Cierra todos los acordeones abiertos excepto el actual
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== currentAccordionItem) {
                    item.querySelector('.accordion-header').classList.remove('is-open');
                    item.querySelector('.accordion-content').classList.remove('is-open');
                }
            });

            // Alterna la clase 'is-open' en el header y el contenido del acordeón actual
            header.classList.toggle('is-open');
            currentContent.classList.toggle('is-open');

            // Ajusta el max-height para la transición suave
            if (currentContent.classList.contains('is-open')) {
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
            } else {
                currentContent.style.maxHeight = '0';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remover 'active' de todos los items y paneles
            tabItems.forEach(i => i.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Añadir 'active' al item clicado
            item.classList.add('active');

            // Encontrar el índice del item clicado y activar el panel correspondiente
            const index = Array.from(tabItems).indexOf(item);
            if (tabPanels[index]) {
                tabPanels[index].classList.add('active');
            }
        });
    });
});