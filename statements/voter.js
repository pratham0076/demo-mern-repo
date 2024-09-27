
function findvoter(){
    let age=-20;
/*
    const output=(age>=18) ? "Person is voter" : "person is not voter";
    console.log(output)
    document.getElementById("result").innerHTML=output;
*/
    if(age>=18)
    {
        //console.log("Person is voter");
        document.getElementById('result').innerHTML="Person is Voter and age is"+age;
    }
    else if(age<0){
        document.getElementById('result').innerHTML="Age is not valid";
    }
    else{
        //console.log("Person is voter");
        document.getElementById('result').innerHTML="Person is not Voter and age is"+age;
    }
}
findvoter();