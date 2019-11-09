const skillsArray = [
  "HTML", "CSS", "JavaScript", "JQuery", "Node Js", "Firebase", "Express", "MySQL", "MongoDB", "HandleBars", "PassportJs", "React", "Bootstrap", "Materialize", "Fusion 360", "Photoshop", "Illustrator", "Rhino", "SVG", "SketchUp"
];

function skillsTemplate(skills) {
  return `
  ${skillsArray.map(function (skill) {
    return `    <div class="skill-div"><p>${skill}</p></div>`
  }).join('')} 
  `
}
document.getElementById("app").innerHTML = `
<div class="skill-template">${skillsTemplate(skillsArray)}</div>`;

// https://www.geeksforgeeks.org/how-to-copy-the-text-to-the-clipboard-in-javascript/
function copyContact() {
  /* Get the text field */
  var copyContactText = document.getElementById("contactInput");

  /* Select the text field */
  copyContactText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyContactText.value);
}  