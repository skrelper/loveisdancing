const container = document.querySelector('.masonry');

function generateMasonryGrid(columns, posts){
    container.innerHTML = '';

    let columnWrappers = {};
    for(let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = [];
    }

    for(let i = 0; i < posts.length; i++){
        const colIndex = i % columns;
        columnWrappers[`column${colIndex}`].push(posts[i]);
    }
    
    for(let i = 0; i < columns; i++){
        let columnPosts = columnWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add('image-column');
    

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('image');

            let image = document.createElement('img');
            image.src = post.image;

            let overlay = document.createElement('div');
            overlay.classList.add('overlay');

            let title = document.createElement('h3');
            title.innerHTML = post.title;
            title.classList.add('description');

            overlay.appendChild(title);
            postDiv.appendChild(image);
            postDiv.appendChild(overlay);
            column.appendChild(postDiv);
    })
        container.appendChild(column);
}

}


let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;

    if(window.innerWidth < 600 && previousScreenSize >= 600) {
        generateMasonryGrid(1, posts);
    }else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
        generateMasonryGrid(2, posts);
    }else if(window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateMasonryGrid(4, posts);
    }
    previousScreenSize = window.innerWidth;
})



if(previousScreenSize < 600) {
    generateMasonryGrid(1, posts);
} else if(previousScreenSize >= 600 && previousScreenSize < 1000) {
    generateMasonryGrid(2, posts);
} else if(previousScreenSize >= 1000) {
    generateMasonryGrid(4, posts);
}