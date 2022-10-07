var a = Array.from(document.body.querySelectorAll("button#button.style-scope.yt-icon-button[aria-label='Action menu']"));
var b = Array.from(document.body.querySelectorAll("ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer"));
var c = Array.from(document.body.querySelectorAll("ytd-menu-renderer.style-scope.ytd-playlist-video-renderer"));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function d(i) {
  a[i + 1].click();
  b[i].setAttribute('menu-opened');
  c[i].setAttribute('menu-active');
  await sleep(2500);
  document.body.querySelectorAll("ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer[role='menuitem']").item(3).click();
  console.log("Video " + (i + 1) + " removed.");
}

async function e() {
  for (var i = 0; i < a.length; i++) {
    d(i);
    await sleep(1000);
  }
}

e();
