(function ($) {
    $(function () {  //document.ready
        
       // var gameUI = initUI();
        
       
}}
    });
    
    function initUI() {
    
       var ui = {};
       return ui;
    
    };
    
    function drawBoard(e) {
        var table = $('<table>').addClass('foo');
for(i=0; i<3; i++){
    var row = $('<tr>').addClass('bar').text('result ' + i);
    table.append(row);
}
    };
    
})(jQuery);
    
