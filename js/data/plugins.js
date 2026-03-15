const allPluginsCategory = [
  {
    groupName: "Icons and animated icons",
    img: "imgs/icons/apps_14434519.png",
    content: [
      {
        id: "PLG-001",
        name: "FontAwesome",
        logoLink:
          "https://www.drupal.org/files/issues/2023-12-04/FontAwesome.png",
        category: "Icons",
        description:
          "Thousands of scalable vector icons, fully customizable with CSS for any web project.",
        link: "https://fontawesome.com/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes:
            "Icon font or SVG — used via class in HTML and styled with pure CSS",
        },
        keywords: [
          "icons",
          "svg icons",
          "font icons",
          "vector icons",
          "icon library",
          "ui icons",
          "free icons",
          "icon font",
          "web icons",
          "font awesome",
          "fontawesome",
          "fa icons",
          "scalable icons",
          "css icons",
          "html icons",
          "icon set",
          "icon pack",
          "fa",
          "social icons",
          "arrow icons",
          "button icons",
          "navbar icons",
          "footer icons",
          "add icons to website",
          "how to use fontawesome",
          "fontawesome cdn",
          "fa cdn",
          "free icon font",
          "icon classes",
          "fa solid",
          "fa regular",
          "fa brands",
          "fontawesome 6",
          "fontawesome 5",
          "fontawesome free",
          "fontawesome pro",
        ],
      },
      {
        id: "PLG-002",
        name: "FontAwesome Animation",
        logoLink:
          "https://www.drupal.org/files/issues/2023-12-04/FontAwesome.png",
        category: "Icon Animations",
        description:
          "CSS animation effects for Font Awesome icons including spin, shake, and burst.",
        link: "https://l-lin.github.io/font-awesome-animation/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: ["FontAwesome"],
          notes: "CSS-only extension for FontAwesome — no JavaScript required",
        },
        keywords: [
          "font awesome animation",
          "icon animation",
          "css icon effects",
          "animated icons",
        ],
      },
      {
        id: "PLG-003",
        name: "Lordicon",
        logoLink: "imgs/lordicon.svg",
        category: "Animated Icon Library",
        description:
          "High-quality animated icons library with multiple formats and interactive triggers for web.",
        link: "https://lordicon.com/",
        tech: {
          languages: ["html.png", "js.png"],
          libraries: ["Lottie.js"],
          notes:
            "Powered by Lottie to render animated icons in JSON/SVG format",
        },
        keywords: ["animated icons", "lordicon"],
      },
      {
        id: "PLG-004",
        name: "Hugeicons",
        logoLink: "imgs/hugeIcon.png",
        category: "Icon Library",
        description:
          "Modern icon library with 4,000 free icons and 46,000 pro icons in multiple styles.",
        link: "https://hugeicons.com/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [
            "React (optional)",
            "Vue (optional)",
            "Angular (optional)",
          ],
          notes:
            "SVG icons — integrates with React/Vue/Angular or used directly as inline SVG",
        },
        keywords: ["hugeicons", "icon library"],
      },
    ],
  },
  {
    groupName: "Typography and text effects",
    img: "imgs/icons/typography.gif",
    content: [
      {
        id: "PLG-005",
        name: "Google Fonts",
        logoLink:
          "https://images.seeklogo.com/logo-png/42/3/google-fonts-logo-png_seeklogo-426756.png",
        category: "Typography",
        description:
          "Over 1,500 free web fonts by Google, ready to embed in one line.",
        link: "https://fonts.google.com/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes:
            "Added via <link> tag in HTML and applied with font-family in CSS",
        },
        keywords: ["fonts", "web fonts", "typography", "google fonts"],
      },
      {
        id: "PLG-006",
        name: "TextBlock",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Typography Tools",
        description:
          "Fine-grained control over text blocks for balanced and fully responsive typography layouts.",
        link: "https://textblock.io/",
        tech: {
          languages: ["html.png", "js.png"],
          libraries: [],
          notes: "Pure Vanilla JS — no external framework required",
        },
        keywords: ["text formatting", "typography"],
      },
      {
        id: "PLG-007",
        name: "Animated Headlines",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Text Animations",
        description:
          "Eye-catching rotating and typing headline effects designed for modern hero sections.",
        link: "https://codyhouse.co/demo/animated-headlines/index.html",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [],
          notes: "CSS Keyframes + Vanilla JS — no jQuery needed",
        },
        keywords: ["animated headline", "text animation"],
      },
      {
        id: "PLG-008",
        name: "iTyped",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Text Animations",
        description:
          "Smooth typewriter text animation with custom delays, loop control, and cursor effects.",
        link: "https://ityped.surge.sh/",
        tech: {
          languages: ["html.png", "js.png"],
          libraries: [],
          notes: "Pure Vanilla JS — a lightweight alternative to Typed.js",
        },
        keywords: ["typing animation", "typewriter"],
      },
      {
        id: "PLG-009",
        name: "CSS Animated Text Generator",
        logoLink: "imgs/cssicon.png",
        category: "CSS Generators",
        description:
          "Create animated text styles with custom fonts, effects, and ready-to-copy CSS output.",
        link: "https://www.cssportal.com/css-animated-text-generator/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Online tool — output is pure HTML + CSS ready to paste",
        },
        keywords: ["css animated text", "text animation generator"],
      },
    ],
  },
  {
    groupName: "Css and js animations",
    img: "imgs/icons/icons8-code.gif",
    content: [
      {
        id: "PLG-010",
        name: "GSAP",
        logoLink: "imgs/gsap-logo-1d2e01cc.png",
        category: "JavaScript Animation",
        description:
          "Industry-standard JavaScript animation library that is fast, smooth, and universally compatible.",
        link: "https://gsap.com/",
        tech: {
          languages: ["js.png"],
          libraries: [],
          notes:
            "Vanilla JS — integrates with React/Vue/Angular but works independently",
        },
        keywords: ["gsap", "javascript animation"],
      },
      {
        id: "PLG-011",
        name: "Animate.css",
        logoLink: "imgs/animatecss-a2cade18.png",
        category: "CSS Animations",
        description:
          "Plug-and-play CSS animations like bounce and fade, with no JavaScript needed at all.",
        link: "https://animate.style/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Completely CSS-only — no JavaScript required at all",
        },
        keywords: ["animate css", "css animation"],
      },
      {
        id: "PLG-012",
        name: "WOW.js",
        logoLink: "https://wowjs.uk/img/wow-logo.jpg",
        category: "Scroll Animations",
        description:
          "Triggers CSS animations when elements scroll into view, pairs perfectly with Animate.css.",
        link: "https://wowjs.uk/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: ["Animate.css"],
          notes:
            "Requires Animate.css to function — Vanilla JS with no jQuery dependency",
        },
        keywords: ["scroll animation", "wow js"],
      },
      {
        id: "PLG-013",
        name: "AOS",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Scroll Animations",
        description:
          "Add scroll-triggered animations to any element using just a single HTML data attribute.",
        link: "https://michalsnik.github.io/aos/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [],
          notes: "Vanilla JS — triggered via data attributes directly in HTML",
        },
        keywords: ["aos", "animate on scroll"],
      },
      {
        id: "PLG-014",
        name: "Hover.css",
        logoLink: "imgs/puzzle_4020290.png",
        category: "CSS Effects",
        description:
          "Over 100 modern CSS hover effects ready to apply by adding a class to any element.",
        link: "https://ianlunn.github.io/Hover/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Completely CSS-only — just add a class to the element",
        },
        keywords: ["hover effects", "css hover"],
      },
      {
        id: "PLG-015",
        name: "Animsition",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Page Transitions",
        description:
          "Simple jQuery plugin for adding smooth CSS transition effects between website pages.",
        link: "http://git.blivesta.com/animsition/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: ["jQuery"],
          notes: "Requires jQuery — will not work without it",
        },
        keywords: ["page transition", "animsition"],
      },
    ],
  },
  {
    groupName: "Sliders and carousels",
    img: "imgs/icons/responsive.gif",
    content: [
      {
        id: "PLG-016",
        name: "Swiper",
        logoLink: "https://swiperjs.com/images/swiper-logo.svg",
        category: "Slider & Carousel",
        description:
          "The most modern mobile-friendly slider with touch, autoplay, and full RTL support.",
        link: "https://swiperjs.com/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [
            "React (optional)",
            "Vue (optional)",
            "Angular (optional)",
          ],
          notes:
            "Primarily Vanilla JS — has official wrappers for React, Vue, and Angular",
        },
        keywords: ["slider", "carousel", "swiper"],
      },
      {
        id: "PLG-017",
        name: "OwlCarousel2",
        logoLink:
          "https://owlcarousel2.github.io/OwlCarousel2/assets/img/owl-logo.png",
        category: "Slider & Carousel",
        description:
          "Touch-enabled jQuery carousel with autoplay, lazy loading, and full RTL support.",
        link: "https://owlcarousel2.github.io/OwlCarousel2/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: ["jQuery"],
          notes: "Requires jQuery — mandatory dependency",
        },
        keywords: ["owl carousel", "jquery carousel"],
      },
      {
        id: "PLG-018",
        name: "Splide.js",
        logoLink: "imgs/splide.png",
        category: "Slider & Carousel",
        description:
          "Lightweight accessible slider with fade, thumbnails, and autoplay using zero dependencies.",
        link: "https://splidejs.com/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: ["React (optional)", "Vue (optional)"],
          notes:
            "Zero dependencies — pure Vanilla JS with optional framework wrappers",
        },
        keywords: ["splide", "slider"],
      },
    ],
  },
  {
    groupName: "Charts and data visualization",
    img: "imgs/icons/chart.gif",
    content: [
      {
        id: "PLG-019",
        name: "Chart.js",
        logoLink: "https://www.chartjs.org/img/chartjs-logo.svg",
        category: "Charts & Data Visualization",
        description:
          "Eight animated and responsive chart types with a clean and very simple API.",
        link: "https://www.chartjs.org/",
        tech: {
          languages: ["html.png", "js.png"],
          libraries: [],
          notes: "Vanilla JS — renders on HTML5 Canvas, no jQuery needed",
        },
        keywords: ["charts", "data visualization", "chart js"],
      },
      {
        id: "PLG-020",
        name: "ApexCharts",
        logoLink: "https://apexcharts.com/media/apexcharts-logo.png",
        category: "Charts & Data Visualization",
        description:
          "Over 20 interactive animated chart types for React, Vue, Angular, and vanilla JS.",
        link: "https://apexcharts.com/",
        tech: {
          languages: ["html.png", "js.png"],
          libraries: [
            "React (optional)",
            "Vue (optional)",
            "Angular (optional)",
          ],
          notes:
            "Primarily Vanilla JS — has official wrappers for React, Vue, and Angular",
        },
        keywords: ["apexcharts", "charts"],
      },
    ],
  },
  {
    groupName: "Forms and input components",
    img: "imgs/icons/profile.gif",
    content: [
      {
        id: "PLG-021",
        name: "Tagify (YairEO)",
        logoLink:
          "https://raw.githubusercontent.com/yairEO/tagify/master/docs/readme-header.svg",
        category: "Form Components",
        description:
          "Transforms any input into a smart tags field with autocomplete and drag and drop.",
        link: "https://yaireo.github.io/tagify/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [
            "React (optional)",
            "Vue (optional)",
            "Angular (optional)",
          ],
          notes: "Primarily Vanilla JS — has framework wrappers available",
        },
        keywords: ["tags", "tag input", "tagify"],
      },
      {
        id: "PLG-022",
        name: "Cleave.js",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Form Components",
        description:
          "Auto-formats input fields for credit cards, phone numbers, and dates as user types.",
        link: "https://nosir.github.io/cleave.js/",
        tech: {
          languages: ["html.png", "js.png"],
          libraries: ["React (optional)"],
          notes: "Vanilla JS — has an optional React component wrapper",
        },
        keywords: ["input format", "cleave js"],
      },
      {
        id: "PLG-023",
        name: "Date Range Picker",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Form Components",
        description:
          "Configurable jQuery date and time range picker with presets and full calendar display.",
        link: "https://www.daterangepicker.com/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: ["jQuery", "Moment.js"],
          notes: "Requires both jQuery and Moment.js as mandatory dependencies",
        },
        keywords: ["date picker", "date range"],
      },
      {
        id: "PLG-024",
        name: "Tokenize2",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Form Components",
        description:
          "Searchable multi-select tag input with async loading and full keyboard navigation support.",
        link: "https://dragonofmercy.github.io/Tokenize2/index.html",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: ["jQuery"],
          notes: "Requires jQuery — mandatory dependency",
        },
        keywords: ["tokenize", "multi select"],
      },
      {
        id: "PLG-025",
        name: "Tom Select",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Form Components",
        description:
          "Powerful select-box replacement with search, tagging, and async loading without jQuery.",
        link: "https://tom-select.js.org/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [],
          notes:
            "Completely Vanilla JS — evolved from Selectize.js, no jQuery required",
        },
        keywords: ["select box", "tom select"],
      },
    ],
  },
  {
    groupName: "Svg and design generators",
    img: "imgs/icons/design-drawing.gif",
    content: [
      {
        id: "PLG-026",
        name: "Blobmaker",
        logoLink:
          "https://cdn-b.saashub.com/images/app/service_logos/31/54b3976986e1/large.png",
        category: "SVG Generators",
        description:
          "Generate unique organic SVG blob shapes for backgrounds and decorative UI accents.",
        link: "https://www.blobmaker.app/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Online tool — output is a ready-to-use SVG file",
        },
        keywords: ["blob", "svg blob"],
      },
      {
        id: "PLG-027",
        name: "GetWaves",
        logoLink:
          "https://ph-files.imgix.net/f994752d-ee16-4323-b607-007ab38a0ba5.png?auto=format",
        category: "SVG Generators",
        description:
          "Create smooth and beautiful SVG wave dividers for your page sections in seconds.",
        link: "https://getwaves.io/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Online tool — output is SVG or CSS ready to copy",
        },
        keywords: ["wave", "svg wave"],
      },
      {
        id: "PLG-028",
        name: "Shape Divider App",
        logoLink: "https://www.shapedivider.app/img/logo_500x500.18aca7aa.png",
        category: "SVG Generators",
        description:
          "Design and export custom SVG section dividers with a live real-time visual preview.",
        link: "https://www.shapedivider.app/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Online tool — generates SVG + CSS code ready to paste",
        },
        keywords: ["shape divider", "section divider"],
      },
      {
        id: "PLG-029",
        name: "Spectrum Shapes",
        logoLink: "imgs/spectrum.png",
        category: "Design Assets",
        description:
          "High-quality vector shapes and design elements for UI and illustrations with free weekly updates.",
        link: "https://spectrums.framer.website/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Design assets (SVG/PNG) — use directly in HTML/CSS",
        },
        keywords: ["vector shapes", "design assets"],
      },
    ],
  },
  {
    groupName: "Colors and css tools",
    img: "imgs/icons/colors.gif",
    content: [
      {
        id: "PLG-030",
        name: "UI Gradients",
        logoLink:
          "https://cdn-1.webcatalog.io/catalog/uigradients/uigradients-icon.png?v=1714778064462",
        category: "Colors & Gradients",
        description:
          "Curated collection of beautiful CSS gradients you can browse, preview, and copy instantly.",
        link: "https://matya032.github.io/uiGradients/",
        tech: {
          languages: ["css.png"],
          libraries: [],
          notes: "Online tool — output is a ready-to-copy CSS gradient",
        },
        keywords: ["gradients", "css gradients"],
      },
      {
        id: "PLG-031",
        name: "Gradient.Page",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Design & UI Tools",
        description:
          "Curated platform offering gradient wallpapers, CSS color schemes, and free design tools.",
        link: "https://gradient.page/",
        tech: {
          languages: ["css.png"],
          libraries: [],
          notes: "Online tool — output is ready CSS code",
        },
        keywords: ["gradient page", "gradient wallpapers"],
      },
      {
        id: "PLG-032",
        name: "CSS Box Shadow Generator",
        logoLink: "https://toastlog.com/img/logos/cssscan.svg",
        category: "CSS Tools & Generators",
        description:
          "Over 91 handpicked box-shadow styles you can click and instantly copy the CSS.",
        link: "https://getcssscan.com/css-box-shadow-examples",
        tech: {
          languages: ["css.png"],
          libraries: [],
          notes: "Online tool — single-click copy of ready CSS code",
        },
        keywords: ["box shadow", "css shadow"],
      },
    ],
  },
  {
    groupName: "Loaders and notifications",
    img: "imgs/icons/loader.gif",
    content: [
      {
        id: "PLG-033",
        name: "Loaders.css",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Loading Animations",
        description:
          "Pure CSS loading animations including spinners, dots, and bars with no JavaScript.",
        link: "https://connoratherton.com/loaders",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Completely CSS-only — no JavaScript at all",
        },
        keywords: ["css loader", "loading animation"],
      },
      {
        id: "PLG-034",
        name: "CSS Loaders",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Loading Animations",
        description:
          "Modern gallery of CSS-only loaders with bars, circles, and dots ready to copy.",
        link: "https://css-loaders.com/bars/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "Completely CSS-only",
        },
        keywords: ["css loader", "loading animation"],
      },
      {
        id: "PLG-035",
        name: "SweetAlert2",
        logoLink:
          "https://meta-q.cdn.bubble.io/f1715808813810x200336089501440320/favicon.png",
        category: "Alerts & Modals",
        description:
          "Beautiful and fully customizable popups designed to replace boring native browser alerts.",
        link: "https://sweetalert2.github.io/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [
            "React (optional)",
            "Vue (optional)",
            "Angular (optional)",
          ],
          notes: "Vanilla JS — framework wrappers available, no jQuery needed",
        },
        keywords: ["alert", "modal", "popup"],
      },
      {
        id: "PLG-036",
        name: "Balloon.css",
        logoLink: "imgs/balloon.png",
        category: "Tooltips",
        description:
          "Pure CSS tooltips using data attributes with no JavaScript needed and four positions.",
        link: "https://kazzkiq.github.io/balloon.css/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes:
            "Completely CSS-only — just add data-balloon attribute to any element",
        },
        keywords: ["tooltip", "css tooltip"],
      },
    ],
  },
  {
    groupName: "Layout and scrolling",
    img: "imgs/icons/scroll.gif",
    content: [
      {
        id: "PLG-037",
        name: "fullPage.js",
        logoLink: "imgs/fullPage-318818ea.png",
        category: "Scrolling & Layout",
        description:
          "Build stunning full-screen one-page websites with vertical and horizontal scrolling sections.",
        link: "https://alvarotrigo.com/fullPage/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [
            "jQuery (optional)",
            "React (optional)",
            "Vue (optional)",
            "Angular (optional)",
          ],
          notes:
            "Works standalone with Vanilla JS — jQuery is optional, not required",
        },
        keywords: ["fullpage", "full screen scroll"],
      },
      {
        id: "PLG-038",
        name: "pagePiling.js",
        logoLink: "imgs/pagePiling-437263fc.png",
        category: "Scrolling & Layout",
        description:
          "jQuery plugin that stacks full-page sections like cards when the user scrolls.",
        link: "https://alvarotrigo.com/pagePiling/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: ["jQuery"],
          notes: "Requires jQuery — mandatory dependency",
        },
        keywords: ["page piling", "stacked sections"],
      },
      {
        id: "PLG-039",
        name: "Magic Grid",
        logoLink: "imgs/puzzle_4020290.png",
        category: "Layout & Grid",
        description:
          "Zero-dependency masonry grid layout that automatically repositions all items cleanly.",
        link: "https://github.com/e-oj/Magic-Grid",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [],
          notes: "Zero dependencies — pure Vanilla JS",
        },
        keywords: ["masonry", "grid layout"],
      },
    ],
  },
  {
    groupName: "Developer utilities",
    img: "imgs/icons/developer.gif",
    content: [
      {
        id: "PLG-040",
        name: "SB Tools",
        logoLink: "https://sbthemes.com/images/logo.svg",
        category: "Developer Utilities",
        description:
          "All-in-one toolbox with CSS and JS minifiers, JSON formatters, and image compressors.",
        link: "https://sbthemes.com/tools",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [],
          notes: "Online tool suite — no installation required",
        },
        keywords: ["developer tools", "online tools"],
      },
      {
        id: "PLG-041",
        name: "10015 Tools",
        logoLink: "imgs/logo-on-light.svg",
        category: "Online Tool Suite",
        description:
          "All-in-one utility platform offering free tools for text, image, CSS, and coding needs.",
        link: "https://10015.io/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [],
          notes: "Online tool suite — no installation required",
        },
        keywords: ["online tools", "10015.io"],
      },
      {
        id: "PLG-042",
        name: "Editor.js",
        logoLink: "https://editorjs.io/_nuxt/logo.d2a59c1c.svg",
        category: "WYSIWYG Editor",
        description:
          "Block-based rich text editor that outputs clean JSON instead of messy HTML markup.",
        link: "https://editorjs.io/",
        tech: {
          languages: ["html.png", "js.png"],
          libraries: ["React (optional)", "Vue (optional)"],
          notes:
            "Vanilla JS — no jQuery, uses external plugins for block types",
        },
        keywords: ["wysiwyg", "rich text editor"],
      },
      {
        id: "PLG-043",
        name: "Driver.js",
        logoLink: "https://driverjs.com/driver.svg",
        category: "Tours & Onboarding",
        description:
          "Highlight any element and guide users through your app with step-by-step interactive tours.",
        link: "https://driverjs.com/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: [],
          notes: "Zero dependencies — pure Vanilla JS, no jQuery needed",
        },
        keywords: ["product tour", "onboarding"],
      },
      {
        id: "PLG-044",
        name: "Freepik AI App",
        logoLink: "imgs/freepik.png",
        category: "AI Design Tools",
        description:
          "AI-powered creative platform for generating images, videos, and editing visuals instantly online.",
        link: "https://www.freepik.com/app",
        tech: {
          languages: [],
          libraries: [],
          notes:
            "Online AI platform — browser-based, no installation or coding needed",
        },
        keywords: ["ai image generator", "ai video generator"],
      },
    ],
  },
  {
    groupName: "Css frameworks and ui libraries",
    img: "imgs/icons/framework.gif",
    content: [
      {
        id: "PLG-045",
        name: "imgs/Tailwind CSS",
        logoLink: "tailwindcss-a9ee66b5.png",
        category: "CSS Framework",
        description:
          "Utility-first CSS framework for building fully custom UIs without ever leaving your HTML.",
        link: "https://tailwindcss.com/",
        tech: {
          languages: ["html.png", "css.png"],
          libraries: [],
          notes: "CSS framework — add via CDN or PostCSS build pipeline",
        },
        keywords: ["tailwind", "css framework"],
      },
      {
        id: "PLG-046",
        name: "Flowbite",
        logoLink: "https://flowbite.com/docs/images/logo.svg",
        category: "UI Component Library",
        description:
          "Over 600 Tailwind CSS components like buttons, modals, and navbars ready to use.",
        link: "https://flowbite.com/",
        tech: {
          languages: ["html.png", "css.png", "js.png"],
          libraries: ["Tailwind CSS"],
          notes:
            "Requires Tailwind CSS — has wrappers for React, Vue, and Angular",
        },
        keywords: ["flowbite", "tailwind components"],
      },
    ],
  },
  {
    groupName: "Angular ecosystem",
    img: "imgs/icons/angular.png",
    content: [
      {
        id: "PLG-047",
        name: "Angular Material",
        logoLink: "imgs/angular.png",
        category: "Angular UI Library",
        description:
          "Official Angular UI component library implementing Material Design with ready-to-use components.",
        link: "https://material.angular.io/",
        tech: {
          languages: ["html.png", "css.png", "typescript.png"],
          libraries: ["Angular"],
          notes: "Requires Angular — will not work without it",
        },
        keywords: ["angular material", "angular ui components"],
      },
      {
        id: "PLG-048",
        name: "PrimeNG",
        logoLink: "imgs/primeng-logo.png",
        category: "Angular UI Library",
        description:
          "Comprehensive Angular UI library with rich components including advanced datatable and charts.",
        link: "https://primeng.org/",
        tech: {
          languages: ["html.png", "css.png", "typescript.png"],
          libraries: ["Angular"],
          notes: "Requires Angular — mandatory dependency",
        },
        keywords: ["primeng", "angular components"],
      },
      {
        id: "PLG-049",
        name: "NG-ZORRO",
        logoLink: "imgs/NG-ZORRO.png",
        category: "Angular UI Library",
        description:
          "Enterprise-class Angular UI components built on the popular Ant Design system architecture.",
        link: "https://ng.ant.design/",
        tech: {
          languages: ["html.png", "css.png", "typescript.png"],
          libraries: ["Angular"],
          notes: "Requires Angular — built on top of Ant Design",
        },
        keywords: ["ng zorro", "ant design angular"],
      },
      {
        id: "PLG-050",
        name: "ngx-bootstrap",
        logoLink: "imgs/logo-stack.svg",
        category: "Angular UI Library",
        description:
          "Bootstrap components fully powered by Angular with support for templates, directives, and events.",
        link: "https://valor-software.com/ngx-bootstrap/",
        tech: {
          languages: ["html.png", "css.png", "typescript.png"],
          libraries: ["Angular", "Bootstrap (CSS)"],
          notes:
            "Requires Angular — Bootstrap CSS is optional for full styling",
        },
        keywords: ["ngx bootstrap", "angular bootstrap"],
      },
      {
        id: "PLG-051",
        name: "NgRx",
        logoLink: "imgs/ngrx.png",
        category: "Angular State Management",
        description:
          "Reactive state management library for Angular applications inspired by the Redux pattern.",
        link: "https://ngrx.io/",
        tech: {
          languages: ["typescript.png"],
          libraries: ["Angular", "RxJS"],
          notes: "Requires Angular and RxJS — built on the Redux pattern",
        },
        keywords: ["ngrx", "angular state management"],
      },
      {
        id: "PLG-052",
        name: "NGXS",
        logoLink: "imgs/NGXS.png",
        category: "Angular State Management",
        description:
          "Simple and lightweight state management solution built specifically for Angular applications.",
        link: "https://www.ngxs.io/",
        tech: {
          languages: ["typescript.png"],
          libraries: ["Angular", "RxJS"],
          notes:
            "Requires Angular and RxJS — simpler and less boilerplate than NgRx",
        },
        keywords: ["ngxs", "angular state library"],
      },
    ],
  },
];

