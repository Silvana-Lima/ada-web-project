export const validationRules = {
  firstName: {
    required: 'El nombre es requerido',
    minLength: {
      value: 2,
      message: 'El nombre debe tener al menos 2 caracteres.',
    },
    maxLength: {
      value: 50,
      message: 'El nombre no puede tener más de 50 caracteres.',
    },
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message: 'El nombre solo puede contener letras y espacios, sin acentos.',
    },
  },
  lastName: {
    required: 'El apellido es requerido',
    minLength: {
      value: 2,
      message: 'El apellido debe tener al menos 2 caracteres.',
    },
    maxLength: {
      value: 50,
      message: 'El apellido no puede tener más de 50 caracteres.',
    },
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message: 'El apellido solo puede contener letras y espacios, sin acentos',
    },
  },
  Email: {
    required: 'El correo electrónico es requerido',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'El formato del correo electrónico es inválido.',
    },
  },
  countryCode: {
    required: 'El código de país es requerido',
    pattern: {
      value: /^\+\d{1,4}$/,
      message:
        'El código de país debe comenzar con un "+" seguido de 1 a 4 dígitos.',
    },
  },
  country: {
    required: 'El país de residencia es requerido',
    minLength: {
      value: 2,
      message: 'El país de residencia debe tener al menos 3 caracteres.',
    },
    maxLength: {
      value: 50,
      message: 'El país de residencia no puede tener más de 30 caracteres.',
    },
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message:
        'El país de residencia solo puede contener letras y espacios, sin acentos',
    },
  },
  Phone: {
    required: 'El número de teléfono es requerido',
    pattern: {
      value: /^\d{7,15}$/,
      message: 'El número de teléfono debe tener entre 7 y 15 dígitos.',
    },
  },
  condition: {
    required: 'Este campo es requerido.',
    pattern: {
      value: /^(Yes|No)$/,
      message: 'La respuesta debe ser "Sí" o "No".',
    },
  },
  career: {
    required: 'Este campo es requerido.',
  },
  course: {
    required: 'Este campo es requerido.',
  },
  paymentMethod: {
    required: 'Debes elegir una opción de pago.',
  },
  paymentOption: {
    required: 'La opción de pago es obligatoria.',
  },
  date: {
    required: 'Este campo es requerido.',
    validate: (value) => {
      const date = new Date(value)
      const today = new Date()
      return (
        date <= today ||
        'La fecha de nacimiento no puede ser posterior a la fecha actual'
      )
    },
  },
}
