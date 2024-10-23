import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { StepProps } from "../types";

export function VoiceStep({ formData, onChange, uploadStatus, uploadCount, onFileUpload }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-foreground">Vocabulary Tier</Label>
        <Select 
          value={formData.vocabularyTier}
          onValueChange={(value) => onChange('vocabularyTier', value)}
        >
          <SelectTrigger className="bg-input border-border text-foreground">
            <SelectValue placeholder="Select vocabulary tier..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Tier 1 - General Audience</SelectItem>
            <SelectItem value="2">Tier 2 - Professional</SelectItem>
            <SelectItem value="3">Tier 3 - Technical Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label className="text-foreground">Voice Analysis</Label>
        <div className="flex flex-col items-center p-8 border-2 border-dashed rounded-lg border-border hover:border-primary/50 transition-colors bg-secondary">
          <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={onFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label 
            htmlFor="file-upload"
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
          >
            Upload up to 4 PDF documents for voice analysis
          </label>
          {uploadStatus && (
            <p className="mt-2 text-muted-foreground">
              {uploadStatus}
            </p>
          )}
          {uploadCount && uploadCount > 0 && (
            <p className="mt-1 text-xs text-muted-foreground">
              {uploadCount} file(s) uploaded
            </p>
          )}
        </div>
      </div>
    </div>
  );
}