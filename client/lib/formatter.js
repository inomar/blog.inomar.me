import { strDateTo } from '../modules/utility';

export const postFormatter = (post) => {
  const { id, type, tags, data, first_publication_date, last_publication_date } = post;
  return {
    id,
    type,
    title: data.title[0].text,
    categories: tags,
    contents: data.body,
    slug: id,
    publishedAt: strDateTo(first_publication_date),
    publishedDate: new Date(first_publication_date).getDate(),
    publishedMonth: new Date(first_publication_date).getMonth(),
    publishedYear: new Date(first_publication_date).getFullYear(),
    modifiedAt: strDateTo(last_publication_date),
  }
};

export const categoryFormatter = (category) => (
  {
    id: category.id,
    name: category.name,
    slug: category.slug,
    count: category.count,
  }
);
