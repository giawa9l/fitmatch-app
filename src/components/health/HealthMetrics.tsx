import { Activity, Utensils, Moon } from 'lucide-react';
import { Card } from '../ui/card';

export function HealthMetrics() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Card className="p-3">
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-2 rounded-full mb-2">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-lg font-semibold">8,432</span>
          <span className="text-xs text-gray-600">Steps</span>
        </div>
      </Card>

      <Card className="p-3">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-2 rounded-full mb-2">
            <Utensils className="w-5 h-5 text-green-600" />
          </div>
          <span className="text-lg font-semibold">1,840</span>
          <span className="text-xs text-gray-600">Calories</span>
        </div>
      </Card>

      <Card className="p-3">
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-2 rounded-full mb-2">
            <Moon className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-lg font-semibold">7.5h</span>
          <span className="text-xs text-gray-600">Sleep</span>
        </div>
      </Card>
    </div>
  );
}
