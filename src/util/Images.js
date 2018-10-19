
// 여기 추가하는게 일이다.... 
const resources = {
    "splash": require('../../assets/image/splash.png'),
 
}

export function getAssetByFilename(filename) {
    if (resources.hasOwnProperty(filename)) {
        return resources[filename];
    }
    return null;
}