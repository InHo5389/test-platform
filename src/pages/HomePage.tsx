import { useEffect, useState } from 'react';
import { fetchTests } from '../tools/mockApi';
import TestCard from '../components/TestCard';
import MetatagRenderer from '../components/MetatagRenderer';
import type { Test } from '../types';

export default function HomePage() {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTests().then((data) => {
      setTests(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <MetatagRenderer path="/" />
      {/* 테스트 목록 */}
      <main className="flex-1 px-6 py-5">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-6 h-6 rounded-full border-2 border-gray-200 border-t-gray-400 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {tests.map((test) => (
              <TestCard key={test.info.mainUrl} info={test.info} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
