const url = document.getElementById('url');
const download = document.getElementById('download');

download.addEventListener('click', () => fetchFile(url.value));

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        console.log(tempUrl);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;

        aTag.download = "filename";
        document.body.appendChild(aTag);
        aTag.click()
        aTag.remove()
    }
    );
}