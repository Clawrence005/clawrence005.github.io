// const skillsArray = [
//   "HTML", "CSS", "JavaScript", "JQuery", "Node Js", "Firebase", "Express", "MySQL", "MongoDB", "HandleBars", "PassportJs", "React", "Bootstrap", "Materialize", "Fusion 360", "Photoshop", "Illustrator", "Rhino", "SVG", "SketchUp"

// Javascript
const skillsArray1 = [
  "JavaScript", "JQuery", "NodeJs"
  // < li class="skill-div" > JavaScript</li >
  // <li class="skill-div">jQuery</li>
  // <li class="skill-div">NodeJs</li>

];
// Frontend
const skillsArray2 = [
  "HTML", "CSS", "Bootstrap", "ReactJs", "Materialize", "Material UI"

  // < li class= "skill-div" > Html 5</li >
  // <li class="skill-div">CSS</li>
  // <li class="skill-div">Bootstrap</li> 
  // <li class="skill-div">ReactJs</li>
  // <li class="skill-div">Materialize</li>
  // <li class="skill-div">Material UI</li>
];
// Backend
const skillsArray3 = [
  "Firebase", "Express", "MySQL", "MongoDB", "HandleBars", "PassportJs"
  // <li class="skill-div">Express</li>
  // < li class= "skill-div" > Firebase</li >
  // <li class="skill-div">MySQL</li>
  // <li class="skill-div">MongoDb</li>
];
// Other Skills
const skillsArray4 = [
  "HandleBars", "Photoshop", "Illustrator", "SVG", "Heroku", "Github"
  // < li class= "skill-div" > Handlebars</li >
  // <li class="skill-div">Illustrator</li>
  // <li>Photoshop</li>
  // <li class="skill-div">SVG</li>
  // <li class="skill-div">Heroku</li>
  // <li class="skill-div">Github</li>
];
function skillsTemplate(skills) {
  return ` <div class="skill-category-wrapper">          
  <h3 class="sub-header">JavaScript</h3>
  ${skillsArray1.map(function (skill) {
    return `    <div class="skill-div"><p>${skill}</p></div>`
  }).join('')} 
</div> 

<div class="skill-category-wrapper">  
  <h3 class="sub-header">Front-End</h3>
  ${skillsArray2.map(function (skill) {
    return `    <div class="skill-div"><p>${skill}</p></div>`
  }).join('')} 
  </div> 

  <div class="skill-category-wrapper">  
  <h3 class="sub-header">Backend-End</h3>
  ${skillsArray3.map(function (skill) {
    return `    <div class="skill-div"><p>${skill}</p></div>`
  }).join('')} 
  </div> 

  <div class="skill-category-wrapper"> 
  <h3 class="sub-header">Other Skills</h3>
  ${skillsArray4.map(function (skill) {
    return `    <div class="skill-div"><p>${skill}</p></div>`
  }).join('')} 
  </div> 
  `
}
document.getElementById("app").innerHTML = `
<div class="skill-template">${skillsTemplate(skillsArray1, skillsArray2, skillsArray3, skillsArray4)}</div>`;

// https://stackoverflow.com/questions/31593297/using-execcommand-javascript-to-copy-hidden-text-to-clipboard  #65
function copyContact(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  // alert("Copied the text: " + tempInput.value);
  document.body.removeChild(tempInput);

}