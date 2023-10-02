let result = localStorage.getItem('result');
if(!result){
    result='';
}
document.querySelector('.p1').innerHTML=`${result}`;
function updateCalculation(value){
    result += `${value}`;
    document.querySelector('.p1').innerHTML=`${result}`;
    localStorage.setItem('result',result);
}