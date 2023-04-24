import React from 'react'
import { Avatar } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { TFunction } from 'i18next'
import { TranslateLanguageEnum } from '@core/enums/translate.enum'
import { changeLanguage, getCurrentLanguage } from '@core/helpers/i18n.helper'
import { sidebarConfigs } from '@core/configs/sidebar.config'
import { MenuModel } from '@core/models/menu.model'

/**
 * Menu header application configuration
 * @param translate
 */
const menusConfig = (translate: TFunction): MenuModel[] => sidebarConfigs(translate)

/**
 * Header menu action configuration with translate function
 * @param translate
 * @param username
 * @param logOut
 */
const headerMenuActions = (translate: TFunction, username: string, logOut: () => void): MenuModel[] => [
  {
    key: 'user',
    label: username,
    className: 'user',
    icon: (
      <Avatar
        className="username"
        icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="Setting" />}
      />
    ),
    children: [
      {
        key: 'profile',
        label: translate('menu.profile'),
        icon: <UserOutlined />
      },
      {
        key: 'logout',
        onClick: logOut,
        label: translate('menu.logout'),
        icon: <LogoutOutlined />
      }
    ]
  },
  {
    key: 'search',
    label: getCurrentLanguage().toUpperCase(),
    icon: (
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        data-darkreader-inline-fill="">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
          className="css-c4d79v"></path>
      </svg>
    ),
    children: [
      {
        key: TranslateLanguageEnum.ENGLISH,
        label: translate('menu.language.en'),
        onClick: async () => await changeLanguage(TranslateLanguageEnum.ENGLISH)
      },
      {
        key: TranslateLanguageEnum.KOREA,
        label: translate('menu.language.ko'),
        onClick: async () => await changeLanguage(TranslateLanguageEnum.KOREA)
      }
    ]
  }
]

export { menusConfig, headerMenuActions }
