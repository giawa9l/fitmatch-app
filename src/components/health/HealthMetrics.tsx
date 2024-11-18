import { Activity, Utensils, Camera, Trophy, Plus, ArrowUp } from 'lucide-react';
import { Card } from '../ui/card';

export function HealthMetrics() {
  return (
    <div className="space-y-4">
      {/* Quick Add Button */}
      <div className="flex justify-end">
        <button className="bg-purple-600 text-white p-2 rounded-full shadow-lg">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-white">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-purple-100 p-2 rounded-full">
                <Utensils className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-purple-600">Daily Goal</span>
            </div>
            <span className="text-2xl font-bold">1,840</span>
            <span className="text-sm text-gray-600">calories</span>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>Protein</span>
                <span className="font-medium">82g</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Carbs</span>
                <span className="font-medium">215g</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Fat</span>
                <span className="font-medium">55g</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-purple-100 p-2 rounded-full">
                <Activity className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-green-500 text-sm flex items-center">
                <ArrowUp className="w-4 h-4" />12%
              </span>
            </div>
            <span className="text-2xl font-bold">8,432</span>
            <span className="text-sm text-gray-600">steps</span>
            <div className="mt-2 h-2 bg-purple-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-600 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 border-2 border-dashed border-purple-200 hover:border-purple-400 cursor-pointer">
          <div className="flex items-center space-x-3">
            <Camera className="w-5 h-5 text-purple-600" />
            <div>
              <div className="font-medium">Quick Log</div>
              <div className="text-sm text-gray-600">Photo or manual entry</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-purple-50">
          <div className="flex items-center space-x-3">
            <Trophy className="w-5 h-5 text-purple-600" />
            <div>
              <div className="font-medium">Weekly Challenge</div>
              <div className="text-sm text-purple-600">4/7 days complete</div>
            </div>
          </div>
        </Card>
      </div>

      {/* AI Suggestion */}
      <Card className="p-4 bg-gradient-to-r from-purple-50 to-white">
        <div className="space-y-2">
          <div className="font-medium">Suggested Meal</div>
          <p className="text-sm text-gray-600">Based on your macros: Grilled chicken salad with quinoa (420 cal)</p>
          <div className="flex space-x-2">
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">High Protein</span>
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Low Carb</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
