---
title: "Student query model metadata"
id: studentapi-querymodel-metadata
sidebar_position: 4
author: Jim Burns
published: "2024-06-26"
edited: "2024-06-26"
---

The student data model is comprised of hundreds and hundreds of entities. One of the fundamental requirements for integration partners is to be able to retrieve data out of the query model. There are numerous OData controller methods implemented that can be used to retrieve data. However, the purpose of these methods is to supply the needed data for the web client UI pages. Thus, the design and function of these methods are extremely prescribed. In most cases, when there is a need to retrieve data from Anthology Student, the solution will be to write a custom OData query using the ds/odata endpoint. To maximize the power of this capability, it is important to understand the query data model and specifically, the navigation properties available on each entity in the model. The Data Views feature in the Anthology Student web client is a very powerful tool and can be very helpful in gaining an increased understanding of the query data model. However, one of the limitations in this tool is that many navigation properties for entities are not visible. The only navigation properties that are exposed in the Data Views UI are ones that have a one to one multiplicity with the base entity. Navigation properties that have a one to many multiplicity are hidden from the UI. In order to see a complete inventory of all navigation properties available in the query model, you can use an endpoint that returns the complete metadata for the query model.

## Metadata endpoint

In order to retrieve the metadata for the query model, append 'ds/odata/$metadata' to the base URL that is used to load the web client application. The output from this will be the metadata for the entire query model. Since a large amount of data is being returned, the execution time for returning the metadata output can be lengthy. Occasionally, you may get a timeout error. If this occurs, then just try issuing the URL again.

Example URL: https://sisclientweb-900065.campusnexus.cloud/ds/odata/$metadata

## Metadata sample output

The first page of the metadata endpoint response is below.

![Query Model Metadata](/assets/img/StudentQueryModelMetadata1.png)

To locate the metadata for a given entity in the model, use the Find operation (Ctrl+F) and then enter "EntityType Name=#####" in the search box replacing ##### with the name of the entity you are searching for.

The screen shots below show the metadata for the StudentEnrollmentPeriod entity. This is one of the larger entities in the data model. Notice that there is a section that lists the name and type of every property defined for the entity.

![Query Model Metadata](/assets/img/StudentQueryModelMetadata2.png)

The next area of the output lists all of the navigation properties defined for the entity. There are dozens of navigation properties defined for the StudentEnrollmentPeriod entity. The Name attribute is the navigation property name. This is the name that would be specified for the $expand argument in the OData query. The Type attribute on each Navigation Property element defines the entity in the model that this navigation property will expand to when it is referenced within the odata query being written. If the multiplicity is one to many, the type will be specified as Collection(entity name). Otherwise the multiplicity is one to one.

![Query Model Metadata](/assets/img/StudentQueryModelMetadata3.png)

In conclusion, the Data Views feature in the web client UI can be utilized as a starting point for building custom odata queries and visually seeing available properties and relationships between entities. However, it is important to always review the output from the $metadata endpoint to ensure you are seeing the complete model metadata including ALL available navigation properties for a given entity.
