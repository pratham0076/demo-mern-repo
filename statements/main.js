//let toc,cn,dbms,dsa,cpp;
function getresult(){

    let toc =parseInt(document.getElementById("toc").value);
    let cn = parseInt(document.getElementById("cn").value);
    let dbms = parseInt(document.getElementById("dbms").value);
    let dsa = parseInt(document.getElementById("dsa").value);
    let cpp = parseInt(document.getElementById("cpp").value);
    let totalM=toc+cn+dbms+dsa+cpp;
    let percentage=(totalM/500)*100;

    document.getElementById('totalM').innerHTML="Total Marks are: "+totalM;
    document.getElementById('percentage').innerHTML="Percentage: "+percentage+"%";

    if(percentage>=90 && percentage<=100){
        document.getElementById('grade').innerHTML="Grade is A";
    }
    else if(percentage>=80 && percentage<90){
        document.getElementById('grade').innerHTML="Grade is B";
    }
    else if(percentage>=70 && percentage<80){
        document.getElementById('grade').innerHTML="Grade is C";
    }
    else if(percentage>=60 && percentage<70){
        document.getElementById('grade').innerHTML="Grade is D";
    }
    else if(percentage>=0 && percentage<60){
        document.getElementById('grade').innerHTML="You are failed";
    }
    else{
        document.getElementById('grade').innerHTML="Invalid marks";
    }
}