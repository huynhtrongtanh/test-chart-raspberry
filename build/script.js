
function getData() {
    var numPoint = 100;
    var res = callAPI(numPoint);
    var resJson = JSON.parse(res);
    var data = resJson.result.data;
    if (data) {
        var dataLine1 = data.map((item) => {
            return (item.data_1 + Math.random() * 12);
        });

        var dataLine2 = data.map((item) => {
            return (item.data_1 + Math.random() * 5);
        });

        var dataTitle = data.map((item) => {
            return (item.date_time);
        });

        Highcharts.chart('container', {

            chart: {
                zoomType: 'x'
            },

            title: {
                text: 'Highcharts drawing ' + numPoint + ' points'
            },

            subtitle: {
                text: 'Using the Boost module'
            },

            // accessibility: {
            //     screenReaderSection: {
            //         beforeChartFormat: '<{headingTagName}>{chartTitle}</{headingTagName}><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div>'
            //     }
            // },

            tooltip: {
                valueDecimals: 2
            },

            xAxis: {
                categories: dataTitle,
                // accessibility: {
                //     rangeDescription: 'Range: 2010 to 2020'
                // },
                type: 'datetime',
                tickInterval: 100
            },

            series: [{
                data: dataLine1,
                lineWidth: 1,
                name: 'Data 1'
            },
            {
                data: dataLine2,
                lineWidth: 1,
                name: 'Data 2'
            }
            ]

        });

    }
}

function callAPI(limit) {
    return httpGet(`http://127.0.0.1:42600/api/logger/get/${limit}`)
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send();
    return xmlHttp.responseText;
}