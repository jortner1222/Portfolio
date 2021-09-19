let list = document.getElementById("TableOfContents")
const links =[
    {
        label: "Index",
        url: "../index.html"
    },
   
    {
        label: "Week 1 Notes",
        url: "../Week1/Week 1 notes.html" 
    }
]

links.forEach((item)=> {
let li = document.createElement("li")
let a =document.createElement("a")
a.textContent= item.label
a.setAttribute('href', item.url)
li.appendChild(a);
list.appendChild(li)
})
