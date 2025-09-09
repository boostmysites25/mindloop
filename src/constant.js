import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.jpg";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
// import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
// import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
// import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
// import datadevelopment from "./assets/images/services/datadevelopment.jpg";
// import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
// import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
// import machinelearning from "./assets/images/services/machinelearning.jpg";
// import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
// import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
  MdPermMedia,
} from "react-icons/md";
import {
  GiArtificialIntelligence,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaAppStoreIos, FaGamepad } from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { RiCustomSize } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineCampaign } from "react-icons/md";

// service images
import vrar from "./assets/images/services/vrar.jpg";
import mobile from "./assets/images/services/mobile.jpg";
import ai from "./assets/images/services/ai.jpg";
import web from "./assets/images/services/web.jpg";
import machine from "./assets/images/services/machine.jpg";
import game from "./assets/images/services/game.jpg";
import digitalMarketing from "./assets/images/services/digital-marketing.webp";
import Blogs from "./pages/website/Blogs";

const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  // serviceswebdevelopment,
  // serviceaidevelopment,
  // chatbotdevelopment,
  // datadevelopment,
  // gamedevelopment,
  // blockchaindevelopment,
  // machinelearning,
  // clouddevelopment,
  // rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
  //service image
  vrar,
  mobile,
  ai,
  web,
  machine,
  game,
  digitalMarketing,
};

