const $imgContainer = document.getElementById('img-container')

const $modal = document.querySelector('.modal')

const imgArr = []

const imagesObject = [
  {
    src: 'https://picsum.photos/id/10/2500/1667',
    large: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/11/2500/1667',
    large: 'https://i.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/12/2500/1667',
    large: 'https://i.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/13/2500/1667',
    large: 'https://i.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/14/2500/1667',
    large: 'https://i.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/15/2500/1667',
    large: 'https://i.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },
  {
    src: 'https://picsum.photos/id/18/2500/1667',
    large: 'https://i.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/16/2500/1667',
    large: 'https://i.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/17/2500/1667',
    large: 'https://i.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/54/2500/1667',
    large: 'https://i.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g',
    caption: 'By: Nicolas Swanson',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/19/2500/1667',
    large: 'https://i.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
    caption: 'By: Paul Jarvis',
    alt: 'From Lorem Picsum',
  },

  {
    src: 'https://picsum.photos/id/37/2500/1667',
    large: 'https://i.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI',
    caption: 'By: Austin Neill',
    alt: 'From Lorem Picsum',
  }
]

for (const imageData of imagesObject) {
  imgArr.push(`<img class="thumb" src="${imageData.src}" alt="${imageData.alt}" data-large="${imageData.large}" data-caption="${imageData.caption}">
  `)
}

$imgContainer.innerHTML = imgArr.join('')


$imgContainer.addEventListener('click', function (e) {
  const $thumb = e.target.closest('.thumb')
  $modal.innerHTML = `
    <img src="${$thumb.dataset.large}">   
    <small>${$thumb.dataset.caption}</small>`
  $modal.classList.add('show')
})

$modal.addEventListener('click', function () {
  $modal.classList.remove('show')
})