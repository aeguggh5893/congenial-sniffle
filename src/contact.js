export function contacts() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    makeBrother('kechizu', 'eso', 'yuji');

}

function makeBrother(string1, string2, string3) {
    let brothers = [];
    brothers.push(string1);
    brothers.push(string2);
    brothers.push(string3);

    const container2 = document.createElement('div');
    container2.classList.add('container2');
    content.appendChild(container2);
    
for (let i = 0; i < 3; i++) {

    const img = document.createElement('img');
    img.classList.add('brother');
    img.src = `../src/assets/${brothers[i]}.webp`;
    img.alt = `${brothers[i]}`;
    container2.appendChild(img);

    const div = document.createElement('div');
    div.classList.add('info');
    container2.appendChild(div);

    let word = `${brothers[i]}`;
    word = word[0].toUpperCase() + word.slice(1);

    const title = document.createElement('h2');
    title.textContent = word;
    div.appendChild(title);

    const description = document.createElement('ul');
    description.innerHTML = '<p>Younger Brother</p> <p>Status: Dead</p> ';
    div.appendChild(description);

    if (i === 2) {
        description.innerHTML = '<p>Younger Brother</p> <p>Status: Alive</p>';
    };

    };
}