import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const ADSENSE_CLIENT_ID = 'ca-pub-2647435913952669';
const SCRIPT_ID = 'adsense-script';

interface AdsenseUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdsenseUnit({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style,
}: AdsenseUnitProps) {
  const isAdPushed = useRef(false);

  useEffect(() => {
    // 스크립트 중복 로드 방지
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onerror = () => {
        console.warn('[AdsenseUnit] 광고 스크립트 로드 실패');
      };
      document.head.appendChild(script);
    }

    // 동일 슬롯 중복 push 방지
    if (isAdPushed.current) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      isAdPushed.current = true;
    } catch (error) {
      console.warn('[AdsenseUnit] 광고 초기화 실패:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client={ADSENSE_CLIENT_ID}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={String(fullWidthResponsive)}
    />
  );
}