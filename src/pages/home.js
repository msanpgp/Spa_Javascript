import getData from "../utils/getData";

// Arrow functions
const Home = async () => {
    const characters = await getData();

    // las comillas francesas permiten trabajar en multilinea 
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}  
        </div>
    `;
    return view;
};

/* Se exporta el elemento Home para permitir identificar si 
este archivo puede ser utilizado dentro de otros archivos de 
javascript 
*/
export default Home;