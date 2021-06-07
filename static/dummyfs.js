const dummyenv = {
  '$SHELL': '/bin/wwwsh',
  '$USER': 'visitor'
};

// Dummy file system
// Does nothing but look cool and display text files (via cat)

const dummyfs = { 
  'about.txt': {
    path: '~/about.txt',
    lines: [
      'Hi, my name is bimorphism/abi and I made this website!',
      'I have experience in writing C, Rust, Javascript and D code.<br>',
      'I also love Linux and thought it would be cool to make my site an interactive terminal (sorry mobile users)!<br>'
    ]
  },
  'social.txt': {
    path: '~/social.txt',
    lines: [
      'Github: bimorphism',
      'Email (only if urgent): dhillonwilk@gmail.com'
    ]
  },
  'welcome.txt': {
    path: '~/welcome.txt',
    lines: [
      '       .---.',
      '      /     \\',
      '      \\.@-@./',
      '     //  _  \\',
      '    | \     )|_',
      '   /`\\_`>  <_/ \\',
      "jgs\\__/\'---'\__/",
      '',
      '<b style="color:yellow">Welcome to my site!</b>',
      'The site acts like a UNIX terminal, for help type "help". Enjoy! ~admin',
      'If you wish to view this again, type "cat welcome.txt"!'
    ]
  }
}