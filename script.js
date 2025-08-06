document.getElementById("add").addEventListener("click", function(){
    const taskName = document.getElementById("input").value.trim();
    if(taskName!==""){
        const to_do = document.createElement("div");
        to_do.classList.add("todoItems");
        to_do.style.display="flex";
        to_do.style.justifyContent="space-between";
        to_do.style.alignItems="center";
        to_do.style.width="100%";
        to_do.style.fontWeight="bold";
        
        const taskText = document.createElement("span");
        taskText.innerText = taskName;
        taskText.style.color="white";
        taskText.style.textAlign="center";
        taskText.style.fontSize="20px";
        taskText.style.whiteSpace = "nowrap";
        taskText.style.overflow = "hidden";
        taskText.style.textOverflow = "ellipsis";
        taskText.style.width = "30vw";
        
        const complete = document.createElement("button");
        complete.innerHTML=`<i class="fa-regular fa-square-check"></i>`;
        complete.style.color="white";
        complete.addEventListener("click", function(){
            if(complete.innerHTML===`<i class="fa-regular fa-square-check"></i>`){
                complete.innerHTML=`<i class="fa-solid fa-square-check"></i>`;
                complete.style.color="green";
            }
            else{
                complete.innerHTML=`<i class="fa-regular fa-square-check"></i>`
                complete.style.color="white";
            }
        })
        complete.style.padding="5px";
        complete.style.border="none";
        complete.style.background="transparent";
        complete.style.borderRadius="5px";
        complete.style.fontSize="25px";
        complete.style.cursor="pointer";

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML=`<i class="fa-solid fa-trash"></i>`;
        deleteBtn.addEventListener("click", function(){
            to_do.remove();
        });
        deleteBtn.addEventListener("mouseenter", function(){
            deleteBtn.style.color="red";
        });
        deleteBtn.addEventListener("mouseleave", function(){
            deleteBtn.style.color="white";
        });
        deleteBtn.style.padding="5px";
        deleteBtn.style.fontSize="18px";
        deleteBtn.style.background="transparent";
        deleteBtn.style.border="none";
        deleteBtn.style.borderRadius="5px";
        deleteBtn.style.cursor="pointer";
        deleteBtn.style.color="white";

        to_do.appendChild(complete);
        to_do.appendChild(taskText);
        to_do.appendChild(deleteBtn);
        document.getElementById("list").appendChild(to_do);
        document.getElementById("input").value="";
    }
    else{
        alert("Please Enter Task Name");
    }
})