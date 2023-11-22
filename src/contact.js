export function contacts() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const container2 = document.createElement('div');
    container2.classList.add('container2');
    content.appendChild(container2);

 // Kechizu
    const kechizu = document.createElement('img');
    kechizu.classList.add('brother');
    kechizu.src = "../src/assets/kechizu.webp";
    kechizu.alt = "Kechizu";
    container2.appendChild(kechizu);

    const kechizuDiv = document.createElement('div');
    kechizuDiv.classList.add('info');
    container2.appendChild(kechizuDiv);

    const kechizuTitle = document.createElement("h2");
    kechizuTitle.textContent = "Kechizu";
    kechizuDiv.appendChild(kechizuTitle);

    const kechizuDesc = document.createElement('ul');
    kechizuDesc.innerHTML = '<p>Younger Brother</p> <p>Status: Dead</p> ';
    kechizuDiv.appendChild(kechizuDesc);

// Kechizu

// Eso

    const eso = document.createElement('img');
    eso.classList.add('brother');
    eso.src = "../src/assets/eso.webp";
    eso.alt = "Eso";
    container2.appendChild(eso);

    const esoDiv = document.createElement('div');
    esoDiv.classList.add('info');
    container2.appendChild(esoDiv);

    const esoTitle = document.createElement("h2");
    esoTitle.textContent = "Eso";
    esoDiv.appendChild(esoTitle);

    const esoDesc = document.createElement('ul');
    esoDesc.innerHTML = '<p>Younger Brother</p> <p>Status: Dead</p> ';
    esoDiv.appendChild(esoDesc);

// Eso

    const yuji = document.createElement('img');
    yuji.classList.add('brother');
    yuji.src = "../src/assets/yuji.webp";
    yuji.alt = "Yuji";
    container2.appendChild(yuji);

    const yujiDiv = document.createElement('div');
    yujiDiv.classList.add('info');
    container2.appendChild(yujiDiv);

    const yujiTitle = document.createElement("h2");
    yujiTitle.textContent = "Yuji Itadori";
    yujiDiv.appendChild(yujiTitle);

    const yujiDesc = document.createElement('ul');
    yujiDesc.innerHTML = '<p>Younger Brother</p> <p>Status: Alive</p> ';
    yujiDiv.appendChild(yujiDesc);
}

