import { strDateTo } from './utility';

export const postFormatter = (post) => {
  if (!post) return null;
  const { id, uid, type, tags, data, first_publication_date, last_publication_date } = post;
  return {
    id,
    uid,
    type,
    tags,
    title: data.title[0].text,
    categories: tags,
    contents: data.body,
    publishedRawAt: first_publication_date,
    modifiedRawAt: last_publication_date,
  }
};
