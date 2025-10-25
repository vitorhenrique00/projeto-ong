/* ========================================
   MÓDULO: NAVEGAÇÃO
   Descrição: Controla o menu hambúrguer (mobile).
   ========================================
*/
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona os elementos do DOM
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('mobile-nav-close');

    // Verifica se os elementos existem (para não dar erro em páginas que não os tenham)
    if (hamburger && mobileNav && closeBtn) {
        
        // Função para abrir o menu
        const openNav = () => {
            mobileNav.classList.add('open');
        };

        // Função para fechar o menu
        const closeNav = () => {
            mobileNav.classList.remove('open');
        };

        // Event Listeners
        hamburger.addEventListener('click', openNav);
        closeBtn.addEventListener('click', closeNav);
        
        // Fecha o menu se clicar num link dentro dele (para a navegação mobile)
        mobileNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeNav);
        });
    }

    /* ========================================
       MÓDULO: MODAL (Pop-up de Boas-Vindas)
       Descrição: Controla o modal na página inicial.
       ========================================
    */
    const modalOverlay = document.getElementById('welcome-modal');
    const closeModal = document.getElementById('modal-close-btn');

    if (modalOverlay && closeModal) {
        
        // Abrir o modal (apenas na página inicial)
        // Usamos um pequeno atraso (1s) para não ser tão intrusivo.
        setTimeout(() => {
            modalOverlay.classList.add('open');
        }, 1000);

        // Função para fechar o modal
        const closeModalFunc = () => {
            modalOverlay.classList.remove('open');
        };

        // Fechar ao clicar no botão 'X'
        closeModal.addEventListener('click', closeModalFunc);

        // Fechar ao clicar fora do modal (no overlay escuro)
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModalFunc();
            }
        });
    }

    /* ========================================
       MÓDULO: MÁSCARAS DE FORMULÁRIO
       Descrição: Aplica máscaras de input (CPF, Tel, CEP) na pág. de cadastro.
       ========================================
    */
    
    // Função genérica para aplicar máscara (baseada em padrão)
    // Ex: mask(input, '###.###.###-##')
    const applyMask = (input, mask) => {
        if (!input) return; // Se o input não existir na página, não faz nada
        
        input.addEventListener('input', (e) => {
            const value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
            let formattedValue = "";
            let valueIndex = 0;

            // Itera pela máscara
            for (let i = 0; i < mask.length; i++) {
                if (valueIndex >= value.length) break;

                if (mask[i] === '#') {
                    // Se for '#', usa o dígito do utilizador
                    formattedValue += value[valueIndex];
                    valueIndex++;
                } else {
                    // Se for um caractere de máscara (ex: '.', '-'), usa-o
                    formattedValue += mask[i];
                }
            }
            e.target.value = formattedValue;
        });
    };

    // Função específica para máscara de telefone (lida com 10 ou 11 dígitos)
    const applyPhoneMask = (input) => {
        if (!input) return;
        
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, "");
            value = value.substring(0, 11); // Limita a 11 dígitos
            
            if (value.length > 10) {
                // (##) #####-####
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 6) {
                // (##) ####-####
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                // (##) ####
                value = value.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
            } else if (value.length > 0) {
                // (##
                value = value.replace(/^(\d{0,2}).*/, '($1');
            }
            e.target.value = value;
        });
    };

    // Seleciona os campos de input da página de cadastro
    const cpfInput = document.getElementById('cpf');
    const telInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    // Aplica as máscaras
    applyMask(cpfInput, '###.###.###-##');
    applyPhoneMask(telInput);
    applyMask(cepInput, '#####-###');

});

