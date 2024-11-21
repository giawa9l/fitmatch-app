'use client';

import { HealthMetrics } from '@/components/health/HealthMetrics';
import { HealthScore } from '@/components/health/HealthScore';
import { MatchContainer } from '@/components/social/MatchContainer';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('health');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800">FitMatch+</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('health')}
            className={`flex-1 py-2 text-center rounded-lg transition-colors ${
              activeTab === 'health'
                ? 'bg-blue-100 text-blue-800 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Health Track
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`flex-1 py-2 text-center rounded-lg transition-colors ${
              activeTab === 'social'
                ? 'bg-blue-100 text-blue-800 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Find Partners
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4 max-w-[480px] mx-auto">
        {activeTab === 'health' ? (
          <div className="space-y-6">
            <HealthScore />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Today's Activity
              </h2>
              <HealthMetrics />
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Log Workout
              </button>
              <button className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Track Meal
              </button>
            </div>
          </div>
        ) : (
          <MatchContainer />
        )}
      </main>
    </div>
  );
}
