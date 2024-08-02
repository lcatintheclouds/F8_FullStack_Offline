class F8 extends HTMLElement {
  static component(name, options) {
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
          this.data = options?.data?.() || {};
          this.template = options?.template;
          this.render();
        }
        render() {
          if (this.template) {
            const newTemplate = this.addTemplate(this.template);
            this.shadowRoot.innerHTML = newTemplate;
          }
        }
        addTemplate(template) {
          return template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
            return this.data[key];
          });
        }
      }
    );
  }
}
