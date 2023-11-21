export function contacts() {
    const content = document.querySelector('#content');
    content.replaceChildren();


    const gohan = document.createElement('img');
    gohan.src = "../src/assets/choso.webp";
    gohan.alt = "adult-gohan";

    content.appendChild(gohan);

    const h2 = document.createElement("h2");
    h2.textContent = "Contact Adult Gohan";

    content.appendChild(h2);
}

