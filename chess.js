(function ($) {
    $(function () {  //document.ready
        
       var ui = new UserInterface($("#gameBoard"));
       
    });
    
    function UserInterface(e) {
    
       
           this.game = new Game(e);
        
        return this;
           
           };
    
    function Game(e) {
    
        
        
           var parent = this;
    
           this.data = {
               "cols" : ["a","b","c","d","e","f"."g","h"],
               "rows" : [1,2,3,4,5,6,7,8]
           }
       
           this.board = this.drawBoard(e);
           
           this.drawBoard = function(e) {
               
               this.parent = parent;
               var offset = false;
               for(i=0; i<8; i++){
                   
                   var row = $("<tr>");
                   offset = offset === true ? false : true;
                   
                   for(j=0;j<8;j++){
                       
                       var cls = j%2===0 ? 
                           (offset ? "black" : "white"):
                           (offset ? "white" : "black");
                       var cell = $('<td>').addClass(cls);
                       var id = this.parent.data.cols[i] + this.parent.data.rows[j].toString();
                       alert(id+"id");
                       cell.attr("id",id);
                       row.append(cell);
                   }
                   e.append(row);
               }
               return e;
           }
       
       
       
       
       return this;
    
    };
    
  
  
    
})(jQuery);
    
