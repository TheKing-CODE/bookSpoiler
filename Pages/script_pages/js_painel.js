$(function(){
    $('.barra-lateral ul li').hover(
        function() {
        // Mostrar o elemento relacionado
            $(this).find('.text-pag').css('display', 'inline');
               
            },
            function() {
                // Ocultar o elemento relacionado
                $(this).find('.text-pag').css('display', 'none');
            }
    );
});