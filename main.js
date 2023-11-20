//Service Worker
if('serviceWorker' in navigator){
    console.Log('Puedes usar los serviceWorker del navegador');

    navigator.serviceWorker.register('./sw.js')
                           .then(res => console.Log('serviceWorker cargado correctamente', res))
                           .catch(err => console.Log('serviceWorker no se ha podido registrar', err))
}else {
    console.Log('NO Puedes usar los serviceWorker del navegador');
}

//scroll suavizado
$(document).ready(function(){

    $("#menu a").click(function(e){
        e.preventDefault();
        
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
            
        });
        return false;
    });

});
