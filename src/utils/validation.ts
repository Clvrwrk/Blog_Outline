import type { FormData, ValidationError } from '@/components/forms/BlogMetadataForm/types';

interface MetadataOutput {
  topic: {
    idea: string;
    complexity: number;
    depth: number;
  };
  audience: {
    technicalLevel: number;
    industryKnowledge: number;
    applicationIntent: string;
  };
  standards: {
    primarySources: boolean;
    recencyThreshold: string;
    peerReviewed: boolean;
    implementationGuide: boolean;
  };
  style: {
    vocabularyTier: string;
  };
  attachments?: {
    count: number;
    files?: string[];
  };
}

export function validateFormData(data: FormData): ValidationError[] {
  const errors: ValidationError[] = [];
  
  // Required fields validation
  if (!data.blogIdea.trim()) {
    errors.push({
      field: 'blogIdea',
      message: 'Blog idea is required',
    });
  }
  
  if (!data.applicationIntent.trim()) {
    errors.push({
      field: 'applicationIntent',
      message: 'Application intent is required',
    });
  }
  
  // Numeric range validations
  const numericValidations = [
    { field: 'topicComplexity', label: 'Topic complexity' },
    { field: 'contentDepth', label: 'Content depth' },
    { field: 'audienceTechnicalLevel', label: 'Audience technical level' },
    { field: 'audienceIndustryKnowledge', label: 'Industry knowledge' },
  ] as const;
  
  numericValidations.forEach(({ field, label }) => {
    const value = data[field];
    if (value < 1 || value > 5) {
      errors.push({
        field,
        message: `${label} must be between 1 and 5`,
      });
    }
  });

  // Vocabulary tier validation
  if (!['1', '2', '3'].includes(data.vocabularyTier)) {
    errors.push({
      field: 'vocabularyTier',
      message: 'Invalid vocabulary tier',
    });
  }

  // Recency threshold validation
  if (!['1', '2', '3', '4', '5'].includes(data.recencyThreshold)) {
    errors.push({
      field: 'recencyThreshold',
      message: 'Invalid recency threshold',
    });
  }

  return errors;
}

export function generateMetadataJSON(formData: FormData): MetadataOutput {
  // Validate the form data first
  const errors = validateFormData(formData);
  if (errors.length > 0) {
    throw new Error(`Invalid form data: ${errors.map(e => e.message).join(', ')}`);
  }

  // Create the metadata object
  const metadata: MetadataOutput = {
    topic: {
      idea: formData.blogIdea.trim(),
      complexity: formData.topicComplexity,
      depth: formData.contentDepth,
    },
    audience: {
      technicalLevel: formData.audienceTechnicalLevel,
      industryKnowledge: formData.audienceIndustryKnowledge,
      applicationIntent: formData.applicationIntent.trim(),
    },
    standards: {
      primarySources: formData.primarySources,
      recencyThreshold: formData.recencyThreshold,
      peerReviewed: formData.peerReviewStatus,
      implementationGuide: formData.implementationGuidance,
    },
    style: {
      vocabularyTier: formData.vocabularyTier,
    },
  };

  // Add attachments if there are any uploaded files
  if (formData.uploadedFiles && formData.uploadedFiles.length > 0) {
    metadata.attachments = {
      count: formData.uploadedFiles.length,
      files: formData.uploadedFiles.map(file => file.name),
    };
  }

  return metadata;
}

// Helper function to check if the form is complete enough to submit
export function isFormComplete(formData: FormData): boolean {
  return (
    formData.blogIdea.trim().length > 0 &&
    formData.applicationIntent.trim().length > 0 &&
    formData.topicComplexity >= 1 &&
    formData.topicComplexity <= 5 &&
    formData.contentDepth >= 1 &&
    formData.contentDepth <= 5 &&
    formData.audienceTechnicalLevel >= 1 &&
    formData.audienceTechnicalLevel <= 5 &&
    formData.audienceIndustryKnowledge >= 1 &&
    formData.audienceIndustryKnowledge <= 5
  );
}

// Helper function to get a human-readable error message
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred';
}

// Debug utility
export function logMetadata(metadata: MetadataOutput): void {
  console.group('Metadata Submission');
  console.log('Topic:', metadata.topic);
  console.log('Audience:', metadata.audience);
  console.log('Standards:', metadata.standards);
  console.log('Style:', metadata.style);
  if (metadata.attachments) {
    console.log('Attachments:', metadata.attachments);
  }
  console.groupEnd();
}