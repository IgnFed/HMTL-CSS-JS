window.addEventListener('load', ()=>{
	
	const spanBurger = document.querySelector('.span-burger'),
        btnBurger = document.querySelector('.burger-container'),
        allContentBody = document.querySelector('.all-content-body'),
        divContainerDisplay = document.querySelector('.div-container'),
        form = document.querySelector('form'),
        nav = document.querySelector('.nav-bar'),
        textarea = document.querySelector('#needs'),
        diagonalSection = document.querySelector('.diagonal-section'),

        buttonCircleSubmit = document.querySelector('div.send > button.circle'),

        

        aElements = document.querySelectorAll('a'),
 
        radioElements = document.querySelectorAll('input[type="radio"');



/* START PREVENT DEFAULTS*/

console.log(radioElements)
buttonCircleSubmit.addEventListener('click', (e)=> e.preventDefault())
         



aElements.forEach(elemento =>{

    elemento.addEventListener('click', (e)=> e.preventDefault())
})

/* END PREVENT DEFAULTS*/


/*START AUTO-SLIDER*/ 

    let counter = 2;

    document.getElementById('radio' + 1).checked = true;

    const sliderInterval = setInterval(()=>{
        console.clear()
        document.getElementById('radio' + counter).checked = false;


        document.getElementById('radio' + counter).checked = true;
        counter++;


        (counter > 4) ? counter = 1
        :
        Continue



    }, 4000)



/*END AUTO-SLIDER*/ 

radioElements.forEach((element, e) =>{

    element.addEventListener('click', e=>{


        counter = element.id[element.id.length - 1];


        sliderInterval();
        
    });

})



window.addEventListener('click', (e)=>{


    if(e.target == btnBurger || e.target == spanBurger){    
        console.log(e)
        form.classList.toggle('active');
        diagonalSection.classList.toggle('active');
        nav.classList.toggle('back');
        allContentBody.classList.toggle('no-display');
        divContainerDisplay.classList.toggle('display');



        if(form.classList.contains('active')){

            btnBurger.style.background = '#1889f3d5'

        }else{

            btnBurger.style.background = ''
        }


    }

})



window.addEventListener('focus', (e)=>{

    if(e.target == textarea){

        textarea.classList.toggle('active')

        form.style.marginTop = '-10px'
        form.style.marginBottom = '-10px'


    }
    

}, true)


window.addEventListener('blur', (e)=>{

    if(e.target == textarea){

        textarea.classList.toggle('active')

        form.style.marginTop = ''
        form.style.marginBottom = ''


    }
    

}, true)
	
	
})