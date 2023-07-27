
function hover(element){
    let img = element.children[0].children[0];
    document.getElementById(img.id).src = "assets/images/"+img.id+"Hover.png"
}

function unhover(element){
    let img = element.children[0].children[0];
    document.getElementById(img.id).src = "assets/images/"+img.id+ ".png"
}


// Project Scripts

numOfProjects = 0;
maxProjectsPerRow = 0;
numOfVisibleProjects = 0;
numOfRows = 1;

window.onload = function() {
    //Show Less should be invisible by default
    document.getElementById("showLessBtn").style.display = "none";

    let num = 0;
    while(true){
        num++;
        let card = document.getElementById("card" + num.toString());
        if(card == null){break;}
    };
    numOfProjects = num - 1;
    maxProjectsPerRow = numOfProjectsPerRow();
    numOfVisibleProjects = maxProjectsPerRow;
    changeVisibility();

}

window.onresize = function() {
    maxProjectsPerRow = numOfProjectsPerRow();
    if(maxProjectsPerRow == 0){
        maxProjectsPerRow = 1;
    }

    numOfVisibleProjects = numOfRows*maxProjectsPerRow;

    changeVisibility();
    
}

function showMore(element){
    numOfRows++;
    numOfVisibleProjects = numOfRows*maxProjectsPerRow;
    document.getElementById("showLessBtn").style.display = "flex";

    if(numOfVisibleProjects >= numOfProjects){
        document.getElementById("showMoreBtn").style.display = "none";
    }
    changeVisibility();
}

function showLess(element){
    numOfRows--;
    numOfVisibleProjects = numOfRows*maxProjectsPerRow;
    document.getElementById("showMoreBtn").style.display = "flex";

    if(numOfRows == 1){
        document.getElementById("showLessBtn").style.display = "none";
    }
    changeVisibility();
}

function numOfProjectsPerRow(){

    let cardWidth = parseInt(getComputedStyle(document.getElementById("card1")).getPropertyValue("width"));
    let padding = parseInt(getComputedStyle(document.getElementById("projectsContainer")).getPropertyValue("padding-right"));
    let gap = parseInt(getComputedStyle(document.getElementById("projectsContainer")).getPropertyValue("gap"));
    let containerWidth = parseInt(getComputedStyle(document.getElementById("projectsContainer")).getPropertyValue("width"));
    
    return Math.floor((containerWidth - 2*padding - gap)/cardWidth);
}

function changeVisibility(){
    for(let i = 1; i < numOfProjects+1; i++){
        if(i > numOfVisibleProjects){
            document.getElementById("card" + i.toString()).style.display = "none";
        }
        else{
            document.getElementById("card" + i.toString()).style.display = "flex";
        }
    }
}