pipeline {
    agent any

    stages {
        stage('Clone sources') {
            git url: 'https://github.com/jfrogdev/project-examples.git'
        }
        stage('Build') {
            steps {
                echo "building"
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