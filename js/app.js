'use strict'

const ajaxSettings = {
    method: 'get',
    datatype: 'json'
}

$.ajax('./data/page-1.json', 'ajaxSettings')
    .then(data => {

            data.forEach(item => {
                let newImg = new Imgs(item.image_url, item.tiltle, item.description, item.keyword, item.horns);
                // console.log(newImg);
                newImg.render();

            })
        }

    )

function Imgs(imgurl, tiltle, desc, keyword, horns) {
    this.imgurl = imgurl;
    this.tiltle = tiltle;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;
}

Imgs.prototype.render = function () {

    let photo = $('.photo-template').clone();
    //  $('.cont').append(photo);


    // photo.removeClass('photo-template');

    // let x =photo.find('h2').text(this.keyword);
    // let urlImg= photo.find('img').attr('src').text(this.image_url);
    // $('.photo-template').append(x);



}