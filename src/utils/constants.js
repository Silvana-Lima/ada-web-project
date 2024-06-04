const testimonials = [
  {
    name: 'Elvia Sansonetty 1',
    career: 'Egresada de la carrera de back-end 2022',
    comment:
      'Mi tiempo en ADA, aprendiendo Front-End, cambió mi vida. Me permitió entender la interconexión entre diseño y funcionalidad. Hoy trabajo en una empresa tech, aportando soluciones innovadoras. ADA no solo me formó, también me dio la confianza para destacar en un mercado laboral desafiante. dio la confianza para destacar en un mercado laboral desafiante.',
    photo: '/testimonials/testimony-photo.svg',
  },
  {
    name: 'Elvia Sansonetty 2',
    career: 'Egresada de la carrera de back-end 2022',
    comment:
      'Estudiar Back-End en ADA fue transformador. Me empoderó al brindarme las herramientas para crear aplicaciones desde cero. Gracias a esta experiencia, logré entrar en la industria tech, donde ahora contribuyo en proyectos significativos, impulsando mi crecimiento personal y profesional.',
    photo: '/testimonials/testimony-photo.svg',
  },
  {
    name: 'Elvia Sansonetty 3',
    career: 'Egresada de la carrera de back-end 2022',
    comment:
      'Mi tiempo en ADA, aprendiendo Front-End, cambió mi vida. Me permitió entender la interconexión entre diseño y funcionalidad. Hoy trabajo en una empresa tech, aportando soluciones innovadoras. ADA no solo me formó, también me dio la confianza para destacar en un mercado laboral desafiante. dio la confianza para destacar en un mercado laboral desafiante.',
    photo: '/testimonials/testimony-photo.svg',
  },
  {
    name: 'Elvia Sansonetty 4',
    career: 'Egresada de la carrera de back-end 2022',
    comment:
      'Estudiar Back-End en ADA fue transformador. Me empoderó al brindarme las herramientas para crear aplicaciones desde cero. Gracias a esta experiencia, logré entrar en la industria tech, donde ahora contribuyo en proyectos significativos, impulsando mi crecimiento personal y profesional.',
    photo: '/testimonials/testimony-photo.svg',
  },
  {
    name: 'Elvia Sansonetty 5',
    career: 'Egresada de la carrera de back-end 2022',
    comment:
      'Mi tiempo en ADA, aprendiendo Front-End, cambió mi vida. Me permitió entender la interconexión entre diseño y funcionalidad. Hoy trabajo en una empresa tech, aportando soluciones innovadoras. ADA no solo me formó, también me dio la confianza para destacar en un mercado laboral desafiante. dio la confianza para destacar en un mercado laboral desafiante.',
    photo: '/testimonials/testimony-photo.svg',
  },
  {
    name: 'Elvia Sansonetty 6',
    career: 'Egresada de la carrera de back-end 2022',
    comment:
      'Estudiar Back-End en ADA fue transformador. Me empoderó al brindarme las herramientas para crear aplicaciones desde cero. Gracias a esta experiencia, logré entrar en la industria tech, donde ahora contribuyo en proyectos significativos, impulsando mi crecimiento personal y profesional.',
    photo: '/testimonials/testimony-photo.svg',
  },
  {
    name: 'Elvia Sansonetty 7',
    career: 'Egresada de la carrera de back-end 2022',
    comment:
      'Mi tiempo en ADA, aprendiendo Front-End, cambió mi vida. Me permitió entender la interconexión entre diseño y funcionalidad. Hoy trabajo en una empresa tech, aportando soluciones innovadoras. ADA no solo me formó, también me dio la confianza para destacar en un mercado laboral desafiante. dio la confianza para destacar en un mercado laboral desafiante.',
    photo: '/testimonials/testimony-photo.svg',
  },
  {
    name: 'Elvia Sansonetty 8',
    career: 'Egresada de la carrera de back-end 2022',
    comment:
      'Estudiar Back-End en ADA fue transformador. Me empoderó al brindarme las herramientas para crear aplicaciones desde cero. Gracias a esta experiencia, logré entrar en la industria tech, donde ahora contribuyo en proyectos significativos, impulsando mi crecimiento personal y profesional.',
    photo: '/testimonials/testimony-photo.svg',
  },
]

export const studentTestimonials = testimonials.map((testimonial, index) => ({
  id: String(index + 1), // Asigna un ID automático
  ...testimonial,
}))
