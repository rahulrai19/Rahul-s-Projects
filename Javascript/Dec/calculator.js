
        function pick(val){
            document.getElementById("a").value += val;
        }
        function solve(){
        try {
            var x = document.getElementById("a").value; 
            var y = eval(x);
             document.getElementById("a").value = y;
             } 
             catch (error) {
                 document.getElementById("a").value = "Error";
                 }
                }
             function clr(){
                document.getElementById("a").value = "";
             }
             