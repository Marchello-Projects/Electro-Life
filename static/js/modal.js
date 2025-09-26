const HTMLELEMENTS = {
    modal: document.querySelector('#modal'),
    profileButton: document.querySelector('#profile'),
    buttonCancel: document.querySelector('#buttonCancel'),
}

HTMLELEMENTS.profileButton.addEventListener('click', () => {
    HTMLELEMENTS.modal.style.display = "flex"
})

HTMLELEMENTS.buttonCancel.addEventListener('click', () => {
    HTMLELEMENTS.modal.style.display = "none"
})
