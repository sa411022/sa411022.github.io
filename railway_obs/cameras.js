cameras = [
    //{ name: "保安=台南", url: "https://trafficvideo2.tainan.gov.tw/a0c6236b?t=" },
    //{ name: "大肚=龍井", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=695&t=" },
    //{ name: "台中港線", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=32&t=" },
    //{ name: "台中港線", url: "https://cctv-ss03.thb.gov.tw/T17-000K+940?t=" },
    //{ name: "大甲=台中港", url: "https://cctv-ss03.thb.gov.tw/T1-156K+650?resolution=CIF_352X288&t=" },
    //{ name: "通霄=苑裡", url: "https://cctv-ss04.thb.gov.tw/T1-139K+850?resolution=CIF_352X288&t=" },
    //{ name: "通霄=新埔", url: "https://cctv-ss04.thb.gov.tw/T1-132K+050?resolution=CIF_352X288&t=" },
    //{ name: "談文=大山", url: "https://cctv-ss04.thb.gov.tw/T61-097K+100?resolution=CIF_352X288&t=" },
    //{ name: "談文=大山", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=582&t=" },
    //{ name: "竹南=談文", url: "https://cctv-ss03.thb.gov.tw/T1F-003K+650?resolution=CIF_352X288&t=" },
    //{ name: "竹南=崎頂", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=245&t=" },
    //{ name: "桃園=內壢", url: "https://cctvtraffic.tycg.gov.tw/camera067?t=" },
    { name: "福隆=貢寮", url: "https://cctv-ss01.thb.gov.tw/T2-100K+420?t=" },
    { name: "石城=大里", url: "https://cctv-ss01.thb.gov.tw/T2-118K+300?t=" },
    { name: "龜山=大溪", url: "https://cctv-ss01.thb.gov.tw/T2-124K+000?t=" },
    //{ name: "宜蘭=二結", url: "https://cctv-ss02.thb.gov.tw/T9-085K+050?t=" },
    { name: "宜蘭=二結", url: "https://cctv-ss02.thb.gov.tw/T9-085K+900?t=" },
    //{ name: "", url: "" },
]

if(cameras.length >= 4) {
    $("#topbar > .left").html(`<b>${cameras[0].name}<br>${cameras[2].name}</b>`);
    $("#topbar > .right").html(`<b>${cameras[1].name}<br>${cameras[3].name}</b>`);
}

rand = Math.random();
if(cameras.length >= 4) {
    $("#cam1 > img").attr("src", cameras[0].url + rand);
    $("#cam2 > img").attr("src", cameras[1].url + rand);
    $("#cam3 > img").attr("src", cameras[2].url + rand);
    $("#cam4 > img").attr("src", cameras[3].url + rand);
}
