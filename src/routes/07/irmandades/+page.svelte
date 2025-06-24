<script>
   export let form; // dados retornados das actions, para preservar inputs e erros
 
   // Usar valores retornados para preencher o form (se houver)
   let nome = form?.nome ?? '';
   let nascimento = form?.nascimento ?? '';
   let forca = form?.forca ?? '';
   let inteligencia = form?.inteligencia ?? '';
   let destreza = form?.destreza ?? '';
   let magia = form?.magia ?? false;
   let ferramentas = form?.ferramentas ?? false;
 </script>
 
 <svelte:head>
   <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap" rel="stylesheet" />
 </svelte:head>
 
 <form method="post">
   <h2>Inscrição nas Irmandades</h2>
 
   <label>
     Nome:
     <input name="nome" type="text" placeholder="Nome do aprendiz" value={nome} />
   </label><br />
 
   <label>
     Nascimento:
     <input name="nascimento" type="date" value={nascimento} />
   </label><br />
 
   <label>
     Força:
     <input name="forca" type="number" min="1" max="10" value={forca} />
   </label><br />
 
   <label>
     Inteligência:
     <input name="inteligencia" type="number" min="1" max="10" value={inteligencia} />
   </label><br />
 
   <label>
     Destreza:
     <input name="destreza" type="number" min="1" max="10" value={destreza} />
   </label><br />
 
   <label>
     <input name="magia" type="checkbox" checked={magia} />
     Conhecimento de magia
   </label><br />
 
   <label>
     <input name="ferramentas" type="checkbox" checked={ferramentas} />
     Ferramentas de artesão
   </label><br />
 
   <button formaction="?/juntarGuerreiros">Inscrever na Ordem dos Guerreiros</button>
   <button formaction="?/juntarMagos">Inscrever no Círculo dos Magos</button>
   <button formaction="?/juntarArtesaos">Inscrever na Guilda dos Artesãos</button>
 </form>
 
 {#if form?.error}
   <p class="erro">{form.error}</p>
 {/if}
 
 