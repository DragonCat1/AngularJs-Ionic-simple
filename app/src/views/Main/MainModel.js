window.bm.factory('MainModel', [function ($log) {
  this.banners = [
    {
      img: 'src/img/banner.svg',
      to: 'Book/1'
    },
    {
      img: 'src/img/banner.svg',
      to: 'Book/2'
    },

    {
      img: 'src/img/banner.svg',
      to: 'Book/3'
    }
  ]
  this.recommends = [
    {
      img: 'src/img/banner.svg',
      title: '书籍1'
    },
    {
      img: 'src/img/banner.svg',
      title: '书籍2'
    },
    {
      img: 'src/img/banner.svg',
      title: '书籍3'
    },
    {
      img: 'src/img/banner.svg',
      title: '书籍4'
    },
    {
      img: 'src/img/banner.svg',
      title: '书籍5'
    },
    {
      img: 'src/img/banner.svg',
      title: '书籍6'
    },
    {
      img: 'src/img/banner.svg',
      title: '书籍7'
    }
  ]
  return this
}])
