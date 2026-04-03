import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { eventSenderGA, fetchResultBySeason } from '../tools/mockApi';
import type { PersonalColorResult, PersonalColorSeason } from '../types';

export default function ResultPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [result, setResult] = useState<PersonalColorResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const season = searchParams.get('season') as PersonalColorSeason | null;

  useEffect(() => {
    if (!id || !season) {
      navigate('/');
      return;
    }
    fetchResultBySeason(id, season).then((data) => {
      if (!data) {
        navigate('/');
        return;
      }
      setResult(data);
      setLoading(false);
    });
  }, [id, season, navigate]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      eventSenderGA('Test', 'Test Copy Link', id);
    } catch {
      // fallback for unsupported environments
    }
  };

  const handleKakaoShare = () => {
    // 카카오 SDK가 없는 경우 링크 복사로 fallback
    handleCopyLink();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-gray-200 border-t-gray-400 animate-spin" />
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="min-h-screen flex flex-col pb-10">
      {/* 결과 공개 전 */}
      {!revealed ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center">
          <div
            className="w-24 h-24 rounded-full shadow-lg"
            style={{ backgroundColor: result.hex }}
          />
          <div>
            <p className="text-sm text-gray-400">테스트 완료!</p>
            <p className="text-lg font-bold text-gray-700 mt-1">
              당신의 퍼스널 컬러를 확인해보세요
            </p>
          </div>
          <button
            onClick={() => { eventSenderGA('Test', 'Test View Reult', id); setRevealed(true); }}
            className="w-full py-4 rounded-2xl text-white font-bold text-base transition-transform active:scale-95"
            style={{ background: 'linear-gradient(135deg, #f7a97c, #b8a9c9)' }}
          >
            결과 보기 🎨
          </button>
        </div>
      ) : (
        <>
          {/* 결과 헤더 */}
          <div
            className="w-full pt-14 pb-10 flex flex-col items-center text-center px-6"
            style={{ backgroundColor: result.hex + '33' }}
          >
            <div
              className="w-28 h-28 rounded-full shadow-xl mb-5 border-4 border-white"
              style={{ backgroundColor: result.hex }}
            />
            <p className="text-sm text-gray-500 tracking-wide uppercase font-medium">
              당신의 퍼스널 컬러
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
              {result.colorName}
            </h1>
            <div className="flex flex-wrap justify-center gap-1.5 mt-3">
              {result.keywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs px-3 py-1 rounded-full text-white font-medium"
                  style={{ backgroundColor: result.hex }}
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* 설명 */}
          <div className="px-6 py-5">
            <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-600 leading-relaxed">
              {result.description}
            </div>
          </div>

          {/* 궁합 */}
          <div className="px-6 pb-4">
            <h2 className="text-sm font-bold text-gray-700 mb-3">컬러 궁합</h2>

            {/* 잘 맞는 컬러 */}
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                <span>💚</span> 만나면 좋은 컬러
              </p>
              <div className="flex gap-3">
                {result.goodColors.map((c) => (
                  <div key={c.season} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-14 h-14 rounded-xl shadow-sm border border-white"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs text-gray-600 font-medium text-center leading-tight">
                      {c.colorName}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 거리두기 필요한 컬러 */}
            <div>
              <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                <span>🚫</span> 거리두기 필요한 컬러
              </p>
              <div className="flex gap-3">
                {result.badColors.map((c) => (
                  <div key={c.season} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-14 h-14 rounded-xl shadow-sm border border-white opacity-70"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs text-gray-600 font-medium text-center leading-tight">
                      {c.colorName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100 mx-6 my-2" />

          {/* 공유 / 다시하기 버튼 */}
          <div className="px-6 pt-4 flex flex-col gap-3">
            <p className="text-xs text-center text-gray-400">결과를 공유해보세요!</p>
            <div className="flex gap-2">
              <button
                onClick={handleCopyLink}
                className="flex-1 py-3.5 rounded-2xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all"
              >
                {copied ? '✅ 복사됨!' : '🔗 링크 복사'}
              </button>
              <button
                onClick={handleKakaoShare}
                className="flex-1 py-3.5 rounded-2xl text-sm font-semibold active:scale-95 transition-all text-gray-800"
                style={{ backgroundColor: '#FEE500' }}
              >
                💬 카카오 공유
              </button>
            </div>
            <button
              onClick={() => { eventSenderGA('Test', 'Test Retry Button', id); navigate(`/test/${id}`); }}
              className="w-full py-3.5 rounded-2xl border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all"
            >
              🔄 다시 하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}
