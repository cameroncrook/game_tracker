export function gameCard(parent_selector, thumnail, name, genres) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const imgDiv = document.createElement('div');
    imgDiv.className = "card-img-div";
    const img = document.createElement('img');
    img.src = thumnail;
    imgDiv.appendChild(img);
    cardDiv.appendChild(imgDiv);

    const h3 = document.createElement('h3');
    h3.textContent = name;
    cardDiv.appendChild(h3);

    const bottomDiv = document.createElement('div');
    bottomDiv.className = 'card-bottom-div';
    // const ul = document.createElement('ul');
    // ul.className = "genres";

    // genres.forEach(item => {
    //     const li = document.createElement('li');
    //     li.textContent = item.name;
    //     ul.appendChild(li);
    // });

    const genreP = document.createElement('p');
    genreP.className = "genres-p";

    const genreArray = genres.map(item => item.name);
    const genreJoin = genreArray.join('|');

    genreP.textContent = genreJoin;

    bottomDiv.appendChild(genreP);
    
    const button = document.createElement('button');
    button.textContent = 'Add to List';
    bottomDiv.appendChild(button);
    cardDiv.appendChild(bottomDiv);

    document.querySelector(parent_selector).appendChild(cardDiv);

    return cardDiv
}