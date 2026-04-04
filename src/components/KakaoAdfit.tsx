import { useEffect, useRef } from "react";

interface KakaoAdfitProps {
  adUnit: string;
  adWidth: string;
  adHeight: string;
}

const KakaoAdfit = ({ adUnit, adWidth, adHeight }: KakaoAdfitProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.daumcdn.net/kas/static/ba.min.js";
    script.charset = "utf-8";
    script.async = true;
    containerRef.current?.appendChild(script);
  }, []);

  return (
    <div ref={containerRef}>
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit={adUnit}
        data-ad-width={adWidth}
        data-ad-height={adHeight}
      />
    </div>
  );
};

export default KakaoAdfit;
