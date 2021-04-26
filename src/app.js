const misure = document.querySelector('.misure-list');
const btnCarrello = document.querySelector('.btn-carrello');
const closeModal = document.querySelector('#close-modal');
const rimuoviAdesivi = document.getElementById('rim-adesivi');
const patches = [
    {
        name: "Anguria",
        side: 'right',
        img: "./img/patch/AACCS202387881.png"
    },
    {
        name: "Fragola",
        side: 'right',
        img: "./img/patch/AACCS00204380311.png"
    },
    {
        name: "Cuore",
        side: 'right',
        img: "./img/patch/ADECO02796B80303.png"
    },
    {
        name: "Anguria",
        side: 'left',
        img: "./img/patch/AACCS202387881-1.png"
    },
    {
        name: "Fragola",
        side: 'left',
        img: "./img/patch/AACCS00204380311-1.png"
    },
    {
        name: "Cuore",
        side: 'left',
        img: "./img/patch/ADECO02796B80303-1.png"
    }
];

// inserisco dinamicamente i tasti per applicare gli adesivi
patches.forEach(p => {
    let item = document.createElement("div");
    item.innerHTML = p.name;
    item.classList = `patch ${p.side}`;

    document.querySelector(`.adesivi-list.${p.side}`).append(item);
    item.addEventListener('click', (e) => {
        document.querySelectorAll(`.patch.${p.side}`).forEach(item => {
            item.classList.remove('active');
        });
        let img = document.querySelector(`.overlay-patch[data-side=${p.side}`);
        img.innerHTML = `<img src=${p.img} class=${p.side}></img>`;
        e.target.classList.add('active');
    })
});

// tasto per resettare gli adesivi
rimuoviAdesivi.addEventListener('click', () => {
    // rimuovo la classe active dai tasti
    let listaAdesivi = document.querySelectorAll('.patch');
    listaAdesivi.forEach(l => {
        l.classList.remove('active');
    });

    let imgAdesivi = document.querySelectorAll('.overlay-patch');
    console.log(imgAdesivi);
    imgAdesivi.forEach(i => {
        i.innerHTML = '';
    })
});

// gestisco il click su una misura
misure.addEventListener('click', function(e) {
    if(e.target.className === 'misure-item') {
        // nascondo il msg di errore se era visibile
        document.querySelector('.err-misura').style.visibility = 'hidden';
        // controllo se ho cliccato su un elemento valido della lista
        // rimuovo la classe active da tutti gli elementi
        // e la assegno solo a quello cliccato
        document.querySelectorAll('.misure-item').forEach(item => {
            item.classList.remove('active');
        });

        e.target.classList.add('active');
        console.log(e.target.textContent);
    }
});

btnCarrello.addEventListener('click', () => {
    let name = document.querySelector('#name').textContent;
    let price = document.querySelector('#price').textContent;
    let sizeActive = document.querySelector('.misure-item.active');
    let size = sizeActive ? sizeActive.textContent : null;
    let err = document.querySelector('.err-misura');
    let patchSx = document.querySelector('.patch.left.active');
    patchSx = patchSx ? patchSx.textContent : 'Nessuno';
    let patchDx = document.querySelector('.patch.right.active');
    patchDx = patchDx ? patchDx.textContent : 'Nessuno';

    // controllo se è stata scelta una misura
    if(!size) {
        err.style.visibility = 'visible';
    } else {
        let modal = document.getElementById('modal');
        let riepilogo = document.getElementById('info');
        modal.style.display = 'flex';

        let info = `
            <div>
                <h1>Riepilogo ordine</h1>
                <h2>Modello: ${name}</h2>
                <h2>Prezzo: ${price}</h2>
                <h2>Misura: ${size}</h2>
                <h2>Adesivo SX: ${patchSx}</h2>
                <h2>Adesivo DX: ${patchDx}</h2>
            </div>
        `;

        riepilogo.innerHTML = info;

        err.style.display = 'hidden';
    }

});

closeModal.addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none';
})