// English Content
const content_en = {
    // Global Texts
    global: {
        siteTitle: "Diego Gonzales Soto",
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            blog: "Blog",
            contact: "Contact"
        },
        themeToggle: {
             light: "Light Mode",
             dark: "Dark Mode"
        },
        languageSelector: {
             current: "EN",
             en: "English",
             es: "Spanish",
             pt: "Portuguese"
        },
        footer: {
            copyright: "&copy; <span class='current-year'></span> Diego Gonzales Soto. All rights reserved.",
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        buttons: {
             viewProjects: "View Featured Projects",
             downloadCV: "Download CV", // Need to handle language-specific CV link
             seeAllProjects: "View All Projects",
             readMoreInsights: "Read More Articles",
             contact: "Contact",
             sendMessage: "Send Message"
        }
    },

    // Index Page
    index: {
        pageTitle: "Diego Gonzales Soto | Enterprise Quality Engineering Leader",
        metaDescription: "Diego Gonzales Soto is an expert Quality Engineering Leader with Fortune 500 experience. Specializing in scalable automation, enterprise quality strategies, and CI/CD.",
        hero: {
            headline: "Elevating Software Quality in Complex Enterprise Environments",
            subheadline: "Driving excellence in Quality Engineering through automation, efficient processes, and CI/CD integration.",
            summary: "With a decade of experience transforming quality in Fortune 500 companies, I build robust testing frameworks, optimize quality processes, and lead teams to deliver reliable software at speed and scale."
        },
        skills: {
            title: "My Key Skills",
            items: [
                {
                    id: "automation",
                    icon: "assets/icons/automation-icon.svg", // Path to icon
                    title: "Test Automation",
                    description: "Design and implementation of scalable automation frameworks (Playwright, Selenium, Cypress, API REST Assured) using Python, Java, TypeScript."
                },
                 {
                    id: "strategy",
                    icon: "assets/icons/strategy-icon.svg",
                    title: "Quality Strategy & Process",
                    description: "Defining test strategies, risk assessment, metrics & reporting, Agile methodologies, BDD/TDD, and optimizing defect management."
                },
                 {
                    id: "devops",
                    icon: "assets/icons/devops-icon.svg",
                    title: "DevOps & Cloud Integration",
                    description: "Integrating quality gates into CI/CD pipelines (Jenkins, GitHub Actions), Docker, Kubernetes, and testing in Cloud environments (AWS, Azure)."
                },
                 {
                    id: "performance",
                    icon: "assets/icons/performance-icon.svg",
                    title: "Performance & API Testing",
                    description: "Expertise in performance testing (JMeter, LoadRunner) and comprehensive API testing (REST, GraphQL) for complex systems."
                },
                 {
                    id: "leadership",
                    icon: "assets/icons/leadership-icon.svg",
                    title: "Leadership & Communication",
                    description: "Leading high-performing QA teams, stakeholder communication, and cross-functional collaboration."
                }
                // Add more skills
            ]
        },
        featuredProjects: {
            title: "Featured Projects"
            // Projects list will be pulled from the main projects list, marked as featured
        },
         latestInsights: {
            title: "Latest Insights & Articles"
            // Articles list will be pulled from the main blog list (e.g., top 2)
        }
    },

    // About Page
    about: {
        pageTitle: "About Diego Gonzales Soto | Quality Engineering Expert",
        metaDescription: "Learn about the journey and philosophy of Diego Gonzales Soto, a Quality Engineering leader with a decade of experience in demanding enterprise environments.",
        title: "My Approach to Quality Engineering Excellence",
        story: `
            <img src="images/diego-profile-professional.jpg" alt="Diego Gonzales Soto working" class="about-image">
            <div id="about-story-content">
                <p>My journey in Quality Engineering began over 10 years ago, fueled by a passion for building reliable software that truly serves its users. I quickly realized that quality isn't just about finding bugs; it's about building systems, processes, and a culture that prevent defects from the start.</p>
                <p>I believe in a proactive, collaborative approach. Quality should be a shared responsibility across the entire software development lifecycle. My focus is on implementing strategies like Shift-Left testing, BDD, and robust automation that enable teams to move fast without breaking things, delivering value continuously and confidently.</p>
                <p>I've had the privilege of working with some of the largest and most dynamic companies in the United States. This experience has equipped me with deep insights into the unique challenges of enterprise-scale systems: complex architectures, stringent regulatory requirements, high transaction volumes, and the need for performance and security at scale. I specialize in designing testing solutions that thrive in these environments.</p>
                <p>Beyond the technical, I'm committed to mentoring teams, fostering a culture of quality, and bridging the gap between technical execution and business goals. I strive to be a strategic partner, ensuring that quality initiatives directly contribute to business success, faster time-to-market, and reduced operational risk.</p>
                <!-- Add more paragraphs about values, specific experiences (without breaking NDAs), etc. -->
            </div>
        ` // Using innerHTML for rich text
    },

    // Projects Page
    projects: {
        pageTitle: "Featured Projects | Diego Gonzales Soto | Test Automation & Quality Strategy",
        metaDescription: "Explore Diego Gonzales Soto's key projects, showcasing expertise in test automation, framework design, performance testing, and CI/CD quality integration for high-performance companies.",
        title: "Projects & Achievements with Measurable Impact",
        // List of all projects
        list: [
            {
                id: "enterprise-automation-framework",
                title: "Enterprise API Automation Framework Design & Implementation",
                image: "images/project-ibm-api.png", // Placeholder image
                context: "Led the design and implementation of a modern, scalable API automation framework for a critical microservices platform within a Fortune 100 financial company.",
                role: "Lead Automation Architect",
                technologies: ["Java", "REST Assured", "TestNG", "Maven", "Jenkins", "Docker", "Kubernetes", "AWS"],
                methodologies: ["Agile", "Scrum"],
                achievements: [
                    "Reduced API test execution time by <strong>60%</strong> by leveraging parallel execution with Docker and Kubernetes.",
                    "Increased API test coverage from <strong>30% to 95%</strong> across core services within 6 months.",
                    "Integrated automated API tests into the CI/CD pipeline, enabling daily production deployments with confidence.",
                    "Reduced critical API defects found in production by <strong>85%</strong> post-implementation."
                ],
                isFeatured: true, // Mark as featured for index page
                link: null // Or link to a detail page if you create one per project
            },
            {
                id: "performance-optimization-e-commerce",
                title: "E-commerce Platform Performance Optimization",
                image: "images/project-web-aura.jpg", // Placeholder image
                context: "Analyzed and optimized the performance of a high-traffic e-commerce platform serving millions of users during peak seasons for a major US retailer.",
                role: "Senior Performance Engineer",
                technologies: ["JMeter", "LoadRunner", "Dynatrace", "AWS CloudWatch", "Java", "SQL"],
                methodologies: ["Agile"],
                achievements: [
                    "Identified critical database and application bottlenecks, leading to a <strong>40% reduction</strong> in average page load time.",
                    "Increased system capacity by <strong>50%</strong> under peak load conditions.",
                    "Provided key recommendations that saved the company an estimated <strong>$500k annually</strong> in infrastructure costs by optimizing resource usage.",
                    "Ensured successful Black Friday events with <strong>zero performance incidents</strong> for two consecutive years."
                ],
                isFeatured: true,
                link: null
            },
             {
                id: "bdd-adoption-program",
                title: "Behavior-Driven Development (BDD) Adoption Program",
                image: "images/blog-cover-2.jpg", // Re-using image
                context: "Led a company-wide initiative to adopt BDD practices to improve collaboration between QA, Development, and Business teams.",
                role: "Quality Strategy Lead",
                technologies: ["Cucumber", "Gherkin", "Jira", "Confluence", "Selenium", "Java/JS"],
                methodologies: ["Agile", "BDD"],
                achievements: [
                    "Improved clarity and communication between business and technical teams, leading to a <strong>30% reduction</strong> in requirement-related defects.",
                    "Increased test case maintainability and understanding by using plain language (Gherkin).",
                    "Empowered product owners to contribute to test definition.",
                    "Successfully rolled out BDD practices to <strong>15+ agile teams</strong> within 18 months."
                ],
                isFeatured: true,
                link: null
            },
            // Add more projects
        ]
    },

    // Blog Page
    blog: {
        pageTitle: "Insights & Articles | Diego Gonzales Soto | Quality Engineering",
        metaDescription: "Read articles and analysis by Diego Gonzales Soto on the latest trends and best practices in Quality Engineering, Test Automation, BDD, and enterprise quality strategies.",
        title: "Insights and Thought Leadership in Quality Engineering",
        // List of all blog posts (metadata only)
        list: [
            {
                id: "the-process-of-testing",
                slugs: {
                    en: "the-process-of-testing-beyond-finding-bugs",
                    es: "el-proceso-de-testing-mas-alla-de-encontrar-bugs",
                    pt: "o-processo-de-teste-alem-de-apenas-encontrar-bugs"
                },
                title: "The Process of Testing: Beyond Just Finding Bugs",
                date: "2023-10-27",
                image: "images/blog-cover-1.jpg", // Placeholder image
                excerpt: "Testing is not merely an execution phase; it's a critical process woven throughout the SDLC. Discover how shifting focus from bug hunting to quality advocacy transforms software delivery...",
                //link: "articles/el-proceso-de-testing-mas-alla-de-encontrar-bugs.html" //Old Link
            },
             {
                id: "the-power-of-bdd",
                slugs: {
                   en: "the-power-of-bdd-to-unite-business-and-technology",
                   es: "el-poder-de-bdd-para-unir-negocio-y-tecnologia",
                   pt: "o-poder-do-bdd-para-unir-negocios-e-tecnologia"
                },
                title: "The Power of BDD to Unite Business and Technology",
                date: "2023-09-15",
                image: "images/blog-cover-2.jpg",
                excerpt: "Behavior-Driven Development (BDD) offers a powerful framework for clear communication and shared understanding. Learn how implementing BDD can bridge the gap between business stakeholders and technical teams...",
                //link: "articles/el-poder-de-bdd-para-unir-negocio-y-tecnologia.html" //Old Link
            },
            // Add more blog posts
        ]
    },

    // Contact Page
    contact: {
        pageTitle: "Contact | Diego Gonzales Soto | Expert Quality Engineer",
        metaDescription: "Get in touch with Diego Gonzales Soto to discuss consulting opportunities, Quality Engineering leadership roles, or collaborations.",
        title: "Let's Talk Quality and Excellence",
        intro: "If you are looking for a seasoned Quality Engineering expert with extensive experience in enterprise environments, or simply want to connect and discuss industry trends, feel free to reach out:",
        info: {
            emailLabel: "Email:",
            email: "your.email@example.com", // REPLACE
            linkedinLabel: "LinkedIn:",
            linkedin: "linkedin.com/in/yourlinkedinprofile" // REPLACE
        },
        form: {
            title: "Send a Direct Message",
            note: "Note: Implementing a form requires a backend or a third-party service (e.g., Formspree, Netlify Forms). This is a placeholder structure.",
            labelName: "Name:",
            labelEmail: "Email:",
            labelSubject: "Subject:",
            labelMessage: "Message:",
            submitBtn: "Send Message"
        }
    }
};