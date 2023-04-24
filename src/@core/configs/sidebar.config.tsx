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

/**
 * The left sidebar configuration
 */
const sidebarConfigs = (translate: TFunction): MenuProps[MenuType.ITEMS] => [
  {
    label: translate('menu.dashboards.title'),
    key: 'dashboard',
    icon: <DashboardOutlined />,
    children: [
      {
        label: translate('menu.dashboards.children.analytics'),
        key: 1
      },
      {
        label: translate('menu.dashboards.children.monitor'),
        key: 2
      },
      {
        label: translate('menu.dashboards.children.workspace'),
        key: 3
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
        key: 4
      },
      {
        label: translate('menu.form.children.step'),
        key: 5
      },
      {
        label: translate('menu.form.children.advanced'),
        key: 5
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
        key: 6
      },
      {
        label: translate('menu.list.children.step'),
        key: 7
      },
      {
        label: translate('menu.list.children.basic'),
        key: 8
      },
      {
        label: translate('menu.list.children.card'),
        key: 9
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
        key: 10
      },
      {
        label: translate('menu.profiles.children.advanced'),
        key: 11
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
        key: 12
      },
      {
        label: translate('menu.alert.children.success'),
        key: '13.3'
      },
      {
        label: translate('menu.alert.children.confirm'),
        key: '14.3'
      },
      {
        label: translate('menu.alert.children.error'),
        key: '15.3'
      }
    ]
  },
  {
    label: translate('menu.exception.title'),
    key: 'exceptions',
    icon: <WarningOutlined />,
    children: [
      {
        label: translate('menu.exception.children.403'),
        key: 14
      },
      {
        label: translate('menu.exception.children.404'),
        key: 15
      },
      {
        label: translate('menu.exception.children.500'),
        key: 16
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
        key: 17
      },
      {
        label: translate('menu.icons.children.custom'),
        key: 18
      }
    ]
  }
]

export { sidebarConfigs }
