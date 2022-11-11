function Carousel(config){

    this.container = (typeof config.container === "string") ? 
    document.querySelector(config.container) : config.container;

    this.itens = (typeof config.itens === "string") ? 
    this.container.querySelectorAll(config.itens) : config.itens; 


    this.btnPrev = (typeof config.btnPrev === "string") ? 
    this.container.querySelector(config.btnPrev) : config.btnPrev;

    this.btnNext = (typeof config.btnNext === "string") ? 
    this.container.querySelector(config.btnNext) : config.btnNext;

    // console.log(this.container)
    // console.log(this.itens)


    var _this = this;
    var _currentSlide = 0;

    Init()

    function Init(){
        var _show = _this.container.querySelectorAll('.show');

        _show.forEach((sh) => {
            
            sh.classList.remove('show')
             
        });;
        _this.itens[_currentSlide].classList.add('show');
        _this.btnNext.removeAttribute('style');
        _this.btnPrev.removeAttribute('style');

        addListeners()
    }

        function addListeners(){
            _this.btnNext.addEventListener('click', showNextSlide);
            _this.btnPrev.addEventListener('click', showPrevSlide);
        }

        function showNextSlide(){
            _currentSlide++;
            showSlide()
        }

        function showPrevSlide(){
            _currentSlide--;
            showSlide()
        }

        function showSlide(){
            var qtd = _this.itens.length;
            var slide = _currentSlide % qtd;
            slide = Math.abs(slide);
            // console.log(slide, qtd, _currentSlide);

            // console.log(_this.container.querySelector('.show'))
            _this.container.querySelector('.show').classList.remove('show');
            _this.itens[slide].classList.add('show')

        }




}
