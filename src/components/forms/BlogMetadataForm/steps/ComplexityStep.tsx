import { Label } from "@/components/ui/label";
import { StepProps } from "../types";

export function ComplexityStep({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-foreground">Topic Complexity</Label>
        <input
          type="range"
          min="1"
          max="5"
          value={formData.topicComplexity}
          onChange={(e) => onChange('topicComplexity', parseInt(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Basic</span>
          <span>Advanced</span>
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-foreground">Content Depth</Label>
        <input
          type="range"
          min="1"
          max="5"
          value={formData.contentDepth}
          onChange={(e) => onChange('contentDepth', parseInt(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Overview</span>
          <span>Research</span>
        </div>
      </div>
    </div>
  );
}