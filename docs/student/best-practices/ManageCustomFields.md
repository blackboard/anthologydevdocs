---
title: "Managing Custom Fields via APIs"
id: studentapi-customfields-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

<VersioningTracker frontMatter={frontMatter}/>

Creating custom fields for additional data capture is a key capability within the Anthology Student application.  This capability was introduced many years ago and has evolved over time.  The result is that there are three different implementations for configuring and managing data for custom fields in the application currently.  The details for how to manage data for custom fields via APIs will depend on the specific entity that the custom fields are for.  This document will outline each of the three implementations and identify which entities belong to each.  Additionally, details on how to retrieve data as well as update data for custom fields will be covered.  

## School Defined Fields

The original implementation of custom fields in Anthology Student is referred to as "School Defined Fields" or "School Fields".  This implementation allows for any number of custom fields to be configured for the Student entity.  Although not explicitly called out in configuration of School Defined Fields, the association of data for these fields will be on the Id property in the Student entity.  The configuration includes the ability to specify which modules/domains a given field is visible in.  To see additional details regarding this feature including how to configure, refer to Help which is accessible via the question mark icon on the top right portion of the toolbar in the web client UI.

![ManageCustomFields](/assets/img/ManageCustomFields1.png)

There is no API that has a single responsibility of managing data for School Defined Fields.  The endpoints you will need to use for updating data for School Defined Fields are api/commands/Common/Student/SaveNew and api/commands/Common/Student/Save.  The SaveNew operation is used when creating a new student record and the Save operation is used when updating an existing Student record.  For additioal details on using the Save and SaveNew operations please refer to:

