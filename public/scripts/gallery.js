(() => {

document.addEventListener("DOMContentLoaded", () => {

const container = document.querySelector('.masonry');

function preloadImages(posts) {
    return Promise.all(
        posts.map(post => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = post.image;
                img.onload = () => resolve({ post, height: img.height});
            });
        })
    );
}

function generateMasonryGrid(columns, postsWithHeights){
    console.log("Generating grid with", columns, "columns");

    container.innerHTML = '';

    const columnEls = [];
    const columnHeights = Array(columns).fill(0);
    
    for(let i = 0; i < columns; i++) {
        const col = document.createElement('div');
        col.classList.add('image-column');
        container.appendChild(col);
        columnEls.push(col);
    }

    postsWithHeights.forEach(({ post, height }) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('image');

        const image = document.createElement('img');
        image.src = post.image;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const title = document.createElement('h3');
        title.innerHTML = post.title;
        title.classList.add('description');

        overlay.appendChild(title);
        postDiv.appendChild(image);
        postDiv.appendChild(overlay);

        postDiv.addEventListener("click", () => {
            postDiv.classList.toggle("overlay-open");
        })

        image.onload = () => {
        const shortestIndex = columnHeights.indexOf(Math.min(...columnHeights));
        columnEls[shortestIndex].appendChild(postDiv);
        columnHeights[shortestIndex] += height;
        };
    })
}

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    try{
    imageIndex = 0;
    preloadImages(posts).then(postsWithHeight => {
        if(window.innerWidth < 600 && previousScreenSize >= 600) {
            generateMasonryGrid(1, postsWithHeight);
        } else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
            generateMasonryGrid(2, postsWithHeight);
        } else if(window.innerWidth >= 1000 && previousScreenSize < 1000) {
            generateMasonryGrid(4, postsWithHeight);
        }
        previousScreenSize = window.innerWidth;
    });
    }   catch (e) {
        console.error("Resize failed but page continues:", e);
        }
});

try {
    preloadImages(posts).then(postsWithHeight => {
        if(previousScreenSize < 600) {
            generateMasonryGrid(1, postsWithHeight);
        } else if(previousScreenSize >= 600 && previousScreenSize < 1000) {
            generateMasonryGrid(2, postsWithHeight);
        } else if(previousScreenSize >= 1000) {
            generateMasonryGrid(4, postsWithHeight);
        }
});
}
    catch (e) {
    console.error("Masonry failed but page continues:", e);
}

});

})();