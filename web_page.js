let btn = document.getElementById('btn');
btn.addEventListener('click',() =>{
    alert('눌럿냐?')
})
    
let red_btn = document.getElementById('red_btn');
let content = document.getElementById('content');
    
    red_btn.addEventListener('click',()=>{
        content.style.background='red';
    });

    blue_btn.addEventListener('click',()=>{
        content.style.background='blue';
    });

    
    green_btn.addEventListener('click',()=>{
        content.style.background='green';
    });