import { Component } from "../core/my";
import messageStore from "../store/message";

export default class TextField extends Component {
  render() {
    //getter 함수 in class Store
    this.el.innerHTML = /* html*/ `
    <input value="${messageStore.state.message}"/>
    `;

    //setter 함수 in class Store
    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      messageStore.state.message = inputEl.value;
    });
  }
}
