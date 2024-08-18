export const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    errorMessage: {
      required: 'First name is required.',
      minLength: 'First name must be at least 2 characters long.',
      maxLength: 'First name cannot be longer than 50 characters.',
      pattern: 'First name can only contain letters and spaces.',
    },
  },
  lastName: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    errorMessage: {
      required: 'Last name is required.',
      minLength: 'Last name must be at least 2 characters long.',
      maxLength: 'Last name cannot be longer than 50 characters.',
      pattern: 'Last name can only contain letters and spaces.',
    },
  },
  email: {
    required: true,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    errorMessage: {
      required: 'Email is required.',
      pattern: 'Email format is invalid.',
    },
  },
  countryCode: {
    required: true,
    pattern: /^\+\d{1,4}$/,
    errorMessage: {
      required: 'Country code is required.',
      pattern: 'Country code must start with a "+" followed by 1 to 4 digits.',
    },
  },
  phoneNumber: {
    required: true,
    pattern: /^\d{7,15}$/,
    errorMessage: {
      required: 'Phone number is required.',
      pattern: 'Phone number must be between 7 and 15 digits.',
    },
  },
  condition: {
    required: true,
    pattern: /^(Yes|No)$/,
    errorMessage: {
      required: 'You must indicate whether you have any disability.',
      pattern: 'The answer must be "Yes" or "No".',
    },
  },
  career: {
    required: true,
    errorMessage: {
      required: 'Career is required.',
    },
  },
  course: {
    required: true,
    errorMessage: {
      required: 'Course is required.',
    },
  },
  paymentMethod: {
    required: true,
    errorMessage: {
      required: 'Payment method is required.',
    },
  },
  paymentOption: {
    required: true,
    errorMessage: {
      required: 'Payment option is required.',
    },
  },
  date: {
    required: 'This field is required',
    validate: (value) => {
      const date = new Date(value);
      const today = new Date();
      return date <= today || 'Birth date cannot be in the future';
    },
  },
};