// company details
export const companyDetails = {
  phone: "+91-8870940513",
  whatsapp: "+91-8870940513",
  whatsappbox:
    "https://api.whatsapp.com/send/?phone=918870940513&text=Hi!%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20information?&type=phone_number&app_absent=0",
  email: "support@mindloopsolutions.in",
  address:
    "No 50, Venkateshwara Nagar, 1st street Kavundampalayam, Coimbatore -641030",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
    children: [
      {
        path: "/web-development",
        name: "Web Development",
      },
      {
        path: "/app-development",
        name: "App Development",
      },
    ],
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Blogs",
    path: "/blogs",
    component: <Blogs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I get started?",
    answer:
      "You can get started by scheduling a free consultation with our team. We'll understand your requirements, explore potential solutions, and guide you through how our AI and ML services can bring your vision to life.",
  },
  {
    id: 2,
    question: "Do I need technical knowledge to use your AI or ML services?",
    answer:
      "Not at all. Our team of experts takes care of the technical complexities—from algorithm design to deployment—so you can focus on your core business goals while we build smart, scalable solutions for you.",
  },
  {
    id: 3,
    question: "How long does it take to build an ML or AI solution?",
    answer:
      "Depending on the complexity, a basic solution or MVP can be delivered in 3 to 6 months. We prioritize scalable, iterative development so your system continues to evolve and improve over time.",
  },
  {
    id: 4,
    question: "How do I know if Machine Learning is right for my business?",
    answer:
      "During our initial consultation, we assess your use case, available data, and business goals to determine whether ML or AI solutions will provide value. We then suggest the best approach tailored to your needs.",
  },
  {
    id: 5,
    question: "What kind of Machine Learning solutions do you offer?",
    answer:
      "We offer custom ML solutions including predictive analytics, recommendation systems, computer vision, natural language processing, and model optimization. Our goal is to help businesses automate, scale, and make smarter decisions using data.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: <SiFlutter />,

    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: <GiArtificialIntelligence className="w-6 h-6" />,
    link: "/services/vr-ar-development",
    title: "Virtual Reality (VR) & Augmented Reality (AR) Development",
    desc: "Create immersive experiences that transform customer engagement and business operations. From virtual training simulations to augmented product visualization, we craft interactive digital solutions that push boundaries.",
    detailContent:
      "In an increasingly immersive world, virtual and augmented reality are powerful tools for creating unforgettable experiences. Our VR development services create fully immersive environments for training simulations and virtual tours, while our AR solutions blend digital elements with the physical world for enhanced product visualization. We develop enterprise tools like virtual prototypes and remote collaboration systems, helping businesses revolutionize both customer interactions and internal processes through cutting-edge immersive technologies.",
  },
  {
    id: 2,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    link: "/services/mobile-app-development",
    title: "Mobile App Development",
    desc: "Connect with your audience through seamless, cross-platform mobile experiences. We create user-friendly iOS and Android apps that combine innovative design with robust functionality.",
    detailContent:
      "Our mobile app development services deliver feature-rich solutions for iOS and Android. Using Flutter and React Native, we build cross-platform apps with consistent performance across devices. Our process includes user-centric UI/UX design, enterprise-grade backend development, and seamless API integrations. From concept to launch, we focus on creating apps that drive engagement through intuitive interfaces and reliable functionality. Post-launch support includes regular updates, security enhancements, and feature expansions to keep your app competitive in evolving markets.",
  },
  {
    id: 3,
    img: <GiRobotLeg className="w-6 h-6" />,
    link: "/services/ai-development",
    title: "Artificial Intelligence (AI) Development",
    desc: "Transform your business with intelligent automation and data-driven insights. Our AI solutions enhance decision-making, streamline operations, and deliver personalized customer experiences.",
    detailContent:
      "We develop comprehensive AI solutions including machine vision systems, NLP-powered chatbots, and predictive analytics models. Our services begin with AI strategy consulting to identify optimization opportunities, followed by implementation of custom solutions like facial recognition systems and sentiment analysis tools. We create AI-driven automation that adapts to your business needs, helping forecast trends, optimize workflows, and deliver smarter customer interactions through continuous learning algorithms.",
  },
  {
    id: 4,
    img: <BsFillClipboard2DataFill className="w-6 h-6" />,
    link: "/services/full-stack-web-development",
    title: "Full Stack Web Development",
    desc: "Build high-performance web applications with complete frontend-to-backend solutions. We create scalable, secure platforms that power your digital presence.",
    detailContent:
      "Our full-stack development covers everything from responsive React/Vue.js frontends to robust Node.js/Python backends. We specialize in creating custom web applications with seamless API integrations and optimized database architectures. Whether building e-commerce platforms or enterprise systems, we implement secure, scalable solutions using modern frameworks. Services include UI/UX design, cloud infrastructure setup, database optimization, and ongoing performance monitoring to ensure reliability and growth readiness.",
  },
  {
    id: 5,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    link: "/services/machine-learning",
    title: "Machine Learning Solutions",
    desc: "Unlock data's potential with custom ML models that drive automation and strategic insights. Turn complex datasets into actionable intelligence for smarter decision-making.",
    detailContent:
      "We develop machine learning solutions that analyze patterns, predict trends, and automate processes. Our services include building custom ML models for customer segmentation and anomaly detection, implementing predictive analytics systems, and creating automation tools that learn from data. Using TensorFlow and PyTorch, we transform raw data into strategic assets through advanced algorithms and deep learning techniques, helping businesses optimize operations and maintain competitive advantages.",
  },
  {
    id: 6,
    img: <FaGamepad className="w-6 h-6" />,
    link: "/services/game-development",
    title: "Game Development",
    desc: "Create captivating gaming experiences across platforms. From mobile games to immersive VR adventures, we bring interactive entertainment concepts to life.",
    detailContent:
      "Our game development services cover everything from casual mobile games to complex VR/AR experiences. Using Unity and Unreal Engine, we create immersive worlds with rich storytelling and engaging mechanics. Services include full-cycle development from concept art to final deployment, multiplayer system integration, and cross-platform optimization. We specialize in creating interactive experiences that combine stunning visuals with responsive gameplay, whether developing educational simulations or competitive esports titles.",
  },
  {
    id: 7,
    img: <MdOutlineCampaign className="w-6 h-6" />,
    link: "/services/digital-marketing",
    title: "Digital Marketing",
    desc: "Amplify your brand's reach and drive growth through strategic digital marketing solutions. We create comprehensive campaigns that connect with your audience and deliver measurable results.",
    detailContent:
      "Our digital marketing services encompass SEO optimization, social media management, content marketing, and paid advertising campaigns. We develop data-driven strategies that enhance your online presence and drive qualified leads. Services include search engine optimization, social media marketing, email campaigns, and analytics tracking. Using advanced tools and AI-powered insights, we optimize campaigns for maximum ROI, helping businesses build strong brand awareness and achieve sustainable growth in competitive digital landscapes.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Transforming Vision into Reality",
    desc: "Whether it's building intelligent machine learning models or crafting immersive gaming experiences, we bring your ideas to life with precision and creativity tailored to your business goals.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Empowering Businesses with Technology",
    desc: "Leveraging the latest in AI, ML, and game development technologies, we deliver high-performance, scalable solutions that drive real impact and set your brand apart.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Driving Efficiency with Innovation",
    desc: "We automate processes, enhance interactivity, and infuse intelligence into systems—whether through dynamic games or data-driven applications—to streamline operations and enhance user engagement.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Data-Driven Decision Making",
    desc: "Through machine learning and advanced analytics, we uncover actionable insights that fuel smarter strategies, while game telemetry helps fine-tune experiences and boost retention.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Commitment to Excellence",
    desc: "From the first consultation to final delivery, we prioritize quality, performance, and long-term success—ensuring every ML solution or game we build meets the highest standards.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Mark S.",
    role: "Founder of UrbanTrends",
    desc: "“Partnering with Mindloop Solutions LLP was a breath of fresh air. They brought our mobile app and website ideas to life with precision, while enhancing the user experience in ways we hadn’t imagined. Their creativity and technical skills elevated our digital presence beyond expectations.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Lisa T.",
    role: "Operations Manager at HealthPro Analytics",
    desc: "“The machine learning solutions from Mindloop Solutions LLP have completely transformed our data operations. Their automation and predictive insights helped us streamline workflows and improve decision-making across the board.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "John P.",
    role: "Customer Service Lead at QuickResponse",
    desc: "“The chatbot developed by Mindloop Solutions LLP has been a complete game-changer for our support team. It's fast, reliable, and has drastically improved our customer experience. We've seen a noticeable drop in response times and a rise in customer satisfaction.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Samantha K.",
    role: "CEO at Retail Innovations",
    desc: "“Our collaboration with Mindloop Solutions LLP on data analytics was incredibly insightful. They helped us turn scattered data into actionable intelligence, which directly influenced our strategic moves and improved outcomes.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Alex R.",
    role: "Product Manager at PlaySphere",
    desc: "“The game development services from Mindloop Solutions LLP were outstanding. From concept to launch, they handled every detail with precision. The game’s graphics, performance, and player engagement have exceeded all expectations.”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Monica B.",
    role: "CTO at BrightEdge Media",
    desc: "“We worked with Mindloop Solutions LLP on a full-stack web development project, and the outcome was flawless. Their team blended speed, functionality, and sleek design to deliver a platform our users love.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Daniel L.",
    role: "Head of Product at InsightIQ",
    desc: "“Integrating machine learning into our analytics platform with Mindloop Solutions LLP has revolutionized the way we understand user behavior. Their proactive, hands-on approach made the process both smooth and impactful.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Claire J.",
    role: "IT Director at GlobalTech Solutions",
    desc: "“The cloud services from Mindloop Solutions LLP helped us migrate seamlessly and scale operations effortlessly. Their management and support have significantly boosted our infrastructure flexibility and team productivity.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Evan W.",
    role: "Operations Director at Streamline Logistics",
    desc: "“Our efficiency skyrocketed after implementing RPA solutions from Mindloop Solutions LLP. Routine tasks that took hours are now automated, giving our team the bandwidth to focus on strategic priorities.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A comprehensive finance platform streamlining investments and portfolio management efficiently.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global relocation service platform for seamless student mobility and accommodations.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "A networking platform connecting leaders and professionals to foster meaningful collaborations.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "An innovative job marketplace connecting freelancers and employers for diverse gig opportunities.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A corporate solution provider enhancing business growth with tailored financial services.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "A dynamic communication platform revolutionizing team collaboration and connectivity.",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "An intuitive platform simplifying vehicle part exchanges and purchases.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "A driver-matching app ensuring efficient and reliable transportation services.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
    description:
      "A beauty and wellness app offering personalized skincare and grooming solutions.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
    description:
      "A platform connecting users with skilled artisans for home services.",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
    description:
      "A spiritual app offering resources for faith-building and inspiration.",
  },
];

