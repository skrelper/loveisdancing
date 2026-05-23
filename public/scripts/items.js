const posts =[]

const images =[
    "/content/images/gallery/cyanoflower.jpg",
    "/content/images/gallery/transferflower.jpg",
    "/content/images/gallery/cumoreo.jpg",
    "/content/images/gallery/abstract1.jpg",
    "/content/images/gallery/loveisdancingmvbts1.jpg",
    "/content/images/HeartBeat_Ideation/Love_is_dancing/circle.gif",
    "/content/images/gallery/loveisdancingmvbts3.jpg",
    "/content/images/gallery/maxphotostudio.jpg",
    "/content/images/gallery/mompolishcakecut.jpg",
    "/content/images/HeartBeat_Ideation/maxds.gif"
]

const descriptions =[
    "A Frankenflower cyanotype that I made for my Darkroom Photography final",
    "The negative used to make a Frankenflower cyanotype print",
    "A cum-flavored Oreo",
    "Something",
    "Shoutout Kaitlyn, Hannah, Ach, and Ellen for helping me with a music video idea that I scrapped",
    "Shoutout Matt for the jacket",
    "Shoutout Matt for the shirt",
    "Was feeling myself while making a TikTok to <em>Wild Side</em> aka one of the best songs of all time",
    "5 years of <a href='https://youtu.be/F3fQ8gctz_I?si=X69TPAsHWJHDjQoc'>mompolish bff remix</a>",
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