export const apiEndpoint = 'https://blog-inomar-me.cdn.prismic.io/api/v2';
export const accessToken = process.env.ACCESS_TOKEN;

export const linkResolver = (doc) => {
  console.log(doc)
  switch(doc.type) {
    case 'blogpost':
      return `/posts/${doc.uid}`;
    case 'profile':
      return '/about';
    default:
      return '/'
  }
}

export const hrefResolver = (doc) => {
  switch(doc.type) {
    case 'blogpost':
      return `/posts/[uid]`;
    case 'profile':
      return '/about';
    default:
      return '/';
  };
}
