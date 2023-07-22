import { LikeButton } from './LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return (posts.map(post => (
    <article className='my-8' key={post.id}>
      <h2 className='text-sky-300'>{post.title}</h2>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ))
  )
}
