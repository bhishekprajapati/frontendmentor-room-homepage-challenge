function Slider(elementID) {
    this._slider = document.getElementById(elementID);
    this._slides = [...this._slider.children];
    this._slideWidth = parseFloat(getComputedStyle(this._slides[0]).width);
    this._currSlideIdx = 0;
    this._slidesCount = this._slides.length;
};

Slider.prototype.nextSlide = function() {
    if (this._currSlideIdx < (this._slidesCount - 1)) {
        ++this._currSlideIdx;
        this._slides.forEach(currSlide=> {
            currSlide.style.transform = `translateX(-${this._slideWidth*(this._currSlideIdx)}px)`;
        });
    }
};


Slider.prototype.prevSlide = function() {
    if (this._currSlideIdx > 0) {
        --this._currSlideIdx;
        this._slides.forEach(currSlide => {
            currSlide.style.transform = `translateX(-${this._slideWidth*(this._currSlideIdx)}px)`;
        });
    }
};

const carousel = new Slider('slider');
const nextSlideBttn = document.getElementById('next-slide');
const prevSlideBttn = document.getElementById('prev-slide');

nextSlideBttn.addEventListener('click', e => carousel.nextSlide());
prevSlideBttn.addEventListener('click', e => carousel.prevSlide());