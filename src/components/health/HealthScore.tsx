import { Card } from '../ui/card';

export function HealthScore() {
  const score = 78;
  const scoreColor = score >= 80 ? 'text-green-600' : score >= 60 ? 'text-blue-600' : 'text-red-600';

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-700">Health Score</h3>
        <span className="text-sm text-gray-500">Last updated: Today</span>
      </div>
      
      <div className="flex items-end gap-2">
        <span className={`text-4xl font-bold ${scoreColor}`}>{score}</span>
        <span className="text-gray-500 mb-1">/100</span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Weekly Progress</span>
          <span className="text-blue-600">+3 pts</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-gray-500">Workout Streak</div>
          <div className="font-semibold">5 days</div>
        </div>
        <div>
          <div className="text-gray-500">Goal Progress</div>
          <div className="font-semibold">75%</div>
        </div>
      </div>
    </Card>
  );
}
