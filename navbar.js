let navbar = document.querySelector('.navigation_bar');
let html_template = `<ul id="navbar">
<li><a href="/index.html">Home</a></li>
<li><a href="/contact.html">Contact Me</a></li>
<li><a href="/clock.html">Clock</a></li>
<li><a href="/todo.html">To Do's</a></li>
<li><a href="/expensetracker.html">ExpenseTracker</a></li>
</ul>`;

navbar.innerHTML = html_template;