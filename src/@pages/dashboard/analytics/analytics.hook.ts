import { useEffect, useState } from 'react'

const useDashboardAnalytics = () => {
  const [data, setData] = useState([])
  const [listDataRadar, setDataRadar] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
    fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json')
      .then((response) => response.json())
      .then((json) => setDataRadar(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }

  return { data, listDataRadar }
}

export { useDashboardAnalytics }
