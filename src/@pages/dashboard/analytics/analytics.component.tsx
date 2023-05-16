import React, { FC } from 'react'
import { Avatar, Card, Col, Progress, Row, Skeleton, Space, Spin, Tag, Tooltip, Typography } from 'antd'
import { ColumnsType } from 'antd/es/table'
import mockModule from '@core/data/mock'
import { useDashboardAnalytics } from '@pages/dashboard/analytics/analytics.hook'
import { AntDesignOutlined, DeleteOutlined, MailOutlined, PropertySafetyFilled, UserOutlined } from '@ant-design/icons'
import { Line, Radar } from '@ant-design/plots'
import NgxAnimation from '@core/components/ngx-animation/animation.component'
import NgxTable, { NgxSkeletonTable } from '@core/components/ngx-table/table.component'
import { UserModel } from '@pages/dashboard/analytics/analytic.type'

const columns: ColumnsType<UserModel> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_) => (
      <Space size="middle">
        <MailOutlined />
        <PropertySafetyFilled />
        <DeleteOutlined />
      </Space>
    )
  }
]

/**
 * Dashboard Component
 * @constructor
 */
const DashboardAnalytic: FC = () => {
  const { data, listDataRadar, themeSettings, isLoading } = useDashboardAnalytics()
  const config: any = { data, ...mockModule.dashboard.financeChart }
  const radarChartConfig: any = { data: listDataRadar, ...mockModule.dashboard.radarChartConfig }
  return (
    <NgxAnimation type="fade-left" delay={300}>
      <Row gutter={[16, 16]}>
        <Col span={12} className="mt-3">
          <Typography.Title level={5}>List users</Typography.Title>
          <NgxSkeletonTable<UserModel> columns={columns} loading={isLoading} rowCount={5} active>
            <NgxTable<UserModel>
              bordered
              data={mockModule.dashboard.listUsers}
              columns={columns}
              style={{ height: 350 }}
              pagination={false}
            />
          </NgxSkeletonTable>
        </Col>
        <Col span={12} className="mt-3">
          <Typography.Title level={5}>Finance</Typography.Title>
          <Card size="default" style={{ maxHeight: 336 }}>
            <Line {...config} style={{ maxHeight: 285 }} loading={isLoading} theme={themeSettings?.mode} />
          </Card>
        </Col>
        <Col span={12}>
          <Typography.Title level={5}>Process radar</Typography.Title>
          <Card>
            <Radar {...radarChartConfig} loading={isLoading} theme={themeSettings?.mode} />
          </Card>
        </Col>
        <Col span={12}>
          <Typography.Title level={5}>Progress bar</Typography.Title>
          <Card type="inner" style={{ minHeight: 450 }}>
            <Skeleton loading={isLoading} paragraph={{ rows: 8 }} active avatar>
              <Space direction="vertical" className="w-full">
                <Progress percent={30} />
                <Progress percent={95} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
              </Space>
              <Typography.Title level={5}>Spinner</Typography.Title>
              <Space size="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
              </Space>
              <Typography.Title level={5}>Sponsor</Typography.Title>
              <Avatar.Group className="mt-2">
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                <a href="https://ant.design">
                  <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                </a>
                <Tooltip title="Ant User" placement="top">
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
              </Avatar.Group>
            </Skeleton>
          </Card>
        </Col>
      </Row>
    </NgxAnimation>
  )
}

export default DashboardAnalytic
