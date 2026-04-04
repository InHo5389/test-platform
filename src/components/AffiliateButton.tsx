import type { ReactNode } from 'react';

interface AffiliateButtonProps {
  href: string;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function AffiliateButton({ href, onClick, children, className, style }: AffiliateButtonProps) {
  const handleClick = () => {
    window.open(href, '_blank');
    onClick();
  };

  return (
    <button onClick={handleClick} className={className} style={style}>
      {children}
    </button>
  );
}
