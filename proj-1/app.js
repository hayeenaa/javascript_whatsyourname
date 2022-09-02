
function app() {
    let chAns = "<br></br><h>ERROR: u just do not answer.</h>";
    let chNull = "<br></br><h>ERROR: null.</h><br><h4>Warning: Do not change the tab when Q&A</h4>";
    let chNullcntr = "ERROR: null.";
    let erNullcntr = "Warning: Do not change the tab when Q&A";
    let chAnscntr = "ERROR: u just do not answer.";
    let myName = window.prompt("What's your name?");

    console.log("Your name is "+myName+".");
    document.write("Your name is "+myName+"."+"<br></br>");

    let myFname = window.prompt("What's your full name?")

    console.log("Your full name is "+myFname+".");
    document.write("Your full name is "+myFname+"."+"<br>  </br>");

    if (myName, myFname === "") {
        document.write(chAns);
        console.error(chAnscntr);
    } if (myName, myFname === null) {
        document.write(chNull);
        console.error(chNullcntr);
        console.warn(erNullcntr);
    }
}

app();