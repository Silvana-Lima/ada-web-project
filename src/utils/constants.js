const testimonials = [
  {
    name: 'Florencia Navarro',
    enterprise: false,
    career: 'Becada desarrollo front-end',
    comment:
      'Soy madre de 2 hijos y trabajé como cocinera, pero mi plan siempre fue estudiar. Obtuve la beca para desarrollo front-end en ADA, y descubrí que la programación podía ser mi forma de vida, quería dedicarme a la  programación. Me siento super feliz. Tuve la oportunidad de volver a empezar, de tener una profesión, y de volver a trabajar en algo que me permita estar con mis hijos. Mi objetivo es seguir creciendo en el mundo IT.',
    photo: '/testimonials/florencia-navarro.png',
  },
  {
    name: 'Daniela Loponte',
    enterprise: false,
    career: 'Mujer trans - Becada desarrollo back-end',
    comment:
      'La beca de Ada me abrió una puerta a la programación que fue totalmente nueva para mi. Me abrió muchas puertas en lo económico y laboral, que de otra forma hubiera sido muy difícil, ya que las personas trans tenemos ciertas dificultades a los accesos de los recursos tanto académicos como profesionales. Quiero decirles al equipo de Ada que el esfuerzo que hacen no pasa desapercibido y es muy importante.',
    photo: '/testimonials/daniela-loponte.png',
  },
  {
    name: 'Banco Interamericano de desarrollo',
    enterprise: true,
    career: '',
    comment:
      'Juntos, hemos llevado a cabo programas innovadores que fomentan el desarrollo de habilidades tecnológicas y el empoderamiento de las mujeres, lo que ha resultado en un aumento significativo de la representación femenina en roles tecnológicos clave. Esta colaboración es un ejemplo inspirador de cómo la inversión en la igualdad de género en el sector de la tecnología puede tener un impacto transformador en la sociedad y la economía.',
    photo: '/testimonials/bid.png',
  },
  {
    name: 'Accenture',
    enterprise: true,
    career: '',
    comment:
      'Las talentosas mujeres que han pasado por las aulas de ADA ITW han demostrado un nivel excepcional de conocimiento y habilidades técnicas, así como un compromiso innegable con la excelencia en el campo de la tecnología. Estas profesionales no solo han enriquecido nuestra fuerza laboral con su experiencia y creatividad, sino que también han desempeñado un papel fundamental en la creación de un ambiente inclusivo y diverso en Accenture.',
    photo: '/testimonials/accenture.png',
  },
  {
    name: 'Ailén Páez',
    enterprise: false,
    career: 'Alumna de la comision 15va. de back-end',
    comment:
      // se adapta el texto original a la cantidad de caracteres necesarios sin modificar la idea original
      'Hace un año decidí dar un volantazo en mi vida y estudiar programación, un mundo desconocido para mí. Elegí Ada por las facilidades de pago, sin ellas no habría podido acceder a una carrera IT. Invertí en mi futuro, y cada clase me deja más contenta. Estoy ansiosa por trabajar de esto, aprendo cada día y mi mente está activa como nunca. He conocido gente maravillosa que me ayuda en cada duda, en la cursada nos apoyamos mutuamente.',
    photo: '/testimonials/ailen-paez.png',
  },
  {
    name: 'Yanina Lorena Rios',
    enterprise: false,
    career: 'Introducción a desarrollo front-end',
    comment:
      'Mi experiencia fue muy linda aprendí cosas que no tenía idea. Yo solo tenía algo de conocimiento del celular y nada de computación. Lo que más me gustó fué las compañeras y la profe siempre poniendo todo de ella para que aprendamos y nos saquemos el miedo.',
    photo: '/testimonials/yanina-lorena-rios.png',
  },
  {
    name: 'Karina',
    enterprise: false,
    career: 'Diseño UX/Ui',
    comment:
      'Me gusta mucho de ADA  el acompañamiento del profesor y las clases activas ayudan a que sea entretenido y te inspiran a continuar.  Pienso que es importante acercarse a los nuevos recursos tecnológicos para aplicarlo en diferentes áreas y facilitar nuestras tareas. El mayor desafío es pensar que no podés, pero al hacerlo entendés que si se puede, solo tenés que invertir tiempo.',
    photo: '/testimonials/karina.png',
  },
  {
    name: 'Aylen Montofarno',
    enterprise: false,
    career: 'Introducción diseño UX/Ui',
    comment:
      'Me pareció interesante la propuesta enfocada a las mujeres. La programación solía ser más que nada un nicho para masculinidades. Antes de estudiar UXUI en ADA, estudie programación y análisis de datos. Mi consejo para quien puiera estudiar programación es que tenga paciencia y predisposición para practicar. También tener en cuenta la frustración que conlleva el codeo. Relajar, practicar, apoyarse en comunidades afines donde se pueda hacer Preguntas y buscar info relevante.',
    photo: '/testimonials/icon-person.svg',
  },
]

export const studentTestimonials = testimonials.map((testimonial, index) => ({
  id: String(index + 1), // Asigna un ID automático
  ...testimonial,
}))

