import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Send, AlertCircle, Lightbulb, Brain, Users, Scale, FileText } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { generateMetadataJSON } from './utils';
import { submitToWebhook } from '@/services/webhook';
import { FormData } from './types';

const BlogMetadataForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  const [formData, setFormData] = useState<FormData>({
    blogIdea: '',
    topicComplexity: 3,
    contentDepth: 3,
    audienceTechnicalLevel: 3,
    audienceIndustryKnowledge: 3,
    applicationIntent: '',
    primarySources: false,
    recencyThreshold: '1',
    peerReviewStatus: false,
    implementationGuidance: false,
    vocabularyTier: '2',
    uploadedFiles: []
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      setSubmitStatus({ status: 'loading', message: 'Submitting metadata...' });
      const metadata = generateMetadataJSON(formData);
      await submitToWebhook(metadata);
      setSubmitStatus({ 
        status: 'success', 
        message: 'Metadata successfully submitted! Your outline will be generated shortly.' 
      });
    } catch (error) {
      setSubmitStatus({ 
        status: 'error', 
        message: error instanceof Error ? error.message : 'Submission failed. Please try again.' 
      });
    }
  };

  const steps = [
    {
      id: 'blogIdea',
      title: "What's your blog idea?",
      subtitle: 'Share your concept for the article',
      icon: <Lightbulb className="w-8 h-8 mb-4 text-white/80" />,
      component: (
        <div className="space-y-4">
          <textarea
            value={formData.blogIdea}
            onChange={(e) => handleInputChange('blogIdea', e.target.value)}
            placeholder="Enter your blog idea..."
            className="w-full min-h-[150px] p-4 bg-[#222] border border-white/10 rounded-lg text-white resize-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
        </div>
      )
    },
    {
      id: 'complexity',
      title: 'Topic Complexity',
      subtitle: 'Rate the technical complexity of your topic',
      icon: <Brain className="w-8 h-8 mb-4 text-white/80" />,
      component: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-white">Topic Complexity (1-5)</label>
            <input
              type="range"
              min="1"
              max="5"
              value={formData.topicComplexity}
              onChange={(e) => handleInputChange('topicComplexity', parseInt(e.target.value))}
              className="w-full accent-white"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>Basic</span>
              <span>Advanced</span>
            </div>
          </div>
          <div className="space-y-4">
            <label className="block text-sm font-medium text-white">Content Depth (1-5)</label>
            <input
              type="range"
              min="1"
              max="5"
              value={formData.contentDepth}
              onChange={(e) => handleInputChange('contentDepth', parseInt(e.target.value))}
              className="w-full accent-white"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>Overview</span>
              <span>Research</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'audience',
      title: 'Target Audience',
      subtitle: 'Define your audience characteristics',
      icon: <Users className="w-8 h-8 mb-4 text-white/80" />,
      component: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-white">Technical Level (1-5)</label>
            <input
              type="range"
              min="1"
              max="5"
              value={formData.audienceTechnicalLevel}
              onChange={(e) => handleInputChange('audienceTechnicalLevel', parseInt(e.target.value))}
              className="w-full accent-white"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </div>
          <div className="space-y-4">
            <label className="block text-sm font-medium text-white">Industry Knowledge (1-5)</label>
            <input
              type="range"
              min="1"
              max="5"
              value={formData.audienceIndustryKnowledge}
              onChange={(e) => handleInputChange('audienceIndustryKnowledge', parseInt(e.target.value))}
              className="w-full accent-white"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>General</span>
              <span>Industry Expert</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Application Intent</label>
            <select
              value={formData.applicationIntent}
              onChange={(e) => handleInputChange('applicationIntent', e.target.value)}
              className="w-full p-2 bg-[#222] border border-white/10 rounded-lg text-white"
            >
              <option value="">Select intent...</option>
              <option value="information">Information seeking</option>
              <option value="problem-solving">Problem solving</option>
              <option value="decision-making">Decision making</option>
              <option value="skill-development">Skill development</option>
            </select>
          </div>
        </div>
      )
    },
    {
      id: 'standards',
      title: 'Content Standards',
      subtitle: 'Set the academic and implementation standards',
      icon: <Scale className="w-8 h-8 mb-4 text-white/80" />,
      component: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-white">Academic Standards</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="checkbox"
                  checked={formData.primarySources}
                  onChange={(e) => handleInputChange('primarySources', e.target.checked)}
                  className="rounded border-white/10 text-white focus:ring-white"
                />
                <span>Requires primary sources</span>
              </label>
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="checkbox"
                  checked={formData.peerReviewStatus}
                  onChange={(e) => handleInputChange('peerReviewStatus', e.target.checked)}
                  className="rounded border-white/10 text-white focus:ring-white"
                />
                <span>Requires peer-reviewed sources</span>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Source Recency</label>
            <select
              value={formData.recencyThreshold}
              onChange={(e) => handleInputChange('recencyThreshold', e.target.value)}
              className="w-full p-2 bg-[#222] border border-white/10 rounded-lg text-white"
            >
              <option value="1">Within 1 year</option>
              <option value="2">Within 2 years</option>
              <option value="5">Within 5 years</option>
              <option value="10">Within 10 years</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={formData.implementationGuidance}
                onChange={(e) => handleInputChange('implementationGuidance', e.target.checked)}
                className="rounded border-white/10 text-white focus:ring-white"
              />
              <span>Includes practical implementation guidance</span>
            </label>
          </div>
        </div>
      )
    },
    {
      id: 'voice',
      title: 'Voice and Style',
      subtitle: 'Set the writing style parameters',
      icon: <FileText className="w-8 h-8 mb-4 text-white/80" />,
      component: (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Vocabulary Tier</label>
            <select
              value={formData.vocabularyTier}
              onChange={(e) => handleInputChange('vocabularyTier', e.target.value)}
              className="w-full p-2 bg-[#222] border border-white/10 rounded-lg text-white"
            >
              <option value="1">Tier 1 - General Audience</option>
              <option value="2">Tier 2 - Professional</option>
              <option value="3">Tier 3 - Technical Expert</option>
            </select>
          </div>
          
          {submitStatus.status !== 'idle' && (
            <Alert 
              className={`mt-4 ${
                submitStatus.status === 'success' 
                  ? 'bg-green-900 border-green-700' 
                  : submitStatus.status === 'error'
                  ? 'bg-red-900 border-red-700'
                  : 'bg-blue-900 border-blue-700'
              }`}
            >
              <AlertCircle className="h-4 w-4 text-white" />
              <AlertDescription className="text-white ml-2">
                {submitStatus.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white">
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">{steps[step].title}</h2>
              <p className="text-gray-400">{steps[step].subtitle}</p>
            </div>
            <div className="text-gray-400">
              Step {step + 1} of {steps.length}
            </div>
          </div>
          <div className="flex justify-center">
            {steps[step].icon}
          </div>
        </div>

        <div className="mb-8 bg-[#222] p-6 rounded-lg border border-white/10">
          {steps[step].component}
        </div>

        <div className="flex justify-between">
          <Button
            onClick={() => setStep(prev => Math.max(0, prev - 1))}
            disabled={step === 0}
            variant="outline"
            className="text-white bg-transparent border-white/10 hover:bg-white/5"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          {step < steps.length - 1 ? (
            <Button
              onClick={() => setStep(prev => Math.min(steps.length - 1, prev + 1))}
              className="bg-white text-black hover:bg-white/90"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={submitStatus.status === 'loading'}
              className="bg-white text-black hover:bg-white/90"
            >
              {submitStatus.status === 'loading' ? (
                <span className="animate-pulse">Submitting...</span>
              ) : (
                <>
                  Submit
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogMetadataForm;