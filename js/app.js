'use strict'

const ajaxSettings = {
    method: 'get',
    datatype: 'json'
}
var selectors = [];

$.ajax('./data/page-1.json', 'ajaxSettings')
    .then(data => {

            data.forEach(item => {
                let newImg = new Imgs(item.image_url, item.title, item.description, item.keyword, item.horns);
                newImg.render();
                selectors.push(item.horns);

            })
            
        }

    )



function Imgs(imgurl, title, desc, keyword, horns) {

    this.imgurl = imgurl;
    this.title = title;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;
}


Imgs.prototype.render = function () {

    let photo = $('.photo-template').clone();

    photo.find('h2').text(this.title);
    photo.find('img').attr('src', this.imgurl);
    photo.find('img').attr('alt', this.title);
    photo.find('p').text(this.desc);
    $('.cont').append(photo);
    photo.removeClass('photo-template');

}

function select(arr) {
    console.log(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
        console.log("jo");
        
        
    }
    // arr.forEach(item => {

    //     console.log('arr');
        // let opt = $('.opt').clone();
        // opt.text(item);
        // $('.select').append(opt);
        // opt.removeClass('opt');


    // })

}

select(selectors);