const yet=document.querySelectorAll('.yet');
function linkHandler(e) {
    e.preventDefault();
    alert('Sorry Please, These Page Is Yet To Be Published')
}
yet.forEach(link=>link.addEventListener('click',linkHandler));