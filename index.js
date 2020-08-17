const products = [
  {id: 1, title: 'Кофе', price: 20, img: 'https://sun9-13.userapi.com/c857616/v857616085/1de573/-Kl7QhBl9I4.jpg'},
  {id: 2, title: 'Мадера', price: 30, img: 'https://sun9-72.userapi.com/c854028/v854028530/1c4616/WAx6StzaSf8.jpg'},
  {id: 3, title: 'Звездные войны', price: 40, img: 'https://sun9-61.userapi.com/c639619/v639619390/1c92f/mRoxYwtwH1g.jpg'}
]

const modal = $.modal({
  title: 'Vladilen Modal',
  closable: true,
  content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      console.log('Primary btn clicked')
        modal.close()
      }},
    {text: 'Cancel', type: 'danger', handler() {
        console.log('Danger btn clicked')
        modal.close()
      }}
  ]
})
