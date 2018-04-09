(function ($) {
    $(function () {  //document.ready
        
       var ui = new UserInterface();
       var e = ui.board($("#gameBoard"));
       
       
    });
    
    function UserInterface() {
   
           this.board = function(e) {
               
              
        
         
       
        var c = ["a","b","c","d","e","f","g","h"];
         var r = ["1","2","3","4","5","6","7","8"]; 
           
               var offset = false;
               for(i=0; i<8; i++){
                   
                   var row = $("<tr>");
                   offset = offset === true ? false : true;
                   
                   for(j=0;j<8;j++){
                       
                       var cls = j%2===0 ? 
                           (offset ? "black" : "white"):
                           (offset ? "white" : "black");
                       var cell = $('<td>').addClass(cls);
                       var id = c[i] + r[j];
                      
                    cell.attr("id",id);
                     //  var tid = cell.attr("id");
                       cell.innerHTML = "tte";
                       row.append(cell);
                   }
                  e.append(row);
               }
              return e;
           }
           
 
    };
    
  
  
  
    
})(jQuery);
    
