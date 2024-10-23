import { useState } from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EnvSettings {
  webhookUrl: string;
  apiKey: string;
  maxWordCount: number;
  minWordCount: number;
  defaultComplexity: number;
  webhookTimeout: number;
  debugLogging: boolean;
  analytics: boolean;
}

export function EnvironmentSettings() {
  const [settings, setSettings] = useState<EnvSettings>({
    webhookUrl: import.meta.env.VITE_WEBHOOK_URL || '',
    apiKey: import.meta.env.VITE_API_KEY || '',
    maxWordCount: Number(import.meta.env.VITE_MAX_WORD_COUNT) || 5000,
    minWordCount: Number(import.meta.env.VITE_MIN_WORD_COUNT) || 3000,
    defaultComplexity: Number(import.meta.env.VITE_DEFAULT_COMPLEXITY) || 3,
    webhookTimeout: Number(import.meta.env.VITE_WEBHOOK_TIMEOUT) || 30000,
    debugLogging: import.meta.env.VITE_ENABLE_DEBUG_LOGGING === 'true',
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  });

  const handleChange = (key: keyof EnvSettings, value: string | number | boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    console.log('New settings:', settings);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 z-50 bg-black hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-white/10"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background text-foreground">
        <DialogHeader>
          <DialogTitle>Environment Settings</DialogTitle>
          <DialogDescription>
            Configure the application environment variables. Changes will take effect after restart.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="webhookUrl">Webhook URL</Label>
            <Input
              id="webhookUrl"
              value={settings.webhookUrl}
              onChange={(e) => handleChange('webhookUrl', e.target.value)}
              className="bg-input border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              value={settings.apiKey}
              onChange={(e) => handleChange('apiKey', e.target.value)}
              className="bg-input border-border"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="maxWordCount">Max Word Count</Label>
              <Input
                id="maxWordCount"
                type="number"
                value={settings.maxWordCount}
                onChange={(e) => handleChange('maxWordCount', parseInt(e.target.value))}
                className="bg-input border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="minWordCount">Min Word Count</Label>
              <Input
                id="minWordCount"
                type="number"
                value={settings.minWordCount}
                onChange={(e) => handleChange('minWordCount', parseInt(e.target.value))}
                className="bg-input border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="defaultComplexity">Default Complexity</Label>
              <Input
                id="defaultComplexity"
                type="number"
                min="1"
                max="5"
                value={settings.defaultComplexity}
                onChange={(e) => handleChange('defaultComplexity', parseInt(e.target.value))}
                className="bg-input border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="webhookTimeout">Webhook Timeout (ms)</Label>
              <Input
                id="webhookTimeout"
                type="number"
                value={settings.webhookTimeout}
                onChange={(e) => handleChange('webhookTimeout', parseInt(e.target.value))}
                className="bg-input border-border"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.debugLogging}
                onChange={(e) => handleChange('debugLogging', e.target.checked)}
                className="rounded border-border text-primary focus:ring-primary"
              />
              <span>Enable Debug Logging</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.analytics}
                onChange={(e) => handleChange('analytics', e.target.checked)}
                className="rounded border-border text-primary focus:ring-primary"
              />
              <span>Enable Analytics</span>
            </label>
          </div>

          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}