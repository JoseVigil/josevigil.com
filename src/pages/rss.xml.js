import rss from '@astrojs/rss';
import { collections } from '@content/config';
import { getCollection } from 'astro:content';

export async function get(context) {

  const posts = [];

  const colls = Object.keys(collections);

  for await (let c of colls) {
    const coll = await getCollection(c);
    coll.map((post) => {
      posts.push({
        ...post.data,
        link: `/blog/${c}/${post.slug}`,
      });
    });
  }

  return rss({
    title: 'Website | Jose Vigil',
    description: 'Jose Vigil\'s personal and professional website',
    site: context.site,
    items: posts
  });
}
