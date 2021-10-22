
async function obtenerCredencialesCloudinary() {
    if (localStorage.getItem('dataUser')) {
        let dataU=localStorage.getItem('dataUser');
        let data=JSON.parse(dataU);
        return data;
    }
    
}


export async function subirImagen(bar,fileImg) {
    const imageUploadbar = document.getElementById(bar);
    const r = await obtenerCredencialesCloudinary();
    console.log(r)
    const formData = new FormData();
    formData.append('file',fileImg);
    formData.append('upload_preset',r.presets);
    const res = await axios.post(r.cloudinary,formData,{
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
