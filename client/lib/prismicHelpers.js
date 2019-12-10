import Link from 'next/link';
import {
  linkResolver,
  hrefResolver,
  apiEndpoint,
  accessToken,
} from './prismic-configuration';
import Prismic from 'prismic-javascript';

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)

let frontClient;
export const Client = (req = null) => {
  if (!req && frontClient) return frontClient;
  else {
    const options = Object.assign({}, req ? { req } : {}, accessToken ? { accessToken: accessToken } : {});
    return Prismic.client(apiEndpoint, options);
  }
}

export default Client;
