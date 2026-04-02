import { useNavigate } from 'react-router-dom';
import logo from '../assets/web_logo.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="px-5 py-3 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="w-16" />

      <button onClick={() => navigate('/')}>
        <img src={logo} alt="심(리)봤다" className="h-14 object-contain" />
      </button>

      <div className="flex items-center gap-3 w-16 justify-end">
        {/* 돋보기 */}
        <button className="text-gray-700 hover:text-gray-900 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
        </button>
        {/* 마이페이지 */}
        <button className="text-gray-700 hover:text-gray-900 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
