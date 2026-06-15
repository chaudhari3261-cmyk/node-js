const myDate=(() =>{
    function getCrrentDate(){
        const now = new Date();
        return now.toDateString();

    }

     function getCrrentTime(){
        const now = new Date();
        return now.toTimeString();

    }
     function getCurrentDateTime(){
        const now = new Date();
        return now.toString();
     }
     return{
        getCrrentDate,
        getCrrentTime,
        getCurrentDateTime
      
     };
  
})();
console.log("cuurent date",myDate.getCrrentDate());
console.log("currente time",myDate.getCrrentTime());
console.log("current date & time",myDate.getCurrentDateTime());