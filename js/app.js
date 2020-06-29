'use strict'

const ajaxSettings = {
    method: 'get',
    datatype: 'json'
}



$.ajax('./data/page-1.json', 'ajaxSettings')
    .then(data => {
            data.forEach(item => {
                let newImg = new Imgs(item.image_url, item.title, item.description, item.keyword, item.horns);
                // newImg.render();
                newImg.add();
                console.log(Imgs.all);
                
            })
        }

    )
// console.log('leng', selectors.length);


Imgs.all = [];

let y = [5, 7, 8]

function Imgs(imgurl, title, desc, keyword, horns) {

    this.imgurl = imgurl;
    this.title = title;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;
    // Imgs.all.push(this.keyword);
}

console.log('all', Imgs.all);

Imgs.prototype.render = function () {

    let photo = $('.photo-template').clone();

    photo.find('h2').text(this.title);
    photo.find('img').attr('src', this.imgurl);
    photo.find('img').attr('alt', this.title);
    photo.find('p').text(this.desc);
    $('.cont').append(photo);
    photo.removeClass('photo-template');

}

Imgs.prototype.add = function () {

    Imgs.all.push(this.keyword);
}



function select(selectors) {

    // console.log(selectors);

    selectors.forEach(item => {

        console.log('1321');

        let opt = $('.opt').clone();
        opt.text(item);
        $('.select').append(opt);
        opt.removeClass('opt');


    })

}

console.log('pro',Imgs.all.length);

select(Imgs.all);