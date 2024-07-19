(function init() {
  addListeners();
})();

function addListeners() {
  //LOGIN, REGISTER, LOGOUT
  if (document.getElementById('btnLogin')) {
    document.getElementById('btnLogin').addEventListener('click', (ev) => {
      ev.preventDefault();
      //show login
      document.getElementById('dialogLogin').showModal();
    });
  }
  if (document.getElementById('btnRegister')) {
    document.getElementById('btnRegister').addEventListener('click', (ev) => {
      ev.preventDefault();
      //show register modal
      document.getElementById('dialogRegister').showModal();
    });
  }
  if (document.getElementById('btnLogout')) {
    document.getElementById('btnLogout').addEventListener('click', (ev) => {
      ev.preventDefault();
      //TODO: logout
    });
  }
  document.getElementById('btnSubmitLogin').addEventListener('click', (ev) => {
    //TODO: login the user
    document.getElementById('dialogLogin').close();
  });
  document.getElementById('btnSubmitRegister').addEventListener('click', (ev) => {
    //TODO: register the user
    document.getElementById('dialogRegister').close();
  });
  document.getElementById('btnCancelLogin').addEventListener('click', (ev) => {
    document.getElementById('dialogLogin').close();
  });
  document.getElementById('btnCancelRegister').addEventListener('click', (ev) => {
    document.getElementById('dialogRegister').close();
  });
  //Track typing
  if (document.getElementById('flex')) {
    document.getElementById('flex').addEventListener('keyup', countLetters);
  }
  //Add Image to post
  if (document.getElementById('btnMedia')) {
    document.getElementById('btnMedia').addEventListener('click', addMedia);
  }
  //Submit post
  if (document.getElementById('btnSave')) {
    document.getElementById('btnSave').addEventListener('click', submitPost);
  }

  //POST Clicks
  document.querySelector('main').addEventListener('click', handlePostClicks);
}

function handlePostClicks(ev) {
  //handle clicks for users, posts, likes, shares
}

function countLetters(ev) {
  //count letters as the user types in the text area.
}

function addMedia(ev) {
  //add an image to a post
}

function submitPost(ev) {
  //submit a post
}
