export const validationRules = {
  firstName: {
    required: 'El nombre es obligatorio.',
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
      message: 'El nombre solo puede contener letras y espacios.',
    },
  },
  lastName: {
    required: 'El apellido es obligatorio.',
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
      message: 'El apellido solo puede contener letras y espacios.',
    },
  },
  email: {
    required: 'El correo electrónico es obligatorio.',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'El formato del correo electrónico es inválido.',
    },
  },
  countryCode: {
    required: 'El código de país es obligatorio.',
    pattern: {
      value: /^\+\d{1,4}$/,
      message:
        'El código de país debe comenzar con un "+" seguido de 1 a 4 dígitos.',
    },
  },
  phoneNumber: {
    required: 'El número de teléfono es obligatorio.',
    pattern: {
      value: /^\d{7,15}$/,
      message: 'El número de teléfono debe tener entre 7 y 15 dígitos.',
    },
  },
  condition: {
    required: 'Debes indicar si tienes alguna discapacidad.',
    pattern: {
      value: /^(Yes|No)$/,
      message: 'La respuesta debe ser "Sí" o "No".',
    },
  },
  career: {
    required: 'La carrera es obligatoria.',
  },
  course: {
    required: 'El curso es obligatorio.',
  },
  paymentMethod: {
    required: 'El método de pago es obligatorio.',
  },
  paymentOption: {
    required: 'La opción de pago es obligatoria.',
  },
  date: {
    required: 'Este campo es obligatorio.',
    validate: (value) => {
      const date = new Date(value)
      const today = new Date()
      return (
        date <= today || 'La fecha de nacimiento no puede estar en el futuro'
      )
    },
  },
}
