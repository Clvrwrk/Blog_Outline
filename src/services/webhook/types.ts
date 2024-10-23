export interface WebhookMetadata {
  metadata: {
    targetWordCount: number;
    estimatedSectionWords: {
      introduction: number;
      mainBody: number;
      conclusion: number;
    };
    targetAudience: {
      primary: {
        technicalLevel: number;
        industryKnowledge: number;
        applicationIntent: string;
      };
      contentLevel: number;
    };
  };
  voiceGuidelines: {
    primaryStyle: {
      languageLevel: string;
      tonalityFramework: {
        complexity: number;
        formalityLevel: number;
      };
    };
  };
  contentRequirements: {
    academicStandards: {
      primarySources: boolean;
      recencyThreshold: string;
      peerReviewStatus: boolean;
    };
    implementationGuidance: boolean;
  };
  blogDetails: {
    concept: string;
    submissionTimestamp: string;
    status: "pending";
  };
}

export interface WebhookResponse {
  success: boolean;
  message: string;
  data?: any;
}