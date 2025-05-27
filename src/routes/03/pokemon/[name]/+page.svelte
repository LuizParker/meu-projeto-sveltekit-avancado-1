<script>
    export let data;
    const p = data.pokemon;
  </script>
  
  <h1 class="text-capitalize">{p.name}</h1>
  
  <img src={p.sprites.front_default} alt={p.name} />
  
  <h3>Tipos</h3>
  <ul>
    {#each p.types as type}
      <li>{type.type.name}</li>
    {/each}
  </ul>
  
  <h3>Habilidades</h3>
  <ul>
    {#each p.abilities as ability}
      <li>{ability.ability.name}</li>
    {/each}
  </ul>
  
  <h3>Status</h3>
  <ul>
    {#each p.stats as stat}
      <li>{stat.stat.name}: {stat.base_stat}</li>
    {/each}
  </ul>
  
  <a href="/03/pokemon" class="btn btn-primary mt-3">Voltar à lista</a>
  