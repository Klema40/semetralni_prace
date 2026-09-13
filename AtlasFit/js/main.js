const exercises = [
    {
        id: 1,
        name: "Mrtvý tah (Deadlift)",
        tag: "zada",
        category: "Záda / Celé tělo",
        desc: "Král cviků pro rozvoj zadního řetězce.",
        longDesc: "Mrtvý tah zapojuje vzpřimovače páteře, hamstringy a hýždě. Klíčem je neutrální páteř a 'tlačení země pryč'.",
        tips: "Nekulaťte záda v bederní oblasti. Činka by měla cestovat co nejblíže u holení.",
        mechanics: "Biomechanicky jde o kyčelní ohyb (hip hinge), kde největší moment síly vzniká v křížové oblasti."
    },
    {
        id: 2,
        name: "Shyby (Pull-ups)",
        tag: "zada",
        category: "Záda / Široký sval zádový",
        desc: "Základní vertikální tah pro široká záda.",
        longDesc: "Shyby nadhmatem cílí primárně na latissimy. Šířka úchopu by měla být o něco více než šíře ramen.",
        tips: "Snažte se táhnout lokty k pasu, nikoliv jen bradu nad hrazdu.",
        mechanics: "Aktivace lopatek (deprese a retrakce) je klíčová před samotným tahem."
    },
    {
        id: 3,
        name: "Benchpress",
        tag: "hrudnik",
        category: "Hrudník",
        desc: "Základní cvik pro objem prsních svalů.",
        longDesc: "Tlak na rovné lavici s velkou činkou zapojuje velký prsní sval, přední delty a triceps.",
        tips: "Udržujte mírné prohnutí v hrudní páteři a nohy mějte pevně na zemi (leg drive).",
        mechanics: "Retrakce lopatek chrání ramenní kloub před zbytečným pnutím."
    },
    {
        id: 4,
        name: "Dřepy (Squats)",
        tag: "nohy",
        category: "Nohy / Kvadricepsy",
        desc: "Nejefektivnější cvik na spodní polovinu těla.",
        longDesc: "Dřep stimuluje kvadricepsy, hýždě a střed těla.",
        tips: "Hloubka dřepu by měla být pod paralel, pokud to mobilita dovolí.",
        mechanics: "Stabilizace kolen směřujících ven zabraňuje valgóznímu postavení a chrání vazy."
    },
    {
        id: 5,
        name: "Stahování horní kladky (Lat Pulldown)",
        tag: "zada",
        category: "Záda / Široký sval zádový",
        desc: "Vertikální tah, variabilita úchopů.",
        longDesc: "Stahování kladky je skvělá alternativa k shybům. Umožňuje lepší izolaci latissimů.",
        tips: "Široký úchop cílí na horní vlákna latissimů a velký oblý sval. Úzký úchop zapojuje více spodní část latů a biceps.",
        mechanics: "Výměna úchopu mění úhel addukce v ramenním kloubu, což ovlivňuje nábor motorických jednotek."
    },
    {
        id: 6,
        name: "Tlaky na ramena (OHP)",
        tag: "ramena",
        category: "Ramena / Přední delty",
        desc: "Základní síla ramen a stability.",
        longDesc: "Overhead Press buduje masivní ramena a sílu tricepsu. Vyžaduje dobrou mobilitu hrudní páteře.",
        tips: "Nezaklánějte se v bednech. Zpevněte hýždě a břicho (core).",
        mechanics: "Scapulohumerální rytmus musí být plynulý, aby nedocházelo k impingementu ramene."
    }
];

