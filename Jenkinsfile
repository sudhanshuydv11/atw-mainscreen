pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "building"
                cd docs
                git clone https://github.com/sudhanshuydv11/atw-mainscreen.git
                cd atw-mainscreen
                npm ci
                npm run build 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}