const allPlugins = [
  {
    id: "PLG-001",
    name: "FontAwesome",
    logoLink: "https://www.drupal.org/files/issues/2023-12-04/FontAwesome.png",
    category: "Icons",
    description:
      "Thousands of scalable vector icons, fully customizable with CSS for any web project.",
    link: "https://fontawesome.com/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes:
        "Icon font or SVG — used via class in HTML and styled with pure CSS",
    },
    keywords: [
      "icons",
      "svg icons",
      "font icons",
      "vector icons",
      "icon library",
      "ui icons",
      "free icons",
      "icon font",
      "web icons",
      "font awesome",
      "fontawesome",
      "fa icons",
      "scalable icons",
      "css icons",
      "html icons",
      "icon set",
      "icon pack",
      "fa",
      "social icons",
      "arrow icons",
      "button icons",
      "navbar icons",
      "footer icons",
      "add icons to website",
      "how to use fontawesome",
      "fontawesome cdn",
      "fa cdn",
      "free icon font",
      "icon classes",
      "fa solid",
      "fa regular",
      "fa brands",
      "fontawesome 6",
      "fontawesome 5",
      "fontawesome free",
      "fontawesome pro",
    ],
  },
  {
    id: "PLG-002",
    name: "FontAwesome Animation",
    logoLink: "https://www.drupal.org/files/issues/2023-12-04/FontAwesome.png",
    category: "Icon Animations",
    description:
      "CSS animation effects for Font Awesome icons including spin, shake, and burst.",
    link: "https://l-lin.github.io/font-awesome-animation/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: ["FontAwesome"],
      notes: "CSS-only extension for FontAwesome — no JavaScript required",
    },
    keywords: [
      "font awesome animation",
      "icon animation",
      "css icon effects",
      "animated icons",
    ],
  },
  {
    id: "PLG-003",
    name: "Lordicon",
    logoLink: "imgs/lordicon.svg",
    category: "Animated Icon Library",
    description:
      "High-quality animated icons library with multiple formats and interactive triggers for web.",
    link: "https://lordicon.com/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: ["Lottie.js"],
      notes: "Powered by Lottie to render animated icons in JSON/SVG format",
    },
    keywords: ["animated icons", "lordicon"],
  },
  {
    id: "PLG-004",
    name: "Hugeicons",
    logoLink: "imgs/hugeIcon.png",
    category: "Icon Library",
    description:
      "Modern icon library with 4,000 free icons and 46,000 pro icons in multiple styles.",
    link: "https://hugeicons.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes:
        "SVG icons — integrates with React/Vue/Angular or used directly as inline SVG",
    },
    keywords: ["hugeicons", "icon library"],
  },

  {
    id: "PLG-047",
    name: "Angular Material",
    logoLink: "imgs/angular.png",
    category: "Angular UI Library",
    description:
      "Official Angular UI component library implementing Material Design with ready-to-use components.",
    link: "https://material.angular.io/",
    tech: {
      languages: ["html.png", "css.png", "typescript.png"],
      libraries: ["Angular"],
      notes: "Requires Angular — will not work without it",
    },
    keywords: ["angular material", "angular ui components"],
  },
  {
    id: "PLG-048",
    name: "PrimeNG",
    logoLink: "imgs/primeng-logo.png",
    category: "Angular UI Library",
    description:
      "Comprehensive Angular UI library with rich components including advanced datatable and charts.",
    link: "https://primeng.org/",
    tech: {
      languages: ["html.png", "css.png", "typescript.png"],
      libraries: ["Angular"],
      notes: "Requires Angular — mandatory dependency",
    },
    keywords: ["primeng", "angular components"],
  },
  {
    id: "PLG-049",
    name: "NG-ZORRO",
    logoLink: "imgs/NG-ZORRO.png",
    category: "Angular UI Library",
    description:
      "Enterprise-class Angular UI components built on the popular Ant Design system architecture.",
    link: "https://ng.ant.design/",
    tech: {
      languages: ["html.png", "css.png", "typescript.png"],
      libraries: ["Angular"],
      notes: "Requires Angular — built on top of Ant Design",
    },
    keywords: ["ng zorro", "ant design angular"],
  },
  {
    id: "PLG-050",
    name: "ngx-bootstrap",
    logoLink: "imgs/logo-stack.svg",
    category: "Angular UI Library",
    description:
      "Bootstrap components fully powered by Angular with support for templates, directives, and events.",
    link: "https://valor-software.com/ngx-bootstrap/",
    tech: {
      languages: ["html.png", "css.png", "typescript.png"],
      libraries: ["Angular", "Bootstrap (CSS)"],
      notes: "Requires Angular — Bootstrap CSS is optional for full styling",
    },
    keywords: ["ngx bootstrap", "angular bootstrap"],
  },
  {
    id: "PLG-051",
    name: "NgRx",
    logoLink: "imgs/ngrx.png",
    category: "Angular State Management",
    description:
      "Reactive state management library for Angular applications inspired by the Redux pattern.",
    link: "https://ngrx.io/",
    tech: {
      languages: ["typescript.png"],
      libraries: ["Angular", "RxJS"],
      notes: "Requires Angular and RxJS — built on the Redux pattern",
    },
    keywords: ["ngrx", "angular state management"],
  },
  {
    id: "PLG-052",
    name: "NGXS",
    logoLink: "imgs/NGXS.png",
    category: "Angular State Management",
    description:
      "Simple and lightweight state management solution built specifically for Angular applications.",
    link: "https://www.ngxs.io/",
    tech: {
      languages: ["typescript.png"],
      libraries: ["Angular", "RxJS"],
      notes:
        "Requires Angular and RxJS — simpler and less boilerplate than NgRx",
    },
    keywords: ["ngxs", "angular state library"],
  },

  {
    id: "PLG-045",
    name: "Tailwind CSS",
    logoLink: "imgs/tailwindcss-a9ee66b5.png",
    category: "CSS Framework",
    description:
      "Utility-first CSS framework for building fully custom UIs without ever leaving your HTML.",
    link: "https://tailwindcss.com/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "CSS framework — add via CDN or PostCSS build pipeline",
    },
    keywords: ["tailwind", "css framework"],
  },
  {
    id: "PLG-046",
    name: "Flowbite",
    logoLink: "https://flowbite.com/docs/images/logo.svg",
    category: "UI Component Library",
    description:
      "Over 600 Tailwind CSS components like buttons, modals, and navbars ready to use.",
    link: "https://flowbite.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["Tailwind CSS"],
      notes: "Requires Tailwind CSS — has wrappers for React, Vue, and Angular",
    },
    keywords: ["flowbite", "tailwind components"],
  },

  {
    id: "PLG-040",
    name: "SB Tools",
    logoLink: "https://sbthemes.com/images/logo.svg",
    category: "Developer Utilities",
    description:
      "All-in-one toolbox with CSS and JS minifiers, JSON formatters, and image compressors.",
    link: "https://sbthemes.com/tools",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Online tool suite — no installation required",
    },
    keywords: ["developer tools", "online tools"],
  },
  {
    id: "PLG-041",
    name: "10015 Tools",
    logoLink: "imgs/logo-on-light.svg",
    category: "Online Tool Suite",
    description:
      "All-in-one utility platform offering free tools for text, image, CSS, and coding needs.",
    link: "https://10015.io/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Online tool suite — no installation required",
    },
    keywords: ["online tools", "10015.io"],
  },
  {
    id: "PLG-042",
    name: "Editor.js",
    logoLink: "https://editorjs.io/_nuxt/logo.d2a59c1c.svg",
    category: "WYSIWYG Editor",
    description:
      "Block-based rich text editor that outputs clean JSON instead of messy HTML markup.",
    link: "https://editorjs.io/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)"],
      notes: "Vanilla JS — no jQuery, uses external plugins for block types",
    },
    keywords: ["wysiwyg", "rich text editor"],
  },
  {
    id: "PLG-043",
    name: "Driver.js",
    logoLink: "https://driverjs.com/driver.svg",
    category: "Tours & Onboarding",
    description:
      "Highlight any element and guide users through your app with step-by-step interactive tours.",
    link: "https://driverjs.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Zero dependencies — pure Vanilla JS, no jQuery needed",
    },
    keywords: ["product tour", "onboarding"],
  },
  {
    id: "PLG-044",
    name: "Freepik AI App",
    logoLink: "imgs/freepik.png",
    category: "AI Design Tools",
    description:
      "AI-powered creative platform for generating images, videos, and editing visuals instantly online.",
    link: "https://www.freepik.com/app",
    tech: {
      languages: [],
      libraries: [],
      notes:
        "Online AI platform — browser-based, no installation or coding needed",
    },
    keywords: ["ai image generator", "ai video generator"],
  },

  {
    id: "PLG-037",
    name: "fullPage.js",
    logoLink: "imgs/fullPage-318818ea.png",
    category: "Scrolling & Layout",
    description:
      "Build stunning full-screen one-page websites with vertical and horizontal scrolling sections.",
    link: "https://alvarotrigo.com/fullPage/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [
        "jQuery (optional)",
        "React (optional)",
        "Vue (optional)",
        "Angular (optional)",
      ],
      notes:
        "Works standalone with Vanilla JS — jQuery is optional, not required",
    },
    keywords: ["fullpage", "full screen scroll"],
  },
  {
    id: "PLG-038",
    name: "pagePiling.js",
    logoLink: "imgs/pagePiling-437263fc.png",
    category: "Scrolling & Layout",
    description:
      "jQuery plugin that stacks full-page sections like cards when the user scrolls.",
    link: "https://alvarotrigo.com/pagePiling/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery"],
      notes: "Requires jQuery — mandatory dependency",
    },
    keywords: ["page piling", "stacked sections"],
  },
  {
    id: "PLG-039",
    name: "Magic Grid",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Layout & Grid",
    description:
      "Zero-dependency masonry grid layout that automatically repositions all items cleanly.",
    link: "https://github.com/e-oj/Magic-Grid",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Zero dependencies — pure Vanilla JS",
    },
    keywords: ["masonry", "grid layout"],
  },

  {
    id: "PLG-033",
    name: "Loaders.css",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Loading Animations",
    description:
      "Pure CSS loading animations including spinners, dots, and bars with no JavaScript.",
    link: "https://connoratherton.com/loaders",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Completely CSS-only — no JavaScript at all",
    },
    keywords: ["css loader", "loading animation"],
  },
  {
    id: "PLG-034",
    name: "CSS Loaders",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Loading Animations",
    description:
      "Modern gallery of CSS-only loaders with bars, circles, and dots ready to copy.",
    link: "https://css-loaders.com/bars/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Completely CSS-only",
    },
    keywords: ["css loader", "loading animation"],
  },
  {
    id: "PLG-035",
    name: "SweetAlert2",
    logoLink:
      "https://meta-q.cdn.bubble.io/f1715808813810x200336089501440320/favicon.png",
    category: "Alerts & Modals",
    description:
      "Beautiful and fully customizable popups designed to replace boring native browser alerts.",
    link: "https://sweetalert2.github.io/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes: "Vanilla JS — framework wrappers available, no jQuery needed",
    },
    keywords: ["alert", "modal", "popup"],
  },
  {
    id: "PLG-036",
    name: "Balloon.css",
    logoLink: "imgs/balloon.png",
    category: "Tooltips",
    description:
      "Pure CSS tooltips using data attributes with no JavaScript needed and four positions.",
    link: "https://kazzkiq.github.io/balloon.css/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes:
        "Completely CSS-only — just add data-balloon attribute to any element",
    },
    keywords: ["tooltip", "css tooltip"],
  },

  {
    id: "PLG-030",
    name: "UI Gradients",
    logoLink:
      "https://cdn-1.webcatalog.io/catalog/uigradients/uigradients-icon.png?v=1714778064462",
    category: "Colors & Gradients",
    description:
      "Curated collection of beautiful CSS gradients you can browse, preview, and copy instantly.",
    link: "https://matya032.github.io/uiGradients/",
    tech: {
      languages: ["css.png"],
      libraries: [],
      notes: "Online tool — output is a ready-to-copy CSS gradient",
    },
    keywords: ["gradients", "css gradients"],
  },
  {
    id: "PLG-031",
    name: "Gradient.Page",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Design & UI Tools",
    description:
      "Curated platform offering gradient wallpapers, CSS color schemes, and free design tools.",
    link: "https://gradient.page/",
    tech: {
      languages: ["css.png"],
      libraries: [],
      notes: "Online tool — output is ready CSS code",
    },
    keywords: ["gradient page", "gradient wallpapers"],
  },
  {
    id: "PLG-032",
    name: "CSS Box Shadow Generator",
    logoLink: "https://toastlog.com/img/logos/cssscan.svg",
    category: "CSS Tools & Generators",
    description:
      "Over 91 handpicked box-shadow styles you can click and instantly copy the CSS.",
    link: "https://getcssscan.com/css-box-shadow-examples",
    tech: {
      languages: ["css.png"],
      libraries: [],
      notes: "Online tool — single-click copy of ready CSS code",
    },
    keywords: ["box shadow", "css shadow"],
  },

  {
    id: "PLG-026",
    name: "Blobmaker",
    logoLink:
      "https://cdn-b.saashub.com/images/app/service_logos/31/54b3976986e1/large.png",
    category: "SVG Generators",
    description:
      "Generate unique organic SVG blob shapes for backgrounds and decorative UI accents.",
    link: "https://www.blobmaker.app/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Online tool — output is a ready-to-use SVG file",
    },
    keywords: ["blob", "svg blob"],
  },
  {
    id: "PLG-027",
    name: "GetWaves",
    logoLink:
      "https://ph-files.imgix.net/f994752d-ee16-4323-b607-007ab38a0ba5.png?auto=format",
    category: "SVG Generators",
    description:
      "Create smooth and beautiful SVG wave dividers for your page sections in seconds.",
    link: "https://getwaves.io/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Online tool — output is SVG or CSS ready to copy",
    },
    keywords: ["wave", "svg wave"],
  },
  {
    id: "PLG-028",
    name: "Shape Divider App",
    logoLink: "https://www.shapedivider.app/img/logo_500x500.18aca7aa.png",
    category: "SVG Generators",
    description:
      "Design and export custom SVG section dividers with a live real-time visual preview.",
    link: "https://www.shapedivider.app/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Online tool — generates SVG + CSS code ready to paste",
    },
    keywords: ["shape divider", "section divider"],
  },
  {
    id: "PLG-029",
    name: "Spectrum Shapes",
    logoLink: "imgs/spectrum.png",
    category: "Design Assets",
    description:
      "High-quality vector shapes and design elements for UI and illustrations with free weekly updates.",
    link: "https://spectrums.framer.website/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Design assets (SVG/PNG) — use directly in HTML/CSS",
    },
    keywords: ["vector shapes", "design assets"],
  },

  {
    id: "PLG-021",
    name: "Tagify (YairEO)",
    logoLink:
      "https://raw.githubusercontent.com/yairEO/tagify/master/docs/readme-header.svg",
    category: "Form Components",
    description:
      "Transforms any input into a smart tags field with autocomplete and drag and drop.",
    link: "https://yaireo.github.io/tagify/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes: "Primarily Vanilla JS — has framework wrappers available",
    },
    keywords: ["tags", "tag input", "tagify"],
  },
  {
    id: "PLG-022",
    name: "Cleave.js",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Form Components",
    description:
      "Auto-formats input fields for credit cards, phone numbers, and dates as user types.",
    link: "https://nosir.github.io/cleave.js/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: ["React (optional)"],
      notes: "Vanilla JS — has an optional React component wrapper",
    },
    keywords: ["input format", "cleave js"],
  },
  {
    id: "PLG-023",
    name: "Date Range Picker",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Form Components",
    description:
      "Configurable jQuery date and time range picker with presets and full calendar display.",
    link: "https://www.daterangepicker.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery", "Moment.js"],
      notes: "Requires both jQuery and Moment.js as mandatory dependencies",
    },
    keywords: ["date picker", "date range"],
  },
  {
    id: "PLG-024",
    name: "Tokenize2",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Form Components",
    description:
      "Searchable multi-select tag input with async loading and full keyboard navigation support.",
    link: "https://dragonofmercy.github.io/Tokenize2/index.html",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery"],
      notes: "Requires jQuery — mandatory dependency",
    },
    keywords: ["tokenize", "multi select"],
  },
  {
    id: "PLG-025",
    name: "Tom Select",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Form Components",
    description:
      "Powerful select-box replacement with search, tagging, and async loading without jQuery.",
    link: "https://tom-select.js.org/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes:
        "Completely Vanilla JS — evolved from Selectize.js, no jQuery required",
    },
    keywords: ["select box", "tom select"],
  },

  {
    id: "PLG-019",
    name: "Chart.js",
    logoLink: "https://www.chartjs.org/img/chartjs-logo.svg",
    category: "Charts & Data Visualization",
    description:
      "Eight animated and responsive chart types with a clean and very simple API.",
    link: "https://www.chartjs.org/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: [],
      notes: "Vanilla JS — renders on HTML5 Canvas, no jQuery needed",
    },
    keywords: ["charts", "data visualization", "chart js"],
  },
  {
    id: "PLG-020",
    name: "ApexCharts",
    logoLink: "https://apexcharts.com/media/apexcharts-logo.png",
    category: "Charts & Data Visualization",
    description:
      "Over 20 interactive animated chart types for React, Vue, Angular, and vanilla JS.",
    link: "https://apexcharts.com/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes:
        "Primarily Vanilla JS — has official wrappers for React, Vue, and Angular",
    },
    keywords: ["apexcharts", "charts"],
  },

  {
    id: "PLG-016",
    name: "Swiper",
    logoLink: "https://swiperjs.com/images/swiper-logo.svg",
    category: "Slider & Carousel",
    description:
      "The most modern mobile-friendly slider with touch, autoplay, and full RTL support.",
    link: "https://swiperjs.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes:
        "Primarily Vanilla JS — has official wrappers for React, Vue, and Angular",
    },
    keywords: ["slider", "carousel", "swiper"],
  },
  {
    id: "PLG-017",
    name: "OwlCarousel2",
    logoLink:
      "https://owlcarousel2.github.io/OwlCarousel2/assets/img/owl-logo.png",
    category: "Slider & Carousel",
    description:
      "Touch-enabled jQuery carousel with autoplay, lazy loading, and full RTL support.",
    link: "https://owlcarousel2.github.io/OwlCarousel2/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery"],
      notes: "Requires jQuery — mandatory dependency",
    },
    keywords: ["owl carousel", "jquery carousel"],
  },
  {
    id: "PLG-018",
    name: "Splide.js",
    logoLink: "imgs/splide.png",
    category: "Slider & Carousel",
    description:
      "Lightweight accessible slider with fade, thumbnails, and autoplay using zero dependencies.",
    link: "https://splidejs.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)"],
      notes:
        "Zero dependencies — pure Vanilla JS with optional framework wrappers",
    },
    keywords: ["splide", "slider"],
  },

  {
    id: "PLG-010",
    name: "GSAP",
    logoLink: "imgs/gsap-logo-1d2e01cc.png",
    category: "JavaScript Animation",
    description:
      "Industry-standard JavaScript animation library that is fast, smooth, and universally compatible.",
    link: "https://gsap.com/",
    tech: {
      languages: ["js.png"],
      libraries: [],
      notes:
        "Vanilla JS — integrates with React/Vue/Angular but works independently",
    },
    keywords: ["gsap", "javascript animation"],
  },
  {
    id: "PLG-011",
    name: "Animate.css",
    logoLink: "imgs/animatecss-a2cade18.png",
    category: "CSS Animations",
    description:
      "Plug-and-play CSS animations like bounce and fade, with no JavaScript needed at all.",
    link: "https://animate.style/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Completely CSS-only — no JavaScript required at all",
    },
    keywords: ["animate css", "css animation"],
  },
  {
    id: "PLG-012",
    name: "WOW.js",
    logoLink: "https://wowjs.uk/img/wow-logo.jpg",
    category: "Scroll Animations",
    description:
      "Triggers CSS animations when elements scroll into view, pairs perfectly with Animate.css.",
    link: "https://wowjs.uk/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["Animate.css"],
      notes:
        "Requires Animate.css to function — Vanilla JS with no jQuery dependency",
    },
    keywords: ["scroll animation", "wow js"],
  },
  {
    id: "PLG-013",
    name: "AOS",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Scroll Animations",
    description:
      "Add scroll-triggered animations to any element using just a single HTML data attribute.",
    link: "https://michalsnik.github.io/aos/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Vanilla JS — triggered via data attributes directly in HTML",
    },
    keywords: ["aos", "animate on scroll"],
  },
  {
    id: "PLG-014",
    name: "Hover.css",
    logoLink: "imgs/puzzle_4020290.png",
    category: "CSS Effects",
    description:
      "Over 100 modern CSS hover effects ready to apply by adding a class to any element.",
    link: "https://ianlunn.github.io/Hover/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Completely CSS-only — just add a class to the element",
    },
    keywords: ["hover effects", "css hover"],
  },
  {
    id: "PLG-015",
    name: "Animsition",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Page Transitions",
    description:
      "Simple jQuery plugin for adding smooth CSS transition effects between website pages.",
    link: "http://git.blivesta.com/animsition/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery"],
      notes: "Requires jQuery — will not work without it",
    },
    keywords: ["page transition", "animsition"],
  },

  {
    id: "PLG-005",
    name: "Google Fonts",
    logoLink:
      "https://images.seeklogo.com/logo-png/42/3/google-fonts-logo-png_seeklogo-426756.png",
    category: "Typography",
    description:
      "Over 1,500 free web fonts by Google, ready to embed in one line.",
    link: "https://fonts.google.com/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Added via <link> tag in HTML and applied with font-family in CSS",
    },
    keywords: ["fonts", "web fonts", "typography", "google fonts"],
  },
  {
    id: "PLG-006",
    name: "TextBlock",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Typography Tools",
    description:
      "Fine-grained control over text blocks for balanced and fully responsive typography layouts.",
    link: "https://textblock.io/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: [],
      notes: "Pure Vanilla JS — no external framework required",
    },
    keywords: ["text formatting", "typography"],
  },
  {
    id: "PLG-007",
    name: "Animated Headlines",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Text Animations",
    description:
      "Eye-catching rotating and typing headline effects designed for modern hero sections.",
    link: "https://codyhouse.co/demo/animated-headlines/index.html",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "CSS Keyframes + Vanilla JS — no jQuery needed",
    },
    keywords: ["animated headline", "text animation"],
  },
  {
    id: "PLG-008",
    name: "iTyped",
    logoLink: "imgs/puzzle_4020290.png",
    category: "Text Animations",
    description:
      "Smooth typewriter text animation with custom delays, loop control, and cursor effects.",
    link: "https://ityped.surge.sh/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: [],
      notes: "Pure Vanilla JS — a lightweight alternative to Typed.js",
    },
    keywords: ["typing animation", "typewriter"],
  },
  {
    id: "PLG-009",
    name: "CSS Animated Text Generator",
    logoLink: "imgs/cssicon.png",
    category: "CSS Generators",
    description:
      "Create animated text styles with custom fonts, effects, and ready-to-copy CSS output.",
    link: "https://www.cssportal.com/css-animated-text-generator/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Online tool — output is pure HTML + CSS ready to paste",
    },
    keywords: ["css animated text", "text animation generator"],
  },
];
