var options = {
    chart: {
      width: "100%",
      height: 380,
      type: "bar"
    },
    plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '20%',
                    endingShape: 'rounded'
                  },
                },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    series: [
      {
        data: [4, 6, 5, 3, 5, 6, 8, 9]
      }
    ],
    xaxis: {
      categories: ['1 Jun', '9 Jun', '16 jun', '18 Jun', '19 Jun', '22 jun', '24 Jun', '26 Jun'],
    },
    tooltip: {
      
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="arrow_box">' +
          "<span>" +
          w.globals.labels[dataPointIndex] +
          ": " +
          series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#apex-chart"), options);
  
  chart.render();
  