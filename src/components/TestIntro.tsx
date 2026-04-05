import { eventSenderGA } from '../tools/mockApi';
import type { TestInfo } from '../types';
import KakaoAdfit from './KakaoAdfit';
import CoupangBanner from './CoupangBanner';
import AdsenseUnit from './AdsenseUnit';

interface TestIntroProps {
  info: TestInfo;
  onStart: () => void;
}

export default function TestIntro({ info, onStart }: TestIntroProps) {
  const handleStart = () => {
    eventSenderGA('Test', 'Test Start Button', info.mainUrl);
    onStart();
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 썸네일 + 제목 영역 */}
      <div className="flex gap-4 px-5 pt-5 pb-4 border-b border-gray-100 items-start">
        <div className="shrink-0 rounded-xl overflow-hidden bg-gray-100" style={{ width: 260, height: 260 }}>
          <img src={info.thumbImage} alt={info.mainTitle} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2.5 pt-1">
          <h1 className="text-xl font-extrabold text-gray-900 leading-tight">{info.mainTitle}</h1>
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span>{info.author}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" />
            </svg>
            <span>{info.viewCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            <span>{info.duration}</span>
          </div>
        </div>
      </div>

      {/* 설명 텍스트 */}
      <div className="px-5 py-5 border-b border-gray-100">
        <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
          {info.description}
        </p>
      </div>

      {/* 해시태그 */}
      <div className="px-5 py-4 flex flex-wrap gap-2 border-b border-gray-100">
        {info.tags.map((tag) => (
          <span key={tag} className="text-sm text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
            # {tag}
          </span>
        ))}
      </div>

      {/* 광고 */}
      <div className="flex justify-center py-3">
        <KakaoAdfit adUnit="DAN-7hs5CjmrI10XA1Jd" adWidth="320" adHeight="100" />
      </div>
      <div className="flex justify-center py-3">
        <CoupangBanner id="978084" />
      </div>
      <div className="px-4 py-3">
        <AdsenseUnit adSlot="7609408225" />
      </div>

      {/* 시작 버튼 */}
      <div className="px-5 py-4 border-b border-gray-100">
        <button
          onClick={handleStart}
          className="w-full py-4 rounded-xl text-white font-bold text-base transition-transform active:scale-95"
          style={{ backgroundColor: '#4B6FFF' }}
        >
          테스트 시작
        </button>
      </div>

      {/* 액션 버튼 */}
      <div className="px-5 py-4 flex justify-around">
        {[
          { icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          ), label: '저장하기' },
          { icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
            </svg>
          ), label: '재밌어요' },
          { icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ), label: '정확해요' },
          { icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          ), label: '공유하기' },
        ].map(({ icon, label }) => (
          <button key={label} className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors">
            {icon}
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