const quizData = [
    {
        q: "Kolik bílkovin je optimální pro maximální svalový růst?",
        options: ["0.8 g/kg", "1.6 - 2.2 g/kg", "5 g/kg"],
        correct: 1,
        expl: "Většina studií ukazuje, že hranice 1.6 - 2.2 g/kg tělesné hmotnosti je pro naturální cvičence naprosto dostačující. Vyšší příjem už nepřináší benefit pro MPS."
    },
    {
        q: "Je nutné pít protein ihned po tréninku (anabolické okno)?",
        options: ["Ano, jinak svaly nerostou", "Ne, důležitý je celkový denní příjem", "Jen pokud cvičíte nalačno"],
        correct: 1,
        expl: "Anabolické okno trvá mnohem déle než 30 minut (v řádu hodin). Celkový příjem bílkovin za den je zásadnějším faktorem pro hypertrofii."
    },
    {
        q: "Která forma hořčíku je nejvhodnější před spaním?",
        options: ["Magnesium Oxid", "Magnesium Bisglycinát", "Magnesium Citrát"],
        correct: 1,
        expl: "Bisglycinát je vázán na aminokyselinu glycin, která má uklidňující účinky na centrální nervovou soustavu a zlepšuje kvalitu spánku."
    },
    {
        q: "Pomůže 'kardio nalačno' spalovat více tuku než kardio po jídle?",
        options: ["Ano, pálí se přímo tukové zásoby", "Ne, výsledky jsou z dlouhodobého hlediska stejné", "Jen u profesionálních kulturistů"],
        correct: 1,
        expl: "Studie ukazují, že za 24 hodin tělo vyrovná oxidaci živin. Nejdůležitější je celkový kalorický deficit na konci dne."
    },
    {
        q: "Musí se každý trénink cvičit do úplného svalového selhání?",
        options: ["Ano, bez selhání svaly nerostou", "Ne, stačí se k selhání přiblížit (RPE 8-9)", "Selhání je mýtus"],
        correct: 1,
        expl: "Trénink do selhání je vyčerpávající pro CNS. Pro hypertrofii stačí nechat si v rezervě 1-3 opakování (RIR 1-3)."
    }
];

// DOM Elements
const exerciseGrid = document.getElementById('exerciseGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const bmrForm = document.getElementById('bmr-form');
const calcResults = document.getElementById('calc-results');
const quizBox = document.getElementById('quiz-box');

// Exercise Logic
function renderExercises(filter = 'all') {
    exerciseGrid.innerHTML = '';
    const filtered = filter === 'all' ? exercises : exercises.filter(ex => ex.tag === filter);
    
    filtered.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'ex-card';
        card.innerHTML = `
            <span class="ex-tag">${ex.category}</span>
            <h3>${ex.name}</h3>
            <p>${ex.desc}</p>
        `;
        card.onclick = () => showModal(ex);
        exerciseGrid.appendChild(card);
    });
}

function showModal(ex) {
    const modal = document.getElementById('exercise-modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h2 style="color: var(--accent); margin-bottom:1rem;">${ex.name}</h2>
        <p style="margin-bottom:1.5rem">${ex.longDesc}</p>
        <h4 style="margin-bottom:0.5rem">💡 Technický tip:</h4>
        <p style="background: rgba(163, 230, 53, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">${ex.tips}</p>
        <h4 style="margin-bottom:0.5rem">🔬 Biomechanika:</h4>
        <p>${ex.mechanics}</p>
    `;
    modal.style.display = "block";
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderExercises(btn.dataset.filter);
    });
});

// Calculator Logic
bmrForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // Mifflin-St Jeor
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    const tdee = bmr * activity;
    const protein = weight * 2.0;

    document.getElementById('res-bmr').innerText = Math.round(bmr) + ' kcal';
    document.getElementById('res-tdee').innerText = Math.round(tdee) + ' kcal';
    document.getElementById('res-protein').innerText = Math.round(protein) + ' g';
    
    calcResults.classList.remove('results-hidden');
});

// Quiz Logic
function renderQuiz() {
    quizBox.innerHTML = '';
    quizData.forEach((q, idx) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'quiz-q';
        qDiv.innerHTML = `<p style="margin-bottom: 1rem; font-weight:600;">${idx+1}. ${q.q}</p>`;
        
        q.options.forEach((opt, oIdx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(btn, idx, oIdx);
            qDiv.appendChild(btn);
        });
        
        const expl = document.createElement('p');
        expl.className = 'quiz-expl hidden';
        expl.id = `expl-${idx}`;
        expl.style.fontSize = '0.9rem';
        expl.style.marginTop = '1rem';
        expl.style.color = 'var(--text-dim)';
        qDiv.appendChild(expl);
        
        quizBox.appendChild(qDiv);
    });
}

function checkAnswer(btn, qIdx, oIdx) {
    const correct = quizData[qIdx].correct;
    const expl = document.getElementById(`expl-${qIdx}`);
    const options = btn.parentElement.querySelectorAll('.quiz-option');
    
    options.forEach(opt => opt.disabled = true);
    
    if (oIdx === correct) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        options[correct].classList.add('correct');
    }
    
    expl.innerText = quizData[qIdx].expl;
    expl.classList.remove('hidden');
}

// Modal closing
document.querySelector('.close-modal').onclick = () => {
    document.getElementById('exercise-modal').style.display = "none";
}

window.onclick = (event) => {
    const modal = document.getElementById('exercise-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initial render
renderExercises();
renderQuiz();
