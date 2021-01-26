export default {
  bind(el, bindings, vnode) {
    const arg = bindings.arg;
    const value = bindings.value;
    const font = bindings.modifiers.font;

    el.style[arg] = value;

    if(font) {
      el.style.fontSize = '100px';
    }
  }
};