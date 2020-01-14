#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsVpcSampleStack } from '../lib/aws-vpc-sample-stack';

const app = new cdk.App();
new AwsVpcSampleStack(app, 'AwsVpcSampleStack');
