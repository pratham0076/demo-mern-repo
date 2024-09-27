function fibo(){
    let range=parseInt(document.getElementById('range').value);
    let n1=0;
    let n2=1;
    let nextnumber=0;
    let ouput=" ";
    for(let i=0;i<range;i++){

        ouput+= n1 + " "
        //console.log(n1," ")
        nextnumber=n1+n2;
        n1=n2;
        n2=nextnumber;
    }
    document.getElementById('result').innerHTML=ouput;
}
fibo()