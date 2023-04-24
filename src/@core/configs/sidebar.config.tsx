import { MenuProps } from 'antd'
import {
  AlertOutlined,
  DashboardOutlined,
  FormOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UnorderedListOutlined,
  WarningOutlined
} from '@ant-design/icons'
import { MenuType } from '@core/enums/menu.enum'
import React from 'react'
import { TFunction } from 'i18next'
import _ from 'lodash'
import { DashboardRouterLink, ErrorRouterLink } from '@core/enums/router.enum'

/**
 * The left sidebar configuration
 */
const sidebarConfigs = (translate: TFunction): MenuProps[MenuType.ITEMS] => [
  {
    label: translate('menu.dashboards.title'),
    key: DashboardRouterLink.BASE_PATH,
    icon: <DashboardOutlined />,
    children: [
      {
        label: translate('menu.dashboards.children.analytics'),
        key: DashboardRouterLink.ANALYTIC
      },
      {
        label: translate('menu.dashboards.children.monitor'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.dashboards.children.workspace'),
        key: _.uniqueId()
      }
    ]
  },
  {
    label: translate('menu.form.title'),
    key: 'form',
    icon: <FormOutlined />,
    children: [
      {
        label: translate('menu.form.children.basic'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.form.children.step'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.form.children.advanced'),
        key: _.uniqueId()
      }
    ]
  },
  {
    label: translate('menu.list.title'),
    key: 'list',
    icon: <UnorderedListOutlined />,
    children: [
      {
        label: translate('menu.list.children.search'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.list.children.step'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.list.children.basic'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.list.children.card'),
        key: _.uniqueId()
      }
    ]
  },
  {
    label: translate('menu.profiles.title'),
    key: 'profile',
    icon: <ProfileOutlined />,
    children: [
      {
        label: translate('menu.profiles.children.basic'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.profiles.children.advanced'),
        key: _.uniqueId()
      }
    ]
  },
  {
    label: translate('menu.alert.title'),
    key: 'alert',
    icon: <AlertOutlined />,
    children: [
      {
        label: translate('menu.alert.children.warning'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.alert.children.success'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.alert.children.confirm'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.alert.children.error'),
        key: _.uniqueId()
      }
    ]
  },
  {
    label: translate('menu.exception.title'),
    key: ErrorRouterLink.BASE_PATH,
    icon: <WarningOutlined />,
    children: [
      {
        label: translate('menu.exception.children.403'),
        key: ErrorRouterLink.FORBIDDEN
      },
      {
        label: translate('menu.exception.children.404'),
        key: ErrorRouterLink.NOT_FOUND
      },
      {
        label: translate('menu.exception.children.500'),
        key: ErrorRouterLink.INTERNAL_SERVER_ERROR
      }
    ]
  },
  {
    label: translate('menu.icons.title'),
    key: 'icons',
    icon: <SafetyCertificateOutlined />,
    children: [
      {
        label: translate('menu.icons.children.default'),
        key: _.uniqueId()
      },
      {
        label: translate('menu.icons.children.custom'),
        key: _.uniqueId()
      }
    ]
  }
]

export { sidebarConfigs }
