import {
  DashboardCalendarModel,
  DashboardOpportunityModel,
  DashboardProjectModel,
  DashboardTaskModel,
  ProjectStatus,
  ProjectStatusModel
} from '@pages/dashboard/analytics/analytic.type'

/**
 * Fake data list bugs
 */
const listBugs = [
  {
    month: '01-2023',
    team: 'Team 1',
    value: 1450
  },
  {
    month: '01-2023',
    team: 'Team 2',
    value: 850
  },
  {
    month: '01-2023',
    team: 'Team 3',
    value: 1000
  },
  {
    month: '01-2023',
    team: 'Team 4',
    value: 700
  },
  {
    month: '02-2023',
    team: 'Team 1',
    value: 900
  },
  {
    month: '02-2023',
    team: 'Team 2',
    value: 850
  },
  {
    month: '02-2023',
    team: 'Team 3',
    value: 1100
  },
  {
    month: '02-2023',
    team: 'Team 4',
    value: 600
  },
  {
    month: '03-2023',
    team: 'Team 1',
    value: 1600
  },
  {
    month: '03-2023',
    team: 'Team 2',
    value: 500
  },
  {
    month: '03-2023',
    team: 'Team 3',
    value: 600
  },
  {
    month: '03-2023',
    team: 'Team 4',
    value: 1000
  },
  {
    month: '04-2023',
    team: 'Team 1',
    value: 1400
  },
  {
    month: '04-2023',
    team: 'Team 2',
    value: 900
  },
  {
    month: '04-2023',
    team: 'Team 3',
    value: 1000
  },
  {
    month: '04-2023',
    team: 'Team 4',
    value: 900
  },
  {
    month: '05-2023',
    team: 'Team 1',
    value: 1400
  },
  {
    month: '05-2023',
    team: 'Team 2',
    value: 900
  },
  {
    month: '05-2023',
    team: 'Team 3',
    value: 1000
  },
  {
    month: '05-2023',
    team: 'Team 4',
    value: 600
  },
  {
    month: '06-2023',
    team: 'Team 1',
    value: 900
  },
  {
    month: '06-2023',
    team: 'Team 2',
    value: 850
  },
  {
    month: '06-2023',
    team: 'Team 3',
    value: 1000
  },
  {
    month: '06-2023',
    team: 'Team 4',
    value: 600
  },
  {
    month: '07-2023',
    team: 'Team 1',
    value: 1700
  },
  {
    month: '07-2023',
    team: 'Team 2',
    value: 600
  },
  {
    month: '07-2023',
    team: 'Team 3',
    value: 700
  },
  {
    month: '07-2023',
    team: 'Team 4',
    value: 1000
  },
  {
    month: '08-2023',
    team: 'Team 1',
    value: 1800
  },
  {
    month: '08-2023',
    team: 'Team 2',
    value: 1100
  },
  {
    month: '08-2023',
    team: 'Team 3',
    value: 1500
  },
  {
    month: '08-2023',
    team: 'Team 4',
    value: 1400
  }
]

/**
 * Fake the rate data
 */
const rateData = [
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-13',
    close: 2887.4265,
    open: 2804.2322,
    high: 2910.8812,
    low: 2799.9841,
    vol: 366450436,
    amount: 393019665.2
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-12',
    close: 2923.4856,
    open: 2936.0163,
    high: 2944.4651,
    low: 2906.2838,
    vol: 307778457,
    amount: 328209202.4
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-11',
    close: 2968.5174,
    open: 3001.7616,
    high: 3010.0286,
    low: 2968.5174,
    vol: 352470970,
    amount: 378766619
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-10',
    close: 2996.7618,
    open: 2918.9347,
    high: 3000.2963,
    low: 2904.7989,
    vol: 393296648,
    amount: 425017184.8
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-09',
    close: 2943.2907,
    open: 2987.1805,
    high: 2989.2051,
    low: 2940.7138,
    vol: 414560736,
    amount: 438143854.6
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-06',
    close: 3034.5113,
    open: 3039.9395,
    high: 3052.4439,
    low: 3029.4632,
    vol: 362061533,
    amount: 377388542.7
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-05',
    close: 3071.6771,
    open: 3036.1545,
    high: 3074.2571,
    low: 3022.9262,
    vol: 445425806,
    amount: 482770471.4
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-04',
    close: 3011.6657,
    open: 2981.806,
    high: 3012.0035,
    low: 2974.3583,
    vol: 353338278,
    amount: 389893917.5
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-03',
    close: 2992.8968,
    open: 3006.8888,
    high: 3026.842,
    low: 2976.623,
    vol: 410108047,
    amount: 447053681.5
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-02',
    close: 2970.9312,
    open: 2899.31,
    high: 2982.5068,
    low: 2899.31,
    vol: 367333369,
    amount: 397244201.2
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-28',
    close: 2880.3038,
    open: 2924.6407,
    high: 2948.1261,
    low: 2878.5443,
    vol: 401216914,
    amount: 432657775
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-27',
    close: 2991.3288,
    open: 2992.4919,
    high: 3009.4575,
    low: 2980.4774,
    vol: 350523658,
    amount: 395955641.5
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-26',
    close: 2987.9287,
    open: 2978.4195,
    high: 3028.7788,
    low: 2974.9423,
    vol: 469049552,
    amount: 495341447.3
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-25',
    close: 3013.0501,
    open: 2982.0696,
    high: 3016.9458,
    low: 2943.7168,
    vol: 441622762,
    amount: 513128644.6
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-24',
    close: 3031.2333,
    open: 3027.8925,
    high: 3042.1821,
    low: 3007.3557,
    vol: 370430044,
    amount: 451601363.1
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-21',
    close: 3039.6692,
    open: 3022.2455,
    high: 3058.898,
    low: 3020.141,
    vol: 364557276,
    amount: 445062076.7
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-20',
    close: 3030.1542,
    open: 2981.8802,
    high: 3031.3706,
    low: 2968.4451,
    vol: 345732881,
    amount: 413761364.1
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-19',
    close: 2975.4019,
    open: 2979.5223,
    high: 2998.2718,
    low: 2971.8219,
    vol: 315141151,
    amount: 381331160.4
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-18',
    close: 2984.9716,
    open: 2981.4097,
    high: 2990.6003,
    low: 2960.7751,
    vol: 311665913,
    amount: 374998562.6
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-17',
    close: 2983.6224,
    open: 2924.9913,
    high: 2983.6371,
    low: 2924.9913,
    vol: 313198007,
    amount: 367014340.1
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-14',
    close: 2917.0077,
    open: 2899.8659,
    high: 2926.9427,
    low: 2899.5739,
    vol: 250650627,
    amount: 308080368.7
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-02-13',
    close: 2906.0735,
    open: 2927.1443,
    high: 2935.406,
    low: 2901.2425,
    vol: 274804844,
    amount: 334526327.4
  }
]

