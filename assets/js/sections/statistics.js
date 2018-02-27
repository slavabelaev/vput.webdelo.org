'use strict';

(function() {
    var datasets = {
        vendors: {
            borderColor: '#BBFF81',
            data: [0, 300, 700, 1661],
            label: 'вендоры',
            fill: false,
            backgroundColor: '#BBFF81'
        },
        apartaments: {
            borderColor: '#58CCEC',
            data: [0, 400, 900, 1875],
            label: 'апартаменты',
            fill: false,
            backgroundColor: '#58CCEC'
        },
        clients: {
            borderColor: '#D66EBB',
            data: [0, 700, 2500, 5250],
            label: 'клиенты',
            fill: false,
            backgroundColor: '#D66EBB'
        },
        bookings: {
            borderColor: '#E67963',
            data: [0, 800, 2200, 5812],
            label: 'бронирования',
            fill: false,
            backgroundColor: '#E67963'
        }
    };
    var allDatasets = [ datasets.vendors, datasets.apartaments, datasets.clients, datasets.bookings ];
    var data = {
        labels: ['2014', '2015', '2016', '2017'],
        borderColor: '#fff',
        datasets: allDatasets,
        maxWidth: 100
    };

    var options = {
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
            line: {
                tension: 0.000001
            }
        },
        scales: {
            yAxes: [{
                ticks:{
                    fontColor : "#fff",
                    fontSize : 16
                },
                gridLines:{
                    color: "rgba(255, 255, 255, .1)",
                }
            }],
            xAxes: [{
                ticks:{
                    fontColor : "#fff",
                    fontSize : 16
                },
                gridLines:{
                    color: "transparent"
                }
            }]
        }
    };


    window.initStatisticsChart = function() {
        data.datasets = allDatasets;
        var statisticsChartElement = document.getElementById('statistics__project-development-chart');
        window.statisticsChart = new Chart(statisticsChartElement, {
            type: 'line',
            data: data,
            options: options
        });

        setTimeout(function() {
            document.getElementById('statistics__chart-wrapper').className += ' initialized';
        }, 1);
    };

    var datasetsElements = $('[data-dataset]');

    datasetsElements.on('mouseover', function(e) {
        var $this = $(this),
            datasetName = $this.data('dataset');

        data.datasets = [ datasets[datasetName] ];
        window.statisticsChart.update();
    });

    datasetsElements.on('mouseout', function(e) {
        data.datasets = allDatasets;
        window.statisticsChart.update();
    });
})();