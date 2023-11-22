export function moveset() {

    const content = document.querySelector('#content');
    content.replaceChildren();

    const container3 = document.createElement('div');
    container3.classList.add('container3');
    content.appendChild(container3);

    const banner = document.createElement('img');
    banner.src = '../src/assets/choso-tech-banner.jpeg';
    banner.alt = 'Choso Banner Moveset';

    container3.appendChild(banner);

    const description = document.createElement('p');
    description.textContent = `Choso is ranked as a special grade. He is exceptionally powerful even by cursed spirit standards
                                Choso was intelligent and self-aware which allowed him to hone his cursed techniques for 150 years.
                                By the time he was incarnated, Choso had already mastered Blood Manipulation to a level that far
                                surpasses the current Noritoshi Kamo. Choso also possesses high tactical intellect, master hand-to-hand
                                combat experience, and advanced endurance.`;
    
    container3.appendChild(description);
    
    const techTitle = document.createElement('h1');
    techTitle.textContent = 'Techniques';
    container3.appendChild(techTitle);

    const techDiv = document.createElement('div');
    techDiv.classList.add('techniques-section');
    container3.appendChild(techDiv);

    const img = document.createElement('img');
    img.src = '../src/assets/choso-pb.webp';
    img.alt = 'Choso using piercing blood';
    img.classList.add('tech-image');
    techDiv.appendChild(img);

    const tech1 = document.createElement('p');
    tech1.innerText = 'Choso using piercing blood utilizing convergence';
    techDiv.appendChild(tech1);

    const img2 = document.createElement('img');
    img2.src = '../src/assets/choso-supernova.webp';
    img2.alt = 'Choso using piercing blood';
    img2.classList.add('tech-image');
    techDiv.appendChild(img2);

    const tech2 = document.createElement('p');
    tech2.innerText = 'Choso using piercing blood utilizing convergence';
    techDiv.appendChild(tech2);
}

/*


function displayTechnique() {

}

*/