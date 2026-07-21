const commonHeaders = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

const tokenWithValidations = (isPublic: boolean) => {
  if (typeof window !== 'undefined') {
    return !isPublic && localStorage.getItem('token');
  }
  return false;
};

const headers = (isPublic: boolean = false) => {
  if (tokenWithValidations(isPublic)) {
    return {
      ...commonHeaders,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }
  return commonHeaders;
};

export default headers;
