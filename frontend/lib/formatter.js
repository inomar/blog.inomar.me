import { strDateTo } from '../modules/utility';

export const postFormatter = (post) => (
  {
    id: post.id,
    title: post.title.rendered,
    categories: post.categories,
    content: post.content.rendered,
    slug: post.slug,
    publishedAt: strDateTo(post.date),
    modifiedAt: strDateTo(post.modified),
  }
);

export const categoryFormatter = (category) => (
  {
    id: category.id,
    name: category.name,
    slug: category.slug,
    count: category.count,
  }
);
