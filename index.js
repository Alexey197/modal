const products = [
  {id: 1, title: 'Кофе', price: 20, img: 'https://sun9-13.userapi.com/c857616/v857616085/1de573/-Kl7QhBl9I4.jpg'},
  {id: 2, title: 'Мадера', price: 30, img: 'https://sun9-72.userapi.com/c854028/v854028530/1c4616/WAx6StzaSf8.jpg'},
  {id: 3, title: 'Звездные войны', price: 40, img: 'https://sun9-61.userapi.com/c639619/v639619390/1c92f/mRoxYwtwH1g.jpg'}
]

const toHTML = product => `
  <div class="col">
    <div class="card">
      <img class="card-img-top" src="${product.img}" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <a href="#" class="btn btn-primary" data-btn="price" data-id="${product.id}">Посмотреть цену</a>
          <a href="#" class="btn btn-danger" data-btn="remove" data-id="${product.id}">Удалить</a>
        </div>
    </div>
  </div>
`

function render() {
  const html = products.map(toHTML).join('')
  document.querySelector('#products').innerHTML = html
}

render()

// const modal = $.modal({
//   title: 'Vladilen Modal',
//   closable: true,
//   content: `
//     <p>Lorem ipsum dolor sit.</p>
//     <p>Lorem ipsum dolor sit.</p>
//   `,
//   width: '400px',
//   footerButtons: [
//     {text: 'Ok', type: 'primary', handler() {
//       console.log('Primary btn clicked')
//         modal.close()
//       }},
//     {text: 'Cancel', type: 'danger', handler() {
//         console.log('Danger btn clicked')
//         modal.close()
//       }}
//   ]
// })

const priceModal = $.modal({
  title: 'Цена на Товар',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Закрыть', type: 'primary', handler() {
        priceModal.close()
      }}
  ]
})

const confirmModal = $.modal({
  title: 'Вы уверены?',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Отменить', type: 'secondary', handler() {
        confirmModal.close()
      }},
    {text: 'Удалить', type: 'danger', handler() {
        confirmModal.close()
      }}
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const product = products.find(f => f.id === id)
  if (btnType === 'price') {
    priceModal.setContent(`
      <p>Цена на ${product.title}: <strong>${product.price}$</strong></p>
    `)
    priceModal.open()
    console.log(product);
  } else if (btnType === 'remove') {
    confirmModal.setContent(`
      <p>Вы удаляете товар: <strong>${product.title}</strong></p>
    `)
    confirmModal.open()
  }
})
