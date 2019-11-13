$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).parent(".card").find(".svg-inline--fa").removeClass("fa-plus").addClass("fa-minus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".svg-inline--fa").removeClass("fa-plus").addClass("fa-minus");
        $(this).parent(".card").find(".card-header").addClass("bg-white border-bottom-0");
        $(this).parent(".card").addClass("border-success");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".svg-inline--fa").removeClass("fa-minus").addClass("fa-plus");
        $(this).parent(".card").find(".card-header").removeClass("bg-white border-bottom-0");
        $(this).parent(".card").removeClass("border-success");
    });
});