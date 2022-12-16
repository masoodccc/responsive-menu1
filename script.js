let navbar =document.querySelector('.navbar');
let btnnavbar= document.querySelector('.btnnavbar');
let backdrop= document.querySelector('.backdrop');
btnnavbar.addEventListener('click',()=> {
   
    if ( navbar.style.display ==='block' ) {
        navbar.style.display= 'none';
        backdrop.style.display ='none';
    }
        else
        { 
         navbar.style.display='block';
         backdrop.style.display ='block';
    }
    
})
backdrop.addEventListener('click', ()=> {
    navbar.style.display= 'none';
    backdrop.style.display ='none';
})
