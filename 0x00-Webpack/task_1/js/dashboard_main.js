import $ from 'jquery';
import _ from 'lodash';

// Initial count value
let count = 0;

// Function to update the counter
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Add elements to the DOM
$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind the debounce function to the click event
  $('#startBtn').on('click', _.debounce(updateCounter, 1000));
});

