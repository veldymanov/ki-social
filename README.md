# KI Social

## Directory structure

```
docs/                     - Production app
                            'docs/' folder name has chosen for hosting in GitHub Pages when needed.
                                To create the 'docs/' run 'gulp build'
                                To start browser-sync run 'gulp build:server'
node_modules/             - NPM modules. Created after 'npm install'
src/                      - Development app
    css/                  - All scss and css files
    fonts/                -
    imgages/              -
    js/                   -
    favicon.ico           -
    index.html            -
.gitignore                -
gulpfile.js               -
package.json              -
README.md                 -
```

## Gulp
###  Prepare system
#### Install Git. Use Git Bash.
#### Install Node.js and NPM
```
    //check node version
    node -v
    //check npm version
    npm -v
```
#### Install global NPM packages
```
    npm install gulp-cli -g
        //check gulp version
        gulp -v

	npm install -g browser-sync
        //check browser-sync version
        browser-sync --version

    npm install -g npm-check
        //check npm-check version
        npm-check --version
```

### Run The Project
#### Inside "../zapleo_new/" install npm packages
````
    npm install
````
#### Check packages versions (works in Windows cmd):
```
    npm-check -u
```
#### Run the project (inside "../zapleo_new/")
````
    gulp
````
#### Save changes
````
    git status
    git add .
    git commit -m "write comments!!!!"
    git push
````
#### Pictures (.jpg, .png, .gif, .svg) optimizing, and creating .webp (from .jpg, .png)
````
    All pictures inside 'src/images/' directory will be optimized.
    Optimized pictures will get ".z" (*.z.{png, jpg, gif, svg, webp}) suffix, which shows that picture is optimized.
    Original pictures will be deleted.

    To start optimization run (inside "../zapleo_new/"):
        gulp pic
````
#### Create production version of the app (in 'docs/' directory):
````
    gulp build
     //run browser-sync for build
     gulp build:server
````

### Resourses
````
  kidesign.io
  kisocial.io
  https://app.zeplin.io/project/597a88924d00aed3c6c6fe29
````

### Pages
````
  https://veldymanov.github.io/ki-social/
  https://veldymanov.github.io/ki-social/wordpress-hubspot.html
  https://veldymanov.github.io/ki-social/secure-comunication.html
  https://veldymanov.github.io/ki-social/audit-solutions.html
  https://veldymanov.github.io/ki-social/data-liberation.html
  https://veldymanov.github.io/ki-social/complience-solutions.html
````