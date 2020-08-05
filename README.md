# Web Template

A simple template integranting the following technologies
* Tainwind CSS
* Tainwind UI
* VueJS
* Cleave.js
* Webpack (using laravel Mix)
* Purge CSS (remove all unused css classes in production)

Also contains a sample how to extract css components (TailwindCSS) (https://tailwindcss.com/docs/extracting-components/#extracting-css-components-with-apply)


# How to use
* `git clone git@github.com:Apps-Inteligentes/web-template.git`
* `npm i`
* `npm run dev`


# Run example ge
* Open the `index.html` file OR
* Run a local server. First install `npm install http-server -g` and in this project folder, run `http-server -o` t ostart the server and open the page



# Content
There's one vue Component with TailwindCSS/TainwildUI example. Its located at `resources/components/ExampleComponent.vue`
The button in this example has just the `.btn` class. The extaction of TailwindCSS classes was made in file `resources/sass/app.scss`