var rate = document.querySelectorAll('.rate');
var thankYou = document.querySelector('.thankyou');
var container = document.querySelector('.container');
var btn = document.querySelector('button');
var span = document.querySelector('.demo span');
var att = document.querySelector('.attribution');
var back = document.querySelector('.back');

window.addEventListener('load',function(e){
    container.classList.add('show');
    att.classList.add('attr');
    
})

rate.forEach(foreach);

function foreach(each){
    each.addEventListener('click',function(e){

        rate.forEach(remove);
        
         if( each.style.backgroundColor == ''){
           each.style.backgroundColor = 'hsl(25, 97%, 53%)';
           var text = each.textContent;
        } else{
            each.style.backgroundColor = '';
        }
            span.textContent = Number(text);
    })
}


function remove(each){
    each.style.backgroundColor = '';
}


btn.addEventListener('click',function(e){
   
  thankYou.style.display = 'block';
  thankYou.classList.add('show');
  container.style.display = 'none';
 
    
})

back.addEventListener('click',function(e){
    container.style.display = 'block';
    container.classList.add('show');
    thankYou.style.display = 'none';
    rate.forEach(remove);
    span.textContent = 0;
  
})