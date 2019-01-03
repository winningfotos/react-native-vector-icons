let origin = require('./selection.json').icons;
let result = {};
let sort = origin.sort((a, b)=>{
 return a.properties.code > b.properties.code? 1:-1;
})
sort.forEach((icon)=> {
  result[icon.properties.name] = icon.properties.code
});
console.log(JSON.stringify(result))
