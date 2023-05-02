---
slug: Anthology Integrations and Customer Experience
title: Integration Installation and Customer Experience
authors: 
  - name: Mark O'Neil
    title: Product Manager
tags: ["Best Practices", "Integrations", "Partners", "Developers"]
hide_table_of_contents: false
---

# Integration Installation and Customer Experience

Anthology has designed it's model for integrations in a manner which, when executed following our best practices, improves the Customer Integration Experience. Our goals in this area are multi-fold, yet all drive toward the best experience possible when Customers license, purchase, or develop integrations for enhancing their Anthology Products as campus differentiators and enablers in achieving their Teaching and Learning objectives for their Staff, Faculty, and Students.

## Why is Customer Experience Important?

Customer experience is important for Partners and Anthology Customers for many reasons. Most notably:

**Customer Retention**: Providing a positive customer experience can help improve customer retention rates. Customers are more likely to remain loyal to a brand if they have had a positive experience with the company.

**Brand Reputation**: A positive customer experience can enhance your company's reputation and help build a positive brand image. Word of mouth and online reviews are powerful marketing tools, and customers are more likely to share their positive experiences with others.

**Competitive Advantage**: Providing a superior customer experience can set a business apart from its competitors and give it a competitive advantage.

Overall, a positive customer experience is essential for building strong customer relationships, increasing customer loyalty, and improving the overall success of a business. This applies to our developer community as well as Anthology.

In addition to the general integration functionality, for which the integration development team is ultimately responsible, the most significant impact on the Customer Experience is installation and support of your integration. 

Installation of your integration is often the first experience customers will have with your business and first impressions are lasting and influence future interactions. 

How clients discover and know whom to contact for Support is also a significant influencer of impressions of your business.

Anthology has built our integration experience and best practices, with these latter two concepts in mind. 

## Integration Installation
Anthology has thought long about how to simplify the integration experience for customers in the world of SaaS. In doing so we arrived at a "Register once, deploy everywhere" model for Integration developers to deliver theirr solutions. This applies to LTI 1.3 and RESTful integrations alike, and greatly simplifies installation for our mutual customers.

### SaaS changed everything...
In prior years you may have built integrations which ran on-prem or in-process alongside the Anthology product. This required customers to manage the software themselves. Under the more modern SaaS model, which is used by Anthology, the customer is no responsible for updating and maintaining the integration, as SaaS product consumers receive updates automatically.

To facilitate the SaaS model, the Anthology Developer Portal provides the means for you the Developer to register your integration once and deploy to multiple customers. Once your integration is registered in the Developer Portal an identifier is issued - this identifier is used by _all customers_ to install your integration.

This means you have one instance of your integration and all customers use that instance. This of course imply some design concepts for your integration.

This model for delivering innovative solutions to customers provides cost savings and improved efficiency for your business. This is because instead of multiple instances (with per instance charges accrued) you only *need* one instance of your integration which is shared by all your customers. This is the SaaS way.

### Integration Design Considerations
Register once and Deploy anywhere means there are some differences in how you design and deliver your integration.

>Note: The following pertains to development of integrations which are marketed to multiple customers. Only point 1 is pertinent to those who are developing campus-only solutions.

1. **Logs and data**: Integrations should maintain archives of customer logs and any integration specific data as those are not provided by Anthology products. 
   
2. **Multi-tenancy**: Integrations should follow a multi-tenant model vs single tenant. Multi-tenant means one integration service delivering your integration to all your customers vs requiring a new intetegration service per customer. This means you have to design into your integration the ability for enabling individual customer accounts, likely only administrator, for any customer specific configuration.
   
3. **Separation of Customer data**: Multi-tenancy means that in addition to running a single service for your customers you are likely using a single database. This dictates a secure separation of customer data using a unique customer identifier prefix on customer-centric data keys.

Each of the above enable you to deliver a secure, efficient, and postive experience to customers at a cost savings of single instance vs multiple instance service delivery.


### Best Practices
#### Developer Portal Accounts
There are really two *types* of Developer Portal accounts:

1. Developer Accounts: the personal accounts which are used for prototyping and testing of your integration. These are in the form of developer_name&#64;domain.tld. These are often referred to as test or development *groups*. These groups are restricted in the number of request which may be made w/in a 24 hour time period to non-production level settings.
   
2. Production Accounts: these are your accounts used for production release of your integration. Given this account's information is what customers see when they install your integration it is considered a best practice to use a mailinglist such as business&#64;, integration_name&#64;, or support&#64;domain.tld. This email must be publicly reachable.
   
