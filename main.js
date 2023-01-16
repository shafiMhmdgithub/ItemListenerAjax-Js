var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event

form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);
//function for the event 
function addItem(e) {
    e.preventDefault();
    //get input values
    var newItem = document.getElementById('item').value;
    //Create new li

    var li = document.createElement('li');
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete btn element

    var deleteBtn = document.createElement('buttton')
        //Add class to the deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
        //Append Text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append the child
    li.appendChild(deleteBtn)
        //add li to the ul class name itemList

    itemList.appendChild(li);

}

//Remove Item

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure to delete!')) {
            //we catch the parent element li
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//filter items

function filterItems(e) {
    //convert to the lower case
    var text = e.target.value.toLowerCase();
    //Get list
    var items = document.getElementsByTagName('li');
    //Convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })

}