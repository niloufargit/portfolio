import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

const Links: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/niloufargit",
        simpleIconName: "GitHub",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/niloufar-bayat",
        simpleIconName: "LinkedIn",
        backgroundColor: "#0066c8",
    },
    {
        name: "Email",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=niloufarbayatpro@gmail.com",
        simpleIconName: "Gmail",
        backgroundColor: "#EA4335",
    },

]

const Skills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "Angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "Java",
        link: "https://www.oracle.com/java/",
        simpleIconName: "JAVA",
        backgroundColor: "#E34F26",
    },
    {
        name: "Spring",
        link: "https://spring.io/",
        simpleIconName: "Spring",
        backgroundColor: "#6DB33F",
    },
    {
        name: "Python",
        link: "https://www.python.org/",
        simpleIconName: "Python",
        backgroundColor: "#3776AB",
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "PostgreSQL",
        backgroundColor: "#336791",
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "Docker",
        backgroundColor: "#1488C6",
    },

];


const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: Skills,
    skillsList: [
        "Développement backend Java Spring, Python",
        "Front-end Angular, HTML/CSS/TypeScript",
        "Data: PostgreSQL, Kafka, JSON Schema, CI/CD",
        "Docker, IBM Cloud, Google Cloud Functions",
    ]
}

const CloudSkills: ExternalSite[] = [
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "PostgreSQL",
        backgroundColor: "#336791",
    },

    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "Docker",
        backgroundColor: "#1488C6",
    },
];

const CloudSection: SkillSection = {
    sectionTitle: "Cloud Infra-Architecture",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "Déploiement IBM Cloud",
        "Pipelines CI/CD, microservices",
        "Automatisation via Cloud Functions et intégrations API",
    ]
}


const PersonalProjects: ProjectSection = {
    sectionTitle: "Mes Projets",
    sectionSubtitle: "",
    entities: [
        {
            title: "Invoo",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_MASTER_PORTFOLIO,
            githubLink: "https://github.com/niloufargit/invoo",
            description: "Annuel master",
            techStack: [],
        },
        {
            title: "DevOps Project",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_MASTER_PORTFOLIO,
            githubLink: "https://github.com/niloufargit/coding-devops-project",
            description: "master",
            techStack: [],
        },
        {
            title: "Coding Adventure",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_MASTER_PORTFOLIO,
            githubLink: "https://github.com/niloufargit/codingAdventure",
            description: "master",
            techStack: [],
        },
        {
            title: "Open Trading",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_MASTER_PORTFOLIO,
            githubLink: "https://github.com/niloufargit/open-trading",
            description: "Annuel master",
            techStack: [],
        },
        {
            title: "Huffman",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_MASTER_PORTFOLIO,
            githubLink: "https://github.com/niloufargit/huffman",
            description: "master",
            techStack: [],
        },
        {
            title: "EcoBank",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_MASTER_PORTFOLIO,
            githubLink: "https://github.com/niloufargit/EcoBank",
            description: "master",
            techStack: [],
        },
        {
            title: "Mini Game",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_MASTER_PORTFOLIO,
            githubLink: "https://github.com/niloufargit/mini-game",
            description: "licence 2",
            techStack: [],
        },
        {
            title: "Tic Tac Toe",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_MASTER_PORTFOLIO,
            githubLink: "https://github.com/niloufargit/tic-tac-toe",
            description: "licence",
            techStack: [],
        }
    ]
}


const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Mes expériences",
    experiences: [
        {
            orgLink: "https://group.bnpparibas/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "BNP Paribas - Compliance",
            positions: [
                {
                    positionName: "Développeuse Java",
                    duration: "09/2023 - 09/2025",
                    location: "Paris, Île-de-France",
                    workPoints: [
                        "Conception et déploiement d’un DataHub interne (Java Spring, SQL, IBM Cloud, Maven)",
                        "Centralisation et validation structurée (JSON Schema) des données sensibles",
                        "Chaîne de filtrage automatique et processus de relecture métier",
                        "Conformité et exigences réglementaires strictes",
                    ]
                }
            ]
        },
        {
            orgLink: "https://mesvoisinsproducteurs.com/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Mes voisins producteurs",
            positions: [
                {
                    positionName: "Développeuse Python",
                    duration: "04/2023 - 08/2023",
                    location: "Lille",
                    workPoints: [
                        "Automatisation de la migration de données vers Firebase",
                        "Développement d’outils automatisés via API",
                        "GCP : Pub/Sub, Cloud Functions",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.quick.fr/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Quick",
            positions: [
                {
                    positionName: "Équipière polyvalente",
                    duration: "08/2019 - 08/2021",
                    location: "Lille",
                    workPoints: [
                        "Service en salle et polyvalence opérationnelle",
                    ]
                }
            ]
        }
    ]
}


const BachelorsDegree: EducationSection = {
    degreeName: "Licence Informatique",
    duration: "09/2019 - 07/2023",
    universityName: "Université de Lille",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
    websiteLink: "https://www.univ-lille.fr/",
    studyPoints: [
        "Mathématiques discrètes, théorie des graphes, probabilités, statistiques",
        "Programmation orientée Objet et fonctionnelle, logique (syntaxe et sémantique)",
        "Réseaux et système d'exploitation, développement web, détection et correction d'erreurs",
    ]
}

const MastersDegree: EducationSection = {
    degreeName: "Master Lead Développeur",
    duration: "09/2023 - 07/2025",
    universityName: "ESIEE IT / Bschool by BNP Paribas",
    logoImagePath: AssetPaths.EDUCATION_UNISA_LOGO,
    websiteLink: "https://www.esiee-it.fr/fr/campus-paris-montparnasse",
    studyPoints: [
        "Analyse, conception et modélisation (Java, Python)",
        "Base de données (PostgreSQL), Spring, Docker, Kafka",
        "Déploiement intégration continue CI/CD, Sécurité du code, Microservices",
        "Entrepreneuriat, Projet continu en environnement Agile (Scrum, Daily, Jira)",
        "Scalabilité, Angular, Cluster, IA",
    ]
}

const FrenchDiploma: EducationSection = {
    degreeName: "Diplôme de la langue française",
    duration: "01/2017 - 07/2019",
    universityName: "Université de Lille",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
    websiteLink: "https://www.univ-lille.fr/",
    studyPoints: [
        "Formation intensive en langue française",
        "Préparation aux études supérieures en France",
    ]
}



export const AppConfig = {
    loaderSplashAnimation: true,
    logoName: "Niloufar Bayat",
    name: "Niloufar Bayat",
    emailId: "niloufarbayatpro@gmail.com",

    // Home Page
    professionalTitle: "Développeuse Java | Python | Data",
    professionalSummary: "Disponible immédiatement pour un CDI en développement Java, Python, Data En Île-de-France ou à distance.",
    githubProfile: "https://github.com/niloufargit",
    portfolioRepository: "https://github.com/dhruvilrathod/Angular-Master-Portfolio",
    socialMedia: Links,
    aboutMe: [],

    // Projects page
    projectsPageTitle: "",
    projectsPageDescription: "",
    projectSections: [
        PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "",
    experiencePageDescription: "",
    experienceSections: [
        JobExperience,
    ],

    // Education page
    educationPageTitle: "",
    educationPageDescription: "",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
        FrenchDiploma,
    ],


}
