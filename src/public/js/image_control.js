console.log('load image_control.js')

// 選択された画像をbase64形式にエンコードする
function changeImageToBase64() {
  const uploadImage = document.querySelector('#uploadImage')
  const file = uploadImage.files[0]
  const reader = new FileReader()
  reader.onload = (event) => {
    const base64Text = event.currentTarget.result;
    document.querySelector('#base64text').innerHTML = base64Text;
    document.querySelector('#uploadImageArea').innerHTML = `<img src="${base64Text}" width="100%" />`
  }
  reader.readAsDataURL(file)
}
