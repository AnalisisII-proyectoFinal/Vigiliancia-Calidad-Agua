/**img */
const URL='https://api.cloudinary.com/v1_1/municipalidad-san-jose-chacaya/image/upload';
const PRESETS='gg5gskkt';


export async function subirImagen(bar,fileImg) {
    const imageUploadbar = document.getElementById(bar);
    const formData = new FormData();
    formData.append('file',fileImg);
    formData.append('upload_preset',PRESETS);
    const res = await axios.post(URL,formData,{
        headers:{
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress (e) {
                  let progress = Math.round((e.loaded * 100.0) / e.total);
                  console.log(progress);
                  imageUploadbar.setAttribute('value', progress);
              }
        })
    return res.data.secure_url;  
}
