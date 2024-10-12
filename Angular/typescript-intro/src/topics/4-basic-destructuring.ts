interface AudioPlayer{
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details;
}

interface Details{
    author: string,
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume:90,
    songDuration: 36,
    song: 'Misery Business',
    details: {
        author: 'Hailey Williams',
        year: 2007
    }
};

// console.log('song ', audioPlayer.song);
// console.log('duración ', audioPlayer.songDuration);
// console.log('audioVolume ', audioPlayer.audioVolume);

const{song: anotherSong, songDuration: duracion, audioVolume, details:{author}} = audioPlayer;
//const{author} = audioPlayer.details;
console.log({anotherSong, duracion, audioVolume, author});
const song = 'New Song';

//Desestructuración de arreglos
// const nakamas: string[] = ['Luffy','Zoro','Namy'];
// console.log('Personaje 3', nakamas[3] || 'Not found');

// const namy = nakamas[3] || 'Not found';
// console.log('Personaje 3', namy);

//const[luffy, zoro, namy]: string[] = ['Luffy','Zoro','Namy'];
const[ , , namy = 'Not found']: string[] = ['Luffy','Zoro'];

console.log(namy)

export{};