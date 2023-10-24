import { getLists } from "../js/utility.mjs";

export function addToListForm(game, formDiv, button) {
    // const body = document.querySelector('main');

    const img = formDiv.querySelector('img');
    img.classList.add('d-none');
    button.classList.add('d-none');

    // lists
    const lists = getLists();

    // Form
    const form = document.createElement('form');
    form.className = "add-form-overlay flex-vertical-evenly";

    // Close Button
    const div = document.createElement('div');
    const close = document.createElement('img');
    close.src = "/game_tracker/images/002-close.png";

    close.addEventListener('click', function() {
        formDiv.removeChild(form);

        img.classList.remove('d-none');
        button.classList.remove('d-none');
    })
    div.appendChild(close);

    form.appendChild(div);

    // Select
    const select = document.createElement('select');
    select.className = "border-rounded-sm";

    // Options
    for (let i=0; i < lists.length; i++) {
        const option = document.createElement('option');
        option.textContent = lists[i].name;
        option.value = i;

        select.appendChild(option);
    }

    form.appendChild(select);

    // Button
    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    form.appendChild(submitBtn);

    // Form Submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        game.addToList(select.value);

        formDiv.removeChild(form);
        img.classList.remove('d-none');
        button.classList.remove('d-none');
    })

    formDiv.appendChild(form);

    return
}