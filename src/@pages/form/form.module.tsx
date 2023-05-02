import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import AdvancedForm from './advanced/advanced.component'
import FormBasic from './basic/basic.component'

/**
 * Form layout component
 * @constructor
 */
const FormLayout: FC = () => <Outlet />

export { FormLayout, FormBasic, AdvancedForm }