3. Production Group: This is a very specific group within your Production Account which contains your integrations. This group receives production level settings.

See <a href="https://docs.anthology.com/docs/Developer%20Portal/community-dev_portal" target="_top">Getting Started with the Developer Portal</a> for more information.

#### Production Integration Release
See our <a href="https://docs.anthology.com/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-releasing_integration" target="_top">Releasing your Integration</a> guide for production release details.

Also see <a href="https://docs.anthology.com/docs/LTI/lti-registration-deployment" target="_top">LTI Registration and Deployment with Learn</a> guide which describes Anthology's approach behind releasing LTI 1.3 integrations.

#### Customer Facing Documentation
It is the integration developer's responsibility to provide the necessary documentation for a successful installation. This is greatly simplified when following our best practices for Register once, deploy anywhere.

Currently there are three things which will generate no end of consternation for customers which degrades their experience with your integration/company. These three things fall into two groups User Roles and Support.

##### Integration User Roles: Entitlements vs Privileges
Aside from it ***not*** being a best practice to ask your customer to register your integration on the Developer Portal on your behalf, even worse is asking them to do so and then ask that they give your integration an Admin Role. _Never, never, never_ ask them to do these terrible things.

Instead, develop your integration following the Register once model, and hand off your integration Identifier to your customer. If you are an LTI 1.3 provider - you are done. Your customer adds your LTI integration and sets availability to their users and they are done. No passing around of Keys and Secrets or error prone multiple copy pasting of multiple configuration strings... you hand off one integration Id which you get when you register your integration on the portal and done.

Well almost... the current exception (see The Future is Bright(er) below) is if your integration uses our REST APIs. Then your integration documentation must  provide Anthology administrators with a list of privileges that need to be added to the user which is associated with your integration. The APIs list entitlements, not privileges, and therein lay a problem for Customers.

As the integration provider you want a great customer experience so you use the <a href="http:localhost:3000/docs/REST%20APIs/Learn/Admin/rest_apis-learn-admin-rest_and_learn#converting-entitlements-to-gui-privileges" target="_top"> bookmarklet tool</a> to determine the privileges you include in your documentation to provide guidance to admins installing your integration.

## Integration Support

### Who is responsible for your integration's support?
It probably goes without saying, but the integration vendor is responsible. Not Anthology.

When the vendor registers in the Developer Portal they provide email information which is seen by customers when they install the integration. That is why this email and contact information must be publicly reachable. That is also why it makes sense to have a specific account from which all your integrations are delivered. 

See <a href="https://docs.anthology.com/docs/Developer%20Portal/community-dev_portal" target="_top">Getting Started with the Dev Portal</a> for information.

## The Future is Bright(er)
**Forward Looking Statement** applies:
> Statements regarding our product development initiatives, including new products and future product upgrades, updates or enhancements represent our current intentions, but may be modified, delayed or abandoned without prior notice and there is no assurance that such offering, upgrades, updates or functionality will become available unless and until they have been made generally available to our customers.

### Simplification of Integration Installation
To ensure an optimal customer experience we have a few items which we intend to deliver in 2023. Each of these enable the offset the heavy lift of the installation of any integration from customers to the developer.

#### Auto-Install of REST Users with Privileges
Integrations using the REST API require association with a REST integration user who has the necessary system role privileges (never a System Administrator Role!!!). 

The REST APIs identify with _entitlements_ while the systems identify with _privileges_. This complicates installation of REST integrations not using Three Legged OAuth (3LO). 

Late 2023 we intend to release a "manifest" model for integrations which, amongst other useful data points,  identifies the entitlements required by an integration. This manifest will be used on Administrator request to install an integration to display important information about the integration to the Administrator - notably the privileges requested by the integration developer. 

The now informed Administrator may choose to install the integration at which time the REST integration user is created with the necessary privileges. 

No interaction on the part of the Administrator other than reviewing and accepting the installation!


#### LTI and REST share JWT for authN
Currently LTI 1.3 and REST APIs use two separate authentication models. LTI 1.3 uses JSON Web Tokens (JWT) and REST uses OAuth 2 basic authentication using Key:Secret pairs. 

Late 2023 the use of JWT will be optional for REST API-based integrations and JWT will be used exclusively for LTI 1.3 integrations which also use our REST APIs.

This greatly simplifies the development of LTI 1.3 integrations which use our REST APIs. The optional use of JWTs for non-LTI integrations provide an improved security model for REST API-based integrations while being backward compatible with existing REST integrations.