export const aboutUsItems = [
  {
    title: "Innovation at Heart",
    description:
      "At Mindloop Solutions LLP, innovation fuels everything we build. From cutting-edge AI to immersive game development and cloud-native solutions, we leverage the latest technologies to craft impactful, future-ready digital products.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize your vision by tailoring every project to your goals—whether it's developing an intelligent chatbot, streamlining operations with RPA, or launching a next-gen mobile app. Our collaborative style ensures long-term partnerships built on trust and results.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Excellence is our standard. We deliver robust, scalable, and secure solutions—be it a machine learning model, a data analytics platform, or a high-performance web application. Every project is backed by rigorous testing and industry-best practices.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Innovation with Purpose",
    description:
      "We believe that technology should solve real-world challenges. From improving user experience through smart automation to building interactive games that engage global audiences, our focus is on driving meaningful, measurable impact.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "End-to-End Digital Solutions",
    description:
      "We support your entire digital journey—from idea validation and UI/UX design to deployment, cloud management, and post-launch optimization. Whether you're scaling a product or starting from scratch, we've got you covered at every stage.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];

// blog data
export const blogData = [
  {
    id: 1,
    title: "The Future of AI: Transformative Trends Shaping Tomorrow",
    url: "https://mindloopsolutionsreview.blogspot.com/2024/12/futureofAI-mindloopdevelopment.html",
    excerpt: "Exploring the future of artificial intelligence and how Mindloop Solutions is shaping the development landscape.",
    date: "December 2024",
    category: "AI Development",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixkKYOkFvMwMEXS5rCW2dtl2rTh792B_Vx-kp4JB80X_e_Fd7fGBf4w5W-aFyp54mtJms7xwRDb6fIGeRbYzl1AUt3eMZLe-vthprQqcaGACqL4tDLfKFbjPWMQzGfKsCpABB0OVyLrLFgeshdOT6sxSqtLapKLGobS64d4_shRgrIYODuWku4ZndiOOZ6/w400-h229/DALL%C2%B7E%202024-12-11%2018.08.59%20-%20A%20visually%20captivating%20digital%20artwork%20representing%20the%20theme%20'The%20Future%20of%20AI_%20Transformative%20Trends%20Shaping%20Tomorrow.'%20The%20scene%20features%20a%20harmoni.webp"
  },
  {
    id: 2,
    title: "Beyond Imagination: AI, AR & Digital Marketing Future",
    url: "https://mindloopsolutionsreview.blogspot.com/2025/09/beyond-imagination-ai-ar-digital.html",
    excerpt: "Discover how AI and AR technologies are revolutionizing digital experiences beyond our wildest imagination.",
    date: "September 2025",
    category: "Technology",
    image: require('./assets/images/blogs/2.webp')
  },
  {
    id: 3,
    title: "The Role of AR and VR in Enhancing User Experience: Mindloop Solutions' Approach",
    url: "https://mindloopsolutionsreview.blogspot.com/2025/09/the-role-of-ar-and-vr-in-enhancing-user.html",
    excerpt: "Understanding how augmented and virtual reality technologies are transforming user interactions and experiences.",
    date: "September 2025",
    category: "AR/VR",
    image: require('./assets/images/blogs/3.webp')
  },
  {
    id: 4,
    title: "Mindloop Solutions: Pioneering the Future of AI Innovation ",
    url: "https://mindloopsolutionsreview.blogspot.com/2024/11/about-mindloopcompany.html",
    excerpt: "Learn about Mindloop Solutions LLP, our mission, vision, and commitment to delivering cutting-edge technology solutions.",
    date: "November 2024",
    category: "Company",
    image: require('./assets/images/blogs/4.webp')
  },
  {
    id: 5,
    title: "Product/Service Showcase: Transforming Business with Mindloop Solutions",
    url: "https://mindloopsolutionsreview.blogspot.com/2024/11/product-showcase-mindlopp.html",
    excerpt: "A comprehensive showcase of Mindloop's innovative products and solutions that are transforming industries.",
    date: "November 2024",
    category: "Products",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirHUYqypBW4Iw_bJhagfAm9auwu8-YAO9b5SkiaDDuVFMT8or2tKeTmV6_1mO8EzXPYdEK63pN4KPD5e8ec9MyEDePCFRw4Q1a9S0zbiE4BeKfcoL-r-YRsHQBgWO8RLkTUlkyACEyphmptJ_uWUshnHWwVbikCDEo_0HDFM3xHBqFAQGzZsEqORL8jgg1/w640-h339/rendering-anime-doctors-work.jpg"
  },
  {
    id: 6,
    title: "AI for Growth: How Mindloop Solutions is Shaping the Future of Business ",
    url: "https://mindloopsolutionsreview.blogspot.com/2024/12/growth-mindloop.html",
    excerpt: "Exploring Mindloop's journey of growth, innovation, and success in the technology industry.",
    date: "December 2024",
    category: "Growth",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqLcZp6TmXTDECpEbujlZ9SlpWa0eqQ8QWAOgreWEwDMj16SjL4-gsFJnwbvkz8lF0f4yVM9rxmqb5t92OPkW9gqq7WQ7WpKxpwZbZlDhm_04DrvvskcFOpyFXAlHBG18CTlG0pM_daCwsx-baWyf3xImjdUvSjgbmprRE8FLGDQ6lCTSbW2y09RUnmPpO/w640-h360/image.png"
  }
];
