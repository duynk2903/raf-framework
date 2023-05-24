import { FC } from 'react'
import './preloader.style.scss'
import { useLoader } from '@core/components/ngx-preloader/preloader.hook'

/**
 * Ngx loader component
 * @constructor
 */
const NgxPreloader: FC = () => {
  const { isDisplay, colorBgContainer } = useLoader()
  return (
    <>
      {isDisplay && (
        <section className="loader-wrapper" style={{ backgroundColor: colorBgContainer }}>
          <div className="anim-cont">
            <div className="side-1"></div>
            <div className="side-2"></div>
            <div className="side-3"></div>
            <div className="side-4"></div>
            <div className="side-5"></div>
            <div className="side-6"></div>
          </div>
        </section>
      )}
    </>
  )
}

export default NgxPreloader
