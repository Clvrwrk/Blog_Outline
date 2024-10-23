import React from 'react';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Upload } from 'lucide-react';

interface VoiceProps {
  vocabularyTier: string;
  onVocabularyTierChange: (value: string) => void;
  uploadStatus: string;
  uploadCount: number;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Voice({
  vocabularyTier,
  onVocabularyTierChange,
  uploadStatus,
  uploadCount,
  onFileUpload
}: VoiceProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="vocabularyTier" className="text-sm font-medium text-gray-200">
          Vocabulary Tier
        </Label>
        <Select
          id="vocabularyTier"
          value={vocabularyTier}
          onChange={(e) => onVocabularyTierChange(e.target.value)}
          className="w-full p-2 bg-[#222] border border-gray-700 rounded-lg text-white"
        >
          <option value="1">Tier 1 - General Audience</option>
          <option value="2">Tier 2 - Professional</option>
          <option value="3">Tier 3 - Technical Expert</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fileUpload" className="text-sm font-medium text-gray-200">
          Upload Reference Documents (Max 4)
        </Label>
        <div className="relative">
          <input
            type="file"
            id="fileUpload"
            multiple
            accept=".pdf,.doc,.docx,.txt"
            onChange={onFileUpload}
            className="hidden"
            max="4"
          />
          <label
            htmlFor="fileUpload"
            className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-gray-500 transition-colors"
          >
            <div className="flex flex-col items-center space-y-2">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-400">
                {uploadStatus || 'Click to upload documents'}
              </span>
              {uploadCount > 0 && (
                <span className="text-xs text-gray-500">
                  {uploadCount} file(s) selected
                </span>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}