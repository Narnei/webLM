window.onload = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      mostrarDatos(this);
    }
  };
  xhttp.open("GET", "presentacion.xml", true);
  xhttp.send();
};
function mostrarDatos(xml) {
  var xmlDoc = xml.responseXML;
  var skills = presentacion.getElementsByTagName("skill");
  var paragraphs = presentacion.getElementsByTagName("parrafo");
  

  
  var skillsList = index.getElementById("skills-list");
  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i].childNodes[0].nodeValue;
    var li = index.createElement("li");
    li.innerHTML = skill;
    skillsList.appendChild(li);
  }
  var presentationDiv = index.getElementById("presentacion");
  for (var j = 0; j < paragraphs.length; j++) {
    var paragraph = paragraphs[j].childNodes[0].nodeValue;
    var p = index.createElement("p");
    p.innerHTML = paragraph;
    presentationDiv.appendChild(p);
  }
}
