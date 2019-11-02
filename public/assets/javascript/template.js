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
<div class="skill-template">${skillsTemplate(skillsArray)}</div>`


{/* <p>The document.execCommand() method is not supported in IE8 and earlier  */ }

function copyFunction() {
  var copyText = document.getElementById("clipboard-website");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

// function myFunction() {
//   var copyText = document.getElementById("mynput");
//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   document.execCommand("copy");

// var tooltip = document.getElementById("myTooltip");
// tooltip.innerHTML = "Copied: " + copyText.value;
// }

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}


// const copyToClipboard = str => {
//   const el = document.createElement('textarea');  // Create a <textarea> element
//   el.value = str;                                 // Set its value to the string that you want copied
//   el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
//   el.style.position = 'absolute';
//   el.style.left = '-9999px';                      // Move outside the screen to make it invisible
//   document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
//   const selected =
//     document.getSelection().rangeCount > 0        // Check if there is any content selected previously
//       ? document.getSelection().getRangeAt(0)     // Store selection if found
//       : false;                                    // Mark as false to know no selection existed before
//   el.select();                                    // Select the <textarea> content
//   document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
//   document.body.removeChild(el);                  // Remove the <textarea> element
//   if (selected) {                                 // If a selection existed before copying
//     document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
//     document.getSelection().addRange(selected);   // Restore the original selection
//   }
// };