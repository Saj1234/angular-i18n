# angular-18n

## Introduction

Boilerplate project on using angular resource string with 118n
Custom and default resource files added and details on how it can fall back to default languge file keys
if the keys cannot be found the custom resource file.

## Code Samples
Falling back to default resource file:

$translateProvider.preferredLanguage('en-custom');

$translateProvider.fallbackLanguage(['en']);


## Installation

Install scripts:
1. Run "npm install" from the root folder. - this will install the sever dependencies.
2. Navigate to public folder and run "npm install" - this will install the client dependencies. 
3. Run "node server" from root folder. - Start the server on port 3000

Navigate to http://localhost:3000/