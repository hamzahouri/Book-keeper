const modal= document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');
const modalClose = document.getElementById('close-modal');
let bookmarks= [];
// show modal, focus on input
function showModal () {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}
// add event listners
modalShow.addEventListener('click',showModal);
modalClose.addEventListener('click', ()=>{modal.classList.remove('show-modal')});
window.addEventListener('click',(e)=>{e.target===modal ? modal.classList.remove('show-modal') : false});

// validate form
/*
function validate (nameValue,urlValue) {
    if(nameValue==" " && urlValue==" ") {
        alert("please fill all fields");
        return false;
}

}*/
//Function that fetch data from local storage, if availaible
function fetchBookmarks() {
    //get bookmarks from local if availaible
    if(localStorage.getItem('bookmarks')) {
        bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
    }else {
        //create bookmarks array in local storage
        bookmarks = [
            {
                name : "google",
                url : "https://google.com"
            },
        ];
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    console.log(bookmarks)
}

// handle Data from form 
function storeBookmark (e) {
   e.preventDefault();
   const nameValue = websiteNameEl.value;
   let urlValue = websiteUrlEl.value;
   if(!urlValue.includes('http://','https://')){
       urlValue=`https://${urlValue}`;
   }
    console.log(nameValue, urlValue);

    if ( !urlValue ||!nameValue ) {
        alert("please fill all the fields");
    } else {
        const bookmark = {
            name:nameValue,
            url : urlValue
        };
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        fetchBookmarks();
        bookmarkForm.reset();
        websiteNameEl.focus();
    }
   
   
}

// event listner 
bookmarkForm.addEventListener('submit', storeBookmark);

// on load, fetch bookmarks
fetchBookmarks();




