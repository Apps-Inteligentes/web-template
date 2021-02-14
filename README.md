# Web Template

A simple template integranting the following technologies
* Tainwind CSS v2 (with Purge CSS)
* Tainwind UI
* VueJS v3
* Cleave.js
* Webpack (using laravel Mix)

Also contains a sample how to extract css components (TailwindCSS) (https://tailwindcss.com/docs/extracting-components/#extracting-css-components-with-apply)


# How to use
* `git clone git@github.com:Apps-Inteligentes/web-template.git`
* `npm i`
* `npm run dev` to compile. or `npm run watch` to recompile on every file change. 
* `npm run prod` to build the code optimized for production. Among other things, it will merge and minify the css files and remove all unused css

# Run example
* Open the `index.html` file OR
* Run a local server. First install `npm install http-server -g` and in this project folder, run `http-server -o` t ostart the server and open the page



# Content
There's one vue Component with TailwindCSS/TainwildUI example. Its located at `resources/components/PricingComponent.vue`
The button in this example has just the `.btn` class. 

The extaction of TailwindCSS classes was made in file `resources/sass/buttons.scss` and explained here: (https://tailwindcss.com/docs/extracting-components/#extracting-css-components-with-apply)
