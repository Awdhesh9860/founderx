const accordians = document.querySelectorAll('.accordian');


accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answerr = accordian.querySelector('.answerr');

    accordian.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answerr.style.maxHeight = null;

        }
        else {
            icon.classList.add('active');
            answerr.style.maxHeight = answerr.scrollHeight + 'px';
        }
    })
})


const cross=documentd.querySelector('.cross-icon');
cross.addEventListener('click',()=>{
    console.log("tha iscon is clicked");
})