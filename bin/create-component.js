#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.cyanBright('creating your component'));

const prompt = await inquirer.createPromptModule();

const { componentName } = await prompt({
    type: 'input',
    name: 'componentName',
    message: 'enter the name of the component',
});

const { componentType } = await prompt({
    message: 'choose component type',
    type: 'list',
    name: 'componentType',
    choices: ['common', 'layout', 'pages', 'forms'],
});

const componentNameUppercase =
    componentName[0].toUpperCase() + componentName.substring(1);

const tsxTemplate = fs.readFileSync(
    path.resolve(__dirname, './templates/tsx.txt')
);
const interfaceTemplate = fs.readFileSync(
    path.resolve(__dirname, './templates/types.txt')
);
const storyTemplate = fs.readFileSync(
    path.resolve(__dirname, './templates/story.txt')
);
const specTemplate = fs.readFileSync(
    path.resolve(__dirname, './templates/spec.txt')
);
const indexTemplate = fs.readFileSync(
    path.resolve(__dirname, './templates/index.txt')
);

const componentFile = tsxTemplate
    .toString()
    .replace(/temp/g, componentNameUppercase);

const interfaceFile = interfaceTemplate
    .toString()
    .replace(/temp/g, componentNameUppercase);

const storyFile = storyTemplate
    .toString()
    .replace(/temp/g, componentNameUppercase);

const specFile = specTemplate
    .toString()
    .replace(/temp/g, componentNameUppercase);

const indexFile = indexTemplate
    .toString()
    .replace(/temp/g, componentNameUppercase);

fs.mkdirSync(
    path.resolve(
        __dirname,
        `../src/components/${componentType}/${componentNameUppercase}`
    )
);
const resolvedPath = path.resolve(
    __dirname,
    `../src/components/${componentType}/${componentNameUppercase}`
);

fs.writeFileSync(`${resolvedPath}/index.ts`, indexFile);
fs.writeFileSync(
    `${resolvedPath}/${componentNameUppercase}.tsx`,
    componentFile
);
fs.writeFileSync(`${resolvedPath}/${componentNameUppercase}.module.css`, '');
fs.writeFileSync(`${resolvedPath}/${componentNameUppercase}.spec.ts`, specFile);
fs.writeFileSync(
    `${resolvedPath}/${componentNameUppercase}.story.tsx`,
    storyFile
);
fs.writeFileSync(
    `${resolvedPath}/${componentNameUppercase}.types.ts`,
    interfaceFile
);

console.log(chalk.cyanBright('your component is ready to use!'));
