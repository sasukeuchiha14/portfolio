var sentence = "If you are not redirected, click ";

document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementsByTagName('div')[0];

    async function addText() {
        let index = 0;
        const intervalId = setInterval(function() {
            if (index < sentence.length) {
                text.innerHTML += sentence.charAt(index);
                index++;
            }
            else {
                clearInterval(intervalId);
            }
        }, 100);
    }
    
    async function run() {
        await addText();
    }
    
    run();

    const button = document.getElementById('redirectButton');

    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
    });
});