const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click', function () {
    alert('you clicked me')
})


function showGIF() {
    
    var gifContainer = document.getElementById('gif-container');

    
    gifContainer.style.display = 'block';
}