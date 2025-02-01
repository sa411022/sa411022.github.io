cameras = [
    //{ name: "潮州=崁頂", url: "https://cctvs.freeway.gov.tw/live-view/mjpg/video.cgi?camera=345&t=" },
    //{ name: "竹田=潮州", url: "https://cctvs.freeway.gov.tw/live-view/mjpg/video.cgi?camera=238&t=" },
    //{ name: "保安=台南", url: "https://trafficvideo2.tainan.gov.tw/a0c6236b?t=" },
    //{ name: "嘉北=民雄", url: "https://cctv-ss06.thb.gov.tw/T1-262K+985?t=" },
    //{ name: "嘉北=民雄", url: "https://cctv-ss06.thb.gov.tw/T1-262K+500?t=" },
    //{ name: "斗南=大林", url: "https://cctv-ss06.thb.gov.tw/T1-244K+620?t=" },
    //{ name: "斗南=斗六", url: "https://cctv-ss06.thb.gov.tw/T1D-6K+900?t=" },
    //{ name: "斗六=斗南", url: "https://cctv-ss06.thb.gov.tw/T1D-6K+750?t=" },
    //{ name: "台中=精武", url: "https://tcnvr5.taichung.gov.tw/f86ef8d1?t=" },
    //{ name: "潭子=頭家厝", url: "https://cctv-ss03.thb.gov.tw/T3-175K+350?t=" },
    //{ name: "后里=豐原", url: "https://tcnvr4.taichung.gov.tw/36f90b62?t=" },
    //{ name: "銅鑼=南勢", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=189&t=" },
    //{ name: "苗栗=南勢", url: "https://cctv-ss04.thb.gov.tw/T13-30K+200?t=" },
    //{ name: "豐富=苗栗", url: "https://cctv-ss04.thb.gov.tw/T13-27K+820?t=" },
    { name: "大肚=龍井", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=695&t=" },
    //{ name: "台中港線", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=32&t=" },
    //{ name: "台中港線", url: "https://cctv-ss03.thb.gov.tw/T17-000K+940?t=" },
    { name: "大甲=台中港", url: "https://cctv-ss03.thb.gov.tw/T1-156K+650?resolution=CIF_352X288&t=" },
    { name: "通霄=苑裡", url: "https://cctv-ss04.thb.gov.tw/T1-139K+850?resolution=CIF_352X288&t=" },
    //{ name: "通霄=新埔", url: "https://cctv-ss04.thb.gov.tw/T1-132K+050?resolution=CIF_352X288&t=" },
    { name: "談文=大山", url: "https://cctv-ss04.thb.gov.tw/T61-097K+100?resolution=CIF_352X288&t=" },
    //{ name: "談文=大山", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=582&t=" },
    //{ name: "竹南=談文", url: "https://cctv-ss03.thb.gov.tw/T1F-003K+650?resolution=CIF_352X288&t=" },
    //{ name: "竹南=崎頂", url: "https://cctvc.freeway.gov.tw/abs2mjpg/bmjpg?camera=245&t=" },
    //{ name: "竹北=北新竹", url: "https://cctv-ss08.thb.gov.tw/T68-7K+240?t=" },
    //{ name: "桃園=內壢", url: "https://cctvtraffic.tycg.gov.tw/camera067?t=" },
    //{ name: "山鼻=林口", url: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=14260&t=" },
    //{ name: "林口=長庚醫院", url: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=14140&t=" },
    //{ name: "長庚醫院=林口", url: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=14081&t=" },
    //{ name: "福隆=貢寮", url: "https://cctv-ss01.thb.gov.tw/T2-100K+420?t=" },
    //{ name: "石城=大里", url: "https://cctv-ss01.thb.gov.tw/T2-118K+300?t=" },
    //{ name: "龜山=大溪", url: "https://cctv-ss01.thb.gov.tw/T2-124K+000?t=" },
    //{ name: "宜蘭=二結", url: "https://cctv-ss02.thb.gov.tw/T9-085K+050?t=" },
    //{ name: "宜蘭=二結", url: "https://cctv-ss02.thb.gov.tw/T9-085K+900?t=" },
    //{ name: "蘇澳新=蘇澳", url: "https://cctv-ss02.thb.gov.tw/T9-102K+360?t=" },
    //{ name: "蘇澳=蘇澳新", url: "https://cctv-ss01.thb.gov.tw/T2E-009K+975?t=" },
    //{ name: "和平=和仁", url: "https://cctv-ss02.thb.gov.tw/T9D-058K+774?t=" },
    //{ name: "和仁=崇德", url: "https://cctv-ss06.thb.gov.tw/T9-154K+956(N)?t=" },
    //{ name: "景美=新城", url: "https://cctv-ss06.thb.gov.tw/T9-175K+975?t=" },
    //{ name: "鳳林=南平", url: "https://cctv-ss06.thb.gov.tw/T9-222K+070?t=" },
    //{ name: "瀧溪=金崙", url: "https://cctv-ss05.thb.gov.tw/T9-398K+650-2?t=" },
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
