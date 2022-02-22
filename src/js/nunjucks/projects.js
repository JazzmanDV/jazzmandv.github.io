import { log } from "console";

const fs = require("fs");
const path = require("path");

const projects = {
    frontend: {
        id: "frontend-projects",
        header: "Front-End проекты",
        assetsDirName: "frontend",
        projectsArray: [
            {
                name: "Сайт-резюме",
                techs: [
                    {
                        name: "HTML",
                        imageName: "html.svg",
                    },
                    {
                        name: "CSS",
                        imageName: "css.svg",
                    },
                    {
                        name: "JavaScript",
                        imageName: "js.svg",
                    },
                    {
                        name: "SwiperJS",
                        imageName: "swiperjs.svg",
                    },
                    {
                        name: "Vite",
                        imageName: "vite.svg",
                    },
                ],
                description:
                    "Вы находитесь здесь :)<br>Небольшой сборник проектов.<br>P.S. Не забудьте оценить и мобильную версию.",
                githubLink: "https://github.com/JazzmanDV/jazzmandv.github.io",
            },
            {
                id: "todo-app",
                name: `SPA "Список дел"`,
                swiperAssetsDirName: "todo-app",
                techs: [
                    {
                        name: "HTML",
                        imageName: "html.svg",
                    },
                    {
                        name: "CSS",
                        imageName: "css.svg",
                    },
                    {
                        name: "JavaScript",
                        imageName: "js.svg",
                    },
                    {
                        name: "React",
                        imageName: "react.svg",
                    },
                    {
                        name: "Redux",
                        imageName: "redux.svg",
                    },
                    {
                        name: "Vite",
                        imageName: "vite.svg",
                    },
                ],
                description: "Одностраничное приложение (SPA) для отслеживания задач (To Do App)",
                iframeLink: "https://jazzmandv.github.io/todo-app",
                projectLink: "/todo-app",
                githubLink: "https://github.com/JazzmanDV/todo-app",
            },
            {
                id: "store-app",
                name: `SPA "Интернет-магазин"`,
                swiperAssetsDirName: "store-app",
                techs: [
                    {
                        name: "HTML",
                        imageName: "html.svg",
                    },
                    {
                        name: "CSS",
                        imageName: "css.svg",
                    },
                    {
                        name: "JavaScript",
                        imageName: "js.svg",
                    },
                    {
                        name: "Vue",
                        imageName: "vue.svg",
                    },
                    {
                        name: "SwiperJS",
                        imageName: "swiperjs.svg",
                    },
                    {
                        name: "Vite",
                        imageName: "vite.svg",
                    },
                ],
                description: "Одностраничное приложение (SPA) с несколькими динамическими страницами и корзиной.",
                iframeLink: "https://jazzmandv.github.io/store-app",
                projectLink: "/store-app",
                githubLink: "https://github.com/JazzmanDV/store-app",
            },
        ],
    },
    fullstack: {
        id: "fullstack-projects",
        header: "Full-Stack проекты",
        assetsDirName: "fullstack",
        projectsArray: [
            {
                id: "service-center",
                name: "Информационная система для компьютерного сервисного центра",
                swiperAssetsDirName: "service-center",
                techs: [
                    {
                        name: "HTML",
                        imageName: "html.svg",
                    },
                    {
                        name: "CSS",
                        imageName: "css.svg",
                    },
                    {
                        name: "Bootstrap",
                        imageName: "bootstrap.svg",
                    },
                    {
                        name: "Python",
                        imageName: "python.svg",
                    },
                    {
                        name: "Flask",
                        imageName: "flask.svg",
                    },
                    {
                        name: "MySQL",
                        imageName: "mysql.svg",
                    },
                ],
                description:
                    "Учебный проект для компьютерного сервисного центра, который помогает оформлять, отслеживать и оперировать заявками по ремонту компьютерной техники как клиентам, так и сотрудникам.",
            },
        ],
    },
    embedded: {
        id: "embedded-projects",
        header: "Embedded проекты",
        assetsDirName: "embedded",
        projectsArray: [
            {
                id: "pic-project",
                name: "Проект по переводу шестнадцатеричного числа в восьмеричное число для микроконтроллера PIC16F877A",
                swiperAssetsDirName: "pic-project",
                techs: [
                    {
                        name: "C++",
                        imageName: "c++.svg",
                    },
                ],
                description:
                    "Учебный проект для микроконтроллера PIC16F877A по переводу шестнадцатеричного числа в восьмеричное число.<br>Результат перевода числа сохраняется во внешнюю EEPROM (один из видов энергонезависимой памяти).",
                githubLink: "https://github.com/JazzmanDV/pic-project",
            },
        ],
    },
};

for (const specificProjects in projects) {
    for (const project of projects[specificProjects].projectsArray) {
        if (project.swiperAssetsDirName) {
            project.swiperAssets = fs.readdirSync(
                path.resolve(
                    __dirname,
                    `../../img/projects/${projects[specificProjects].assetsDirName}/${project.swiperAssetsDirName}`
                )
            );
        }
    }
}

export default projects;
