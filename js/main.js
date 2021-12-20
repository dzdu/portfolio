new TypeIt('#writer', {
  speed: 200,
  waitUntilVisible: true,
  cursor: false,
})
  .type('WEBMASTER', {
    delay: 700,
  })
  .delete()
  .type('Front-end', {
    delay: 700,
  })
  .delete()
  .type('UX', {
    delay: 700,
  })
  .delete()
  .type('Back-end', {
    delay: 700,
  })
  .delete()
  .type('WEBMASTER-Frontend-UX-Backend developer', {
    delay: 700,
    cursor: false,
  })
  .go();
new TypeIt('.center', {
  speed: 150,
  waitUntilVisible: true,
  cursor: false,
})
  .type('Hello, Stranger!<br/>', {
    delay: 700,
  })
  .type('Nice to meet you!<br/>', {
    delay: 700,
  })
  .type(
    // `Would you like to know me better?<br/>
    // <a href="#blocktwo" class='c-links'>Yes 🤍</button></a>
    // <a href="../html/sorry.html" class='c-links'>No 😔</button></a>
    //`,
    `This page is currently under construction, please come back later
    `,
    {
      delay: 700,
    },
  )
  .go();

new TypeIt('#centerblocktwo', {
  speed: 100,
  waitUntilVisible: true,
  cursor: false,
})
  .type('My name is Dzmitry!<br/>', {
    delay: 700,
  })
  .type(
    "I'm 25 years old and I'm from <a href='https://en.wikipedia.org/wiki/Sweden' target='_blank' class='c-links media-link'>Sweden</a><br/>",
    {
      delay: 700,
    },
  )
  .type(
    "I'm graduated Webmaster and studied at University West in Sweden and had best teachers in my life 🙃 <br/>",
    {
      delay: 700,
    },
  )
  .type(
    'My biggiest hobby is Webdevelopment, Design and Photography. I have been photographer for few years now<br/>',
    {
      delay: 700,
    },
  )
  .type(
    "You can check <a href='https://unsplash.com/@dead__angel_' target='_blank' class='c-links media-link'> my Unsplash profile</a> to get in touch with my pics <br/>",
    {
      delay: 700,
    },
  )
  .go();

new TypeIt('#centerblockthree', {
  speed: 100,
  waitUntilVisible: true,
  cursor: false,
})
  .type("I'm a WEBMASTER who realy enjoying web development<br/>", {
    delay: 700,
  })
  .type('I got some projects done both in MERN, ReactJS & Native, Webpack, Node JSand UX<br/>', {
    delay: 700,
  })
  .type('You can find those projects by clicking each of links 🙂<br/>', {
    delay: 700,
  })
  .type("I always update my portfolio, so don't forget to check it out<br/><br/>", {
    delay: 700,
  })
  .type(
    `<a href='https://github.com/instdeadangel/' target='_blank' class="p-links c-links"> Github</a> 
    <a href='https://www.behance.net/dzdu' class="p-links c-links" target='_blank'> Behancé</a> 
    <a href='http://taplink.cc/dead__angel_' target='_blank' class="p-links c-links"> Social Links </a> 
    <a href='https://se.linkedin.com/in/dzmitry-dudov-32681b1b3' class="p-links c-links" target='_blank'>Linked in</a>
    `,
    {
      delay: 700,
    },
  )
  .go();

new TypeIt('#centerblockfour', {
  speed: 100,
  waitUntilVisible: true,
  cursor: false,
})
  .type("🥰 Let's get in touch 🥰<br/>", {
    delay: 700,
  })
  .type('Email me<br/>', {
    delay: 700,
  })
  .type('💌 513dragan@gmail.com <br/>', {
    delay: 700,
  })
  .type('or<br/> 💌 instdeadangel@gmail.com <br/>', {
    delay: 700,
  })
  .type(
    `King regards! <br/> Dzmitry Dudov
    `,
    {
      delay: 700,
    },
  )
  .go();
