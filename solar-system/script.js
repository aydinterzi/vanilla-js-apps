function calculate(){
    result.innerHTML=`<p  style="color: white;">The weight of the object on ${planet.value} = ${mass.value}</p>`
}

const mass=document.getElementById('mass');
const planet=document.getElementById('planets');
const result=document.getElementById('result');