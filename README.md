# Javascript-Learning-with-First-Principles

https://www.w3schools.com/js/js_whereto.asp

Setup web server and npm

https://www.dotnettricks.com/learn/nodejs/setting-up-vs-code-for-nodejs-development



https://www.npmjs.com/package/serve

So npx serve to start server

https://stackoverflow.com/questions/45592581/cannot-debug-in-vscode-by-attaching-to-chrome

n a terminal, execute /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

https://github.com/Microsoft/vscode-chrome-debug


add in bootstarp

https://getbootstrap.com/docs/4.4/getting-started/download/

https://medium.com/@sreejithezhakkad/how-to-start-a-web-app-project-using-bootstrap-with-npm-webpack-185e510a782e

 npm install bootstrap jquery popper.js --save


# Start Here


This looks like a good setup intro

https://getbootstrap.com/docs/4.4/getting-started/introduction/


 https://coursetro.com/posts/design/72/Installing-Bootstrap-4-Tutorial

Lets use Gulp as our build tool
 https://gulpjs.com


 All this is done from the Application directory

1. Start with this site https://gulpjs.com/docs/en/getting-started/quick-start
2. NPM was installed , and npx  
   1. Try node --version
   2. Try npm --version
   3. Try npx --version
   4. Try npm install gulp
   5. Test using gulp --tasks
3. Installed Gulp using sudo npm install --global gulp-cli
4. all the gulp package in your devDependencies 
   1. npm install --save-dev gulp
5. Verify your gulp versions
   1. gulp --version
6. Create a gulpfile
    Using your text editor, create a file named gulpfile.js in your project root with these contents:

    function defaultTask(cb) {
    // place code for your default task here
    cb();
    }

    exports.default = defaultTask
7. Test it - Run the gulp command in your project directory:
   1. gulp


## Further reading - JavaScript and Gulpfiles
https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles

### Gulpfile explained
A gulpfile is a file in your project directory titled gulpfile.js (or capitalized as Gulpfile.js, like Makefile), that automatically loads when you run the gulp command. Within this file, you'll often see gulp APIs, like src(), dest(), series(), or parallel() but any vanilla JavaScript or Node modules can be used. Any exported functions will be registered into gulp's task system.

This is a cool explanation
https://gulpjs.com/docs/en/getting-started/creating-tasks


## Next Step Installing Bootstrap
https://coursetro.com/posts/design/72/Installing-Bootstrap-4-Tutorial

We did a bunch of setup above, 

1. Now lest install bootstarp
   1. npm install bootstrap --save