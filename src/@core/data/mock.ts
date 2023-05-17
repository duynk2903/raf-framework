import { listBugs } from '@core/data/dashboard/bugs'
import { rateData } from '@core/data/dashboard/rate'
import { teamReportData } from '@core/data/dashboard/report'

const mockModule: any = {
  dashboard: {
    listBugs: listBugs,
    rateData: rateData,
    teamReportData: teamReportData
  }
}

export default mockModule
