import Link from 'next/link';
import { linkResolver, hrefResolver } from '../../lib/prismic-configuration';

export default ({ type, uid, page, children }) => (
  <Link as={linkResolver({ type, uid, page })} href={hrefResolver({ type, uid, page })}>
    {children}
  </Link>
)