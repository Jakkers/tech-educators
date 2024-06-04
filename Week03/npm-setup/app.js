// the old fasioned way of importing data
// const cowsay = require("cowsay"); //commonjs

//the new flashy way of importing data
//for ES6 to work, we need to specify the type of app that we are running in the package.json
import cowsay from "cowsay"; //ES6

console.log(cowsay.say({ text: "I am a moooooooodule", e: "0o", t: "Y " }));
