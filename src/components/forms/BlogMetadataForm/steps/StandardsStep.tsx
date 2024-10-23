import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StepProps } from "../types";

export function StandardsStep({ formData, onChange }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-foreground">Academic Standards</Label>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.primarySources}
              onChange={(e) => onChange('primarySources', e.target.checked)}
              className="rounded border-border text-primary focus:ring-primary"
            />
            <span className="text-foreground">Requires primary sources</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.peerReviewStatus}
              onChange={(e) => onChange('peerReviewStatus', e.target.checked)}
              className="rounded border-border text-primary focus:ring-primary"
            />
            <span className="text-foreground">Requires peer-reviewed sources</span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-foreground">Source Recency</Label>
        <Select 
          value={formData.recencyThreshold}
          onValueChange={(value) => onChange('recencyThreshold', value)}
        >
          <SelectTrigger className="bg-input border-border text-foreground">
            <SelectValue placeholder="Select recency..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Within 1 year</SelectItem>
            <SelectItem value="2">Within 2 years</SelectItem>
            <SelectItem value="5">Within 5 years</SelectItem>
            <SelectItem value="10">Within 10 years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label className="text-foreground">Implementation Level</Label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={formData.implementationGuidance}
            onChange={(e) => onChange('implementationGuidance', e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-foreground">Includes practical implementation guidance</span>
        </label>
      </div>
    </div>
  );
}