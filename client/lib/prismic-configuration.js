export const apiEndpoint = 'https://blog-inomar-me.cdn.prismic.io/api/v2';
export const accessToken = process.env.ACCESS_TOKEN;

export const linkResolver = (doc) => {
  if (doc.type === 'profile') {
    return `/about`;
  }
  return '/';
}

export const hrefResolver = (doc) => {
  if (doc.type === 'profile') {
    return '/about';
  }
  return '/';
}
