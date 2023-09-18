const text =document.getElementById('text');
const add = document.getElementById('add');
const remove = document.getElementById('remove');
const list = document.getElementById('listContainer');


add.addEventListener('click', () => {
    const paragraf = document.createElement('p');
    list.appendChild(paragraf);
    paragraf.innerHTML = text.value[0].toUpperCase() + text.value.slice(1);
    text.value = ''; 
    paragraf.addEventListener('click', () => {
        paragraf.style = 'text-decoration: line-through'
    })
    paragraf.addEventListener('dblclick', () => {
        paragraf.remove();
    });
    remove.addEventListener('click', () => {
        paragraf.remove();
    });
});

