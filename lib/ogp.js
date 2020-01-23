import React from 'react';

import { TWITTER_ACCOUNT, SITE_TITLE, SITE_URL,  SITE_DESCRIPTION } from '../constants';

export default ({ url, title, description, image, isTop = true }) => {
  const ogpUrl = url || SITE_URL;
  const ogpTitle = title && `${title} | ${SITE_TITLE.MAIN}` || SITE_TITLE.MAIN;
  const ogpDescription = description || SITE_DESCRIPTION;
  const ogpImage = image || `${SITE_URL}/ogp.png`;
  const pageType = isTop ? 'website' : 'article';
  return (
    <React.Fragment>
      <meta property="og:url" content={ogpUrl} />
      <meta property="og:title" content={ogpTitle} />
      <meta property="og:type" content={pageType} />
      <meta property="og:description" content={ogpDescription} />
      <meta property="og:image" content={ogpImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={TWITTER_ACCOUNT} />
      <meta property="og:site_name" content={SITE_TITLE.FULL} />
      <meta property="og:locale" content="ja_JP" />
    </React.Fragment>
  )
}
