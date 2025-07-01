import { redirect, fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const a = formData.get('a');
    const b = formData.get('b');

    if (a === b) {
      return fail(400, {
        status: 400,
        erro: 'Os valores não podem ser iguais!'
      });
    }

     redirect(303, `/p2/2?x=${a}&y=${b}`);
  }
};
