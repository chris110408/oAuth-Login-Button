export function loadSdk(d,s,id,jsSrc,cb) {
        if (d.getElementById(id)) {
            return;
        }
        const element = d.getElementsByTagName(s)[0];
        const fjs = element;
        let js = element;
        js = d.createElement(s);
        js.id = id;
        js.src = jsSrc;
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = cb;
}

export const getProviderConfig = (provider, configs) => {
    let providerName = ""
    switch (provider) {
        case "google":
            providerName = "go"
            break
        case "facebook":
            providerName = "fa"
            break
        default:
            break
    }
    return configs[`${providerName}`]
}
