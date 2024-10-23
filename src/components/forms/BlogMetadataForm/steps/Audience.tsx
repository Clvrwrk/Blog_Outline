import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select } from '@/components/ui/select';

interface AudienceProps {
  technicalLevel: number;
  industryKnowledge: number;
  applicationIntent: string;
  onTechnicalLevelChange: (value: number) => void;
  onIndustryKnowledgeChange: (value: number) => void;
  onApplicationIntentChange: (value: string) => void;
}

export function Audience({
  technicalLevel,
  industryKnowledge,
  applicationIntent,
  onTechnicalLevelChange,
  onIndustryKnowledgeChange,
  onApplicationIntentChange
}: AudienceProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label htmlFor="technicalLevel" className="text-sm font-medium text-gray-200">
          Technical Level (1-5)
        </Label>
        <Slider
          id="technicalLevel"
          min={1}
          max={5}
          step={1}
          value={[technicalLevel]}
          onValueChange={(values) => onTechnicalLevelChange(values[0])}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>

      <div className="space-y-4">
        <Label htmlFor="industryKnowledge" className="text-sm font-medium text-gray-200">
          Industry Knowledge (1-5)
        </Label>
        <Slider
          id="industryKnowledge"
          min={1}
          max={5}
          step={1}
          value={[industryKnowledge]}
          onValueChange={(values) => onIndustryKnowledgeChange(values[0])}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>General</span>
          <span>Industry Expert</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="applicationIntent" className="text-sm font-medium text-gray-200">
          Application Intent
        </Label>
        <Select
          id="applicationIntent"
          value={applicationIntent}
          onChange={(e) => onApplicationIntentChange(e.target.value)}
          className="w-full p-2 bg-[#222] border border-gray-700 rounded-lg text-white"
        >
          <option value="">Select intent...</option>
          <option value="information">Information seeking</option>
          <option value="problem-solving">Problem solving</option>
          <option value="decision-making">Decision making</option>
          <option value="skill-development">Skill development</option>
        </Select>
      </div>
    </div>
  );
}