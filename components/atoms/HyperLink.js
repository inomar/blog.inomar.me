import Link from 'next/link';
import { linkResolver, hrefResolver } from '../../lib/prismic-configuration';

export default ({ type, uid, children }) => (
  <Link as={linkResolver({ type, uid })} href={hrefResolver({ type, uid })}>
    {children}
  </Link>
)