import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface BlogIdeaProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogIdea({ value, onChange }: BlogIdeaProps) {
  return (
    <div className="space-y-4">
      <Label htmlFor="blogIdea" className="text-sm font-medium text-gray-200">
        Blog Idea
      </Label>
      <Textarea
        id="blogIdea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your blog idea..."
        className="w-full h-32 p-4 bg-[#222] border border-gray-700 rounded-lg text-white resize-none focus:ring-2 focus:ring-white focus:border-transparent"
      />
    </div>
  );
}