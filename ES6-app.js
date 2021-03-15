// // Project is created using ES6 in this file

class Course {
  // create constructor here
  constructor(subject, instructor, term) {
    this.subject = subject;
    this.instructor = instructor;
    this.term = term;
  }
}

// UI class instead of UI constructor
class UI {
  // all of the UI methods should be inside of this class

  // setMessage mthod
  setMessage = function (msg, className) {
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
  dispCourse = function (course) {
    // creating a new Element
    const tRow = document.createElement('tr');
    // getting parent element to insert new element 
    const list = document.querySelector('.course-list');
    // adding innerHTML..
    tRow.innerHTML = `
  <td>${course.subject}</td>
  <td>${course.instructor}</td>
  <td>${course.term}</td>
  <td><i class="fas fa-window-close delete"></i></td>
  `;

    // appending the new element into list element
    list.appendChild(tRow);
    // console.log(tRow);
  }

  // clearing input fields everytime we add a course
  clrInputs = function () {
    document.getElementById('subject').value = '';
    document.getElementById('instructor').value = '';
    document.getElementById('term').value = '';
  }

  // deleting the added books from our course list 
  deleteCourse = function (e) {
    const del = document.querySelector('.delete').parentElement.parentElement;
    del.remove();
  }

}

// Listen for submit
document.getElementById('course-form').addEventListener('submit', function (e) {
  // creating vars to get the field inputs
  const subject = document.getElementById('subject').value,
    instructor = document.getElementById('instructor').value,
    term = document.getElementById('term').value;
  // call the COurse constructor
  const course = new Course(subject, instructor, term);
  // caaling the ui constructor
  const ui = new UI();
  // Check to see if input fields are empty
  if (subject === '' || instructor === '' || term === '') {
    ui.setMessage('Please fill in the empty input fields!!', 'error');
  } else {
    // adding course to UI list 
    ui.dispCourse(course);
    // display the messsage below when course added successfully 
    ui.setMessage('Course added successfully!!', 'success');
    // clearing input fields everytime we added a new classes || for UX
    ui.clrInputs();
  }
  // prevent the defualt behaivor
  e.preventDefault();
});


document.querySelector('.course-list').addEventListener('click', function (e) {
  // get the UI that have the prototype of deleteBook that we have created
  const ui = new UI();
  // get the " deleteBook " method we have created
  ui.deleteCourse(e.target);
  // show message after deleting the book
  ui.setMessage('Course successfullly deleted!!', 'deleteRow');
  e.preventDefault();
});