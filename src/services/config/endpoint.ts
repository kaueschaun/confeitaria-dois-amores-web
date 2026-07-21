const endpoint = {
  get: (baseUrl?: string) => {
    return baseUrl || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  }
};

export default endpoint;
