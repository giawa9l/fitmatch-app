import { useState } from 'react';
import { Card } from '../ui/card';
import { Award, MapPin, Target, Heart, X } from 'lucide-react';

interface MatchCardProps {
  profile: {
    name: string;
    age: number;
    healthScore: number;
    location: string;
    distance: string;
    goals: string[];
    specialties: string[];
  };
  onSwipe: (direction: 'left' | 'right') => void;
}

export function MatchCard({ profile, onSwipe }: MatchCardProps) {
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX, y: clientY });
    setIsDragging(true);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setOffset({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y,
    });
  };

  const handleDragEnd = () => {
    if (Math.abs(offset.x) > 100) {
      onSwipe(offset.x > 0 ? 'right' : 'left');
    }
    setOffset({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const getRotation = () => {
    return (offset.x / 100) * 10;
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Card
        className="overflow-hidden touch-none"
        style={{
          transform: `translateX(${offset.x}px) rotate(${getRotation()}deg)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="relative h-96 bg-gray-200">
          {/* Profile Image Placeholder */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-2xl font-bold">{profile.name}, {profile.age}</h3>
              <div className="bg-blue-500 rounded-full px-2 py-1 text-sm">
                {profile.healthScore}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{profile.distance} away</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            <div className="flex gap-2 overflow-x-auto">
              {profile.goals.map((goal, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-green-500" />
            <div className="flex gap-2 overflow-x-auto">
              {profile.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
        <button
          onClick={() => onSwipe('left')}
          className="p-3 bg-white rounded-full shadow-lg text-red-500 hover:bg-red-50"
        >
          <X className="w-6 h-6" />
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="p-3 bg-white rounded-full shadow-lg text-green-500 hover:bg-green-50"
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
