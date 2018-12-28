const close = (fatimes) => {
    $(fatimes).closest('.one_item').remove();
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





});