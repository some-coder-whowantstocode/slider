const slides = document.querySelectorAll('.slide');
const goprev = document.querySelector("#goprev");
const gonext = document.querySelector("#gonext");

var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const next = () => {
    counter++;
    
    if(counter == (slides.length)){
        counter =0;
    }
    slideimg();
    console.log('hi')
}

const goback = () =>{
    counter--;
    if(counter ==0){
        counter = (slides.length)-1;
    }
    slideimg();
    console.log('hi')
}

const slideimg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
setInterval(next,4000)