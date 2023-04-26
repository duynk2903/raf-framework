const financeConfig = {
  xField: 'year',
  yField: 'gdp',
  seriesField: 'name',
  yAxis: {
    label: {
      formatter: (v: any) => `${(v / 10e8).toFixed(1)} B`
    }
  },
  legend: {
    position: 'top'
  },
  smooth: true,
  animation: {
    appear: {
      animation: 'path-in',
      duration: 5000
    }
  }
}

export { financeConfig }
