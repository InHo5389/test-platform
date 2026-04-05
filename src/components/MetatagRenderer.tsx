import { Helmet } from 'react-helmet-async';
import type { TestInfo } from '../types';

const SITE_NAME = '알아보개';
const DEFAULT_TITLE = '알아보개 - 나를 알아보는 테스트';
const DEFAULT_DESCRIPTION = '재미있는 심리테스트와 MBTI 테스트를 무료로 즐겨보세요.';
const DEFAULT_IMAGE = 'https://arabogae.shop/og-image.png';
const BASE_URL = 'https://arabogae.shop';

interface MetatagRendererProps {
  info?: TestInfo;
  title?: string;
  description?: string;
  path?: string;
}

export default function MetatagRenderer({ info, title, description, path }: MetatagRendererProps) {
  const resolvedTitle = title ?? (info ? `${info.mainTitle} | ${SITE_NAME}` : DEFAULT_TITLE);
  const resolvedDescription = description ?? info?.subTitle ?? DEFAULT_DESCRIPTION;
  const resolvedImage = info?.thumbImage ?? DEFAULT_IMAGE;
  const resolvedUrl = info?.mainUrl
    ? `${BASE_URL}/${info.mainUrl}`
    : `${BASE_URL}${path ?? ''}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{resolvedTitle}</title>
      <meta name="title" content={resolvedTitle} />
      <meta name="description" content={resolvedDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={resolvedUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={resolvedImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={resolvedUrl} />
      <meta property="twitter:title" content={resolvedTitle} />
      <meta property="twitter:description" content={resolvedDescription} />
      <meta property="twitter:image" content={resolvedImage} />
    </Helmet>
  );
}
