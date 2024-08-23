const testimonials = [
  {
    name: 'Angelly Sepulveda Garcia',
    enterprise: false,
    career: 'Becada desarrollo front-end',
    comment:
      'Soy Angelly, venezolana y hace 6 años llegué a Buenos Aires, donde comencé como repartidora de Rappi. Con el apoyo de Workertech y Ada, reforcé mis conocimientos en frontend y obtuve una beca para continuar formándome. Ahora trabajo en tecnología de forma híbrida, lo que me permite equilibrar mi vida personal y laboral. A las mujeres les digo: con constancia y confianza en nosotras mismas, podemos alcanzar nuestras metas.',
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
    name: 'Sol Tortora',
    teamRole: 'Ventas',
    image: '/teamWork/sol-tortora.png',
    socialLink: 'https://www.linkedin.com/in/soltortora/',
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
        name: 'Design',
        icon: 'fa:paint-brush',
      },
      {
        name: 'Research',
        icon: 'fa:search',
      },
      {
        name: 'Benchmark',
        icon: 'fa:line-chart',
      },
      {
        name: 'Usability test',
        icon: 'fa-solid:user-check',
      },
      {
        name: 'User flow',
        icon: 'fa-solid:user-ninja',
      },
      {
        name: 'UI Kit',
        icon: 'fa-brands:uikit',
      },
      {
        name: 'Figma',
        icon: 'ion:logo-figma',
      },
      {
        name: 'Wireframes',
        icon: 'fa:object-group',
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
        name: 'Python',
        icon: 'teenyicons:python-outline',
      },
      {
        name: 'GIT/GitHub',
        icon: 'bi:git',
      },
      {
        name: 'Fundamentos de programación',
        icon: 'ph:laptop',
      },
      {
        name: 'Programación orientada a objetos',
        icon: 'clarity:objects-line',
      },
      {
        name: 'Ejercitación y desafíos de práctica',
        icon: 'la:chalkboard-teacher',
      },
    ],
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
        name: 'Jira',
        icon: 'mdi:jira',
      },
      {
        name: 'Casos de prueba',
        icon: 'lucide:check-circle',
      },
      {
        name: 'Metodologías ágiles',
        icon: 'fluent:task-list-rtl-24-filled',
      },
      {
        name: 'Marco Scrum',
        icon: 'bi:calendar-week',
      },
      {
        name: 'Redacción de documentos',
        icon: 'jam:write-f',
      },
      {
        name: 'GIT/gitHub',
        icon: 'bi:git',
      },
      {
        name: 'Creación, edición y eliminación de documentos',
        icon: 'ci:folder-edit',
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
        name: 'Tipos de ramas de IA',
        icon: 'mdi:brain',
      },
      {
        name: 'IA generativa',
        icon: 'mdi:lightbulb-on',
      },
      {
        name: 'Técnicas de Prompt Engineering',
        icon: 'mdi:format-text',
      },
      {
        name: 'Generación de textos y multimedia',
        icon: 'mdi:palette',
      },
      {
        name: 'IA para la empleabilidad',
        icon: 'mdi:briefcase',
      },
    ],
  },
]

export const employerLogos = [
  {
    id: '1',
    logo: '/hiringCompanies/accenture.svg',
  },
  {
    id: '2',
    logo: '/hiringCompanies/aerolab.svg',
  },
  {
    id: '3',
    logo: '/hiringCompanies/gire.svg',
  },
  {
    id: '4',
    logo: '/hiringCompanies/ibm.svg',
  },
  {
    id: '5',
    logo: '/hiringCompanies/globant.svg',
  },
  {
    id: '6',
    logo: '/hiringCompanies/meli.svg',
  },
  {
    id: '7',
    logo: '/hiringCompanies/accenture.svg',
  },
  {
    id: '8',
    logo: '/hiringCompanies/aerolab.svg',
  },
  {
    id: '9',
    logo: '/hiringCompanies/gire.svg',
  },
  {
    id: '10',
    logo: '/hiringCompanies/ibm.svg',
  },
  {
    id: '11',
    logo: '/hiringCompanies/globant.svg',
  },
  {
    id: '12',
    logo: '/hiringCompanies/meli.svg',
  },
  {
    id: '13',
    logo: '/hiringCompanies/neoris.png',
  },
  {
    id: '14',
    logo: '/hiringCompanies/viseven-logo.png',
  },
]

