const testimonials = [
  {
    name: 'Angelly Sepulveda Garcia',
    enterprise: false,
    career: 'Becada desarrollo front-end',
    comment:
      'Mi nombre es Angelly, soy venezolana y hace 6 años llegué a Buenos Aires, donde comencé como repartidora de Rappi. Con el apoyo de Workertech y Ada, reforcé mis conocimientos en frontend y obtuve una beca para continuar formándome. Ahora trabajo en tecnología de forma híbrida, lo que me permite equilibrar mi vida personal y laboral. A las mujeres les digo: con constancia y confianza en nosotras mismas, podemos alcanzar nuestras metas.',
    photo: '/testimonials/angie-sepulveda.jpg',
  },
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
  {
    id: 6,
    title: 'Curso',
    career: 'IA Generativa',
    color: '#cd0055',
    descriptionL:
      'Curso intensivo de IA Generativa: Aprende a crear textos, imágenes y música con modelos avanzados de IA. Sin requisitos previos. Potencia tu creatividad tecnológica.',
    descriptionS:
      'Curso de IA Generativa: crea textos, imágenes y música con IA avanzada. Sin requisitos previos. Potencia tu creatividad.',
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
    name: 'Diana Osorio',
    teamRole: 'Directora ejecutiva',
    image: '/teamWork/diana-osorio.png',
    socialLink: 'https://www.linkedin.com/in/diana-osorio-rojas-/',
  },
  {
    id: 2,
    name: 'Javier de la Calle',
    teamRole: 'Director institucional',
    image: '/teamWork/javier-de-la-calle.png',
    socialLink: 'https://www.linkedin.com/in/javierleandrodelacalle/',
  },
  {
    id: 3,
    name: 'Veronica Heredia',
    teamRole: 'Responsable de inserción laboral',
    image: '/teamWork/vero-heredia.png',
    socialLink: 'https://www.linkedin.com/in/veronica-heredia-valderrama/',
  },
  {
    id: 4,
    name: 'Macarena Galardi',
    teamRole: 'Ventas',
    image: '/teamWork/macarena-galardi.png',
    socialLink: 'https://www.linkedin.com/in/macarena-galardi-4a5303213/',
  },
  {
    id: 5,
    name: 'Deborah Soto',
    teamRole: 'Bienestar de Alumnas',
    image: '/teamWork/deborah-soto.png',
    socialLink: 'https://www.linkedin.com/in/deborahcarolinasoto/',
  },
]

export const whyUs = [
  {
    id: 1,
    title: 'Habilidades blandas',
    description:
      'Fomentamos el desarrollo de habilidades en comunicación, liderazgo, trabajo en equipo, metodologías ágiles y más.',
    bgColor: '#F0F000',
  },
  {
    id: 2,
    title: 'Inserción laboral',
    description:
      'Conectamos a nuestras egresadas con oportunidades laborales a través de formación, alianzas empresariales y eventos de desarrollo profesional.',
    bgColor: '#FCFCCC',
  },
  {
    id: 3,
    title: 'Aprendizaje práctico',
    description:
      'Desafiamos la educación tradicional  para que realmente disfrutes aprender en nuestras sesiones 70 % prácticas.',
    bgColor: '#EAC3FF',
  },
  {
    id: 4,
    title: 'Acompañamiento',
    description:
      'Integramos un enfoque teórico (60%) con actividades prácticas (40%) para aplicar los conocimientos adquiridos eficazmente.',
    bgColor: '#FFBF7D',
  },
]

