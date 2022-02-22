const ctx = document.getElementById('graph_activation');
Chart.defaults.font.size = 18;
// Chart.defaults.global.defaultFontSize = 18;
// сhart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.legend.d
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jun', 'Dec', 'Nov', 'Oct', 'Sep', 'Aug'],
        datasets: [
            /* Параметры первой таблицы для IOS*/
            {
                label: '',
                data: [11, 11, 11, 11, 11, 11],
                backgroundColor: [
                    '#0073FF',
                ],
                borderColor: [
                    '#0073FF',
                ],
                borderWidth: 1
            },
            /* Параметры первой таблицы для Android*/
            {
                label: '',
                data: [7, 7, 7, 7, 7, 7],
                backgroundColor: [
                    '#009E8B',
                ],
                borderColor: [
                    '#009E8B',
                ],
                borderWidth: 1,

            },

        ],

    },
    options: {
        plugins: {
            legend: {
                display: false,
                labels: {
                    fontSize: window.innerWidth > 767 ? 18 : 16

                }
            }
        }
    },
});


let ctx2 = document.getElementById('graph_retention');
let chart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1m', '2m', '4m', '6m', '8m', '10m', '12m'],
        datasets: [{ // График зелёного цвета
                label: '',
                backgroundColor: 'transparent',
                borderColor: 'green',
                data: [70, 60, 60, 50, 40, 30, 20],
            },
            { // График синего цвета
                label: '',
                // backgroundColor: 'transparent',
                borderColor: 'blue',
                data: [90, 80, 80, 70, 60, 50, 40]
            }
        ],
    },
    options: {
        plugins: {
            legend: {
                display: false,

                labels: {
                    fontSize: window.innerWidth > 767 ? 18 : 16

                }
            }
        },


    },
});

// var popCanvas = document.getElementById("popChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = 'blue';

// var barChart = new Chart(popCanvas, {
//   type: 'bar',
//   data: {
//     labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
//     datasets: [{
//       label: 'Population',
//       data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.6)',
//         'rgba(54, 162, 235, 0.6)',
//         'rgba(255, 206, 86, 0.6)',
//         'rgba(75, 192, 192, 0.6)',
//         'rgba(153, 102, 255, 0.6)',
//         'rgba(255, 159, 64, 0.6)',
//         'rgba(255, 99, 132, 0.6)',
//         'rgba(54, 162, 235, 0.6)',
//         'rgba(255, 206, 86, 0.6)',
//         'rgba(75, 192, 192, 0.6)',
//         'rgba(153, 102, 255, 0.6)'
//       ]
//     }]
//   },
//   options: {

//   }
// });