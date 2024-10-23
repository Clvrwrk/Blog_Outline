import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface ComplexityProps {
  topicComplexity: number;
  contentDepth: number;
  onComplexityChange: (value: number) => void;
  onDepthChange: (value: number) => void;
}

export function Complexity({
  topicComplexity,
  contentDepth,
  onComplexityChange,
  onDepthChange
}: ComplexityProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label htmlFor="topicComplexity" className="text-sm font-medium text-gray-200">
          Topic Complexity (1-5)
        </Label>
        <Slider
          id="topicComplexity"
          min={1}
          max={5}
          step={1}
          value={[topicComplexity]}
          onValueChange={(values) => onComplexityChange(values[0])}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Basic</span>
          <span>Advanced</span>
        </div>
      </div>

      <div className="space-y-4">
        <Label htmlFor="contentDepth" className="text-sm font-medium text-gray-200">
          Content Depth (1-5)
        </Label>
        <Slider
          id="contentDepth"
          min={1}
          max={5}
          step={1}
          value={[contentDepth]}
          onValueChange={(values) => onDepthChange(values[0])}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Overview</span>
          <span>Research</span>
        </div>
      </div>
    </div>
  );
}