export const beginningCards = [
  {
    id: 1,
    title: 'Carrera',
    career: 'Desarrollo front-end',
    color: '#cd0055',
    descriptionL:
      'Dominarás el lenguaje de programación JavaScript para dar vida a experiencias web y móviles sorprendentes. Desde la optimización de recursos hasta el diseño de interfaces de usuario, este campo te desafiará a crear soluciones innovadoras y cautivadoras. ',
    descriptionS:
      'Conviértete en desarrolladora front-end y crea sitios web utilizándo las últimas tecnologías del mercado.', // confirmar texto - se usaria para mobile
    date: 'Fecha estimada de inicio a confirmar',
    duration: '9 meses : 3 clases por semana (9hs semanales).',
  },
  {
    id: 2,
    title: 'Carrera',
    career: 'Desarrollo back-end',
    color: '#ff7d00',
    descriptionL:
      ' Exploramos el corazón de las aplicaciones, donde los datos cobran vida y la seguridad es primordial. Descubre cómo optimizamos la funcionalidad y la eficiencia para crear experiencias digitales sólidas y confiables para los usuarios.',
    descriptionS:
      'Conviértete en desarrolladora front-end y crea sitios web utilizándo las últimas tecnologías del mercado.', // confirmar texto - se usaria para mobile
    date: 'Fecha estimada de inicio a confirmar',
    duration: '9 meses : 3 clases por semana (9hs semanales).',
  },
  {
    id: 3,
    title: 'Curso',
    career: ' Intensivo - Diseño UX/UI',
    color: '#be44ff',
    descriptionL:
      ' Aprende los fundamentos de UX/UI y el proceso completo de desarrollo de productos digitales. Incluye ejemplos prácticos para reforzar conceptos teóricos. Al terminar, estarás lista para explorar el mundo de las interfaces digitales y la experiencia de usuarios.',
    descriptionS:
      'Aprende fundamentos de UX/UI con ejemplos prácticos. Al finalizar, podrás explorar la experiencia de usuarios e interfaces digitales.',
    date: 'Fecha estimada de inicio a confirmar',
    duration: '3 meses : 2 clases semanales (6hs semanales).',
  },
  {
    id: 4,
    title: 'Curso',
    career: 'Programación en Python',
    color: '#cd0055',
    descriptionL:
      ' En este curso dominarás los fundamentos de la programación y crearás tus primeros programas. Python es versátil y fácil de aprender, ideal para principiantes',
    descriptionS:
      'En este curso introductorio aprenderás el lenguaje de programación Phyton.',
    date: 'Fecha estimada de inicio a confirmar',
    duration: '3 meses : 2 clases semanales (6hs semanales).',
  },
  {
    id: 5,
    title: 'Curso',
    career: 'QA testing',
    color: '#ff7d00',
    descriptionL:
      ' Este curso está diseñado para quienes quieran aprender los conocimientos clave sobre pruebas automáticas de desarrollo y su influencia en el proceso de codificación. Incluye ejemplos prácticos para entender los conceptos teóricos. Al finalizar, tendrás habilidades para reportar errores y agilizar el desarrollo de software con tests automáticos.',
    descriptionS:
      'Curso ideal para aprender pruebas automáticas y su impacto en el desarrollo de código.',
    date: 'Fecha estimada de inicio a confirmar',
    duration: '3 meses : 2 clases semanales (6hs semanales).',
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

export const teamWork = [
  {
    id: 1,
    name: 'Javier de la Calle',
    teamRole: 'Director institucional',
    image: '/teamWork/javier-de-la-calle.png',
    socialLink: 'https://www.linkedin.com/in/javierleandrodelacalle/',
  },
  {
    id: 2,
    name: 'Veronica Heredia',
    teamRole: 'Responsable de inserción laboral',
    image: '/teamWork/vero-heredia.png',
    socialLink: 'https://www.linkedin.com/in/veronica-heredia-valderrama/',
  },
  {
    id: 3,
    name: 'Diana Osorio',
    teamRole: 'Directora ejecutiva',
    image: '/teamWork/diana-osorio.jpg',
    socialLink: 'https://www.linkedin.com/in/diana-osorio-rojas-/',
  },
  {
    id: 4,
    name: 'Macarena Galardi',
    teamRole: 'Ventas',
    image: '/teamWork/macarena-galardi.jpg',
    socialLink: 'https://www.linkedin.com/in/macarena-galardi-4a5303213/',
  },
  {
    id: 5,
    name: 'Deborah Soto',
    teamRole: 'Bienestar de Alumnas',
    image: '/teamWork/deborah-soto.png',
    socialLink: 'https://www.linkedin.com/in/deborahcarolinasoto/',
  },
  {
    id: 6,
    name: 'Matias Arno',
    teamRole: 'Coordinador académico',
    image: '/teamWork/matias-arno.jpg',
    socialLink: 'https://www.linkedin.com/in/matias-agustin-arno-9b8526a6/',
  },
]
