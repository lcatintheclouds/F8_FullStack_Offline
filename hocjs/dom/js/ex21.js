// định nghĩa hàm tạo component
var F8 = {
  create: function (name, callback) {
    class Component extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.attributesCallback = {
          "v-length": "applyAttributeLength",
          //   "v-on": "applyAttributeEvent",
        };
        this.data = {};
      }
      connectedCallback() {
        // console.log("connectedCallback");
        // callback.call(this.shadowRoot);
        this.shadowRoot.innerHTML = callback.call(this.shadowRoot);
        this.applyAttributes(this.shadowRoot);
      }
      applyAttributes(parentEl) {
        var elementList = parentEl.children;
        if (elementList.length) {
          Array.from(elementList).forEach(function (element) {
            const attributeList = element.attributes;
            for (var index = 0; index < attributeList.length; index++) {
              var attributeName = attributeList[index].name;
              var attributeValue = attributeList[index].value;
              var callbackName = this.attributesCallback[attributeName];
              if (callbackName) {
                this[callbackName].call(this, element, attributeValue);
              }
              if (attributeName === "v-data") {
                var dataObj = new Function(`return ${attributeValue}`).call();
              }
              if (
                typeof dataObj === "object" &&
                !Array.isArray(dataObj) &&
                dataObj !== null
              ) {
                Object.assign(this.data, dataObj);
              }
              if (attributeName === "v-text") {
                element.innerText = this.data[attributeValue] ?? "";
              }
              if (attributeName.startsWith("v-on:")) {
                const eventName = attributeName.replace("v-on:", "");
                element.addEventListener(
                  eventName,
                  function (e) {
                    var args = ["event", attributeValue];
                    var func = Function.apply(null, args);
                    func.call(this, e, this.data.count, this.data.title);
                  }.bind(this)
                );
              }
            }
            // Đệ quy
            if (element.children.length) {
              this.applyAttributes(element);
            }
          }, this);
        }
      }
      applyAttributeLength(element, value) {
        var nextElement = element.nextSibling;
        var parentEl = element.parentNode;
        for (var i = 0; i < value; i++) {
          var newElement = element.cloneNode(true);
          if (!nextElement) {
            parentEl.append(newElement);
          } else {
            parentEl.insertBefore(newElement, nextElement);
          }
        }
        element.remove();
      }
      //   applyAttributeEvent(value) {}
    }
    customElements.define(name, Component);
  },
};
var HelloWorld = F8.create("hello-world", function () {
  // chứa nội dung của component
  //   console.log(this);
  return `
<div v-data="{count: 0}">
<h1 >Hello World: <span v-text="count"></span></h1>
  <button v-on:click="console.log(count)">Click me</button> <br>
  ok chưa?
  <span>Chào anh em</span>
  <ul>
    <li v-length="10">Item</li></ul>
  Ok rồi
  <h2 v-length="2">Hello</h2>
</div> 
`;
});
