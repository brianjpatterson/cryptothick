(function ($) {
    $(function () {  //document.ready
        
       var ui = new UserInterface($("#gameBoard"));
       
    });
    
    function UserInterface(e) {
   
      
       
       
       
           this.cols = ["a","b","c","d","e","f"."g","h"];
           this.rows = ["1","2","3","4","5","6","7","8"]; 
           
           this.board = function() {
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
                       //var id = this.cols[i] + this.rows[j];
                      
                      // cell.attr("id",id);
                       //row.append(cell);
                   }
                   //this._e.append(row);
               }
              // return this._e;
           }
           
 
    };
    
  
  
  
    
})(jQuery);
    
