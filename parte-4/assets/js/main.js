/*
 * =========================================
 * MÓDULO PRINCIPAL - ONG MÃOS QUE AJUDAM (PARTE 4)
 * =========================================
 * Este ficheiro controla:
 * 1. O Sistema de SPA (Router)
 * 2. As Templates de Página (HTML dinâmico)
 * 3. A Lógica de UI (Menu, Modal)
 * 4. A Lógica do TEMA (Modo Escuro / Claro) (NOVO NA PARTE 4)
 * 5. A Validação Avançada de Formulários
 * =========================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const appRoot = document.getElementById('app-root');

    // =========================================
    // 1. MÓDULO: TEMPLATES DE PÁGINA
    // =========================================
    // (O mesmo da Parte 3 - O HTML das suas páginas está aqui)

    const templates = {

        /**
         * TEMPLATE: INÍCIO
         */
        inicio: `
            <!-- Secção Herói (Hero Section) -->
            <section class="hero">
                <div class="hero-content">
                    <h1 class="hero-title">A Mudar Vidas, Uma De Cada Vez</h1>
                    <p class="hero-subtitle">Junte-se à nossa comunidade de voluntários e faça a diferença. A sua ajuda é o nosso recurso mais valioso.</p>
                    <a href="#projetos" class="btn btn-primary btn-lg">Ver Projetos</a>
                    <a href="#cadastro" class="btn btn-secondary btn-lg">Seja Voluntário</a>
                </div>
            </section>

            <!-- Secção Sobre (Grid de 12 colunas) -->
            <section id="sobre">
                <div class="container">
                    <h2 role="heading" aria-level="2">Sobre a Nossa Organização</h2>
                    <div class="grid-container">
                        <!-- Coluna de Texto -->
                        <div class="col-lg-8">
                            <p>A "Mãos que Ajudam" é uma organização sem fins lucrativos dedicada a fornecer apoio essencial a comunidades carentes. Fundada em 2010, a nossa missão é combater a pobreza e promover a educação e a saúde através de ações diretas e sustentáveis.</p>
                            <p>Acreditamos no poder da solidariedade. Cada projeto é desenhado com a ajuda da própria comunidade, garantindo que o impacto seja real e duradouro. Contamos com centenas de voluntários que doam o seu tempo e talento para criar um futuro melhor.</p>
                            <ul class="list-styled">
                                <li>Mais de 5.000 pessoas impactadas diretamente.</li>
                                <li>25 projetos de infraestrutura concluídos.</li>
                                <li>+10.000 refeições distribuídas anualmente.</li>
                            </ul>
                        </div>
                        <!-- Coluna de Imagem -->
                        <div class="col-lg-4">
                            <img src="assets/images/p1.png" 
                                 alt="Equipa de voluntários da Mãos que Ajudam em ação." 
                                 class="img-fluid rounded shadow">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Secção de Contacto -->
            <section id="contacto" class="bg-light">
                <div class="container">
                    <h2>Informações de Contacto</h2>
                    <div class="grid-container">
                        <div class="col-md-6">
                            <address>
                                <strong>Mãos que Ajudam (Sede)</strong><br>
                                Rua da Solidariedade, Nº 123<br>
                                Lisboa, Portugal 1000-001<br>
                                <br>
                                <strong>Telefone:</strong> <a href="tel:+351210000000">(+351) 210 000 000</a><br>
                                <strong>Email:</strong> <a href="mailto:info@maosqueajudam.pt">info@maosqueajudam.pt</a>
                            </address>
                        </div>
                        <div class="col-md-6">
                            <p><strong>Horário de Atendimento:</strong></p>
                            <p>Segunda a Sexta-feira: 09:00 - 18:00<br>Sábado: 09:00 - 13:00 (Apenas voluntariado)</p>
                            <p>Siga-nos nas redes sociais para se manter atualizado sobre os nossos eventos e campanhas!</p>
                        </div>
                    </div>
                </div>
            </section>
        `,

        /**
         * TEMPLATE: PROJETOS
         */
        projetos: `
            <!-- Secção "Projetos" com Cards -->
            <section id="projetos">
                <div class="container">
                    <h2>Nossos Projetos Atuais</h2>
                    <p>Estes são os projetos onde a sua ajuda tem um impacto direto.</p>

                    <!-- Grid de 12 colunas para os Cards -->
                    <div class="grid-container">
                        
                        <!-- Card 1 -->
                        <div class="col-lg-4 col-md-6">
                            <article class="card">
                                <img src="assets/images/p2.png" 
                                     alt="Crianças a estudar num projeto de educação infantil." 
                                     class="card-img-top">
                                <div class="card-body">
                                    <h3 class="card-title">Projeto Aprender</h3>
                                    <p class="card-text">Levamos reforço escolar e material didático para crianças em zonas rurais, garantindo que tenham as ferramentas para construir o seu próprio futuro.</p>
                                </div>
                                <div class="card-footer">
                                    <span class="tag tag-primary">Educação</span>
                                    <span class="tag tag-secondary">Infantil</span>
                                </div>
                            </article>
                        </div>

                        <!-- Card 2 -->
                        <div class="col-lg-4 col-md-6">
                            <article class="card">
                                <img src="assets/images/vanp1.png" 
                                     alt="Médico voluntário a atender paciente na Caravana da Saúde." 
                                     class="card-img-top">
                                <div class="card-body">
                                    <h3 class="card-title">Caravana da Saúde</h3>
                                    <p class="card-text">Unimos médicos, enfermeiros e dentistas voluntários para levar atendimento básico a aldeias remotas sem acesso a centros de saúde.</p>
                                </div>
                                <div class="card-footer">
                                    <span class="tag tag-info">Saúde</span>
                                </div>
                            </article>
                        </div>

                    </div> <!-- Fim .grid-container -->
                </div> <!-- Fim .container -->
            </section>

            <!-- Secção "Como Doar" (com âncora ID) -->
            <section id="doar" class="bg-light">
                <div class="container">
                    <h2>Como Doar</h2>
                    <p>A sua doação, por mais pequena que seja, financia os nossos projetos e permite-nos continuar a ajudar. Somos 100% transparentes com as nossas contas.</p>
                    
                    <div class="alert alert-success">
                        <span class="badge">NOVO</span> Pode agora fazer a sua doação via MBWay!
                    </div>

                    <div class="grid-container">
                        <div class="col-md-6">
                            <h4>Doação Monetária</h4>
                            <p>Contribua para o nosso fundo geral ou escolha um projeto específico para apoiar.</p>
                            <ul>
                                <li><strong>MBWay:</strong> (+351) 910 000 000</li>
                                <li><strong>IBAN:</strong> PT50 0000 0000 0000 0000 0000</li>
                                <li><strong>PayPal:</strong> doar@maosqueajudam.pt</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h4>Doação de Bens</h4>
                            <p>Aceitamos alimentos não perecíveis, roupa em bom estado, material escolar e medicamentos (dentro da validade).</p>
                            <p><strong>Ponto de Recolha:</strong><br>
                            Rua da Solidariedade, Nº 123<br>
                            (Segunda a Sexta, 09:00 - 18:00)</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Secção "Voluntariado" (com âncora ID) -->
            <section id="voluntario">
                <div class="container">
                    <h2>Seja um Voluntário</h2>
                    <p>O tempo é o presente mais valioso. Se tem algumas horas por semana e quer fazer parte da mudança, junte-se a nós.</p>
                    <p>Procuramos pessoas para todas as áreas: distribuição de alimentos, apoio escolar, logística, marketing digital e muito mais. Não é necessária experiência prévia, apenas vontade de ajudar!</p>
                    <a href="#cadastro" class="btn btn-primary btn-lg">Quero ser Voluntário!</a>
                </div>
            </section>
        `,

        /**
         * TEMPLATE: CADASTRO
         */
        cadastro: `
            <section id="cadastro">
                <div class="container">
                    <div class="grid-container">
                        <!-- Coluna de Texto -->
                        <div class="col-lg-5">
                            <h2>Junte-se a Nós</h2>
                            <p>Preencha o formulário ao lado para se registar como voluntário. A nossa equipa entrará em contacto em breve para agendar uma breve sessão de boas-vindas.</p>
                            <p>Se tiver alguma dúvida, não hesite em <a href="mailto:info@maosqueajudam.pt">enviar-nos um email</a>.</p>
                            
                            <div class="alert alert-info">
                                <span class="badge">IMPORTANTE</span> Todos os voluntários devem ter 18 anos ou mais.
                            </div>
                        </div>

                        <!-- Coluna do Formulário -->
                        <div class="col-lg-7">
                            <form id="cadastro-form" class="form-styled" novalidate>
                                
                                <!-- Mensagem de erro global (Acessibilidade: role="alert") -->
                                <div id="form-error-message" class="alert alert-danger" style="display: none;" role="alert">
                                    Por favor, corrija os erros no formulário antes de submeter.
                                </div>
                                <div id="form-success-message" class="alert alert-success" style="display: none;" role="alert">
                                    Registo submetido com sucesso! Obrigado.
                                </div>

                                <!-- Agrupamento de Dados Pessoais -->
                                <fieldset>
                                    <legend>Dados Pessoais</legend>
                                    
                                    <div class="form-group">
                                        <!-- Acessibilidade: 'for' liga ao 'id' -->
                                        <label for="nome">Nome Completo</label>
                                        <input type="text" id="nome" name="nome" required minlength="3" autocomplete="name">
                                        <div class="form-error">O nome é obrigatório (mín. 3 letras).</div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" required autocomplete="email">
                                        <div class="form-error">Por favor, insira um email válido.</div>
                                    </div>

                                    <div class="grid-container form-grid">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="cpf">NIF / CPF (PT/BR)</label>
                                                <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
                                                <div class="form-error">O NIF/CPF é obrigatório.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="telefone">Telefone / Telemóvel</label>
                                                <input type="tel" id="telefone" name="telefone" required placeholder="(+351) 910 000 000" autocomplete="tel">
                                                <div class="form-error">O telefone é obrigatório.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="nascimento">Data de Nascimento</label>
                                        <input type="date" id="nascimento" name="nascimento" required autocomplete="bday">
                                        <div class="form-error" id="nascimento-error">A data é obrigatória. Deve ter mais de 18 anos.</div>
                                    </div>
                                    
                                    <div class="grid-container form-grid">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="password">Criar Senha</label>
                                                <input type="password" id="password" name="password" required minlength="8" autocomplete="new-password">
                                                <div class="form-error">A senha deve ter no mín. 8 caracteres.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="confirm-password">Confirmar Senha</label>
                                                <input type="password" id="confirm-password" name="confirm-password" required autocomplete="new-password">
                                                <div class="form-error" id="confirm-password-error">As senhas não coincidem.</div>
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>
                                
                                <!-- Agrupamento de Endereço -->
                                <fieldset>
                                    <legend>Endereço (Morada)</legend>

                                    <div class="grid-container form-grid">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <label for="endereco">Rua e Número</label>
                                                <input type="text" id="endereco" name="endereco" required autocomplete="street-address">
                                                <div class="form-error">O endereço é obrigatório.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="cep">Código Postal</label>
                                                <input type="text" id="cep" name="cep" required placeholder="0000-000" autocomplete="postal-code">
                                                <div class="form-error">O Cód. Postal é obrigatório.</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="grid-container form-grid">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="cidade">Cidade</label>
                                                <input type="text" id="cidade" name="cidade" required autocomplete="address-level2">
                                                <div class="form-error">A cidade é obrigatória.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="estado">Distrito / Estado</label>
                                                <input type="text" id="estado" name="estado" required autocomplete="address-level1">
                                                <div class="form-error">O distrito/estado é obrigatório.</div>
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>

                                <div class="form-group">
                                    <input type="checkbox" id="termos" name="termos" required>
                                    <label for="termos">Declaro que li e aceito os termos de voluntariado.</label>
                                    <div class="form-error">Tem de aceitar os termos.</div>
                                </div>

                                <button type="submit" class="btn btn-primary btn-lg">Submeter Registo</button>
                            </form>
                        </div> <!-- Fim .col-lg-7 -->
                    </div> <!-- Fim .grid-container -->
                </div> <!-- Fim .container -->
            </section>
        `
    }; // Fim do objeto 'templates'


    // =========================================
    // 2. MÓDULO: ROUTER (O "Cérebro" da SPA)
    // =========================================
    // (O mesmo da Parte 3)
    
    function router() {
        let hash = window.location.hash || '#inicio';
        const activeLinks = document.querySelectorAll('.nav-link.active');
        activeLinks.forEach(link => link.classList.remove('active'));

        if (hash.startsWith('#projetos-')) {
            const anchorId = hash.split('-')[1];
            loadTemplate('projetos', () => {
                const element = document.getElementById(anchorId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
            // Ativa o link "Projetos"
            document.querySelector('.nav-link[href="#projetos"]').classList.add('active');
            return;
        }

        const route = hash.substring(1);
        loadTemplate(route);

        // Ativa o link correspondente
        const activeLink = document.querySelector(`.nav-link[href="${hash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    function loadTemplate(templateName, callback) {
        if (!appRoot) {
            console.error('Erro: Elemento <main id="app-root"> não encontrado.');
            return;
        }
        const templateHtml = templates[templateName];

        if (templateHtml) {
            appRoot.innerHTML = templateHtml;
            if (templateName === 'cadastro') {
                initFormValidation();
            }
            if (callback && typeof callback === 'function') {
                callback();
            }
        } else {
            appRoot.innerHTML = templates['inicio'];
            document.querySelector('.nav-link[href="#inicio"]').classList.add('active');
        }

        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) {
            mobileNav.classList.remove('active');
        }
    }


    // =========================================
    // 3. MÓDULO: LÓGICA DE UI (Menu, Modal)
    // =========================================
    // (O mesmo da Parte 3)
    
    function initUIComponents() {
        const hamburgerBtn = document.getElementById('hamburger-menu');
        const mobileNav = document.getElementById('mobile-nav');
        const mobileNavCloseBtn = document.getElementById('mobile-nav-close');

        if (hamburgerBtn && mobileNav && mobileNavCloseBtn) {
            hamburgerBtn.addEventListener('click', () => {
                mobileNav.classList.add('active');
                hamburgerBtn.setAttribute('aria-expanded', 'true');
            });
            mobileNavCloseBtn.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                hamburgerBtn.focus(); // Acessibilidade: Devolve o foco ao botão
            });
            mobileNav.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    mobileNav.classList.remove('active');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                    hamburgerBtn.focus();
                }
            });
        }

        const modal = document.getElementById('welcome-modal');
        const closeModalSpan = document.getElementById('modal-close');
        const closeModalBtn = document.getElementById('modal-close-btn');

        if (modal && closeModalSpan && closeModalBtn) {
            if (!localStorage.getItem('modalWasShown')) {
                setTimeout(() => {
                    modal.classList.add('active');
                    localStorage.setItem('modalWasShown', 'true');
                }, 1000);
            }
            const closeModal = () => modal.classList.remove('active');
            closeModalSpan.addEventListener('click', closeModal);
            closeModalBtn.addEventListener('click', closeModal);
            window.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }
    }


    // =========================================
    // 4. MÓDULO: LÓGICA DO TEMA (Modo Escuro)
    // =========================================
    // (NOVO NA PARTE 4)
    
    function initThemeSwitcher() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeLabel = document.getElementById('theme-label');
        const osDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Função para aplicar o tema (luz ou escuro)
        function applyTheme(theme) {
            if (theme === 'dark') {
                document.body.classList.remove('theme-light');
                document.body.classList.add('theme-dark');
                themeToggle.setAttribute('aria-checked', 'true');
                themeLabel.textContent = 'Modo Claro';
            } else {
                document.body.classList.remove('theme-dark');
                document.body.classList.add('theme-light');
                themeToggle.setAttribute('aria-checked', 'false');
                themeLabel.textContent = 'Modo Escuro';
            }
        }

        // Função para carregar o tema salvo
        function loadTheme() {
            // 1. Verifica se o utilizador já salvou uma preferência
            let savedTheme = localStorage.getItem('theme');
            
            // 2. Se não, verifica a preferência do Sistema Operativo
            if (!savedTheme) {
                savedTheme = osDark.matches ? 'dark' : 'light';
            }
            
            applyTheme(savedTheme);
        }

        // "Ouve" o clique no botão
        themeToggle.addEventListener('click', () => {
            let newTheme = document.body.classList.contains('theme-light') ? 'dark' : 'light';
            applyTheme(newTheme);
            // Salva a preferência
            localStorage.setItem('theme', newTheme);
        });

        // "Ouve" se o utilizador mudar o tema do SO (ex: pôr do sol)
        osDark.addEventListener('change', (e) => {
            // Só muda se o utilizador não tiver uma preferência salva
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });

        // Carrega o tema quando a app inicia
        loadTheme();
    }


    // =========================================
    // 5. MÓDULO: VALIDAÇÃO DE FORMULÁRIO (Avançado)
    // =========================================
    // (O mesmo da Parte 3)
    
    function initFormValidation() {
        const form = document.getElementById('cadastro-form');
        if (!form) return;

        const inputs = form.querySelectorAll('input[required], select[required]');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const nascimento = document.getElementById('nascimento');
        const cpfInput = document.getElementById('cpf');
        const telefoneInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');

        const globalErrorMsg = document.getElementById('form-error-message');
        const globalSuccessMsg = document.getElementById('form-success-message');
        const confirmPasswordError = document.getElementById('confirm-password-error');
        const nascimentoError = document.getElementById('nascimento-error');
        
        function applyMask(mask, inputEl) {
            if (!inputEl) return;
            inputEl.addEventListener('keydown', (e) => {
                if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
                let i = inputEl.value.length;
                let maskChar = mask[i];
                if (maskChar && maskChar !== '0') {
                    if (e.key !== maskChar) {
                        inputEl.value += maskChar;
                        i = inputEl.value.length;
                        maskChar = mask[i];
                    }
                }
                if (maskChar === '0' && !/[0-9]/.test(e.key)) e.preventDefault();
                if (i >= mask.length) e.preventDefault();
            });
        }
        applyMask('000.000.000-00', cpfInput);
        applyMask('0000-000', cepInput);
        applyMask('(+000) 000 000 000', telefoneInput);

        function validateConsistency() {
            let isConsistent = true;
            if (password.value !== confirmPassword.value) {
                confirmPassword.parentElement.classList.add('invalid');
                confirmPasswordError.textContent = "As senhas não coincidem.";
                isConsistent = false;
            } else {
                if (confirmPassword.value.length > 0) {
                     confirmPassword.parentElement.classList.remove('invalid');
                }
            }
            if (nascimento.value) {
                const hoje = new Date();
                const dataNasc = new Date(nascimento.value);
                let idade = hoje.getFullYear() - dataNasc.getFullYear();
                const m = hoje.getMonth() - dataNasc.getMonth();
                if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
                    idade--;
                }
                if (idade < 18) {
                    nascimento.parentElement.classList.add('invalid');
                    nascimentoError.textContent = "Tem de ter pelo menos 18 anos para se registar.";
                    isConsistent = false;
                } else {
                    nascimento.parentElement.classList.remove('invalid');
                    nascimentoError.textContent = "A data é obrigatória.";
                }
            }
            return isConsistent;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            globalErrorMsg.style.display = 'none';
            globalSuccessMsg.style.display = 'none';
            const isConsistent = validateConsistency();
            const isValid = form.checkValidity();

            if (isValid && isConsistent) {
                globalSuccessMsg.style.display = 'block';
                form.reset();
                inputs.forEach(input => input.parentElement.classList.remove('invalid'));
            } else {
                globalErrorMsg.style.display = 'block';
                inputs.forEach(input => {
                    if (!input.validity.valid) {
                        input.parentElement.classList.add('invalid');
                    } else {
                        input.parentElement.classList.remove('invalid');
                    }
                });
                validateConsistency();
            }
        });

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (!input.validity.valid) {
                    input.parentElement.classList.add('invalid');
                } else {
                    input.parentElement.classList.remove('invalid');
                }
                if (input.id === 'password' || input.id === 'confirm-password') validateConsistency();
                if (input.id === 'nascimento') validateConsistency();
            });
        });
    }


    // =========================================
    // 6. MÓDULO: INICIALIZAÇÃO DA APP (Versão Final)
    // =========================================
    
    function initApp() {
        // 1. Ativa os componentes de UI globais (Menu, Modal)
        initUIComponents();

        // 2. NOVO: Ativa o seletor de TEMA
        initThemeSwitcher();

        // 3. Define os "ouvintes" do Router
        window.addEventListener('hashchange', router);
        window.addEventListener('load', router);
    }

    // Arranca a aplicação
    initApp();

}); // Fim do 'DOMContentLoaded'