document.addEventListener("DOMContentLoaded", function () {


            let voiceProgress = 0;
            let riddleProgress = 0;


            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            if (window.location.pathname == "/html/arg.html"){
                console.log("01");
                function voiceText(txt){
                    document.getElementById("voice").innerHTML = txt
                    return txt;
                }
            }

            voiceText("salutations");
            
            function progressVoice(){
                console.log(voiceProgress)
                switch(voiceProgress){
                    case 0:
                        voiceText("welcome to my lair");
                        break;
                    case 1:
                        voiceText("wasn't that hard to find, was it?");
                        break;
                    case 2:
                        voiceText("it's a bit empty in here");
                        break;
                    case 3:
                        voiceText("not a whole lot to do")
                        break;
                    case 4:
                        voiceText("do try to dig beneath the surface, though")
                        break;
                    case 5:
                        voiceText("just don't get lost in the sea")
                        document.getElementById("voiceBtn").style.display = "none";
                        document.getElementById("textRiddle").style.display = "block";
                        document.getElementById("textRiddleSubmit").style.display = "block";
                        break;
                    
                }
                voiceProgress += 1;
            }

            function checkRiddle(riddleGuess){
                switch(riddleGuess){
                    case "sun":
                        voiceText("yay");
                        break;

                }
            }

            function getRiddleInput(){
                let riddleGuess = document.getElementById("textRiddle").value;
                console.log(riddleGuess);
                checkRiddle(riddleGuess);
            }

            document.getElementById("voiceBtn").onclick = progressVoice;
            document.getElementById("textRiddleSubmit").onclick = getRiddleInput;

            }
        );