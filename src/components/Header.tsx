import { useNavigate } from 'react-router-dom';
import logo from '../assets/web_logo.png';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="px-5 py-3 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="w-16" />

      <button onClick={() => navigate('/')}>
        <img src={logo} alt="심(리)봤다" className="h-14 object-contain" />
      </button>

      <div className="flex items-center gap-2 justify-end">
        {user ? (
          <>
            <button
              onClick={() => navigate('/mypage')}
              className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex-shrink-0"
            >
              {user.user_metadata?.avatar_url ? (
                <img src={user.user_metadata.avatar_url} alt="프로필" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
              )}
            </button>
            <button
              onClick={handleSignOut}
              className="text-xs text-gray-500 hover:text-red-500 transition-colors whitespace-nowrap"
            >
              로그아웃
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
}
