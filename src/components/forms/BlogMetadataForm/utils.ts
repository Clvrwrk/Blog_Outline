import { FormData } from './types';

export const generateMetadataJSON = (formData: FormData) => {
  const baseWordCount = 3000;
  const complexityFactor = (formData.topicComplexity - 1) * 250;
  const depthFactor = (formData.contentDepth - 1) * 250;
  const calculatedWordCount = baseWordCount + complexityFactor + depthFactor;

  return {
    metadata: {
      targetWordCount: Math.min(5000, Math.max(3000, calculatedWordCount)),
      estimatedSectionWords: {
        introduction: Math.floor(calculatedWordCount * 0.15),
        mainBody: Math.floor(calculatedWordCount * 0.70),
        conclusion: Math.floor(calculatedWordCount * 0.15)
      },
      targetAudience: {
        primary: {
          technicalLevel: formData.audienceTechnicalLevel,
          industryKnowledge: formData.audienceIndustryKnowledge,
          applicationIntent: formData.applicationIntent
        },
        contentLevel: formData.contentDepth
      }
    },
    voiceGuidelines: {
      primaryStyle: {
        languageLevel: `Tier${formData.vocabularyTier}`,
        tonalityFramework: {
          complexity: formData.topicComplexity,
          formalityLevel: Math.max(formData.audienceTechnicalLevel, formData.audienceIndustryKnowledge)
        }
      }
    },
    contentRequirements: {
      academicStandards: {
        primarySources: formData.primarySources,
        recencyThreshold: `${formData.recencyThreshold} years`,
        peerReviewStatus: formData.peerReviewStatus
      },
      implementationGuidance: formData.implementationGuidance
    },
    blogDetails: {
      concept: formData.blogIdea,
      submissionTimestamp: new Date().toISOString(),
      status: "pending"
    }
  };
};