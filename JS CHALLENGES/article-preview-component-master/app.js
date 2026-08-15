const avatar = document.querySelector('#user-info');
const socials = document.querySelector('#share-icons');
const SocBtn = document.querySelectorAll('.share-button');

function isMobile() {
    return window.innerWidth <= 768;
}

    SocBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isMobile()) {
                avatar.classList.toggle('hide');
                socials.classList.toggle('show');
                console.log('clicked');
            }
        });
    });