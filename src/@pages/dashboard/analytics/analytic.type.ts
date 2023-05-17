export interface ProjectStatusModel {
  newProject: number
  inProgress: number
  completed: number
}

export interface DashboardTaskModel {
  name: string
  description: string
  timeRemaining: string
  isCompleted: boolean
}

export interface DashboardProjectModel {
  projectName: string
  companyName: string
  timeStart: string
  status: ProjectStatus
}

export enum ProjectStatus {
  ON_HOLD = 'On Hold',
  PENDING = 'Pending',
  PROGRESS = 'Progress'
}

export interface DashboardAnalyticsState {
  projectStatus: ProjectStatusModel
  listTask: DashboardTaskModel[]
  listProject: DashboardProjectModel[]
  projectCalendar: DashboardCalendarModel[]
  projectOpportunity: DashboardOpportunityModel[]
  rateData: Record<any, any>[]
  memberInformation: Record<any, any>
  listBugs: Record<any, any>[]
  teamReportData: Record<any, any>[]
}

export interface DashboardCalendarModel {
  startTime: string
  endTime: string
  title: string
  description: string
}

export interface DashboardOpportunityModel {
  projectName: string
  description: string
  rate: string
  projectTime: string
}

export interface DashboardDataModel {
  status: ProjectStatusModel
  listTask: DashboardTaskModel[]
  listProject: DashboardProjectModel[]
  projectCalendar: DashboardCalendarModel[]
  projectOpportunity: DashboardOpportunityModel[]
}
