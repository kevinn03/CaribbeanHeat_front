const stickScroll = () => {
  if (window.scrollY > 15) {
    document.querySelector('.headerBox').style.top = '0';
  } else {
    document.querySelector('.headerBox').style.top = '49%';
  }
};

export default stickScroll;
