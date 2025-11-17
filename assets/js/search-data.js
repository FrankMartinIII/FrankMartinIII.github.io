// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My projects lie in the areas of Virtual Reality, Augmented Reality, Human-Computer Interaction, and Robotics",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-on-the-virtual-reality-rip-current-simulation-was-mentioned-in-governor-hochul-s-press-release",
          title: 'Our work on the virtual reality rip current simulation was mentioned in Governor...',
          description: "",
          section: "News",},{id: "news-our-manuscript-corrientes-marinas-evaluating-spanish-rip-current-communications-through-beach-signs-and-virtual-reality-was-accepted-for-publication-in-weather-climate-and-society",
          title: 'Our manuscript “Corrientes Marinas: Evaluating Spanish Rip Current Communications through Beach Signs and...',
          description: "",
          section: "News",},{id: "news-we-are-scheduled-to-present-our-work-corrientes-marinas-evaluating-spanish-rip-current-communications-through-beach-signs-and-virtual-reality-at-the-106th-american-meteorological-society-annual-meeting-during-the-session-advancements-of-risk-communication-in-spanish-speaking-communities-on-january-28th-at-9-45-am-central-time",
          title: 'We are scheduled to present our work “Corrientes Marinas: Evaluating Spanish Rip Current...',
          description: "",
          section: "News",},{id: "news-we-will-be-presenting-communicating-snow-squall-risk-in-english-and-spanish-with-virtual-reality-at-the-106th-american-meteorological-society-annual-meeting-during-the-session-communication-to-build-trust-in-the-science-of-weather-on-january-27th-at-9-00-am-central-time",
          title: 'We will be presenting “Communicating Snow Squall Risk in English and Spanish with...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-needle-wielding-robot-for-injection",
          title: 'Needle-Wielding Robot for Injection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/InjectionRobot/";
            },},{id: "projects-injection-site-tracking",
          title: 'Injection Site Tracking',
          description: "Finding a region of interest using a hand-drawn X-mark.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/InjectionTracking/";
            },},{id: "projects-xr-fixture-adjustment",
          title: 'XR Fixture Adjustment',
          description: "HoloLens application for human-robot interaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/XRAdjust/";
            },},{id: "projects-6-dof-end-effector-for-wound-closure-robot",
          title: '6-DOF End-Effector for Wound Closure Robot',
          description: "Stepper motors and a Stewart platform operated using ROS on a Raspberry Pi 4B—completed for Master&#39;s Thesis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/masters/";
            },},{id: "projects-rip-current-virtual-reality-simulation",
          title: 'Rip Current Virtual Reality Simulation',
          description: "Simulating the experience of being caught in a rip current in virtual reality.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rip_current/";
            },},{id: "projects-snow-squall-driving-simulation",
          title: 'Snow Squall Driving Simulation',
          description: "Experience driving through a snow squall using virtual reality.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/snow_squall/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%72%61%6E%6B%6C%6D%61%72%74%69%6E%69%69%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/FrankMartinIII", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/frank-martin-iii", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=e_So4jEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
