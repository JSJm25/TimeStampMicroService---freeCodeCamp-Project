const timeStampDiv = document.getElementById('timeStamp');

let rightNow = new Date().valueOf();

timeStampDiv.innerHTML = `<iframe src="/api/${rightNow}" class="mx-auto w-100"></iframe>`;

