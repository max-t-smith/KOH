function loadMenu()
{
    document.getElementById("navbar").style.display = "block";
    document.getElementById("menu_icon").style.display ="none";
}

function hideMenu()
{
    document.getElementById("navbar").style.display = "none";
    document.getElementById("menu_icon").style.display ="inline";
}

function sendCCEmail()
{
    document.getElementById("_cc").value = document.getElementById("email").value;
    document.querySelector('form').submit();
}

