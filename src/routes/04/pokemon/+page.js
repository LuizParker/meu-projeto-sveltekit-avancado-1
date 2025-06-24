export async function load({ url }) {
    const limit = 20;
    const page = parseInt(url.searchParams.get('page')) || 1;
    const offset = (page - 1) * limit;
    const maxFirstGen = 151
  ;
  
    const search = url.searchParams.get('search')?.toLowerCase() || '';
  
    // Sempre carregamos os 151 primeiros para busca e paginação
    const allRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxFirstGen}`);
    const allData = await allRes.json();
  
    // Filtra se tem busca
    let filtered = allData.results;
    if (search) {
      filtered = filtered.filter(p => p.name.includes(search));
    }
  
    // Pagina os resultados filtrados
    const paginated = filtered.slice(offset, offset + limit);
  
    for (const pokemon of paginated) {
      const id = pokemon.url.split("/").at(-2);
      pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
  
    const totalPages = Math.ceil(filtered.length / limit);
  
    return {
      pokemons: paginated,
      page,
      totalPages,
      search
    };
  }
  