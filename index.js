class Suggest {
  constructor(app, opts) {
    this.wrapper = app
    this.start()
  }

  fetch() {
    return new Promise(resolve => {

    })
  }

  filter() {
    return new Promise(resolve => {

    })
  }

  async draw() {
    // const fetch = await this.fetch()
    // const result = await this.filter(fetch)

    return `
      <div class="suggest-wrapper">
        <input type="text" />
        <div class="suggest-list">
          ${this.drawItem([])}
        </div>
      </div>
    `
  }

  drawItem() {

  }

  start() {
    this.draw().then(res => {
      console.log(res)
      document.querySelector(this.wrapper).innerHTML = res
    })
  }
}
