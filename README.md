# React-starter

## the new neat react starter ⚛️ ⭐️

---

### 📁 Folder structure

📞 API: where you write your API calls
<br>

⚙️ components: is where you write your components
<br>

🎆 assets: any assets (images and global css)
<br>

⚛ atoms: recoil atoms
<br>

🎙 context: your context API
<br>

📝 forms: login form, register data forms
<br>

🪝 hooks: costume made hooks (like useTheme)
<br>

🏘 layout: for layout component (nav bar)
<br>

📚 lib: any library that has been configured to work in a certain way (like axios)
<br>

📜 pages: for component pages
<br>

🔵 types: types and interfaces
<br>

🛠 utils: utility function

---

## 📂 Folders accessing

to access any folder type '@' in the import

<br>

`import { Button } from '@components'`
<br>

instead of

`import { Button } from '../components'`

<br>
you can use this syntax with any of the folders and you can add your folders to this convention, just add it to the ts config and vite config files

---

### 🖱 ⌨️ Usage

1- rename the `.env.example` to `.env`

2- get to know the architecture

---

### 🕍 Architecture

-   use either the useFetch hook or create function and put them inside the "API" folder but stick ti either using hooks or writing functions an example of the useFetch

-   always after writing component or a hook or an API, remember to import it in the index file then exporting it
