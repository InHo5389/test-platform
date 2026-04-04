interface TestResultRenderProps {
  onReveal: () => void;
}

export default function TestResultRender({ onReveal }: TestResultRenderProps) {
  const handleCoupang = () => {
    window.open('https://link.coupang.com/a/eiaCva', '_blank');
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl">🎁</p>
        <p className="text-lg font-bold text-gray-800">결과 확인 전 잠깐!</p>
        <p className="text-sm text-gray-400 leading-relaxed">
          아래 광고를 확인하고<br />결과를 무료로 볼 수 있어요
        </p>
      </div>

      <button
        onClick={handleCoupang}
        className="w-full py-4 rounded-2xl text-white font-bold text-base active:scale-95 transition-transform"
        style={{ backgroundColor: '#E5262E' }}
      >
        🛒 쿠팡 광고 보기
      </button>

      <button
        onClick={onReveal}
        className="w-full py-3.5 rounded-2xl border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all"
      >
        결과 확인하기 →
      </button>
    </div>
  );
}
