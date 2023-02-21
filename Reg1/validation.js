function test()
{
    var name=document.getElementById("nameuser").value;
    var number=document.getElementById("num").value;
    var password=document.getElementById("pass").value;
    var address=document.getElementById("area").value;
    if(name == "")
    {
        document.getElementById("username").innerHTML="Please Enter UserName"
    }
    if(number == ""||number.length<=10)
    {
        document.getElementById("number").innerHTML="Please Enter proper 10-digit number";
    }
    if(password=="")
    {
       document.getElementById("userpass").innerHTML="Please Enter your password";
    }
    if(password.length<6&&password.length>8)
    {
       document.getElementById("userpass").innerHTML="Password must be miniumum 6 caharacters and maximum 8 characters";
    }
    if(address == "")
    {
        document.getElementById("addr").innerHTML="Please Enter your address";

    }
    return false;
}