import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTestById, calculateSeason } from '../tools/mockApi';
import ProgressBar from '../components/ProgressBar';
import TestIntro from '../components/TestIntro';
import MetatagRenderer from '../components/MetatagRenderer';
import type { Test, Question, PersonalColorSeason } from '../types';

type PageState = 'loading' | 'intro' | 'quiz' | 'calculating';

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function TestPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [pageState, setPageState] = useState<PageState>('loading');
  const [test, setTest] = useState<Test | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<PersonalColorSeason[]>([]);

  // 셔플된 질문 목록 - 렌더링 시 한 번만 생성
  const shuffledQuestions = useMemo<Question[]>(() => {
    if (!test) return [];
    return shuffle(test.questions).map((q) => ({
      ...q,
      answers: shuffle(q.answers),
    }));
  }, [test]);

  useEffect(() => {
    if (!id) return;
    fetchTestById(id).then((data) => {
      if (!data) {
        navigate('/');
        return;
      }
      setTest(data);
      setPageState('intro');
    });
  }, [id, navigate]);

  const handleAnswer = (season: PersonalColorSeason) => {
    const newAnswers = [...answers, season];
    setAnswers(newAnswers);

    if (newAnswers.length < shuffledQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // 모든 질문 완료 → 로딩 화면
      setPageState('calculating');
      setTimeout(() => {
        const result = calculateSeason(newAnswers);
        navigate(`/result/${id}?season=${result}`);
      }, 2200);
    }
  };

  // ── 로딩 중 ──
  if (pageState === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-gray-200 border-t-gray-400 animate-spin" />
      </div>
    );
  }

  // ── 결과 계산 중 ──
  if (pageState === 'calculating') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
            style={{ borderTopColor: '#f7a97c', borderRightColor: '#b8a9c9' }}
          />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">결과를 분석하는 중...</p>
          <p className="text-sm text-gray-400 mt-1">당신의 퍼스널 컬러를 찾고 있어요</p>
        </div>
        <div className="flex gap-1.5 mt-2">
          {(['봄', '여름', '가을', '겨울'] as const).map((s, i) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-full text-white font-medium animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                backgroundColor: ['#f7a97c', '#b8a9c9', '#c4733b', '#5b6a9c'][i],
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // ── 인트로 ──
  if (pageState === 'intro') {
    return (
      <>
        <MetatagRenderer info={test!.info} path={`/test/${id}`} />
        <TestIntro info={test!.info} onStart={() => setPageState('quiz')} />
      </>
    );
  }

  // ── 퀴즈 ──
  const question = shuffledQuestions[currentIndex];

  return (
    <div className="min-h-screen flex flex-col">
      <MetatagRenderer info={test!.info} path={`/test/${id}`} />
      <ProgressBar current={currentIndex + 1} total={shuffledQuestions.length} />

      <div className="flex-1 flex flex-col px-6 pt-6 pb-8">
        {/* 질문 */}
        <div className="flex-1 flex items-center">
          <h2 className="text-xl font-bold text-gray-800 leading-snug">
            {question.question}
          </h2>
        </div>

        {/* 답변 */}
        <div className="flex flex-col gap-3 mt-4">
          {question.answers.map((answer, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(answer.type)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white text-left text-sm text-gray-700 font-medium leading-snug hover:border-gray-400 hover:bg-gray-50 active:scale-95 transition-all duration-150"
            >
              {answer.content}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
