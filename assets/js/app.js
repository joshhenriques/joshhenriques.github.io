
function hover(element){
    let img = element.children[0].children[0];
    document.getElementById(img.id).src = "assets/images/"+img.id+"Hover.png"
}

function unhover(element){
    let img = element.children[0].children[0];
    document.getElementById(img.id).src = "assets/images/"+img.id+ ".png"
}