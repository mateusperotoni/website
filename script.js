document.addEventListener('DOMContentLoaded', () => {

    // Renderiza os ícones do Lucide (substitui os <i> pelos SVGs correspondentes)
    lucide.createIcons();

    // 1. Efeito de Scroll no Header
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Lógica do FAQ (Accordion)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Verifica se o item clicado já está ativo
            const isActive = item.classList.contains('active');

            // Fecha todos os itens abertos
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Se o item clicado não estava ativo, abra-o
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});