class Suggest {
  constructor(app, opts) {
    this.wrapper = app
    this.id = 'asdasd'
    this.options = Object.assign({}, opts)
    this.state = {}
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

  result(data, regex) {
    return data.map(item => {
      const title = item['title'].toLowerCase().replace(regex, '<b>$1</b>')

      return `<div class="suggest-list_item" data-title="${item['title']}" data-value="${item['value']}">${title}</div>`
    }).join('\n')
  }

  async draw(wrapper, query) {
    await fetch(this.options['url'])
      .then(res => res.json())
      .then(res => {
        const search = `(${query.split(/ /g).join('|')})`
        const regex = new RegExp(search, 'g')

        wrapper.innerHTML = this.result(
          res.filter(item => regex.test(item['value']) || regex.test(item['title'])), regex
        )
      })
  }

  start() {
    const container = document.querySelector('body')
    const wrapper = document.querySelector(this.wrapper)

    wrapper.innerHTML = this.template()

    const element = document.querySelector(`[data-suggest-id="${this.id}"]`)
    const input = element.querySelector('input')
    const list = element.querySelector('.suggest-list')

    input.addEventListener('keyup', (e) => {
      const value = e.target.value

      if (value.length >= this.options['minimal']) {
        list.classList.add('suggest-list_active')

        this.draw(list, value).then(() => {
          list.querySelectorAll('.suggest-list_item').forEach(element => {
            element.addEventListener('click', (e) => {
              this.state = e.target.dataset
              input.value = this.state['title']
            }, false)
          })
        })
      } else {
        list.classList.remove('suggest-list_active')
      }
    }, false)

    input.addEventListener('focus', (e) => {
      const value = e.target.value

      if (value.length >= this.options['minimal']) {
        list.classList.add('suggest-list_active')
      } else {
        list.classList.remove('suggest-list_active')
      }
    }, false)

    wrapper.addEventListener('click', (e) => {
      e.stopPropagation()
    }, false)

    container.addEventListener('click', (e) => {
      list.classList.remove('suggest-list_active')
    }, false)
  }
}
