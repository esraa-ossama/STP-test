//set all page color
document.getElementById("colorBtn").addEventListener("click",function changeColor(){
    const divisions = document.querySelectorAll("div");
    let x = document.getElementById('clr').value;
    for(var division of divisions) {
        division.style.color = x;
    }
} );

//counter to date (hint: days must be in the same month)
document.getElementById("timer").addEventListener("click",function setTimer(){
    
        var y = setInterval(function() {
        let startInput = document.getElementById('start').value;
        let endInput = document.getElementById('end').value;
        document.getElementById("demo").innerHTML = " ";
        var startDate = new Date(startInput).getDate();
        var endDate = new Date(endInput).getDate();
        var result = endDate - startDate;

        if (result < 0) {
            clearInterval(y);
            document.getElementById("demo").innerHTML = " ";
        }
    
        document.getElementById("demo").innerHTML = result + "d ";
        startInput.setDate(startInput.getDate + 1);
        
    },1000);
});