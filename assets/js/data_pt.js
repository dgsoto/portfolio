// Portuguese Content
const content_pt = {
    // Global Texts
    global: {
        siteTitle: "Diego Gonzales Soto",
        nav: {
            home: "Início",
            about: "Sobre Mim",
            projects: "Projetos",
            blog: "Blog",
            contact: "Contato"
        },
         themeToggle: {
             light: "Modo Claro",
             dark: "Modo Escuro"
        },
        languageSelector: {
             current: "PT",
             en: "Inglês",
             es: "Espanhol",
             pt: "Português"
        },
        footer: {
            copyright: "&copy; <span class='current-year'></span> Diego Gonzales Soto. Todos os direitos reservados.",
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        buttons: {
             viewProjects: "Ver Projetos em Destaque",
             downloadCV: "Baixar CV", // Need to handle language-specific CV link
             seeAllProjects: "Ver Todos os Projetos",
             readMoreInsights: "Ler Mais Artigos",
             contact: "Contato",
             sendMessage: "Enviar Mensagem"
        }
    },

    // Index Page
    index: {
        pageTitle: "Diego Gonzales Soto | Líder em Quality Engineering Empresarial",
        metaDescription: "Diego Gonzales Soto é um Quality Engineering Leader especialista com experiência em empresas Fortune 500. Especializado em automação escalável, estratégias de qualidade de nível empresarial e CI/CD.",
        hero: {
            headline: "Elevando a Qualidade do Software em Ambientes Empresariais Complexos",
            subheadline: "Impulsionando a excelência em Quality Engineering através de automação, processos eficientes e integração CI/CD.",
            summary: "Com uma década de experiência transformando a qualidade em empresas Fortune 500, construo frameworks de teste robustos, otimizo processos de qualidade e lidero equipes para entregar software confiável com velocidade e escala."
        },
        skills: {
            title: "Minhas Habilidades Chave",
            items: [
                 {
                    id: "automation",
                    icon: "assets/icons/automation-icon.svg",
                    title: "Automação de Testes",
                    description: "Design e implementação de frameworks de automação escaláveis (Playwright, Selenium, Cypress, API REST Assured) usando Python, Java, TypeScript."
                },
                 {
                    id: "strategy",
                     icon: "assets/icons/strategy-icon.svg",
                    title: "Estratégia e Processo de Qualidade",
                    description: "Definição de estratégias de teste, avaliação de riscos, métricas e relatórios, metodologias Ágeis, BDD/TDD e otimização do gerenciamento de defeitos."
                },
                 {
                    id: "devops",
                     icon: "assets/icons/devops-icon.svg",
                    title: "DevOps e Integração Cloud",
                    description: "Integração de gates de qualidade em pipelines de CI/CD (Jenkins, GitHub Actions), Docker, Kubernetes e testes em ambientes Cloud (AWS, Azure)."
                },
                 {
                    id: "performance",
                     icon: "assets/icons/performance-icon.svg",
                    title: "Performance e Teste de API",
                    description: "Expertise em testes de performance (JMeter, LoadRunner) e testes abrangentes de API (REST, GraphQL) para sistemas complexos."
                },
                 {
                    id: "leadership",
                     icon: "assets/icons/leadership-icon.svg",
                    title: "Liderança e Comunicação",
                    description: "Liderança de equipes de QA de alto desempenho, comunicação com stakeholders e colaboração interfuncional."
                }
                // Add more skills
            ]
        },
        featuredProjects: {
            title: "Projetos em Destaque"
        },
         latestInsights: {
            title: "Últimos Insights e Artigos"
        }
    },

    // About Page
    about: {
        pageTitle: "Sobre Diego Gonzales Soto | Especialista em Quality Engineering",
        metaDescription: "Conheça a trajetória e filosofia de Diego Gonzales Soto, um líder em Quality Engineering com uma década de experiência em ambientes empresariais exigentes.",
        title: "Minha Abordagem para a Excelência em Quality Engineering",
        story: `
             <img src="images/diego-profile-professional.jpg" alt="Diego Gonzales Soto trabalhando" class="about-image">
             <div id="about-story-content">
                <p>Minha jornada em Quality Engineering começou há mais de 10 anos, impulsionada pela paixão por construir software confiável que realmente sirva aos seus usuários. Percebi rapidamente que a qualidade não é apenas uma fase de execução; é um processo crítico tecido ao longo de todo o SDLC. Descubra como mudar o foco da caça de bugs para a defesa da qualidade transforma a entrega de software...</p>
                <p>Acredito em uma abordagem proativa e colaborativa. A qualidade deve ser uma responsabilidade compartilhada em todo o ciclo de vida do desenvolvimento de software. Meu foco é implementar estratégias como testes Shift-Left, BDD e automação robusta que permitam às equipes se moverem rapidamente sem quebrar nada, entregando valor de forma contínua e com confiança.</p>
                <p>Tive o privilégio de trabalhar com algumas das maiores e mais dinâmicas empresas nos Estados Unidos. Essa experiência me proporcionou profundos conhecimentos sobre os desafios únicos dos sistemas em escala empresarial: arquiteturas complexas, requisitos regulatórios rigorosos, altos volumes de transações e a necessidade de desempenho e segurança em escala. Sou especialista em projetar soluções de teste que prosperam nesses ambientes.</p>
                <p>Além do aspecto técnico, estou comprometido com a mentoria de equipes, o fomento de uma cultura de qualidade e a ligação entre a execução técnica e os objetivos de negócios. Esforço-me para ser um parceiro estratégico, garantindo que as iniciativas de qualidade contribuam diretamente para o sucesso do negócio, maior velocidade de colocação no mercado e redução do risco operacional.</p>
            </div>
        `
    },

    // Projects Page
    projects: {
        pageTitle: "Projetos em Destaque | Diego Gonzales Soto | Automação de Testes e Estratégia de Qualidade",
        metaDescription: "Explore os projetos chave de Diego Gonzales Soto, demonstrando expertise em automação de testes, design de frameworks, testes de performance e integração de qualidade em CI/CD para empresas de alto desempenho.",
        title: "Projetos e Conquistas com Impacto Mensurável",
        list: [
             {
                id: "enterprise-automation-framework",
                title: "Design e Implementação de Framework de Automação de API Empresarial",
                image: "images/project-ibm-api.png",
                context: "Liderei o design e a implementação de um framework de automação de API moderno e escalável para uma plataforma de microsserviços crítica dentro de uma empresa financeira Fortune 100.",
                role: "Arquiteto Líder de Automação",
                technologies: ["Java", "REST Assured", "TestNG", "Maven", "Jenkins", "Docker", "Kubernetes", "AWS"],
                methodologies: ["Ágil", "Scrum"],
                achievements: [
                    "Redução do tempo de execução de testes de API em <strong>60%</strong> alavancando a execução paralela com Docker e Kubernetes.",
                    "Aumento da cobertura de testes de API de <strong>30% para 95%</strong> nos serviços principais em 6 meses.",
                    "Integração de testes de API automatizados no pipeline de CI/CD, permitindo implantações diárias em produção com confiança.",
                    "Redução de defeitos de API críticos encontrados em produção em <strong>85%</strong> após a implementação."
                ],
                isFeatured: true,
                link: null
            },
            {
                id: "performance-optimization-e-commerce",
                title: "Otimização de Performance de Plataforma E-commerce",
                image: "images/project-web-aura.jpg",
                context: "Analisei e otimizei a performance de uma plataforma de e-commerce de alto tráfego servindo milhões de usuários durante as temporadas de pico para um grande varejista dos EUA.",
                role: "Engenheiro Sênior de Performance",
                technologies: ["JMeter", "LoadRunner", "Dynatrace", "AWS CloudWatch", "Java", "SQL"],
                methodologies: ["Ágil"],
                achievements: [
                    "Identificação de gargalos críticos de banco de dados e aplicação, levando a uma <strong>redução de 40%</strong> no tempo médio de carregamento da página.",
                    "Aumento da capacidade do sistema em <strong>50%</strong> sob condições de carga máxima.",
                    "Forneci recomendações chave que economizaram para a empresa cerca de <strong>$500k anualmente</strong> em custos de infraestrutura otimizando o uso de recursos.",
                    "Garanti eventos bem-sucedidos de Black Friday com <strong>zero incidentes de performance</strong> por dois anos consecutivos."
                ],
                isFeatured: true,
                link: null
            },
             {
                id: "bdd-adoption-program",
                title: "Programa de Adoção de Behavior-Driven Development (BDD)",
                image: "images/blog-cover-2.jpg",
                context: "Liderei uma iniciativa em toda a empresa para adotar práticas BDD para melhorar a colaboração entre as equipes de QA, Desenvolvimento e Negócios.",
                role: "Líder de Estratégia de Qualidade",
                technologies: ["Cucumber", "Gherkin", "Jira", "Confluence", "Selenium", "Java/JS"],
                methodologies: ["Ágil", "BDD"],
                achievements: [
                    "Melhora na clareza e comunicação entre equipes de negócios e técnicas, levando a uma <strong>redução de 30%</strong> em defeitos relacionados a requisitos.",
                    "Aumento da manutenibilidade e compreensão dos casos de teste usando linguagem simples (Gherkin).",
                    "Capacitação dos proprietários de produto para contribuir para a definição de testes.",
                    "Implantação bem-sucedida de práticas BDD em <strong>mais de 15 equipes ágeis</strong> em 18 meses."
                ],
                isFeatured: true,
                link: null
            },
            // Add more projects
        ]
    },

    // Blog Page
    blog: {
        pageTitle: "Insights e Artigos | Diego Gonzales Soto | Quality Engineering",
        metaDescription: "Leia artigos e análises de Diego Gonzales Soto sobre as últimas tendências e melhores práticas em Quality Engineering, Automação de Testes, BDD e estratégias de qualidade para ambientes empresariais.",
        title: "Insights e Liderança de Pensamento em Quality Engineering",
        list: [
            {
                id: "the-process-of-testing",
                 slug: "el-proceso-de-testing-mas-alla-de-encontrar-bugs",
                title: "O Processo de Teste: Além de Apenas Encontrar Bugs",
                date: "27-10-2023",
                image: "images/blog-cover-1.jpg",
                excerpt: "O teste não é meramente uma fase de execução; é um processo crítico tecido ao longo de todo o SDLC. Descubra como mudar o foco da caça de bugs para a defesa da qualidade transforma a entrega de software...",
                 link: "articles/el-proceso-de-testing-mas-alla-de-encontrar-bugs.html" // Use the Spanish slug here too for simplicity in this static setup
            },
             {
                id: "the-power-of-bdd",
                 slug: "el-poder-de-bdd-para-unir-negocio-y-tecnologia",
                title: "O Poder do BDD para Unir Negócios e Tecnologia",
                date: "15-09-2023",
                image: "images/blog-cover-2.jpg",
                excerpt: "Behavior-Driven Development (BDD) oferece um framework poderoso para comunicação clara e entendimento compartilhado. Aprenda como implementar BDD pode diminuir a lacuna entre stakeholders de negócios e equipes técnicas...",
                 link: "articles/el-poder-de-bdd-para-unir-negocio-y-tecnologia.html" // Use the Spanish slug here too for simplicity in this static setup
            },
            // Add more blog posts
        ]
    },

    // Contact Page
    contact: {
        pageTitle: "Contato | Diego Gonzales Soto | Especialista em Quality Engineer",
        metaDescription: "Entre em contato com Diego Gonzales Soto para discutir oportunidades de consultoria, papéis de liderança em Quality Engineering ou colaborações.",
        title: "Vamos Falar Sobre Qualidade e Excelência",
        intro: "Se você procura um especialista experiente em Quality Engineering com ampla experiência em ambientes empresariais, ou simplesmente deseja conectar e discutir tendências da indústria, sinta-se à vontade para entrar em contato:",
        info: {
            emailLabel: "Email:",
            email: "your.email@example.com", // REPLACE
            linkedinLabel: "LinkedIn:",
            linkedin: "linkedin.com/in/yourlinkedinprofile" // REPLACE
        },
        form: {
            title: "Enviar Mensagem Direta",
             note: "Nota: A implementação de um formulário requer um backend ou um serviço de terceiros (por exemplo, Formspree, Netlify Forms). Esta é uma estrutura de placeholder.",
            labelName: "Nome:",
            labelEmail: "Email:",
            labelSubject: "Assunto:",
            labelMessage: "Mensagem:",
            submitBtn: "Enviar Mensagem"
        }
    }
};