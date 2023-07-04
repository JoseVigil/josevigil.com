import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {

  const posts = [];

  let essays = await getCollection('essays');

  essays.map((post) => {
    posts.push({
      ...post.data,
      link: `/essays/${post.slug}`,
    });
  });

  return rss({
    title: 'RSS | Jose Vigil',
    description: 'Jose Vigil\'s personal and professional website',
    site: context.site,
    items: posts
  });
}
