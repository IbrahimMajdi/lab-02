'use strict'

const ajaxSettings = {
    method: 'get',
    datatype: 'json'
}


$.ajax('./data/page-1.json', 'ajaxSettings')
    .then(data => {
            data.forEach(item => {
                let newImg = new Imgs(item.image_url, item.title, item.description, item.keyword, item.horns);
                newImg.render();
                Imgs.all.push(item.keyword);

            })

            select(Imgs.all);
        }

    )


Imgs.all = [];

function Imgs(imgurl, title, desc, keyword, horns) {

    this.imgurl = imgurl;
    this.title = title;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;
}

Imgs.prototype.render = function () {

    let photo = $('.photo-template').clone();
    photo.attr('class', this.keyword);


    photo.find('h2').text(this.title);
    photo.find('img').attr('src', this.imgurl);
    photo.find('img').attr('alt', this.title);
    photo.find('p').text(this.desc);
    $('.cont').append(photo);
    photo.attr('value', this.keyword);
    photo.removeClass('photo-template');

}




function select(selectors) {

    const unique = Array.from(new Set(selectors));
    console.log(unique);


    unique.forEach(item => {
        console.log(item);

        let opt = $('.opt').clone();
        opt.text(item);
        $('.select').append(opt);
        opt.removeClass('opt');

    })
}

// not working propably ????
$("select").change(() => {

    let value = $("select option:selected").text();
    console.log('this', value);

    Imgs.all.forEach(item => {
        if (item !== value && value !== 'default') {
            $('.' + item).hide();

            console.log(item)
        }

        if (value === 'default' || item === value) {
            $('.' + item).show();

        }

    })


});