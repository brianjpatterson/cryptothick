(function ($) {
    $(function () {  //document.ready
        
       var ui = new UserInterface($("#gameBoard"));
       
    });
    
    function UserInterface(e) {
   
       var obj, ret;

       if (this instanceof UserInterface) {
           if(undefined == UserInterface.o) {
               UserInterface.o = this;
           }
           this._e = e;
           this.data = new Data();
           this.game = new Game();
           this.board = this.game.drawboard(this._e, this.data);
           
       } else {
           obj = new UserInterface();
           ret = UserInterface.apply(obj, arguments);
           return ret === undefined ? obj : ret;
       }
       
       return UserInterface.o;
    };
    
    function Data() {
       
        this.cols = ["a","b","c","d","e","f"."g","h"];
        this.rows = ["1","2","3","4","5","6","7","8"];  
    };
    
    function Game() {
           
           this.drawBoard = function(e,d) {
               alert("gfgh");
              
               var offset = false;
               for(i=0; i<8; i++){
                   
                   var row = $("<tr>");
                   offset = offset === true ? false : true;
                   
                   for(j=0;j<8;j++){
                       
                       var cls = j%2===0 ? 
                           (offset ? "black" : "white"):
                           (offset ? "white" : "black");
                       var cell = $('<td>').addClass(cls);
                       var id = d.cols[i] + d.rows[j];
                      
                       cell.attr("id",id);
                       row.append(cell);
                   }
                   e.append(row);
               }
               return e;
           }
       
       
       
       
       
    
    };
    
  
  
    
})(jQuery);
    
