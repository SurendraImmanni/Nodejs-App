
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
![Screenshot 1](https://github.com/user-attachments/assets/61ef593d-e968-4d6a-8874-63f105979d8c)
    
    b) Execute cmd npm i express nodemon then it creates node_modules & package-lock.json 
    
    c) Execute cmd npm i jest and supertest to run tests

     see below image for reference 
![Screenshot 2024-12-01 114746](https://github.com/user-attachments/assets/65b72d4d-7c91-4f1d-9292-ade9b2a42afc)     
    
    

### Step2: Execute web application
    
    a) Create webapp code with Node.js

     see below image for reference 
   ![Screenshot 3](https://github.com/user-attachments/assets/2abcc3df-9d16-4ced-8231-b11b0124f6fe)  
    
    b) Create test cases 

     see below image for reference 
![Screenshot test](https://github.com/user-attachments/assets/845cd4ea-04c0-47a8-ac04-087097a0d663)
    c) Save and Run the code by executing cmd "npm start" 
     
     see below image for reference 
![Screenshot 5](https://github.com/user-attachments/assets/f1b000c3-c73e-41bb-ad6e-7b09cf14a828)

![Screenshot 6](https://github.com/user-attachments/assets/e2a7257e-3f16-436b-908b-d854c59c29df)

### Step3: Docker setup locally



    a) Install Docker locally and it's extension in vs code

    b) Create a "Dockerfile" that will build a Docker image for the web application.
       see the below image for reference
![Screenshot 7](https://github.com/user-attachments/assets/37d7d01e-dd3c-4524-9101-a24ea02922f5)

    c) Build the Docker image locally, click on the Dockerfile and select build image in vs code
     
     see below images for reference 
