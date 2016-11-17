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
	mainurl: "Assets/imgs/Drums12.jpg"
	, desc: "I found some drum shells on craigslist for next to nothing. I play drums in a rockabilly/country band, and there is a style of drums known as a cocktail kit, that is not uncommon in the style. I decided to have a go at making my own."
	, collection: "cocktailkit"
	, url: ["Assets/imgs/Drums12.jpg", "Assets/imgs/Drums11.jpg", "Assets/imgs/Drums10.jpg", "Assets/imgs/Drums9.jpg", "Assets/imgs/Drums8.jpg", "Assets/imgs/Drums7.jpg", "Assets/imgs/Drums6.jpg", "Assets/imgs/Drums5.jpg", "Assets/imgs/Drums4.jpg", "Assets/imgs/Drums3.jpg", "Assets/imgs/Drums2.jpg", "Assets/imgs/Drums1.jpg"]
}
, {
	mainurl: "Assets/imgs/BrewStand1.jpg"
	, desc: "Being a brewer, I'm always looking for ways to improve my process. I found myself constantly moving large volumes of very hot liquid in order to have access to a burner. Having multiple surfaces wih multiple burners was my answer."
	, collection: "brewstand"
	, url: ["Assets/imgs/BrewStand1.jpg", "Assets/imgs/BrewStand2.jpg", "Assets/imgs/BrewStand3.jpg"]
}
,	{
		mainurl: "Assets/imgs/ScratchBass1.jpg"
	, desc: "Unfortunately, no pictures of the build process, but this is a bass I built from scratch, fully to my own Specs. I call it the Blunder Bass"
	, collection: "scratchbass"
	, url: ["Assets/imgs/ScratchBass4.jpg", "Assets/imgs/ScratchBass3.jpg", "Assets/imgs/ScratchBass2.jpg"]
}
,	{
		mainurl: "Assets/imgs/Guitar5.jpg"
	, desc: "Purchased a guitar for my wife. Our band decided to paint our instruments matching colors, so she got a paint job to match my drums."
	, collection: "guitar"
	, url: ["Assets/imgs/Guitar5.jpg", "Assets/imgs/Guitar4.jpg", "Assets/imgs/Guitar3.jpg", "Assets/imgs/Guitar2.jpg", "Assets/imgs/Guitar1.jpg"]
}
,	{
		mainurl: "Assets/imgs/20160209_203314.jpg"
	, desc: "Sadly, I did not take more photos of the process here. This is the first major project I attempted on a 3d printer. It is a face-hugger from the movie 'Alien'. It is made from roughly 50 seperate parts, fused together and painted."
	, collection: "facehugger"
	, url: ["Assets/imgs/20160209_203314.jpg"]
}
, {
	mainurl: "Assets/imgs/FluxCapacitor14.jpg"
	, desc: "The Flux capacitor represents my first forray into both programming and 'making'. I had always wanted a Flux Capacitor, but found the price of replica's to be prohibitive. Inspired by Adam Savage (host of myth-busters and proponent of the maker community,) I decided to try to make my own."
	, collection: "fluxcapacitor"
	, url: ["Assets/imgs/FluxCapacitor14.jpg","Assets/imgs/FluxCapacitor13.jpg","Assets/imgs/FluxCapacitor12.jpg","Assets/imgs/FluxCapacitor11.jpg","Assets/imgs/FluxCapacitor10.jpg","Assets/imgs/FluxCapacitor9.jpg","Assets/imgs/FluxCapacitor8.jpg","Assets/imgs/FluxCapacitor7.jpg","Assets/imgs/FluxCapacitor6.jpg","Assets/imgs/FluxCapacitor5.jpg","Assets/imgs/FluxCapacitor4.jpg","Assets/imgs/FluxCapacitor3.jpg","Assets/imgs/FluxCapacitor2.jpg", "Assets/imgs/FluxCapacitor1.jpg"]
}
// , {
// 	mainurl: ""
// 	, desc: ""
// 	, collection: ""
// 	, url: [""]
// }
// ,	{
// 		mainurl: ""
// 	, desc: ""
// 	, collection: ""
// 	, url: [""]
// }
// , {
// 	mainurl: ""
// 	, desc: ""
// 	, collection: ""
// 	, url: [""]
// }
]
