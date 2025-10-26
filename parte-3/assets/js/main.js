/*
 * =========================================
 * MÓDULO PRINCIPAL - ONG MÃOS QUE AJUDAM (PARTE 3)
 * =========================================
 * Este ficheiro controla:
 * 1. O Sistema de SPA (Router)
 * 2. As Templates de Página (HTML dinâmico)
 * 3. A Lógica de UI (Menu, Modal)
 * 4. A Validação Avançada de Formulários
 * =========================================
 */

// Espera que o HTML esteja todo carregado para começar a executar o JS
document.addEventListener('DOMContentLoaded', () => {
    
    // Elemento principal onde o conteúdo das páginas será "injetado"
    const appRoot = document.getElementById('app-root');

    // =========================================
    // 1. MÓDULO: TEMPLATES DE PÁGINA
    // =========================================
    // Aqui guardamos o HTML das nossas "páginas" como strings (templates).
    // Usamos o acento grave (`) para permitir strings com múltiplas linhas.

    const templates = {

        /**
         * TEMPLATE: INÍCIO
         */
        inicio: `
            <!-- Secção Herói (Hero Section) -->
            <section class="hero">
                <div class="hero-content">
                    <h1 class="hero-title">A Mudar Vidas, Uma De Cada Vez</h1>
                    <p class_="hero-subtitle">Junte-se à nossa comunidade de voluntários e faça a diferença. A sua ajuda é o nosso recurso mais valioso.</p>
                    <a href="#projetos" class="btn btn-primary btn-lg">Ver Projetos</a>
                    <a href="#cadastro" class="btn btn-secondary btn-lg">Seja Voluntário</a>
                </div>
            </section>

            <!-- Secção Sobre (Grid de 12 colunas) -->
            <section id="sobre">
                <div class="container">
                    <h2>Sobre a Nossa Organização</h2>
                    <div class="grid-container">
                        <!-- Coluna de Texto (Ocupa 8 de 12 colunas no desktop) -->
                        <div class="col-lg-8">
                            <p>A "Mãos que Ajudam" é uma organização sem fins lucrativos dedicada a fornecer apoio essencial a comunidades carentes. Fundada em 2010, a nossa missão é combater a pobreza e promover a educação e a saúde através de ações diretas e sustentáveis.</p>
                            <p>Acreditamos no poder da solidariedade. Cada projeto é desenhado com a ajuda da própria comunidade, garantindo que o impacto seja real e duradouro. Contamos com centenas de voluntários que doam o seu tempo e talento para criar um futuro melhor.</p>
                            <ul class="list-styled">
                                <li>Mais de 5.000 pessoas impactadas diretamente.</li>
                                <li>25 projetos de infraestrutura concluídos.</li>
                                <li>+10.000 refeições distribuídas anualmente.</li>
                            </ul>
                        </div>
                        <!-- Coluna de Imagem (Ocupa 4 de 12 colunas no desktop) -->
                        <div class="col-lg-4">
                            <img src="assets/images/p1.png" 
                                 alt="Equipa de voluntários da Mãos que Ajudam" 
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
                                <!-- Tag 'tel' para ligar em dispositivos móveis -->
                                <strong>Telefone:</strong> <a href="tel:+351210000000">(+351) 210 000 000</a><br>
                                <!-- Tag 'mailto' para abrir cliente de email -->
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
                                     alt="Crianças a estudar num projeto de educação" 
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

                        <!-- Card 3 -->
                        <div class="col-lg-4 col-md-6">
                            <article class="card">
                                <img src="assets/images/vanp1.png" 
                                     alt="Médico voluntário a atender paciente" 
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
                    
                    <!-- Alert/Badge de Exemplo -->
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
                        <!-- Coluna de Texto (Ocupa 5 de 12 colunas) -->
                        <div class="col-lg-5">
                            <h2>Junte-se a Nós</h2>
                            <p>Preencha o formulário ao lado para se registar como voluntário. A nossa equipa entrará em contacto em breve para agendar uma breve sessão de boas-vindas.</p>
                            <p>Se tiver alguma dúvida, não hesite em <a href="mailto:info@maosqueajudam.pt">enviar-nos um email</a>.</p>
                            
                            <!-- Alert/Badge de Exemplo -->
                            <div class="alert alert-info">
                                <span class="badge">IMPORTANTE</span> Todos os voluntários devem ter 18 anos ou mais.
                            </div>
                        </div>

                        <!-- Coluna do Formulário (Ocupa 7 de 12 colunas) -->
                        <div class="col-lg-7">
                            <!-- O 'id' do formulário é usado pelo JS para validação -->
                            <form id="cadastro-form" class="form-styled" novalidate>
                                
                                <!-- Mensagem de erro global (escondida por padrão) -->
                                <div id="form-error-message" class="alert alert-danger" style="display: none;">
                                    Por favor, corrija os erros no formulário antes de submeter.
                                </div>
                                <div id="form-success-message" class="alert alert-success" style="display: none;">
                                    Registo submetido com sucesso! Obrigado.
                                </div>

                                <!-- Agrupamento de Dados Pessoais -->
                                <fieldset>
                                    <legend>Dados Pessoais</legend>
                                    
                                    <div class="form-group">
                                        <label for="nome">Nome Completo</label>
                                        <input type="text" id="nome" name="nome" required minlength="3">
                                        <div class="form-error">O nome é obrigatório (mín. 3 letras).</div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" required>
                                        <div class="form-error">Por favor, insira um email válido.</div>
                                    </div>

                                    <!-- Grid para campos lado a lado -->
                                    <div class="grid-container form-grid">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="cpf">NIF / CPF (PT/BR)</label>
                                                <!-- O ID é usado pelo JS para a máscara -->
                                                <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
                                                <div class="form-error">O NIF/CPF é obrigatório.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="telefone">Telefone / Telemóvel</label>
                                                <!-- O ID é usado pelo JS para a máscara -->
                                                <input type="tel" id="telefone" name="telefone" required placeholder="(+351) 910 000 000">
                                                <div class="form-error">O telefone é obrigatório.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="nascimento">Data de Nascimento</label>
                                        <input type="date" id="nascimento" name="nascimento" required>
                                        <!-- O JS adicionará um erro de idade aqui -->
                                        <div class="form-error" id="nascimento-error">A data é obrigatória. Deve ter mais de 18 anos.</div>
                                    </div>
                                    
                                    <!-- Validação de Consistência (Requisito Parte 3) -->
                                    <div class="grid-container form-grid">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="password">Criar Senha</label>
                                                <input type="password" id="password" name="password" required minlength="8">
                                                <div class="form-error">A senha deve ter no mín. 8 caracteres.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="confirm-password">Confirmar Senha</label>
                                                <input type="password" id="confirm-password" name="confirm-password" required>
                                                <!-- O JS adicionará um erro de consistência aqui -->
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
                                                <input type="text" id="endereco" name="endereco" required>
                                                <div class="form-error">O endereço é obrigatório.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="cep">Código Postal</label>
                                                <!-- O ID é usado pelo JS para a máscara -->
                                                <input type="text" id="cep" name="cep" required placeholder="0000-000">
                                                <div class="form-error">O Cód. Postal é obrigatório.</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="grid-container form-grid">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="cidade">Cidade</label>
                                                <input type="text" id="cidade" name="cidade" required>
                                                <div class="form-error">A cidade é obrigatória.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="estado">Distrito / Estado</label>
                                                <input type="text" id="estado" name="estado" required>
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
    
    /**
     * Função principal do Router.
     * Lê o "hash" (ex: #projetos) da URL e decide qual template mostrar.
     */
    function router() {
        // Pega o "hash" da URL (ex: #projetos)
        // Se não houver hash, define como #inicio
        let hash = window.location.hash || '#inicio';

        // Lógica para os links do dropdown (ex: #projetos-doar)
        if (hash.startsWith('#projetos-')) {
            // Se for um link de âncora para projetos, carrega a página de projetos
            // e depois rola para a secção correta (ex: #doar)
            
            // Extrai o ID da âncora (ex: "doar" ou "voluntario")
            const anchorId = hash.split('-')[1]; // Pega "doar" de "#projetos-doar"
            
            // Carrega o template 'projetos'
            loadTemplate('projetos', () => {
                // Esta é uma "callback function". Só é executada DEPOIS
                // do template estar carregado.
                // Agora que o HTML está na página, podemos rolar para a âncora.
                const element = document.getElementById(anchorId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
            return; // Para a execução aqui
        }

        // Limpa o hash para obter o nome da rota (ex: 'inicio', 'projetos')
        const route = hash.substring(1); // Remove o '#'

        // Carrega o template correspondente à rota
        loadTemplate(route);
    }

    /**
     * Carrega uma template dentro do <main id="app-root">
     * @param {string} templateName - O nome da template (ex: 'inicio')
     * @param {function} [callback] - (Opcional) Função a ser executada após o carregamento
     */
    function loadTemplate(templateName, callback) {
        if (!appRoot) {
            console.error('Erro: Elemento <main id="app-root"> não encontrado.');
            return;
        }

        // Procura a template no nosso objeto 'templates'
        const templateHtml = templates[templateName];

        if (templateHtml) {
            // Encontrou! "Injeta" o HTML da template dentro do <main>
            appRoot.innerHTML = templateHtml;

            // Ativa a lógica específica para essa página
            if (templateName === 'cadastro') {
                initFormValidation(); // Ativa a validação só na pág. de cadastro
            }

            // Se uma função callback foi passada, executa-a agora
            if (callback && typeof callback === 'function') {
                callback();
            }

        } else {
            // Não encontrou a rota (ex: #pagina-que-nao-existe)
            // Carrega a template 'inicio' como padrão
            appRoot.innerHTML = templates['inicio'];
        }

        // Fecha o menu mobile (caso esteja aberto) após carregar a nova página
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) {
            mobileNav.classList.remove('active');
        }
    }


// =========================================
    // 3. MÓDULO: LÓGICA DE UI (Menu, Modal)
    // =========================================
    // Este código é o mesmo da Parte 2, mas agora
    // é executado pela nossa função initApp().
    
    function initUIComponents() {
        
        // --- Lógica do Menu Hambúrguer ---
        const hamburgerBtn = document.getElementById('hamburger-menu');
        const mobileNav = document.getElementById('mobile-nav');
        const mobileNavCloseBtn = document.getElementById('mobile-nav-close');

        if (hamburgerBtn && mobileNav && mobileNavCloseBtn) {
            // Abrir menu
            hamburgerBtn.addEventListener('click', () => {
                mobileNav.classList.add('active');
            });

            // Fechar menu
            mobileNavCloseBtn.addEventListener('click', () => {
                mobileNav.classList.remove('active');
            });

            // Fechar o menu se clicar num link (importante para SPA)
            mobileNav.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    mobileNav.classList.remove('active');
                }
            });
        }

        // --- Lógica do Modal de Boas-Vindas ---
        const modal = document.getElementById('welcome-modal');
        const closeModalSpan = document.getElementById('modal-close');
        const closeModalBtn = document.getElementById('modal-close-btn');

        if (modal && closeModalSpan && closeModalBtn) {
            // Mostrar o modal (apenas na primeira visita, usando localStorage)
            if (!localStorage.getItem('modalWasShown')) {
                // Atraso de 1 segundo para não ser muito intrusivo
                setTimeout(() => {
                    modal.classList.add('active');
                    localStorage.setItem('modalWasShown', 'true'); // Marca como visto
                }, 1000);
            }

            // Fechar no 'X'
            closeModalSpan.addEventListener('click', () => {
                modal.classList.remove('active');
            });

            // Fechar no botão "Explorar"
            closeModalBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });

            // Fechar se clicar fora do modal
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }
    }


    // =========================================
    // 4. MÓDULO: VALIDAÇÃO DE FORMULÁRIO (Avançado)
    // =========================================
    // Esta função só é chamada pelo Router quando a
    // template 'cadastro' é carregada.
    
    function initFormValidation() {
        const form = document.getElementById('cadastro-form');
        if (!form) return; // Se não há formulário, para a execução

        // Seleciona todos os inputs que precisam de validação
        const inputs = form.querySelectorAll('input[required], select[required]');
        
        // Seleciona os campos específicos para consistência e máscaras
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const nascimento = document.getElementById('nascimento');
        const cpfInput = document.getElementById('cpf');
        const telefoneInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');

        // Seleciona as mensagens de erro
        const globalErrorMsg = document.getElementById('form-error-message');
        const globalSuccessMsg = document.getElementById('form-success-message');
        const confirmPasswordError = document.getElementById('confirm-password-error');
        const nascimentoError = document.getElementById('nascimento-error');

        
        /**
         * Aplica uma máscara a um input.
         * @param {string} mask - O formato da máscara (ex: "000.000.000-00")
         * @param {HTMLInputElement} inputEl - O elemento input
         */
        function applyMask(mask, inputEl) {
            if (!inputEl) return;
            
            // "Ouve" o evento de digitar (keydown)
            inputEl.addEventListener('keydown', (e) => {
                // Ignora teclas de controlo (Backspace, Tab, Setas, etc.)
                if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
                    return;
                }

                // Pega no valor atual e no próximo caracter da máscara
                let i = inputEl.value.length;
                let maskChar = mask[i];
                
                // Se o próximo caracter da máscara não for um número ("0"),
                // e o utilizador não digitou esse caracter,
                // adiciona-o automaticamente.
                if (maskChar && maskChar !== '0') {
                    if (e.key !== maskChar) {
                        inputEl.value += maskChar;
                        i = inputEl.value.length;
                        maskChar = mask[i];
                    }
                }
                
                // Impede que o utilizador digite letras onde são esperados números
                if (maskChar === '0' && !/[0-9]/.test(e.key)) {
                    e.preventDefault();
                }

                // Impede que o utilizador digite mais caracteres do que a máscara permite
                if (i >= mask.length) {
                    e.preventDefault();
                }
            });
        }

        // Aplica as máscaras
        applyMask('000.000.000-00', cpfInput); // Máscara de CPF (BR)
        applyMask('0000-000', cepInput);     // Máscara de CEP (PT)
        applyMask('(+000) 000 000 000', telefoneInput); // Máscara de Telefone Internacional


        /**
         * Requisito: Verifica a consistência dos dados
         * (Senha e Idade)
         */
        function validateConsistency() {
            let isConsistent = true;

            // 1. Verifica se as senhas coincidem
            if (password.value !== confirmPassword.value) {
                confirmPassword.parentElement.classList.add('invalid');
                confirmPasswordError.textContent = "As senhas não coincidem.";
                isConsistent = false;
            } else {
                // Se corrigiu, remove o erro de consistência
                if (confirmPassword.value.length > 0) {
                     confirmPassword.parentElement.classList.remove('invalid');
                }
            }

            // 2. Verifica se é maior de 18 anos
            if (nascimento.value) {
                const hoje = new Date();
                const dataNasc = new Date(nascimento.value);
                let idade = hoje.getFullYear() - dataNasc.getFullYear();
                const m = hoje.getMonth() - dataNasc.getMonth();
                
                if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
                    idade--; // Ainda não fez anos este ano
                }

                if (idade < 18) {
                    nascimento.parentElement.classList.add('invalid');
                    nascimentoError.textContent = "Tem de ter pelo menos 18 anos para se registar.";
                    isConsistent = false;
                } else {
                    // Se corrigiu, remove o erro de idade
                    nascimento.parentElement.classList.remove('invalid');
                    nascimentoError.textContent = "A data é obrigatória."; // Volta à msg original
                }
            }

            return isConsistent;
        }


        /**
         * "Ouve" o evento 'submit' (clicar no botão)
         */
        form.addEventListener('submit', (e) => {
            // 1. Impede o envio real do formulário (que recarrega a página)
            e.preventDefault();

            // 2. Esconde mensagens antigas
            globalErrorMsg.style.display = 'none';
            globalSuccessMsg.style.display = 'none';

            // 3. Valida a consistência (Senhas, Idade)
            const isConsistent = validateConsistency();

            // 4. Valida os campos HTML5 (required, type="email", etc.)
            // form.checkValidity() é a validação nativa do navegador
            const isValid = form.checkValidity();

            if (isValid && isConsistent) {
                // TUDO VÁLIDO!
                globalSuccessMsg.style.display = 'block'; // Mostra sucesso
                form.reset(); // Limpa o formulário
                
                // Remove as classes de validação que podem ter ficado
                inputs.forEach(input => {
                    input.parentElement.classList.remove('invalid');
                });

            } else {
                // ERRO!
                globalErrorMsg.style.display = 'block'; // Mostra erro global
                
                // Força a exibição dos erros nativos do HTML5
                // (Adiciona a classe .invalid aos pais dos campos inválidos)
                inputs.forEach(input => {
                    if (!input.validity.valid) {
                        input.parentElement.classList.add('invalid');
                    } else {
                        input.parentElement.classList.remove('invalid');
                    }
                });

                // Re-valida a consistência para garantir que os erros de senha/idade aparecem
                validateConsistency();
            }
        });


        /**
         * Validação "em tempo real" (enquanto o utilizador digita)
         * para dar feedback imediato.
         */
        inputs.forEach(input => {
            // "Ouve" o evento 'input' (digitar) e 'blur' (clicar fora)
            input.addEventListener('input', () => {
                // Valida o campo específico
                if (!input.validity.valid) {
                    input.parentElement.classList.add('invalid');
                } else {
                    input.parentElement.classList.remove('invalid');
                }

                // Se for um dos campos de senha, re-valida a consistência
                if (input.id === 'password' || input.id === 'confirm-password') {
                    validateConsistency();
                }
                // Se for a data, re-valida a idade
                if (input.id === 'nascimento') {
                    validateConsistency();
                }
            });
        });
    }


    // =========================================
    // 5. MÓDULO: INICIALIZAÇÃO DA APP (Versão Final)
    // =========================================
    
    /**
     * Função principal que arranca tudo
     */
    function initApp() {
        // 1. Ativa os componentes de UI globais (Menu, Modal)
        // (Estes componentes estão no index.html e são sempre necessários)
        initUIComponents();

        // 2. Define os "ouvintes" (event listeners) do Router
        // Ouve o evento 'hashchange' (quando o utilizador clica num link <a href="#...">)
        window.addEventListener('hashchange', router);
        
        // Ouve o evento 'load' (quando a página carrega pela primeira vez)
        // E dispara o router manualmente pela primeira vez
        window.addEventListener('load', router);
    }

    // Arranca a aplicação
    initApp();

}); // Fim do 'DOMContentLoaded'