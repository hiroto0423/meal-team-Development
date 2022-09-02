const fileselect = document.getElementById('fileselect');

fileselect.addEventListener('change', resizeAndEncode, false)

// 画像をリサイズしてCanvasに描画。リサイズした画像データURLをpng形式でcallbackする
function resizeimage(v, height, cb){
  const canvasresize = document.getElementById('canvasresize');
  const image = new Image();
  image.src = v;
  image.onload = () => {
    const ctx  = canvasresize.getContext('2d');
    const imagewidth = image.width * (height / image.height);
    canvasresize.width=imagewidth;
    canvasresize.height=height;
    ctx.drawImage(image,0,0,imagewidth,height);
    cb(canvasresize.toDataURL("image/png"));
  }
}

// 画像ファイルが選択されると480 x 320pxにリサイズし、base64形式にエンコード
function resizeAndEncode() {
  var reader = new FileReader();

  reader.onload = function (e) {
    resizeimage(e.target.result,320,(v)=>{
      // リサイズした画像データURLのコールバック
      document.getElementById('image').src = v;
      document.getElementById('base64text').innerHTML = v
    });
  }
  reader.readAsDataURL(fileselect.files[0]);
}
