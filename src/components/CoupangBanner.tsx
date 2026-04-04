interface CoupangBannerProps {
  id: string;
  width?: number;
  height?: number;
}

export default function CoupangBanner({ id, width = 680, height = 140 }: CoupangBannerProps) {
  const src = `https://ads-partners.coupang.com/widgets.html?id=${id}&template=carousel&trackingCode=AF9194852&subId=&width=${width}&height=${height}&tsource=`;

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      scrolling="no"
      referrerPolicy="unsafe-url"
      style={{ maxWidth: '100%' }}
    />
  );
}
