const timeStampDiv = document.getElementById('timeStamp');
const button = document.getElementById("newStamp");


function generateTimeStamp()
{
    let rightNow = new Date().valueOf();
    timeStampDiv.innerHTML += `<p><a href="api/${rightNow}" class="time-stamp-link">${rightNow}</a></p>`;
}
generateTimeStamp();

button.addEventListener("click", () => {
generateTimeStamp();    
})

