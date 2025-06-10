<script>
  export let data;
</script>

<h2>Postagem</h2>
<p><strong>Título:</strong> {data.post.title}</p>
<p><strong>Conteúdo:</strong> {data.post.body}</p>

<h3>Comentários</h3>
{#if data.comments.length > 0}
  <ul>
    {#each data.comments as comment}
      <li>
        <p><strong>{comment.name}</strong> ({comment.email})</p>
        <p>{comment.body}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>Não há comentários nesta postagem.</p>
{/if}

<p>
  <a href="/03/external/users">Voltar aos usuários</a>
</p>