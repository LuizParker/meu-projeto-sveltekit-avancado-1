export async function load({ url }) {
    const x = url.searchParams.get('x');
    const y = url.searchParams.get('y');
    
    return { x, y };
}
