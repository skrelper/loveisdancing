const posts =[]

const images =[
    "/content/images/gallery/mompolishcakecut.jpg",
    "/content/images/gallery/cyanoflower.jpg",
    "/content/images/HeartBeat_Ideation/Love_is_dancing/circle.gif",
    "/content/images/HeartBeat_Ideation/maxds.gif"
]

const descriptions =[
    "5 years of <a href='https://youtu.be/F3fQ8gctz_I?si=X69TPAsHWJHDjQoc'>mompolish bff remix</a>",
    "A Frankenflower cyanotype that I made for my Darkroom Photography final",
    "Shoutout Matt for the jacket",
    "I loved my DS"
]


let imageIndex = 0;

for(let i = 1; i <= images.length; i++){
    let item = {
        id: i,
        title: descriptions[imageIndex],
        image: images[imageIndex]
    }

    posts.push(item);
    imageIndex++;
    if(imageIndex > images.length - 1) imageIndex = 0;

}

console.log(posts);