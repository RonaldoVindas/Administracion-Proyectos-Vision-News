import {v2 as cloudinary} from 'cloudinary'
cloudinary.config({
    cloud_name: "dy7ksc08o",
    api_key: "684454843586461",
    api_secret: "DMilKoaNfnv0AGPXZUmlT8PNBsQ"

})
export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath,{
        folder: 'VisionAP'
    })
}
