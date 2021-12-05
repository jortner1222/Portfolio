function getComments(list) {
    return JSON.parse(localStorage.getItem(list) || []);
     }
  
    function storeComments(listkey, listdata) { 
      localStorage.setItem(listkey, JSON.stringify(listdata));
    }
    
 let comments = [];
   function addComment(hikeName) {
       console.log("in function");
    let newComment = {
        name: hikeName,
        date: new Date(),
        content: document.getElementById("commentInput").value
      };
        if (localStorage.getItem("comments") !== null) {
          comments = getComments("comments");
        }
        comments.push(newComment);
        storeComments("comments", comments);
        document.getElementById("commentInput").value = "";
        addSection(comments);
      }

      function addSection(arr) {
          document.getElementById("commentOutput").innerHTML = "";
          let list = document.getElementById("commentOutput");
          for (let i = 0; i < arr.length; i++) {
            let section = document.createElement("section");
            section.innerHTML =
              "<p>" +
              arr[i].content +
             "</p>";
            list.appendChild(section);
          }
      }
      window.addComment = addComment;

    export { getComments, storeComments, addComment, addSection };