import './index.scss';

export default class Suggest {
  constructor(args) {
    console.log(args);

    this.start();
  }

  fetch() {
    return new Promise(resolve => {

    });
  }

  filter() {
    return new Promise(resolve => {

    });
  }

  async draw() {
    const fetch = await this.fetch();
    const result = await this.filter(fetch);

    return `
      <div class="suggest-wrapper">
        <input type="text" />
        <div class="suggest-list">
          ${this.drawItem(result)}
        </div>
      </div>
    `;
  }

  drawItem() {

  }

  start() {
    document
      .querySelector(this.wrapper)
      .innerHTML(this.draw());
  }
}
