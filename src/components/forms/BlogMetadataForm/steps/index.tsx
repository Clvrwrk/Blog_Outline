import { Lightbulb, Brain, Users, Scale, FileText } from 'lucide-react';
import { BlogIdea } from './BlogIdea';
import { Complexity } from './Complexity';
import { Audience } from './Audience';
import { Standards } from './Standards';
import { Voice } from './Voice';
import type { FormData, Step, SubmitStatus } from '../types';

interface FormStepsProps {
  formData: FormData;
  handleInputChange: (field: keyof FormData, value: FormData[keyof FormData]) => void;
  submitStatus: SubmitStatus;
}

export function FormSteps({ formData, handleInputChange, submitStatus }: FormStepsProps): Step[] {
  return [
    {
      id: 'blogIdea',
      title: "What's your blog idea?",
      subtitle: 'Share your concept for the article',
      icon: <Lightbulb className="w-8 h-8 mb-4" />,
      component: (
        <BlogIdea
          value={formData.blogIdea}
          onChange={(value) => handleInputChange('blogIdea', value)}
        />
      ),
    },
    {
      id: 'complexity',
      title: 'Topic Complexity',
      subtitle: 'Rate the technical complexity of your topic',
      icon: <Brain className="w-8 h-8 mb-4" />,
      component: (
        <Complexity
          topicComplexity={formData.topicComplexity}
          contentDepth={formData.contentDepth}
          onComplexityChange={(value) => handleInputChange('topicComplexity', value)}
          onDepthChange={(value) => handleInputChange('contentDepth', value)}
        />
      ),
    },
    {
      id: 'audience',
      title: 'Target Audience',
      subtitle: 'Define your audience characteristics',
      icon: <Users className="w-8 h-8 mb-4" />,
      component: (
        <Audience
          technicalLevel={formData.audienceTechnicalLevel}
          industryKnowledge={formData.audienceIndustryKnowledge}
          applicationIntent={formData.applicationIntent}
          onTechnicalLevelChange={(value) => handleInputChange('audienceTechnicalLevel', value)}
          onIndustryKnowledgeChange={(value) => handleInputChange('audienceIndustryKnowledge', value)}
          onApplicationIntentChange={(value) => handleInputChange('applicationIntent', value)}
        />
      ),
    },
    {
      id: 'standards',
      title: 'Content Standards',
      subtitle: 'Set the academic and implementation standards',
      icon: <Scale className="w-8 h-8 mb-4" />,
      component: (
        <Standards
          primarySources={formData.primarySources}
          peerReviewStatus={formData.peerReviewStatus}
          recencyThreshold={formData.recencyThreshold}
          implementationGuidance={formData.implementationGuidance}
          onPrimarySourcesChange={(checked) => handleInputChange('primarySources', checked)}
          onPeerReviewStatusChange={(checked) => handleInputChange('peerReviewStatus', checked)}
          onRecencyThresholdChange={(value) => handleInputChange('recencyThreshold', value)}
          onImplementationGuidanceChange={(checked) => handleInputChange('implementationGuidance', checked)}
        />
      ),
    },
    {
      id: 'voice',
      title: 'Voice and Style',
      subtitle: 'Set the writing style parameters',
      icon: <FileText className="w-8 h-8 mb-4" />,
      component: (
        <Voice
          vocabularyTier={formData.vocabularyTier}
          submitStatus={submitStatus}
          onVocabularyTierChange={(value) => handleInputChange('vocabularyTier', value)}
        />
      ),
    },
  ];
}