F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "Counter App",
  }),
  template: `
  <div>
    <h1>{{ title }}</h1>
    <h2>Đã đếm: {{ count }} lần</h2>
    <button v-on:click="count--">-</button>
    <button v-on:click="count++">+</button>
    <button v-on:dblclick="title='Xin chào F8'">Change Title</button>
  </div>`,
});
F8.component("header-component", {
  template: `<h1>HEADER</h1>`,
});
