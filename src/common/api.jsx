// require('dotenv').config();

const LIVE = false;
const LIVEURL = 'http://localhost:5000/';
const ROOTURL = LIVEURL + 'api/v1/';
const FILEURL = LIVEURL;

const API = {
    addfaq: ROOTURL + 'faq/addfaq',
    listfaq: ROOTURL + 'faq/listfaq',
    viewfaq: ROOTURL + 'faq/viewfaq',
    updatefaq: ROOTURL + 'faq/updatefaq',


}

const ImportedURL = {
    API: API,
    LIVEURL: LIVEURL,
    ROOTURL: ROOTURL,
    FILEURL: FILEURL
}

export default ImportedURL;
