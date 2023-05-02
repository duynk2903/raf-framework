<p align="center">
  <a href="https://github.com/duynk2903/react-ant-framework" target="blank"><img src="https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg" width="120" alt="Nest Logo" /></a>
</p>
 <p align="center">A Frontend <a href="https://github.com/duynk2903/react-ant-framework" target="_blank">raf.js</a> framework for building efficient and scalable, fast builder UI client-side applications.</p>
    <p align="center">
<a href="#" target="_blank"><img src="https://img.shields.io/npm/v/core.svg" alt="NPM Version" /></a>
<a href="#" target="_blank"><img src="https://img.shields.io/npm/l/core.svg" alt="Package License" /></a>
<a href="#" target="_blank"><img src="https://img.shields.io/npm/dm/common.svg" alt="NPM Downloads" /></a>
<a href="#" target="_blank"><img src="https://coveralls.io/repos/github/raf/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="#" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

## Background
In React when building a new app. Developers have to create the source base and spend a lot of time on common initialization, setting up the UI base, and developers will spend a lot of time on UI design, form drawing. So we built a framework that can design UI by drag and drop then export code, AI integration, theme setting, layout config is quick and easy to extend, so developers won't spend a lot of time creating source base and write core logic.

## Feature
<p>🖼 Designable, You can quickly develop forms at low cost through Form Builder.</p>
<p>🚀 High performance, fields managed independently, rather rerender the whole tree.</p>
<p>💡 Integrated Open AI that support user find solution, translate language, generate code comment</p>
<p>🎨 Easy to create base layout, override ui style by using theme setting</p>
<p>🏅 Use React lazy with no suspense. High performance to lazy load module, component</p>
<p>🌯 Write react code with separate UI and Logic. No styles in component</p>
<p>💡 Easy to integrate with Jenkins, Nginx, Sonarqube, Docker by common config</p>
<p>🎨 Easy to style component using Tailwind css framework</p>

### Library
- This application using list of libraries:

| Name                               | Version                | Note                                        |
|------------------------------------|------------------------|---------------------------------------------|
| React                              | ^18.2.0                |                                             |
| React dom                          | ^18.2.0                |                                             |
| React router dom                   | ^6.10.0                | Using for config router in application      |
| CRA                                | 5.0.1                  | CLI for manage config, build application    |
| Typescript                         | 4.9.5                  |                                             |
| Ant design                         | ^5.4.6                 | The ui framework for create UI              |
| Ant design icon                    | ^5.0.1                 |                                             |
| @ant-design/plots                  | ^1.2.5                 |                                             |
| aos                                | ^2.3.4                 | The library support create animation scroll |
| axios                              | ^1.2.2                 | The library use for call API                |
| env-cmd                            | ^10.1.0                |                                             |
| eslint                             | 8.22.0                 |                                             |
| husky                              | ^8.0.2                 |                                             |
| i18next                            | ^22.4.6                |                                             |
| lodash                             | 4.17.20                |                                             |
| openai                             | ^3.2.1                 |                                             |
| prettier                           | ^2.8.7                 |                                             |
| react-cookie                       | ^4.1.1                 |                                             |
| react-hook-form                    | 7.41.3                 |                                             |
| recoil                             | ^0.7.6                 |                                             |
| React query                        | 4.24.10                |                                             |
| sass                               | ^1.62.0                |                                             |
| sonarqube-scanner                  | ^3.0.1                 |                                             |
| sweetalert2                        | ^11.7.3                |                                             |
| tailwindcss                        | ^3.3.1                 |                                             |
| yup                                | ^0.32.11               |                                             |
| dayjs                              | ^1.11.7                |                                             |
| immer                              | ^10.0.1                |                                             |
| Jest                               | latest                 |                                             |

## Prerequisites for environment development:
1. Node version 16
2. Npm version 8
3. Git

This application use list technical for coding convention, coding format bellow:
1. Prettier
2. Eslint
3. Husky

### Scripts
1. Start dev mode: `npm run start:dev`
2. Start product mode: `npm run start:prod`
3. Start product mode: `npm run start:prod`
4. Install node_module: please run `npm i`
5. Build dev mode: please run `npm run build:dev`
6. Build product mode: please `run npm run build:prod`

Check code style, pre-commit
1. Format with Prettier: run `npm run format`
2. Check lint: this project use check eslint on save. Run `npm run lint:fix` and check issue

## Deploy
This project use `Dockerfile` and `Jenkinsfile`, `docker-compose.yml` to deploy application to server You can see the Job of Jenkins in server link:

@author: Tommy