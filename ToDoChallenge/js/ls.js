export function readFromLS(key){
    var toDoList=null; 
    if (JSON.parse(localStorage.getItem(key))!= null)
    toDoList = JSON.parse(localStorage.getItem(key));

    return toDoList; 
}

export function writeToLS(key,new_toDo){
    //var new_data = document.getElementById("newItem").value;
   // localStorage.setItem(key,'[]')

  
       var old_data= JSON.stringify(localStorage.getItem(key));
       old_data += JSON.stringify(new_toDo);
       if (key != undefined){
       localStorage.setItem(key, old_data);
  }


   /* var string= JSON.stringify(localStorage.getItem(key)); 
    console.log ("string is" +  string)
    var old_data= JSON.parse(string); 
    console.log("parse is"+ old_data);
    old_data.push(new_toDo); 
    localStorage.setItem(key, JSON.stringify(old_data));
    */
}
