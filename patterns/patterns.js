//square pattern
function square(){
for (let i = 0; i < 5; i++)
{
    for (let j = 0; j < 5; j++)
    {
            //console.log("*");
            document.write("*")
    }
    document.write("<br>")
}
}

//triangle pattern

function triangle(){
    for (let i = 0; i < 5; i++)
    {
        for (let j = 0; j < i+1; j++)
        {
                //console.log("*");
                document.write("*")
        }
        document.write("<br>")
    }
}

//inverted triangle 
function inverted_triangle(){
    for (let i = 0; i < 5; i++)
    {
        for (let j = 5; j > i; j--)
        {
                //console.log("*");
                document.write("*")
        }
        document.write("<br>")
    }
}

