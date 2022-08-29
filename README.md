# React-starter

## the new neat react starter ⚛️ ⭐️

---

### 📁 Folder structure

📞 API: where you write your API calls
<br>

⚙️ [components: is where you write your components](#️-component-folder)
<br>

🎆 assets: any assets (images and global css)
<br>

⚛ atoms: recoil atoms or jotai
<br>

🎙 context: your context API
<br>

🪝 hooks: costume made hooks (like useTheme)
<br>

📚 lib: any library that has been configured to work in a certain way (like axios)
<br>

🔵 types: types and interfaces
<br>

🛠 utils: utility function

---

### ⚙️ component folder

this folder includes four types of components
<br>

-   🔩 common: reusable components such as a Bottom
-   🏘 layout: for layout component (nav bar)
-   📝 forms: login form, register data forms
-   📜 pages: for component pages

---

## 📂 Folders accessing

to access any folder type '@' in the import

<br>

`import { useFetch } from '@hooks'`
<br>

instead of

`import { useFetch } from '../hooks'`

except for components there're two ways
<br>

-   `import { Button } from '@components'`
    <br>
    we found this to be inconvenie for large projects because getting the component type would be better
    <br>
-   `import { Button } from '@components/common'`
    <br>
    now we know that `Button` is a reusable component
    <br>
    as for the rest of the component type, here's an example:
    <br>

    -   `import { NavBar } from '@components/layout'`
    -   `import { Login } from '@components/forms'`
    -   `import { Main } from '@components/pages'`
    -   `import { Button } from '@components/common'`
        <br>
        ps: remember to use the `index.ts` file
        <br>

    you can use this syntax with any of the folders and you can add your folders to this convention, just add it to the ts config and vite config files

---

### 👩‍💻 CLI

to create a component run `npm run cc` <br>
cc stands for 'create component'

---

### 🖱 ⌨️ Usage

1- rename the `.env.example` to `.env`

2- get to know the architecture

---

### 🕍 Architecture

-   use either the useFetch hook or create function and put them inside the "API" folder but stick ti either using hooks or writing functions an example of the useFetch

-   always after writing component or a hook or an API, remember to import it in the index file then exporting it
