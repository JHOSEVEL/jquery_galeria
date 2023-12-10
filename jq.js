//esconder formulario
$(document).ready(function(){


   $('header button').click(function(){
        $('form').slideDown();
   })

   $('#cancelar').click(function(){
        $('form').slideUp();
   })

   $('form').on('submit', function(e){
    e.preventDefault();
    

    //add imagens
    const nimage = $('#N_image').val(); 
    const novoItem = $('<li style="display: none"></li>');

    $(`<img src="${nimage}" />`).appendTo(novoItem);
    $(`
        <div class="over-lay">
            <a herf="${nimage}" taget= "_blank">
                ver imagem tamnho real
            </a>

        </div>
    
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(2000);
    $('#N_image').val('');
   })

})
