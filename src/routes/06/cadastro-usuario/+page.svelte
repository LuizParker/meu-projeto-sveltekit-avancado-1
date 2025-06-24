<script>
  let { form } = $props();

  console.log(form);
</script>

<form method="POST">
  <input name="nome" type="text" placeholder="Nome do usuário" value={form?.dados.nome || ''} />
  <input name="email" type="email" placeholder="E-mail do usuário" value={form?.dados.email || ''} />
  <input name="senha" type="password" placeholder="Senha do usuário" value={form?.dados.senha || ''} />
  <input
    name="confirmacaosenha"
    type="password"
    placeholder="Confirnmação de senha"
    value={form?.dados.confirmacaosenha || ''}
  />
  <input name="nascimento" type="date" value={form?.dados.nascimento || ''} />
  <button>Cadastrar</button>
</form>

{#if !form}
  <p>Preencha o formulário</p>
{:else if form.erro}
  <p style="color: red;"><strong>Erro:</strong> {form.erro}</p>
{:else if form.sucesso}
  <p style="color: green;"><strong>Sucesso:</strong> Usuário {form.dados.nome} cadastrado!</p>
{/if}
