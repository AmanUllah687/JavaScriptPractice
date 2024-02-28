let myLeads = [];
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.epiclead.com");
// myLeads = JSON.stringify(myLeads);
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// let Name = localStorage.getItem("myName");
// console.log(Name);
localStorage.clear();
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
 inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLead();
    // console.log(localStorage.getItem("myLeads"));
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
     // console.log(listItem);
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
}
ulEl.innerHTML = listItem;
}
