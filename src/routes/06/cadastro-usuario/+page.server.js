import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const dados = {
      nome: data.get('nome'),
      email: data.get('email'),
      senha: data.get('senha'),
      confirmacaosenha: data.get('confirmacaosenha'),
      nascimento: data.get('nsacimento')
    };

    if (dados.nome.length < 2) return fail(400, { erro: 'O nome deve ter pelo menos dois caracteres!', dados });

    if (!dados.email.includes('@')) return fail(400, { erro: 'E-mail inválido!', dados });

    if (dados.senha.length < 4) return fail(400, { erro: 'A senha deve ter pelo menos quatro caracteres!', dados });

    return { sucesso: true, dados };
  }
};
