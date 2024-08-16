var url = "https://2828dq-8080.csb.app/";
// var url = "http://localhost:3000";
const container = document.querySelector(".container");
async function getMain() {
  showLoading();
  const response = await fetch(`${url}/todos-list`);
  try {
    if (!response.ok) {
      throw new Error(`Lỗi: ${response.status}`);
    }
    const json = await response.json();
    getRender(json);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoading();
  }
}

function getRender(value) {
  // show data
  document.querySelector(".todo-app").innerHTML = "";
  document.querySelector(".complete-todo").innerHTML = "";
  var count = 0;
  value.map((e) => {
    if (e.content === 1) {
      var _html = `<div class="item">
            <div class="text">
              <span>${e.name}</span>
            </div>
            <div class="btn">
              <button class="btn--item delete" data-number="${e.id}"><ion-icon name="trash"></ion-icon></button>
              <button class="btn--item edit" data-edit="${e.id}"><ion-icon name="create"></ion-icon></button>
              <button class="btn--item add-completed remove" data-remove="${e.id}"> <ion-icon name="cloud-done"></ion-icon></button>
            </div>
          </div>`;
      document.querySelector(".todo-app").innerHTML += _html;
    } else if (e.content === 2) {
      var htmls = `    <div class="item">
            <div class="text">
              <span>${e.name}</span>
            </div>
            <div class="btn">
              <button class="btn--item__conpleted delete" data-number="${e.id}"><ion-icon name="trash"></ion-icon></button>
              <button class="btn--item__conpleted edit" data-edit="${e.id}"><ion-icon name="create"></ion-icon></button>
              <button class="btn--item__conpleted remove" data-remove="${e.id}"><ion-icon name="cloud-done"></ion-icon></button>
            </div>
          </div>`;
      document.querySelector(".number").innerText = ++count;
      document.querySelector(".box--conpleted").innerHTML += htmls;
    }
  });
  getDelete();
  getRemove();
}

// function addData() {
//   // add new data
//   var inputEl = document.querySelector(".list--add");
//   var btnAdd = document.querySelector(".btn--modal__add");
//   btnAdd.addEventListener("click", () => {
//     var data = {
//       content: 1,
//       name: inputEl.value,
//     };
//     console.log("Nội dung input:", data);
//     getCreate(data);
//   });
// }

// async function getCreate(_data) {
//   // add new data
//   const response = await fetch(`${url}/data`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(_data),
//   });
//   if (response.ok) {
//     console.log("thêm Thành công");
//     getMain();
//     getCancel();
//   } else {
//     console.log("lỗi");
//   }
// }
// function getDelete() {
//   // delete data
//   async function deleteItem(dataNumber) {
//     try {
//       const response = await fetch(`${url}/data/${dataNumber}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         console.log("Đã xóa thành công");
//         getMain(); // Cập nhật lại danh sách sau khi xóa
//       } else {
//         console.log(`Không thể xóa: Lỗi ${response.status}`);
//       }
//     } catch (err) {
//       console.error("Đã xảy ra lỗi:", err);
//     }
//   }
//   var removeEl = document.querySelectorAll(".delete");
//   removeEl.forEach((value) => {
//     value.addEventListener("click", (e) => {
//       var dataNumbber = e.target.getAttribute("data-number");
//       deleteItem(dataNumbber);
//     });
//   });
// }

// //tìm kiếm
// var foundEl = document.querySelector("#search");
// foundEl.addEventListener("input", (e) => {
//   if (foundEl.value.trim() === "") {
//     getMain();
//   } else {
//     getFound(foundEl.value);
//   }
// });
// function getFound(keyword) {
//   fetch(`${url}/data`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Lỗi: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((json) => {
//       const filteredData = json.filter((item) =>
//         item.name.toLowerCase().includes(keyword.toLowerCase())
//       );
//       getRender(filteredData);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// //chuyển chỗ
// function getRemove() {
//   const remove = document.querySelectorAll(".remove");
//   remove.forEach((value) => {
//     console.log(remove);

//     value.addEventListener("click", (e) => {
//       // showLoading();
//       var dataRemove = e.target.getAttribute("data-remove");
//       handelRemove(dataRemove);
//     });
//   });

//   async function handelRemove(number) {
//     const response = await fetch(`${url}/data/${number}`);
//     try {
//       if (!response.ok) {
//         throw new Error(`Lỗi: ${response.status}`);
//       }
//       const json = await response.json();
//       changer(json);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   function changer(value) {
//     Object.keys(value).forEach((e) => {
//       if (value.content == 1) {
//         editcontent({
//           id: value.id,
//           content: 2,
//           name: value.name,
//         });
//       } else if (value.content == 2) {
//         editcontent({
//           id: value.id,
//           content: 1,
//           name: value.name,
//         });
//       }
//     });
//   }
//   async function editcontent(_value) {
//     try {
//       const response = await fetch(`${url}/data/${_value.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(_value),
//       });

//       if (!response.ok) {
//         throw new Error(`Lỗi: ${response.status}`);
//       }

//       const json = await response.json();
//       // hideLoading();
//       getMain();
//     } catch (err) {
//       console.log("Có lỗi xảy ra:", err);
//     }
//   }
// }
// // thực thi
// getMain();
