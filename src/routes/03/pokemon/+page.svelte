<script>
    export let data;
  
    let page = data.page;
    let totalPages = data.totalPages;
    let search = data.search;
  
    function goToPage(newPage) {
      if (newPage < 1 || newPage > totalPages) return;
  
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      params.set('page', newPage);
  
      window.location.href = `/03/pokemon?${params.toString()}`;
    }
  
    function onSearch(event) {
      event.preventDefault();
      goToPage(1);
    }
  </script>
  
  <form on:submit|preventDefault={onSearch} class="mb-4">
    <input
      type="text"
      placeholder="Buscar Pokémon pelo nome..."
      bind:value={search}
      class="form-control"
    />
    <button type="submit" class="btn btn-primary mt-2">Buscar</button>
  </form>
  
  <div class="row">
    {#each data.pokemons as p}
      <div class="col-md-3 col-sm-6 mb-3">
        <div class="card">
          <img src={p.image} alt={p.name} class="card-img-top" />
          <div class="card-body">
            <a href={`/03/pokemon/${p.name}`} class="stretched-link text-decoration-none">
              <h5 class="card-title text-capitalize">{p.name}</h5>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <div class="d-flex justify-content-between mt-4">
    <button class="btn btn-secondary" on:click={() => goToPage(page - 1)} disabled={page <= 1}>
      Anterior
    </button>
    <span>Página {page} de {totalPages}</span>
    <button class="btn btn-secondary" on:click={() => goToPage(page + 1)} disabled={page >= totalPages}>
      Próximo
    </button>
  </div>
  