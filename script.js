
const skills = [
  { name: "C", icon: "c.jpeg" },
  { name: "C++", icon: "cpp.jpeg" },
  { name: "Java", icon: "java.jpeg" },
  { name: "Python", icon: "python.jpeg" },
  { name: "PowerBI", icon: "powerbi.jpeg" },
  { name: "MySql", icon: "mysql.jpeg" },
  { name: "HTML", icon: "html.jpeg" },
  { name: "CSS", icon: "css.jpeg" },
  { name: "JavaScript", icon: "javascript.jpeg" },
  { name: "React", icon: "react.png" },
  { name: "VsCode", icon: "vscode.jpeg" },
  { name: "AndroidStudio", icon: "android.png" },
];

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach(skill => {
  const card = document.createElement("div");
  card.className = "skill-card";

  const img = document.createElement("img");
  img.src = skill.icon;
  img.alt = skill.name;

  const name = document.createElement("div");
  name.className = "skill-name";
  name.textContent = skill.name;

  card.appendChild(img);
  card.appendChild(name);

  skillsGrid.appendChild(card);
});
 
function downloadResume(){
  const link = document.createElement('a');
  link.href = 'myresume_1.pdf'; 
  link.download = 'myresume_1.pdf';
  link.click();
};





