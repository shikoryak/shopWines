(function () {
    const slides = [
        `<p>“I really like to please myself with good wine with a rich taste. Therefore, from time to time, I order wine directly from the CaliWines winery. I also buy Chardonnay and Cabernet  for family holidays. We are completely delighted with the amazing taste of these wines, which we want to enjoy endlessly.”</p>`,
        `<p>“We were to hold a responsible event with a buffet table and wanted to surprise our guests with some local products. I recalled that we have the CaliWines winery in California and ordered 10 bottles of Chardonnay. Our guests were delighted and asked for the name of the producer!”</p>`,
        `<p>“Our restaurant has been cooperating with this winery for over 10 years. We order the whole range of wines from them. We are completely satisfied with the quality of the wine supplied to us. And our guests often choose CaliWines from our wine menu.”</p>`
    ];
    let currentSlideIdx = 0;
    const sliderDots = document.querySelector('.slider-dots');
    function showCurrentSlide() {
        const carouselSlide = document.getElementById('carouselSlide');
        carouselSlide.innerHTML = slides[currentSlideIdx];
        addButtons();
    }

    function addButtons() {
        sliderDots.innerHTML = '';
        slides.forEach((slide, index) => {
            const button = document.createElement('button');
            button.classList.add('dot');
            button.dataset.slideIndex = index;
            if (currentSlideIdx === index) {
                button.classList.add('active');
            }
            sliderDots.append(button);
        })
    }

    
    showCurrentSlide();
    addButtons();

    document.querySelector('.slider .arrow-left').addEventListener('click', () => {
        currentSlideIdx--;
        if (currentSlideIdx < 0) {
            currentSlideIdx = slides.length - 1;
        }
        showCurrentSlide();
    })

    document.querySelector('.slider .arrow-right').addEventListener('click', () => {
        currentSlideIdx++;
        if (currentSlideIdx > slides.length - 1) {
            currentSlideIdx = 0;
        }
        showCurrentSlide();
    })

    sliderDots.addEventListener('click', (event) => {
        const slideIndex = event.target.dataset.slideIndex;
        if (slideIndex !== undefined) {
            currentSlideIdx = Number(slideIndex);
            showCurrentSlide();
        }
    })
})();
