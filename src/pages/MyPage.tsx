import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function MyPage() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col items-center gap-4 mb-8">
          {profile?.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt="프로필"
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
          )}
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">
              {profile?.full_name ?? '사용자'}
            </p>
            <p className="text-sm text-gray-500">{profile?.email}</p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
