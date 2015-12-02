//author: Hong Le
function coolingMonthly() {
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var e = [];
    var f = [];
    var g = [];
    var h = [];
    var i = [];
    var j = [];
    var k = [];

    var options = {
        chart: {
            renderTo: 'chart-C',
            defaultSeriesType: 'column'
        },
        title: {
            text: 'MONTHLY COOLING DEGREE DAYS (base 65°F) ',
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        xAxis: {
            title: {
                text: 'Month'
            },
            categories: a
        },
        yAxis: {
            title: {
                text: 'Cooling Degree Days (CDD)'
            }
        },

        series: [{
            name:'2005',
            data: b
        },{
            name:'2006',
            data: c
        },{
            name:'2007',
            data: d
        },{
            name:'2008',
            data: e
        },{
            name:'2009',
            data: f
        },{
            name:'2010',
            data: g
        },{
            name:'2011',
            data: h
        },{
            name:'2012',
            data: i
        },{
            name:'2013',
            data: j
        },{
            name:'2014',
            data: k
        }

        ]
    };

    var jqxhr = $.get('data/cooling_monthly.txt', function(data) {
        var lines = data.split('\n');
        lines.shift(); // removes the first item (the first row) from the array

        $.each(lines, function(lineNo, line) {
            var items = line.split(',');
            //get first column
            a.push(items[0]);
            //get second column
            b.push(parseInt(items[1]));
            //get 3rd column
            c.push(parseInt(items[2]));
            //get 4th column
            d.push(parseInt(items[3]));
            //get 5th column
            e.push(parseInt(items[4]));
            //get 6th column
            f.push(parseInt(items[5]));
            //get 7th column
            g.push(parseInt(items[6]));
            //get 8th column
            h.push(parseInt(items[7]));
            //get 9th column
            i.push(parseInt(items[8]));
            //get 10th column
            j.push(parseInt(items[9]));
            //get 11th column
            k.push(parseInt(items[10]));
        });
        var chart = new Highcharts.Chart(options);

    });
}

function collingTotal() {
    var a = [];
    var b = [];

    var options1 = {
        chart: {
            renderTo: 'chart-D',
            defaultSeriesType: 'line'
        },
        title: {
            text: 'TOTAL COOLING DEGREE DAYS (base 65°F)',
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        xAxis: {
            title: {
                text: 'Year'
            },
            categories: a
        },
        yAxis: {
            title: {
                text: 'Cooling Degree Days (CDD)'
            }
        },

        series: [{
            name:'Year',
            data: b
        }

        ]
    };

    var aaa = $.get('data/cooling_total.txt', function(data) {
        var lines = data.split('\n');
        lines.shift(); // removes the first item (the first row) from the array
        $.each(lines, function(lineNo, line) {
            var items = line.split(',');
            //get first column
            a.push(items[0]);
            //get second column
            b.push(parseFloat(items[1]));

        });
        var chart1 = new Highcharts.Chart(options1);

    });
}

$(document).ready(function(){
    coolingMonthly();
    collingTotal();
});

$(function() {
    $('#colorselector').change(function(){
        $('.chart').hide();
        $('#' + $(this).val()).show();
    });
});