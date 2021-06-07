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
  echo('<span style="color:green;">ls</span>: list the contents of a directory');
  echo('<span style="color:green;">cat</span>: echo the contents of a file');
  echo('<span style="color:green;">git</span>: view my git page');
}
