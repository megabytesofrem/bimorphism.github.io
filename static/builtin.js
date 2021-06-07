// Implement a few standard binutils commands for fun
function cat(path) {
  echo('');
  echo(readFile(path));
}

function catNoNewLine(path) {
  // cat, but without printing a new line before
  echo(readFile(path));
}

function echo(msg) {
  buffer.innerHTML += `${msg}<br>`;
}

function ls() {
  echo('');
  for (const path in dummyfs) {
    echo(path);
  }
}

function help() {
  echo('');
  echo('Available commands:');

  echo('<span style="color:green;">help</span>: shows this list of commands');
  echo('<span style="color:green;">echo</span>: echo some text out');
  echo('<span style="color:green;">welcome</span>: print a fancy penguin');
  echo('<span style="color:green;">about</span>: information about me');
  echo('<span style="color:green;">git</span>: view my git page');
}
