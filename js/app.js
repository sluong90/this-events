//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
var divElem = document.getElementsByClassName('navi');
for(var i = 0; i<divElem.length; i++){
    divElem[i].addEventListener('click', showInner);
}
function showInner(){
    var getInner = this.querySelectorAll('.inner')[0];
    if(getInner.style.display === 'block'){
        getInner.style.display = 'none';
    }else{
        getInner.style.display = 'block'
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



