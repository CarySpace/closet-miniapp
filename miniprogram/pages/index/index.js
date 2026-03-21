Page({
  data: {
    message: "Hello Closet 👕",
    showCloset: false,
    clothes: [
      {
        id: 1,
        name: "白色衬衫",
        tag: "通勤",
        image: "https://dummyimage.com/200x200/ffffff/000000&text=Shirt"
      },
      {
        id: 2,
        name: "浅蓝牛仔裤",
        tag: "休闲",
        image: "https://dummyimage.com/200x200/87ceeb/000000&text=Jeans"
      },
      {
        id: 3,
        name: "米色风衣",
        tag: "春秋",
        image: "https://dummyimage.com/200x200/f5deb3/000000&text=Coat"
      }
    ]
  },

  handleStart() {
    this.setData({
      message: "开始打造你的专属衣橱 ✨",
      showCloset: true
    })
  }
})