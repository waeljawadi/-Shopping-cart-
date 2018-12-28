const close = (fatimes) => {
     $(fatimes).closest('.one_item').css('margin-top','-100px');
     $(fatimes).closest('.one_item').css('transition','1000ms');
     $(fatimes).closest('.one_item').css('position','relative');
     $(fatimes).closest('.one_item').css('z-index','-100');
     $(fatimes).closest('.one_item *').css('visibility','hidden');

    
    
    
    
    
    setTimeout(function() { $(fatimes).closest('.one_item').remove(); }, 1000);
    
    
    
    
    
}


const add = (plus_item) => {
    $(plus_item).next('input[type="text"]').val(
        Number($(plus_item).next('input[type="text"]').val()) + 1
    );
    if ($(plus_item).next('input[type="text"]').val() < 0) {
        $(plus_item).next('input[type="text"]').val("0")
    }
    var nb_item = $(plus_item).next('input[type="text"]').val();
    var prix_unite = $(plus_item).parent().next('.le_prix').children('.prix-unite').attr("data-prix");
    $(plus_item).parent().next('.le_prix').children('.prix-unite').text(nb_item * prix_unite);
    $(plus_item).parent().next('.le_prix').children('input[type="hidden"]').val(nb_item * prix_unite);
}




//function addhtml()
//{
//    var  htmlcontent_= '<div class="one_item row"><div class="col-xl-1"><i class="fas fa-times somme"></i></div><div class="col-xl-1"><i class="fas fa-heart"></i></div><div class="col-xl-2"><img src="assets/images/images2.jpg" height="70"></div><div class="col-xl-3"> Sbedri<br><small>White</small></div><div class="col-xl-3"><i class="fas fa-plus somme"></i><input type="text" value="0" disabled=""><i class="fas fa-minus somme"></i></div><div class="col-xl-2 le_prix"><span data-prix="500" class="prix-unite"></span><span>€</span><input type="hidden" /></div></div>';
//   return $('.list').append(htmlcontent_);
//}



const min = (min_item) => {
    $(min_item).prev('input[type="text"]').val(
        Number($(min_item).prev('input[type="text"]').val()) - 1
    );
    if ($(min_item).prev('input[type="text"]').val() < 0) {
        $(min_item).prev('input[type="text"]').val("0")
    }
    var nb_item = $(min_item).prev('input[type="text"]').val();
    var prix_unite = $(min_item).parent().next('.le_prix').children('.prix-unite').attr("data-prix");
    $(min_item).parent().next('.le_prix').children('.prix-unite').text(nb_item * prix_unite);
    $(min_item).parent().next('.le_prix').children('input[type="hidden"]').val(nb_item * prix_unite);

}
const sommation = () => {
    var la_somme = 0;
    $('input[type="hidden"]').each(function (e) {
        la_somme = la_somme + Number($(this).val());
        $('.total span').text(la_somme);

    });
}
$(document).ready(function (e) {
    $('.prix-unite').text(0);
    $('.fa-times').click(function (e) {
        close(this);
    });
    $('.fa-plus').click(function (e) {
        add(this);
    });
    $('.fa-minus').click(function (e) {
        min(this);
    });
    $('.somme').click(function (e) {
        console.log(sommation());
    });
    
//    $('.x').on('click',function(){
//        addhtml()
//    });
    
    
    
});



