/* =====================================
   CONFIGURAÇÃO
===================================== */

const scenes = document.querySelectorAll(".scene");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const currentNumber =
    document.getElementById("currentNumber");

const progressBar =
    document.getElementById("progressBar");

const restartButton =
    document.querySelector(".restart-btn");

let currentScene = 0;

let isAnimating = false;


/* =====================================
   PARTÍCULAS
===================================== */

const particles =
    document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        8 + Math.random() * 15 + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particles.appendChild(particle);
}


/* =====================================
   MOSTRAR CENA
===================================== */

function showScene(index) {

    if (isAnimating) return;

    isAnimating = true;

    if (index < 0)
        index = scenes.length - 1;

    if (index >= scenes.length)
        index = 0;

    currentScene = index;

    scenes.forEach((scene, i) => {

        scene.classList.toggle(
            "active",
            i === currentScene
        );

    });


    /* Número */

    currentNumber.textContent =
        String(currentScene + 1)
        .padStart(2, "0");


    /* Barra */

    const progress =
        ((currentScene + 1) / scenes.length) * 100;

    progressBar.style.width =
        progress + "%";


    setTimeout(() => {

        isAnimating = false;

    }, 900);
}


/* =====================================
   PRÓXIMA
===================================== */

function nextScene() {

    showScene(currentScene + 1);

}


/* =====================================
   ANTERIOR
===================================== */

function previousScene() {

    showScene(currentScene - 1);

}


nextButton.addEventListener(
    "click",
    nextScene
);

prevButton.addEventListener(
    "click",
    previousScene
);


/* =====================================
   TECLADO
===================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowRight" ||
            event.key === " "
        ) {

            nextScene();

        }

        if (event.key === "ArrowLeft") {

            previousScene();

        }

        if (event.key === "Home") {

            showScene(0);

        }

        if (event.key === "End") {

            showScene(scenes.length - 1);

        }

    }
);


/* =====================================
   TOQUE NO CELULAR
===================================== */

let touchStartX = 0;

let touchEndX = 0;

document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    }
);

document.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;

        const distance =
            touchEndX - touchStartX;

        if (Math.abs(distance) < 50)
            return;

        if (distance < 0)
            nextScene();

        else
            previousScene();

    }
);


/* =====================================
   BOTÃO RECOMEÇAR
===================================== */

if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            showScene(0);

        }
    );

}


/* =====================================
   EFEITO DE MOVIMENTO DO MOUSE
===================================== */

document.addEventListener(
    "mousemove",
    event => {

        const x =
            (event.clientX /
                window.innerWidth - .5);

        const y =
            (event.clientY /
                window.innerHeight - .5);


        const active =
            document.querySelector(
                ".scene.active"
            );

        if (!active) return;


        const artwork =
            active.querySelector(
                ".hero-painting, .art-card, .light-art, .monet-art, .renoir-art, .dance-stage, .legacy"
            );

        if (!artwork) return;


        artwork.style.transform =
            `translate(${x * 8}px, ${y * 8}px)`;
    }
);


/* =====================================
   INÍCIO
===================================== */

showScene(0);
