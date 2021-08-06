
function test()
{
    console.log("TESTING SUCCESS!!");
}

function validateForm()
{
    var phoneNumber = document.getElementById('phoneNumber').value
    var amount = document.getElementById('amount').value
    if(phoneNumber == "")
    {
        alert("please fill up all the input fields")
    }
    else if (phoneNumber.length != 11)
    {
        alert("please enter the correct reciever info")
    }
    else if (amount == "")
    {
        alert("amount cannot be empty!")
    }
    else if (amount <=0 )
    {
        alert("amount must be more than 0!")
    }
    
}