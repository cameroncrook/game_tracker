export function generateListForm() {
    const form = document.createElement('form');

    const nameDiv = document.createElement('div');
    const nameLabel = document.createElement('label');
    nameLabel.for = 'name-input';
    nameLabel.textContent = 'Name';
    nameDiv.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name-input';
    nameInput.name = 'name';
    nameDiv.appendChild(nameInput);

    form.appendChild(nameDiv);

    const descriptionDiv = document.createElement('div');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = 'description-input';
    descriptionLabel.textContent = 'Description';
    descriptionDiv.appendChild(descriptionLabel);

    const descriptionInput = document.createElement('input');
}
