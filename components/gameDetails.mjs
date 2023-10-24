function template(game) {
    const html = `
    <div class="overlay-box border-rounded">
        <div>
            <img class="menu-close-icon" src="/game_tracker/images/002-close.png">
        </div>
        <section>
            <div id="active-img"></div>
            <div id="game-images">

            </div>
        </section>
        <h2>Game Info</h2>
        <section class="game-details-grid">
            <div>
                <h3>Released Date</h3>
                <p>${game.released}</p>
            </div>
            <div>
                <h3>Ratings</h3>
                <p>Rating: ${game.rating}</p>
                <p>Metacritic: ${game.metacritic}</p>
            </div>
        </section>
        <section class="game-details-grid">
            <div>
                <h3>Genres</h3>
                <ul id="genres-list">

                </ul>
            </div>
            <div>
                <h3>Platforms</h3>
                <ul id="platforms-list">

                </ul>
            </div>
            <div>
                <h3>Stores</h3>
                <ul id="stores-list">

                </ul>
            </div>
            <div>
                <h3>Tags</h3>
                <ul id="tags-list">
                    
                </ul>
            </div>
        </section>
    </div>
    `;

    const template = document.createElement('section');
    template.className = 'sticky-overlay';
    template.innerHTML = html;

    return template
}

export function gameDetailsCard(game) {
    // Get template
    const html = template(game);

    //images
    const activeImg = html.querySelector('#active-img');
    const gameImgs = html.querySelector('#game-images');

    let first = true;
    if (game.short_screenshots != null) {
        game.short_screenshots.forEach(image => {
            const imgDiv = document.createElement('div');
            imgDiv.className = "img-preview";
            const img = document.createElement('img');
            img.src = image.image;

            imgDiv.appendChild(img);

            // Displays the selected img to the big boy
            
            imgDiv.addEventListener('click', function() {
                activeImg.innerHTML = "";
                const selectedImg = document.createElement('img');
                selectedImg.src = image.image;
                activeImg.appendChild(selectedImg);

                const activeImages = document.querySelectorAll('.active-img');
                activeImages.forEach(img => {
                    img.classList.remove('active-img');
                })

                imgDiv.classList.add('active-img');
            })

            if (first) {
                const selectedImg = document.createElement('img');
                selectedImg.src = image.image;
                activeImg.appendChild(selectedImg);

                imgDiv.classList.add('active-img');

                first = false;
            }

            gameImgs.appendChild(imgDiv);
        })
    }

    // Genres
    if (game.genres != null) {
        const genreList = html.querySelector('#genres-list');
        game.genres.forEach(genre => {
            const li = document.createElement('li');
            li.textContent = genre.name;

            genreList.appendChild(li);
        })
    }

    // Platforms
    if (game.platforms != null) {
        const platformList = html.querySelector('#platforms-list');
        game.platforms.forEach(platform => {
            const li = document.createElement('li');
            li.textContent = platform.platform.name;

            platformList.appendChild(li);
        })
    }

    // Stores
    if (game.stores != null) {
        const storeList = html.querySelector('#stores-list');
        game.stores.forEach(store => {
            const a = document.createElement('a');
            a.href = store.store.domain;

            const li = document.createElement('li');
            li.textContent = store.store.name;

            a.appendChild(li);
            storeList.appendChild(a);
        })
    }

    // Tags
    if (game.tags != null) {
        const tagList = html.querySelector('#tags-list');
        game.tags.forEach(tag => {
            const li = document.createElement('li');
            li.textContent = tag.name;

            tagList.appendChild(li);
        })
    }

    // Add to top of main
    const main = document.querySelector('main');
    const firstChild = main.firstChild;

    main.insertBefore(html, firstChild);

    // close button
    html.querySelector('.menu-close-icon').addEventListener('click', function() {
        main.removeChild(html);
    })

    return
}