let command = '';
let buffer = document.getElementById("buffer");



function readFile(path) {
  if (dummyfs[path] === undefined) {
    echo(`wwwsh: ${path}: <span style="color:red">no such file or directory</span>`);
    return '';
  }
  else {
    // "read" it
    return dummyfs[path].lines.join('<br>').replace(/\s/g, '&nbsp;');
  }
}

function printPrompt() {
  buffer.innerHTML += '[visitor@www]$ ';
}

function handleCommand() {
  // Handle commands

  if (command === 'clear') {
    buffer.innerHTML = '';
    printPrompt();
  }
  else if (command === 'help') {
    help();
    printPrompt();
  }
  else if (command.startsWith('echo')) {
    const msg = command.slice(5, command.length);
    echo('');

    if (msg.startsWith('$')) {
      echo(dummyenv[msg.slice(msg.indexOf('$'), msg.length)]);
    }
    else {
      echo(msg);
    }

    printPrompt();
  }
  else if (command === 'ls') {
    ls();
    printPrompt();
  }
  else if (command.startsWith('cat')) {
    const path = command.slice(4, command.length);
    cat(path);

    printPrompt();
  }
  else if (command === 'git') {
    // List a few git projects of mine :')
    echo('');
    echo('<a href="https://github.com/bimorphism/mirai-bot">~/git/code/mirai-bot</a>');
    echo('<a href="https://github.com/bimorphism/learn-haskell">~/git/study/learn-haskell</a>');
    echo('<a href="https://github.com/bimorphism/aurora">~/git/code/aurora</a>');

    echo('<a href="https://github.com/bimorphism">view more</a>');

    printPrompt();
  }
  else {
    if (command.length > 0) {
      // Invalid command
      echo('');
      echo(`wwwsh: ${command}: <span style="color:red">command not found</span>`);

      printPrompt();
      return;
    }
    
    printPrompt();
  }
}

// Shown when the website is loaded initially
echo('[systemd-wwwd] Logging on as visitor.. <span style="color:green">[done]</span>');
echo('[systemd-wwwd] Spawned new wwwsh session! <span style="color:green">[done]</span>');

catNoNewLine('welcome.txt');
printPrompt();

// Hook both onkeypress and onkeydown for DOM events
document.onkeypress = function(ev) {
  if (ev.key === 'Enter') {
    handleCommand();

    buffer.scrollTop = 999999;
    // Reset the command
    command = '';
  }
  else if (ev.key.match(/^.+$/)) {
    buffer.innerHTML += ev.key;
    command += ev.key;
  }
  else if (ev.key === ' ') {
    buffer.innerHTML += ' ';
  }
}

document.onkeydown = function(ev) {
  if (ev.key === 'Backspace') {
    if (command.length > 0) {
      buffer.innerHTML = buffer.innerHTML.slice(0,buffer.innerHTML.length-1);
      command = command.slice(0, command.length-1);
    }
  }
}