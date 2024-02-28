let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const  leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLead();
}
 inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLead();
});
function renderLead() {
let listItem = "";
for(i=0; i<myLeads.length; i++) {
      listItem += `<li>
      <a target='_blank' href='${myLeads[i]}'>
      ${myLeads[i]}
      </a>
      </li>
    `
}
ulEl.innerHTML = listItem;
}
