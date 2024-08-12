let loadMorebtn1 = document.querySelector('#load-more-1');
let currentiten1 = 4;

loadMorebtn1.onclick = () => {
    let boxes = [...docuMent.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for (var i = currentiten1; i < currentiten1 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentiten1 += 4;
    if (currentiten1 >= boxes.length) {
        loadMorebtn1.style.display = 'none'
    }
}