/* ==========================================
   LORENA.DEV
   JAVASCRIPT
   ========================================== */


/* ==========================================
   MENÚ HAMBURGUESA
   ========================================== */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    // Cerrar menú al hacer clic en un enlace

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


/* ==========================================
   TEXTO AUTOMÁTICO DEL HERO
   ========================================== */

const typingElement =
    document.getElementById("typing-text");


const typingWords = [

    "Creativa & Comunicadora ♡",

    "Gestora de proyectos ✦",

    "Community Manager ♡",

    "Analista de datos en formación ✦",

    "Desarrolladora web en formación ♡"

];


let wordIndex = 0;
let letterIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }


    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                typingWords.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 45 : 80;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();



/* ==========================================
   BARRAS DE HABILIDADES
   ========================================== */

const progressBars =
    document.querySelectorAll(".progress-bar");

const skillsSection =
    document.getElementById("skills");


function animateSkills() {

    progressBars.forEach(bar => {

        const progress =
            bar.getAttribute("data-progress");


        bar.style.width =
            progress + "%";

    });

}


if (skillsSection) {

    const skillsObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateSkills();

                    }

                });

            },

            {
                threshold: 0.3
            }

        );


    skillsObserver.observe(
        skillsSection
    );

}



/* ==========================================
   DATOS DE LOS PROYECTOS
   ========================================== */

const projects = {

    ruta: {

        icon: "♡",

        label: "PROJECT_01",

        title: "Ruta de Empleabilidad",

        description:
            "Proyecto orientado a fortalecer las oportunidades laborales de mujeres cabeza de hogar mediante capacitación, acompañamiento y herramientas para mejorar su empleabilidad. La iniciativa busca conectar formación, orientación y oportunidades.",

        tags: [
            "Gestión de proyectos",
            "Empleabilidad",
            "Mujeres",
            "Impacto social"
        ]

    },


    mujeres: {

        icon: "✦",

        label: "PROJECT_02",

        title: "Movimiento de Mujeres",

        description:
            "Experiencia de coordinación y acompañamiento de proyectos comunitarios enfocados en liderazgo femenino, derechos, prevención de violencias y fortalecimiento de mujeres migrantes. Incluye planificación, formulación de proyectos, alianzas y acompañamiento comunitario.",

        tags: [
            "Liderazgo",
            "Proyectos sociales",
            "Comunidad",
            "Derechos"
        ]

    },


    postea2: {

        icon: "🎈",

        label: "PROJECT_03",

        title: "Postea2",

        description:
            "Idea de emprendimiento creativo enfocada en decoración y reutilización de materiales. El proyecto combina creatividad, diseño y aprovechamiento de recursos para crear propuestas decorativas atractivas.",

        tags: [
            "Emprendimiento",
            "Creatividad",
            "Diseño",
            "Reciclaje"
        ]

    },


    comunicacion: {

        icon: "📱",

        label: "PROJECT_04",

        title: "Comunicación Digital",

        description:
            "Experiencia en creación de contenido para redes sociales, redacción, copywriting, SEO y community management. He trabajado en la creación de textos, planificación de contenido y comunicación digital para diferentes iniciativas.",

        tags: [
            "SEO",
            "Copywriting",
            "Redes sociales",
            "Contenido"
        ]

    },


    web: {

        icon: "💻",

        label: "PROJECT_05",

        title: "Web & Databases",

        description:
            "Proyecto de aprendizaje y práctica tecnológica enfocado en desarrollo web y bases de datos. Incluye HTML, CSS, JavaScript, SQL, modelos entidad-relación y conceptos de bases de datos.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "Bases de datos"
        ]

    },


    datos: {

        icon: "📊",

        label: "PROJECT_06",

        title: "Análisis de Datos",

        description:
            "Formación y práctica en análisis de datos mediante Excel, SQL y bases de datos. Incluye organización de información, fórmulas, consultas y herramientas para transformar datos en información útil.",

        tags: [
            "Excel",
            "SQL",
            "Análisis",
            "Datos"
        ]

    }

};



/* ==========================================
   ELEMENTOS DEL MODAL
   ========================================== */

const modal =
    document.getElementById("project-modal");

const modalClose =
    document.getElementById("modal-close");

const modalIcon =
    document.getElementById("modal-icon");

const modalLabel =
    document.getElementById("modal-label");

const modalHeading =
    document.getElementById("modal-heading");

const modalDescription =
    document.getElementById("modal-description");

