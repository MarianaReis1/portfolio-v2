import type { Project } from '@types/projectItem';

// Icons Tools
import iconJs from '@img/icon-js.svg';
import iconCss from '@img/icon-css.svg';
import iconFigma from '@img/icon-figma.svg';
import iconHtml from '@img/icon-html.svg';
import iconIllustrator from '@img/icon-illustrator.svg';
import iconInvision from '@img/icon-invision.svg';
import iconJquery from '@img/icon-jquery.svg';
import iconLaravel from '@img/icon-laravel.svg';
import iconNext from '@img/icon-next.svg';
import iconReact from '@img/icon-react.svg';
import iconSass from '@img/icon-sass.svg';
import iconTailwind from '@img/icon-tailwind.svg';
import iconVue from '@img/icon-vue.svg';
import iconWebpack from '@img/icon-webpack.svg';
import iconXd from '@img/icon-xd.svg';
import iconSketch from '@img/icon-sketch.svg';


// Project Thecosystems
import thecoMob from '@img/mockups/thecosystem_mob.png';
import thecoDesk from '@img/mockups/thecosystem_desk.png';
import thecoVideo from '@assets/videos/thecosystem-video.mp4';

const thecosystem: Project = {
    id: "01",
    title: 'Thecosystems',
    descriptionShort: `<p>
        Thecosystem is a UK-based company that helps healthcare innovators around the world by giving them unbiased information to make smart decisions about how to work with different people. The challenge was create a beautiful front-end design that integrate with CMS and provide an exceptional user experience with engaging animations.
    </p>`,
    descriptionLong: `<p class="mb-5">
        I developed this visually rich website using the GSAP library, VueJS 3, and TailwindCSS. As part of the project, I also integrated the website with our in-house CMS, making it easy for the client to manage and manipulate its content without technical knowledge.
    </p>
    <p class="mb-5">
        By leveraging my expertise in front-end development that seamlessly integrates with CMS, I ensured that the website was visually appealing and user-friendly and easy to maintain and update. I utilized my knowledge of user experience design and web accessibility standards to ensure that the website was accessible to a broad range of users.
    </p>`,
    siteLink: 'https://thecosystems.com/',
    siteCode: null,
    mobileImg: thecoMob,
    desktopImg: thecoDesk,
    desktopVideo: thecoVideo,
    desktopExtraImgs: [],
    iconTools: [
        {
            icon: iconJs,
            alt: 'icon javascript'
        },
        {
            icon: iconVue,
            alt: 'icon vue'
        },
        {
            icon: iconTailwind,
            alt: 'icon javascript'
        },
        {
            icon: iconInvision,
            alt: 'icon vue'
        },
        {
            icon: iconHtml,
            alt: 'icon vue'
        },
        {
            icon: iconCss,
            alt: 'icon javascript'
        },
    ]
};


// Project MMRG
import mmrgMob from '@img/mockups/mmrg_mob.png';
import mmrgDesk from '@img/mockups/mmrg_desk.png';
import mmrgVideo from '@assets/videos/mmrg-video.mp4';

const mmrg: Project = {
    id: "02",
    title: 'MMR-Global',
    descriptionShort: `<p>
    MMRG is a certified B corporation that focuses on helping companies navigate the complex world of life science innovation. As a frontend developer tasked with creating the website for MMRG, the challenge was clear: to create a well-organized layout that was easy to navigate, with a clean design that effectively showcased the content.
    </p>`,
    descriptionLong: `<p class="mb-5">
    To meet the MMRG website’s challenge, I turned to VueJS 3 and TailwindCSS to create a website that was not only visually appealing but also optimized for accessibility and user experience. By using the best HTML5 markup practices, I ensured that the website was easy to use and accessible to all users, regardless of their device or browsing capabilities.
    </p>
    <p class="mb-5">
    The website is not only simple to navigate and visually appealing, but it also effectively showcases MMRG's expertise in the field of life science innovation. As a certified B corporation, MMRG is dedicated to making a positive impact on the world, and I'm proud to have played a small part in helping them achieve their goals.
    </p>`,
    siteLink: 'https://mmr-g.com/',
    siteCode: null,
    mobileImg: mmrgMob,
    desktopImg: mmrgDesk,
    desktopVideo: mmrgVideo,
    desktopExtraImgs: [],
    iconTools: [
        {
            icon: iconJs,
            alt: 'icon javascript'
        },
        {
            icon: iconVue,
            alt: 'icon vue'
        },
        {
            icon: iconTailwind,
            alt: 'icon javascript'
        },
        {
            icon: iconInvision,
            alt: 'icon vue'
        },
        {
            icon: iconSketch,
            alt: 'icon sketch'
        },
        {
            icon: iconHtml,
            alt: 'icon vue'
        },
        {
            icon: iconCss,
            alt: 'icon javascript'
        },
    ]
}


// Project BMJ
import bmjDesk from '@img/mockups/bmj-sunleca_desk.png';
import bmjDesk2 from '@img/mockups/bmj-gilead_desk.png';
import bmjDesk3 from '@img/mockups/bmj-veklury_desk.png';
import bmjDesk4 from '@img/mockups/bmj-vifor_desk.png';

const bmj: Project = {
    id: "03",
    title: 'The BMJ',
    descriptionShort: `<p>
    As a web developer at Redsnapper, I led the development of over 35+ unique microsites for the British Medical Journal, that hosts medical resources from external organizations. I also mentored and supervised junior developers in creating an additional 15 microsites, providing guidance on best practices and complex issues. With its user-friendly interface and rich content, the portal has become a go-to resource for medical professionals, patients, and students around the world.
    </p>`,
    descriptionLong: `
    <p class="mb-5">
    My suggestion to implement AstroJS, VueJS3, and TailwindCSS 3 was well-received and led to significant improvements in our development process. The new tech stack allowed for greater flexibility in designing and implementing each microsite to meet the unique requirements of the client. It also resulted in faster delivery times and higher-quality output.
    </p>
    <p class="mb-5">
    Through this work, I demonstrated my ability to identify and implement new technologies to improve development processes and deliver better results for clients. Overall, this experience has shown me the value of staying up-to-date with the latest technologies and utilizing them to streamline development processes.
    </p>`,
    siteLink: 'https://www.bmj.com/',
    siteCode: null,
    mobileImg: null,
    desktopImg: bmjDesk,
    desktopVideo: null,
    desktopExtraImgs: [bmjDesk3,bmjDesk4,bmjDesk2],
    iconTools: [
        {
            icon: iconJs,
            alt: 'icon javascript'
        },
        {
            icon: iconJquery,
            alt: 'icon jquery'
        },
        {
            icon: iconVue,
            alt: 'icon vue'
        },
        {
            icon: iconTailwind,
            alt: 'icon tailwind'
        },
        {
            icon: iconXd,
            alt: 'icon xd'
        },
        {
            icon: iconFigma,
            alt: 'icon figma'
        },
        {
            icon: iconInvision,
            alt: 'icon invision'
        },
        {
            icon: iconSass,
            alt: 'icon sass'
        },
        {
            icon: iconCss,
            alt: 'icon css'
        },
        {
            icon: iconHtml,
            alt: 'icon html'
        },
    ]
}

const projects: Project[] = [
    thecosystem,
    mmrg,
    bmj
]

export default projects;