[Tips for using Get and Save API Operations](https://docs.anthology.com/docs/student/best-practices/get-save-bestpractices)
[Tips for using Create and SaveNew API Operations](https://docs.anthology.com/docs/student/best-practices/create-savenew-bestpractices)

The vast majority of use cases will be to update school defined fields data for an existing student. The remainder of this section will use the Save operation as an example. The first step will be to retrieve the instance of the Student record that school defined fields data is being update for.  Execute the api/commands/Common/Student/Get operation.  Existing data for the school defined fields for the student will be in the CustomProperties and/or MultiValueCustomProperties properties in the response. If a school defined field has been configured to allow multiple values to be specified, then the values for this school defined field will be contained in the MultiValueCustomProperties property.  For single value custom properties (majority of school defined fields), the data will reside in the CustomProperties property.  These properties are defined as a collection of key/value pairs. The only difference is that the value for the MultiValueCustomProperties is of type ICollection`<string>` whereas the value type for the CustomProperties collection is string.  The key contains the Code value for the configured school defined field. This value must match exactly to the Code value for the school defined field in order to be correctly updated (see screenshot below). 

![ManageCustomFields](/assets/img/ManageCustomFields2.png)


If there is a value being specified for a school defined field for the first time, then a new row will need to be added to the collection.  If an existing value is being modified, then find the element for the applicable school defined field and update accordingly.  One final note is that the data type is string.  All values must be provided as a string type including any school defined fields that have been configured with a type of numeric or date.  Once the applicable data has been updated in the CustomProperties and MultiValueCustomProperties properties, then execute the api/commands/Common/Student/Save endpoint to update.

### Retrieving Data

School Defined fields data is stored in the StudentSchoolDefinedFieldValues entity.  To retrieve all school defined field values for a given student, a filter on the StudentId property would be used:  ds/odata/StudentSchoolDefinedFieldValues?$filter=StudentId eq ####### where ####### is the Id of the Student to retrieve data for.  

If data for specific school defined fields is needed, then additional filtering would be done.  There is a navigation property called SchoolDefinedField on the StudentSchoolDefinedFieldValues entity that expands to the school defined fields configuration entity (SchoolDefinedFields) which can be leveraged to include any additional filtering neded for retrieving the school defined field values.

Lastly, there is a navigation property on the Student entity called SchoolDefinedFieldValues. You can include this in an expand statement to retrieve school defined field values data.  i.e. ds/odata/Students?$expand=SchoolDefinedFieldValues

## School Defined Fields - Course

The original implementation of school defined fields was enhanced to allow for custom fields to be configured for the Course entity. The main difference between school defined fields for the Course entity verses school defined fields for the Student entity is that there is no configuration that allows for specifying where these school defined fields will be visible.  ALL school defined fields that have been configured for a Course will be visible via the "School Fields" tile on the Course configuration page.  Additionally, the entities that the course school defined field configurations and values are stored in were designed to support multiple entities.  As it turns out, the Course entity was the only entity implemented.  No additional work was ever done to support additional entities within this implementation.  

![ManageCustomFields](/assets/img/ManageCustomFields3.png)

To update school defined field data for a course use the api/commands/Academics/Course/Save endpoint.  The patterns to follow are the same as what is outlined for the Student entity above.

### Retrieving Data

School Defined fields data for the Course entity is stored in the EntitySchoolDefinedFieldValues entity.  To retrieve all school defined field values for a given course, a filter on the RecordId property would be used:  ds/odata/EntitySchoolDefinedFieldValues?$filter=RecordId eq ####### where ####### is the Id of the Course to retrieve data for.  As noted above, the design of the configuration and value tables was created with the intent of supporting additional entities.  This was never done.  Thus, you can ignore the TableName property in any filtering requirements since every row in this entity will have a value of 'AdCourse'.

If data for specific school defined fields is needed, then additional filtering would be done.  There is a navigation property called EntitySchoolDefinedField on the EntitySchoolDefinedFieldValues entity that expands to the school defined fields configuration entity (EntitySchoolDefinedFields) which can be leveraged to include any additional filtering needed for retrieving the school defined field values for the Course.


## Extended Properties

The newest implementation for managing data for custom fields is referred to as "Extended Properties".  This implementation was done to easily enable new entities to support the ability to capture custom field data.  Unlike the School Defined Fields explained above, there are dedicated API endpoints for managing data for extended properties.  There are several entities that currently support this capability with additional entities being added on a regular basis.  The best way to determine if a given entity has support for extended properties is to go to the Extended Properties configuration page and view the list of entities displayed in the Entity Type drop down list.

![ManageCustomFields](/assets/img/ManageCustomFields4.png)

There are several API endpoints that may include the ability for saving data for extended properties where this would be considered in context of the scope of work being updated.  For example, the API request for posting a payment transaction includes an ExtendedProperties collection property.  This is because the entity that is updated when posting a payment transaction (StudentAccountTransaction) is enabled for the Extended Properties capability.  The implementation of this may vary.  Use of these types of APIs for updating extended property data will need to be evaluated on a case by case basis and is outside the scope of this document.  The API endpoints that will be covered here are:

api/commands/Academics/ExtendedPropertyValue/saveExtendedProperty
api/commands/Admissions/ExtendedPropertyValue/saveExtendedProperty
api/commands/CareerServices/ExtendedPropertyValue/saveExtendedProperty
api/commands/Crm/ExtendedPropertyValue/saveExtendedProperty
api/commands/FinancialAid/ExtendedPropertyValue/saveExtendedProperty
api/commands/StudentAccounts/ExtendedPropertyValue/saveExtendedProperty
api/commands/StudentServices/ExtendedPropertyValue/saveExtendedProperty

The endpoint to use from the list above will depend on which domain the entity you are updating extended properties for is defined in.  If you are unsure, then one way to determine is to locate the entity in the Swagger documentation.  The route for all API endpoints for the given entity will begin with api/commands/domain name.  Once the correct domain has been determined then use that domain's extended property API endpoint.

The request payload for each of the listed APIs above are identical.

Id - Set this to the Id of the row in the entity that the extended properties are being updated for

EntityName - Set this to the name of the entity that the Id value is referencing.  IMPORTANT: This is the command model entity name.  All entities defined in the command model end with a suffix of "Entity".  So if extended property values are being updated for a row in the StudentCourse entity, the value for this property needs to be "StudentCourseEntity" -- not "StudentCourse".  If an invalid value is provided for EntityName, a validation error will be returned with a message of "Invalid Entity Name".

ExtendedProperties - This is a collection.  There are 2 values that need to be provided for each row in the collection:

   Name - Set this to the name of the extended property that was configured.  This must match exactly to the Name of the extended property (see screenshot below).

   Value - Set this to the value of the extended property.  Note that this property is of type string.  If the extended property type is numeric, date or boolean, then populate with the
           string equivalent.  The API execution logic will handle the needed type conversions for persisting the data into the extended property values table.

![ManageCustomFields](/assets/img/ManageCustomFields5.png)

There is no need to specify if the value for the extended property is being provided for the first time or not.  Although there is an Id property defined for the ExtendedProperties collection, it can be ignored.  The API execution logic will determine if there is an existing row for the extended property value being updated.  If not, it will insert a new row.  If there is an existing row, then the existing value will be replaced with the value specified in the request.

### Retrieving Data

Extended property values are all stored in a entity called ExtendedPropertyValues.  Unless there is a need to retrieve extended property data for multiple entities in one query, it is not recommended to use this entity for data retrieval.  Instead, there is a database view created for each entity that is enabled to support extended properties.  The entity name in the query model for each of these views is ##########ExtendedProperties where ######### is the name of the entity.  For example, the db view entity name for extended property values for the AreaOfStudy entity is AreaOfStudyExtendedProperties.  A navigation property called ExtendedProperties will exist on every entity enabled to support extended properties.  This allows for you to easily add filter conditions as well as include extended property values in any query where the base entity is an entity that is enabled to support extended properties.  For example, to retrieve extended property values for all rows in the ClassSections entity, the odata query would look like this:  ds/odata/ClassSections?$expand=ExtendedProperties

## Authorization 

### School Defined Fields

In order to manage data for school defined fields, the authenticated user must be authorized to the Common - Student - Edit and Common - Student - New tasks which is done in the Security Console application.

![ManageCustomFields](/assets/img/ManageCustomFields7.png)

### School Defined Fields - Course

In order to manage data for school defined fields for the course entity, the authenticated user must be authorized to the Academics.Course.Save and Academics.Course.SaveNew operations which is done in the Security Console application. These operations are included in the Academics - Configuration - Manage task.   

![ManageCustomFields](/assets/img/ManageCustomFields9.png)

However, authorization to all of the other configuration options in the Academics domain will be included if this task is authorized.  It is recommended that the individual operations above be authorized explicitly.  To do this, the authenticated user will need to be associated to a Role.  Find the applicable Role and then click the Add Permissions option.  Uncheck the Show Tasks, Show Built In Tasks and Show Roles check boxes.  Check the Show Operations check box and then click Apply.

![ManageCustomFields](/assets/img/ManageCustomFields8.png)

Find the Academics.Course.Save and Academics.Course.SaveNew operations, highlight each and click Ok.

### Extended Properties

There is capability for securing configured extended properties on an individual property basis.  If the property is configured to require authorization, then the authenticated user executing the API must be a member of a staff group that has Edit permission enabled for the property. There is no work needed in the Security Console application for this.

![ManageCustomFields](/assets/img/ManageCustomFields6.png)


## Conclusion

As can be the case, there may be additional nuances for how to properly manage extended property data to address a client's specific use cases that are not covered within this document.  

If there are questions after reviewing this document and the corresponding swagger documentation, you can submit them by sending an email to developers@anthology.com.

<AuthorBox frontMatter={frontMatter}/>