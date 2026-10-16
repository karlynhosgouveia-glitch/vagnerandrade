document.addEventListener("DOMContentLoaded", () => {
    // 1. Controle do menu responsivo (Hambúrguer)
    const mobileMenu = document.getElementById("mobile-menu");
    const navbar = document.getElementById("navbar");

    mobileMenu.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Fecha o menu ao clicar em algum link no mobile
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });

    // 2. Efeito de Zoom e Esmaecimento (Hover) na Galeria
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            // Aplica o zoom na imagem que recebeu o mouse
            item.style.transform = "scale(1.08)";
            item.style.filter = "brightness(1)";

            // Esmaece (diminui o brilho) das outras imagens irmãs na galeria
            galleryItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.filter = "brightness(0.4)";
                }
            });
        });

        item.addEventListener("mouseleave", () => {
            // Restaura o estado normal de todas as imagens ao retirar o mouse
            galleryItems.forEach(otherItem => {
                otherItem.style.transform = "scale(1)";
                otherItem.style.filter = "brightness(1)";
            });
        });
    });
});
