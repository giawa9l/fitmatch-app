import React, { useState } from 'react';
import {
  MessageCircle, 
  Activity,
  Users, 
  Bell,
  Settings
} from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState('health');
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 min-h-screen pb-16">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800">FitMatch+</h1>
          <div className="flex gap-3 items-center">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              {showNotification && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              )}
            </button>
            <MessageCircle className="w-6 h-6 text-gray-600" />
          </div>
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
      <main className="p-4">
        {children}
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto flex justify-around">
          <button className="p-4 text-blue-600">
            <Activity className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-400">
            <Users className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-400">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-400">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;