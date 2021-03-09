/* getting the buttons and the input from the html */
let addButton = document.querySelector("#submitadd");
let addInput = document.querySelector("#input");
let clearItemsButton = document.querySelector("#submitclear");
let removeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>`;

/* Adding event listener for the input */
addButton.addEventListener("click",addItem);
addInput.addEventListener("keypress",enterPressed(e));

function addItem()
{
    let input = document.getElementById("input").value;
    if(input)
    {
        addToList(input);
        document.getElementById("input").value = "";

    }
}

function enterPressed(e)
{
    if(13===e.keyCode)
    {
        let input = document.getElementById("input").value;
        if(input)
        {
            addToList(input);
            document.getElementById("input").value = "";
    
        }
    }
}
/* adding the items to the list below the "Grocery Items" heading */
function addToList(input)
{
    let groceryList = document.getElementById("list");
    let item = document.createElement('li');
    item.innerText = input;

    /* creating a container for the button delete */
    let buttons = document.createElement('div');
    buttons.classList.add("buttons");

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;
    remove.addEventListener("click",removeItem);

    buttons.appendChild(remove);
    item.appendChild(buttons);
    groceryList.insertBefore(item,list.childNodes[0]);
    window.alert("The item successfully added")

}

function removeItem()
{
      /* targeting the parent of the button (button -> div -> li)*/
      let item = this.parentNode.parentNode;

      /* (li -> ul)*/
      let parent = item.parentNode;
     
      parent.removeChild(item);
}

clearItemsButton.addEventListener("click",clearAll)
{
    document.getElementById("list").innerHTML="";
}
