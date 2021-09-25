
const links =[
    {
        label: "Index",
        url: "../Portfolio/index.html"
    },
   
    {
        label: "Week 1 Notes",
        url: "../Portfolio/Week1/Week 1 notes.html" 
    },
    {
        label: "Week 2 Notes",
        url: "../Portfolio/Week2/Week 2 notes.html"
    }
]
let list = document.getElementById("TableOfContents")
function loadList(){
links.forEach((item)=> {
let li = document.createElement("li")
let a =document.createElement("a")
a.textContent= item.label
a.setAttribute('href', item.url)
li.appendChild(a);
list.appendChild(li)
})}
