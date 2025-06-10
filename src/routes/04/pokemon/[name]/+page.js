export async function load({ params }) {
    const { name } = params;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    
    if (!res.ok) {
      return {
        status: res.status,
        error: new Error(`Pokémon ${name} não encontrado`)
      };
    }
    
    const data = await res.json();
  
    return { pokemon: data };
  }
  