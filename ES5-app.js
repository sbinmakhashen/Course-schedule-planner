// Project is created using ES5 in this file

// course constructor
function Course(subject, instructor, term) {
  this.subject = subject;
  this.instructor = instructor;
  this.term = term;
}

// creating UI constructor
function UI() {

}

// setMessage mthod
UI.prototype.setMessage = function (msg, className) {
  // creating a new element
  const div = document.createElement('div');
  // class name for new element
  div.className = `alert ${className}`;
  // getting the wrap class
  const wrap = document.querySelector('.wrap');
  // getting the element that is after the wrap element
  const form = document.getElementById('course-form');
  // append and add text
  div.appendChild(document.createTextNode(msg));
  // insert new element before parent element
  wrap.insertBefore(div, form);
  // make alert disappear within 3sec
  setTimeout(function () {
    div.remove();
  }, 3000);
}

// display courses when added in the UI
UI.prototype.dispCourse = function (subject, instructor, term) {
  // creating a new Element
  const tRow = document.createElement('tr');
  // getting parent element to insert new element in
  const list = document.getElementById('course-list');
  // appending the new element into list element
  tRow.appendChild(list);
  // adding innerHTML..

}

// Listen for submit
document.getElementById('course-form').addEventListener('submit', function (e) {
  // creating vars to get the field inputs
  const subject = document.getElementById('subject').value,
    instructor = document.getElementById('instructor').value,
    term = document.getElementById('term').value;
  // call the COurse constructor
  const course = new Course();
  // caaling the ui constructor
  const ui = new UI();
  // Check to see if input fields are empty
  if (subject === '' || instructor === '' || term === '') {
    ui.setMessage('Please fill in the empty input fields!!', 'error');
  } else {
    ui.setMessage('Course added successfully!!', 'success')
  }
  // prevent the defualt behaivor
  e.preventDefault();
});

