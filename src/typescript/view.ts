interface IView{
  element: HTMLElement;
  createElement: (object) => HTMLElement;
}

class View implements IView {
  element;
  
  createElement({ tagName, className = '', attributes = {} }) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
  }
}

export default View;
  