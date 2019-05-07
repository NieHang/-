class List {
  constructor(arr) {
    this.arr = arr
  }
}

const list = new List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

let pageNumber = 0

/**
 * @param {Number} showNumber 一页显示几个数据
 * @param {Number} pageNumber 当前页
 */
function page(showNumber, pageNumber) {
  const ul = document.getElementsByClassName('list')[0]
  ul.innerHTML = ''
  for (let i = (pageNumber - 1 ) * showNumber, len = showNumber * pageNumber; i < len; i++) {
    if (list.arr[i]) {
      ul.innerHTML += `<li>${list.arr[i]}</li>`
    }
  }
}

function next(showNumber) {
  const button = document.getElementsByTagName('button')[0]
  let totalPage = Math.ceil(list.arr.length / showNumber)
  button.onclick = function () {
    pageNumber += 1
    if (pageNumber > totalPage) {
      pageNumber = 0
      page(showNumber, 1);
    } else {
      page(showNumber, pageNumber);
    }
  }
}

next(5)