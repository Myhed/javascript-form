window.onload = function(){
    const form = document.querySelector('#form');
    const inputs = document.querySelectorAll('input')
    const container =  document.querySelector('#container')
    const divError = document.querySelector('.error')
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        inputs.forEach((input,index) => {
            if((input.name === "pseudo" || input.name === "password" || input.name === "email") && input.value.trim() === ""){

                const createDivError = document.createElement('div')
                const messageError = document.createTextNode('toto')
                createDivError.appendChild(messageError)
                createDivError.setAttribute('class', 'error')
                container.classList.add('error-container')
                e.target.parentNode.appendChild(createDivError)
            }
        });
    }, false);
}