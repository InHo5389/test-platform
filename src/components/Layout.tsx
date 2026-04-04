import { Outlet, Link } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#f5f5f5' }}>
      <div
        className="mx-auto bg-white min-h-screen flex flex-col"
        style={{
          width: '680px',
          maxWidth: '100%',
          boxShadow: '0 0 40px rgba(0,0,0,0.08)',
        }}
      >
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="border-t border-gray-100 px-6 py-6 text-center">
          <p className="text-sm font-semibold text-gray-700 mb-1">광고 제안 및 문의</p>
          <a
            href="mailto:contact@mbtiplatform.com"
            className="text-sm text-blue-500 hover:underline"
          >
            contact@mbtiplatform.com
          </a>
          <div className="mt-4 text-xs text-gray-400 space-y-1">
            <p>본 서비스의 광고 게재, 제휴, 협업 등 비즈니스 문의는 위 이메일로 연락해주세요.</p>
            <p>© 2025 MBTI Platform. All rights reserved.</p>
          </div>
          <div className="mt-3">
            <Link
              to="/privacy"
              className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2"
            >
              개인정보처리방침
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
