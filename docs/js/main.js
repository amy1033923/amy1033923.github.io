function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

includeHTML();

ReSetImageSize();
$(window).resize(function () {
    ReSetImageSize();

});

function ReSetImageSize() {

    // var productImges = $('.product-images-area').width();
    // $('.product-imges').width(productImges / 4);
    // console.log(productImges);

    var w = $(window).width();
    

    if (w <= 991) {
        $('#navbarNavDropdown').addClass('collapse');
        $('#navbarNavDropdown').removeClass('show');
    }

    else {
        $('#navbarNavDropdown').addClass('show');
    }

};

$('#Switch_cancel').change(function () {
    if (this.checked) {
        $('.order-cancel-item').css('display', 'block');
    }

    else {
        $('.order-cancel-item').css('display', 'none');
    }

});

$('#Switch_return').change(function () {
    if (this.checked) {
        $('.order-return-item').css('display', 'block');
    }

    else {
        $('.order-return-item').css('display', 'none');
    }

});


$(document).ready(function () {
    $('#product_category').select2();
    $('#addon_member').select2();
    $('#county_freight').select2();
    $('#member_freight').select2();
});



$('#orderRemark').summernote({
    placeholder: '訂單備註預設內容',
    tabsize: 2,
    height: 400
});

$('#policy').summernote({
    placeholder: '服務條款及隱私政策內容',
    tabsize: 2,
    height: 400
});

$('#about').summernote({
    placeholder: '關於我們內容',
    tabsize: 2,
    height: 400
});

$('#change').summernote({
    placeholder: '退換貨政策內容',
    tabsize: 2,
    height: 400
});

$('#404').summernote({
    placeholder: '錯誤頁面預設內容',
    tabsize: 2,
    height: 400
});

$('#checkout').summernote({
    placeholder: '結帳頁面說明內容',
    tabsize: 2,
    height: 400
});

$('#buyfinish').summernote({
    placeholder: '購買完成頁說明內容',
    tabsize: 2,
    height: 400
});

$('#product_description').summernote({
    placeholder: '商品描述內容',
    tabsize: 2,
    height: 400
});

$('#product_description_1').summernote({
    placeholder: '自訂內容',
    tabsize: 2,
    height: 400
});

$('#edm').summernote({
    placeholder: '自訂內容',
    tabsize: 2,
    height: 400
});

$('#payment').summernote({
    placeholder: '自訂內容',
    tabsize: 2,
    height: 300
});

$('#logictics').summernote({
    placeholder: '自訂內容',
    tabsize: 2,
    height: 300
});

$('#blog').summernote({
    placeholder: '自訂內容',
    tabsize: 2,
    height: 500
});

const ctx = document.getElementById('WeekChart');
const WeekChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['01MAY', '02MAY', '03MAY', '04MAY', '05MAY', '06MAY'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#5C6B73',
            ],
            borderColor: [
                '#b1bdca',
            ],
            borderWidth: 1,
            fill:true
        }]
    },
    options: {
        plugins:{
            legend:{
                display:false
            }
        },
        scales: {

            x:{
                grid:{
                    display:false
                }
            },

            y: {
                beginAtZero: true,
            }

            
        }
    }
});

const ctx_M = document.getElementById('MonthChart');
const MonthChart = new Chart(ctx_M, {
    type: 'line',
    data: {
        labels: ['01MAY', '02MAY', '03MAY', '04MAY', '05MAY', '06MAY'],
        datasets: [{
            label: '',
            data: [12, 19, 5, 4, 1, 7],
            backgroundColor: [
                '#5C6B73',
            ],
            borderColor: [
                '#b1bdca',
            ],
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {

            x: {
                grid: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,
            }


        }
    }
});

const ctx_WR = document.getElementById('WeekRevenue');
const WeekRevenue = new Chart(ctx_WR, {
    type: 'bar',
    data: {
        labels: ['01MAY', '02MAY', '03MAY', '04MAY', '05MAY', '06MAY'],
        datasets: [{
            label: '',
            data: [12, 19, 5, 4, 1, 30],
            backgroundColor: [
                '#5C6B73',
            ],
            borderColor: [
                '#b1bdca',
            ],
            borderWidth: 1,
            borderRadius: 20,
            barPercentage:0.4,
            fill: true
        }]
    },
    options: {

        responsive: true,
        maintainAspectRatio: false,

        layout:{
            width:1
        },

        plugins: {
            legend: {
                display: false
            }
        },
        scales: {

            x: {
                grid: {
                    display: false,
                }
            },

            y: {
                beginAtZero: true,
                type: 'linear',
            }


        }
    }
});

const ctx_MR = document.getElementById('MonthRevenue');
const MonthRevenue = new Chart(ctx_MR, {
    type: 'bar',
    data: {
        labels: ['01MAY', '02MAY', '03MAY', '04MAY', '05MAY', '06MAY'],
        datasets: [{
            label: '',
            data: [12, 19, 5, 4, 1, 7],
            backgroundColor: [
                '#5C6B73',
            ],
            borderColor: [
                '#b1bdca',
            ],
            borderWidth: 1,
            borderRadius: 20,
            barPercentage: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {

            x: {
                grid: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,
            }


        }
    }
});

var chartHeight = $('.overwiew-tab').height();
var fiveHeight = $('.product-five').height();
$('.revenue-tab').height(chartHeight);
$('.business-data').height(fiveHeight);
console.log(productImges / 4);
$(window).resize(function () {
    var chartHeight = $('.overwiew-tab').height();
    var fiveHeight = $('.product-five').height();
    $('.revenue-tab').height(chartHeight);
    $('.business-data').height(fiveHeight);
});


// $('.form-control').click(function() {
//     $('.form-group span').addClass('click');
// });

// var myCalendar = new dhtmlXCalendarObject("box");
// myCalendar.show();
// myCalendar.hideTime();

