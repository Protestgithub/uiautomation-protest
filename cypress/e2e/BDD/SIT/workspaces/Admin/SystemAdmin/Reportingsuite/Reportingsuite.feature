Feature: Reporting Suite

#--------------------------------Commission report------------------------------------------
#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1568 & TC_1591
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To Verify that, Rollback commission will not show up in Commission report.
Given Login into Mobiquity Portal as System admin User and Launch Pentaho Portal
And click on Browse Files
And Click on bd-demo-reports to View Report
Then Select the Commoission to view Report for CASH IN


#--------------------------------Service charge report------------------------------------------
#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1563 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To Verify that, Rollback service charge will not show up in Service charge report
And Click on close and Browse new Report
Then Select the Service Charge to view Report for CASH IN





#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1589
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To Verify that, Original transaction service charge will not be show in service charge report.
And Click on close and Browse new Report
Then Select the Service Charge to view Report for CASH IN