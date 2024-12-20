import { useState } from 'react';
import { MatchCard } from './MatchCard';

const SAMPLE_PROFILES = [
  {
    name: 'Sarah',
    age: 28,
    healthScore: 85,
    location: 'Downtown',
    distance: '2.5 km',
    goals: ['Weight Training', 'Marathon Prep'],
    specialties: ['CrossFit', 'Yoga', 'Nutrition Coaching'],
    trainingStyle: 'High-intensity training with focus on form and technique',
    availability: ['Weekday Mornings', 'Weekend Afternoons'],
    bio: 'Certified personal trainer specializing in strength and endurance. Love helping others achieve their fitness goals!'
  },
  {
    name: 'Mike',
    age: 32,
    healthScore: 92,
    location: 'Westside',
    distance: '3.8 km',
    goals: ['Muscle Gain', 'Flexibility'],
    specialties: ['Powerlifting', 'HIIT', 'Mobility Work'],
    trainingStyle: 'Progressive overload with balanced recovery periods',
    availability: ['Evening Sessions', 'Weekend Mornings'],
    bio: 'Former athlete turned fitness coach. Passionate about strength training and helping beginners build confidence.'
  },
  {
    name: 'Emma',
    age: 26,
    healthScore: 88,
    location: 'Eastside',
    distance: '1.2 km',
    goals: ['Cardio', 'Nutrition'],
    specialties: ['Running', 'Meal Prep', 'Group Training'],
    trainingStyle: 'Dynamic workouts combining cardio and strength',
    availability: ['Flexible Schedule', 'Virtual Sessions'],
    bio: 'Marathon runner and nutrition enthusiast. Believe in sustainable fitness and healthy lifestyle changes.'
  },
];

export function MatchContainer() {
  const [profiles, setProfiles] = useState(SAMPLE_PROFILES);
  const [matches, setMatches] = useState<typeof SAMPLE_PROFILES[0][]>([]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (profiles.length === 0) return;

    if (direction === 'right') {
      setMatches(prev => [...prev, profiles[0]]);
      // In a real app, we would trigger a match notification here
    }

    setProfiles(prev => prev.slice(1));
  };

  if (profiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          No More Profiles
        </h3>
        <p className="text-gray-600 mb-4">
          You've viewed all available fitness partners in your area
        </p>
        <button
          onClick={() => setProfiles(SAMPLE_PROFILES)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Refresh Profiles
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Find Partners</h2>
        <p className="text-gray-600">
          {profiles.length} potential matches in your area
        </p>
      </div>
      
      <MatchCard
        profile={profiles[0]}
        onSwipe={handleSwipe}
      />

      {matches.length > 0 && (
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <p className="text-purple-700 font-medium">
            {matches.length} new match{matches.length > 1 ? 'es' : ''}!
          </p>
        </div>
      )}
    </div>
  );
}
