import React, { FC } from 'react'
import { Avatar, Button, Card, Col, Image, Input, Row, Skeleton, Space, Tag, Tooltip, Typography } from 'antd'
import { useDashboardAnalytics } from '@pages/dashboard/analytics/analytics.hook'
import NgxAnimation from '@core/components/ngx-animation/animation.component'
import {
  AntDesignOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  FieldTimeOutlined,
  FileSearchOutlined,
  FolderOpenOutlined,
  MessageOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined
} from '@ant-design/icons'
import { ThemeColorStyle } from '@core/enums/theme.enum'
import { Column, Pie, Stock } from '@ant-design/plots'
import { ProjectStatus } from '@pages/dashboard/analytics/analytic.type'

/**
 * Dashboard Component
 * @constructor
 */
const DashboardAnalytic: FC = () => {
  const {
    themeSettings,
    isLoading,
    projectStatus,
    listTask,
    listProject,
    projectCalendar,
    projectOpportunity,
    rateData,
    memberInformation,
    listBugs,
    teamReportData
  } = useDashboardAnalytics()
  return (
    <NgxAnimation type="fade-left" delay={300}>
      <Row gutter={[24, 24]} className="mt-3">
        <Col span={16}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row gutter={[24, 24]}>
                <Col span={20}>
                  {isLoading ? (
                    <Skeleton.Input active size="large" className="w-full" />
                  ) : (
                    <Input autoFocus suffix={<SearchOutlined />} placeholder="Search" size="large" />
                  )}
                </Col>
                <Col span={4}>
                  {isLoading ? (
                    <Skeleton.Button size="large" className="w-full pl-5" active />
                  ) : (
                    <Button
                      type="primary"
                      className="font-normal w-full"
                      size="large"
                      style={{ backgroundColor: '#436BFF' }}>
                      Create <PlusOutlined />
                    </Button>
                  )}
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Card type="inner">
                    <Skeleton loading={isLoading} avatar paragraph={false} active style={{ minHeight: 50 }}>
                      <Row gutter={[16, 16]}>
                        <Col span={6}>
                          <Avatar style={{ backgroundColor: '#FBA476' }} size={48} icon={<FileSearchOutlined />} />
                        </Col>
                        <Col span={18}>
                          <Typography.Title level={4} className="mb-0">
                            {projectStatus?.newProject} Project
                          </Typography.Title>
                          <Typography.Text type="secondary">Upcoming</Typography.Text>
                        </Col>
                      </Row>
                    </Skeleton>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card type="inner">
                    <Skeleton loading={isLoading} avatar paragraph={false} active style={{ minHeight: 50 }}>
                      <Row gutter={[16, 16]}>
                        <Col span={6}>
                          <Avatar style={{ backgroundColor: '#5FB0FE' }} size={48} icon={<CalendarOutlined />} />
                        </Col>
                        <Col span={18}>
                          <Typography.Title level={4} className="mb-0">
                            {projectStatus?.inProgress} Project
                          </Typography.Title>
                          <Typography.Text type="secondary">On Progress</Typography.Text>
                        </Col>
                      </Row>
                    </Skeleton>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card type="inner">
                    <Skeleton loading={isLoading} avatar paragraph={false} active style={{ minHeight: 50 }}>
                      <Row gutter={[16, 16]}>
                        <Col span={6}>
                          <Avatar style={{ backgroundColor: '#3ADDC6' }} size={48} icon={<CheckCircleOutlined />} />
                        </Col>
                        <Col span={18}>
                          <Typography.Title level={4} className="mb-0">
                            {projectStatus?.completed} Project
                          </Typography.Title>
                          <Typography.Text type="secondary">Completed</Typography.Text>
                        </Col>
                      </Row>
                    </Skeleton>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card>
                    <Skeleton loading={isLoading} avatar active paragraph={{ rows: 9 }}>
                      <Typography.Title level={4}>My Tasks</Typography.Title>
                      <Row gutter={[24, 24]}>
                        {listTask &&
                          listTask.map(({ name, description, timeRemaining, isCompleted }) => (
                            <Col span={24} key={name}>
                              <Typography.Title level={5}>
                                {name}
                                {isCompleted ? (
                                  <CheckCircleOutlined
                                    style={{ color: ThemeColorStyle.DAYBREAK_BLUE }}
                                    className="absolute right-2 top-1 text-xl"
                                  />
                                ) : (
                                  <CheckCircleOutlined className="absolute right-2 top-1 text-xl" />
                                )}
                              </Typography.Title>
                              <Typography.Text type="secondary">
                                <MessageOutlined className="mr-2" /> {description}
                              </Typography.Text>
                              <Col span={24} className="p-0 mt-2">
                                <Tag
                                  color={isCompleted ? '#616161' : '#E33D09'}
                                  className="text-center w-20 rounded-xl">
                                  {timeRemaining}
                                </Tag>
                              </Col>
                            </Col>
                          ))}
                      </Row>
                    </Skeleton>
                  </Card>
                </Col>

                <Col span={12}>
                  <Card>
                    <Skeleton loading={isLoading} avatar active paragraph={{ rows: 9 }}>
                      <Typography.Title level={4}>My Projects</Typography.Title>
                      <Row gutter={[24, 24]}>
                        {listProject &&
                          listProject.map(({ projectName, companyName, status, timeStart }) => (
                            <Col span={24} key={projectName}>
                              <Typography.Title level={5}>
                                <FolderOpenOutlined
                                  className="mr-1"
                                  style={{
                                    color:
                                      status === ProjectStatus.ON_HOLD
                                        ? '#E43E0A'
                                        : status === ProjectStatus.PENDING
                                        ? '#FEBB55'
                                        : '#6CB350'
                                  }}
                                />
                                {projectName}
                                <Tag
                                  color={
                                    status === ProjectStatus.ON_HOLD
                                      ? '#E43E0A'
                                      : status === ProjectStatus.PENDING
                                      ? '#FEBB55'
                                      : '#6CB350'
                                  }
                                  className="text-center w-20 rounded-xl absolute right-0 top-1">
                                  {status}
                                </Tag>
                              </Typography.Title>
                              <Typography.Text type="secondary">{companyName}</Typography.Text>
                              <Col span={24} className="p-0 mt-2">
                                <Tag color="#282828" className="text-center w-32 rounded-xl">
                                  {timeStart}
                                </Tag>
                              </Col>
                            </Col>
                          ))}
                      </Row>
                    </Skeleton>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card style={{ minHeight: 389 }}>
                    <Skeleton loading={isLoading} avatar active paragraph={{ rows: 9 }}>
                      <Typography.Title level={4}>My Calendar</Typography.Title>

                      <Typography.Title level={5} className="mt-3">
                        {new Date().toDateString()}
                      </Typography.Title>
                      <Row gutter={[24, 24]} className="mt-5">
                        {projectCalendar &&
                          projectCalendar.map(({ startTime, endTime, title, description }) => (
                            <Col span={24} key={title}>
                              <Row gutter={[16, 16]}>
                                <Col span={18}>
                                  <Row>
                                    <Col span={8}>
                                      <Tag color="#6DAE52" className="text-center w-20 rounded-xl">
                                        {startTime}
                                      </Tag>
                                    </Col>
                                    <Col span={16}>
                                      <Typography.Title level={5}> {title}</Typography.Title>
                                    </Col>

                                    <Col span={8}>
                                      <Tag color="#626262" className="text-center w-20 rounded-xl">
                                        {endTime}
                                      </Tag>
                                    </Col>
                                    <Col span={16}>
                                      <Typography.Text type="secondary"> {description}</Typography.Text>
                                    </Col>
                                  </Row>
                                </Col>

                                <Col span={6}>
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
                                </Col>
                              </Row>
                            </Col>
                          ))}
                      </Row>
                    </Skeleton>
                  </Card>
                </Col>

                <Col span={12}>
                  <Card>
                    <Skeleton loading={isLoading} avatar active paragraph={{ rows: 9 }}>
                      <Typography.Title level={4}>Opportunities</Typography.Title>
                      <Row gutter={[24, 24]}>
                        {projectOpportunity &&
                          projectOpportunity.map(({ projectName, description, projectTime, rate }) => (
                            <Col span={24} key={projectName}>
                              <Typography.Title level={5}>
                                {projectName}
                                <Typography.Text className="absolute right-2 top-1">${rate}</Typography.Text>
                              </Typography.Title>
                              <Typography.Text type="secondary">
                                <MessageOutlined className="mr-2" /> {description}
                              </Typography.Text>
                              <Col span={24} className="p-0 mt-2">
                                <Tag color="#262626" className="text-center w-32 rounded-xl">
                                  {projectTime}
                                </Tag>
                              </Col>
                            </Col>
                          ))}
                      </Row>
                    </Skeleton>
                  </Card>
                </Col>

                <Col span={24}>
                  <Card>
                    <Typography.Title level={4}>Rate</Typography.Title>

                    <Stock
                      xField="trade_date"
                      loading={isLoading}
                      theme={themeSettings?.mode}
                      yField={['open', 'close', 'high', 'low']}
                      data={rateData}
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Skeleton loading={isLoading} active avatar paragraph={false}>
                  <Typography.Paragraph className="mb-5">
                    Team members{' '}
                    <span style={{ color: ThemeColorStyle.DAYBREAK_BLUE }}>({memberInformation?.total ?? 0})</span>
                  </Typography.Paragraph>
                  <Space size={19} wrap>
                    {memberInformation &&
                      memberInformation?.members.map(({ name, avatar }: any) => (
                        <Avatar key={name} size="large" src={<img src={avatar} alt="avatar" />} />
                      ))}
                    <Button size="large" type="dashed" shape="circle" icon={<PlusOutlined />} />
                  </Space>
                </Skeleton>
              </Col>

              <Col span={24}>
                <Skeleton paragraph={false} active loading={isLoading}>
                  <Typography.Paragraph className="mt-5">Recent activities</Typography.Paragraph>
                </Skeleton>
                <Row gutter={[16, 16]} className="mt-5">
                  <Col span={3}>
                    <Skeleton loading={isLoading} avatar active paragraph={false}>
                      <Avatar
                        size="large"
                        src={
                          <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="avatar" />
                        }
                      />
                    </Skeleton>
                  </Col>
                  <Col span={21} className="mt-0">
                    <Skeleton loading={isLoading} paragraph={{ rows: 3 }} active>
                      <Typography.Text type="secondary">
                        <Typography.Text>Tommy</Typography.Text> pushed to
                        <span className="underline ml-2">feature/get_table_relationship</span>
                        <Typography.Text> jenkins/isdc-backup-backend</Typography.Text>
                      </Typography.Text>
                    </Skeleton>
                  </Col>
                  <Col span={24}>
                    {isLoading ? (
                      <Skeleton.Image className="w-full" style={{ height: 250 }} active />
                    ) : (
                      <>
                        <Image
                          loading="lazy"
                          className="rounded-lg"
                          rootClassName="mb-2"
                          src="https://static-cse.canva.com/blob/649196/createbanners.jpg"
                        />
                        <Typography.Text type="secondary">
                          <FieldTimeOutlined /> Today at 14:20 pm
                        </Typography.Text>
                      </>
                    )}
                  </Col>
                </Row>
              </Col>

              <Col span={24} className="mt-5">
                <Typography.Paragraph>Bugs</Typography.Paragraph>

                <Column
                  xField="month"
                  yField="value"
                  loading={isLoading}
                  style={{ maxHeight: 355 }}
                  theme={themeSettings?.mode}
                  data={listBugs}
                  seriesField="team"
                  columnStyle={{ radius: [20, 20, 0, 0] }}
                  isGroup
                />
              </Col>

              <Col span={24} className="mt-5">
                <Typography.Paragraph className="mt-5">Team report</Typography.Paragraph>

                <Pie
                  angleField="value"
                  colorField="type"
                  data={teamReportData}
                  radius={0.8}
                  loading={isLoading}
                  className="mb-3"
                  theme={themeSettings?.mode}
                  appendPadding={10}
                  label={{
                    type: 'outer',
                    content: '{name} {percentage}'
                  }}
                  legend={{
                    position: 'bottom'
                  }}
                  interactions={[
                    {
                      type: 'pie-legend-active'
                    },
                    {
                      type: 'element-active'
                    }
                  ]}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </NgxAnimation>
  )
}

export default DashboardAnalytic
