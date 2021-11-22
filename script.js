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
        console.log(bookmarks);
        localStorage.setItem('bookmarks',bookmarks)
        bookmarkForm.reset();
        websiteNameEl.focus();
    }
   
   
}

// event listner 
bookmarkForm.addEventListener('submit', storeBookmark);




