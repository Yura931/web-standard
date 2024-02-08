/* fadeIn */
const fadeIn = (target) => {
    let level = 0;
    let inTimer = null;
    inTimer = setInterval(() => {
        level = fadeInAction(target, level, inTimer)
    }, 50);
}

const fadeInAction = (target, level, inTimer) => {
    level = level + 0.1;
    changeOpacity(target, level);
    if(level > 1) clearInterval(inTimer);
    return level;
}

const fadeOut = (target) => {
    let level = 1;
    let outTimer = null;
    outTimer = setInterval(() => {
        level = fadeOutAction(target, level, outTimer);
    }, 50);
}

const fadeOutAction = (target, level, outTimer) => {
    level = level - 0.1;
    changeOpacity(target, level);
    if(level < 0) clearInterval(outTimer);
    return level;
}

const changeOpacity = (target, level) => {
    let obj = target;
    obj.style.opacity = level;
    obj.style.MozOpacity = level;
    obj.style.KhtmlOpacity = level;
    obj.style.MsFilter = `progid: DXImageTransform.Microsoft.Alpha(Opacity=${level * 100})`;
    obj.style.filter = `alpha(opacity=${level * 100});`;
}
