function addClickHandlers() {
    var docButton = $('a.documentation-change-view')
    docButton.click(function(){
        $.get(docButton.data('documentation-change-view-url'), function() {
            location.reload();
        });
    });
}

$('document').ready(function() {
    $(".scroll-left").scrollLeft();
    addClickHandlers();
});