const modalTags =
    document.getElementById("modal-tags");

const modalTitle =
    document.getElementById("modal-title");



/* ==========================================
   ABRIR MODAL
   ========================================== */

const projectButtons =
    document.querySelectorAll(
        ".project-btn"
    );


projectButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const projectId =
                button.getAttribute(
                    "data-project"
                );


            const project =
                projects[projectId];


            if (!project) {
                return;
            }


            modalIcon.textContent =
                project.icon;


            modalLabel.textContent =
                project.label;


            modalTitle.textContent =
                project.title.toLowerCase()
                + ".exe";


            modalHeading.textContent =
                project.title;


            modalDescription.textContent =
                project.description;


            modalTags.innerHTML = "";


            project.tags.forEach(tag => {

                const tagElement =
                    document.createElement(
                        "span"
                    );


                tagElement.textContent =
                    tag;


                modalTags.appendChild(
                    tagElement
                );

            });


            modal.classList.add(
                "show"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});



/* ==========================================
   CERRAR MODAL
   ========================================== */

function closeModal() {

    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}



/* ==========================================
   CERRAR MODAL AL HACER CLICK AFUERA
   ========================================== */

if (modal) {

    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );

}



/* ==========================================
   CERRAR MODAL CON ESC
   ========================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains(
                "show"
            )
        ) {

            closeModal();

        }

    }
);



/* ==========================================
   FORMULARIO
   VALIDACIÓN EN TIEMPO REAL
   ========================================== */

const contactForm =
    document.getElementById(
        "contact-form"
    );


const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");


const nameError =
    document.getElementById(
        "name-error"
    );

const emailError =
    document.getElementById(
        "email-error"
    );

const messageError =
    document.getElementById(
        "message-error"
    );


const formSuccess =
    document.getElementById(
        "form-success"
    );



/* ==========================================
   VALIDAR NOMBRE
   ========================================== */

function validateName() {

    const value =
        nameInput.value.trim();


    if (value === "") {

        nameError.textContent =
            "♡ Escribe tu nombre.";

        return false;

    }


    if (value.length < 2) {

        nameError.textContent =
            "♡ Tu nombre es demasiado corto.";

        return false;

    }


    nameError.textContent = "";

    return true;

}



/* ==========================================
   VALIDAR EMAIL
   ========================================== */

function validateEmail() {

    const value =
        emailInput.value.trim();


    if (value === "") {

        emailError.textContent =
            "♡ Escribe tu correo.";

        return false;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailPattern.test(value)
    ) {

        emailError.textContent =
            "♡ Escribe un correo válido.";

        return false;

    }


    emailError.textContent = "";

    return true;

}



/* ==========================================
   VALIDAR MENSAJE
   ========================================== */

function validateMessage() {

    const value =
        messageInput.value.trim();


    if (value === "") {

        messageError.textContent =
            "♡ Escribe un mensaje.";

        return false;

    }


    if (value.length < 10) {

        messageError.textContent =
            "♡ El mensaje debe tener al menos 10 caracteres.";

        return false;

    }


    messageError.textContent = "";

    return true;

}



/* ==========================================
   EVENT LISTENERS
   VALIDACIÓN EN TIEMPO REAL
   ========================================== */

if (nameInput) {

    nameInput.addEventListener(
        "input",
        validateName
    );

}


if (emailInput) {

    emailInput.addEventListener(
        "input",
        validateEmail
    );

}


if (messageInput) {

    messageInput.addEventListener(
        "input",
        validateMessage
    );

}



/* ==========================================
   ENVIAR FORMULARIO
   ========================================== */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const validName =
                validateName();


            const validEmail =
                validateEmail();


            const validMessage =
                validateMessage();


            if (
                !validName ||
                !validEmail ||
                !validMessage
            ) {

                formSuccess.textContent =
                    "";

                return;

            }


            formSuccess.textContent =
                "♡ ¡Mensaje validado correctamente! Gracias por escribirme.";


            contactForm.reset();

        }
    );

}



/* ==========================================
   ANIMACIÓN DE TARJETAS
   ========================================== */

const cards =
    document.querySelectorAll(
        ".project-card, .info-box, .timeline-card, .course-card"
    );


const cardObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    cardObserver.observe(card);

});


/* ==========================================
   MENSAJE EN CONSOLA
   ========================================== */

console.log(
    "♡ Lorena.dev cargado correctamente ♡"
);