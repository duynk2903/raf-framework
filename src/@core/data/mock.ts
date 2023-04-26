import { financeConfig } from '@core/data/dashboard/finance'
import { listUser } from '@core/data/dashboard/user'
import { radarConfigs } from '@core/data/dashboard/radar'

const mockModule: any = {
  dashboard: {
    financeChart: financeConfig,
    listUsers: listUser,
    radarChartConfig: radarConfigs
  }
}

export default mockModule
