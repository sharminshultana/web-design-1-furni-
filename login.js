const wrapper = document.querySelector('.wrapper');
function activeSignIn() {
    wrapper.classList.add('activeSignIn');
    wrapper.classList.remove('activeSignUp');

}
function activeSignUp() {
    wrapper.classList.add('activeSignUp');
    wrapper.classList.remove('activeSignIn');


}
function changeColor(color) {
    const bgAnimate = document.getElementById('bg-animate');
    bgAnimate.style.background = color;
    bgAnimate.classList.add('active');
    setTimeout(function () {
        bgAnimate.classList.remove('active');
    }, 1200)
}