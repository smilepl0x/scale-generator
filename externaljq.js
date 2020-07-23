$(document).ready(function(){
    
    $("#select-chord").click(function(){
        $("#triad").slideToggle("slow");
    });

    $(".triad-btn").click(function(){
        $("#select-chord").text($(this).text());
        $(this).parent().slideToggle("slow");
        $("#seventh").slideToggle("slow");
    })

    $(".seventh-btn").click(function(){
        $("#select-chord").text($("#select-chord").text() + " " + $(this).text())
        $(this).parent().slideToggle("slow");
        $("#extensions").slideToggle("slow");
    })

    $(".extension-btn").click(function(){
        $("#select-chord").text($("#select-chord").text() + " " + $(this).text())
        $("#extensions").slideToggle("slow");
        $("#scales").slideToggle("slow");
    })

});
