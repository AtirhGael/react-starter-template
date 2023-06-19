
const data =[
    {
        title:'IT consulting',
        text:'In-depth analysis of your IT needs, challenges, and the existing IT ecosystem.',
        text1:'Expert assistance in achieving the goals of IT modernization, IT infrastructure optimization and ongoing management, cloud migration. ',
        text2:'Digital transformation of business workflows',
        bgColor:'#54a473'
    },
    {
        title:'Software development ',
       
          text:'Design, development, and support of enterprise software: web and mobile applications, cloud development, libraries and APIs.',
          text1:'SaaS product development. ',
       
        bgColor:'#3692f2'
    },
    {
        title:'Testing and QA',
        text:'Fully managed functional, integration, performance, usability, and security testing of web, mobile, desktop applications, DWHs, and SaaS apps, cloud development, libraries and APIs.',
        text1:'STQB-certified test engineers.',
        bgColor:'#1b71de'
    },
    {
        title:'Application services',
        text:'Management of new application implementations: development',
        text1:'integration, ongoing support.',
        text2:'Business application modernization driving the reduction of operational costs and profitability improvement.',
        text3:'Application support and maintenance.',
        bgColor:'#175fc7'
    },
    {
        title:'Data analytics',
        text:'Management of new application implementations: development, integration, ongoing support.',
        text1:'Business application modernization driving the reduction of operational costs and profitability improvement.',
        text2:'Application support and maintenance.',
        bgColor:'#134eb2'
    }
]

const data2 = [ 'Enterprice application', 'ERP', 'CRM', 'Operations management','corperate finance', 'payments','Asset management','Document management','intrats','fleet management','data analytics', 'web portals' ]

const data3 =[
    {
        title:'North America',
        text:'Office locations: USA',
        text1:'Number of customers: ~440',
        
    },
    {
        title:'Europe and the UK',
       
        text:'Office locations: Finland, Latvia, Lithuania, Poland',
        text1:'Number of customers: ~360 ',
       
       
    },
    {
        title:'The Gulf',
        text:'Office locations: UAE ',
        text1:'Number of customers: ~30',
        
    },
]
const serviceData = [
   {
    title:'BFSI',
    image:'https://www.scnsoft.com/icons-tritone/with-space/bank.svg'
   },
   {
    title:'HealthCare',
    image:'https://www.scnsoft.com/icons-tritone/with-space/healthcare-1.svg'
   },
   {
    title:'Manufacturing',
    image:'https://www.scnsoft.com/icons-tritone/with-space/manufacturing.svg'
   },
   {
    title:'Rtails',
    image:'https://www.scnsoft.com/icons-tritone/with-space/retail-red.svg'
   },
   {
    title:'Professional Services',
    image:'https://www.scnsoft.com/icons-tritone/with-space/professional-services.svg'
   },
]
const Backend =[
    {
        image:'	https://www.scnsoft.com/technologies-logos/back-end/dot-net-logo.svg',
        practice:'Practice',
        year:'10 years',
        project:'Projects',
        workforce:'workforce',
        number:'60+',
        text:'Our .NET developers can build sustainable and high-performing apps up to 2x faster due to outstanding .NET proficiency and high productivity.'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg',
        practice:'Practice',
        year:'10 years',
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'60+',
        text:'ScienceSofts Java developers build secure, resilient and efficient cloud-native and cloud-only software of any complexity and successfully modernize legacy software solutions'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/python_1.svg',
        practice:'Practice',
        year:'6 years',
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+',
        text:"ScienceSoft's Python developers and data scientists excel at building general-purpose Python apps, big data and IoT platforms, AI and ML-based apps, and BI solutions."
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/node-js-logo-small.svg',
        practice:'Practice',
        year:'6 years',     
        workforce:'workforce',
        number:'80+',
        text:"ScienceSoft delivers cloud-native, real-time web and mobile apps, web servers, and custom APIs ~1.5–2x faster than other software developers. Read more on https://www.scnsoft.com/about/company"
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/php-logo.svg',
        practice:'Practice',
        year:'6 years',     
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+',
        text:"ScienceSoft's PHP developers helped to build Viber. Their recent projects: an IoT fleet management solution used by 2,000+ corporate clients and an award-winning remote patient monitoring solution."
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/back-end/java-logo.svg',
        practice:'Practice',
        year:'6 years',     
        text:"ScienceSoft's developers use Go to build robust cloud-native, microservices-based applications that leverage advanced techs — IoT, big data, AI, ML, blockchain."
    },
]
const Frontend =[
    {
        image:'	https://www.scnsoft.com/technologies-logos/front-end/html.svg',
        
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/css.svg',
       
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/javascript-logo.svg',
        practice:'Practice',
        year:'6 years',
        project:'Projects',
        pnumber:'60+',
        workforce:'workforce',
        number:'80+',
        text:"ScienceSoft uses JavaScript’s versatile ecosystem of frameworks to create dynamic and interactive user experience in web and mobile apps."
    },
]
const Framework =[
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/angular-logo.svg',
        practice:'Practice',
        year:'10 years',
        workforce:'workforce',
        number:'60+',
        text:'ScienceSoft leverages code reusability Angular is notable for to create large-scale apps. We chose Angular for a banking app with 3M+ users.'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/react-js-logo.svg',
     
        workforce:'workforce',
        number:'60+',
        text:'ScienceSoft achieves 20–50% faster React development and 50–90% fewer front-end performance issues due to smart implementation of reusable components and strict adherence to coding best practices.'
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/meteor.svg',
        
        text:"ScienceSoft achieves 20–50% faster React development and 50–90% fewer front-end performance issues due to smart implementation of reusable components and strict adherence to coding best practices."
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/vuejs-logo.svg',
        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering."
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/frameworks/nextjs.svg',
        
        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering."
    },
    {
        image:'https://www.scnsoft.com/technologies-logos/front-end/ember-logo.svg ',     
        text:"By using a lightweight Vue framework, ScienceSoft creates high-performant apps with real-time rendering. Read more on https://www.scnsoft.com/about/company"
    },
]


export {data,data2,data3,serviceData,Backend,Frontend,Framework}