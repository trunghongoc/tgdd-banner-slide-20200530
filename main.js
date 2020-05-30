window.onload = (event) => {
    const slides = document.getElementById('slides')
    const slidesWrap = slides.querySelector('.wrap')
    const slideWidth = 800

    // tính chiều rộng của slide
    const imgs = slidesWrap.getElementsByClassName('slide')
    const totalImg = imgs.length
    const totalWidth = totalImg * slideWidth
    slidesWrap.style.width = totalWidth + 'px'

    // lấy 2 nút next và prev trên slide
    const nextBtn = slides.querySelector('.next')
    const prevBtn = slides.querySelector('.prev')

    // vị trí phía bên trái
    let left = 0

    // theo dõi sự kiện khi click vào nút next
    nextBtn.addEventListener('click', function() {
        left = left - slideWidth
        if (left <= -totalWidth) {
            left = 0
        }
        slidesWrap.style.left = left + 'px'
    })

    // theo dõi sự kiện khi click vào nút prev
    prevBtn.addEventListener('click', function() {
        left = left + slideWidth
        if (left >= 0) {
            left = -(totalWidth - slideWidth)
        }
        slidesWrap.style.left = left + 'px'
    })

    // tự động chạy slides
    let autoLoopSlide = setInterval(function() {
        nextBtn.click()
    }, 3000)

    // hủy tự động chạy slide khi hover vào #slides
    slides.addEventListener('mouseenter', function() {
        console.log('-----dừng')
        clearInterval(autoLoopSlide)
    })
    // khi di chuột ra khỏi slide thì khởi động lại việc chạy tự động
    slides.addEventListener('mouseleave', function() {
        console.log('----chạy lại')
        autoLoopSlide = setInterval(function() {
            nextBtn.click()
        }, 3000)
    })
}
