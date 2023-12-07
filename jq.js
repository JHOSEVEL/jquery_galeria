//esconder formulario
$(document).ready(function(){


   $('header button').click(function(){
        $('form').slideDown();
   })

   $('#cancelar').click(function(){
        $('form').slideUp();
   })

   $('form').on('submit', function(e){
    e.preventeDefault();
    

    //add imagens
    const nimage = $('#N_image').val(); 
    const novoItem = $('<li></li>');

    $(`<img src="${nimage}" />`).appendTo(novoItem);
    $(`
        <div class="over-lay">
            <a herf="${nimage}" taget= "_blamk">
                ver imagem tamnho real
            </a>

        </div>
    
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();
    $('#N_image').val('');
   })

})
