angular.module("app")
.service("homeService", function() {
	this.photos = (collection) => {
		return photos;
	},
	this.selectedPhotos = (collection) => {
		let selectedObject = {};
		photos.map((cv, i, arr) => {
			for (var key in cv) {
				if (cv[key] === collection) {
					selectedObject =  cv;
				}
			}
		})
		return selectedObject
	}
})

let photos = [{
		mainurl: "Assets/imgs/IMG_20111016_184508 (2).jpg"
	, desc: "Below is a living room coffee table that was at the end of it's life, rather than throwing it away, I sanded down the top, painted it white, and created a collage of all the different things that help to make me, me."
	, collection: "table"
	, url: ["Assets/imgs/IMG_20111016_012610.jpg", "Assets/imgs/IMG_20111015_001303.jpg", "Assets/imgs/IMG_20111013_230020.jpg", "Assets/imgs/IMG_20111012_222744.jpg", "Assets/imgs/IMG_20111012_161743.jpg", "Assets/imgs/IMG_20111011_192322.jpg", "Assets/imgs/IMG_20111011_192251.jpg"]
}]
