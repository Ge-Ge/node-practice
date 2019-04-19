pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                dockerfile {
                    args '-u root'
                }
            }
            steps {
                  sh 'npm install --registry=https://registry.npm.taobao.org'
                  sh 'rm -rf node_modules package-lock.json'
            }
        }
        // 部署release分支
        stage('Deliver') {
            agent any
            when {
                expression { NODE_NAME ==~ /release\/.*/ }
            }
            environment {
                ACCESS_KEY = credentials('b03844a7-91e7-4aef-a50e-74ad670dd834')
                REMOTE_KEY = credentials('ffab05c3-ff0e-4586-a611-028e7eb12a19')
            }
            steps {
                sh 'docker build -t lupin34/node-practice:latest -f Dockerfile .'
                sh 'echo $ACCESS_KEY_PSW | docker login -u $ACCESS_KEY_USR --password-stdin'
                sh 'docker push lupin34/node-practice'
                sshagent (credentials: ['ffab05c3-ff0e-4586-a611-028e7eb12a19']) {
                    sh 'scp ./docker-compose.yml lupin@116.196.76.134:~/node-practice.yml'
                    sh 'ssh -o StrictHostKeyChecking=no -l lupin 116.196.76.134 docker-compose -f node-practice.yml up -d'
                }
                sh 'git clean -fdx'
            }
        }
        // 更新dev分支
        stage('update') {
            agent any
            environment {
                ACCESS_KEY = credentials('b03844a7-91e7-4aef-a50e-74ad670dd834')
                REMOTE_KEY = credentials('ffab05c3-ff0e-4586-a611-028e7eb12a19')
            }
            steps {
                sshagent (credentials: ['ffab05c3-ff0e-4586-a611-028e7eb12a19']) {
                    sh "ssh -o StrictHostKeyChecking=no -l lupin 116.196.76.134 'cd /var/lib/jenkins/workspace/node-practice && pwd;\
                    git fetch --all && git reset --hard origin/dev && git pull;\
                    docker build -t lupin34/node-practice:latest -f Dockerfile .;\
                    docker-compose up -d' "
                }
            }
        }
    }
}
