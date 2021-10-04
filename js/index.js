const refs ={
    buttonClick: document.querySelector('.btn'),
    arrayList: document.querySelector('.arrList'),
    arraySpan: document.querySelector('.arrayArray')
}
//y = x(1.5)
const generateArray = () =>{
    const arr = [];

for(let x = 0; x < 5; x+=0.5){
    let y = Math.pow(x,1.5)
    let item = document.createElement('li');
item.textContent = y.toFixed(1);
refs.arrayList.appendChild(item);
    arr.push(y.toFixed(1))

}
 refs.arraySpan.textContent = `Array = [${arr}]`;
}

 
refs.buttonClick.addEventListener('click', generateArray);