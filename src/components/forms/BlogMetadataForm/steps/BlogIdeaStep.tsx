import { Label } from "@/components/ui/label";
import { StepProps } from "../types";

export function BlogIdeaStep({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-4">
      <Label className="text-foreground">Blog Idea</Label>
      <textarea
        value={formData.blogIdea}
        onChange={(e) => onChange('blogIdea', e.target.value)}
        className="w-full min-h-[150px] p-4 rounded-lg bg-input border-border text-foreground resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Enter your blog idea..."
      />
    </div>
  );
}