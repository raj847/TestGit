let parameter = process.argv;

let ctiket = require('./controller/ctiket');
let viewPublic =  require('./view/view');

let param = parameter[2].split(":");
switch(param[1]){
    //politician

    // menampilkan semua film
    case 'all': // node index.js movie:all
        ctiket.getAllMovie();
    break;
    
    // menutup film (menandakan film telah berakhir)
    case 'close': // node index.js movie:view <movieId>
        ctiket.closeMovie(parameter[3]);
    break;
    
    // membeli tiket film
    case 'buy': // node index.js movie:buy <movieId> <name> <phone> <money> <qty>
        ctiket.buyMovie(parameter[3], parameter[4], parameter[5], parameter[6], parameter[7]);
    break;

    // menampilkan satu film dengan tiket-tiketnya
    case 'view': // node index.js movie:view <movieId>
        ctiket.viewMovie(parameter[3]);
    break;
    
    // menghapus film
    case 'delete': // node index.js movie:delete <movieId>
    ctiket.deleteMovie(parameter[3]);
    break;
    
    default:
        viewPublic.tampilPesan('Command anda salah');
    break;
}