![Screenshot 8](https://github.com/user-attachments/assets/1ba7a830-c068-4f64-9305-3ea954c2d741)
![Screenshot 9 1](https://github.com/user-attachments/assets/23455cad-cd01-4c02-ad03-b13b72fffe7a)

    d) Ensure Docker image has built successfully

     see the below image for reference
![Screenshot 10 2](https://github.com/user-attachments/assets/b247e70a-1325-486e-a448-063be823ce9d)

### Step4: Creation of Git Repository

    a) Created a public git repo "nodejs-app" and created a "test" branch

    see the below image for reference
![Screenshot 11 2](https://github.com/user-attachments/assets/788052c5-dbd4-4d1f-a97b-2dfd00a2164d)
    b) Create a directory in local machine and execute below commands
    
- git init
- git add .
- git status
- git commit -m "initial commit"
- git remote add origin <repository-url>
- git checkout -b test
- git push -u origin test

see below image for reference
![Screenshot 12](https://github.com/user-attachments/assets/84e84197-16e1-4a8c-9b42-9fa24fcbd42a)
![Screenshot 13](https://github.com/user-attachments/assets/ee976c63-5a08-492a-8b18-39214a17a59a)
![Screenshot 14](https://github.com/user-attachments/assets/cb16eee4-25a0-47ed-8bcd-2139591c24a2)
![Screenshot 17](https://github.com/user-attachments/assets/e52ec818-c44d-4354-b41b-ad072cc42d2c)
![Screenshot 18](https://github.com/user-attachments/assets/c0eaff5b-43a9-4c16-b265-8680e1ba4755)

### Step5: Provision infrastructure on AWS

    a) Launch an EC2 instance with t2.large instance type
     
     see the below image for reference
![Screenshot 19](https://github.com/user-attachments/assets/83f116a6-cf28-4022-8707-712651f8301a)

    b) Create a directory "Application" & cd into it then install software dependencies as below

        i. Git
        ii. Ansible
      see below images for reference
![Screenshot 21](https://github.com/user-attachments/assets/f2cdb831-1680-44ef-b390-e7355fbd4f4d)
![Screenshot 22](https://github.com/user-attachments/assets/08b8ef5f-6d1b-4801-9567-f0be6b69b85f)
![Screenshot 23](https://github.com/user-attachments/assets/cbc78ae0-2845-4c84-a2b8-f2fbbc4f0a75)
![Screenshot 24](https://github.com/user-attachments/assets/1632023e-f24d-4290-8832-7bd381197c1a)

    c) Clone the Git repo into the server using the below command

     see the below image for reference
![Screenshot git](https://github.com/user-attachments/assets/9b0b02cd-8968-45cc-ba67-fea6c496ac9c)
![Screenshot git2](https://github.com/user-attachments/assets/295afc35-dc51-4c19-8af6-be5b0dca1a4e)


    d) Create an inventory file
"localhost ansible_connection=local >> inventory"
  
    e) Create a ansible playbook file
    
    see the below image for reference
![Screenshot 33](https://github.com/user-attachments/assets/a1737955-3b02-4bfb-9520-87eb2204fabb)
![Screenshot 32](https://github.com/user-attachments/assets/8c72173e-043f-40af-bc63-b9d252ff06f0)

f) Run the ansible playbook file to install, build docker image and containarize the image

    see the below image for reference
  ![Screenshot 29](https://github.com/user-attachments/assets/7c5e204b-407e-42b0-980b-71e377c6f67d)

g) Ensure docker image and containers are created

    see the below image for reference

![Screenshot 30](https://github.com/user-attachments/assets/06b22d35-8a5e-4602-b1ee-dcad443772e9)
    
h) Add ansible playbook and inventory file into remote repo
      
     see the below image for reference
  ![Screenshot ans](https://github.com/user-attachments/assets/834c3c87-221a-47db-be23-bcf6ea414bd5) 


### Step6: Setting up CICD pipeline using Git Actions

    a) Create .github/workflows folder in git repo of the project root folder and created a "first-cicd.yml" pipeline file under .github/workflows

        see the below image for reference

![image](https://github.com/user-attachments/assets/d5072054-257a-405c-a1e4-306554fdafd6)

    
    c) Configure self-hosted runners to run job without depending on Git runners

        Go to GitHub --> Actions --> select Runners --> select Self-hosted runners --> New runner --> select target arch type --> select target OS

        see the below image for reference
![Screenshot 40](https://github.com/user-attachments/assets/6eebc78c-58bd-46fe-b93c-d13a07df58f7)
![Screenshot 41](https://github.com/user-attachments/assets/e6b32d71-84c2-4861-a556-f4097c07a4b2)

    
    d) Follow the steps mentioned based on our target setup
      
      see the below image for reference
![Screenshot 42](https://github.com/user-attachments/assets/21f4cdca-0f09-4165-80b0-2dd8f50fba9f)
![Screenshot 43](https://github.com/user-attachments/assets/fc005b98-56cc-4bd4-9b15-189c13d91d7f)
![Screenshot 44](https://github.com/user-attachments/assets/bdc19db9-2509-4a6d-a0ac-a504740ec7a1)
![Screenshot 45](https://github.com/user-attachments/assets/66f9fef0-b1cc-4ef0-9353-cc659242f76d)
![Screenshot 46](https://github.com/user-attachments/assets/42fe2c0f-04f4-4372-ad24-7cfc579286d1)
![Screenshot 47](https://github.com/user-attachments/assets/facb48e1-319c-47f0-9af6-0fda1663cc6e)
![Screenshot 48](https://github.com/user-attachments/assets/9c04c37f-1bae-4067-b73e-5b9f876ffb51)
![Screenshot 49](https://github.com/user-attachments/assets/46fb3379-909d-45b2-80d0-9a293868d18b)





    e) Pushes all the changes into git remote repo

    f) CICD pipeline starts upon pushing the changes into git repository

        see the below image for reference
![Screenshot 56](https://github.com/user-attachments/assets/59c934e9-53f9-4a5c-9296-85c6cbe247ae)


# Acknowledgments

- [Node.js](https://nodejs.org/) for the web application runtime
- [Docker](https://www.docker.com/) for containerizing the application
- [Ansible](https://www.ansible.com/) for automating configuration management
- [Git](https://git-scm.com/) for versioning the code
- [GitHub](https://github.com/) Actions for automating the CICD pipeline.





# Troubleshoots

### Run Ansible Playbook
 
 1. Executes playbook cmd "ansible playbook -i playbook inventory"
![Screenshot 27](https://github.com/user-attachments/assets/1108972b-8e72-4258-8a24-ab0fcf79a8d6)

- When executed the cmd it throws me a host error as shown in below image since command format is wrong. Corrected my cmd and runs the playbook again. 
- Again, it throws me error mentioning the ip address mentioned i inventory file is not found. I checked on internet and it gives me advise to put as "localhost" both in inventory & playbook file.

2. Error in the stage of installing docker to build and containerizing it.
- In the playbook yaml file, mentioned to install docker file as docker.io (shown in below image). Upon corrected the docker installation format, playbook executed succesfully.
![Screenshot 28](https://github.com/user-attachments/assets/899fb0b3-8e39-4121-9b60-08a93f334823)

### Self-hosted runners for CICD pipeline

1. Written the cicd pipeline under the folders .github/workflows
- Upon creation, pushed the changes to the git remote repo to start the cicd process. But, it went "queued" for approx 14 mins due to git runners are busy in scheduling the pipeline.
- Checked over internet and followed the git actions steps to configure self-hosted runners. Some commads are not executed due to missing dot net dependencies as shown in below image
- Installed the required dependencies by fllowing the guide over internet
- After installation of dot net dependencies, self-hosted runers are created.
- Refer all images from Step6 --> section c) and d)

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




