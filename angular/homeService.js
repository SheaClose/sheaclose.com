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

let photos = [
	{
		mainurl: "Assets/imgs/IMG_20111016_184508 (2).jpg"
	, desc: "Below is a living room coffee table that was at the end of it's life, rather than throwing it away, I sanded down the top, painted it white, and created a collage of all the different things that help to make me, me."
	, collection: "table"
	, url: ["Assets/imgs/IMG_20111016_012610.jpg", "Assets/imgs/IMG_20111015_001303.jpg", "Assets/imgs/IMG_20111013_230020.jpg", "Assets/imgs/IMG_20111012_222744.jpg", "Assets/imgs/IMG_20111012_161743.jpg", "Assets/imgs/IMG_20111011_192322.jpg", "Assets/imgs/IMG_20111011_192251.jpg"]
}
, {
	mainurl: "Assets/imgs/04022008(018).jpg"
	, desc: "Being a fan of Rockabilly, and a DIY Punk-Rocker, having a plain 'ol Upright bass just didn't seem fitting. I decided to jazz it up a bit..."
	, collection: "uprightbass"
	, url: ["Assets/imgs/04022008(014).jpg", "Assets/imgs/04022008(019).jpg", "Assets/imgs/04012008(003).jpg", "Assets/imgs/04012008(001).jpg", "Assets/imgs/04012008.jpg", "Assets/imgs/03312008(006).jpg", "Assets/imgs/03312008(004).jpg", "Assets/imgs/03312008(003).jpg", "Assets/imgs/03312008(001).jpg", "Assets/imgs/03282008(005).jpg", "Assets/imgs/03282008(002).jpg", "Assets/imgs/03282008(001).jpg", "Assets/imgs/03272008.jpg", "Assets/imgs/03262008(006).jpg", "Assets/imgs/03262008(005).jpg", "Assets/imgs/03192008.jpg"]
}
,	{
		mainurl: "Assets/imgs/Audrey1.jpg"
	, desc: "While walking through an antique store with my wife, we noticed a coffee can. Both of us recognized it immediately. We brought it home and got to work... "
	, collection: "audrey"
	, url: ["Assets/imgs/Audrey6.jpg", "Assets/imgs/Audrey5.jpg", "Assets/imgs/Audrey4.jpg", "Assets/imgs/Audrey3.jpg", "Assets/imgs/Audrey2.jpg", "Assets/imgs/Audrey7.jpg"]
}
, {
	mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
,	{
		mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
, {
	mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
,	{
		mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
, {
	mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
,	{
		mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
, {
	mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
,	{
		mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
, {
	mainurl: ""
	, desc: ""
	, collection: ""
	, url: [""]
}
,
]
