<script>
    let { data } = $props ();
</script>

<h1>Usuários</h1>
<form>
    <input type="number" name="idade" placeholder="Digite uma idade" />
    <button>Buscar por idade</button>
</form>
<ol>
    {#each data.users as user}
    <li><a href="/03/dummy/users/{user.id}">{user.firstName}</a></li>
    {/each}
</ol>