/**
 * Fake team report data
 */
const teamReportData = [
  {
    type: 'Team 1',
    value: 27
  },
  {
    type: 'Team 2',
    value: 25
  },
  {
    type: 'Team 3',
    value: 18
  },
  {
    type: 'Team 4',
    value: 15
  },
  {
    type: 'Team 5',
    value: 10
  },
  {
    type: 'Team 6',
    value: 5
  }
]

/**
 * Fake project status data
 */
const projectStatusData: ProjectStatusModel = {
  inProgress: 4,
  newProject: 7,
  completed: 102
}

/**
 * List my tasks for the dashboard screen
 */
const myTaskData: DashboardTaskModel[] = [
  {
    name: 'Create base source code frontend',
    description: 'Sending reports',
    isCompleted: false,
    timeRemaining: `00 : 15`
  },
  {
    name: 'Implement new dashboard screen',
    description: 'Sending reports',
    isCompleted: true,
    timeRemaining: `00 : 30`
  },
  {
    name: 'Review code of dashboard screen',
    description: 'Sending reports',
    isCompleted: true,
    timeRemaining: `00 : 45`
  }
]

/**
 * Fake the list project
 */
const listProjects: DashboardProjectModel[] = [
  {
    projectName: 'Hansol Landing page',
    companyName: 'CMC Company INC.',
    timeStart: '10 January 2023',
    status: ProjectStatus.ON_HOLD
  },
  {
    projectName: 'MatchBase Admin Page',
    companyName: 'CMC Company INC.',
    timeStart: '10 January 2023',
    status: ProjectStatus.PENDING
  },
  {
    projectName: 'Fresh Meal Landing Page',
    companyName: 'CMC Company INC.',
    timeStart: '10 January 2023',
    status: ProjectStatus.PROGRESS
  }
]

/**
 * Fake the calendar data
 */
const myCalendarData: DashboardCalendarModel[] = [
  {
    startTime: '09 : 15',
    endTime: '10: 15',
    title: 'Hansol daily meeting',
    description: 'Project meeting'
  },
  {
    startTime: '11 : 15',
    endTime: '11: 45',
    title: 'Match base daily meeting',
    description: 'Project meeting'
  },
  {
    startTime: '13 : 15',
    endTime: '14: 45',
    title: 'Aerix interview frontend',
    description: 'Interview meeting'
  }
]

/**
 * Fake project opportunity data
 */
const projectOpportunityData: DashboardOpportunityModel[] = [
  {
    projectName: 'Hansol Project',
    description: 'Project meeting',
    projectTime: '10 January 2022',
    rate: '1.135.000,00'
  },
  {
    projectName: 'MatchBase Project',
    description: 'Project meeting',
    projectTime: '10 January 2022',
    rate: '1.135.000,00'
  },
  {
    projectName: 'Aerix Project',
    description: 'Project meeting',
    projectTime: '10 January 2022',
    rate: '1.135.000,00'
  }
]

const fakeTeamMember: Record<any, any> = {
  total: 27,
  members: Array.from({ length: 7 }).map((_, index) => ({
    name: `Tommy ${index}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`
  }))
}

export const mockDashBoardData = {
  listBugs,
  rateData,
  teamReportData,
  projectStatusData,
  myTaskData,
  listProjects,
  myCalendarData,
  projectOpportunityData,
  fakeTeamMember
}
