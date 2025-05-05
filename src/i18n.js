import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      hi: "Hola!",
      imname: `Me llamo {{name}}`,
      im: `Soy`,
      developer: `desarrollador`,
      download: `Descargar CV`,
      aboutme: "Desarrollador móvil en santiago de chile",
      abouttitle: "Acerca de mí",
      whoIam: "Quien soy yo?",
      home: "Inicio",
      about: "Acerca de mí",
      services: "Servicios",
      skills: "Habilidades",
      education: "Educación",
      experience: "Experiencia",
      work: "Trabajos",
      contact: "Contactame",
      made: "Hecho con",
      and: "y",
      thanks: "Gracias",
      forInspiration: "por la inspriación",
      hiIamCarlos: "Hola soy Carlos Petit",
      developer: "Desarrollador",
      software: "Software",
      mobile: "Movil",
      whatIDo: "¿Lo que hago?",
      hereInsights: "Aquí están algunos de mis conocimientos",
      ideas: "Ideas innovadoras",
      bealive:
        "Creo firmemente en el cambio, es necesario actualizar ideas,innovar, arriesgarse.",
      softwaredesc:
        "Desarrollo de calidad, ágil, enfocado en el cliente, me gusta ofrecer productos de calidad.",
      p1: "Lo que hacemos es el testimonio de quienes somos. Las personas pueden estar involucradas o no, pero para mí es una cuestión de respeto por los demás. No involucrarse en el trabajo es simplemente un delito.",
      p2: "Haga que cada producto sea lo mejor posible, demostrando y llevando mis capacidades al límite. Centrado en la forma y las herramientas. Lo que no incluimos es tan importante como lo que incluimos. El objetivo es claro y no es ganar  dinero. El objetivo que debe perseguirse desesperadamente es hacer el mejor producto posible. Si confía en que lo ha logrado, a la gente le gustará, lo comprará y disfrutará de usarlo.",
      p3: "No tengo miedo de fallar. Si no fallamos, es que no estamos tratando lo suficiente. El 80% de las cosas que desarrollo en el estudio no son lo suficientemente buenas. Si después de dar lo mejor de mí no creo que sea lo suficientemente bueno, simplemente dejo de trabajar en él y continúo el proceso de iteración hasta que obtengo un producto que es de suficiente calidad.",
      mobileApplications: "Aplicaciones móviles",
      mobileDesc:
        "Soluciones de calidad basadas en la movilidad con tecnologías como React Native.",
      consultancy: "Consultoría",
      consultancyDesc:
        " Ofrezco servicios de consultoría para el desarrollo de software dando a mis clientes una visión centrada en esta nueva era.",
      cupOfCoffee: "Tazas de café",
      projects: "Proyectos",
      clients: "Clientes",
      mySpecialty: "Mi especialidad",
      mySkills: "Mis habilidades",
      skillsDesc:
        "Debido a los cambios constantes del mundo TI decidí hacer el máximo esfuerzo posible para siempre estar al día, estas son algunas de las tecnologías/metodologías/frameworks con los que me siento realmente cómodo trabajando.",
      skillsDescFollow:
        "A continuación se presentan algunas de las habilidades que he adquirido y perfeccionado a lo largo de los años.",
      education: "Educación",
      compIng: "Ingeniería en Informática",
      compIngDesc: "Estudié Ingeniería Informática en la ",
      compIngDesc2: " Universidad Nacional Experimental de Tachira (UNET)",
      reactNativeCareer:
        "Carrera de DESARROLLO DE APLICACIONES CON REACT NATIVE",
      reactNativeCareerDesc:
        "Desarrollo de aplicaciones nativas de iOS y Android usando Javascript. Dominating React Native, el marco desarrollado por Facebook que permite reutilizar un código, manteniendo los componentes nativos para cada plataforma. usando bibliotecas y componentes como: ",
      reactNativeLib1: "React Navigation",
      reactNativeLib2: "React Redux",
      reactNativeLib3: "React Native Firebase",
      careerApple: "Carrera de APPLE FULL STACK DEVELOPER",
      careerAppleDesc:
        "Desarrollo de aplicaciones para iPhone o iPad. Programa en Objective-C y Swift 4. Publicación de aplicaciones en la App Store y más.",
      careerAppleDesc2:
        "Tecnologías utilizadas: Swift 4, Xcode 10, Swift Campos de juego, base de fuego",
      others: " Otros cursos y estudios",
      courseProfesionalGit: "Curso profesional de Git y GitHub",
      ibm: "IBM Cloud Basics",
      scrum: "Scrum",
      java: "Java",
      javascript: "Fundamentos de JavaScript",
      reactjs: "Curso ReactJS",
      brand: "Curso de Marca Personal",
      workExperience: "Experiencia laboral",
      srTitle: "Desarrollador y consultor para S.R Consultores",
      srYear: "Marzo 2019 - November 2020",
      srDesc:
        "Participé activamente en la transformación digital de Walmart Chile, generando soluciones para nuestros clientes y colaboradores enfatizando en la innovación y agilidad. Trabaja con tecnologías como React Native, Android Native, Node JS, Mongo DB, REST API, Kubernetes entre otras.",
      srTitle2: "Desarrollador - S.R Consultores",
      srYear2: "Noviembre 2020 - Junio 2021",
      srDesc2:
        "En SR Consultores desarrollé Sistema de Gestión de Órdenes (OMS), una aplicación móvil para realizar el parking de productos en bodega para una empresa de menaje que era a su vez una pieza del OMS, Para este sistema desarrolle todo el sistema desde el Backend desarrollado en NodeJS, el sistema privado del OMS y la aplicación móvil que fue desarrollada en React-Native.",
      suraMobileDeveloper: "Desarrollador de aplicaciones móviles",
      suraYear: "Octubre 2018 - Febrero 2019",
      suraDesc:
        "Consultor de desarrollo móvil para la empresa Sura, en este puesto trabajé como programador de aplicaciones móviles, la aplicación AFP Capital se desarrolló con el framework Xamarin, también brindé soporte a la aplicación de reembolso colectivo Sura, aplicación desarrollada en React-Native.",
      suraDesc2:
        "Uso de los servicios REST y SOAP. Gestión de IBM Cloud, API Connect, Mobile First Platform.",
      freelanceTitle: "Desarrollador de aplicaciones móviles Freelance",
      freelanceYear: "Diciembre 2018 - Febrero 2019",
      freelanceDesc:
        "Desarrollo de la aplicación Lecaros APP para la empresa inmobiliaria y de gestión inmobiliaria Lecaros, una aplicación diseñada para la gestión y mantenimiento de los inmuebles disponibles para alquiler o venta. Desarrollado en React Native, con librerías para el uso de la cámara, mapas, consumo de Rest APIs, entre otros.",
      phpTitle: "Desarrollador PHP y React Native",
      phpYear: "Noviembre 2017 - Septiembre 2018",
      phpDesc:
        "Desarrollé dos aplicaciones prototipo en React Native como una propuesta para migrar de Ionic a React Native para la compañía GrupoSolux como parte de mi capacitación en esa tecnología.",
      phpDesc2:
        " Como desarrollador de PHP, participé en varios sistemas desarrollados por la compañía para los sectores público  y privado. Trabajamos con instituciones como Registro Civil, ChileValora, para la firma de abogados Navarro Y Asociados, entre otros proyectos.",
      betTitle: "Desarrollador de software - Apuestas La Seguridad",
      betYear: "Enero 2015 - Enero 2016",
      betDesc:
        "Durante este período, construí todo el sistema digital para la administración y el mantenimiento de los equipos de la compañía, además de crear el sistema de contabilidad de la compañía y el sistema de pago de salarios de los trabajadores.",
      internTitle:
        "Desarrollador de software - Universidad Nacional Experimental del Tachira",
      internYear: "Enero 2013 - Diciembre 2014",
      internDesc:
        "Liderar el proyecto para la creación de un sistema de coordinación deportiva llamado SIGEDU",
      internDesc2:
        "Liderar, desarrollar una propuesta de sistema para  generar un sistema de material académico para todos los miembros de la comunidad universitaria, virtualizando guías, libros, apuntes, exámenes, dando así un acceso rápido a la información.",
      biceTitle: "Desarrollador Mobile - Banco BICE",
      biceYear: "Junio 2021 - Presente",
      biceDesc: `Desarrollador Móvil para el banco BICE, el equipo se encuentra a cargo del desarrollo de la nueva experiencia movil del banco, una aplicación totalmente diseñada desde cero, microservicios, bff, patrones de diseño actuales, test unitarios, sistemas de diseños, modularizacion. Actualmente esta aplicacion se encuentra disponible en las tiendas de aplicaciones de Android e iOS`,
      myWork: "Mi trabajo",
      recentWork: "Trabajo reciente",
      apps: "Apps",
      contactMe: "Contactame",
      contact: "Contacto",
      personalProjects: "Proyectos Personales",
      storyBook:
        "Este es un repositorio de ejemplo donde se creó un UI-KIT utilizando la biblioteca storyBook, es un ejemplo bastante simple que se basa en algunos trabajos/proyectos en los que he participado.",
      application: "Applicación",
      uikit: "UI-KIT Applicación",
      viewCodeOnGithub: "Ver Código en Github",
      tindog:
        "Tindog: un simple clon de la aplicación Tinder, ¡pero para tu mascota! esta aplicación se hizo en Swift 4 y con Firebase",
      instaClone: "Un simple clon de Instagram hecho con React Native",
      prototype: "Prototipo",
      viewOnPlayStore: "Ver en PlayStore",
      viewOnAppStore: "Ver en AppStore",
      mobileApp: "Aplicación Móvil",
      ecoWays: "EcoWays App",
      afpCapital: "AFP Capital APP",
      oms: "OmStock",
      omsDesc: "Sistema de Gestión de Órdenes",
      githupPage: "Ve mi Pagina de Github",
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "mensaje",
      sendMessage: "Enviar Mensaje",
      imc: "IMC - Calc",
      imcDesc: "Calculadora de Masa Corporal",
      privacy: {
        title: "Política de Privacidad para {{appName}}",
        effectiveDateLabel: "Fecha de Entrada en Vigor:",
        intro:
          "Bienvenido a {{appName}}. Tu privacidad es importante para nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando utilizas nuestra aplicación móvil {{appName}}. Por favor, lee esta política detenidamente. Si no estás de acuerdo con los términos de esta política de privacidad, por favor no accedas a la aplicación.",
        section1: {
          title: "1. Información que Recopilamos",
          p1: "Podemos recopilar información sobre ti de varias maneras. La información que podemos recopilar a través de la Aplicación depende del contenido y los materiales que utilices, e incluye:",
          subtitle1: "Datos Proporcionados por el Usuario",
          p2: "Información que nos proporcionas directamente cuando utilizas ciertas funciones de la aplicación, como:",
          item1:
            "Datos de las sesiones de estimación: Esto puede incluir los votos emitidos, las escalas seleccionadas (Fibonacci, T-shirt, etc.), y potencialmente nombres o descripciones de Historias de Usuario si decides introducirlos. [IMPORTANTE: Especifica si estos datos se guardan localmente o en un servidor, y si son anónimos o vinculados a un usuario.]",
          accountInfoItem:
            "Información de cuenta (si aplica): Como tu nombre de usuario, email, etc., si creas una cuenta.",
          subtitle2: "Datos Recopilados Automáticamente",
          p3: "Información que nuestros servidores recopilan automáticamente cuando accedes a la Aplicación, como:",
          item2:
            "Datos de Uso: Información sobre cómo interactúas con la aplicación, como las funciones que utilizas, la frecuencia y duración de tus sesiones. Esto nos ayuda a mejorar la aplicación. [Si usas servicios de terceros como Firebase Analytics, Google Analytics, Sentry, etc., menciónalo aquí explícitamente.]",
          item3:
            "Datos del Dispositivo: Información sobre tu dispositivo móvil, como el modelo, sistema operativo, identificadores únicos del dispositivo (si aplica y de forma anonimizada si es posible), e información de la red móvil.",
          item4:
            "Datos de Errores y Diagnóstico: Recopilamos información sobre errores o 'crashes' que puedan ocurrir para poder solucionarlos.",
        },
        section2: {
          title: "2. Cómo Usamos Tu Información",
          p1: "Tener información precisa sobre ti nos permite ofrecerte una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre ti a través de la Aplicación para:",
          item1:
            "Proporcionar y gestionar la funcionalidad principal de la aplicación (sesiones de Planning Poker, votaciones, historial).",
          item2: "Mejorar la eficiencia y operación de la Aplicación.",
          item3:
            "Monitorear y analizar el uso y las tendencias para mejorar tu experiencia con la Aplicación.",
          item4: "Diagnosticar y solucionar problemas técnicos y errores.",
          item5: "Cumplir con requisitos legales y regulatorios.",
        },
        section3: {
          title: "3. Divulgación de Tu Información",
          p1: "No compartiremos, venderemos, alquilaremos ni intercambiaremos tu información personal con terceros para sus fines comerciales sin tu consentimiento, excepto como se describe en esta Política de Privacidad.",
          p2: "Podemos compartir información que hemos recopilado sobre ti en ciertas situaciones:",
          subtitle1: "Proveedores de Servicios:",
          item1:
            'Podemos compartir tu información con proveedores externos que realizan servicios para nosotros o en nuestro nombre, incluyendo análisis de datos, almacenamiento en la nube, diagnóstico de errores, etc. [Sé específico si es posible, ej. "Usamos Firebase para análisis y reportes de errores". Revisa las políticas de privacidad de tus proveedores.]',
          subtitle2: "Por Ley o para Proteger Derechos:",
          item2:
            "Si creemos que la liberación de información sobre ti es necesaria para responder a un proceso legal, investigar o remediar posibles violaciones de nuestras políticas, o proteger los derechos, propiedad y seguridad de otros, podemos compartir tu información según lo permita o exija cualquier ley, norma o regulación aplicable.",
        },
        section4: {
          title: "4. Seguridad de Tu Información",
          p1: "Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger tu información personal. Si bien hemos tomado medidas razonables para asegurar la información personal que nos proporcionas, ten en cuenta que a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable, y ningún método de transmisión de datos puede garantizarse contra cualquier interceptación u otro tipo de uso indebido. [Si los datos se guardan solo localmente, puedes enfatizar eso aquí como una medida de privacidad.]",
        },
        section5: {
          title: "5. Retención de Datos",
          p1: 'Retendremos tu información solo durante el tiempo que sea necesario para los fines establecidos en esta Política de Privacidad. [Sé más específico si puedes: Ej. "Los datos de sesión se almacenan localmente y se eliminan cuando desinstalas la app" o "Los datos analíticos anónimos se conservan durante X meses".] Retendremos y utilizaremos tu información en la medida necesaria para cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestras políticas.',
        },
        section6: {
          title: "6. Tus Derechos de Privacidad",
          p1: "Dependiendo de tu ubicación, puedes tener ciertos derechos con respecto a tu información personal. [Adapta esto. Si los datos son locales, el usuario los controla eliminando la app o sus datos. Si son en servidor, explica cómo pueden solicitar acceso/corrección/eliminación contactándote.]",
          localData:
            "Dado que la mayoría de los datos de sesión se almacenan localmente en tu dispositivo, puedes gestionarlos directamente eliminando los datos de la aplicación o desinstalando la aplicación.",
          contactRequest:
            "Si deseas revisar, cambiar o eliminar cualquier información personal que podamos haber recopilado (como datos analíticos vinculados a un identificador), por favor contáctanos usando la información de contacto proporcionada a continuación.",
        },
        section7: {
          title: "7. Política para Niños",
          p1: "No recopilamos conscientemente información personal de niños menores de 13 años (o la edad aplicable en tu jurisdicción). Si te das cuenta de que hemos recopilado información personal de un niño sin el consentimiento de los padres, por favor contáctanos para que podamos tomar las medidas adecuadas.",
        },
        section8: {
          title: "8. Cambios a Esta Política de Privacidad",
          p1: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la "Fecha de Entrada en Vigor" en la parte superior. Se te aconseja revisar esta Política de Privacidad periódicamente para cualquier cambio.',
        },
        section9: {
          title: "9. Contáctanos",
          p1: "Si tienes preguntas o comentarios sobre esta Política de Privacidad, por favor contáctanos en:",
        },
      },
    },
  },
  en: {
    translation: {
      hi: "Hi!",
      imname: `I'm {{name}}`,
      im: `I am`,
      developer: `an developer`,
      download: `Download CV`,
      aboutme: "Mobile Developer in Santiago De Chile",
      home: "Home",
      about: "About",
      whoIam: "Who Am I?",
      abouttitle: "About me",
      services: "Services",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      work: "Work",
      contact: "Contact me",
      made: "Made with",
      and: "and",
      thanks: "Thanks",
      forInspiration: "for inspiration",
      hiIamCarlos: "Hi im Carlos Petit",
      developer: "Developer",
      software: "Software",
      mobile: "Mobile",
      whatIDo: "¿What I do?",
      hereInsights: "Here are some of my insights",
      ideas: "Innovative ideas",
      bealive:
        "I firmly believe in change, it is necessary to update ideas,innovate, take risks",
      softwaredesc:
        "Quality development, agile, customer focused, I likes to offer quality products.",
      p1: "",
      p2: "",
      p3: "",
      mobileApplications: "Mobile Applications",
      mobileDesc:
        "Soluciones de calidad basadas en la movilidad con tecnologías como React Native.",
      consultancy: "Consultancy",
      consultancyDesc:
        "I offer consulting services for the development of software giving my clients a vision focused on this new era.",
      cupOfCoffee: "Cup of coffee",
      projects: "Projects",
      clients: "Clients",
      mySpecialty: "My specialty",
      mySkills: "My skills",
      skillsDesc:
        "Due to the constant changes in the IT world I decided to make the maximum possible effort to always be up to date, these are some of the technologies/methodologies/frameworks with which I feel really comfortable working.",
      skillsDescFollow:
        "Below are some of the skills I have acquired and honed over the years.",
      education: "Education",
      compIng: "Computer engineering",
      compIngDesc: "I studied Computer Engineering at the",
      compIngDesc2: " Universidad Nacional Experimental de Tachira (UNET)",
      reactNativeCareer: "APPLICATION DEVELOPMENT CAREER WITH REACT NATIVE",
      reactNativeCareerDesc:
        "Development of native iOS and Android applications using Javascript. Dominating React Native, the framework developed by Facebook that allows code to be reused while maintaining native components for each platform. using libraries and components like: ",
      reactNativeLib1: "React Navigation",
      reactNativeLib2: "React Redux",
      reactNativeLib3: "React Native Firebase",
      careerApple: "Career of APPLE FULL STACK DEVELOPER",
      careerAppleDesc:
        "Development of applications for iPhone or iPad. Program in Objective-C and Swift 4. Publish apps on the App Store and more.",
      careerAppleDesc2:
        "Technologies used: Swift 4, Xcode 10, Swift PlayGrounds, Firebase",
      others: "Other courses and studies",
      courseProfesionalGit: "Professional course of Git and GitHub",
      ibm: "IBM Cloud Basics",
      scrum: "Scrum",
      java: "Java",
      javascript: "JavaScript fundamentals",
      reactjs: "ReactJS Course",
      brand: "Personal Brand Course",
      workExperience: "Work Experience",
      srTitle: "Developer and consultant for S.R Consultores",
      srYear: "March 2019 - June 2021",
      srDesc:
        "I actively participated in the digital transformation of Walmart Chile, generating solutions for our clients and collaborators emphasizing innovation and agility. Work with technologies like React Native, Android Native, Node JS, Mongo DB, REST API, Kubernetes among others.",
      srTitle2: "Desarrollador - S.R Consultores",
      srYear2: "November 2020 - June 2021",
      srDesc2:
        "At SR Consultores I developed the Order Management System (OMS), a mobile application to carry out the parking of products in the warehouse for a kitchenware company that was in turn a part of the OMS. For this system, I developed the entire system from the Backend developed. in NodeJS, the private system of the OMS and the mobile application that was developed in React-Native.",
      suraMobileDeveloper: "Mobile application developer",
      suraYear: "October 2018- February 2019",
      suraDesc:
        "Mobile development consultant for the company Sura, in this position I worked as a mobile application programmer, the AFP Capital application was developed in the Xamarin Framework, I also provided support to the Sura collective reimbursement application, an application developed in React-Native.",
      suraDesc2:
        "Use of REST and SOAP services. IBM Cloud Management, API Connect, Mobile First Platform.",
      freelanceTitle: "Freelance Mobile Application Developer",
      freelanceYear: "December 2018 - February 2019",
      freelanceDesc:
        "Development of the application Lecaros APP for the real estate company and property management Lecaros, an application designed for the management and maintenance of the properties available for lease or sale. Developed in React Native, with libraries for the use of the camera, maps, consumption of Rest APIs, among others.",
      phpTitle: "PHP React Native developer",
      phpYear: "November 2017 - September 2018",
      phpDesc:
        "I developed two prototype applications in React Native as a proposal to migrate from Ionic to React Native for GrupoSolux company as part of my training in that technology.",
      phpDesc2:
        "As a PHP developer, I participated in several systems developed by the company for the public and private sectors. We work with institutions such as the Civil Registry, ChileValora, for the law firm Navarro Y Asociados, among other projects.",
      betTitle: 'Software developer at "Apuestas La Seguridad"',
      betYear: "January 2015 - January 2016",
      betDesc: `During this period, I built the entire digital system for the administration and maintenance of the company's equipment, as well as creating the company's accounting system and the workers' wage payment system.`,
      internTitle:
        "Software developer - Universidad Nacional Experimental del Tachira",
      internYear: "January 2013 - December 2014",
      internDesc:
        "Lead the project for the creation of a sports coordination system called SIGEDU",
      internDesc2:
        "Lead, develop a system proposal to generate an academic material system for all members of the university community, virtualizing guides, books, notes, exams, thus giving quick access to information.",
      biceTitle: "Mobile Developer - BICE Bank",
      biceYear: "June 2021 - Present",
      biceDesc: `Mobile Developer for BICE bank, the team is in charge of developing the bank's new mobile experience, an application completely designed from scratch, microservices, bff, current design patterns, unit tests, design systems, modularization.This app is currently available in the Android and iOS app stores.`,
      myWork: "My work",
      recentWork: "Previous jobs",
      apps: "Apps",
      contactMe: "Contact me",
      contact: "Contact",
      personalProjects: "Personal Projects",
      storyBook:
        "This is an example repository where a UI-KIT was created using the storyBook library, it is a fairly simple example which draws from some work/projects in which I have participated.",
      application: "Application",
      uikit: "UI-KIT Application",
      viewCodeOnGithub: "View Code On Github",
      tindog:
        "Tindog: a simple clone of the Tinder application, but for your pet! this  app was made in Swift 4 and with Firebase",
      instaClone: "A simple Instagram clone made with React Native",
      prototype: "Prototype",
      viewOnPlayStore: "View on PlayStore",
      viewOnAppStore: "View on AppStore",
      mobileApp: "Mobile App",
      ecoWays: "EcoWays App",
      afpCapital: "AFP Capital APP",
      oms: "OmStock",
      omsDesc: "Order Management System",
      githupPage: "View my GitLab Page",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sendMessage: "Send Message",
      imc: "IMC - Calc",
      imcDesc: "Body Mass Calculator",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    lng: "es",
    debug: true,
    keySeparator: ".",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
