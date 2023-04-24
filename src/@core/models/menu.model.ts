import * as React from 'react'
import { ItemType } from 'antd/es/menu/hooks/useItems'

export type MenuModel = {
  danger?: boolean
  icon?: React.ReactNode
  title?: string
  theme?: 'dark' | 'light'
  dashed?: boolean
  children: ItemType[]
  parentId?: string
} & ItemType
