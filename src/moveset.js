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
    description.classList.add('moveset-info');
    description.textContent = `Choso is ranked as a special grade. He is exceptionally powerful even by cursed spirit standards
                                Choso was intelligent and self-aware which allowed him to hone his cursed techniques for 150 years.
                                By the time he was incarnated, Choso had already mastered Blood Manipulation to a level that far
                                surpasses the current Noritoshi Kamo. Choso also possesses high tactical intellect, master hand-to-hand
                                combat experience, and advanced endurance.`;
    
    container3.appendChild(description);
    
    const techTitle = document.createElement('h1');
    techTitle.textContent = 'Techniques';
    container3.appendChild(techTitle);

    // const techDiv = document.createElement('div');
    // techDiv.classList.add('techniques-section');
    // container3.appendChild(techDiv);

    // const img = document.createElement('img');
    // img.src = '../src/assets/choso-pb.webp';
    // img.alt = 'Choso using piercing blood';
    // img.classList.add('tech-image');
    // techDiv.appendChild(img);

    // const tech1 = document.createElement('p');
    // tech1.innerText = 'Choso using piercing blood utilizing convergence';
    // techDiv.appendChild(tech1);

    let pictures = ['choso-pb', 'choso-supernova', 'choso-se'];

    const techDiv = document.createElement('div');
    techDiv.classList.add('techniques-section');
    container3.appendChild(techDiv);

    for (let i = 0; i < 3; i++) {
    const img = document.createElement('img');
    img.src = `../src/assets/${pictures[i]}.webp`;
    img.alt = `Choso using his curse techniques`;
    img.classList.add('tech-image');
    techDiv.appendChild(img);

    const tech = document.createElement('p');
    tech.classList.add('tech-desc');
    
    if (i === 0) {
        tech.innerHTML = `<strong><em>Piercing Blood</em></strong> - A deadly blood beam fired from Choso's clasped hands after charging up Convergence. Choso is able to bend the beam and make it ricochet should it miss, 
        but Piercing Blood does not maintain the same level of extreme velocity as when its first shot.`
    } else if (i === 1) {
        tech.innerHTML = `<strong><em>Supernova</em></strong> - A Choso original that he developed while honing Blood Manipulation for 150 years. 
        It detonates several orbs of blood condensed with Convergence and fires reinforced blood bullets in every direction. It can also be channeled into one larger sphere that explodes into an even more devastating attack.`
    } else {
        tech.innerHTML = `<strong><em>Slicing Exorcism</em></strong> - Unleashes sharpened blood that rapidly flies through the air and slices through Choso's target. He is capable of shaping it into long streams of blood at a wide range for hitting or forming it into a rotating charkarm for a singular attack`
    }

    techDiv.appendChild(tech);
}

}


