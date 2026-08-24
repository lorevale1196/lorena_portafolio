/* ==========================================
   LORENA.DEV — JAVASCRIPT CON DATOS REALES
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. MENÚ RESPONSIVE
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => navMenu.classList.remove("active"));
        });
    }

    // 2. EFECTO TYPING EN EL HERO (SIN GESTORA DE PROYECTOS)
    const typingElement = document.getElementById("typing-text");
    const typingWords = [
        "Analista de Datos en Formación ✦",
        "Desarrolladora Web / Software 💻",
        "Inglés C1 | Comunicación Asertiva ♡",
        "Copywriting & SEO ✍️",
        "Diseñadora Gráfica & Creativa 🎨"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeEffect() {
        if (!typingElement) return;

        const currentWord = typingWords[wordIndex];

        if (!deleting) {
            typingElement.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
            if (letterIndex === currentWord.length) {
                deleting = true;
                setTimeout(typeEffect, 1800);
                return;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
            if (letterIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % typingWords.length;
            }
        }

        const speed = deleting ? 45 : 80;
        setTimeout(typeEffect, speed);
    }
    typeEffect();

    // 3. ANIMACIÓN DE LAS BARRAS DE HABILIDADES
    const progressBars = document.querySelectorAll(".progress-bar");
    
    function animateSkills() {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute("data-progress") + "%";
            bar.style.width = targetWidth;
        });
    }

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }

    // 4. DATOS Y MODALES BASADOS EN HOJA DE VIDA REAL
    const projects = {
        mercy: {
            icon: "🤝", label: "EXPERIENCIA_01", title: "Operador Mercy Corps",
            description: "Atención eficiente a cientos de beneficiarios mediante organización logísticamente estructurada y administrativa. Optimización de registro de información utilizando controles administrativos y seguimiento documental para minimizar errores. Comunicación asertiva y resolución de problemas.",
            tags: ["Atención a Usuarios", "Registro de Datos", "Control Documental", "Logística"]
        },
        mujeres: {
            icon: "✦", label: "EXPERIENCIA_02", title: "Movimiento de Mujeres Lideresas",
            description: "Facilitación del registro e ingreso de datos de población vulnerable mediante capturas organizadas. Seguimiento administrativo, documentación requerida y resolución de solicitudes con atención personalizada y comunicación efectiva.",
            tags: ["Registro de Datos", "Población Vulnerable", "Soporte Administrativo"]
        },
        rapirez: {
            icon: "📦", label: "EXPERIENCIA_03", title: "Supervisión & Control Operativo",
            description: "Experiencia como Cajera y Supervisora en Librería Papelería Rapirez y Macheronis. Supervisión de procesos de inventario, auditoría periódica de existencias, control de efectivo, aperturas y cierres de caja con cero margen de error.",
            tags: ["Gestión de Inventario", "Supervisión", "Control de Efectivo", "Atención al Cliente"]
        },
        postea2: {
            icon: "🎈", label: "PROYECTO_04", title: "Emprendimiento Postea2",
            description: "Proyecto de decoración y manualidades creativas con reutilización de materiales. Aplicación de principios de diseño gráfico, gestión comercial directa y desarrollo de identidad visual.",
            tags: ["Diseño Gráfico", "Creatividad", "Emprendimiento"]
        },
        comunicacion: {
            icon: "✍️", label: "HABILIDAD_05", title: "Copywriting & SEO",
            description: "Amplias habilidades en redacción persuasiva, técnicas de copywriting para medios digitales, estructuración de contenidos optimizados para motores de búsqueda (SEO) y comunicación estratégica.",
            tags: ["Copywriting", "SEO", "Redacción Digital", "Comunicación Asertiva"]
        },
        datos: {
            icon: "📊", label: "TÉCNICO_06", title: "Análisis de Datos & Software",
            description: "Procesamiento de información mediante herramientas de Excel avanzado (SENA), consulta de bases de datos mediante SQL y principios de desarrollo de software aprendidos en Kuepa y Fundación Rofe.",
            tags: ["Manejo de SQL", "Excel Avanzado", "Análisis de Datos", "Desarrollo de Software"]
        }
    };

    const modal = document.getElementById("project-modal");
    const modalClose = document.getElementById("modal-close");
    const projectButtons = document.querySelectorAll(".project-btn");

    function closeModal() {
        if (modal) {
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }
    }

    projectButtons.forEach(button => {
        button.addEventListener("click", () => {
            const projectId = button.getAttribute("data-project");
            const project = projects[projectId];

            if (!project || !modal) return;

            document.getElementById("modal-icon").textContent = project.icon;
            document.getElementById("modal-label").textContent = project.label;
            document.getElementById("modal-title").textContent = project.title.toLowerCase() + ".exe";
            document.getElementById("modal-heading").textContent = project.title;
            document.getElementById("modal-description").textContent = project.description;

            const tagsContainer = document.getElementById("modal-tags");
            tagsContainer.innerHTML = "";
            project.tags.forEach(tag => {
                const tagSpan = document.createElement("span");
                tagSpan.textContent = tag;
                tagsContainer.appendChild(tagSpan);
            });

            modal.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    });

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // 5. FORMULARIO DE CONTACTO
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const successMsg = document.getElementById("form-success");
            if (successMsg) {
                successMsg.textContent = "♡ ¡Mensaje registrado! Gracias por ponerte en contacto.";
            }
            contactForm.reset();
        });
    }
});