let result=document.getElementById('input');
function display(value){
   result.value +=value;
}
function clearscreen(){
   result.value="";
}
function cl(){
    let p=result.value;
    result.value=p.slice(0,-1);
}
function calculate(){
    let p=result.value;
    let q=eval(p);
    result.value=q;
}
console.log(typeof result.value)