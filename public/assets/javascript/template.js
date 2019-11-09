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

// https://stackoverflow.com/questions/31593297/using-execcommand-javascript-to-copy-hidden-text-to-clipboard  #65
function copyContact(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  alert("Copied the text: " + tempInput.value);
  document.body.removeChild(tempInput);

}