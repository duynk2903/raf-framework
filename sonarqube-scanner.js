// eslint-disable-next-line @typescript-eslint/no-var-requires
const scanner = require('sonarqube-scanner')

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'sqa_156098240e72d5b1a8a067fc5a8c5e88b5823dee',
    options: {
      'sonar.projectName': 'react-ant-framework',
      'sonar.projectDescription': 'React ant design framework',
      'sonar.projectKey': 'react-ant-framework',
      'sonar.projectVersion': '0.0.1',
      'sonar.exclusions': '',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.sources': './src'
    }
  },
  // eslint-disable-next-line no-undef
  () => process.exit()
)
