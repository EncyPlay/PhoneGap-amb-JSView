window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        viewA: {
            url: '/Inici',
            template: 'views/Inici.html',
            controller: 'Inici'
        },
        viewB: {
            url: '/Sol',
            template: 'views/Sol.html',
            controller: 'Sol'
        },
        viewC: {
            url: '/Mercuri',
            template: 'views/Mercuri.html',
            controller: 'Mercuri'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });
     
    /*Asign view start*/
    $JSView
        .initView('Inici');
 
}, false);
