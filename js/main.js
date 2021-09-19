
const links =[
    {
        label: "Index",
        url: "../index.html"
    },
   
    {
        label: "Week 1 Notes",
        url: "https://github.com/jortner1222/Portfolio/blob/main/Week1/Week%201%20notes.html" 
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
