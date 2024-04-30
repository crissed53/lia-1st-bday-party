import { defineStore } from "pinia"

export const useLocationStore = defineStore("locationStore", () => {
	const logoImagePaths = {
		naver: "https://i.namu.wiki/i/g1ObOjgHeGx6qsTX-DgwrwyHL8uHBhXxiPQTCu9w5M32o0po4v1ugu_ikoEIncrVO-kq3Q73lCs8MzRgH55G2A.webp",
		tmap: "https://i.namu.wiki/i/wAQY69bxQDvdruV0Tds4oqP3BJToPjlIC-PW4Gy-kFQrC4qw3yoY2clcDIVcyY0NrX4T39vFiq_5mtyvWTH2Pg.svg",
		kakao: "https://developers.kakao.com/tool/resource/static/img/logo/map/kakaomap_basic.png",
		google: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjhFX0%2FbtqMVCScnuQ%2FkohrBP5samKVrrUgH3hHQ1%2Fimg.jpg",
	};

	const locationUrls = {
		google: "https://goo.gl/maps/GXYdYdEBchGnv8tS6",
		kakao: "https://place.map.kakao.com/652695946",
		naver: "https://naver.me/GFpeDL97",
		tmap: "https://tmap.life/abd0f568",
	};

	const redirectToNewTab = (mapType) => {
		window.open(locationUrls[mapType], "_blank");
	};
	return { logoImagePaths, redirectToNewTab };
});