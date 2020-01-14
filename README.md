# Requirements
This sample is made using:
```
export APP_NAME=aws-vpc-sample && \
export APP_DEPS='@aws-cdk/aws-ec2' && \
mkdir $APP_NAME && \
cd $APP_NAME && \
cdk init app --language=typescript \
nvm use 12 && \
npm install --save $APP_DEPS
```