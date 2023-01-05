function Slider(elementID, titleID, descriptionID, textContent) {
    this._slider = document.getElementById(elementID);
    this._titleEl = document.getElementById(titleID);
    this._descriptionEl = document.getElementById(descriptionID);

    this._slides = [...this._slider.children];
    this._slideWidth = parseFloat(getComputedStyle(this._slides[0]).width);
    this._currSlideIdx = 0;
    this._slidesCount = this._slides.length;
    this._textContent = textContent;
};

Slider.prototype.init = function() {
    this.renderSlideTextContent(0);
};

Slider.prototype.isFirstSlide = function() {
    return this._currSlideIdx === 0;
};
 
Slider.prototype.isLastSlide = function() {
    return this._currSlideIdx === (this._slidesCount - 1);
};

Slider.prototype.renderSlideTextContent = function(idx) {
    this._titleEl.textContent = this._textContent[idx]['title'];
    this._descriptionEl.textContent = this._textContent[idx]['description'];
};

Slider.prototype.nextSlide = function() {
    if (!this.isLastSlide()) {
        ++this._currSlideIdx;
        this._slides.forEach(currSlide=> {
            currSlide.style.transform = `translateX(-${this._slideWidth*(this._currSlideIdx)}px)`;
        });
        this.renderSlideTextContent(this._currSlideIdx);
    }
};

Slider.prototype.prevSlide = function() {
    if (!this.isFirstSlide()) {
        --this._currSlideIdx;
        this._slides.forEach(currSlide => {
            currSlide.style.transform = `translateX(-${this._slideWidth*(this._currSlideIdx)}px)`;
        });
        this.renderSlideTextContent(this._currSlideIdx);
    }
};

const sliderTextContent = [
    {
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
];

const carousel = new Slider('slider', 'slide-title', 'slide-description', sliderTextContent);
carousel.init();

const nextSlideBttn = document.getElementById('next-slide');
const prevSlideBttn = document.getElementById('prev-slide');

nextSlideBttn.addEventListener('click', e => carousel.nextSlide());
prevSlideBttn.addEventListener('click', e => carousel.prevSlide());