import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { themeSettingsState } from '@core/components/ngx-theme-setting/setting.recoil'
import {
  DashboardAnalyticsState,
  DashboardDataModel,
  ProjectStatusModel
} from '@pages/dashboard/analytics/analytic.type'
import { Builder } from '@core/helpers/builder.helper'
import {
  useGetDashboardBugReport,
  useGetDashboardData,
  useGetDashboardRateData,
  useGetDashboardTeamReport,
  useGetMemberInformation
} from '@pages/dashboard/dashboard.query'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'

/**
 * Dashboard hooks
 */
const useDashboardAnalytics = () => {
  // Component state
  const themeSettings = useRecoilValue(themeSettingsState)
  const { t: translate } = useTranslation([TranslateEnum.DASHBOARD])
  const [analyticState, setAnalyticState] = useState<DashboardAnalyticsState>(
    Builder<DashboardAnalyticsState>()
      .listTask([])
      .listProject([])
      .projectCalendar([])
      .projectOpportunity([])
      .projectStatus(Builder<ProjectStatusModel>().newProject(0).completed(0).inProgress(0).build())
      .rateData([])
      .memberInformation({
        total: 0,
        members: []
      })
      .listBugs([])
      .teamReportData([])
      .build()
  )

  // React query

  const { isLoading: isLoadingGetDashboardData, refetch: getDashboardData } = useGetDashboardData({
    enabled: false,
    onSuccess: (data: DashboardDataModel) => {
      setAnalyticState({
        ...analyticState,
        projectStatus: data?.status,
        listTask: data?.listTask,
        listProject: data?.listProject,
        projectCalendar: data?.projectCalendar,
        projectOpportunity: data?.projectOpportunity
      })
    }
  })

  const { isLoading: isLoadingGetDashboardRateData, refetch: getDashboardRateData } = useGetDashboardRateData({
    enabled: false,
    onSuccess: (data: Record<any, any>[]) => {
      setAnalyticState({
        ...analyticState,
        rateData: data
      })
    }
  })

  const { isLoading: isLoadingGetMembers, refetch: getMembersInformation } = useGetMemberInformation({
    enabled: false,
    onSuccess: (data: Record<any, any>) => {
      setAnalyticState({
        ...analyticState,
        memberInformation: data
      })
    }
  })

  const { isLoading: isLoadingGetListBugs, refetch: getListBug } = useGetDashboardBugReport({
    enabled: false,
    onSuccess: (data: Record<any, any>[]) => {
      setAnalyticState({
        ...analyticState,
        listBugs: data
      })
    }
  })

  const { isLoading: isLoadingGetTeamReport, refetch: getTeamReport } = useGetDashboardTeamReport({
    enabled: false,
    onSuccess: (data: Record<any, any>[]) => {
      setAnalyticState({
        ...analyticState,
        teamReportData: data
      })
    }
  })

  /**
   * Initial effects
   */
  useEffect(() => {
    const prepareData: any = async () => {
      await getDashboardData()
      await getDashboardRateData()
      await getMembersInformation()
      await getListBug()
      await getTeamReport()
    }
    prepareData()
  }, [])

  return {
    themeSettings,
    isLoading:
      isLoadingGetDashboardData ||
      isLoadingGetDashboardRateData ||
      isLoadingGetMembers ||
      isLoadingGetListBugs ||
      isLoadingGetTeamReport,
    ...analyticState,
    translate
  }
}

export { useDashboardAnalytics }
