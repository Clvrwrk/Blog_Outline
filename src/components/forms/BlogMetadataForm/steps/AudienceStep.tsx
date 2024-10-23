import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StepProps } from "../types";

export function AudienceStep({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-foreground">Technical Level</Label>
        <input
          type="range"
          min="1"
          max="5"
          value={formData.audienceTechnicalLevel}
          onChange={(e) => onChange('audienceTechnicalLevel', parseInt(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-foreground">Industry Knowledge</Label>
        <input
          type="range"
          min="1"
          max="5"
          value={formData.audienceIndustryKnowledge}
          onChange={(e) => onChange('audienceIndustryKnowledge', parseInt(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>General</span>
          <span>Industry Expert</span>
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-foreground">Application Intent</Label>
        <Select 
          value={formData.applicationIntent}
          onValueChange={(value) => onChange('applicationIntent', value)}
        >
          <SelectTrigger className="bg-input border-border text-foreground">
            <SelectValue placeholder="Select intent..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="information">Information seeking</SelectItem>
            <SelectItem value="problem-solving">Problem solving</SelectItem>
            <SelectItem value="decision-making">Decision making</SelectItem>
            <SelectItem value="skill-development">Skill development</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}