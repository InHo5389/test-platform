interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="w-full px-6 pt-6 pb-2">
      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
        <span className="font-medium text-gray-500">
          {current} / {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percent}%`,
            background: 'linear-gradient(90deg, #f7a97c, #b8a9c9)',
          }}
        />
      </div>
    </div>
  );
}
