<script>
    export let data;
  </script>
   
  <form method="POST">
    <input name="a" type="number" />
    <br>
    <input name="b" type="number" />
    <br>
    <button type="submit">Enviar!</button>
  </form>
   
  {#if data?.status == 400}
    <p>{data.erro}</p>
  {:else if data}
    <p>Bem-vindo!</p>
  {/if}
  