'use sctrict'

const mobileBtn = document.querySelector('.header-mobile__btn');
const mobileMenu = document.querySelector('.header__container');
const mobileNav = document.querySelector('.header__end');

if(mobileBtn) {
    mobileBtn.addEventListener('click', function(){
        if(mobileMenu.style.height) {
            mobileMenu.style.height = null
            document.querySelector('body').style.overflow = 'auto'
            mobileMenu.classList.remove('active')
        }else{
            mobileMenu.style.height = '100vh'
            document.querySelector('body').style.overflow = 'hidden'
            mobileMenu.classList.add('active')
        }
    });
}

const animStart = document.querySelectorAll('._anim-start');
if(animStart.length > 0) {
    for (let index = 0; index < animStart.length; index++) {
        const animSt = animStart[index];
        function showText(){
            animSt.classList.add('_active');
        }
        setTimeout(showText, 100);
    }
}

// scroll anim
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');

                }
            }
            
        }

    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        
    }

    animOnScroll()
}