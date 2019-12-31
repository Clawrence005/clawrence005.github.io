// ~~~~~~~~~~~~~~~~~~~1st attempt ~~~~~~~~~~~~~~~~~~~`
// Javascript
const skillsArray1 = [
  "JavaScript", "JQuery", "NodeJs"
];
// Frontend
const skillsArray2 = [
  "HTML", "CSS", "Bootstrap", "ReactJs", "Materialize", "Material UI"
];
// Backend
const skillsArray3 = [
  "Firebase", "Express", "MySQL", "MongoDB", "HandleBars", "PassportJs"
];
// Other Skills
const skillsArray4 = [
  "Photoshop", "Illustrator", "SVG", "Heroku", "Github"
];
//Soft Skills
// const skillsArray5 = [
//   "Creativity", "Driven"
// ];

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

// ~~~~~~~~~~~~~~~~~~~2nd attempt ~~~~~~~~~~~~~~~~~~~`
// let skillsThing = [
//   // Javascript
//   array1 = [
//     "JavaScript", "JQuery", "NodeJs"
//   ],
//   // Frontend
//   array2 = [
//     "HTML", "CSS", "Bootstrap", "ReactJs", "Materialize", "Material UI"
//   ],
//   // Backend
//   array3 = [
//     "Firebase", "Express", "MySQL", "MongoDB", "HandleBars", "PassportJs"
//   ],
//   // Other Skills
//   array4 = [
//     "Photoshop", "Illustrator", "SVG", "Heroku", "Github"
//   ],
//   array5 = [
//     "Creativity", "Driven"
//   ],
// ];

// function skillsTemplate(skills) {

//   // let rows = skillsThing.length;
//   // for (let i = 0; i < rows; i++) {

//   //   let items = skillsThing[i].length;
//   //   console.log(i, items)
//   //   for (let n = 0; n < items; n++) {
//   //     console.log(skillsThing[i][n]);
//   //     `<p>${this.skillsThing[i][n]}</p>`
//   //   }
//   // }

//   let rows = skillsThing.length;
//   for (i = 0; i < skillsThing.length; i++) {


//     let items = skillsThing[i].length;
//     for (n = 0; n < skillsThing.length; n++) {
//       return ` <div class="skill-category-wrapper" style="border: solid 2px red">          
//     ${skillsThing.map(function (skill) {

//         return `      <h3 class="sub-header">
//       ${skill[0]}
//       </h3> 
//       <div class="skill-div" style="border: solid 2px blue"><p>
//       ${skill}

//       </p></div>
//             `
//       }).join('')}    
//   </div> `  }
//   };
// };
// document.getElementById("app").innerHTML = `
// <div class="skill-template">${skillsTemplate(skillsThing)}</div>`;

// ~~~~~~~~~~~~~~~~~~~3rd attempt ~~~~~~~~~~~~~~~~~~~`
// let skillInception = {
//   skillsField: [
//     { area: 'Javascript', skills: ["JavaScript", "JQuery", "NodeJs"] },
//     { area: 'Frontend', skills: ["HTML", "CSS", "Bootstrap", "ReactJs", "Materialize", "Material UI"] },
//     { area: 'Backend', skills: ["Firebase", "Express", "MySQL", "MongoDB", "HandleBars", "PassportJs"] },
//     { area: 'Other Skills', skills: ["Photoshop", "Illustrator", "SVG", "Heroku", "Github"] },
//     { area: 'Soft Skills', skills: ["Creativity", "Driven"] }
//   ]
// };

// function skillsTemplate(skills) {
//   let chars = skillInception['skillsField'];
//   `<div>`
//   for (let i = 0; i < chars.length; i++) {
//     return `<div  style="border: solid 2px red">${chars[i].area} <div  style="border: solid 2px blue">${chars[i].skills}</div></div>
// `
//   } `</div>`
// }
// document.getElementById("app").innerHTML = `
// <div class="skill-template">${skillsTemplate(skillInception)}</div>`;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

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
  // copyContact();