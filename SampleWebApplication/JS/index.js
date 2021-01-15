var btnId = document.getElementById("btn-change-color").onclick = function()
{
    
    changeParaColor();
}

function changeParaColor()
{
    var paraID = document.getElementById("para-first");
    if(paraID.style.color==="green")
    {
        paraID.style.color="red"
    }
    else {
        paraID.style.color="green"
    }
}
