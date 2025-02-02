function convert(){
    let input = document.getElementById("inputtext").value;
    if(input==""){
        alert("First enter text please...");
        return
    }
   let voice = new SpeechSynthesisUtterance(input);

   window.speechSynthesis.speak(voice);

}