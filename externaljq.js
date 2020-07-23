$(document).ready(function(){
    
    $("#select-chord").click(function(){
        $("#chords").slideToggle("slow");
    });

    $(".chord-btn").click(function(){
        $("#select-chord").text($(this).text());
        $(this).parent().slideToggle("slow");
        $("#extensions").slideToggle("slow");
    })

    $(".extension-btn").click(function(){
        $("#select-chord").text($("#select-chord").text() + " " + $(this).text())
        $("#extensions").slideToggle("slow");
        $("#scales").slideToggle("slow");
    })

});
