let myLeads = `["www.awesomelead.com"]`;
myLeads = JSON.parse(myLeads);
myLeads.push("www.epiclead.com");
console.log(myLeads);
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// let Name = localStorage.getItem("myName");
// console.log(Name);
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLead();
});
function renderLead() {
let listItem = "";
for(i=0; i<myLeads.length; i++) {
     // listItem += "<li> <a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>";
      listItem += `<li>
      <a target='_blank' href='${myLeads[i]}'>
      ${myLeads[i]}
      </a>
      </li>
      `
     console.log(listItem);
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
}
ulEl.innerHTML = listItem;
}