export const faqs = [
  {
    question: '¿Es Ada ITW una empresa?',
    answer:
      'No, somos una organización sin fines de lucro, empoderamos a mujeres y feminidades de habla hispana a través de la educación en tecnología y la inserción laboral. Lo hacemos mediante dos estrategias: ofrecemos programas pagos para generar ingresos que sustentan becas y préstamos, y también nos aliamos con gobiernos, organismos internacionales y otras organizaciones para crear cursos a la medida e impactar a más mujeres y feminidades en la región latinoamericana.',
  },
  {
    question: '¿Porque nuestros cursos son pagos?',
    answer:
      'Somos una organización sin fines de lucro que empodera a las mujeres y feminidades a través de la tecnología. Para alcanzar este objetivo, ofrecemos cursos intensivos y carreras de programación que requieren un pago. Somos conscientes de que muchas mujeres enfrentan barreras económicas que les impiden acceder a oportunidades de formación de calidad. Es por ello que, al ofrecer cursos y programas pagos, generamos ingresos que nos permiten otorgar becas y préstamos de honor a aquellas mujeres que más lo necesitan. Agradecemos a las mujeres con la capacidad económica para invertir en su educación, ya que su contribución nos permite financiar y respaldar nuestras iniciativas de becas y préstamos. No solo están invirtiendo en su propio futuro, sino que también están extendiendo una mano solidaria a otras mujeres, creando un ciclo virtuoso de empoderamiento y crecimiento.',
  },
  {
    question: '¿Cómo puedo acceder a una beca?',
    answer:
      'Para acceder a una beca en ADA, no se permite la postulación individual. Es necesario hacerlo a través de entidades colaborativas como organizaciones sociales, empresas de impacto, o cualquier otra organización de la sociedad civil de toda la región latinoamericana. Estas entidades tienen un conocimiento profundo y un vínculo cercano con mujeres en situaciones vulnerables, lo que permite una asignación más efectiva de los recursos. La convocatoria está abierta de manera permanente, y se seleccionará a las postulantes según la cohorte en la que participen. Cada ONG puede postular a un máximo de 5 candidatas, asegurando así un acompañamiento más personalizado y efectivo. Ver el manual de postulación .',
  },
  {
    question: '¿El Pago Diferido es una Beca?',
    answer:
      'No, el Pago Diferido no es una beca. Es una modalidad diseñada para facilitar tu acceso a la educación. Te ofrecemos la oportunidad de pagar parte del costo al inicio de la capacitación y el resto una vez que hayas conseguido empleo en el sector tecnológico. Lo llamamos Préstamo de Honor.',
  },
  {
    question: '¿Las carreras son lo mismo que los cursos?',
    answer:
      'No, son dos propuestas educativas diferentes. Los cursos son cortos e intensivos, diseñados para darte una visión clara sobre qué es la programación y la tecnología, cómo utilizarla, y adquirir herramientas básicas para ejecutar proyectos sencillos. Incluyen clases en vivo y grabadas, acompañamiento en inserción laboral, y prácticas profesionales. Las carreras en programación son más extensas y profundas, donde aprenderás diversas tecnologías y aplicaciones, adquiriendo el conocimiento necesario para desenvolverte en el mundo profesional como Desarrolladora junior. Incluyen clases, workshops, job placement y prácticas profesionales.',
  },
  {
    question: '¿Hay algún requisito de ingreso?',
    answer:
      'Identificarse como mujer, tener el secundario completo, ser mayor de 16 años en Argentina y mayor de 18 años en el resto de los países, y aprobar nuestro proceso de inscripción.',
  },
  {
    question: '¿Cómo es el proceso de inscripción?',
    answer:
      'Completar el formulario de inscripción, firmar el acuerdo de inscripción y abonar la primera cuota, que es la reserva de vacante.',
  },
  {
    question: '¿Puedo ingresar a un curso o carrera en cualquier fecha?',
    answer:
      'No, nuestros cursos y carreras tienen fechas de inicio preestablecidas y estimativas según un calendario académico. Adaptamos nuestras ofertas formativas según las demandas de la industria empleadora, asegurando que los programas estén siempre actualizados y alineados con las necesidades de los empleadores y las últimas tendencias.',
  },
  {
    question: '¿Hay que pagar inscripción?',
    answer:
      'Sí, una vez completes tu proceso de admisión, se realiza el primer pago de la cuota inicial como reserva de cupo. Si te das de baja cerca del inicio del curso, esa cuota no se devuelve.',
  },
  {
    question: '¿Necesito conocimientos previos de programación?',
    answer:
      'No, no necesitas conocimientos previos. En nuestros programas, comenzarás desde lo más básico y cada semana iremos profundizando en los conceptos de programación.',
  },
  {
    question: '¿Cómo se aprueba?',
    answer:
      'Para aprobar las carreras o los cursos, debes cumplir con los siguientes requisitos: asistir regularmente a las clases, entregar todos los trabajos prácticos, presentar y aprobar el trabajo final, y hacer la formación en inserción laboral.',
  },
  {
    question: '¿Quién imparte las clases?',
    answer:
      'Las clases son impartidas por un equipo de docentes profesionales de la industria IT, comprometidos en compartir su conocimiento y experiencia contigo.',
  },
  {
    question: '¿Tengo que practicar fuera de clases?',
    answer:
      'Sí, la práctica diaria es esencial. Recomendamos practicar entre 2 y 3 horas diarias para reforzar lo aprendido en clase. Cuanto más practiques, mejor será tu desempeño.',
  },
  {
    question: '¿Qué características tiene que tener mi PC para cursar?',
    answer:
      'Requisitos mínimos recomendados: RAM de 8 GB (4 GB puede ser insuficiente para desarrollo moderno y multitarea eficiente), espacio en disco de 256 GB SSD (128 GB puede llenarse rápido, y un SSD mejora significativamente el rendimiento), sistema operativo Windows 10 actualizado, macOS, o una distribución moderna de Linux, y un procesador Intel i3 o equivalente.',
  },
  {
    question: '¿Qué programas tengo que instalar para el curso?',
    answer:
      'Los programas a instalar varían según la carrera o curso que elijas. A medida que avance el curso, te informaremos con antelación sobre qué programas descargar, las configuraciones necesarias y te proporcionaremos los enlaces más seguros para tu PC.',
  },
  {
    question:
      'Si hay días que no puedo ver la clase en vivo, ¿Puedo verla más tarde?',
    answer:
      'Sí, todas las clases quedan grabadas para que puedas verlas en cualquier momento.',
  },
  {
    question:
      'No puedo ver el curso en el horario establecido, ¿puedo verlo siempre grabado?',
    answer:
      'Sí, puedes seguir el curso con las clases grabadas si no puedes asistir en vivo, especialmente por diferencias horarias. Sin embargo, ten en cuenta que los trabajos prácticos son grupales, por lo que deberás coordinar con tus compañeras para cumplir con los plazos y objetivos. Recomendamos no atrasarse más de 3 clases.',
  },
  {
    question: '¿Entregan certificado de egreso?',
    answer:
      'Sí, al finalizar el curso y cumplir con los requisitos de egreso, te otorgaremos un certificado de culminación.',
  },
  {
    question: '¿Aseguran trabajo una vez culminado el programa?',
    answer:
      'No podemos garantizar empleo, ya que depende de la disposición y el esfuerzo personal de cada egresada. Sin embargo, te brindamos asesoramiento integral en la creación de tu CV y perfil de LinkedIn, te preparamos para entrevistas laborales y estamos en constante contacto con empresas para identificar oportunidades que se ajusten a tu perfil.',
  },
  {
    question: '¿Para cuál programa aplica la Inserción Laboral?',
    answer:
      'El acompañamiento en inserción laboral está disponible para las estudiantes y egresadas de las carreras y los cursos intensivos.',
  },
  {
    question: '¿Puedo buscar empleo por mi cuenta?',
    answer:
      'Sí, puedes buscar empleo por tu cuenta. De hecho, como parte de nuestra asesoría, te orientamos sobre cómo realizar una búsqueda laboral efectiva que se ajuste a tu perfil profesional.',
  },
  {
    question: '¿Tienen cupos acordados con empresas?',
    answer:
      'Establecemos relaciones con empresas de la industria y con profesionales de recursos humanos para mantenernos al tanto de sus necesidades de talento. Sin embargo, no tenemos cupos asegurados con ninguna empresa en particular.',
  },
  {
    question: '¿Las postulaciones con las empresas las hace Ada ITW?',
    answer:
      'El equipo de Ada ITW se encarga de enviarte ofertas laborales, pero eres tú quien debe postularse directamente a las empresas de tu interés y seguir los procesos de selección que cada compañía tenga establecidos.',
  },
  {
    question: '¿Tienen programa de pasantías?',
    answer:
      'Sí, ofrecemos prácticas profesionales con impacto social, donde podrás desarrollar un proyecto real para una ONG, obteniendo así tu primera experiencia laboral en un contexto de alto valor social. Estas prácticas son opcionales y se realizan en colaboración con otras egresadas.',
  },
]
