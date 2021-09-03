$(function(){
	 $('.wrap-depoimentos').slick({
		dots: true,
	    arrows:false,
	    speed:1000,
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    pauseOnHover:false,
	    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }],
    });

	 	const menuBar = document.querySelector('.top-header .mobile>h3');

	 	menuBar.addEventListener('click', (event) => {
		 		/*
					menu mobile usando classes CSS
			 		let conteudoBar = event.target.parentElement.parentNode.querySelector('ul');

			 		if(conteudoBar.classList.contains('mostrar')){
			 			conteudoBar.classList.remove('mostrar');
			 			conteudoBar.classList.add('recolher');
			 		}else{
			 			conteudoBar.classList.add('mostrar');
			 		}
		 		*/
		 		$('.top-header .mobile>ul').slideToggle();
	 	});
})