export const whyAda = [
  {
    id: 1,
    title: 'Aprendizaje práctico',
    description:
      'Desafiamos la educación tradicional  para que realmente disfrutes aprender en nuestras sesiones 70 % prácticas.',
    bgColor: '#F0F000',
  },
  {
    id: 2,
    title: 'Acompañamiento',
    description:
      'Integramos un enfoque teórico (60%) con actividades prácticas (40%) para aplicar los conocimientos adquiridos eficazmente.',

    bgColor: '#FCFCCC',
  },
  {
    id: 3,
    title: 'Habilidades blandas',
    description:
      'Fomentamos el desarrollo de habilidades en comunicación, liderazgo, trabajo en equipo, metodologías ágiles y más.',
    bgColor: '#EAC3FF',
  },
  {
    id: 4,
    title: 'Inserción laboral',
    description:
      'Conectamos a nuestras egresadas con oportunidades laborales a través de formación, alianzas empresariales y eventos de desarrollo profesional.',
    bgColor: '#FFBF7D',
  },
]

export const courses = [
  {
    id: '1',
    type: 'Curso Intensivo',
    name: 'Diseño UX/UI',
    descriptionL: `
      Al finalizar el curso, la estudiante contará con los conocimientos para poder adentrarse en el mundo de la experiencia de usuarios y las interfaces digitales.

      - Reconocer los conceptos y las prácticas del diseño UX/UI. 

      - Identificar y reconocer el desarrollo y la planificación de un producto digital. 

      - Comprender que la creación de productos digitales interactivos adecuados para el comportamiento de las personas, deben ser abordados con métodos, prácticas y conocimientos imprescindibles en el diseño UX/UI. 

      - A lo largo del curso, diseñarás y crearás un prototipo de app o sitio web mobile first en figma a partir de un MVP`,
    descriptionS:
      'Tras el curso, la estudiante dominará el diseño UX/UI, planificación de productos digitales y creación de prototipos mobile first en Figma desde un MVP, adquiriendo esenciales conocimientos para la interacción digital.',
    image: '/ourCourses/girl-pc-1.svg',
    programUrl:
      'https://adaitw.org/wp-content/uploads/2023/03/Brochure-curso-ux_ui-NUEVO-numero.pdf',
    skills: [
      {
        name: 'GIT',
        icon: 'bi:git',
      },
      {
        name: 'SASS',
        icon: 'mdi:sass',
      },
      {
        name: 'Responsive Design',
        icon: 'mdi:responsive',
      },
      {
        name: 'HTML5',
        icon: 'ri:html5-fill',
      },
      {
        name: 'JavaScript',
        icon: 'cib:js',
      },
      {
        name: 'CSS3',
        icon: 'fa-brands:css3-alt',
      },
      {
        name: 'React.js',
        icon: 'mdi:react',
      },
    ],
  },
  {
    id: '2',
    type: 'Curso Intensivo',
    name: 'Python',
    descriptionL: `
      En este nuevo curso de Python, aprenderás los fundamentos de la programación , desde cómo funciona el lenguaje hasta cómo crear tus primeros programas.

Python es un lenguaje de programación de propósito general que se utiliza para construir casi cualquier cosa. Es fácil de aprender, lo que lo hace ideal para personas que recién están comenzando en la programación. Su sintaxis es clara y fácil de leer, lo que hace que el proceso de aprendizaje sea más rápido y eficiente.

Aprender este lenguaje de programación es una excelente inversión en tu futuro profesional y personal. Te dará habilidades valiosas en programación y te permitirá posteriormente explorar campos emocionantes como la ciencia de datos, la inteligencia artificial y desarrollo web backend.`,
    descriptionS:
      'Descubre en el curso de Python los fundamentos de programación. Ideal para principiantes, Python es fácil de aprender, con sintaxis clara. Una inversión para habilidades en ciencia de datos, inteligencia artificial y desarrollo web backend.',
    image: '/ourCourses/girl-pc-2.svg',
    programUrl:
      'https://drive.google.com/file/d/198NFGs7O3RfrNvBTVo0gN0HUN_7yikf-/view',
    skills: [
      {
        name: 'GIT',
        icon: 'bi:git',
      },
      {
        name: 'SASS',
        icon: 'mdi:sass',
      },
      {
        name: 'Responsive Design',
        icon: 'mdi:responsive',
      },
      {
        name: 'HTML5',
        icon: 'ri:html5-fill',
      },
      {
        name: 'JavaScript',
        icon: 'cib:js',
      },
      {
        name: 'CSS3',
        icon: 'fa-brands:css3-alt',
      },
      {
        name: 'React.js',
        icon: 'mdi:react',
      },
    ],
    // skills: [
    //   {
    //     name: 'Python',
    //     icon: 'teenyicons:python-outline',
    //   },
    //   {
    //     name: 'GIT',
    //     icon: 'bi:git',
    //   },
    //   {
    //     name: 'Fundamentos de programación',
    //     icon: 'ph:laptop',
    //   },
    //   {
    //     name: 'Programación orientada a objetos',
    //     icon: 'clarity:objects-line',
    //   },
    //   {
    //     name: 'Ejercitación y desafíos de práctica',
    //     icon: 'la:chalkboard-teacher',
    //   },
    // ],
  },
  {
    id: '3',
    type: 'Curso Intensivo',
    name: 'QA Testing',
    descriptionL: `
      Este curso está pensado especialmente para aquellas personas que deseen aprender los conocimientos claves para iniciarse en el mundo de las pruebas automáticas de desarrollo, además de comprender cómo éste influye en el proceso de desarrollo de código.

      Se abordarán algunos ejemplos prácticos que servirán para interiorizar los conceptos teóricos. 

      Al finalizar el curso, la estudiante contará con los conocimientos de los procesos que se llevan a cabo para poder reportar errores y agilizar el desarrollo de software mediante test automáticos.`,
    descriptionS:
      'Este curso es ideal para aprender sobre pruebas automáticas y su impacto en el desarrollo de código, con ejemplos prácticos. Al finalizar, el estudiante sabrá reportar errores y agilizar el desarrollo de software mediante tests automáticos.',
    image: '/ourCourses/girl-pc-1.svg',
    programUrl:
      'https://drive.google.com/file/d/1Zg8IIJ6WZOvak24OEav1ev25MwFb9Jvq/view',

    skills: [
      {
        name: 'GIT',
        icon: 'bi:git',
      },
      {
        name: 'SASS',
        icon: 'mdi:sass',
      },
      {
        name: 'Responsive Design',
        icon: 'mdi:responsive',
      },
      {
        name: 'HTML5',
        icon: 'ri:html5-fill',
      },
      {
        name: 'JavaScript',
        icon: 'cib:js',
      },
      {
        name: 'CSS3',
        icon: 'fa-brands:css3-alt',
      },
      {
        name: 'React.js',
        icon: 'mdi:react',
      },
    ],
  },
  {
    id: '4',
    type: 'Curso Intensivo',
    name: 'IA Generativa',
    descriptionL: `
      Aprende a crear textos, imágenes y música con modelos avanzados de IA. 
      
      Sin requisitos previos. 
      
      Potencia tu creatividad tecnológica.`,
    descriptionS: `
      Aprende a crear textos, imágenes y música con modelos avanzados de IA. 
      
      Sin requisitos previos. 
      
      Potencia tu creatividad tecnológica.`,
    image: '/ourCourses/girl-pc-2.svg',
    programUrl:
      'https://drive.google.com/file/d/1Ac2utMIEXtADagbJ4fe4YRMORA39K3tQ/view',

    skills: [
      {
        name: 'GIT',
        icon: 'bi:git',
      },
      {
        name: 'SASS',
        icon: 'mdi:sass',
      },
      {
        name: 'Responsive Design',
        icon: 'mdi:responsive',
      },
      {
        name: 'HTML5',
        icon: 'ri:html5-fill',
      },
      {
        name: 'JavaScript',
        icon: 'cib:js',
      },
      {
        name: 'CSS3',
        icon: 'fa-brands:css3-alt',
      },
      {
        name: 'React.js',
        icon: 'mdi:react',
      },
    ],
  },
]
