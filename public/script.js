

const timeStampDiv = document.getElementById('timeStamp');
const button = document.getElementById("newStamp");


function generateTimeStamp()
{
    let date = new Date();
    let unixNumber = date.valueOf();
    let timeString = date.toUTCString();
    timeStampDiv.innerHTML += `<p><a href="api/${unixNumber}" class="time-stamp-link">unix: ${unixNumber}</a> <a href="api/${timeString}" class="time-stamp-link"> utc: ${timeString}</a> </p>`;
}
generateTimeStamp();

button.addEventListener("click", () => {
generateTimeStamp();    
})

