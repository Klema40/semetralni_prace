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
    },
    {
        id: 7,
        name: "Legpress",
        tag: "nohy",
        category: "Nohy / Kvadricepsy",
        desc: "Skvělá izolace nohou bez tlaku na páteř.",
        longDesc: "Legpress umožňuje bezpečné zacílení na kvadricepsy a hýždě díky fixované poloze zad.",
        tips: "Nepropínejte kolena do zámku v horní pozici. Chodidla mějte v šíři ramen.",
        mechanics: "Změna postavení chodidel na desce mění poměr zapojení mezi m. quadriceps femoris a hýžďovými svaly."
    },
    {
        id: 8,
        name: "Upažování s jednoručkami",
        tag: "ramena",
        category: "Ramena / Boční delty",
        desc: "Klíčový cvik pro šířku ramen.",
        longDesc: "Izolovaný cvik na boční (střední) hlavu deltového svalu. Pomáhá budovat 'V' tvar postavy.",
        tips: "Nezvedejte činky nad úroveň ramen. Malíčky směřujte mírně nahoru.",
        mechanics: "Pohyb probíhá ve frontální rovině (abdukce). Největší napětí je v horní polovině dráhy."
    },
    {
        id: 9,
        name: "Kliky na bradlech (Dips)",
        tag: "hrudnik",
        category: "Hrudník / Triceps",
        desc: "Komplexní cvik na spodní část hrudníku.",
        longDesc: "Dips jsou skvělým cvikem pro rozvoj síly a objemu hrudníku a tricepsu. Předklon cílí více na prsa.",
        tips: "Pro cílení na hrudník se mírně předkloňte a lokty nechte jít do stran.",
        mechanics: "Kombinace flexe v lokti a addukce v rameni vytváří vysoké napětí v dolních vláknech pectoralis major."
    },
    {
        id: 10,
        name: "Rumunský mrtvý tah (RDL)",
        tag: "nohy",
        category: "Nohy / Hamstringy",
        desc: "Nejlepší cvik na zadní stranu stehen.",
        longDesc: "RDL se zaměřuje na excentrickou fázi a protažení hamstringů a hýždí.",
        tips: "Činku spouštějte těsně u nohou a končete tam, kde cítíte maximální tah v hamstrinzích.",
        mechanics: "Čistý kyčelní ohyb (hip hinge) s minimálním pokrčením v kolenou maximalizuje protažení hamstringů."
    },
    {
        id: 11,
        name: "Přítahy s T-osou",
        tag: "zada",
        category: "Záda / Střed zad",
        desc: "Budování tloušťky zad.",
        longDesc: "Přítahy T-osy v předklonu skvěle budují tloušťku zad, trapézy a mezilopatkové svaly.",
        tips: "Udržujte pevný střed těla a rovná záda. Táhněte lokty co nejvíce za tělo.",
        mechanics: "Horizontální tah zapojuje výrazně retrakci lopatek (m. rhomboideus, m. trapezius)."
    },
    {
        id: 12,
        name: "Tlaky s jednoručkami na šikmé lavici",
        tag: "hrudnik",
        category: "Hrudník / Horní část",
        desc: "Cílení na horní vlákna prsou.",
        longDesc: "Sklon lavice (30-45 stupňů) přesouvá důraz na klavikulární (horní) část velkého prsního svalu.",
        tips: "Jednoručky umožňují větší rozsah pohybu v dolní fázi než velká činka.",
        mechanics: "Zvýšený úhel flexe v rameni zvyšuje nábor horních vláken pectoralis major."
    }
];



// DOM Elements
const exerciseGrid = document.getElementById('exerciseGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Menu Toggle Logic
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

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
