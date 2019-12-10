export const apiEndpoint = 'https://blog-inomar-me.cdn.prismic.io/api/v2';
export const accessToken = process.env.ACCESS_TOKEN;

export const linkResolver = ({ type, page, uid }) => {
  switch(type) {
    case 'pagenate':
      return `/?page=${page}`;
    case 'blogpost':
      return `/posts/${uid}`;
    case 'profile':
      return '/about';
    default:
      return '/'
  }
}

export const hrefResolver = ({ type, page, uid }) => {
  switch(type) {
    case 'pagenate':
      return `/?page=${page}`;
    case 'blogpost':
      return `/posts/[uid]`;
    case 'profile':
      return '/about';
    default:
      return '/';
  };
}
//111680