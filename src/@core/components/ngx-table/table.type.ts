import { SkeletonProps, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { TableProps as RcTableProps } from 'rc-table/lib/Table'

export interface NgxTableProps<T> extends Omit<TableProps<T>, 'dataSource'> {
  isHidden?: boolean
  columns?: NgxTableColumn<T>
  data: NgxTableData<T>[] | any
}

export type NgxSkeletonTableProps<T> = SkeletonProps & {
  columns: ColumnsType<T>
  rowCount?: number
}

export type NgxTableColumn<T> = ColumnsType<T>
export type NgxTableData<T> = RcTableProps<T>['data']
