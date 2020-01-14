import cdk = require('@aws-cdk/core');
import Ec2 = require("@aws-cdk/aws-ec2");
import { IVpc } from "@aws-cdk/aws-ec2";

export class AwsVpcSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpcCidr = "10.0.0.0/21";
    const port = 27017;

    /**
     * Network
     */
    const vpc: IVpc = new Ec2.Vpc(this, "sample-vpc", {
      cidr: vpcCidr,
      subnetConfiguration: [
        {
          subnetType: Ec2.SubnetType.PRIVATE,
          cidrMask: 24,
          name: "sample-vpc-PrivateSubnet1"
        },
        {
          subnetType: Ec2.SubnetType.PRIVATE,
          cidrMask: 24,
          name: "sample-vpc-PrivateSubnet2"
        },
        {
          subnetType: Ec2.SubnetType.PUBLIC,
          cidrMask: 28,
          name: "sample-vpc-PublicSubnet1"
        }
      ]
    });

    const sg = new Ec2.SecurityGroup(this, "sample-sg", {
      vpc,
      securityGroupName: "sample-sg"
    });

  }
}
