interface Character {
    id: number;
    modelo: string;
    motor: string;

}

const url = "http://localhost:8081/cliente";
async function fetchCharacters() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${ response.statusText }`);
        }
        const data = await response.json();
        displayCharacters(data);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

function displayCharacters(characters: Character[]) {
    const container = document.getElementById('characters-container');
    if (container) {
        container.innerHTML = "";
        characters.forEach(character => {
            container.innerHTML += `
          <div class="character-card">
            <h2>ID: ${character.id}</h2>
            <p>modelo: ${character.modelo}</p>
            <p>motor: ${character.motor}</p>
          </div>
        `;
        });
    }
}

fetchCharacters();