(function ($) {
    $(function () {  //document.ready
        
       var gameUI = initUI();
        
       alert("het");
    });
    
    function initUI() {
    
       var ui = {};
       ui.gameBoard = drawBoard($("#gameBoard"));
       
       return ui;
    
    };
    
    function drawBoard(e) {
      
        for(i=0; i<8; i++){
            var row = $("<tr>");
            for(j=0;j<8;j++){
                var cls = j%2===0 ? "black" : "white";
                var cell = $('<td>').addClass(cls);
                row.append(cell);
            }
            e.append(row);
        }
        return e;
    };
    
})(jQuery);
    
