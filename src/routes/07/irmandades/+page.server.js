import { fail, redirect } from '@sveltejs/kit';

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

export const actions = {
  juntarGuerreiros: async ({ request }) => {
    const data = await request.formData();

    const nome = data.get('nome');
    const nascimento = data.get('nascimento');
    const forca = Number(data.get('forca'));

    if (!nome || !nascimento || !forca) {
      return fail(400, {
        error: 'Preencha todos os campos obrigatórios!',
        nome, nascimento, forca
      });
    }

    const idade = calcularIdade(nascimento);
    if (idade < 18) {
      return fail(400, {
        error: 'Você precisa ter ao menos 18 anos para a Ordem dos Guerreiros.',
        nome, nascimento, forca
      });
    }

    if (forca < 7) {
      return fail(400, {
        error: 'Sua força precisa ser pelo menos 7 para a Ordem dos Guerreiros.',
        nome, nascimento, forca
      });
    }

    throw redirect(303, '/07/irmandades/guerreiros');
  },

  juntarMagos: async ({ request }) => {
    const data = await request.formData();

    const nome = data.get('nome');
    const nascimento = data.get('nascimento');
    const inteligencia = Number(data.get('inteligencia'));
    const magia = data.get('magia') === 'on';

    if (!nome || !nascimento || !inteligencia) {
      return fail(400, {
        error: 'Preencha todos os campos obrigatórios!',
        nome, nascimento, inteligencia, magia
      });
    }

    const idade = calcularIdade(nascimento);
    if (idade < 16) {
      return fail(400, {
        error: 'Você precisa ter ao menos 16 anos para o Círculo dos Magos.',
        nome, nascimento, inteligencia, magia
      });
    }

    if (inteligencia < 8) {
      return fail(400, {
        error: 'Sua inteligência precisa ser pelo menos 8 para o Círculo dos Magos.',
        nome, nascimento, inteligencia, magia
      });
    }

    if (!magia) {
      return fail(400, {
        error: 'Você precisa possuir conhecimento de magia.',
        nome, nascimento, inteligencia, magia
      });
    }

    throw redirect(303, '/07/irmandades/magos');
  },

  juntarArtesaos: async ({ request }) => {
    const data = await request.formData();

    const nome = data.get('nome');
    const nascimento = data.get('nascimento');
    const destreza = Number(data.get('destreza'));
    const ferramentas = data.get('ferramentas') === 'on';

    if (!nome || !nascimento || !destreza) {
      return fail(400, {
        error: 'Preencha todos os campos obrigatórios!',
        nome, nascimento, destreza, ferramentas
      });
    }

    const idade = calcularIdade(nascimento);
    if (idade < 15) {
      return fail(400, {
        error: 'Você precisa ter ao menos 15 anos para a Guilda dos Artesãos.',
        nome, nascimento, destreza, ferramentas
      });
    }

    if (destreza < 6) {
      return fail(400, {
        error: 'Sua destreza precisa ser pelo menos 6 para a Guilda dos Artesãos.',
        nome, nascimento, destreza, ferramentas
      });
    }

    if (!ferramentas) {
      return fail(400, {
        error: 'Você precisa possuir ferramentas de artesão.',
        nome, nascimento, destreza, ferramentas
      });
    }

    throw redirect(303, '/07/irmandades/artesaos');
  }
};
