interface WebhookError extends Error {
  status?: number;
  response?: Response;
}

export const submitToWebhook = async (metadata: any) => {
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || 'https://hook.us1.make.com/tz7yfg5ulyiipgshgy1lhh3xmvguhac4';
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(metadata)
    });

    if (!response.ok) {
      const error = new Error('Webhook submission failed') as WebhookError;
      error.status = response.status;
      error.response = response;
      throw error;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Webhook submission error:', error);
    if (error instanceof Error) {
      throw new Error(`Submission failed: ${error.message}`);
    }
    throw new Error('Submission failed: Network error');
  }
};