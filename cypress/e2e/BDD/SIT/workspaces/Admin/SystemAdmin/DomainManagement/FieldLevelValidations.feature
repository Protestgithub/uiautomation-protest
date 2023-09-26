Feature: Domain Management Field Level Validations

  #Author:Rakesh
    #Last Updated:
    #Comments
    #Test Case_ID : TC_943

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

Scenario:To veirfy that after click on reset button all the filled entry will be remove
Given Login into Mobiquity Portal as System admin Maker
When User Click on Domain Management >> Add Domain
And Enter Domain Name and Code
Then Click on Reset button


   #Author:Rakesh
    #Last Updated:
    #Comments
    #Test Case_ID : TC_934 , TC_933
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

Scenario:To verify that Domain Name and Domain code must be unique in the system
Given Login into Mobiquity Portal as System admin Maker
When User Click on Domain Management >> Add Domain
And Enter Domain Name and Code
Then Assert the error message of Domain Name And Domain Code must be Unique



#Author:Rakesh
    #Last Updated:
    #Comments
    #Test Case_ID : TC_931
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

Scenario:To verify user cannot click on submit button without fill all mandatory fields
Given Login into Mobiquity Portal as System admin Maker
When User Click on Domain Management and CLick on Submit
Then Check the Error Message and Assert It

#Author:Rakesh
    #Last Updated:
    #Comments
    #Test Case_ID : TC_932
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

Scenario:To verify that all mandatory fields will indicate by asterisk(*) symbol
When User Click on Domain Management and CLick on Submit
Then Assert the Fields having asterisk symbol



#Author:Rakesh
    #Last Updated:
    #Comments
    #Test Case_ID : TC_938
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

Scenario:To verify that by giving the data to the domain code and not giving it to the domain name
Given Login into Mobiquity Portal as System admin Maker
When User Click on Domain Management and Enter the Details
And Enter Domain Code and click on submit
Then Assert the Error Message of Domain Name

#Author:Rakesh
    #Last Updated:
    #Comments
    #Test Case_ID : TC_939
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

Scenario:To verify that by giving the data to the domain name and not giving the data to the domain code
Given Login into Mobiquity Portal as System admin Maker
When User Click on Domain Management and Enter the Details
And Enter Domain Name and click on submit
Then Assert the Error Message of Domain Code


