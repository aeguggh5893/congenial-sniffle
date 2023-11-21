export function contacts() {
    const content = document.querySelector('#content');
    content.replaceChildren();


    const gohan = document.createElement('img');
    gohan.src = "https://www.pngfind.com/pngs/m/136-1364705_son-gohan-png-adult-gohan-purple-gi-transparent.png";
    gohan.alt = "adult-gohan";

    content.appendChild(gohan);

    const h2 = document.createElement("h2");
    h2.textContent = "Contact Adult Gohan";

    content.appendChild(h2);
}

