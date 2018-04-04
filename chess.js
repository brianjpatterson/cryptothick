(function ($) {
    $(function () {  //document.ready
        
       var gameUI = initUI();
        
       $("content").hide();
    });
    
    function initUI() {
    
       var ui = {};
       ui.gameBoard = drawBoard($("#gameBoard"));
       
       return ui;
    
    };
    
    function drawBoard(e) {
        
        var offset = false;
        for(i=0; i<8; i++){
            var row = $("<tr>");
            offset = offset === true ? false : true;
            for(j=0;j<8;j++){
                var cls = (j%2!==0 && offset) ? "black" : "white";
                var cell = $('<td>').addClass(cls);
                row.append(cell);
            }
            e.append(row);
        }
        return e;
    };
    
})(jQuery);
    
