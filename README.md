
# CI/CD Pipeline for a Simple Web Application

This contains a simple web application built with Node.js, Dockerized for easy deployment, and automated using GitHub Actions for Continuous Integration (CI) and Continuous Deployment (CD). Ansible is used for configuration management of the application container.


## Project Overview

This project used following features to set up a basic CI/CD pipeline.

- A basic web application that returns the message "Welcome to DevOps World"
- Version control with GitHub
- Docker for containerization
- Ansible for configuration management
- GitHub Actions for automating build, test, and deployment processes

## Requirements

Before getting started, make sure you have the following installed on the server:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Ansible](https://www.ansible.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/) account

## Setup Instructions

Follow the steps below to set up and run this project

### Step1: Install dependencies
    a) Execute cmd npm init -y then it creates package.json file
     
     see below image for reference 
    
    b) Execute cmd npm i express nodemon then it creates node_modules & package-lock.json
    
     see below image for reference 
    
    c) Execute cmd npm i jest and supertest to run tests

     see below image for reference 
    
    

### Step2: Execute web application
    
    a) Create webapp code with Node.js

     see below image for reference 
    
    b) Create test cases 

     see below image for reference 

    c) Save and Run the code by executing cmd "npm start" 
     
     see below image for reference 


### Step3: Docker setup locally



    a) Install Docker locally and it's extension in vs code

    b) Create a "Dockerfile" that will build a Docker image for the web application.

    c) Build the Docker image locally, click on the Dockerfile and select build image in vs code
     
     see below images for reference 

    d) Ensure Docker image has built successfully

     see the below image for reference


### Step4: Creation of Git Repository

    a) Created a public git repo "nodejs-app" and created a "test" branch

    see the below image for reference

    b) Create a directory in local machine and execute below commands
    
- git init
- git add .
- git status
- git commit -m "initial commit"
- git remote add origin <repository-url>
- git checkout -b test
- git push -u origin test



### Step5: Provision infrastructure on AWS

    a) Launch an EC2 instance with t2.large instance type
     
     see the below image for reference

    b) Create a directory & cd into it then install software dependencies as below

        i. Git
        ii. Ansible
        
    c) Clone the Git repo into the server using the below command

     see the below image for reference

    d) Create an inventory file

     see the below image for reference

    e) Create a ansible playbook file
    
    see the below image for reference

    f) Executed git pull cmd to download files from remote repository

     see the below image for reference

    g) Add ansible playbook and inventory file into remote repo using below cmd
      
     see the below image for reference

    h) Run the ansible playbook file to install, build docker image and containarize the image

    see the below image for reference

    i) Ensure docker image and containers are created

    see the below image for reference



### Step6: Setting up CICD pipeline using Git Actions

    a) Create .github/workflows folder in git repo on the project root folder

        see the below image for reference

    b) Created a "first-cicd.yml" pipeline file with the below steps

        see the below image for reference
    
    c) Configure self-hosted runners to run job without depending on Git runners

        Go to GitHub --> Actions --> select Runners --> select Self-hosted runners --> New runner --> select target arch type --> select target OS

        see the below image for reference
    
    d) Follow the steps mentioned based on our target setup
      
      see the below image for reference

    e) Pushes all the changes into git remote repo

        see the below image for reference

    f) CICD pipeline starts upon pushing the changes into git repository

        see the below image for reference


# Acknowledgments

- [Node.js](https://nodejs.org/) for the web application runtime
- [Docker](https://www.docker.com/) for containerizing the application
- [Ansible](https://www.ansible.com/) for automating configuration management
- [Git](https://git-scm.com/) for versioning the code
- [GitHub](https://github.com/) Actions for automating the CICD pipeline.





# Troubleshoots

### Run Ansible Playbook
 
 1. Executes playbook cmd "ansible playbook -i playbook inventory"

- When executed the cmd it throws me a host error as shown in below image since command format is wrong. Corrected my cmd and runs the playbook again. 
- Again, it throws me error mentioning the ip address mentioned i inventory file is not found. I checked on internet and it gives me advise to put as "localhost" both in inventory & playbook file.

2. Error in the stage of installing docker to build and containerizing it.
- In the playbook yaml file, mentioned to install docker file as docker.io (shown in below image). Upon corrected the docker installation format, playbook executed succesfully.

### Self-hosted runners for CICD pipeline

1. Written the cicd pipeline under the folders .github/workflows
- Upon creation, pushed the changes to the git remote repo to start the cicd process. But, it went "queued" for approx 14 mins due to git runners are busy in scheduling the pipeline.
- Checked over internet and followed the git actions steps to configure self-hosted runners. Some commads are not executed due to missing dot net dependencies as shown in below image
 see below image for reference 
- Installed the required dependencies by fllowing the guide over internet
 see below image for reference
- After installation of dot net dependencies, self-hosted runers are created.

### CICD automation with Git Actions 
- CICD pipeline has failed in "Running Unit tests" due to missing test scripts. Addition of test script file has been done later part after pushing the changes to the repo.
- Upon commiting the code changes to git repo after adding the "test script" file, it again failed due to permission denined message.
It fails a couple of times due to constant errors in code level and self-hosted runners becomes idle.
- Manually I have runned the self-hosted runners from server using "./run.sh" with the online reference and pipeline created successfully.
- Pushed the changes in "Welocme to DevOps World" with extended message and forgot to change the port no. since it's been using by a container which created recently.
- Undo all the new changes in application code and test scripts, pushes the changes again.
- Upon troublshooting the cicd pipeline, finally cicd pipeline starts automatically.

### Git Conflicts
- I have created a README file in remote repo and forgot to pull those changes into local.I have updated my README in local tried to push changes to remote repo again it throws me "merge conflict" error.
- Also, node_modules are corruptued and unable to push or pull changes to git repo since few changes are updated in node_modules residing on remote repo. Checked on internet for the resolution ideas and followed thse stepts and installed node_modules and package-lock.json files again local and freshly uploaded into repo. Therefore, issues resolved and working succesfully.




