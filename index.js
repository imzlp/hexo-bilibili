hexo.extend.tag.register('bilibili', function (args, content) {
    let max_height = ""
    let max_width = ""

    if(!(hexo.config.hexo_bilibili === undefined))
    {
        if(!(hexo.config.hexo_bilibili.max_height === null))
            max_height = hexo.config.hexo_bilibili.max_height;
        if(!(hexo.config.hexo_bilibili.max_width === null))
            max_width = hexo.config.hexo_bilibili.max_width;
    }
    let iframes=``;
    var video_vid = args[0]
    iframes += `<div class="bilibili-video" style="position: relative;width: 100%;height: 0;padding-bottom: 75%;">`
    iframes += `<iframe frameborder="0" src="https://player.bilibili.com/player.html?bvid=${video_vid}" style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;"></iframe>`
    iframes += `</div>`
    return iframes;
}, { ends: false });
