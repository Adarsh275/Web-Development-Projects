 
let musics=[
    { 
        id:1,
        name:"Thunder",
        artist:"Imagin Drageons",
        audioSrc:"audios/Thunder---Imagine-Dragons(pagolworld.nl).mp3",
        imageSrc:"images/Thunder by Imagin Drageons.jpg"
    },

    {
        id:2,
        name:"Namo Namo",
        artist:"Amit Trivedi",
        audioSrc:"audios/Namo Namo - Lyrical _ Kedarnath _ Sushant Rajput _ Sara Ali Khan _ Amit Trivedi _ Amitabh B.mp3",
        imageSrc:"images/namo namo.webp"
    },
   
    {
        id:3,
        name:"Hymn For The Weekend",
        artist:"Coldplay",
        audioSrc:"audios/Coldplay - Hymn For The Weekend (Official Video).mp3",
        imageSrc:"images/hymn for the weekend.jpg"
    },
    {
        id:4,
        name:"Jee Le Zaraa",
        artist:"Vishal Dadlani",
        audioSrc:"audios/Jee Le Zaraa (Talaash).mp3",
        imageSrc:"images/talaash.jpg",
    },
    {
        id:5,
        name:"Blank Space",
        artist:"Taylor Swift",
        audioSrc:"audios/Taylor Swift - Blank Space.mp3",
        imageSrc:"images/blank space.jpg"
    },
    {
        id:6,
        name:"Ishq Bhi Kiya",
        artist:"Ali Azmat",
        audioSrc:"audios/Ishq Bhi Kiya Re Maula Full Video Song Jism 2 _ Sunny Leone, Randeep Hooda, Arunnoday Singh.mp3",
        imageSrc:"images/ishq bhi kiya.jpg"
    },
    {
        id:7,
        name:"Bad Liar",
        artist:"Imagine Dragons",
        audioSrc:"audios/Imagine Dragons - Bad Liar (Official Music Video).mp3",
        imageSrc:"images/bad liar.jpg"
    },
    {
        id:8,
        name:"Alone II",
        artist:"Alen Waker",
        audioSrc:"audios/Alone, Pt. II(PagalWorld.com.se).mp3",
        imageSrc:"images/alone II.jpg"
    },

]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}