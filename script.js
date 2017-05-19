function Change(name)
{
    var elements = document.getElementsByClassName('section');
    for (var i = 0; i < elements.length; i++)
    {
        elements[i].style.display = 'none';
    }
    document.getElementsByClassName(name)[0].style.display = 'block';
}

function Init()
{
    Change("intro");
}