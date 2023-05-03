node {
  try {
    pipeline {
        environment {
              PATH = "$PATH:/usr/bin"
        }
        stage('Checkout source code') {
              checkout scm
        }
        stage('Check environment') {
              echo '-----------------------START CHECK ENVIRONMENT-----------------------------------'
              sh 'git --version'
              echo "Branch: ${env.BRANCH_NAME}"
              sh 'docker compose version'
              sh 'docker -v'
              sh 'printenv'
              sh 'npm -v'
        }

        stage('SonarQube analysis') {
               def SCANNER_HOME = tool 'sonarqubescanner'
               echo "Scanner home: ${SCANNER_HOME}"
               withSonarQubeEnv(credentialsId: 'credentialsId', installationName: 'sonarqube') {
                echo '---------------------START SonarQube-------------------------------------------'
                sh "${SCANNER_HOME}/bin/sonar-scanner \
                                        -Dsonar.projectKey=projectKey \
                                        -Dsonar.projectName=projectName \
                                        -Dsonar.sources=./src/ \
                                        -Dsonar.projectVersion=projectVersion"
                 echo '---------------------END SonarQube-------------------------------------------'
               }
        }

        stage('Quality gate') {
              echo '---------------------START Quality Gate-------------------------------------------'
              timeout(time: 1, unit: 'MINUTES') {
                  waitForQualityGate abortPipeline: false
                }
              echo '---------------------END Wait Quality Gate-------------------------------------------'
        }

        stage('Build and deploy'){
              echo '---------------------------WRITE STEP BUILD AND DEPLOY HERE-------------------------------------'
        }
    }
  }
  catch (err) {
    throw err
  }
}