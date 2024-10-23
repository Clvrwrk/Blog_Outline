import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select } from '@/components/ui/select';

interface StandardsProps {
  primarySources: boolean;
  peerReviewStatus: boolean;
  recencyThreshold: string;
  implementationGuidance: boolean;
  onPrimarySourcesChange: (value: boolean) => void;
  onPeerReviewStatusChange: (value: boolean) => void;
  onRecencyThresholdChange: (value: string) => void;
  onImplementationGuidanceChange: (value: boolean) => void;
}

export function Standards({
  primarySources,
  peerReviewStatus,
  recencyThreshold,
  implementationGuidance,
  onPrimarySourcesChange,
  onPeerReviewStatusChange,
  onRecencyThresholdChange,
  onImplementationGuidanceChange
}: StandardsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-200">Academic Standards</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="primarySources"
              checked={primarySources}
              onCheckedChange={onPrimarySourcesChange}
            />
            <Label htmlFor="primarySources" className="text-sm text-gray-300">
              Requires primary sources
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="peerReviewStatus"
              checked={peerReviewStatus}
              onCheckedChange={onPeerReviewStatusChange}
            />
            <Label htmlFor="peerReviewStatus" className="text-sm text-gray-300">
              Requires peer-reviewed sources
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="recencyThreshold" className="text-sm font-medium text-gray-200">
          Source Recency
        </Label>
        <Select
          id="recencyThreshold"
          value={recencyThreshold}
          onChange={(e) => onRecencyThresholdChange(e.target.value)}
          className="w-full p-2 bg-[#222] border border-gray-700 rounded-lg text-white"
        >
          <option value="1">Within 1 year</option>
          <option value="2">Within 2 years</option>
          <option value="5">Within 5 years</option>
          <option value="10">Within 10 years</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-200">Implementation Level</Label>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="implementationGuidance"
            checked={implementationGuidance}
            onCheckedChange={onImplementationGuidanceChange}
          />
          <Label htmlFor="implementationGuidance" className="text-sm text-gray-300">
            Includes practical implementation guidance
          </Label>
        </div>
      </div>
    </div>
  );
}