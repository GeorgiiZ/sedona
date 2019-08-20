const images = require.context("../assets/", true, /\.png$/)

const sightPics = [
    {
        sightName: 'неродные просторы',
        photoSrc: images('./photo1desktopjpg.png'),
        author: 'Борис',
        likesCount: 1350,
    },
    {
        sightName: 'местная растительность',
        photoSrc: images('./photo2desktopjpg.png'),
        author: 'Сергей',
        likesCount: 143,
    },
    {
        sightName: 'дорога на север',
        photoSrc: images('./photo3desktopjpg.png'),
        author: 'Сергей',
        likesCount: 96,
    },
    {
        sightName: 'мост дьяола',
        photoSrc: images('./photo4desktopjpg.png'),
        author: 'Антон',
        likesCount: 254,
    },
];

export default sightPics;