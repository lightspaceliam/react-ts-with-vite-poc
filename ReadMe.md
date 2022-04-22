# React TypeScript With Vite POC

## Preamble

After being asked to investigate the possibilities of converting the work React TypeScript project to Vite, I decided to create a POC before committing to migrating our monolith to Vite.

This is an MVP React TypeScript POC to investigate the benefits of Vite. Initial findings include:

- Blindingly fast transpiling / build times – sometimes I refresh the page because Vite has rebuilt the app before I look at the browser
- I use Jest and React Testing Library to unit test. The default set up provided by Vite required simple but additional configuration
- I'm using React 18 for the first time. I noticed some issues with `createContext` and `useContext` generating errors in the console window, probably my fault...
- After creating the very bare minimum MVP project, due to everything transpiling so fast, I decided to go further to see if I could slow down Vite's speed by adding CRUD (still working on it) and Material UI with no success (that's a good thing ;-D)

### Requirements

- npm version 7 or greater. To update: `npm install -g npm@latest`
- node 14 or greater. Go to [Node Downloads](https://nodejs.org/en/download/) and get the latest LTS version

## Get Started

In this context I will run all commands in CMD on Windows 10.

- Navigate to your directory of choice
- Clone the project: `git clone https://github.com/lightspaceliam/react-ts-with-vite-poc.git`
- Navigate to the root of the project: `cd \{your-directory-location}\react-ts-with-vite-poc`
- Install node modules: `npm install`
- Run the project: `npm run dev`

### Process

In this context I will run all commands in CMD on Windows 10.

- In CMD navigate to directory of choice
- Create app
	- NPM v < 7 run: `npm init vite@2.8.0 {project-name} --template react-ts`
	- **What I did:** NPM 7^ run: `npm init vite@latest {project-name} -- --template react-ts`
- You may be prompted to install updates for Vite. Type `y` and hit enter.
- Navigate into the directory {project-name}: `cd {project-name}`
- Install node modules: `npm install`
- Run the app: `npm run dev` 

## Unit Testing Support

1. Install required node modules:
```
npm install -D jest @types/jest;
npm install -D ts-node ts-jest;
```
2. Configure Jest in the root of your project by creating a `jest.config.ts` file:
```ts
export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}
```
3. Update the default `scripts` node in the `package.json`.
```json
{
    ...
    "scripts": {
        ...
        "test": "jest"
  },
  ...
}
```

## References

- [Vite](https://vitejs.dev/)
- [Migrating a Create React App (CRA) application to Vite](https://www.darraghoriordan.com/2021/05/16/migrating-from-create-react-app-to-vite/)
- [Creating a TypeScript React Application with Vite](https://developer.okta.com/blog/2022/03/14/react-vite-number-converter)
- [Quick Jest Setup With ViteJS, React, & TypeScript](https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f)
- [Quick Jest Setup With ViteJS, React, & TypeScript](https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f)
