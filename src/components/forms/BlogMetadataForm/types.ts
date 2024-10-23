export interface FormData {
  blogIdea: string;
  topicComplexity: number;
  contentDepth: number;
  audienceTechnicalLevel: number;
  audienceIndustryKnowledge: number;
  applicationIntent: string;
  primarySources: boolean;
  recencyThreshold: string;
  peerReviewStatus: boolean;
  implementationGuidance: boolean;
  vocabularyTier: string;
  uploadedFiles: File[];
}