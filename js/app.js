'use strict'

const ajaxSettings = {
    method: 'get',
    datatype: 'json'
}

let path1= './data/page-1.json';
let path2 = './data/page-2.json';

function ajax1(path) {

    $.ajax(path, 'ajaxSettings')
        .then(data => {
                data.forEach(item => {
                    let newImg = new Imgs(item.image_url, item.title, item.description, item.keyword, item.horns);
                    newImg.render();
                    Imgs.all.push(item);

                })

                select(Imgs.all);

            }

        )

    $('.select').html('');

    $('.select').append("<option class='opt' value='default'>default</option>");
}

ajax1(path1);

Imgs.all = [];

function Imgs(imgurl, title, desc, keyword, horns) {

    this.imgurl = imgurl;
    this.title = title;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;
}

Imgs.prototype.render = function () {

    let musTemplate = $('#photo-template').html();

    let newObj = Mustache.render(musTemplate, this);

    $('#all').append(newObj);

}


function select(selectors) {

    let noDuplicates = [];

    selectors.forEach(item => {

        // noDuplicates.push(item.keyword);
        if (!noDuplicates.includes(item.keyword)) {
            // let opt = $('.opt').clone();
            // opt.text(item.keyword);
            // $('.select').append(opt);
            // opt.removeClass('opt');
            let selTemplate = $('#select-template').html();
            let newObj1 = Mustache.render(selTemplate, item);
            $('.select').append(newObj1);
            noDuplicates.push(item.keyword);
        }
    })
}

// not working propably ????
$(".select").change(() => {

    let value = $("select option:selected").text();

    Imgs.all.forEach(item => {
        console.log(item.keyword);

        if (item.keyword !== value && value !== 'default') {
            $('.' + item.keyword).hide();
        }

        if (value === 'default' || item.keyword === value) {
            $('.' + item.keyword).show();
        }

    })


});


$('#button1').click(() => {

    Imgs.all = [];

    $('#all').html('');
    ajax1(path1);


})


$('#button2').click(() => {

    Imgs.all = [];

    $('#all').html('');
    ajax1(path2);
})