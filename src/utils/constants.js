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

// confirmar en todos los casos la fecha de inicio
export const beginningCards = [
  {
    id: 1,
    title: 'Carrera',
    career: 'Desarrollo front-end',
    descriptionL:
      'Dominarás el lenguaje de programación JavaScript para dar vida a experiencias web y móviles sorprendentes. Desde la optimización de recursos hasta el diseño de interfaces de usuario, este campo te desafiará a crear soluciones innovadoras y cautivadoras. ',
    descriptionS:
      'Conviértete en desarrolladora front-end y crea sitios web utilizándo las últimas tecnologías del mercado.', // confirmar texto - se usaria para mobile
    date: 'Fecha estimada de inicio: Octubre 2023',
    duration: '9 meses : 3 clases semanales', // confirmar la duracion - porque no esta en el programa
  },
  {
    id: 2,
    title: 'Carrera',
    career: 'Desarrollo back-end',
    descriptionL:
      ' Exploramos el corazón de las aplicaciones, donde los datos cobran vida y la seguridad es primordial. Descubre cómo optimizamos la funcionalidad y la eficiencia para crear experiencias digitales sólidas y confiables para los usuarios.',
    descriptionS:
      'Conviértete en desarrolladora front-end y crea sitios web utilizándo las últimas tecnologías del mercado.', // confirmar texto - se usaria para mobile
    date: 'Fecha estimada de inicio: Octubre 2023',
    duration: '9 meses : 3 clases semanales',
  },
  {
    id: 3,
    title: 'Curso',
    career: 'UX/UI',
    descriptionL: ' NO TENEMOS TEXTO',
    descriptionS: 'NO TENEMOS TEXTO',
    date: 'Fecha estimada de inicio: Octubre 2023',
    duration: '10 semanas : 2 clases semanales', // confirmar
  },
  {
    id: 4,
    title: 'Curso',
    career: 'Python',
    descriptionL:
      ' En este curso dominarás los fundamentos de la programación y crearás tus primeros programas. Python es versátil y fácil de aprender, ideal para principiantes',
    descriptionS:
      'En este curso dominarás los fundamentos de la programación y crearás tus primeros programas. Python es versátil y fácil de aprender, ideal para principiantes', //confirmar texto
    date: 'Fecha estimada de inicio: Octubre 2023',
    duration: '3 meses : 2 clases semanales',
  },
]

export const awards = [
  {
    id: '1',
    logo: '/awards/equals.svg',
    name: 'Leadership in Tech Winner 2021',
  },
  {
    id: '2',
    logo: '/awards/santander.svg',
    name: 'Proyecto ganador de la categoría Re-Skill 2020',
  },
  {
    id: '3',
    logo: '/awards/ylai.svg',
    name: 'Young Leader of the Americas Initiative',
  },
  {
    id: '4',
    logo: '/awards/equals_global.svg',
    name: "Part of the ITU Telecom World's delegation",
  },
  {
    id: '5',
    logo: '/awards/google.svg',
    name: 'Change Agent Award Winner, por Google US y Anita Borg Institute of Technology',
  },
  {
    id: '6',
    logo: '/awards/global_enterpreneurship.svg',
    name: 'Global Entrepreneurship Summit',
  },
  {
    id: '7',
    logo: '/awards/council.svg',
    name: 'Council on Integrity in Results Reporting',
  },
  {
    id: '8',
    logo: '/awards/globant.svg',
    name: 'Nomination: Inspiring leader en Globant Awards - Women that builds 2023 edition',
  },
  {
    id: '9',
    logo: '/awards/anita.svg',
    name: 'Change Agent Award Winner, por Google US y Anita Borg Institute of Technology',
  },
  {
    id: '10',
    logo: '/awards/forbes.svg',
    name: '30 Promesas de los Negocios',
  },
]
