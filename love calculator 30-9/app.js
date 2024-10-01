const inputoneValue = document.getElementById('inputone');
const inputtwoValue = document.getElementById('inputtwo');
const btnCalculate= document.getElementById('btn-calculate');
const resultdiv=document.getElementById('result-div');


btnCalculate.addEventListener('click',()=>{

    let percentage; 
    if( inputoneValue.value == "" || inputtwoValue.value=="") {
        alert("Please input names");
    }else{
        percentage = Math.floor(Math.random()*100+1);
        resultdiv.innerHTML=`<h1>${percentage}% <h1>`;

        setTimeout (()=>{
            resultdiv.innerHTML="";
        },4000);
    }

    inputoneValue.value= "";
    inputtwoValue.value= "";
});

