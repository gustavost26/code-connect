import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

import styles from './page.module.css'
import Link from "next/link";
import db from "../../prisma/db";


// const post = {
//   "id": 1,
//   "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   "title": "Introdução ao React",
//   "slug": "introducao-ao-react",
//   "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   "author": {
//       "id": 101,
//       "name": "Ana Beatriz",
//       "username": "anabeatriz_dev",
//       "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//   }
// }

async function getAllPosts(page, searchTerm) {
  // const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`); 

  // if(!response.ok) {
  //   logger.error('Ops, alguma coisa correu mal!');
  //   return [];
  // }

  // logger.info('Posts obtidos com sucesso!');
  // return response.json();

  const where = {};

  if (searchTerm) {
    where.title = {
      contains: searchTerm,
      mode: 'insensitive'
    }
  }

  const perPage = 6;
  const skip = (page - 1) * perPage;

  const totalItems = await db.post.count({where});
  const totalPages = Math.ceil(totalItems / perPage);

  const prev = page > 1 ? page - 1 : null;
  const next = page < totalPages ? page + 1 : null;

  try {
    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        author: true
      }
    });

    return { data: posts, prev, next }; 
  } catch (error) {
    logger.error('Falha ao obter os posts!', { error });
    return { data: [], prev: null, next: null }; 

  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1);
  const searchTerm = searchParams?.q;
  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm);

  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      <div className={styles.links}> 
        {prev && <Link href={{pathname: '/', query: { page: prev, q: searchTerm }}}>Página Anterior</Link>}
        {next && <Link href={{pathname: '/', query: { page: next, q: searchTerm }}}>Próxima Página</Link>}
      </div>
    </main>
  );
}
