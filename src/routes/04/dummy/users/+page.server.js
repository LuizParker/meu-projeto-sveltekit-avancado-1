export async function load({ fetch, url }) {
    let link = 'https://dummyjson.com/users/';
    const idade = url. searchParams. get ('idade') ;
    if (idade) link += `/filter?key=age&value=$ {idade}`
    const resposta = await fetch (link) ;
    const objeto = await resposta.json () ;
    return { users: objeto.users } ;
}