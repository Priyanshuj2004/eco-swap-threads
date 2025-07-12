
import React from 'react';
import { Coins, TrendingUp } from 'lucide-react';

interface PointsDisplayProps {
  points: number;
  earned?: number;
  className?: string;
  showTrend?: boolean;
}

const PointsDisplay: React.FC<PointsDisplayProps> = ({ 
  points, 
  earned, 
  className = '', 
  showTrend = false 
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex items-center bg-gradient-to-r from-eco-400 to-eco-500 text-white px-4 py-2 rounded-2xl shadow-sm">
        <Coins className="h-5 w-5 mr-2" />
        <span className="font-semibold">{points.toLocaleString()}</span>
        <span className="text-sm ml-1 opacity-90">points</span>
      </div>
      
      {showTrend && earned !== undefined && earned > 0 && (
        <div className="flex items-center text-eco-600 bg-eco-50 px-3 py-1 rounded-lg">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">+{earned}</span>
        </div>
      )}
    </div>
  );
};

export default PointsDisplay;
