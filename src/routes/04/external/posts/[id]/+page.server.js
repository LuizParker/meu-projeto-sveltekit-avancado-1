export async function load({ params, fetch }) {
  const postId = params.id

    const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await resPost.json();
  
    const resComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await resComments.json();
  
    return { post, comments };
  }