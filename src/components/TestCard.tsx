import { useNavigate } from 'react-router-dom';
import type { TestInfo } from '../types';

interface TestCardProps {
  info: TestInfo;
}

export default function TestCard({ info }: TestCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/test/${info.mainUrl}`)}
      className="w-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
    >
      <div className="w-full aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={info.thumbImage}
          alt={info.mainTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 mb-1">{info.category}</p>
        <h3 className="text-base font-bold text-gray-800 leading-tight">
          {info.mainTitle}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{info.subTitle}</p>
      </div>
    </button>
  );
}
