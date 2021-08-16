let markUpText = "";
let remainder = 0;
let numOfSections = 0;
let remainingItems = 0;

// Function to decide the number of sections and columns needed for the layout
// I am using Bulma and sample index file can be found on the repository as index.html
function countColumns(teamDataArray){
    let arrLength = teamDataArray.arrLength;

    if(remainder===0) {
      numOfSections = arrLength / 3;
    }

    else{
      remainingItems = arrLength - remainder;
      numOfSections = (items/3) + 1 ;
    }
}

// This function generates the markup text to write to the file.
function generateMarkupText(teamArray){
    countColumns(teamArray);
    markUpText = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>Software Development Team</title>
      </head>

      <body>
        <!--Header section with the topic-->
        <div class="section has-background-success-dark has-shadow is-vcentered">
            <div class="container ">
                <h1 class="is-size-3 title has-text-centered has-text-light "> Software Development Team </h1>
            </div>
        </div> `;
        //The part of the function is yet to be completed.
        //Please see the designed index.html file.

    return markUpText;

}

module.exports = generateMarkupText;
