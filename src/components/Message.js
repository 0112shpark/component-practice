import { Component } from "../core/my";
import messageStore from "../store/message";

export default class Message extends Component {
  constructor() {
    super();
    messageStore.subscribe("message", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /*html*/ `
    <h2>${messageStore.state.message}</h2>
    `;
  }
}
