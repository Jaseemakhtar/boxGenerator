console.log("Connected");
var btnAddOne = document.querySelector("#rowOne img"),
    btnAddTwo = document.querySelector("#rowTwo img"),
    btnAddThree = document.querySelector("#rowThree img"),
    rowOneCount = 3,
    rowTwoCount = 3,
    rowThreeCount = 3,
    rowOne = document.querySelector("#rowOne"),
    rowTwo = document.querySelector("#rowTwo"),
    rowThree = document.querySelector("#rowThree")
    rowOneInputs = document.querySelectorAll(".row1"),
    rowTwoInputs = document.querySelectorAll(".row2"),
    rowThreeInputs = document.querySelectorAll(".row3"),
    btnGenerate = document.querySelector(".btnGenerate"),
    txtOutput = document.querySelector("#txtOutput"),
    rowOneValues = [],
    rowTwoValues = [],
    rowThreeValues = [];

btnGenerate.addEventListener('click', function(){
    generateNums();
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
            
            var newInput = document.createElement("input");
            newInput.type = "text";
            newInput.classList.add("row1");
            rowOne.insertBefore(newInput, btnAddOne);
            rowOneCount++;
            rowOneInputs = document.querySelectorAll(".row1");
        break;

        case 2:
            if(rowTwoCount >= 10)
                return;
            
            var newInput = document.createElement("input");
            newInput.type = "text";
            newInput.classList.add("row2");
            rowTwo.insertBefore(newInput, btnAddTwo);
            rowTwoCount++;
            rowTwoInputs = document.querySelectorAll(".row2");
        break;

        case 3:

            if(rowThreeCount >= 10)
                return;

            var newInput = document.createElement("input");
            newInput.type = "text";
            newInput.classList.add("row3");
            rowThree.insertBefore(newInput, btnAddThree);
            rowThreeCount++;
            rowThreeInputs = document.querySelectorAll(".row3");
        break;
    }
}

function generateNums(){
    rowOneValues = [];
    rowTwoValues = [];
    rowThreeValues = [];

    for(var i = 0; i < rowOneInputs.length; i++){
        var sin = rowOneInputs[i].value;
        sin = sin.trim();
        if(sin == ""){
            //
        }else{
            rowOneValues.push(sin);
        }
    }
    for(var i = 0; i < rowTwoInputs.length; i++){
        var sin = rowTwoInputs[i].value;
        sin = sin.trim();
        if(sin == ""){
            //
        }else{
            rowTwoValues.push(rowTwoInputs[i].value);
        }
    }
    for(var i = 0; i < rowThreeInputs.length; i++){
        var sin = rowThreeInputs[i].value;
        sin = sin.trim();
        if(sin == ""){
            //
        }else{
            rowThreeValues.push(rowThreeInputs[i].value);
        }
    }
    var counter = 0;
    for(var i = 0; i < rowOneValues.length; i++){
        for(var j = 0; j < rowTwoValues.length; j++){
            for(var k = 0; k < rowThreeValues.length; k++){
                var str = rowOneValues[i] + "" + rowTwoValues[j] + "" + rowThreeValues[k];
                txtOutput.value = txtOutput.value + str + ", ";
                console.log(str);
                counter++;
            }
        }
    }
    var str = txtOutput.value;
    str = str.substring(0, str.lastIndexOf(",")) + ".";
    txtOutput.value = str;
    console.log(counter);

}
