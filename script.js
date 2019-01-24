var btnAddOne = document.querySelector("#rowOne img"),
    btnAddTwo = document.querySelector("#rowTwo img"),
    btnAddThree = document.querySelector("#rowThree img"),
    rowOneCount = 3,
    rowTwoCount = 3,
    rowThreeCount = 3,
    rowOne = document.querySelector("#rowOne"),
    rowTwo = document.querySelector("#rowTwo"),
    rowThree = document.querySelector("#rowThree")
    rowOneInputs = [],
    rowTwoInputs = [],
    rowThreeInputs = [],
    btnGenerate = document.querySelector(".btnGenerate"),
    txtOutput = document.querySelector("#txtOutput");

btnGenerate.addEventListener('click', function(){
    console.log("generate");
});

btnAddOne.addEventListener('click',function(){
    add(1);
});

btnAddTwo.addEventListener('click',function(){
    add(2);
});

btnAddThree.addEventListener('click',function(){
    add(3);
});


function add(whichRow){
    switch(whichRow){
        case 1:
            if(rowOneCount >= 10)
                return;

            rowOneInputs = document.querySelectorAll(".row1");
            var newInput = document.createElement("input");
            newInput.type = "text";
            newInput.classList.add("row1");
            rowOne.insertBefore(newInput, btnAddOne);
            rowOneCount++;
        break;

        case 2:
            if(rowTwoCount >= 10)
                return;

            rowTwoInputs = document.querySelectorAll(".row2");
            var newInput = document.createElement("input");
            newInput.type = "text";
            newInput.classList.add("row2");
            rowTwo.insertBefore(newInput, btnAddTwo);
            rowTwoCount++;
        break;

        case 3:

            if(rowThreeCount >= 10)
                return;

            rowThreeInputs = document.querySelectorAll(".row3");
            var newInput = document.createElement("input");
            newInput.type = "text";
            newInput.classList.add("row3");
            rowThree.insertBefore(newInput, btnAddThree);
            rowThreeCount++;
        break;
    }
}