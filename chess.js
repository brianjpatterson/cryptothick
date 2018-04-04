(function ($) {
    $(function () {  //document.ready
        
       var gameUI = initUI();
        
       $("content").hide();
    });
    
    function initUI() {
    
       var ui = {};
       ui.gameData = initData();
       ui.gameBoard = drawBoard($("#gameBoard"));
       
       return ui;
    
    };
    
    function initData() {
        
        var dat = {};
        
        dat.cols = ["a","b","c","d","e","f","g","h"];
        dat.rows = [1,2,3,4,5,6,7,8];
        
        return dat;
    }
    
    function drawBoard(e) {
        
        var offset = false;
        for(i=0; i<8; i++){
            var row = $("<tr>");
            offset = offset === true ? false : true;
            for(j=0;j<8;j++){
                var cls = j%2===0 ? 
                           (offset ? "black" : "white"):
                           (offset ? "white" : "black");
                var cell = $('<td>').addClass(cls);
                var id = ui.gameData.cols[j] + ui.gameData.rows[i].toString;
                cell.attr("id",id);
                row.append(cell);
            }
            e.append(row);
        }
        return e;
    };
    
})(jQuery);
    
