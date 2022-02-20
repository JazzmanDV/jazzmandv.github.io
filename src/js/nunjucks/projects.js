import { log } from "console";

const fs = require("fs");
const path = require("path");

const projects = [
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
        ],
        description:
            "Вы находитесь здесь :)<br>Небольшой сборник проектов.<br>P.S. Не забудьте оценить и мобильную версию.",
        githubLink: "https://github.com/JazzmanDV/jazzmandv.github.io",
    },
    {
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
        ],
        description: "Одностраничное приложение (SPA) для отслеживания задач (To Do App)",
        buttonTryIframeLink: "https://jazzmandv.github.io/todo-app",
        projectLink: "/todo-app",
        githubLink: "https://github.com/JazzmanDV/todo-app",
    },
    {
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
        ],
        description: "Одностраничное приложение (SPA) с несколькими динамическими страницами и корзиной.",
        buttonTryIframeLink: "https://jazzmandv.github.io/store-app",
        projectLink: "/store-app",
        githubLink: "https://github.com/JazzmanDV/store-app",
    },
];

for (const project of projects) {
    if (project.swiperAssetsDirName) {
        project.swiperAssets = fs.readdirSync(
            path.resolve(__dirname, `../../img/projects/frontend/${project.swiperAssetsDirName}`)
        );
        console.log(projects);
    }
}

export default projects;
