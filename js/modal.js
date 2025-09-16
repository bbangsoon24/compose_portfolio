const popup_key = "popup_expire";

const modal = document.getElementById("modal");

function isHide(key) {
  const expire = localStorage.getItem(key);
  if (!expire) return false;
  return Date.now() < Number(expire);
}

function hideDay(key) {
  const one = 6000;
  localStoarge.setitem(key, String(Date.now() + one));
}

if (isHide(popup_key)) {
  modal.hidden = true;
} else {
  modal.hidden = false;
}

todayclose.addEventListener("click", () => {
  hideDay(popup_key);
  modal.hidden = true;
});

popupclose.addEventListener("click", () => {
  modal.hidden = true;
});
