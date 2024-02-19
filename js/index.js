const textOutput=document.getElementById('text-output')
 updateText=()=> {
    let texts= document.querySelector("#text-input").value;
    document.querySelector('#text-output').innerText= texts;
}


makeBold= (elem)=>{
    elem.classList.toggle('active');
    textOutput.classList.toggle('bold');
    console.log(elem);
}


 makeItalic=(elem)=>{
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
    console.log(elem);
}


// function makeUnderline(elem){
//     elem.classList.toggle('active');
//     document.getElementById('text-output').classList.toggle('underline');
//     console.log(elem);
// }

 makeUnderline=(elem)=>{
       elem.classList.toggle('active');
       if(textOutput.classList.contains('underline')){
        textOutput.classList.remove('underline');
       }else{
        textOutput.classList.add('underline');
    }
} 


 alignText=(elem,alignType)=>{
   // elem.classList.toggle('active');
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonList=document.getElementsByClassName('align');
    // for(let i=0; i<buttonList.length; i++){
    //     console.log(buttonList);
    //     console.log(i);
    //     buttonList[i].classList.remove('active');
    // }
    console.log(buttonList);
    for(let value of buttonList){
        value.classList.remove('active');
        console.log(value);
    }

    // buttonList.map = (value)=>{
    //     value.classList.remove('active');
    // }
    elem.classList.toggle('active')
}

