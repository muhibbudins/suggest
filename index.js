class Suggest {
  constructor(app, opts) {
    this.wrapper = app
    this.id = 'asdasd'
    this.options = Object.assign({}, opts)
    this.start()
  }

  template() {
    return `
      <div class="suggest-wrapper" data-suggest-id="${this.id}">
        <input type="text" />
        <div class="suggest-list"></div>
      </div>
    `
  }

  result(data, query) {
    return data.map(item => {
      const search = `(${query.split(' ').join('|')})`
      const regex = new RegExp(search, 'g')
      const title = item['title'].toLowerCase().replace(regex, '<b>$1</b>')

      return `<div class="suggest-list_item">${title}</div>`
    }).join('\n')
  }

  draw(wrapper, query) {
    fetch(this.options['url'])
      .then(res => res.json())
      .then(res => {
        wrapper.innerHTML = this.result(res, query)
      })
  }

  start() {
    const wrapper = document.querySelector(this.wrapper)

    wrapper.innerHTML = this.template()

    const element = document.querySelector(`[data-suggest-id="${this.id}"]`)
    const input = element.querySelector('input')
    const list = element.querySelector('.suggest-list')

    input.addEventListener('keyup', (e) => {
      const value = e.target.value

      if (value.length >= this.options['minimal']) {
        list.classList.add('suggest-list_active')

        this.draw(list, value)
      } else {
        list.classList.remove('suggest-list_active')
      }
    }, false)
  }
}
