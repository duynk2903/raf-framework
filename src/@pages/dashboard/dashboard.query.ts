import { QueryOptionModel } from '@core/models/query.model'
import { useAppQuery } from '@core/helpers/query.helper'
import { delay } from '@core/helpers/action.helper'
import { Builder } from '@core/helpers/builder.helper'
import { DashboardDataModel } from '@pages/dashboard/analytics/analytic.type'
import mockModule from '@core/data/mock'

/**
 * Use get dashboard data query
 * @param option
 */
function useGetDashboardData(option: QueryOptionModel) {
  return useAppQuery(
    ['getDashboardData'],
    async () => {
      const { projectStatusData, myTaskData, listProjects, myCalendarData, projectOpportunityData } =
        mockModule.dashboard
      return Promise.resolve(
        Builder<DashboardDataModel>()
          .status(projectStatusData)
          .listTask(myTaskData)
          .listProject(listProjects)
          .projectCalendar(myCalendarData)
          .projectOpportunity(projectOpportunityData)
          .build()
      ).then(delay(300))
    },
    option
  )
}

/**
 * Use get dashboard rate data query
 * @param option
 */
function useGetDashboardRateData(option: QueryOptionModel) {
  return useAppQuery(
    ['getDashboardRateData'],
    async () => {
      return Promise.resolve(mockModule.dashboard.rateData).then(delay(300))
    },
    option
  )
}

/**
 * Use get dashboard member query
 * @param option
 */
function useGetMemberInformation(option: QueryOptionModel) {
  return useAppQuery(
    ['getDashboardMemberInformation'],
    async () => {
      return Promise.resolve(mockModule.dashboard.fakeTeamMember).then(delay(300))
    },
    option
  )
}

/**
 * Use get dashboard bugs report query
 * @param option
 */
function useGetDashboardBugReport(option: QueryOptionModel) {
  return useAppQuery(
    ['getDashboardBugReport'],
    async () => {
      return Promise.resolve(mockModule.dashboard.listBugs).then(delay(300))
    },
    option
  )
}

/**
 * Use get dashboard team report data query
 * @param option
 */
function useGetDashboardTeamReport(option: QueryOptionModel) {
  return useAppQuery(
    ['getDashboardTeamReport'],
    async () => {
      return Promise.resolve(mockModule.dashboard.teamReportData).then(delay(300))
    },
    option
  )
}

export {
  useGetDashboardData,
  useGetDashboardRateData,
  useGetMemberInformation,
  useGetDashboardBugReport,
  useGetDashboardTeamReport
}
