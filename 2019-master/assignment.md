Angular Assignment
==
## Prerequisites 

1. [Node Js](nodejs.org/)
2. [Visual Studio Code](https://code.visualstudio.com/)

To view this document open in VS Code and press Ctrl+Shift+V.

## Assignment

Build a simple web app in Angular that can display the balance result from the provided api server. This includes:

1. Displaying the account info
2. Displaying a list of credits and debit items
3. A feature for adding a credit/debit from the UI
4. Updating the balance and list of credits & debits after adding

### Requirements
- The app should take up all screen height
- The content should be horizontally centered
- The list of credits and debits should be scrollable
- The app should work in all major browser (latest version)

Example UI:
```
 _______________________
|   |               |   |
|   | Account info  |   |
|   |_______________|   |
|   |           add |   |
|   |_______________|   |
|   | scrollable    |   |
|   | list          |   |
|   |               |   |
|   |               |   |
|   |               |   |
|___|_______________|___|
```

You can run the provided api server by running at the command line:

``` sh
node apiserver/server.js
```

To get/post data access these urls 

``` javascript
'http://localhost:8080/api/balance'
// will return the account info + credit and debit items

'http://localhost:8080/api/balance/add'
// accepts a PUT request containing a JSON object
// { amount: number, from: string, to: string, description: string, date: date }

```