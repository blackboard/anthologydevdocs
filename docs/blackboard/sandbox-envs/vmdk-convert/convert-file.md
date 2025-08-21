---
title: Convert the file and deploy the AMI image
id: file-convert
author: Sebastian Silva
published: "2025-08-20"
edited: "2025-08-20"
sidebar_position: 3
---

## Convert server file to snapshot

This part of the document will guide you through the commands needed to convert the server file to a snapshot file within the EC2 service. This snapshot will be later use to create an image which can be used to launch an EC2 machine.

To convert the file, follow these steps:

1. Create a `containers.json` file in a directory on your laptop/desktop computer. The file should contain the following JSON for the VMDK.

:::warning REMEMBER
The fields that are surrounded by double square brackets (`[[example]]`) is information that you need to modify according to your S3 name or preference (Depending on the field)
:::

```json
{
  "Description": "[[A Short Description]]",
  "Format": "VMDK",
  "UserBucket": {
    "S3Bucket": "[[Your S3 Bucket Name]]",
    "S3Key": "[[Server File Name]].vmdk"
  }
}
```

The following is an example of the `containers.json` file:

```json
{
  "Description": "Blackboard Learn 3900.112",
  "Format": "VMDK",
  "UserBucket": {
    "S3Bucket": "MyLearnImages",
    "S3Key": "export-ami-0e0a6b40cd7b773ca.vmdk"
  }
}
```

2. Once the file is created, execute the following command in your terminal to start the VMDK file conversion:

```shell
aws ec2 import-snapshot --description "[[A short description of this job]]" --disk-container "file://[[Path to your containers.json file]]"
```

Example:

```shell
aws ec2 import-snapshot --description "Blackboard Learn 3900.112" --disk-container "file:///Users/developer/Desktop/containers.json"
```

:::tip File Path
Make sure the file path for your file starts with `file://`. Excluding this identifier will result in "unexpected format" errors from the CLI
:::

3. After the command is executed, you will see a response on the terminal with a `ImportTaskId` field which represents the Job ID create to conver the file.

To monitor the status of the conversion, you can execute the following command on your terminal:

```shell
aws ec2 describe-import-snapshot-tasks --import-task-ids [[ImportTaskId]]
```

The response will have a property called `Status` which you can monitor. When the status is set to "Completed", you will also receive a `SnapshotId`, please save this ID since you will need it to locate the correct server through the GUI

## Use the snapshot to create an EC2 Image

Once the conversion process is completed, follow these steps to create an EC2 machine with your snapshot:

1. Access to the AWS Console through the browser
2. Use the top search bar to search for `EC2` and select the first option called `EC2`
3. In the left navigation menu, select `Snapshots` under "Elastic Block Store"
4. Search for the snapshot that was just created using the `SnapshotId`
5. Click the checkbox next to the snapshot name, click the `Actions` button (top right) and then, select `Create image from snapshot`
6. Assign a Name and Description to the image and then, click on `Create image` at the bottom of the page
7. In the left navigation menu, select `AMIs` under "Images"
8. In there you should see the image you just created, ready to be used in an EC2 machine

Now that the file was converted and an AMI image is available for use, you can continue to the next section where you can configure the server and deploy Blackboard Learn.
