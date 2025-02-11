const ASSETS = {
    logo_header: new URL('./shared/logo.svg', import.meta.url).href,
    mobileNavLogo: new URL('./shared/icon-hamburger.svg', import.meta.url).href,
    mobileClose: new URL('./shared/icon-close.svg', import.meta.url).href,
    moonImg: new URL('./destination/image-moon.png', import.meta.url).href,
    marsImg: new URL('./destination/image-mars.png', import.meta.url).href,
    europaImg: new URL('./destination/image-europa.png', import.meta.url).href,
    titanImg: new URL('./destination/image-titan.png', import.meta.url).href,
    doug: new URL('./crew/image-douglas-hurley.png', import.meta.url).href,
    anous: new URL('./crew/image-anousheh-ansari.png', import.meta.url).href,
    mark: new URL('./crew/image-mark-shuttleworth.png', import.meta.url).href,
    victor: new URL('./crew/image-victor-glover.png', import.meta.url).href,
    launch: new URL('./technology/image-launch-vehicle-portrait.jpg', import.meta.url).href,
    spaceport: new URL('./technology/image-spaceport-portrait.jpg', import.meta.url).href,
    capsule: new URL('./technology/image-space-capsule-portrait.jpg', import.meta.url).href,
}

export default ASSETS;
