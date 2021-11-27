var counter = 1;
        setInterval(function(){
            document.getElementById('radio'+ counter).checked = true;
            counter ++;
            if(counter >4){
                counter=1;
            }
        },5000);


const headerBar = document.querySelector('.js-bar');

const headerSliderBar= document.querySelector('.js-header__siler-bar');

const closeBar =document.querySelector('.js-header__siler-bar-close')

//Ham hien thi modal mua ve, them class open vao model
function show(){
    headerSliderBar.classList.add('open');
}
//ham an , go bo class open cua model
function hideSliBar(){
    headerSliderBar.classList.add('close')
}
//nghe hanh vi click
headerBar.addEventListener('click',show)


//nghe hanh vi click
closeBar.addEventListener('click',hideSliBar)
