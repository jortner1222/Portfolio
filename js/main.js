
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
    },
    {
        label: "Week 3 Notes",
        url: "../Portfolio/Week3/Week 3 notes.html"
    },
    {
        label: "Week 4 Notes",
        url: "../Portfolio/Week4/Week 4 notes.html"
    },
    {
        label: "Week 5 Notes",
        url: "../Portfolio/Week5/Week 5 notes.html"
    },
    {
        label: "Week 5 Team Project",
        url: "../Portfolio/Week5/hiking-complete.html"
    },
    {
        label: "To-Do List CHallenge",
        url: "../Portfolio/ToDoChallenge/index.html"
    },
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
