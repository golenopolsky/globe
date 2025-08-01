const config = {
	urls: {
		globeTexture: '../assets/textures/earth_dark.jpg',
		pointTexture: '../assets/imgs/disc.png'
	},
	sizes: {
		globe: 200,
		globeDotSize: 1
	},
	scale: {
		points: 0.025,
		markers: 0.025,
		globeScale: 1
	},
	rotation: {
		globe: 0.001
	},
	colors: {
		globeDotColor: 'rgb(80,80,80)',
		globeMarkerColor: 'rgb(60, 143, 195)',
		globeMarkerGlow: 'rgb(60, 143, 195)',
		globeLines: 'rgb(60, 143, 195)',
		globeLinesDots: 'rgb(60, 143, 195)'
	},
	display: {
		points: true,
		map: true,
		lines: true,
		markers: true,
		markerLabel: true,
		markerPoint: true
	},
	dots: {
		total: 30
	}
}

const elements = {
	globe: null,
	atmosphere: null,
	globePoints: null,
	lineDots: [],
	markers: [],
	markerLabel: [],
	markerPoint: [],
	lines: []
}

const textures = {
	markerLabels: []
}

const groups = {
	map: null,
	main: null,
	globe: null,
	lines: null,
	points: null,
	markers: null,
	atmosphere: null,
	lineDots: null,
}

const countries = {
	interval: 20000,
	selected: null,
	index: 0
}

const animations = {
  rotateGlobe: true
}