const API = 'https://nyaaapi.herokuapp.com/sukebei/real?query='

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);


}

let JAVTitle = document.getElementById('video_id').getElementsByClassName('text')[0].innerText
let songInfoElement = document.getElementsByClassName('socialmedia')[1]
let torrentElement = document.createElement('div')

let torrentsCount = 0
let torrents = []
let pageCount = 0

function inflator(torrents) {
    let string = `<div id="video_reviews"><div class="header">Torrents</div><table class="table-recently-updated" width="100%"><hr class="grey"><tbody>`
    for (let i = (5 * pageCount); i < ((5 * pageCount) + endLimitDiscriminator()); i++) {

        string += `<tr><div class="torrents"><div>

    <div><a style="font-size: 14px;" href="${torrents[i].magnet}"> ${torrents[i].title}</a><a style="font-size: 14px;"> (${torrents[i].size}) <a href="${torrents[i].link}">Ⓘ</a></div>
    </span><p style="margin: 0px; margin-bottom: 10px; float:left; color: green; font-size: 14px;">${torrents[i].seeders}↑</p><p style="margin: 0px; margin-bottom: 10px; float:left; color: red; font-size: 14px;">${torrents[i].leechers}↓&nbsp;</p></div>
    <p style="margin: 0px; margin-bottom: 10px; font-size: 14px;">${torrents[i].time}</p></div></td></tr>`
    }
    string += `</tbody></table><center><a style="font-size: 14px;"><p id="torrent-current-page">${pageCount+1}/${pages()}</center><center><a onclick="pageBack();" style="font-size: 14px; margin-right: 5px; cursor: pointer;">⋘ </a><a onclick="pageNext();" style="font-size: 14px; cursor: pointer;"> ⋙</a></center>`
    torrentElement.innerHTML = string
}

function pageNext() {
    if (torrentsCount >= ((pageCount + 1) * 5)) {
        pageCount += 1
        inflator(torrents)
    }
}

function pageBack() {
    if (pageCount != 0) {
        pageCount -= 1
        inflator(torrents)
    }
}

function endLimitDiscriminator() {
    if (pageCount >= parseInt(torrentsCount / 5)) {
        return torrentsCount % 5
    } else {
        return 5
    }
}

function pages() {
    return (parseInt(torrentsCount / 5) + 1)
}

try {
    fetch(API + JAVTitle + '&sort=seeders&order=desc')
        .then((response) => {
            console.log(response)
            response.json().then((res) => {
                torrents = res.data
                torrentsCount = res.count
                inflator(res.data)
                insertAfter(songInfoElement, torrentElement)
            })
        })
} catch (err) {
    console.log(err)
}
