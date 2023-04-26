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
  // @TODO 后续会换一种动画方式
  animation: {
    appear: {
      animation: 'path-in',
      duration: 5000
    }
  }
}

export { financeConfig }
