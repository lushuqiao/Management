var THREE = {
	REVISION: "79"
};
"function" == typeof define && define.amd ? define("three", THREE) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = THREE), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function(e) {
		return 0 > e ? -1 : e > 0 ? 1 : +e
	}), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
		get: function() {
			return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
		}
	}), void 0 === Object.assign && ! function() {
		Object.assign = function(e) {
			"use strict";
			if(void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
			for(var t = Object(e), i = 1; i < arguments.length; i++) {
				var r = arguments[i];
				if(void 0 !== r && null !== r)
					for(var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
			}
			return t
		}
	}(), Object.assign(THREE, {
		MOUSE: {
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		},
		CullFaceNone: 0,
		CullFaceBack: 1,
		CullFaceFront: 2,
		CullFaceFrontBack: 3,
		FrontFaceDirectionCW: 0,
		FrontFaceDirectionCCW: 1,
		BasicShadowMap: 0,
		PCFShadowMap: 1,
		PCFSoftShadowMap: 2,
		FrontSide: 0,
		BackSide: 1,
		DoubleSide: 2,
		FlatShading: 1,
		SmoothShading: 2,
		NoColors: 0,
		FaceColors: 1,
		VertexColors: 2,
		NoBlending: 0,
		NormalBlending: 1,
		AdditiveBlending: 2,
		SubtractiveBlending: 3,
		MultiplyBlending: 4,
		CustomBlending: 5,
		AddEquation: 100,
		SubtractEquation: 101,
		ReverseSubtractEquation: 102,
		MinEquation: 103,
		MaxEquation: 104,
		ZeroFactor: 200,
		OneFactor: 201,
		SrcColorFactor: 202,
		OneMinusSrcColorFactor: 203,
		SrcAlphaFactor: 204,
		OneMinusSrcAlphaFactor: 205,
		DstAlphaFactor: 206,
		OneMinusDstAlphaFactor: 207,
		DstColorFactor: 208,
		OneMinusDstColorFactor: 209,
		SrcAlphaSaturateFactor: 210,
		NeverDepth: 0,
		AlwaysDepth: 1,
		LessDepth: 2,
		LessEqualDepth: 3,
		EqualDepth: 4,
		GreaterEqualDepth: 5,
		GreaterDepth: 6,
		NotEqualDepth: 7,
		MultiplyOperation: 0,
		MixOperation: 1,
		AddOperation: 2,
		NoToneMapping: 0,
		LinearToneMapping: 1,
		ReinhardToneMapping: 2,
		Uncharted2ToneMapping: 3,
		CineonToneMapping: 4,
		UVMapping: 300,
		CubeReflectionMapping: 301,
		CubeRefractionMapping: 302,
		EquirectangularReflectionMapping: 303,
		EquirectangularRefractionMapping: 304,
		SphericalReflectionMapping: 305,
		CubeUVReflectionMapping: 306,
		CubeUVRefractionMapping: 307,
		RepeatWrapping: 1e3,
		ClampToEdgeWrapping: 1001,
		MirroredRepeatWrapping: 1002,
		NearestFilter: 1003,
		NearestMipMapNearestFilter: 1004,
		NearestMipMapLinearFilter: 1005,
		LinearFilter: 1006,
		LinearMipMapNearestFilter: 1007,
		LinearMipMapLinearFilter: 1008,
		UnsignedByteType: 1009,
		ByteType: 1010,
		ShortType: 1011,
		UnsignedShortType: 1012,
		IntType: 1013,
		UnsignedIntType: 1014,
		FloatType: 1015,
		HalfFloatType: 1025,
		UnsignedShort4444Type: 1016,
		UnsignedShort5551Type: 1017,
		UnsignedShort565Type: 1018,
		AlphaFormat: 1019,
		RGBFormat: 1020,
		RGBAFormat: 1021,
		LuminanceFormat: 1022,
		LuminanceAlphaFormat: 1023,
		RGBEFormat: THREE.RGBAFormat,
		DepthFormat: 1026,
		RGB_S3TC_DXT1_Format: 2001,
		RGBA_S3TC_DXT1_Format: 2002,
		RGBA_S3TC_DXT3_Format: 2003,
		RGBA_S3TC_DXT5_Format: 2004,
		RGB_PVRTC_4BPPV1_Format: 2100,
		RGB_PVRTC_2BPPV1_Format: 2101,
		RGBA_PVRTC_4BPPV1_Format: 2102,
		RGBA_PVRTC_2BPPV1_Format: 2103,
		RGB_ETC1_Format: 2151,
		LoopOnce: 2200,
		LoopRepeat: 2201,
		LoopPingPong: 2202,
		InterpolateDiscrete: 2300,
		InterpolateLinear: 2301,
		InterpolateSmooth: 2302,
		ZeroCurvatureEnding: 2400,
		ZeroSlopeEnding: 2401,
		WrapAroundEnding: 2402,
		TrianglesDrawMode: 0,
		TriangleStripDrawMode: 1,
		TriangleFanDrawMode: 2,
		LinearEncoding: 3e3,
		sRGBEncoding: 3001,
		GammaEncoding: 3007,
		RGBEEncoding: 3002,
		LogLuvEncoding: 3003,
		RGBM7Encoding: 3004,
		RGBM16Encoding: 3005,
		RGBDEncoding: 3006,
		BasicDepthPacking: 3200,
		RGBADepthPacking: 3201
	}), THREE.Color = function(e, t, i) {
		return void 0 === t && void 0 === i ? this.set(e) : this.setRGB(e, t, i)
	}, THREE.Color.prototype = {
		constructor: THREE.Color,
		r: 1,
		g: 1,
		b: 1,
		set: function(e) {
			return e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
		},
		setScalar: function(e) {
			this.r = e, this.g = e, this.b = e
		},
		setHex: function(e) {
			return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
		},
		setRGB: function(e, t, i) {
			return this.r = e, this.g = t, this.b = i, this
		},
		setHSL: function() {
			function e(e, t, i) {
				return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? e + 6 * (t - e) * i : .5 > i ? t : 2 / 3 > i ? e + 6 * (t - e) * (2 / 3 - i) : e
			}
			return function(t, i, r) {
				if(t = THREE.Math.euclideanModulo(t, 1), i = THREE.Math.clamp(i, 0, 1), r = THREE.Math.clamp(r, 0, 1), 0 === i) this.r = this.g = this.b = r;
				else {
					var n = .5 >= r ? r * (1 + i) : r + i - r * i,
						a = 2 * r - n;
					this.r = e(a, n, t + 1 / 3), this.g = e(a, n, t), this.b = e(a, n, t - 1 / 3)
				}
				return this
			}
		}(),
		setStyle: function(e) {
			function t(t) {
				void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
			}
			var i;
			if(i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
				var r, n = i[1],
					a = i[2];
				switch(n) {
					case "rgb":
					case "rgba":
						if(r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, t(r[5]), this;
						if(r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, t(r[5]), this;
						break;
					case "hsl":
					case "hsla":
						if(r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
							var o = parseFloat(r[1]) / 360,
								s = parseInt(r[2], 10) / 100,
								l = parseInt(r[3], 10) / 100;
							return t(r[5]), this.setHSL(o, s, l)
						}
				}
			} else if(i = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
				var h = i[1],
					c = h.length;
				if(3 === c) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
				if(6 === c) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
			}
			if(e && e.length > 0) {
				var h = THREE.ColorKeywords[e];
				void 0 !== h ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + e)
			}
			return this
		},
		clone: function() {
			return new this.constructor(this.r, this.g, this.b)
		},
		copy: function(e) {
			return this.r = e.r, this.g = e.g, this.b = e.b, this
		},
		copyGammaToLinear: function(e, t) {
			return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
		},
		copyLinearToGamma: function(e, t) {
			void 0 === t && (t = 2);
			var i = t > 0 ? 1 / t : 1;
			return this.r = Math.pow(e.r, i), this.g = Math.pow(e.g, i), this.b = Math.pow(e.b, i), this
		},
		convertGammaToLinear: function() {
			var e = this.r,
				t = this.g,
				i = this.b;
			return this.r = e * e, this.g = t * t, this.b = i * i, this
		},
		convertLinearToGamma: function() {
			return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
		},
		getHex: function() {
			return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
		},
		getHexString: function() {
			return("000000" + this.getHex().toString(16)).slice(-6)
		},
		getHSL: function(e) {
			var t, i, r = e || {
					h: 0,
					s: 0,
					l: 0
				},
				n = this.r,
				a = this.g,
				o = this.b,
				s = Math.max(n, a, o),
				l = Math.min(n, a, o),
				h = (l + s) / 2;
			if(l === s) t = 0, i = 0;
			else {
				var c = s - l;
				switch(i = .5 >= h ? c / (s + l) : c / (2 - s - l), s) {
					case n:
						t = (a - o) / c + (o > a ? 6 : 0);
						break;
					case a:
						t = (o - n) / c + 2;
						break;
					case o:
						t = (n - a) / c + 4
				}
				t /= 6
			}
			return r.h = t, r.s = i, r.l = h, r
		},
		getStyle: function() {
			return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
		},
		offsetHSL: function(e, t, i) {
			var r = this.getHSL();
			return r.h += e, r.s += t, r.l += i, this.setHSL(r.h, r.s, r.l), this
		},
		add: function(e) {
			return this.r += e.r, this.g += e.g, this.b += e.b, this
		},
		addColors: function(e, t) {
			return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
		},
		addScalar: function(e) {
			return this.r += e, this.g += e, this.b += e, this
		},
		sub: function(e) {
			return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
		},
		multiply: function(e) {
			return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
		},
		multiplyScalar: function(e) {
			return this.r *= e, this.g *= e, this.b *= e, this
		},
		lerp: function(e, t) {
			return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
		},
		equals: function(e) {
			return e.r === this.r && e.g === this.g && e.b === this.b
		},
		fromArray: function(e, t) {
			return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
		},
		toArray: function(e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
		}
	}, THREE.ColorKeywords = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	}, THREE.Quaternion = function(e, t, i, r) {
		this._x = e || 0, this._y = t || 0, this._z = i || 0, this._w = void 0 !== r ? r : 1
	}, THREE.Quaternion.prototype = {
		constructor: THREE.Quaternion,
		get x() {
			return this._x
		},
		set x(e) {
			this._x = e, this.onChangeCallback()
		},
		get y() {
			return this._y
		},
		set y(e) {
			this._y = e, this.onChangeCallback()
		},
		get z() {
			return this._z
		},
		set z(e) {
			this._z = e, this.onChangeCallback()
		},
		get w() {
			return this._w
		},
		set w(e) {
			this._w = e, this.onChangeCallback()
		},
		set: function(e, t, i, r) {
			return this._x = e, this._y = t, this._z = i, this._w = r, this.onChangeCallback(), this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._w)
		},
		copy: function(e) {
			return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
		},
		setFromEuler: function(e, t) {
			if(e instanceof THREE.Euler == !1) throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
			var i = Math.cos(e._x / 2),
				r = Math.cos(e._y / 2),
				n = Math.cos(e._z / 2),
				a = Math.sin(e._x / 2),
				o = Math.sin(e._y / 2),
				s = Math.sin(e._z / 2),
				l = e.order;
			return "XYZ" === l ? (this._x = a * r * n + i * o * s, this._y = i * o * n - a * r * s, this._z = i * r * s + a * o * n, this._w = i * r * n - a * o * s) : "YXZ" === l ? (this._x = a * r * n + i * o * s, this._y = i * o * n - a * r * s, this._z = i * r * s - a * o * n, this._w = i * r * n + a * o * s) : "ZXY" === l ? (this._x = a * r * n - i * o * s, this._y = i * o * n + a * r * s, this._z = i * r * s + a * o * n, this._w = i * r * n - a * o * s) : "ZYX" === l ? (this._x = a * r * n - i * o * s, this._y = i * o * n + a * r * s, this._z = i * r * s - a * o * n, this._w = i * r * n + a * o * s) : "YZX" === l ? (this._x = a * r * n + i * o * s, this._y = i * o * n + a * r * s, this._z = i * r * s - a * o * n, this._w = i * r * n - a * o * s) : "XZY" === l && (this._x = a * r * n - i * o * s, this._y = i * o * n - a * r * s, this._z = i * r * s + a * o * n, this._w = i * r * n + a * o * s), t !== !1 && this.onChangeCallback(), this
		},
		setFromAxisAngle: function(e, t) {
			var i = t / 2,
				r = Math.sin(i);
			return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this.onChangeCallback(), this
		},
		setFromRotationMatrix: function(e) {
			var t, i = e.elements,
				r = i[0],
				n = i[4],
				a = i[8],
				o = i[1],
				s = i[5],
				l = i[9],
				h = i[2],
				c = i[6],
				u = i[10],
				p = r + s + u;
			return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (c - l) * t, this._y = (a - h) * t, this._z = (o - n) * t) : r > s && r > u ? (t = 2 * Math.sqrt(1 + r - s - u), this._w = (c - l) / t, this._x = .25 * t, this._y = (n + o) / t, this._z = (a + h) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - r - u), this._w = (a - h) / t, this._x = (n + o) / t, this._y = .25 * t, this._z = (l + c) / t) : (t = 2 * Math.sqrt(1 + u - r - s), this._w = (o - n) / t, this._x = (a + h) / t, this._y = (l + c) / t, this._z = .25 * t), this.onChangeCallback(), this
		},
		setFromUnitVectors: function() {
			var e, t, i = 1e-6;
			return function(r, n) {
				return void 0 === e && (e = new THREE.Vector3), t = r.dot(n) + 1, i > t ? (t = 0, Math.abs(r.x) > Math.abs(r.z) ? e.set(-r.y, r.x, 0) : e.set(0, -r.z, r.y)) : e.crossVectors(r, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
			}
		}(),
		inverse: function() {
			return this.conjugate().normalize()
		},
		conjugate: function() {
			return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
		},
		dot: function(e) {
			return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
		},
		lengthSq: function() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
		},
		length: function() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
		},
		normalize: function() {
			var e = this.length();
			return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
		},
		multiply: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
		},
		premultiply: function(e) {
			return this.multiplyQuaternions(e, this)
		},
		multiplyQuaternions: function(e, t) {
			var i = e._x,
				r = e._y,
				n = e._z,
				a = e._w,
				o = t._x,
				s = t._y,
				l = t._z,
				h = t._w;
			return this._x = i * h + a * o + r * l - n * s, this._y = r * h + a * s + n * o - i * l, this._z = n * h + a * l + i * s - r * o, this._w = a * h - i * o - r * s - n * l, this.onChangeCallback(), this
		},
		slerp: function(e, t) {
			if(0 === t) return this;
			if(1 === t) return this.copy(e);
			var i = this._x,
				r = this._y,
				n = this._z,
				a = this._w,
				o = a * e._w + i * e._x + r * e._y + n * e._z;
			if(0 > o ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = i, this._y = r, this._z = n, this;
			var s = Math.sqrt(1 - o * o);
			if(Math.abs(s) < .001) return this._w = .5 * (a + this._w), this._x = .5 * (i + this._x), this._y = .5 * (r + this._y), this._z = .5 * (n + this._z), this;
			var l = Math.atan2(s, o),
				h = Math.sin((1 - t) * l) / s,
				c = Math.sin(t * l) / s;
			return this._w = a * h + this._w * c, this._x = i * h + this._x * c, this._y = r * h + this._y * c, this._z = n * h + this._z * c, this.onChangeCallback(), this
		},
		equals: function(e) {
			return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
		},
		fromArray: function(e, t) {
			return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
		},
		toArray: function(e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
		},
		onChange: function(e) {
			return this.onChangeCallback = e, this
		},
		onChangeCallback: function() {}
	}, Object.assign(THREE.Quaternion, {
		slerp: function(e, t, i, r) {
			return i.copy(e).slerp(t, r)
		},
		slerpFlat: function(e, t, i, r, n, a, o) {
			var s = i[r + 0],
				l = i[r + 1],
				h = i[r + 2],
				c = i[r + 3],
				u = n[a + 0],
				p = n[a + 1],
				d = n[a + 2],
				f = n[a + 3];
			if(c !== f || s !== u || l !== p || h !== d) {
				var m = 1 - o,
					E = s * u + l * p + h * d + c * f,
					g = E >= 0 ? 1 : -1,
					v = 1 - E * E;
				if(v > Number.EPSILON) {
					var T = Math.sqrt(v),
						y = Math.atan2(T, E * g);
					m = Math.sin(m * y) / T, o = Math.sin(o * y) / T
				}
				var _ = o * g;
				if(s = s * m + u * _, l = l * m + p * _, h = h * m + d * _, c = c * m + f * _, m === 1 - o) {
					var R = 1 / Math.sqrt(s * s + l * l + h * h + c * c);
					s *= R, l *= R, h *= R, c *= R
				}
			}
			e[t] = s, e[t + 1] = l, e[t + 2] = h, e[t + 3] = c
		}
	}), THREE.Vector2 = function(e, t) {
		this.x = e || 0, this.y = t || 0
	}, THREE.Vector2.prototype = {
		constructor: THREE.Vector2,
		get width() {
			return this.x
		},
		set width(e) {
			this.x = e
		},
		get height() {
			return this.y
		},
		set height(e) {
			this.y = e
		},
		set: function(e, t) {
			return this.x = e, this.y = t, this
		},
		setScalar: function(e) {
			return this.x = e, this.y = e, this
		},
		setX: function(e) {
			return this.x = e, this
		},
		setY: function(e) {
			return this.y = e, this
		},
		setComponent: function(e, t) {
			switch(e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		getComponent: function(e) {
			switch(e) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y)
		},
		copy: function(e) {
			return this.x = e.x, this.y = e.y, this
		},
		add: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
		},
		addScalar: function(e) {
			return this.x += e, this.y += e, this
		},
		addVectors: function(e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this
		},
		addScaledVector: function(e, t) {
			return this.x += e.x * t, this.y += e.y * t, this
		},
		sub: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
		},
		subScalar: function(e) {
			return this.x -= e, this.y -= e, this
		},
		subVectors: function(e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this
		},
		multiply: function(e) {
			return this.x *= e.x, this.y *= e.y, this
		},
		multiplyScalar: function(e) {
			return isFinite(e) ? (this.x *= e, this.y *= e) : (this.x = 0, this.y = 0), this
		},
		divide: function(e) {
			return this.x /= e.x, this.y /= e.y, this
		},
		divideScalar: function(e) {
			return this.multiplyScalar(1 / e)
		},
		min: function(e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
		},
		max: function(e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
		},
		clamp: function(e, t) {
			return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
		},
		clampScalar: function() {
			var e, t;
			return function(i, r) {
				return void 0 === e && (e = new THREE.Vector2, t = new THREE.Vector2), e.set(i, i), t.set(r, r), this.clamp(e, t)
			}
		}(),
		clampLength: function(e, t) {
			var i = this.length();
			return this.multiplyScalar(Math.max(e, Math.min(t, i)) / i)
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this
		},
		dot: function(e) {
			return this.x * e.x + this.y * e.y
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		lengthManhattan: function() {
			return Math.abs(this.x) + Math.abs(this.y)
		},
		normalize: function() {
			return this.divideScalar(this.length())
		},
		angle: function() {
			var e = Math.atan2(this.y, this.x);
			return 0 > e && (e += 2 * Math.PI), e
		},
		distanceTo: function(e) {
			return Math.sqrt(this.distanceToSquared(e))
		},
		distanceToSquared: function(e) {
			var t = this.x - e.x,
				i = this.y - e.y;
			return t * t + i * i
		},
		distanceToManhattan: function(e) {
			return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
		},
		setLength: function(e) {
			return this.multiplyScalar(e / this.length())
		},
		lerp: function(e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
		},
		lerpVectors: function(e, t, i) {
			return this.subVectors(t, e).multiplyScalar(i).add(e)
		},
		equals: function(e) {
			return e.x === this.x && e.y === this.y
		},
		fromArray: function(e, t) {
			return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
		},
		toArray: function(e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
		},
		fromAttribute: function(e, t, i) {
			return void 0 === i && (i = 0), t = t * e.itemSize + i, this.x = e.array[t], this.y = e.array[t + 1], this
		},
		rotateAround: function(e, t) {
			var i = Math.cos(t),
				r = Math.sin(t),
				n = this.x - e.x,
				a = this.y - e.y;
			return this.x = n * i - a * r + e.x, this.y = n * r + a * i + e.y, this
		}
	}, THREE.Vector3 = function(e, t, i) {
		this.x = e || 0, this.y = t || 0, this.z = i || 0
	}, THREE.Vector3.prototype = {
		constructor: THREE.Vector3,
		set: function(e, t, i) {
			return this.x = e, this.y = t, this.z = i, this
		},
		setScalar: function(e) {
			return this.x = e, this.y = e, this.z = e, this
		},
		setX: function(e) {
			return this.x = e, this
		},
		setY: function(e) {
			return this.y = e, this
		},
		setZ: function(e) {
			return this.z = e, this
		},
		setComponent: function(e, t) {
			switch(e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				case 2:
					this.z = t;
					break;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		getComponent: function(e) {
			switch(e) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z)
		},
		copy: function(e) {
			return this.x = e.x, this.y = e.y, this.z = e.z, this
		},
		add: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
		},
		addScalar: function(e) {
			return this.x += e, this.y += e, this.z += e, this
		},
		addVectors: function(e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
		},
		addScaledVector: function(e, t) {
			return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
		},
		sub: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
		},
		subScalar: function(e) {
			return this.x -= e, this.y -= e, this.z -= e, this
		},
		subVectors: function(e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
		},
		multiply: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
		},
		multiplyScalar: function(e) {
			return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e) : (this.x = 0, this.y = 0, this.z = 0), this
		},
		multiplyVectors: function(e, t) {
			return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
		},
		applyEuler: function() {
			var e;
			return function(t) {
				return t instanceof THREE.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new THREE.Quaternion), this.applyQuaternion(e.setFromEuler(t))
			}
		}(),
		applyAxisAngle: function() {
			var e;
			return function(t, i) {
				return void 0 === e && (e = new THREE.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, i))
			}
		}(),
		applyMatrix3: function(e) {
			var t = this.x,
				i = this.y,
				r = this.z,
				n = e.elements;
			return this.x = n[0] * t + n[3] * i + n[6] * r, this.y = n[1] * t + n[4] * i + n[7] * r, this.z = n[2] * t + n[5] * i + n[8] * r, this
		},
		applyMatrix4: function(e) {
			var t = this.x,
				i = this.y,
				r = this.z,
				n = e.elements;
			return this.x = n[0] * t + n[4] * i + n[8] * r + n[12], this.y = n[1] * t + n[5] * i + n[9] * r + n[13], this.z = n[2] * t + n[6] * i + n[10] * r + n[14], this
		},
		applyProjection: function(e) {
			var t = this.x,
				i = this.y,
				r = this.z,
				n = e.elements,
				a = 1 / (n[3] * t + n[7] * i + n[11] * r + n[15]);
			return this.x = (n[0] * t + n[4] * i + n[8] * r + n[12]) * a, this.y = (n[1] * t + n[5] * i + n[9] * r + n[13]) * a, this.z = (n[2] * t + n[6] * i + n[10] * r + n[14]) * a, this
		},
		applyQuaternion: function(e) {
			var t = this.x,
				i = this.y,
				r = this.z,
				n = e.x,
				a = e.y,
				o = e.z,
				s = e.w,
				l = s * t + a * r - o * i,
				h = s * i + o * t - n * r,
				c = s * r + n * i - a * t,
				u = -n * t - a * i - o * r;
			return this.x = l * s + u * -n + h * -o - c * -a, this.y = h * s + u * -a + c * -n - l * -o, this.z = c * s + u * -o + l * -a - h * -n, this
		},
		project: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
			}
		}(),
		unproject: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
			}
		}(),
		transformDirection: function(e) {
			var t = this.x,
				i = this.y,
				r = this.z,
				n = e.elements;
			return this.x = n[0] * t + n[4] * i + n[8] * r, this.y = n[1] * t + n[5] * i + n[9] * r, this.z = n[2] * t + n[6] * i + n[10] * r, this.normalize()
		},
		divide: function(e) {
			return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
		},
		divideScalar: function(e) {
			return this.multiplyScalar(1 / e)
		},
		min: function(e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
		},
		max: function(e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
		},
		clamp: function(e, t) {
			return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
		},
		clampScalar: function() {
			var e, t;
			return function(i, r) {
				return void 0 === e && (e = new THREE.Vector3, t = new THREE.Vector3), e.set(i, i, i), t.set(r, r, r), this.clamp(e, t)
			}
		}(),
		clampLength: function(e, t) {
			var i = this.length();
			return this.multiplyScalar(Math.max(e, Math.min(t, i)) / i)
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
		},
		dot: function(e) {
			return this.x * e.x + this.y * e.y + this.z * e.z
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		},
		lengthManhattan: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		},
		normalize: function() {
			return this.divideScalar(this.length())
		},
		setLength: function(e) {
			return this.multiplyScalar(e / this.length())
		},
		lerp: function(e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
		},
		lerpVectors: function(e, t, i) {
			return this.subVectors(t, e).multiplyScalar(i).add(e)
		},
		cross: function(e, t) {
			if(void 0 !== t) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
			var i = this.x,
				r = this.y,
				n = this.z;
			return this.x = r * e.z - n * e.y, this.y = n * e.x - i * e.z, this.z = i * e.y - r * e.x, this
		},
		crossVectors: function(e, t) {
			var i = e.x,
				r = e.y,
				n = e.z,
				a = t.x,
				o = t.y,
				s = t.z;
			return this.x = r * s - n * o, this.y = n * a - i * s, this.z = i * o - r * a, this
		},
		projectOnVector: function(e) {
			var t = e.dot(this) / e.lengthSq();
			return this.copy(e).multiplyScalar(t)
		},
		projectOnPlane: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
			}
		}(),
		reflect: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
			}
		}(),
		angleTo: function(e) {
			var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
			return Math.acos(THREE.Math.clamp(t, -1, 1))
		},
		distanceTo: function(e) {
			return Math.sqrt(this.distanceToSquared(e))
		},
		distanceToSquared: function(e) {
			var t = this.x - e.x,
				i = this.y - e.y,
				r = this.z - e.z;
			return t * t + i * i + r * r
		},
		distanceToManhattan: function(e) {
			return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
		},
		setFromSpherical: function(e) {
			var t = Math.sin(e.phi) * e.radius;
			return this.x = t * Math.sin(e.theta), this.y = Math.cos(e.phi) * e.radius, this.z = t * Math.cos(e.theta), this
		},
		setFromMatrixPosition: function(e) {
			return this.setFromMatrixColumn(e, 3)
		},
		setFromMatrixScale: function(e) {
			var t = this.setFromMatrixColumn(e, 0).length(),
				i = this.setFromMatrixColumn(e, 1).length(),
				r = this.setFromMatrixColumn(e, 2).length();
			return this.x = t, this.y = i, this.z = r, this
		},
		setFromMatrixColumn: function(e, t) {
			if("number" == typeof e) {
				console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
				var i = e;
				e = t, t = i
			}
			return this.fromArray(e.elements, 4 * t)
		},
		equals: function(e) {
			return e.x === this.x && e.y === this.y && e.z === this.z
		},
		fromArray: function(e, t) {
			return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
		},
		toArray: function(e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
		},
		fromAttribute: function(e, t, i) {
			return void 0 === i && (i = 0), t = t * e.itemSize + i, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
		}
	}, THREE.Vector4 = function(e, t, i, r) {
		this.x = e || 0, this.y = t || 0, this.z = i || 0, this.w = void 0 !== r ? r : 1
	}, THREE.Vector4.prototype = {
		constructor: THREE.Vector4,
		set: function(e, t, i, r) {
			return this.x = e, this.y = t, this.z = i, this.w = r, this
		},
		setScalar: function(e) {
			return this.x = e, this.y = e, this.z = e, this.w = e, this
		},
		setX: function(e) {
			return this.x = e, this
		},
		setY: function(e) {
			return this.y = e, this
		},
		setZ: function(e) {
			return this.z = e, this
		},
		setW: function(e) {
			return this.w = e, this
		},
		setComponent: function(e, t) {
			switch(e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				case 2:
					this.z = t;
					break;
				case 3:
					this.w = t;
					break;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		getComponent: function(e) {
			switch(e) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				case 3:
					return this.w;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z, this.w)
		},
		copy: function(e) {
			return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
		},
		add: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
		},
		addScalar: function(e) {
			return this.x += e, this.y += e, this.z += e, this.w += e, this
		},
		addVectors: function(e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
		},
		addScaledVector: function(e, t) {
			return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
		},
		sub: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
		},
		subScalar: function(e) {
			return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
		},
		subVectors: function(e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
		},
		multiplyScalar: function(e) {
			return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e, this.w *= e) : (this.x = 0, this.y = 0, this.z = 0, this.w = 0), this
		},
		applyMatrix4: function(e) {
			var t = this.x,
				i = this.y,
				r = this.z,
				n = this.w,
				a = e.elements;
			return this.x = a[0] * t + a[4] * i + a[8] * r + a[12] * n, this.y = a[1] * t + a[5] * i + a[9] * r + a[13] * n, this.z = a[2] * t + a[6] * i + a[10] * r + a[14] * n, this.w = a[3] * t + a[7] * i + a[11] * r + a[15] * n, this
		},
		divideScalar: function(e) {
			return this.multiplyScalar(1 / e)
		},
		setAxisAngleFromQuaternion: function(e) {
			this.w = 2 * Math.acos(e.w);
			var t = Math.sqrt(1 - e.w * e.w);
			return 1e-4 > t ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
		},
		setAxisAngleFromRotationMatrix: function(e) {
			var t, i, r, n, a = .01,
				o = .1,
				s = e.elements,
				l = s[0],
				h = s[4],
				c = s[8],
				u = s[1],
				p = s[5],
				d = s[9],
				f = s[2],
				m = s[6],
				E = s[10];
			if(Math.abs(h - u) < a && Math.abs(c - f) < a && Math.abs(d - m) < a) {
				if(Math.abs(h + u) < o && Math.abs(c + f) < o && Math.abs(d + m) < o && Math.abs(l + p + E - 3) < o) return this.set(1, 0, 0, 0), this;
				t = Math.PI;
				var g = (l + 1) / 2,
					v = (p + 1) / 2,
					T = (E + 1) / 2,
					y = (h + u) / 4,
					_ = (c + f) / 4,
					R = (d + m) / 4;
				return g > v && g > T ? a > g ? (i = 0, r = .707106781, n = .707106781) : (i = Math.sqrt(g), r = y / i, n = _ / i) : v > T ? a > v ? (i = .707106781, r = 0, n = .707106781) : (r = Math.sqrt(v), i = y / r, n = R / r) : a > T ? (i = .707106781, r = .707106781, n = 0) : (n = Math.sqrt(T), i = _ / n, r = R / n), this.set(i, r, n, t), this
			}
			var x = Math.sqrt((m - d) * (m - d) + (c - f) * (c - f) + (u - h) * (u - h));
			return Math.abs(x) < .001 && (x = 1), this.x = (m - d) / x, this.y = (c - f) / x, this.z = (u - h) / x, this.w = Math.acos((l + p + E - 1) / 2), this
		},
		min: function(e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
		},
		max: function(e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
		},
		clamp: function(e, t) {
			return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
		},
		clampScalar: function() {
			var e, t;
			return function(i, r) {
				return void 0 === e && (e = new THREE.Vector4, t = new THREE.Vector4), e.set(i, i, i, i), t.set(r, r, r, r), this.clamp(e, t)
			}
		}(),
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
		},
		dot: function(e) {
			return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		},
		lengthManhattan: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
		},
		normalize: function() {
			return this.divideScalar(this.length())
		},
		setLength: function(e) {
			return this.multiplyScalar(e / this.length())
		},
		lerp: function(e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
		},
		lerpVectors: function(e, t, i) {
			return this.subVectors(t, e).multiplyScalar(i).add(e)
		},
		equals: function(e) {
			return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
		},
		fromArray: function(e, t) {
			return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
		},
		toArray: function(e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
		},
		fromAttribute: function(e, t, i) {
			return void 0 === i && (i = 0), t = t * e.itemSize + i, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this
		}
	}, THREE.Euler = function(e, t, i, r) {
		this._x = e || 0, this._y = t || 0, this._z = i || 0, this._order = r || THREE.Euler.DefaultOrder
	}, THREE.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], THREE.Euler.DefaultOrder = "XYZ", THREE.Euler.prototype = {
		constructor: THREE.Euler,
		get x() {
			return this._x
		},
		set x(e) {
			this._x = e, this.onChangeCallback()
		},
		get y() {
			return this._y
		},
		set y(e) {
			this._y = e, this.onChangeCallback()
		},
		get z() {
			return this._z
		},
		set z(e) {
			this._z = e, this.onChangeCallback()
		},
		get order() {
			return this._order
		},
		set order(e) {
			this._order = e, this.onChangeCallback()
		},
		set: function(e, t, i, r) {
			return this._x = e, this._y = t, this._z = i, this._order = r || this._order, this.onChangeCallback(), this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._order)
		},
		copy: function(e) {
			return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
		},
		setFromRotationMatrix: function(e, t, i) {
			var r = THREE.Math.clamp,
				n = e.elements,
				a = n[0],
				o = n[4],
				s = n[8],
				l = n[1],
				h = n[5],
				c = n[9],
				u = n[2],
				p = n[6],
				d = n[10];
			return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(r(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-r(c, -1, 1)), Math.abs(c) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(l, h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(r(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(l, a))) : "ZYX" === t ? (this._y = Math.asin(-r(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === t ? (this._z = Math.asin(r(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(-c, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === t ? (this._z = Math.asin(-r(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(p, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-c, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, i !== !1 && this.onChangeCallback(), this
		},
		setFromQuaternion: function() {
			var e;
			return function(t, i, r) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, i, r)
			}
		}(),
		setFromVector3: function(e, t) {
			return this.set(e.x, e.y, e.z, t || this._order)
		},
		reorder: function() {
			var e = new THREE.Quaternion;
			return function(t) {
				return e.setFromEuler(this), this.setFromQuaternion(e, t)
			}
		}(),
		equals: function(e) {
			return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
		},
		fromArray: function(e) {
			return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
		},
		toArray: function(e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
		},
		toVector3: function(e) {
			return e ? e.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z)
		},
		onChange: function(e) {
			return this.onChangeCallback = e, this
		},
		onChangeCallback: function() {}
	}, THREE.Line3 = function(e, t) {
		this.start = void 0 !== e ? e : new THREE.Vector3, this.end = void 0 !== t ? t : new THREE.Vector3
	}, THREE.Line3.prototype = {
		constructor: THREE.Line3,
		set: function(e, t) {
			return this.start.copy(e), this.end.copy(t), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.start.copy(e.start), this.end.copy(e.end), this
		},
		center: function(e) {
			var t = e || new THREE.Vector3;
			return t.addVectors(this.start, this.end).multiplyScalar(.5)
		},
		delta: function(e) {
			var t = e || new THREE.Vector3;
			return t.subVectors(this.end, this.start)
		},
		distanceSq: function() {
			return this.start.distanceToSquared(this.end)
		},
		distance: function() {
			return this.start.distanceTo(this.end)
		},
		at: function(e, t) {
			var i = t || new THREE.Vector3;
			return this.delta(i).multiplyScalar(e).add(this.start)
		},
		closestPointToPointParameter: function() {
			var e = new THREE.Vector3,
				t = new THREE.Vector3;
			return function(i, r) {
				e.subVectors(i, this.start), t.subVectors(this.end, this.start);
				var n = t.dot(t),
					a = t.dot(e),
					o = a / n;
				return r && (o = THREE.Math.clamp(o, 0, 1)), o
			}
		}(),
		closestPointToPoint: function(e, t, i) {
			var r = this.closestPointToPointParameter(e, t),
				n = i || new THREE.Vector3;
			return this.delta(n).multiplyScalar(r).add(this.start)
		},
		applyMatrix4: function(e) {
			return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
		},
		equals: function(e) {
			return e.start.equals(this.start) && e.end.equals(this.end)
		}
	}, THREE.Box2 = function(e, t) {
		this.min = void 0 !== e ? e : new THREE.Vector2(+1 / 0, +1 / 0), this.max = void 0 !== t ? t : new THREE.Vector2(-1 / 0, -1 / 0)
	}, THREE.Box2.prototype = {
		constructor: THREE.Box2,
		set: function(e, t) {
			return this.min.copy(e), this.max.copy(t), this
		},
		setFromPoints: function(e) {
			this.makeEmpty();
			for(var t = 0, i = e.length; i > t; t++) this.expandByPoint(e[t]);
			return this
		},
		setFromCenterAndSize: function() {
			var e = new THREE.Vector2;
			return function(t, i) {
				var r = e.copy(i).multiplyScalar(.5);
				return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
			}
		}(),
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.min.copy(e.min), this.max.copy(e.max), this
		},
		makeEmpty: function() {
			return this.min.x = this.min.y = +1 / 0, this.max.x = this.max.y = -1 / 0, this
		},
		isEmpty: function() {
			return this.max.x < this.min.x || this.max.y < this.min.y
		},
		center: function(e) {
			var t = e || new THREE.Vector2;
			return t.addVectors(this.min, this.max).multiplyScalar(.5)
		},
		size: function(e) {
			var t = e || new THREE.Vector2;
			return t.subVectors(this.max, this.min)
		},
		expandByPoint: function(e) {
			return this.min.min(e), this.max.max(e), this
		},
		expandByVector: function(e) {
			return this.min.sub(e), this.max.add(e), this
		},
		expandByScalar: function(e) {
			return this.min.addScalar(-e), this.max.addScalar(e), this
		},
		containsPoint: function(e) {
			return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
		},
		containsBox: function(e) {
			return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
		},
		getParameter: function(e, t) {
			var i = t || new THREE.Vector2;
			return i.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
		},
		intersectsBox: function(e) {
			return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
		},
		clampPoint: function(e, t) {
			var i = t || new THREE.Vector2;
			return i.copy(e).clamp(this.min, this.max)
		},
		distanceToPoint: function() {
			var e = new THREE.Vector2;
			return function(t) {
				var i = e.copy(t).clamp(this.min, this.max);
				return i.sub(t).length()
			}
		}(),
		intersect: function(e) {
			return this.min.max(e.min), this.max.min(e.max), this
		},
		union: function(e) {
			return this.min.min(e.min), this.max.max(e.max), this
		},
		translate: function(e) {
			return this.min.add(e), this.max.add(e), this
		},
		equals: function(e) {
			return e.min.equals(this.min) && e.max.equals(this.max)
		}
	}, THREE.Box3 = function(e, t) {
		this.min = void 0 !== e ? e : new THREE.Vector3(+1 / 0, +1 / 0, +1 / 0), this.max = void 0 !== t ? t : new THREE.Vector3(-1 / 0, -1 / 0, -1 / 0)
	}, THREE.Box3.prototype = {
		constructor: THREE.Box3,
		set: function(e, t) {
			return this.min.copy(e), this.max.copy(t), this
		},
		setFromArray: function(e) {
			for(var t = +1 / 0, i = +1 / 0, r = +1 / 0, n = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.length; l > s; s += 3) {
				var h = e[s],
					c = e[s + 1],
					u = e[s + 2];
				t > h && (t = h), i > c && (i = c), r > u && (r = u), h > n && (n = h), c > a && (a = c), u > o && (o = u)
			}
			this.min.set(t, i, r), this.max.set(n, a, o)
		},
		setFromPoints: function(e) {
			this.makeEmpty();
			for(var t = 0, i = e.length; i > t; t++) this.expandByPoint(e[t]);
			return this
		},
		setFromCenterAndSize: function() {
			var e = new THREE.Vector3;
			return function(t, i) {
				var r = e.copy(i).multiplyScalar(.5);
				return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
			}
		}(),
		setFromObject: function() {
			var e = new THREE.Vector3;
			return function(t) {
				var i = this;
				return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function(t) {
					var r = t.geometry;
					if(void 0 !== r)
						if(r instanceof THREE.Geometry)
							for(var n = r.vertices, a = 0, o = n.length; o > a; a++) e.copy(n[a]), e.applyMatrix4(t.matrixWorld), i.expandByPoint(e);
						else if(r instanceof THREE.BufferGeometry) {
						var s = r.attributes.position;
						if(void 0 !== s) {
							var l, h, c;
							s instanceof THREE.InterleavedBufferAttribute ? (l = s.data.array, h = s.offset, c = s.data.stride) : (l = s.array, h = 0, c = 3);
							for(var a = h, o = l.length; o > a; a += c) e.fromArray(l, a), e.applyMatrix4(t.matrixWorld), i.expandByPoint(e)
						}
					}
				}), this
			}
		}(),
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.min.copy(e.min), this.max.copy(e.max), this
		},
		makeEmpty: function() {
			return this.min.x = this.min.y = this.min.z = +1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
		},
		isEmpty: function() {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
		},
		center: function(e) {
			var t = e || new THREE.Vector3;
			return t.addVectors(this.min, this.max).multiplyScalar(.5)
		},
		size: function(e) {
			var t = e || new THREE.Vector3;
			return t.subVectors(this.max, this.min)
		},
		expandByPoint: function(e) {
			return this.min.min(e), this.max.max(e), this
		},
		expandByVector: function(e) {
			return this.min.sub(e), this.max.add(e), this
		},
		expandByScalar: function(e) {
			return this.min.addScalar(-e), this.max.addScalar(e), this
		},
		containsPoint: function(e) {
			return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
		},
		containsBox: function(e) {
			return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
		},
		getParameter: function(e, t) {
			var i = t || new THREE.Vector3;
			return i.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
		},
		intersectsBox: function(e) {
			return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
		},
		intersectsSphere: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Vector3), this.clampPoint(t.center, e), e.distanceToSquared(t.center) <= t.radius * t.radius
			}
		}(),
		intersectsPlane: function(e) {
			var t, i;
			return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= e.constant && i >= e.constant
		},
		clampPoint: function(e, t) {
			var i = t || new THREE.Vector3;
			return i.copy(e).clamp(this.min, this.max)
		},
		distanceToPoint: function() {
			var e = new THREE.Vector3;
			return function(t) {
				var i = e.copy(t).clamp(this.min, this.max);
				return i.sub(t).length()
			}
		}(),
		getBoundingSphere: function() {
			var e = new THREE.Vector3;
			return function(t) {
				var i = t || new THREE.Sphere;
				return i.center = this.center(), i.radius = .5 * this.size(e).length(), i
			}
		}(),
		intersect: function(e) {
			return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
		},
		union: function(e) {
			return this.min.min(e.min), this.max.max(e.max), this
		},
		applyMatrix4: function() {
			var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
			return function(t) {
				return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(e), this)
			}
		}(),
		translate: function(e) {
			return this.min.add(e), this.max.add(e), this
		},
		equals: function(e) {
			return e.min.equals(this.min) && e.max.equals(this.max)
		}
	}, THREE.Matrix3 = function() {
		this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
	}, THREE.Matrix3.prototype = {
		constructor: THREE.Matrix3,
		set: function(e, t, i, r, n, a, o, s, l) {
			var h = this.elements;
			return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = n, h[5] = s, h[6] = i, h[7] = a, h[8] = l, this
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
		},
		clone: function() {
			return(new this.constructor).fromArray(this.elements)
		},
		copy: function(e) {
			var t = e.elements;
			return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
		},
		setFromMatrix4: function(e) {
			var t = e.elements;
			return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
		},
		applyToVector3Array: function() {
			var e;
			return function(t, i, r) {
				void 0 === e && (e = new THREE.Vector3), void 0 === i && (i = 0), void 0 === r && (r = t.length);
				for(var n = 0, a = i; r > n; n += 3, a += 3) e.fromArray(t, a), e.applyMatrix3(this), e.toArray(t, a);
				return t
			}
		}(),
		applyToBuffer: function() {
			var e;
			return function(t, i, r) {
				void 0 === e && (e = new THREE.Vector3), void 0 === i && (i = 0), void 0 === r && (r = t.length / t.itemSize);
				for(var n = 0, a = i; r > n; n++, a++) e.x = t.getX(a), e.y = t.getY(a), e.z = t.getZ(a), e.applyMatrix3(this), t.setXYZ(e.x, e.y, e.z);
				return t
			}
		}(),
		multiplyScalar: function(e) {
			var t = this.elements;
			return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
		},
		determinant: function() {
			var e = this.elements,
				t = e[0],
				i = e[1],
				r = e[2],
				n = e[3],
				a = e[4],
				o = e[5],
				s = e[6],
				l = e[7],
				h = e[8];
			return t * a * h - t * o * l - i * n * h + i * o * s + r * n * l - r * a * s
		},
		getInverse: function(e, t) {
			e instanceof THREE.Matrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
			var i = e.elements,
				r = this.elements,
				n = i[0],
				a = i[1],
				o = i[2],
				s = i[3],
				l = i[4],
				h = i[5],
				c = i[6],
				u = i[7],
				p = i[8],
				d = p * l - h * u,
				f = h * c - p * s,
				m = u * s - l * c,
				E = n * d + a * f + o * m;
			if(0 === E) {
				var g = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
				if(t) throw new Error(g);
				return console.warn(g), this.identity()
			}
			var v = 1 / E;
			return r[0] = d * v, r[1] = (o * u - p * a) * v, r[2] = (h * a - o * l) * v, r[3] = f * v, r[4] = (p * n - o * c) * v, r[5] = (o * s - h * n) * v, r[6] = m * v, r[7] = (a * c - u * n) * v, r[8] = (l * n - a * s) * v, this
		},
		transpose: function() {
			var e, t = this.elements;
			return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
		},
		flattenToArrayOffset: function(e, t) {
			return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."), this.toArray(e, t)
		},
		getNormalMatrix: function(e) {
			return this.setFromMatrix4(e).getInverse(this).transpose()
		},
		transposeIntoArray: function(e) {
			var t = this.elements;
			return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
		},
		fromArray: function(e) {
			return this.elements.set(e), this
		},
		toArray: function(e, t) {
			void 0 === e && (e = []), void 0 === t && (t = 0);
			var i = this.elements;
			return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e
		}
	}, THREE.Matrix4 = function() {
		this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
	}, THREE.Matrix4.prototype = {
		constructor: THREE.Matrix4,
		set: function(e, t, i, r, n, a, o, s, l, h, c, u, p, d, f, m) {
			var E = this.elements;
			return E[0] = e, E[4] = t, E[8] = i, E[12] = r, E[1] = n, E[5] = a, E[9] = o, E[13] = s, E[2] = l, E[6] = h, E[10] = c, E[14] = u, E[3] = p, E[7] = d, E[11] = f, E[15] = m, this
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		clone: function() {
			return(new THREE.Matrix4).fromArray(this.elements)
		},
		copy: function(e) {
			return this.elements.set(e.elements), this
		},
		copyPosition: function(e) {
			var t = this.elements,
				i = e.elements;
			return t[12] = i[12], t[13] = i[13], t[14] = i[14], this
		},
		extractBasis: function(e, t, i) {
			return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
		},
		makeBasis: function(e, t, i) {
			return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this
		},
		extractRotation: function() {
			var e;
			return function(t) {
				void 0 === e && (e = new THREE.Vector3);
				var i = this.elements,
					r = t.elements,
					n = 1 / e.setFromMatrixColumn(t, 0).length(),
					a = 1 / e.setFromMatrixColumn(t, 1).length(),
					o = 1 / e.setFromMatrixColumn(t, 2).length();
				return i[0] = r[0] * n, i[1] = r[1] * n, i[2] = r[2] * n, i[4] = r[4] * a, i[5] = r[5] * a, i[6] = r[6] * a, i[8] = r[8] * o, i[9] = r[9] * o, i[10] = r[10] * o, this
			}
		}(),
		makeRotationFromEuler: function(e) {
			e instanceof THREE.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
			var t = this.elements,
				i = e.x,
				r = e.y,
				n = e.z,
				a = Math.cos(i),
				o = Math.sin(i),
				s = Math.cos(r),
				l = Math.sin(r),
				h = Math.cos(n),
				c = Math.sin(n);
			if("XYZ" === e.order) {
				var u = a * h,
					p = a * c,
					d = o * h,
					f = o * c;
				t[0] = s * h, t[4] = -s * c, t[8] = l, t[1] = p + d * l, t[5] = u - f * l, t[9] = -o * s, t[2] = f - u * l, t[6] = d + p * l, t[10] = a * s
			} else if("YXZ" === e.order) {
				var m = s * h,
					E = s * c,
					g = l * h,
					v = l * c;
				t[0] = m + v * o, t[4] = g * o - E, t[8] = a * l, t[1] = a * c, t[5] = a * h, t[9] = -o, t[2] = E * o - g, t[6] = v + m * o, t[10] = a * s
			} else if("ZXY" === e.order) {
				var m = s * h,
					E = s * c,
					g = l * h,
					v = l * c;
				t[0] = m - v * o, t[4] = -a * c, t[8] = g + E * o, t[1] = E + g * o, t[5] = a * h, t[9] = v - m * o, t[2] = -a * l, t[6] = o, t[10] = a * s
			} else if("ZYX" === e.order) {
				var u = a * h,
					p = a * c,
					d = o * h,
					f = o * c;
				t[0] = s * h, t[4] = d * l - p, t[8] = u * l + f, t[1] = s * c, t[5] = f * l + u, t[9] = p * l - d, t[2] = -l, t[6] = o * s, t[10] = a * s
			} else if("YZX" === e.order) {
				var T = a * s,
					y = a * l,
					_ = o * s,
					R = o * l;
				t[0] = s * h, t[4] = R - T * c, t[8] = _ * c + y, t[1] = c, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = y * c + _, t[10] = T - R * c
			} else if("XZY" === e.order) {
				var T = a * s,
					y = a * l,
					_ = o * s,
					R = o * l;
				t[0] = s * h, t[4] = -c, t[8] = l * h, t[1] = T * c + R, t[5] = a * h, t[9] = y * c - _, t[2] = _ * c - y, t[6] = o * h, t[10] = R * c + T
			}
			return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
		},
		makeRotationFromQuaternion: function(e) {
			var t = this.elements,
				i = e.x,
				r = e.y,
				n = e.z,
				a = e.w,
				o = i + i,
				s = r + r,
				l = n + n,
				h = i * o,
				c = i * s,
				u = i * l,
				p = r * s,
				d = r * l,
				f = n * l,
				m = a * o,
				E = a * s,
				g = a * l;
			return t[0] = 1 - (p + f), t[4] = c - g, t[8] = u + E, t[1] = c + g, t[5] = 1 - (h + f), t[9] = d - m, t[2] = u - E, t[6] = d + m, t[10] = 1 - (h + p), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
		},
		lookAt: function() {
			var e, t, i;
			return function(r, n, a) {
				void 0 === e && (e = new THREE.Vector3, t = new THREE.Vector3, i = new THREE.Vector3);
				var o = this.elements;
				return i.subVectors(r, n).normalize(), 0 === i.lengthSq() && (i.z = 1), e.crossVectors(a, i).normalize(), 0 === e.lengthSq() && (i.z += 1e-4, e.crossVectors(a, i).normalize()), t.crossVectors(i, e), o[0] = e.x, o[4] = t.x, o[8] = i.x, o[1] = e.y, o[5] = t.y, o[9] = i.y, o[2] = e.z, o[6] = t.z, o[10] = i.z, this
			}
		}(),
		multiply: function(e, t) {
			return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
		},
		premultiply: function(e) {
			return this.multiplyMatrices(e, this)
		},
		multiplyMatrices: function(e, t) {
			var i = e.elements,
				r = t.elements,
				n = this.elements,
				a = i[0],
				o = i[4],
				s = i[8],
				l = i[12],
				h = i[1],
				c = i[5],
				u = i[9],
				p = i[13],
				d = i[2],
				f = i[6],
				m = i[10],
				E = i[14],
				g = i[3],
				v = i[7],
				T = i[11],
				y = i[15],
				_ = r[0],
				R = r[4],
				x = r[8],
				b = r[12],
				w = r[1],
				H = r[5],
				M = r[9],
				S = r[13],
				A = r[2],
				C = r[6],
				L = r[10],
				P = r[14],
				D = r[3],
				O = r[7],
				I = r[11],
				B = r[15];
			return n[0] = a * _ + o * w + s * A + l * D, n[4] = a * R + o * H + s * C + l * O, n[8] = a * x + o * M + s * L + l * I, n[12] = a * b + o * S + s * P + l * B, n[1] = h * _ + c * w + u * A + p * D, n[5] = h * R + c * H + u * C + p * O, n[9] = h * x + c * M + u * L + p * I, n[13] = h * b + c * S + u * P + p * B, n[2] = d * _ + f * w + m * A + E * D, n[6] = d * R + f * H + m * C + E * O, n[10] = d * x + f * M + m * L + E * I, n[14] = d * b + f * S + m * P + E * B, n[3] = g * _ + v * w + T * A + y * D, n[7] = g * R + v * H + T * C + y * O, n[11] = g * x + v * M + T * L + y * I, n[15] = g * b + v * S + T * P + y * B, this
		},
		multiplyToArray: function(e, t, i) {
			var r = this.elements;
			return this.multiplyMatrices(e, t), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], i[9] = r[9], i[10] = r[10], i[11] = r[11], i[12] = r[12], i[13] = r[13], i[14] = r[14], i[15] = r[15], this
		},
		multiplyScalar: function(e) {
			var t = this.elements;
			return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
		},
		applyToVector3Array: function() {
			var e;
			return function(t, i, r) {
				void 0 === e && (e = new THREE.Vector3), void 0 === i && (i = 0), void 0 === r && (r = t.length);
				for(var n = 0, a = i; r > n; n += 3, a += 3) e.fromArray(t, a), e.applyMatrix4(this), e.toArray(t, a);
				return t
			}
		}(),
		applyToBuffer: function() {
			var e;
			return function(t, i, r) {
				void 0 === e && (e = new THREE.Vector3), void 0 === i && (i = 0), void 0 === r && (r = t.length / t.itemSize);
				for(var n = 0, a = i; r > n; n++, a++) e.x = t.getX(a), e.y = t.getY(a), e.z = t.getZ(a), e.applyMatrix4(this), t.setXYZ(e.x, e.y, e.z);
				return t
			}
		}(),
		determinant: function() {
			var e = this.elements,
				t = e[0],
				i = e[4],
				r = e[8],
				n = e[12],
				a = e[1],
				o = e[5],
				s = e[9],
				l = e[13],
				h = e[2],
				c = e[6],
				u = e[10],
				p = e[14],
				d = e[3],
				f = e[7],
				m = e[11],
				E = e[15];
			return d * (+n * s * c - r * l * c - n * o * u + i * l * u + r * o * p - i * s * p) + f * (+t * s * p - t * l * u + n * a * u - r * a * p + r * l * h - n * s * h) + m * (+t * l * c - t * o * p - n * a * c + i * a * p + n * o * h - i * l * h) + E * (-r * o * h - t * s * c + t * o * u + r * a * c - i * a * u + i * s * h)
		},
		transpose: function() {
			var e, t = this.elements;
			return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
		},
		flattenToArrayOffset: function(e, t) {
			return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."), this.toArray(e, t)
		},
		getPosition: function() {
			var e;
			return function() {
				return void 0 === e && (e = new THREE.Vector3), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), e.setFromMatrixColumn(this, 3)
			}
		}(),
		setPosition: function(e) {
			var t = this.elements;
			return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
		},
		getInverse: function(e, t) {
			var i = this.elements,
				r = e.elements,
				n = r[0],
				a = r[1],
				o = r[2],
				s = r[3],
				l = r[4],
				h = r[5],
				c = r[6],
				u = r[7],
				p = r[8],
				d = r[9],
				f = r[10],
				m = r[11],
				E = r[12],
				g = r[13],
				v = r[14],
				T = r[15],
				y = d * v * u - g * f * u + g * c * m - h * v * m - d * c * T + h * f * T,
				_ = E * f * u - p * v * u - E * c * m + l * v * m + p * c * T - l * f * T,
				R = p * g * u - E * d * u + E * h * m - l * g * m - p * h * T + l * d * T,
				x = E * d * c - p * g * c - E * h * f + l * g * f + p * h * v - l * d * v,
				b = n * y + a * _ + o * R + s * x;
			if(0 === b) {
				var w = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
				if(t) throw new Error(w);
				return console.warn(w), this.identity()
			}
			var H = 1 / b;
			return i[0] = y * H, i[1] = (g * f * s - d * v * s - g * o * m + a * v * m + d * o * T - a * f * T) * H, i[2] = (h * v * s - g * c * s + g * o * u - a * v * u - h * o * T + a * c * T) * H, i[3] = (d * c * s - h * f * s - d * o * u + a * f * u + h * o * m - a * c * m) * H, i[4] = _ * H, i[5] = (p * v * s - E * f * s + E * o * m - n * v * m - p * o * T + n * f * T) * H, i[6] = (E * c * s - l * v * s - E * o * u + n * v * u + l * o * T - n * c * T) * H, i[7] = (l * f * s - p * c * s + p * o * u - n * f * u - l * o * m + n * c * m) * H, i[8] = R * H, i[9] = (E * d * s - p * g * s - E * a * m + n * g * m + p * a * T - n * d * T) * H, i[10] = (l * g * s - E * h * s + E * a * u - n * g * u - l * a * T + n * h * T) * H, i[11] = (p * h * s - l * d * s - p * a * u + n * d * u + l * a * m - n * h * m) * H, i[12] = x * H, i[13] = (p * g * o - E * d * o + E * a * f - n * g * f - p * a * v + n * d * v) * H, i[14] = (E * h * o - l * g * o - E * a * c + n * g * c + l * a * v - n * h * v) * H, i[15] = (l * d * o - p * h * o + p * a * c - n * d * c - l * a * f + n * h * f) * H, this
		},
		scale: function(e) {
			var t = this.elements,
				i = e.x,
				r = e.y,
				n = e.z;
			return t[0] *= i, t[4] *= r, t[8] *= n, t[1] *= i, t[5] *= r, t[9] *= n, t[2] *= i, t[6] *= r, t[10] *= n, t[3] *= i, t[7] *= r, t[11] *= n, this
		},
		getMaxScaleOnAxis: function() {
			var e = this.elements,
				t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
				i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
				r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
			return Math.sqrt(Math.max(t, i, r))
		},
		makeTranslation: function(e, t, i) {
			return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this
		},
		makeRotationX: function(e) {
			var t = Math.cos(e),
				i = Math.sin(e);
			return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this
		},
		makeRotationY: function(e) {
			var t = Math.cos(e),
				i = Math.sin(e);
			return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this
		},
		makeRotationZ: function(e) {
			var t = Math.cos(e),
				i = Math.sin(e);
			return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		makeRotationAxis: function(e, t) {
			var i = Math.cos(t),
				r = Math.sin(t),
				n = 1 - i,
				a = e.x,
				o = e.y,
				s = e.z,
				l = n * a,
				h = n * o;
			return this.set(l * a + i, l * o - r * s, l * s + r * o, 0, l * o + r * s, h * o + i, h * s - r * a, 0, l * s - r * o, h * s + r * a, n * s * s + i, 0, 0, 0, 0, 1), this
		},
		makeScale: function(e, t, i) {
			return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
		},
		compose: function(e, t, i) {
			return this.makeRotationFromQuaternion(t), this.scale(i), this.setPosition(e), this
		},
		decompose: function() {
			var e, t;
			return function(i, r, n) {
				void 0 === e && (e = new THREE.Vector3, t = new THREE.Matrix4);
				var a = this.elements,
					o = e.set(a[0], a[1], a[2]).length(),
					s = e.set(a[4], a[5], a[6]).length(),
					l = e.set(a[8], a[9], a[10]).length(),
					h = this.determinant();
				0 > h && (o = -o), i.x = a[12], i.y = a[13], i.z = a[14], t.elements.set(this.elements);
				var c = 1 / o,
					u = 1 / s,
					p = 1 / l;
				return t.elements[0] *= c, t.elements[1] *= c, t.elements[2] *= c, t.elements[4] *= u, t.elements[5] *= u, t.elements[6] *= u, t.elements[8] *= p, t.elements[9] *= p, t.elements[10] *= p, r.setFromRotationMatrix(t), n.x = o, n.y = s, n.z = l, this
			}
		}(),
		makeFrustum: function(e, t, i, r, n, a) {
			var o = this.elements,
				s = 2 * n / (t - e),
				l = 2 * n / (r - i),
				h = (t + e) / (t - e),
				c = (r + i) / (r - i),
				u = -(a + n) / (a - n),
				p = -2 * a * n / (a - n);
			return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = l, o[9] = c, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
		},
		makePerspective: function(e, t, i, r) {
			var n = i * Math.tan(THREE.Math.DEG2RAD * e * .5),
				a = -n,
				o = a * t,
				s = n * t;
			return this.makeFrustum(o, s, a, n, i, r)
		},
		makeOrthographic: function(e, t, i, r, n, a) {
			var o = this.elements,
				s = 1 / (t - e),
				l = 1 / (i - r),
				h = 1 / (a - n),
				c = (t + e) * s,
				u = (i + r) * l,
				p = (a + n) * h;
			return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -c, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
		},
		equals: function(e) {
			for(var t = this.elements, i = e.elements, r = 0; 16 > r; r++)
				if(t[r] !== i[r]) return !1;
			return !0
		},
		fromArray: function(e) {
			return this.elements.set(e), this
		},
		toArray: function(e, t) {
			void 0 === e && (e = []), void 0 === t && (t = 0);
			var i = this.elements;
			return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e
		}
	}, THREE.Ray = function(e, t) {
		this.origin = void 0 !== e ? e : new THREE.Vector3, this.direction = void 0 !== t ? t : new THREE.Vector3
	}, THREE.Ray.prototype = {
		constructor: THREE.Ray,
		set: function(e, t) {
			return this.origin.copy(e), this.direction.copy(t), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.origin.copy(e.origin), this.direction.copy(e.direction), this
		},
		at: function(e, t) {
			var i = t || new THREE.Vector3;
			return i.copy(this.direction).multiplyScalar(e).add(this.origin)
		},
		lookAt: function(e) {
			return this.direction.copy(e).sub(this.origin).normalize(), this
		},
		recast: function() {
			var e = new THREE.Vector3;
			return function(t) {
				return this.origin.copy(this.at(t, e)), this
			}
		}(),
		closestPointToPoint: function(e, t) {
			var i = t || new THREE.Vector3;
			i.subVectors(e, this.origin);
			var r = i.dot(this.direction);
			return 0 > r ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(r).add(this.origin)
		},
		distanceToPoint: function(e) {
			return Math.sqrt(this.distanceSqToPoint(e))
		},
		distanceSqToPoint: function() {
			var e = new THREE.Vector3;
			return function(t) {
				var i = e.subVectors(t, this.origin).dot(this.direction);
				return 0 > i ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(i).add(this.origin), e.distanceToSquared(t))
			}
		}(),
		distanceSqToSegment: function() {
			var e = new THREE.Vector3,
				t = new THREE.Vector3,
				i = new THREE.Vector3;
			return function(r, n, a, o) {
				e.copy(r).add(n).multiplyScalar(.5), t.copy(n).sub(r).normalize(), i.copy(this.origin).sub(e);
				var s, l, h, c, u = .5 * r.distanceTo(n),
					p = -this.direction.dot(t),
					d = i.dot(this.direction),
					f = -i.dot(t),
					m = i.lengthSq(),
					E = Math.abs(1 - p * p);
				if(E > 0)
					if(s = p * f - d, l = p * d - f, c = u * E, s >= 0)
						if(l >= -c)
							if(c >= l) {
								var g = 1 / E;
								s *= g, l *= g, h = s * (s + p * l + 2 * d) + l * (p * s + l + 2 * f) + m
							} else l = u, s = Math.max(0, -(p * l + d)), h = -s * s + l * (l + 2 * f) + m;
				else l = -u, s = Math.max(0, -(p * l + d)), h = -s * s + l * (l + 2 * f) + m;
				else -c >= l ? (s = Math.max(0, -(-p * u + d)), l = s > 0 ? -u : Math.min(Math.max(-u, -f), u), h = -s * s + l * (l + 2 * f) + m) : c >= l ? (s = 0, l = Math.min(Math.max(-u, -f), u), h = l * (l + 2 * f) + m) : (s = Math.max(0, -(p * u + d)), l = s > 0 ? u : Math.min(Math.max(-u, -f), u), h = -s * s + l * (l + 2 * f) + m);
				else l = p > 0 ? -u : u, s = Math.max(0, -(p * l + d)), h = -s * s + l * (l + 2 * f) + m;
				return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(t).multiplyScalar(l).add(e), h
			}
		}(),
		intersectSphere: function() {
			var e = new THREE.Vector3;
			return function(t, i) {
				e.subVectors(t.center, this.origin);
				var r = e.dot(this.direction),
					n = e.dot(e) - r * r,
					a = t.radius * t.radius;
				if(n > a) return null;
				var o = Math.sqrt(a - n),
					s = r - o,
					l = r + o;
				return 0 > s && 0 > l ? null : 0 > s ? this.at(l, i) : this.at(s, i)
			}
		}(),
		intersectsSphere: function(e) {
			return this.distanceToPoint(e.center) <= e.radius
		},
		distanceToPlane: function(e) {
			var t = e.normal.dot(this.direction);
			if(0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
			var i = -(this.origin.dot(e.normal) + e.constant) / t;
			return i >= 0 ? i : null
		},
		intersectPlane: function(e, t) {
			var i = this.distanceToPlane(e);
			return null === i ? null : this.at(i, t)
		},
		intersectsPlane: function(e) {
			var t = e.distanceToPoint(this.origin);
			if(0 === t) return !0;
			var i = e.normal.dot(this.direction);
			return 0 > i * t ? !0 : !1
		},
		intersectBox: function(e, t) {
			var i, r, n, a, o, s, l = 1 / this.direction.x,
				h = 1 / this.direction.y,
				c = 1 / this.direction.z,
				u = this.origin;
			return l >= 0 ? (i = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (i = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), h >= 0 ? (n = (e.min.y - u.y) * h, a = (e.max.y - u.y) * h) : (n = (e.max.y - u.y) * h, a = (e.min.y - u.y) * h), i > a || n > r ? null : ((n > i || i !== i) && (i = n), (r > a || r !== r) && (r = a), c >= 0 ? (o = (e.min.z - u.z) * c, s = (e.max.z - u.z) * c) : (o = (e.max.z - u.z) * c, s = (e.min.z - u.z) * c), i > s || o > r ? null : ((o > i || i !== i) && (i = o), (r > s || r !== r) && (r = s), 0 > r ? null : this.at(i >= 0 ? i : r, t)))
		},
		intersectsBox: function() {
			var e = new THREE.Vector3;
			return function(t) {
				return null !== this.intersectBox(t, e)
			}
		}(),
		intersectTriangle: function() {
			var e = new THREE.Vector3,
				t = new THREE.Vector3,
				i = new THREE.Vector3,
				r = new THREE.Vector3;
			return function(n, a, o, s, l) {
				t.subVectors(a, n), i.subVectors(o, n), r.crossVectors(t, i);
				var h, c = this.direction.dot(r);
				if(c > 0) {
					if(s) return null;
					h = 1
				} else {
					if(!(0 > c)) return null;
					h = -1, c = -c
				}
				e.subVectors(this.origin, n);
				var u = h * this.direction.dot(i.crossVectors(e, i));
				if(0 > u) return null;
				var p = h * this.direction.dot(t.cross(e));
				if(0 > p) return null;
				if(u + p > c) return null;
				var d = -h * e.dot(r);
				return 0 > d ? null : this.at(d / c, l)
			}
		}(),
		applyMatrix4: function(e) {
			return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
		},
		equals: function(e) {
			return e.origin.equals(this.origin) && e.direction.equals(this.direction)
		}
	}, THREE.Sphere = function(e, t) {
		this.center = void 0 !== e ? e : new THREE.Vector3, this.radius = void 0 !== t ? t : 0
	}, THREE.Sphere.prototype = {
		constructor: THREE.Sphere,
		set: function(e, t) {
			return this.center.copy(e), this.radius = t, this
		},
		setFromPoints: function() {
			var e = new THREE.Box3;
			return function(t, i) {
				var r = this.center;
				void 0 !== i ? r.copy(i) : e.setFromPoints(t).center(r);
				for(var n = 0, a = 0, o = t.length; o > a; a++) n = Math.max(n, r.distanceToSquared(t[a]));
				return this.radius = Math.sqrt(n), this
			}
		}(),
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.center.copy(e.center), this.radius = e.radius, this
		},
		empty: function() {
			return this.radius <= 0
		},
		containsPoint: function(e) {
			return e.distanceToSquared(this.center) <= this.radius * this.radius
		},
		distanceToPoint: function(e) {
			return e.distanceTo(this.center) - this.radius
		},
		intersectsSphere: function(e) {
			var t = this.radius + e.radius;
			return e.center.distanceToSquared(this.center) <= t * t
		},
		intersectsBox: function(e) {
			return e.intersectsSphere(this)
		},
		intersectsPlane: function(e) {
			return Math.abs(this.center.dot(e.normal) - e.constant) <= this.radius
		},
		clampPoint: function(e, t) {
			var i = this.center.distanceToSquared(e),
				r = t || new THREE.Vector3;
			return r.copy(e), i > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
		},
		getBoundingBox: function(e) {
			var t = e || new THREE.Box3;
			return t.set(this.center, this.center), t.expandByScalar(this.radius), t
		},
		applyMatrix4: function(e) {
			return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
		},
		translate: function(e) {
			return this.center.add(e), this
		},
		equals: function(e) {
			return e.center.equals(this.center) && e.radius === this.radius
		}
	}, THREE.Frustum = function(e, t, i, r, n, a) {
		this.planes = [void 0 !== e ? e : new THREE.Plane, void 0 !== t ? t : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== n ? n : new THREE.Plane, void 0 !== a ? a : new THREE.Plane]
	}, THREE.Frustum.prototype = {
		constructor: THREE.Frustum,
		set: function(e, t, i, r, n, a) {
			var o = this.planes;
			return o[0].copy(e), o[1].copy(t), o[2].copy(i), o[3].copy(r), o[4].copy(n), o[5].copy(a), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			for(var t = this.planes, i = 0; 6 > i; i++) t[i].copy(e.planes[i]);
			return this
		},
		setFromMatrix: function(e) {
			var t = this.planes,
				i = e.elements,
				r = i[0],
				n = i[1],
				a = i[2],
				o = i[3],
				s = i[4],
				l = i[5],
				h = i[6],
				c = i[7],
				u = i[8],
				p = i[9],
				d = i[10],
				f = i[11],
				m = i[12],
				E = i[13],
				g = i[14],
				v = i[15];
			return t[0].setComponents(o - r, c - s, f - u, v - m).normalize(), t[1].setComponents(o + r, c + s, f + u, v + m).normalize(), t[2].setComponents(o + n, c + l, f + p, v + E).normalize(), t[3].setComponents(o - n, c - l, f - p, v - E).normalize(), t[4].setComponents(o - a, c - h, f - d, v - g).normalize(), t[5].setComponents(o + a, c + h, f + d, v + g).normalize(), this
		},
		intersectsObject: function() {
			var e = new THREE.Sphere;
			return function(t) {
				var i = t.geometry;
				return null === i.boundingSphere && i.computeBoundingSphere(), e.copy(i.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
			}
		}(),
		intersectsSprite: function() {
			var e = new THREE.Sphere;
			return function(t) {
				return e.center.set(0, 0, 0), e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
			}
		}(),
		intersectsSphere: function(e) {
			for(var t = this.planes, i = e.center, r = -e.radius, n = 0; 6 > n; n++) {
				var a = t[n].distanceToPoint(i);
				if(r > a) return !1
			}
			return !0
		},
		intersectsBox: function() {
			var e = new THREE.Vector3,
				t = new THREE.Vector3;
			return function(i) {
				for(var r = this.planes, n = 0; 6 > n; n++) {
					var a = r[n];
					e.x = a.normal.x > 0 ? i.min.x : i.max.x, t.x = a.normal.x > 0 ? i.max.x : i.min.x, e.y = a.normal.y > 0 ? i.min.y : i.max.y, t.y = a.normal.y > 0 ? i.max.y : i.min.y, e.z = a.normal.z > 0 ? i.min.z : i.max.z, t.z = a.normal.z > 0 ? i.max.z : i.min.z;
					var o = a.distanceToPoint(e),
						s = a.distanceToPoint(t);
					if(0 > o && 0 > s) return !1
				}
				return !0
			}
		}(),
		containsPoint: function(e) {
			for(var t = this.planes, i = 0; 6 > i; i++)
				if(t[i].distanceToPoint(e) < 0) return !1;
			return !0
		}
	}, THREE.Plane = function(e, t) {
		this.normal = void 0 !== e ? e : new THREE.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
	}, THREE.Plane.prototype = {
		constructor: THREE.Plane,
		set: function(e, t) {
			return this.normal.copy(e), this.constant = t, this
		},
		setComponents: function(e, t, i, r) {
			return this.normal.set(e, t, i), this.constant = r, this
		},
		setFromNormalAndCoplanarPoint: function(e, t) {
			return this.normal.copy(e), this.constant = -t.dot(this.normal), this
		},
		setFromCoplanarPoints: function() {
			var e = new THREE.Vector3,
				t = new THREE.Vector3;
			return function(i, r, n) {
				var a = e.subVectors(n, r).cross(t.subVectors(i, r)).normalize();
				return this.setFromNormalAndCoplanarPoint(a, i), this
			}
		}(),
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.normal.copy(e.normal), this.constant = e.constant, this
		},
		normalize: function() {
			var e = 1 / this.normal.length();
			return this.normal.multiplyScalar(e), this.constant *= e, this
		},
		negate: function() {
			return this.constant *= -1, this.normal.negate(), this
		},
		distanceToPoint: function(e) {
			return this.normal.dot(e) + this.constant
		},
		distanceToSphere: function(e) {
			return this.distanceToPoint(e.center) - e.radius
		},
		projectPoint: function(e, t) {
			return this.orthoPoint(e, t).sub(e).negate()
		},
		orthoPoint: function(e, t) {
			var i = this.distanceToPoint(e),
				r = t || new THREE.Vector3;
			return r.copy(this.normal).multiplyScalar(i)
		},
		intersectLine: function() {
			var e = new THREE.Vector3;
			return function(t, i) {
				var r = i || new THREE.Vector3,
					n = t.delta(e),
					a = this.normal.dot(n);
				if(0 === a) return 0 === this.distanceToPoint(t.start) ? r.copy(t.start) : void 0;
				var o = -(t.start.dot(this.normal) + this.constant) / a;
				return 0 > o || o > 1 ? void 0 : r.copy(n).multiplyScalar(o).add(t.start)
			}
		}(),
		intersectsLine: function(e) {
			var t = this.distanceToPoint(e.start),
				i = this.distanceToPoint(e.end);
			return 0 > t && i > 0 || 0 > i && t > 0
		},
		intersectsBox: function(e) {
			return e.intersectsPlane(this)
		},
		intersectsSphere: function(e) {
			return e.intersectsPlane(this)
		},
		coplanarPoint: function(e) {
			var t = e || new THREE.Vector3;
			return t.copy(this.normal).multiplyScalar(-this.constant)
		},
		applyMatrix4: function() {
			var e = new THREE.Vector3,
				t = new THREE.Matrix3;
			return function(i, r) {
				var n = this.coplanarPoint(e).applyMatrix4(i),
					a = r || t.getNormalMatrix(i),
					o = this.normal.applyMatrix3(a).normalize();
				return this.constant = -n.dot(o), this
			}
		}(),
		translate: function(e) {
			return this.constant = this.constant - e.dot(this.normal), this
		},
		equals: function(e) {
			return e.normal.equals(this.normal) && e.constant === this.constant
		}
	}, THREE.Spherical = function(e, t, i) {
		return this.radius = void 0 !== e ? e : 1, this.phi = void 0 !== t ? t : 0, this.theta = void 0 !== i ? i : 0, this
	}, THREE.Spherical.prototype = {
		constructor: THREE.Spherical,
		set: function(e, t, i) {
			return this.radius = e, this.phi = t, this.theta = i, this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.radius.copy(e.radius), this.phi.copy(e.phi), this.theta.copy(e.theta), this
		},
		makeSafe: function() {
			var e = 1e-6;
			return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this
		},
		setFromVector3: function(e) {
			return this.radius = e.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e.x, e.z), this.phi = Math.acos(THREE.Math.clamp(e.y / this.radius, -1, 1))), this
		}
	}, THREE.Math = {
		DEG2RAD: Math.PI / 180,
		RAD2DEG: 180 / Math.PI,
		generateUUID: function() {
			var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
				i = new Array(36),
				r = 0;
			return function() {
				for(var n = 0; 36 > n; n++) 8 === n || 13 === n || 18 === n || 23 === n ? i[n] = "-" : 14 === n ? i[n] = "4" : (2 >= r && (r = 33554432 + 16777216 * Math.random() | 0), e = 15 & r, r >>= 4, i[n] = t[19 === n ? 3 & e | 8 : e]);
				return i.join("")
			}
		}(),
		clamp: function(e, t, i) {
			return Math.max(t, Math.min(i, e))
		},
		euclideanModulo: function(e, t) {
			return(e % t + t) % t
		},
		mapLinear: function(e, t, i, r, n) {
			return r + (e - t) * (n - r) / (i - t)
		},
		smoothstep: function(e, t, i) {
			return t >= e ? 0 : e >= i ? 1 : (e = (e - t) / (i - t), e * e * (3 - 2 * e))
		},
		smootherstep: function(e, t, i) {
			return t >= e ? 0 : e >= i ? 1 : (e = (e - t) / (i - t), e * e * e * (e * (6 * e - 15) + 10))
		},
		random16: function() {
			return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."), Math.random()
		},
		randInt: function(e, t) {
			return e + Math.floor(Math.random() * (t - e + 1))
		},
		randFloat: function(e, t) {
			return e + Math.random() * (t - e)
		},
		randFloatSpread: function(e) {
			return e * (.5 - Math.random())
		},
		degToRad: function(e) {
			return e * THREE.Math.DEG2RAD
		},
		radToDeg: function(e) {
			return e * THREE.Math.RAD2DEG
		},
		isPowerOfTwo: function(e) {
			return 0 === (e & e - 1) && 0 !== e
		},
		nearestPowerOfTwo: function(e) {
			return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
		},
		nextPowerOfTwo: function(e) {
			return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
		}
	}, THREE.Spline = function(e) {
		function t(e, t, i, r, n, a, o) {
			var s = .5 * (i - e),
				l = .5 * (r - t);
			return(2 * (t - i) + s + l) * o + (-3 * (t - i) - 2 * s - l) * a + s * n + t
		}
		this.points = e;
		var i, r, n, a, o, s, l, h, c, u = [],
			p = {
				x: 0,
				y: 0,
				z: 0
			};
		this.initFromArray = function(e) {
			this.points = [];
			for(var t = 0; t < e.length; t++) this.points[t] = {
				x: e[t][0],
				y: e[t][1],
				z: e[t][2]
			}
		}, this.getPoint = function(e) {
			return i = (this.points.length - 1) * e, r = Math.floor(i), n = i - r, u[0] = 0 === r ? r : r - 1, u[1] = r, u[2] = r > this.points.length - 2 ? this.points.length - 1 : r + 1, u[3] = r > this.points.length - 3 ? this.points.length - 1 : r + 2, s = this.points[u[0]], l = this.points[u[1]], h = this.points[u[2]], c = this.points[u[3]], a = n * n, o = n * a, p.x = t(s.x, l.x, h.x, c.x, n, a, o), p.y = t(s.y, l.y, h.y, c.y, n, a, o), p.z = t(s.z, l.z, h.z, c.z, n, a, o), p
		}, this.getControlPointsArray = function() {
			var e, t, i = this.points.length,
				r = [];
			for(e = 0; i > e; e++) t = this.points[e], r[e] = [t.x, t.y, t.z];
			return r
		}, this.getLength = function(e) {
			var t, i, r, n, a = 0,
				o = 0,
				s = 0,
				l = new THREE.Vector3,
				h = new THREE.Vector3,
				c = [],
				u = 0;
			for(c[0] = 0, e || (e = 100), r = this.points.length * e, l.copy(this.points[0]), t = 1; r > t; t++) i = t / r, n = this.getPoint(i), h.copy(n), u += h.distanceTo(l), l.copy(n), a = (this.points.length - 1) * i, o = Math.floor(a), o !== s && (c[o] = u, s = o);
			return c[c.length] = u, {
				chunks: c,
				total: u
			}
		}, this.reparametrizeByArcLength = function(e) {
			var t, i, r, n, a, o, s, l, h = [],
				c = new THREE.Vector3,
				u = this.getLength();
			for(h.push(c.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
				for(o = u.chunks[t] - u.chunks[t - 1], s = Math.ceil(e * o / u.total), n = (t - 1) / (this.points.length - 1), a = t / (this.points.length - 1), i = 1; s - 1 > i; i++) r = n + i * (1 / s) * (a - n), l = this.getPoint(r), h.push(c.copy(l).clone());
				h.push(c.copy(this.points[t]).clone())
			}
			this.points = h
		}
	}, THREE.Triangle = function(e, t, i) {
		this.a = void 0 !== e ? e : new THREE.Vector3, this.b = void 0 !== t ? t : new THREE.Vector3, this.c = void 0 !== i ? i : new THREE.Vector3
	}, THREE.Triangle.normal = function() {
		var e = new THREE.Vector3;
		return function(t, i, r, n) {
			var a = n || new THREE.Vector3;
			a.subVectors(r, i), e.subVectors(t, i), a.cross(e);
			var o = a.lengthSq();
			return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
		}
	}(), THREE.Triangle.barycoordFromPoint = function() {
		var e = new THREE.Vector3,
			t = new THREE.Vector3,
			i = new THREE.Vector3;
		return function(r, n, a, o, s) {
			e.subVectors(o, n), t.subVectors(a, n), i.subVectors(r, n);
			var l = e.dot(e),
				h = e.dot(t),
				c = e.dot(i),
				u = t.dot(t),
				p = t.dot(i),
				d = l * u - h * h,
				f = s || new THREE.Vector3;
			if(0 === d) return f.set(-2, -1, -1);
			var m = 1 / d,
				E = (u * c - h * p) * m,
				g = (l * p - h * c) * m;
			return f.set(1 - E - g, g, E)
		}
	}(), THREE.Triangle.containsPoint = function() {
		var e = new THREE.Vector3;
		return function(t, i, r, n) {
			var a = THREE.Triangle.barycoordFromPoint(t, i, r, n, e);
			return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
		}
	}(), THREE.Triangle.prototype = {
		constructor: THREE.Triangle,
		set: function(e, t, i) {
			return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
		},
		setFromPointsAndIndices: function(e, t, i, r) {
			return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
		},
		area: function() {
			var e = new THREE.Vector3,
				t = new THREE.Vector3;
			return function() {
				return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
			}
		}(),
		midpoint: function(e) {
			var t = e || new THREE.Vector3;
			return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
		},
		normal: function(e) {
			return THREE.Triangle.normal(this.a, this.b, this.c, e)
		},
		plane: function(e) {
			var t = e || new THREE.Plane;
			return t.setFromCoplanarPoints(this.a, this.b, this.c)
		},
		barycoordFromPoint: function(e, t) {
			return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
		},
		containsPoint: function(e) {
			return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
		},
		closestPointToPoint: function() {
			var e, t, i, r;
			return function(n, a) {
				void 0 === e && (e = new THREE.Plane, t = [new THREE.Line3, new THREE.Line3, new THREE.Line3], i = new THREE.Vector3, r = new THREE.Vector3);
				var o = a || new THREE.Vector3,
					s = 1 / 0;
				if(e.setFromCoplanarPoints(this.a, this.b, this.c), e.projectPoint(n, i), this.containsPoint(i) === !0) o.copy(i);
				else {
					t[0].set(this.a, this.b), t[1].set(this.b, this.c), t[2].set(this.c, this.a);
					for(var l = 0; l < t.length; l++) {
						t[l].closestPointToPoint(i, !0, r);
						var h = i.distanceToSquared(r);
						s > h && (s = h, o.copy(r))
					}
				}
				return o
			}
		}(),
		equals: function(e) {
			return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
		}
	}, THREE.Interpolant = function(e, t, i, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new t.constructor(i), this.sampleValues = t, this.valueSize = i
	}, THREE.Interpolant.prototype = {
		constructor: THREE.Interpolant,
		evaluate: function(e) {
			var t = this.parameterPositions,
				i = this._cachedIndex,
				r = t[i],
				n = t[i - 1];
			e: {
				t: {
					var a;i: {
						r: if(!(r > e)) {
							for(var o = i + 2;;) {
								if(void 0 === r) {
									if(n > e) break r;
									return i = t.length, this._cachedIndex = i, this.afterEnd_(i - 1, e, n)
								}
								if(i === o) break;
								if(n = r, r = t[++i], r > e) break t
							}
							a = t.length;
							break i
						} {
							if(e >= n) break e;
							var s = t[1];
							s > e && (i = 2, n = s);
							for(var o = i - 2;;) {
								if(void 0 === n) return this._cachedIndex = 0, this.beforeStart_(0, e, r);
								if(i === o) break;
								if(r = n, n = t[--i - 1], e >= n) break t
							}
							a = i, i = 0
						}
					}
					for(; a > i;) {
						var l = i + a >>> 1;
						e < t[l] ? a = l : i = l + 1
					}
					if(r = t[i], n = t[i - 1], void 0 === n) return this._cachedIndex = 0, this.beforeStart_(0, e, r);
					if(void 0 === r) return i = t.length, this._cachedIndex = i, this.afterEnd_(i - 1, n, e)
				}
				this._cachedIndex = i,
				this.intervalChanged_(i, n, r)
			}
			return this.interpolate_(i, n, e, r)
		},
		settings: null,
		DefaultSettings_: {},
		getSettings_: function() {
			return this.settings || this.DefaultSettings_
		},
		copySampleValue_: function(e) {
			for(var t = this.resultBuffer, i = this.sampleValues, r = this.valueSize, n = e * r, a = 0; a !== r; ++a) t[a] = i[n + a];
			return t
		},
		interpolate_: function() {
			throw new Error("call to abstract method")
		},
		intervalChanged_: function() {}
	}, Object.assign(THREE.Interpolant.prototype, {
		beforeStart_: THREE.Interpolant.prototype.copySampleValue_,
		afterEnd_: THREE.Interpolant.prototype.copySampleValue_
	}), THREE.CubicInterpolant = function(e, t, i, r) {
		THREE.Interpolant.call(this, e, t, i, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
	}, THREE.CubicInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
		constructor: THREE.CubicInterpolant,
		DefaultSettings_: {
			endingStart: THREE.ZeroCurvatureEnding,
			endingEnd: THREE.ZeroCurvatureEnding
		},
		intervalChanged_: function(e, t, i) {
			var r = this.parameterPositions,
				n = e - 2,
				a = e + 1,
				o = r[n],
				s = r[a];
			if(void 0 === o) switch(this.getSettings_().endingStart) {
				case THREE.ZeroSlopeEnding:
					n = e, o = 2 * t - i;
					break;
				case THREE.WrapAroundEnding:
					n = r.length - 2, o = t + r[n] - r[n + 1];
					break;
				default:
					n = e, o = i
			}
			if(void 0 === s) switch(this.getSettings_().endingEnd) {
				case THREE.ZeroSlopeEnding:
					a = e, s = 2 * i - t;
					break;
				case THREE.WrapAroundEnding:
					a = 1, s = i + r[1] - r[0];
					break;
				default:
					a = e - 1, s = t
			}
			var l = .5 * (i - t),
				h = this.valueSize;
			this._weightPrev = l / (t - o), this._weightNext = l / (s - i), this._offsetPrev = n * h, this._offsetNext = a * h
		},
		interpolate_: function(e, t, i, r) {
			for(var n = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, h = this._offsetPrev, c = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - t) / (r - t), f = d * d, m = f * d, E = -u * m + 2 * u * f - u * d, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, v = (-1 - p) * m + (1.5 + p) * f + .5 * d, T = p * m - p * f, y = 0; y !== o; ++y) n[y] = E * a[h + y] + g * a[l + y] + v * a[s + y] + T * a[c + y];
			return n
		}
	}), THREE.DiscreteInterpolant = function(e, t, i, r) {
		THREE.Interpolant.call(this, e, t, i, r)
	}, THREE.DiscreteInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
		constructor: THREE.DiscreteInterpolant,
		interpolate_: function(e) {
			return this.copySampleValue_(e - 1)
		}
	}), THREE.LinearInterpolant = function(e, t, i, r) {
		THREE.Interpolant.call(this, e, t, i, r)
	}, THREE.LinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
		constructor: THREE.LinearInterpolant,
		interpolate_: function(e, t, i, r) {
			for(var n = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, h = (i - t) / (r - t), c = 1 - h, u = 0; u !== o; ++u) n[u] = a[l + u] * c + a[s + u] * h;
			return n
		}
	}), THREE.QuaternionLinearInterpolant = function(e, t, i, r) {
		THREE.Interpolant.call(this, e, t, i, r)
	}, THREE.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
		constructor: THREE.QuaternionLinearInterpolant,
		interpolate_: function(e, t, i, r) {
			for(var n = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = (i - t) / (r - t), h = s + o; s !== h; s += 4) THREE.Quaternion.slerpFlat(n, 0, a, s - o, a, s, l);
			return n
		}
	}), THREE.Clock = function(e) {
		this.autoStart = void 0 !== e ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
	}, THREE.Clock.prototype = {
		constructor: THREE.Clock,
		start: function() {
			this.startTime = (performance || Date).now(), this.oldTime = this.startTime, this.running = !0
		},
		stop: function() {
			this.getElapsedTime(), this.running = !1
		},
		getElapsedTime: function() {
			return this.getDelta(), this.elapsedTime
		},
		getDelta: function() {
			var e = 0;
			if(this.autoStart && !this.running && this.start(), this.running) {
				var t = (performance || Date).now();
				e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
			}
			return e
		}
	}, THREE.EventDispatcher = function() {}, Object.assign(THREE.EventDispatcher.prototype, {
		addEventListener: function(e, t) {
			void 0 === this._listeners && (this._listeners = {});
			var i = this._listeners;
			void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t)
		},
		hasEventListener: function(e, t) {
			if(void 0 === this._listeners) return !1;
			var i = this._listeners;
			return void 0 !== i[e] && -1 !== i[e].indexOf(t) ? !0 : !1
		},
		removeEventListener: function(e, t) {
			if(void 0 !== this._listeners) {
				var i = this._listeners,
					r = i[e];
				if(void 0 !== r) {
					var n = r.indexOf(t); - 1 !== n && r.splice(n, 1)
				}
			}
		},
		dispatchEvent: function(e) {
			if(void 0 !== this._listeners) {
				var t = this._listeners,
					i = t[e.type];
				if(void 0 !== i) {
					e.target = this;
					var r = [],
						n = 0,
						a = i.length;
					for(n = 0; a > n; n++) r[n] = i[n];
					for(n = 0; a > n; n++) r[n].call(this, e)
				}
			}
		}
	}), THREE.Layers = function() {
		this.mask = 1
	}, THREE.Layers.prototype = {
		constructor: THREE.Layers,
		set: function(e) {
			this.mask = 1 << e
		},
		enable: function(e) {
			this.mask |= 1 << e
		},
		toggle: function(e) {
			this.mask ^= 1 << e
		},
		disable: function(e) {
			this.mask &= ~(1 << e)
		},
		test: function(e) {
			return 0 !== (this.mask & e.mask)
		}
	},
	function(e) {
		function t(e, t) {
			return e.distance - t.distance
		}

		function i(e, t, r, n) {
			if(e.visible !== !1 && (e.raycast(t, r), n === !0))
				for(var a = e.children, o = 0, s = a.length; s > o; o++) i(a[o], t, r, !0)
		}
		e.Raycaster = function(t, i, r, n) {
			this.ray = new e.Ray(t, i), this.near = r || 0, this.far = n || 1 / 0, this.params = {
				Mesh: {},
				Line: {},
				LOD: {},
				Points: {
					threshold: 1
				},
				Sprite: {}
			}, Object.defineProperties(this.params, {
				PointCloud: {
					get: function() {
						return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
					}
				}
			})
		}, e.Raycaster.prototype = {
			constructor: e.Raycaster,
			linePrecision: 1,
			set: function(e, t) {
				this.ray.set(e, t)
			},
			setFromCamera: function(t, i) {
				i instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(i.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(i).sub(this.ray.origin).normalize()) : i instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, (i.near + i.far) / (i.near - i.far)).unproject(i), this.ray.direction.set(0, 0, -1).transformDirection(i.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
			},
			intersectObject: function(e, r) {
				var n = [];
				return i(e, this, n, r), n.sort(t), n
			},
			intersectObjects: function(e, r) {
				var n = [];
				if(Array.isArray(e) === !1) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
				for(var a = 0, o = e.length; o > a; a++) i(e[a], this, n, r);
				return n.sort(t), n
			}
		}
	}(THREE), THREE.Object3D = function() {
		function e() {
			n.setFromEuler(r, !1)
		}

		function t() {
			r.setFromQuaternion(n, void 0, !1)
		}
		Object.defineProperty(this, "id", {
			value: THREE.Object3DIdCount++
		}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = THREE.Object3D.DefaultUp.clone();
		var i = new THREE.Vector3,
			r = new THREE.Euler,
			n = new THREE.Quaternion,
			a = new THREE.Vector3(1, 1, 1);
		r.onChange(e), n.onChange(t), Object.defineProperties(this, {
			position: {
				enumerable: !0,
				value: i
			},
			rotation: {
				enumerable: !0,
				value: r
			},
			quaternion: {
				enumerable: !0,
				value: n
			},
			scale: {
				enumerable: !0,
				value: a
			},
			modelViewMatrix: {
				value: new THREE.Matrix4
			},
			normalMatrix: {
				value: new THREE.Matrix3
			}
		}), this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new THREE.Layers, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
	}, THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0), THREE.Object3D.DefaultMatrixAutoUpdate = !0, Object.assign(THREE.Object3D.prototype, THREE.EventDispatcher.prototype, {
		applyMatrix: function(e) {
			this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
		},
		setRotationFromAxisAngle: function(e, t) {
			this.quaternion.setFromAxisAngle(e, t)
		},
		setRotationFromEuler: function(e) {
			this.quaternion.setFromEuler(e, !0)
		},
		setRotationFromMatrix: function(e) {
			this.quaternion.setFromRotationMatrix(e)
		},
		setRotationFromQuaternion: function(e) {
			this.quaternion.copy(e)
		},
		rotateOnAxis: function() {
			var e = new THREE.Quaternion;
			return function(t, i) {
				return e.setFromAxisAngle(t, i), this.quaternion.multiply(e), this
			}
		}(),
		rotateX: function() {
			var e = new THREE.Vector3(1, 0, 0);
			return function(t) {
				return this.rotateOnAxis(e, t)
			}
		}(),
		rotateY: function() {
			var e = new THREE.Vector3(0, 1, 0);
			return function(t) {
				return this.rotateOnAxis(e, t)
			}
		}(),
		rotateZ: function() {
			var e = new THREE.Vector3(0, 0, 1);
			return function(t) {
				return this.rotateOnAxis(e, t)
			}
		}(),
		translateOnAxis: function() {
			var e = new THREE.Vector3;
			return function(t, i) {
				return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(i)), this
			}
		}(),
		translateX: function() {
			var e = new THREE.Vector3(1, 0, 0);
			return function(t) {
				return this.translateOnAxis(e, t)
			}
		}(),
		translateY: function() {
			var e = new THREE.Vector3(0, 1, 0);
			return function(t) {
				return this.translateOnAxis(e, t)
			}
		}(),
		translateZ: function() {
			var e = new THREE.Vector3(0, 0, 1);
			return function(t) {
				return this.translateOnAxis(e, t)
			}
		}(),
		localToWorld: function(e) {
			return e.applyMatrix4(this.matrixWorld)
		},
		worldToLocal: function() {
			var e = new THREE.Matrix4;
			return function(t) {
				return t.applyMatrix4(e.getInverse(this.matrixWorld))
			}
		}(),
		lookAt: function() {
			var e = new THREE.Matrix4;
			return function(t) {
				e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
			}
		}(),
		add: function(e) {
			if(arguments.length > 1) {
				for(var t = 0; t < arguments.length; t++) this.add(arguments[t]);
				return this
			}
			return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e instanceof THREE.Object3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
				type: "added"
			}), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
		},
		remove: function(e) {
			if(arguments.length > 1)
				for(var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
			var i = this.children.indexOf(e); - 1 !== i && (e.parent = null, e.dispatchEvent({
				type: "removed"
			}), this.children.splice(i, 1))
		},
		getObjectById: function(e) {
			return this.getObjectByProperty("id", e)
		},
		getObjectByName: function(e) {
			return this.getObjectByProperty("name", e)
		},
		getObjectByProperty: function(e, t) {
			if(this[e] === t) return this;
			for(var i = 0, r = this.children.length; r > i; i++) {
				var n = this.children[i],
					a = n.getObjectByProperty(e, t);
				if(void 0 !== a) return a
			}
			return void 0
		},
		getWorldPosition: function(e) {
			var t = e || new THREE.Vector3;
			return this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
		},
		getWorldQuaternion: function() {
			var e = new THREE.Vector3,
				t = new THREE.Vector3;
			return function(i) {
				var r = i || new THREE.Quaternion;
				return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, r, t), r
			}
		}(),
		getWorldRotation: function() {
			var e = new THREE.Quaternion;
			return function(t) {
				var i = t || new THREE.Euler;
				return this.getWorldQuaternion(e), i.setFromQuaternion(e, this.rotation.order, !1)
			}
		}(),
		getWorldScale: function() {
			var e = new THREE.Vector3,
				t = new THREE.Quaternion;
			return function(i) {
				var r = i || new THREE.Vector3;
				return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, r), r
			}
		}(),
		getWorldDirection: function() {
			var e = new THREE.Quaternion;
			return function(t) {
				var i = t || new THREE.Vector3;
				return this.getWorldQuaternion(e), i.set(0, 0, 1).applyQuaternion(e)
			}
		}(),
		raycast: function() {},
		traverse: function(e) {
			e(this);
			for(var t = this.children, i = 0, r = t.length; r > i; i++) t[i].traverse(e)
		},
		traverseVisible: function(e) {
			if(this.visible !== !1) {
				e(this);
				for(var t = this.children, i = 0, r = t.length; r > i; i++) t[i].traverseVisible(e)
			}
		},
		traverseAncestors: function(e) {
			var t = this.parent;
			null !== t && (e(t), t.traverseAncestors(e))
		},
		updateMatrix: function() {
			this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
		},
		updateMatrixWorld: function(e) {
			this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || e === !0) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
			for(var t = 0, i = this.children.length; i > t; t++) this.children[t].updateMatrixWorld(e)
		},
		toJSON: function(e) {
			function t(e) {
				var t = [];
				for(var i in e) {
					var r = e[i];
					delete r.metadata, t.push(r)
				}
				return t
			}
			var i = void 0 === e || "" === e,
				r = {};
			i && (e = {
				geometries: {},
				materials: {},
				textures: {},
				images: {}
			}, r.metadata = {
				version: 4.4,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			var n = {};
			if(n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), this.castShadow === !0 && (n.castShadow = !0), this.receiveShadow === !0 && (n.receiveShadow = !0), this.visible === !1 && (n.visible = !1), n.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)), n.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)), n.material = this.material.uuid), this.children.length > 0) {
				n.children = [];
				for(var a = 0; a < this.children.length; a++) n.children.push(this.children[a].toJSON(e).object)
			}
			if(i) {
				var o = t(e.geometries),
					s = t(e.materials),
					l = t(e.textures),
					h = t(e.images);
				o.length > 0 && (r.geometries = o), s.length > 0 && (r.materials = s), l.length > 0 && (r.textures = l), h.length > 0 && (r.images = h)
			}
			return r.object = n, r
		},
		clone: function(e) {
			return(new this.constructor).copy(this, e)
		},
		copy: function(e, t) {
			if(void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
				for(var i = 0; i < e.children.length; i++) {
					var r = e.children[i];
					this.add(r.clone())
				}
			return this
		}
	}), THREE.Object3DIdCount = 0, THREE.Face3 = function(e, t, i, r, n, a) {
		this.a = e, this.b = t, this.c = i, this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3, this.vertexNormals = Array.isArray(r) ? r : [], this.color = n instanceof THREE.Color ? n : new THREE.Color, this.vertexColors = Array.isArray(n) ? n : [], this.materialIndex = void 0 !== a ? a : 0
	}, THREE.Face3.prototype = {
		constructor: THREE.Face3,
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
			for(var t = 0, i = e.vertexNormals.length; i > t; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
			for(var t = 0, i = e.vertexColors.length; i > t; t++) this.vertexColors[t] = e.vertexColors[t].clone();
			return this
		}
	}, THREE.BufferAttribute = function(e, t, i) {
		this.uuid = THREE.Math.generateUUID(), this.array = e, this.itemSize = t, this.dynamic = !1, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0, this.normalized = i === !0
	}, THREE.BufferAttribute.prototype = {
		constructor: THREE.BufferAttribute,
		get count() {
			return this.array.length / this.itemSize
		},
		set needsUpdate(e) {
			e === !0 && this.version++
		},
		setDynamic: function(e) {
			return this.dynamic = e, this
		},
		copy: function(e) {
			return this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.dynamic = e.dynamic, this
		},
		copyAt: function(e, t, i) {
			e *= this.itemSize, i *= t.itemSize;
			for(var r = 0, n = this.itemSize; n > r; r++) this.array[e + r] = t.array[i + r];
			return this
		},
		copyArray: function(e) {
			return this.array.set(e), this
		},
		copyColorsArray: function(e) {
			for(var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
				var a = e[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new THREE.Color), t[i++] = a.r, t[i++] = a.g, t[i++] = a.b
			}
			return this
		},
		copyIndicesArray: function(e) {
			for(var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
				var a = e[r];
				t[i++] = a.a, t[i++] = a.b, t[i++] = a.c
			}
			return this
		},
		copyVector2sArray: function(e) {
			for(var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
				var a = e[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new THREE.Vector2), t[i++] = a.x, t[i++] = a.y
			}
			return this
		},
		copyVector3sArray: function(e) {
			for(var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
				var a = e[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new THREE.Vector3), t[i++] = a.x, t[i++] = a.y, t[i++] = a.z
			}
			return this
		},
		copyVector4sArray: function(e) {
			for(var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
				var a = e[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new THREE.Vector4), t[i++] = a.x, t[i++] = a.y, t[i++] = a.z, t[i++] = a.w
			}
			return this
		},
		set: function(e, t) {
			return void 0 === t && (t = 0), this.array.set(e, t), this
		},
		getX: function(e) {
			return this.array[e * this.itemSize]
		},
		setX: function(e, t) {
			return this.array[e * this.itemSize] = t, this
		},
		getY: function(e) {
			return this.array[e * this.itemSize + 1]
		},
		setY: function(e, t) {
			return this.array[e * this.itemSize + 1] = t, this
		},
		getZ: function(e) {
			return this.array[e * this.itemSize + 2]
		},
		setZ: function(e, t) {
			return this.array[e * this.itemSize + 2] = t, this
		},
		getW: function(e) {
			return this.array[e * this.itemSize + 3]
		},
		setW: function(e, t) {
			return this.array[e * this.itemSize + 3] = t, this
		},
		setXY: function(e, t, i) {
			return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this
		},
		setXYZ: function(e, t, i, r) {
			return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this
		},
		setXYZW: function(e, t, i, r, n) {
			return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this.array[e + 3] = n, this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		}
	}, THREE.Int8Attribute = function(e, t) {
		return new THREE.BufferAttribute(new Int8Array(e), t)
	}, THREE.Uint8Attribute = function(e, t) {
		return new THREE.BufferAttribute(new Uint8Array(e), t)
	}, THREE.Uint8ClampedAttribute = function(e, t) {
		return new THREE.BufferAttribute(new Uint8ClampedArray(e), t)
	}, THREE.Int16Attribute = function(e, t) {
		return new THREE.BufferAttribute(new Int16Array(e), t)
	}, THREE.Uint16Attribute = function(e, t) {
		return new THREE.BufferAttribute(new Uint16Array(e), t)
	}, THREE.Int32Attribute = function(e, t) {
		return new THREE.BufferAttribute(new Int32Array(e), t)
	}, THREE.Uint32Attribute = function(e, t) {
		return new THREE.BufferAttribute(new Uint32Array(e), t)
	}, THREE.Float32Attribute = function(e, t) {
		return new THREE.BufferAttribute(new Float32Array(e), t)
	}, THREE.Float64Attribute = function(e, t) {
		return new THREE.BufferAttribute(new Float64Array(e), t)
	}, THREE.DynamicBufferAttribute = function(e, t) {
		return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new THREE.BufferAttribute(e, t).setDynamic(!0)
	}, THREE.InstancedBufferAttribute = function(e, t, i) {
		THREE.BufferAttribute.call(this, e, t), this.meshPerAttribute = i || 1
	}, THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype), THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute, THREE.InstancedBufferAttribute.prototype.copy = function(e) {
		return THREE.BufferAttribute.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
	}, THREE.InterleavedBuffer = function(e, t) {
		this.uuid = THREE.Math.generateUUID(), this.array = e, this.stride = t, this.dynamic = !1, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0
	}, THREE.InterleavedBuffer.prototype = {
		constructor: THREE.InterleavedBuffer,
		get length() {
			return this.array.length
		},
		get count() {
			return this.array.length / this.stride
		},
		set needsUpdate(e) {
			e === !0 && this.version++
		},
		setDynamic: function(e) {
			return this.dynamic = e, this
		},
		copy: function(e) {
			return this.array = new e.array.constructor(e.array), this.stride = e.stride, this.dynamic = e.dynamic, this
		},
		copyAt: function(e, t, i) {
			e *= this.stride, i *= t.stride;
			for(var r = 0, n = this.stride; n > r; r++) this.array[e + r] = t.array[i + r];
			return this
		},
		set: function(e, t) {
			return void 0 === t && (t = 0), this.array.set(e, t), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		}
	}, THREE.InstancedInterleavedBuffer = function(e, t, i) {
		THREE.InterleavedBuffer.call(this, e, t), this.meshPerAttribute = i || 1
	}, THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype), THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer, THREE.InstancedInterleavedBuffer.prototype.copy = function(e) {
		return THREE.InterleavedBuffer.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
	}, THREE.InterleavedBufferAttribute = function(e, t, i, r) {
		this.uuid = THREE.Math.generateUUID(), this.data = e, this.itemSize = t, this.offset = i, this.normalized = r === !0
	}, THREE.InterleavedBufferAttribute.prototype = {
		constructor: THREE.InterleavedBufferAttribute,
		get length() {
			return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
		},
		get count() {
			return this.data.count
		},
		get array() {
			return this.data.array
		},
		setX: function(e, t) {
			return this.data.array[e * this.data.stride + this.offset] = t, this
		},
		setY: function(e, t) {
			return this.data.array[e * this.data.stride + this.offset + 1] = t, this
		},
		setZ: function(e, t) {
			return this.data.array[e * this.data.stride + this.offset + 2] = t, this
		},
		setW: function(e, t) {
			return this.data.array[e * this.data.stride + this.offset + 3] = t, this
		},
		getX: function(e) {
			return this.data.array[e * this.data.stride + this.offset]
		},
		getY: function(e) {
			return this.data.array[e * this.data.stride + this.offset + 1]
		},
		getZ: function(e) {
			return this.data.array[e * this.data.stride + this.offset + 2]
		},
		getW: function(e) {
			return this.data.array[e * this.data.stride + this.offset + 3]
		},
		setXY: function(e, t, i) {
			return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this
		},
		setXYZ: function(e, t, i, r) {
			return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = r, this
		},
		setXYZW: function(e, t, i, r, n) {
			return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = r, this.data.array[e + 3] = n, this
		}
	}, THREE.Geometry = function() {
		Object.defineProperty(this, "id", {
			value: THREE.GeometryIdCount++
		}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
			[]
		], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
	}, Object.assign(THREE.Geometry.prototype, THREE.EventDispatcher.prototype, {
		applyMatrix: function(e) {
			for(var t = (new THREE.Matrix3).getNormalMatrix(e), i = 0, r = this.vertices.length; r > i; i++) {
				var n = this.vertices[i];
				n.applyMatrix4(e)
			}
			for(var i = 0, r = this.faces.length; r > i; i++) {
				var a = this.faces[i];
				a.normal.applyMatrix3(t).normalize();
				for(var o = 0, s = a.vertexNormals.length; s > o; o++) a.vertexNormals[o].applyMatrix3(t).normalize()
			}
			return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
		},
		rotateX: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
			}
		}(),
		rotateY: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
			}
		}(),
		rotateZ: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
			}
		}(),
		translate: function() {
			var e;
			return function(t, i, r) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeTranslation(t, i, r), this.applyMatrix(e), this
			}
		}(),
		scale: function() {
			var e;
			return function(t, i, r) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeScale(t, i, r), this.applyMatrix(e), this
			}
		}(),
		lookAt: function() {
			var e;
			return function(t) {
				void 0 === e && (e = new THREE.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
			}
		}(),
		fromBufferGeometry: function(e) {
			function t(e, t, r, n) {
				var a = void 0 !== o ? [c[e].clone(), c[t].clone(), c[r].clone()] : [],
					d = void 0 !== s ? [i.colors[e].clone(), i.colors[t].clone(), i.colors[r].clone()] : [],
					f = new THREE.Face3(e, t, r, a, d, n);
				i.faces.push(f), void 0 !== l && i.faceVertexUvs[0].push([u[e].clone(), u[t].clone(), u[r].clone()]), void 0 !== h && i.faceVertexUvs[1].push([p[e].clone(), p[t].clone(), p[r].clone()])
			}
			var i = this,
				r = null !== e.index ? e.index.array : void 0,
				n = e.attributes,
				a = n.position.array,
				o = void 0 !== n.normal ? n.normal.array : void 0,
				s = void 0 !== n.color ? n.color.array : void 0,
				l = void 0 !== n.uv ? n.uv.array : void 0,
				h = void 0 !== n.uv2 ? n.uv2.array : void 0;
			void 0 !== h && (this.faceVertexUvs[1] = []);
			for(var c = [], u = [], p = [], d = 0, f = 0; d < a.length; d += 3, f += 2) i.vertices.push(new THREE.Vector3(a[d], a[d + 1], a[d + 2])), void 0 !== o && c.push(new THREE.Vector3(o[d], o[d + 1], o[d + 2])), void 0 !== s && i.colors.push(new THREE.Color(s[d], s[d + 1], s[d + 2])), void 0 !== l && u.push(new THREE.Vector2(l[f], l[f + 1])), void 0 !== h && p.push(new THREE.Vector2(h[f], h[f + 1]));
			if(void 0 !== r) {
				var m = e.groups;
				if(m.length > 0)
					for(var d = 0; d < m.length; d++)
						for(var E = m[d], g = E.start, v = E.count, f = g, T = g + v; T > f; f += 3) t(r[f], r[f + 1], r[f + 2], E.materialIndex);
				else
					for(var d = 0; d < r.length; d += 3) t(r[d], r[d + 1], r[d + 2])
			} else
				for(var d = 0; d < a.length / 3; d += 3) t(d, d + 1, d + 2);
			return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
		},
		center: function() {
			this.computeBoundingBox();
			var e = this.boundingBox.center().negate();
			return this.translate(e.x, e.y, e.z), e
		},
		normalize: function() {
			this.computeBoundingSphere();
			var e = this.boundingSphere.center,
				t = this.boundingSphere.radius,
				i = 0 === t ? 1 : 1 / t,
				r = new THREE.Matrix4;
			return r.set(i, 0, 0, -i * e.x, 0, i, 0, -i * e.y, 0, 0, i, -i * e.z, 0, 0, 0, 1), this.applyMatrix(r), this
		},
		computeFaceNormals: function() {
			for(var e = new THREE.Vector3, t = new THREE.Vector3, i = 0, r = this.faces.length; r > i; i++) {
				var n = this.faces[i],
					a = this.vertices[n.a],
					o = this.vertices[n.b],
					s = this.vertices[n.c];
				e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), n.normal.copy(e)
			}
		},
		computeVertexNormals: function(e) {
			void 0 === e && (e = !0);
			var t, i, r, n, a, o;
			for(o = new Array(this.vertices.length), t = 0, i = this.vertices.length; i > t; t++) o[t] = new THREE.Vector3;
			if(e) {
				var s, l, h, c = new THREE.Vector3,
					u = new THREE.Vector3;
				for(r = 0, n = this.faces.length; n > r; r++) a = this.faces[r], s = this.vertices[a.a], l = this.vertices[a.b], h = this.vertices[a.c], c.subVectors(h, l), u.subVectors(s, l), c.cross(u), o[a.a].add(c), o[a.b].add(c), o[a.c].add(c)
			} else
				for(r = 0, n = this.faces.length; n > r; r++) a = this.faces[r], o[a.a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
			for(t = 0, i = this.vertices.length; i > t; t++) o[t].normalize();
			for(r = 0, n = this.faces.length; n > r; r++) {
				a = this.faces[r];
				var p = a.vertexNormals;
				3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0)
		},
		computeMorphNormals: function() {
			var e, t, i, r, n;
			for(i = 0, r = this.faces.length; r > i; i++)
				for(n = this.faces[i], n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []), e = 0, t = n.vertexNormals.length; t > e; e++) n.__originalVertexNormals[e] ? n.__originalVertexNormals[e].copy(n.vertexNormals[e]) : n.__originalVertexNormals[e] = n.vertexNormals[e].clone();
			var a = new THREE.Geometry;
			for(a.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
				if(!this.morphNormals[e]) {
					this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
					var o, s, l = this.morphNormals[e].faceNormals,
						h = this.morphNormals[e].vertexNormals;
					for(i = 0, r = this.faces.length; r > i; i++) o = new THREE.Vector3, s = {
						a: new THREE.Vector3,
						b: new THREE.Vector3,
						c: new THREE.Vector3
					}, l.push(o), h.push(s)
				}
				var c = this.morphNormals[e];
				a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
				var o, s;
				for(i = 0, r = this.faces.length; r > i; i++) n = this.faces[i], o = c.faceNormals[i], s = c.vertexNormals[i], o.copy(n.normal), s.a.copy(n.vertexNormals[0]), s.b.copy(n.vertexNormals[1]), s.c.copy(n.vertexNormals[2])
			}
			for(i = 0, r = this.faces.length; r > i; i++) n = this.faces[i], n.normal = n.__originalFaceNormal, n.vertexNormals = n.__originalVertexNormals
		},
		computeTangents: function() {
			console.warn("THREE.Geometry: .computeTangents() has been removed.")
		},
		computeLineDistances: function() {
			for(var e = 0, t = this.vertices, i = 0, r = t.length; r > i; i++) i > 0 && (e += t[i].distanceTo(t[i - 1])), this.lineDistances[i] = e
		},
		computeBoundingBox: function() {
			null === this.boundingBox && (this.boundingBox = new THREE.Box3), this.boundingBox.setFromPoints(this.vertices)
		},
		computeBoundingSphere: function() {
			null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere), this.boundingSphere.setFromPoints(this.vertices)
		},
		merge: function(e, t, i) {
			if(e instanceof THREE.Geometry == !1) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
			var r, n = this.vertices.length,
				a = this.vertices,
				o = e.vertices,
				s = this.faces,
				l = e.faces,
				h = this.faceVertexUvs[0],
				c = e.faceVertexUvs[0];
			void 0 === i && (i = 0), void 0 !== t && (r = (new THREE.Matrix3).getNormalMatrix(t));
			for(var u = 0, p = o.length; p > u; u++) {
				var d = o[u],
					f = d.clone();
				void 0 !== t && f.applyMatrix4(t), a.push(f)
			}
			for(u = 0, p = l.length; p > u; u++) {
				var m, E, g, v = l[u],
					T = v.vertexNormals,
					y = v.vertexColors;
				m = new THREE.Face3(v.a + n, v.b + n, v.c + n), m.normal.copy(v.normal), void 0 !== r && m.normal.applyMatrix3(r).normalize();
				for(var _ = 0, R = T.length; R > _; _++) E = T[_].clone(), void 0 !== r && E.applyMatrix3(r).normalize(), m.vertexNormals.push(E);
				m.color.copy(v.color);
				for(var _ = 0, R = y.length; R > _; _++) g = y[_], m.vertexColors.push(g.clone());
				m.materialIndex = v.materialIndex + i, s.push(m)
			}
			for(u = 0, p = c.length; p > u; u++) {
				var x = c[u],
					b = [];
				if(void 0 !== x) {
					for(var _ = 0, R = x.length; R > _; _++) b.push(x[_].clone());
					h.push(b)
				}
			}
		},
		mergeMesh: function(e) {
			return e instanceof THREE.Mesh == !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), void this.merge(e.geometry, e.matrix))
		},
		mergeVertices: function() {
			var e, t, i, r, n, a, o, s, l = {},
				h = [],
				c = [],
				u = 4,
				p = Math.pow(10, u);
			for(i = 0, r = this.vertices.length; r > i; i++) e = this.vertices[i], t = Math.round(e.x * p) + "_" + Math.round(e.y * p) + "_" + Math.round(e.z * p), void 0 === l[t] ? (l[t] = i, h.push(this.vertices[i]), c[i] = h.length - 1) : c[i] = c[l[t]];
			var d = [];
			for(i = 0, r = this.faces.length; r > i; i++) {
				n = this.faces[i], n.a = c[n.a], n.b = c[n.b], n.c = c[n.c], a = [n.a, n.b, n.c];
				for(var f = -1, m = 0; 3 > m; m++)
					if(a[m] === a[(m + 1) % 3]) {
						f = m, d.push(i);
						break
					}
			}
			for(i = d.length - 1; i >= 0; i--) {
				var E = d[i];
				for(this.faces.splice(E, 1), o = 0, s = this.faceVertexUvs.length; s > o; o++) this.faceVertexUvs[o].splice(E, 1)
			}
			var g = this.vertices.length - h.length;
			return this.vertices = h, g
		},
		sortFacesByMaterialIndex: function() {
			function e(e, t) {
				return e.materialIndex - t.materialIndex
			}
			for(var t = this.faces, i = t.length, r = 0; i > r; r++) t[r]._id = r;
			t.sort(e);
			var n, a, o = this.faceVertexUvs[0],
				s = this.faceVertexUvs[1];
			o && o.length === i && (n = []), s && s.length === i && (a = []);
			for(var r = 0; i > r; r++) {
				var l = t[r]._id;
				n && n.push(o[l]), a && a.push(s[l])
			}
			n && (this.faceVertexUvs[0] = n), a && (this.faceVertexUvs[1] = a)
		},
		toJSON: function() {
			function e(e, t, i) {
				return i ? e | 1 << t : e & ~(1 << t)
			}

			function t(e) {
				var t = e.x.toString() + e.y.toString() + e.z.toString();
				return void 0 !== p[t] ? p[t] : (p[t] = u.length / 3, u.push(e.x, e.y, e.z), p[t])
			}

			function i(e) {
				var t = e.r.toString() + e.g.toString() + e.b.toString();
				return void 0 !== f[t] ? f[t] : (f[t] = d.length, d.push(e.getHex()), f[t])
			}

			function r(e) {
				var t = e.x.toString() + e.y.toString();
				return void 0 !== E[t] ? E[t] : (E[t] = m.length / 2, m.push(e.x, e.y), E[t])
			}
			var n = {
				metadata: {
					version: 4.4,
					type: "Geometry",
					generator: "Geometry.toJSON"
				}
			};
			if(n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), void 0 !== this.parameters) {
				var a = this.parameters;
				for(var o in a) void 0 !== a[o] && (n[o] = a[o]);
				return n
			}
			for(var s = [], l = 0; l < this.vertices.length; l++) {
				var h = this.vertices[l];
				s.push(h.x, h.y, h.z)
			}
			for(var c = [], u = [], p = {}, d = [], f = {}, m = [], E = {}, l = 0; l < this.faces.length; l++) {
				var g = this.faces[l],
					v = !0,
					T = !1,
					y = void 0 !== this.faceVertexUvs[0][l],
					_ = g.normal.length() > 0,
					R = g.vertexNormals.length > 0,
					x = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b,
					b = g.vertexColors.length > 0,
					w = 0;
				if(w = e(w, 0, 0), w = e(w, 1, v), w = e(w, 2, T), w = e(w, 3, y), w = e(w, 4, _), w = e(w, 5, R), w = e(w, 6, x), w = e(w, 7, b), c.push(w), c.push(g.a, g.b, g.c), c.push(g.materialIndex), y) {
					var H = this.faceVertexUvs[0][l];
					c.push(r(H[0]), r(H[1]), r(H[2]))
				}
				if(_ && c.push(t(g.normal)), R) {
					var M = g.vertexNormals;
					c.push(t(M[0]), t(M[1]), t(M[2]))
				}
				if(x && c.push(i(g.color)), b) {
					var S = g.vertexColors;
					c.push(i(S[0]), i(S[1]), i(S[2]))
				}
			}
			return n.data = {}, n.data.vertices = s, n.data.normals = u, d.length > 0 && (n.data.colors = d), m.length > 0 && (n.data.uvs = [m]), n.data.faces = c, n
		},
		clone: function() {
			return(new THREE.Geometry).copy(this)
		},
		copy: function(e) {
			this.vertices = [], this.faces = [], this.faceVertexUvs = [
				[]
			];
			for(var t = e.vertices, i = 0, r = t.length; r > i; i++) this.vertices.push(t[i].clone());
			for(var n = e.faces, i = 0, r = n.length; r > i; i++) this.faces.push(n[i].clone());
			for(var i = 0, r = e.faceVertexUvs.length; r > i; i++) {
				var a = e.faceVertexUvs[i];
				void 0 === this.faceVertexUvs[i] && (this.faceVertexUvs[i] = []);
				for(var o = 0, s = a.length; s > o; o++) {
					for(var l = a[o], h = [], c = 0, u = l.length; u > c; c++) {
						var p = l[c];
						h.push(p.clone())
					}
					this.faceVertexUvs[i].push(h)
				}
			}
			return this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), THREE.GeometryIdCount = 0, THREE.DirectGeometry = function() {
		Object.defineProperty(this, "id", {
			value: THREE.GeometryIdCount++
		}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
	}, Object.assign(THREE.DirectGeometry.prototype, THREE.EventDispatcher.prototype, {
		computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
		computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
		computeFaceNormals: function() {
			console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
		},
		computeVertexNormals: function() {
			console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
		},
		computeGroups: function(e) {
			for(var t, i, r = [], n = e.faces, a = 0; a < n.length; a++) {
				var o = n[a];
				o.materialIndex !== i && (i = o.materialIndex, void 0 !== t && (t.count = 3 * a - t.start, r.push(t)), t = {
					start: 3 * a,
					materialIndex: i
				})
			}
			void 0 !== t && (t.count = 3 * a - t.start, r.push(t)), this.groups = r
		},
		fromGeometry: function(e) {
			var t, i = e.faces,
				r = e.vertices,
				n = e.faceVertexUvs,
				a = n[0] && n[0].length > 0,
				o = n[1] && n[1].length > 0,
				s = e.morphTargets,
				l = s.length;
			if(l > 0) {
				t = [];
				for(var h = 0; l > h; h++) t[h] = [];
				this.morphTargets.position = t
			}
			var c, u = e.morphNormals,
				p = u.length;
			if(p > 0) {
				c = [];
				for(var h = 0; p > h; h++) c[h] = [];
				this.morphTargets.normal = c
			}
			for(var d = e.skinIndices, f = e.skinWeights, m = d.length === r.length, E = f.length === r.length, h = 0; h < i.length; h++) {
				var g = i[h];
				this.vertices.push(r[g.a], r[g.b], r[g.c]);
				var v = g.vertexNormals;
				if(3 === v.length) this.normals.push(v[0], v[1], v[2]);
				else {
					var T = g.normal;
					this.normals.push(T, T, T)
				}
				var y = g.vertexColors;
				if(3 === y.length) this.colors.push(y[0], y[1], y[2]);
				else {
					var _ = g.color;
					this.colors.push(_, _, _)
				}
				if(a === !0) {
					var R = n[0][h];
					void 0 !== R ? this.uvs.push(R[0], R[1], R[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))
				}
				if(o === !0) {
					var R = n[1][h];
					void 0 !== R ? this.uvs2.push(R[0], R[1], R[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))
				}
				for(var x = 0; l > x; x++) {
					var b = s[x].vertices;
					t[x].push(b[g.a], b[g.b], b[g.c])
				}
				for(var x = 0; p > x; x++) {
					var w = u[x].vertexNormals[h];
					c[x].push(w.a, w.b, w.c)
				}
				m && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), E && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
			}
			return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), THREE.BufferGeometry = function() {
		Object.defineProperty(this, "id", {
			value: THREE.GeometryIdCount++
		}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: 1 / 0
		}
	}, Object.assign(THREE.BufferGeometry.prototype, THREE.EventDispatcher.prototype, {
		getIndex: function() {
			return this.index
		},
		setIndex: function(e) {
			this.index = e
		},
		addAttribute: function(e, t) {
			return t instanceof THREE.BufferAttribute == !1 && t instanceof THREE.InterleavedBufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(e, new THREE.BufferAttribute(arguments[1], arguments[2]))) : "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(t)) : (this.attributes[e] = t, this)
		},
		getAttribute: function(e) {
			return this.attributes[e]
		},
		removeAttribute: function(e) {
			return delete this.attributes[e], this
		},
		addGroup: function(e, t, i) {
			this.groups.push({
				start: e,
				count: t,
				materialIndex: void 0 !== i ? i : 0
			})
		},
		clearGroups: function() {
			this.groups = []
		},
		setDrawRange: function(e, t) {
			this.drawRange.start = e, this.drawRange.count = t
		},
		applyMatrix: function(e) {
			var t = this.attributes.position;
			void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0);
			var i = this.attributes.normal;
			if(void 0 !== i) {
				var r = (new THREE.Matrix3).getNormalMatrix(e);
				r.applyToVector3Array(i.array), i.needsUpdate = !0
			}
			return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
		},
		rotateX: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
			}
		}(),
		rotateY: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
			}
		}(),
		rotateZ: function() {
			var e;
			return function(t) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
			}
		}(),
		translate: function() {
			var e;
			return function(t, i, r) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeTranslation(t, i, r), this.applyMatrix(e), this
			}
		}(),
		scale: function() {
			var e;
			return function(t, i, r) {
				return void 0 === e && (e = new THREE.Matrix4), e.makeScale(t, i, r), this.applyMatrix(e), this
			}
		}(),
		lookAt: function() {
			var e;
			return function(t) {
				void 0 === e && (e = new THREE.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
			}
		}(),
		center: function() {
			this.computeBoundingBox();
			var e = this.boundingBox.center().negate();
			return this.translate(e.x, e.y, e.z), e
		},
		setFromObject: function(e) {
			var t = e.geometry;
			if(e instanceof THREE.Points || e instanceof THREE.Line) {
				var i = new THREE.Float32Attribute(3 * t.vertices.length, 3),
					r = new THREE.Float32Attribute(3 * t.colors.length, 3);
				if(this.addAttribute("position", i.copyVector3sArray(t.vertices)), this.addAttribute("color", r.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
					var n = new THREE.Float32Attribute(t.lineDistances.length, 1);
					this.addAttribute("lineDistance", n.copyArray(t.lineDistances))
				}
				null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
			} else e instanceof THREE.Mesh && t instanceof THREE.Geometry && this.fromGeometry(t);
			return this
		},
		updateFromObject: function(e) {
			var t = e.geometry;
			if(e instanceof THREE.Mesh) {
				var i = t.__directGeometry;
				if(void 0 === i || t.elementsNeedUpdate === !0) return this.fromGeometry(t);
				i.verticesNeedUpdate = t.verticesNeedUpdate || t.elementsNeedUpdate, i.normalsNeedUpdate = t.normalsNeedUpdate || t.elementsNeedUpdate, i.colorsNeedUpdate = t.colorsNeedUpdate || t.elementsNeedUpdate, i.uvsNeedUpdate = t.uvsNeedUpdate || t.elementsNeedUpdate, i.groupsNeedUpdate = t.groupsNeedUpdate || t.elementsNeedUpdate, t.elementsNeedUpdate = !1, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = i
			}
			var r;
			return t.verticesNeedUpdate === !0 && (r = this.attributes.position, void 0 !== r && (r.copyVector3sArray(t.vertices), r.needsUpdate = !0), t.verticesNeedUpdate = !1), t.normalsNeedUpdate === !0 && (r = this.attributes.normal, void 0 !== r && (r.copyVector3sArray(t.normals), r.needsUpdate = !0), t.normalsNeedUpdate = !1), t.colorsNeedUpdate === !0 && (r = this.attributes.color, void 0 !== r && (r.copyColorsArray(t.colors), r.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (r = this.attributes.uv, void 0 !== r && (r.copyVector2sArray(t.uvs), r.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (r = this.attributes.lineDistance, void 0 !== r && (r.copyArray(t.lineDistances), r.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
		},
		fromGeometry: function(e) {
			return e.__directGeometry = (new THREE.DirectGeometry).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
		},
		fromDirectGeometry: function(e) {
			var t = new Float32Array(3 * e.vertices.length);
			if(this.addAttribute("position", new THREE.BufferAttribute(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
				var i = new Float32Array(3 * e.normals.length);
				this.addAttribute("normal", new THREE.BufferAttribute(i, 3).copyVector3sArray(e.normals))
			}
			if(e.colors.length > 0) {
				var r = new Float32Array(3 * e.colors.length);
				this.addAttribute("color", new THREE.BufferAttribute(r, 3).copyColorsArray(e.colors))
			}
			if(e.uvs.length > 0) {
				var n = new Float32Array(2 * e.uvs.length);
				this.addAttribute("uv", new THREE.BufferAttribute(n, 2).copyVector2sArray(e.uvs))
			}
			if(e.uvs2.length > 0) {
				var a = new Float32Array(2 * e.uvs2.length);
				this.addAttribute("uv2", new THREE.BufferAttribute(a, 2).copyVector2sArray(e.uvs2))
			}
			if(e.indices.length > 0) {
				var o = e.vertices.length > 65535 ? Uint32Array : Uint16Array,
					s = new o(3 * e.indices.length);
				this.setIndex(new THREE.BufferAttribute(s, 1).copyIndicesArray(e.indices))
			}
			this.groups = e.groups;
			for(var l in e.morphTargets) {
				for(var h = [], c = e.morphTargets[l], u = 0, p = c.length; p > u; u++) {
					var d = c[u],
						f = new THREE.Float32Attribute(3 * d.length, 3);
					h.push(f.copyVector3sArray(d))
				}
				this.morphAttributes[l] = h
			}
			if(e.skinIndices.length > 0) {
				var m = new THREE.Float32Attribute(4 * e.skinIndices.length, 4);
				this.addAttribute("skinIndex", m.copyVector4sArray(e.skinIndices))
			}
			if(e.skinWeights.length > 0) {
				var E = new THREE.Float32Attribute(4 * e.skinWeights.length, 4);
				this.addAttribute("skinWeight", E.copyVector4sArray(e.skinWeights))
			}
			return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
		},
		computeBoundingBox: function() {
			null === this.boundingBox && (this.boundingBox = new THREE.Box3);
			var e = this.attributes.position.array;
			void 0 !== e ? this.boundingBox.setFromArray(e) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
		},
		computeBoundingSphere: function() {
			var e = new THREE.Box3,
				t = new THREE.Vector3;
			return function() {
				null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
				var i = this.attributes.position;
				if(i) {
					var r = i.array,
						n = this.boundingSphere.center;
					e.setFromArray(r), e.center(n);
					for(var a = 0, o = 0, s = r.length; s > o; o += 3) t.fromArray(r, o), a = Math.max(a, n.distanceToSquared(t));
					this.boundingSphere.radius = Math.sqrt(a), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
				}
			}
		}(),
		computeFaceNormals: function() {},
		computeVertexNormals: function() {
			var e = this.index,
				t = this.attributes,
				i = this.groups;
			if(t.position) {
				var r = t.position.array;
				if(void 0 === t.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(r.length), 3));
				else
					for(var n = t.normal.array, a = 0, o = n.length; o > a; a++) n[a] = 0;
				var s, l, h, c = t.normal.array,
					u = new THREE.Vector3,
					p = new THREE.Vector3,
					d = new THREE.Vector3,
					f = new THREE.Vector3,
					m = new THREE.Vector3;
				if(e) {
					var E = e.array;
					0 === i.length && this.addGroup(0, E.length);
					for(var g = 0, v = i.length; v > g; ++g)
						for(var T = i[g], y = T.start, _ = T.count, a = y, o = y + _; o > a; a += 3) s = 3 * E[a + 0], l = 3 * E[a + 1], h = 3 * E[a + 2], u.fromArray(r, s), p.fromArray(r, l), d.fromArray(r, h), f.subVectors(d, p), m.subVectors(u, p), f.cross(m), c[s] += f.x, c[s + 1] += f.y, c[s + 2] += f.z, c[l] += f.x, c[l + 1] += f.y, c[l + 2] += f.z, c[h] += f.x, c[h + 1] += f.y, c[h + 2] += f.z
				} else
					for(var a = 0, o = r.length; o > a; a += 9) u.fromArray(r, a), p.fromArray(r, a + 3), d.fromArray(r, a + 6), f.subVectors(d, p), m.subVectors(u, p), f.cross(m), c[a] = f.x, c[a + 1] = f.y, c[a + 2] = f.z, c[a + 3] = f.x, c[a + 4] = f.y, c[a + 5] = f.z, c[a + 6] = f.x, c[a + 7] = f.y, c[a + 8] = f.z;
				this.normalizeNormals(), t.normal.needsUpdate = !0
			}
		},
		merge: function(e, t) {
			if(e instanceof THREE.BufferGeometry == !1) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
			void 0 === t && (t = 0);
			var i = this.attributes;
			for(var r in i)
				if(void 0 !== e.attributes[r])
					for(var n = i[r], a = n.array, o = e.attributes[r], s = o.array, l = o.itemSize, h = 0, c = l * t; h < s.length; h++, c++) a[c] = s[h];
			return this
		},
		normalizeNormals: function() {
			for(var e, t, i, r, n = this.attributes.normal.array, a = 0, o = n.length; o > a; a += 3) e = n[a], t = n[a + 1], i = n[a + 2], r = 1 / Math.sqrt(e * e + t * t + i * i), n[a] *= r, n[a + 1] *= r, n[a + 2] *= r
		},
		toNonIndexed: function() {
			if(null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
			var e = new THREE.BufferGeometry,
				t = this.index.array,
				i = this.attributes;
			for(var r in i) {
				for(var n = i[r], a = n.array, o = n.itemSize, s = new a.constructor(t.length * o), l = 0, h = 0, c = 0, u = t.length; u > c; c++) {
					l = t[c] * o;
					for(var p = 0; o > p; p++) s[h++] = a[l++]
				}
				e.addAttribute(r, new THREE.BufferAttribute(s, o))
			}
			return e
		},
		toJSON: function() {
			var e = {
				metadata: {
					version: 4.4,
					type: "BufferGeometry",
					generator: "BufferGeometry.toJSON"
				}
			};
			if(e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
				var t = this.parameters;
				for(var i in t) void 0 !== t[i] && (e[i] = t[i]);
				return e
			}
			e.data = {
				attributes: {}
			};
			var r = this.index;
			if(null !== r) {
				var n = Array.prototype.slice.call(r.array);
				e.data.index = {
					type: r.array.constructor.name,
					array: n
				}
			}
			var a = this.attributes;
			for(var i in a) {
				var o = a[i],
					n = Array.prototype.slice.call(o.array);
				e.data.attributes[i] = {
					itemSize: o.itemSize,
					type: o.array.constructor.name,
					array: n,
					normalized: o.normalized
				}
			}
			var s = this.groups;
			s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
			var l = this.boundingSphere;
			return null !== l && (e.data.boundingSphere = {
				center: l.center.toArray(),
				radius: l.radius
			}), e
		},
		clone: function() {
			return(new THREE.BufferGeometry).copy(this)
		},
		copy: function(e) {
			var t = e.index;
			null !== t && this.setIndex(t.clone());
			var i = e.attributes;
			for(var r in i) {
				var n = i[r];
				this.addAttribute(r, n.clone())
			}
			for(var a = e.groups, o = 0, s = a.length; s > o; o++) {
				var l = a[o];
				this.addGroup(l.start, l.count, l.materialIndex)
			}
			return this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), THREE.BufferGeometry.MaxIndex = 65535, THREE.InstancedBufferGeometry = function() {
		THREE.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
	}, THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry, THREE.InstancedBufferGeometry.prototype.addGroup = function(e, t, i) {
		this.groups.push({
			start: e,
			count: t,
			instances: i
		})
	}, THREE.InstancedBufferGeometry.prototype.copy = function(e) {
		var t = e.index;
		null !== t && this.setIndex(t.clone());
		var i = e.attributes;
		for(var r in i) {
			var n = i[r];
			this.addAttribute(r, n.clone())
		}
		for(var a = e.groups, o = 0, s = a.length; s > o; o++) {
			var l = a[o];
			this.addGroup(l.start, l.count, l.instances)
		}
		return this
	}, THREE.Uniform = function(e) {
		"string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e, this.dynamic = !1
	}, THREE.Uniform.prototype = {
		constructor: THREE.Uniform,
		onUpdate: function(e) {
			return this.dynamic = !0, this.onUpdateCallback = e, this
		}
	}, THREE.AnimationAction = function() {
		throw new Error("THREE.AnimationAction: Use mixer.clipAction for construction.")
	}, THREE.AnimationAction._new = function(e, t, i) {
		this._mixer = e, this._clip = t, this._localRoot = i || null;
		for(var r = t.tracks, n = r.length, a = new Array(n), o = {
				endingStart: THREE.ZeroCurvatureEnding,
				endingEnd: THREE.ZeroCurvatureEnding
			}, s = 0; s !== n; ++s) {
			var l = r[s].createInterpolant(null);
			a[s] = l, l.settings = o
		}
		this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(n), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = THREE.LoopRepeat, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
	}, THREE.AnimationAction._new.prototype = {
		constructor: THREE.AnimationAction._new,
		play: function() {
			return this._mixer._activateAction(this), this
		},
		stop: function() {
			return this._mixer._deactivateAction(this), this.reset()
		},
		reset: function() {
			return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
		},
		isRunning: function() {
			this._startTime;
			return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
		},
		isScheduled: function() {
			return this._mixer._isActiveAction(this)
		},
		startAt: function(e) {
			return this._startTime = e, this
		},
		setLoop: function(e, t) {
			return this.loop = e, this.repetitions = t, this
		},
		setEffectiveWeight: function(e) {
			return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
		},
		getEffectiveWeight: function() {
			return this._effectiveWeight
		},
		fadeIn: function(e) {
			return this._scheduleFading(e, 0, 1)
		},
		fadeOut: function(e) {
			return this._scheduleFading(e, 1, 0)
		},
		crossFadeFrom: function(e, t, i) {
			this._mixer;
			if(e.fadeOut(t), this.fadeIn(t), i) {
				var r = this._clip.duration,
					n = e._clip.duration,
					a = n / r,
					o = r / n;
				e.warp(1, a, t), this.warp(o, 1, t)
			}
			return this
		},
		crossFadeTo: function(e, t, i) {
			return e.crossFadeFrom(this, t, i)
		},
		stopFading: function() {
			var e = this._weightInterpolant;
			return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
		},
		setEffectiveTimeScale: function(e) {
			return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
		},
		getEffectiveTimeScale: function() {
			return this._effectiveTimeScale
		},
		setDuration: function(e) {
			return this.timeScale = this._clip.duration / e, this.stopWarping()
		},
		syncWith: function(e) {
			return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
		},
		halt: function(e) {
			return this.warp(this._effectiveTimeScale, 0, e)
		},
		warp: function(e, t, i) {
			var r = this._mixer,
				n = r.time,
				a = this._timeScaleInterpolant,
				o = this.timeScale;
			null === a && (a = r._lendControlInterpolant(), this._timeScaleInterpolant = a);
			var s = a.parameterPositions,
				l = a.sampleValues;
			return s[0] = n, s[1] = n + i, l[0] = e / o, l[1] = t / o, this
		},
		stopWarping: function() {
			var e = this._timeScaleInterpolant;
			return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
		},
		getMixer: function() {
			return this._mixer
		},
		getClip: function() {
			return this._clip
		},
		getRoot: function() {
			return this._localRoot || this._mixer._root
		},
		_update: function(e, t, i, r) {
			var n = this._startTime;
			if(null !== n) {
				var a = (e - n) * i;
				if(0 > a || 0 === i) return;
				this._startTime = null, t = i * a
			}
			t *= this._updateTimeScale(e);
			var o = this._updateTime(t),
				s = this._updateWeight(e);
			if(s > 0)
				for(var l = this._interpolants, h = this._propertyBindings, c = 0, u = l.length; c !== u; ++c) l[c].evaluate(o), h[c].accumulate(r, s)
		},
		_updateWeight: function(e) {
			var t = 0;
			if(this.enabled) {
				t = this.weight;
				var i = this._weightInterpolant;
				if(null !== i) {
					var r = i.evaluate(e)[0];
					t *= r, e > i.parameterPositions[1] && (this.stopFading(), 0 === r && (this.enabled = !1))
				}
			}
			return this._effectiveWeight = t, t
		},
		_updateTimeScale: function(e) {
			var t = 0;
			if(!this.paused) {
				t = this.timeScale;
				var i = this._timeScaleInterpolant;
				if(null !== i) {
					var r = i.evaluate(e)[0];
					t *= r, e > i.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
				}
			}
			return this._effectiveTimeScale = t, t
		},
		_updateTime: function(e) {
			var t = this.time + e;
			if(0 === e) return t;
			var i = this._clip.duration,
				r = this.loop,
				n = this._loopCount;
			if(r === THREE.LoopOnce) {
				-1 === n && (this.loopCount = 0, this._setEndings(!0, !0, !1));
				e: {
					if(t >= i) t = i;
					else {
						if(!(0 > t)) break e;
						t = 0
					}
					this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
					this._mixer.dispatchEvent({
						type: "finished",
						action: this,
						direction: 0 > e ? -1 : 1
					})
				}
			} else {
				var a = r === THREE.LoopPingPong;
				if(-1 === n && (e >= 0 ? (n = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), t >= i || 0 > t) {
					var o = Math.floor(t / i);
					t -= i * o, n += Math.abs(o);
					var s = this.repetitions - n;
					if(0 > s) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? i : 0, this._mixer.dispatchEvent({
						type: "finished",
						action: this,
						direction: e > 0 ? 1 : -1
					});
					else {
						if(0 === s) {
							var l = 0 > e;
							this._setEndings(l, !l, a)
						} else this._setEndings(!1, !1, a);
						this._loopCount = n, this._mixer.dispatchEvent({
							type: "loop",
							action: this,
							loopDelta: o
						})
					}
				}
				if(a && 1 === (1 & n)) return this.time = t, i - t
			}
			return this.time = t, t
		},
		_setEndings: function(e, t, i) {
			var r = this._interpolantSettings;
			i ? (r.endingStart = THREE.ZeroSlopeEnding, r.endingEnd = THREE.ZeroSlopeEnding) : (r.endingStart = e ? this.zeroSlopeAtStart ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding, r.endingEnd = t ? this.zeroSlopeAtEnd ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding)
		},
		_scheduleFading: function(e, t, i) {
			var r = this._mixer,
				n = r.time,
				a = this._weightInterpolant;
			null === a && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
			var o = a.parameterPositions,
				s = a.sampleValues;
			return o[0] = n, s[0] = t, o[1] = n + e, s[1] = i, this
		}
	}, THREE.AnimationClip = function(e, t, i) {
		this.name = e, this.tracks = i, this.duration = void 0 !== t ? t : -1, this.uuid = THREE.Math.generateUUID(), this.duration < 0 && this.resetDuration(), this.trim(), this.optimize()
	}, THREE.AnimationClip.prototype = {
		constructor: THREE.AnimationClip,
		resetDuration: function() {
			for(var e = this.tracks, t = 0, i = 0, r = e.length; i !== r; ++i) {
				var n = this.tracks[i];
				t = Math.max(t, n.times[n.times.length - 1])
			}
			this.duration = t
		},
		trim: function() {
			for(var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
			return this
		},
		optimize: function() {
			for(var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
			return this
		}
	}, Object.assign(THREE.AnimationClip, {
		parse: function(e) {
			for(var t = [], i = e.tracks, r = 1 / (e.fps || 1), n = 0, a = i.length; n !== a; ++n) t.push(THREE.KeyframeTrack.parse(i[n]).scale(r));
			return new THREE.AnimationClip(e.name, e.duration, t)
		},
		toJSON: function(e) {
			for(var t = [], i = e.tracks, r = {
					name: e.name,
					duration: e.duration,
					tracks: t
				}, n = 0, a = i.length; n !== a; ++n) t.push(THREE.KeyframeTrack.toJSON(i[n]));
			return r
		},
		CreateFromMorphTargetSequence: function(e, t, i, r) {
			for(var n = t.length, a = [], o = 0; n > o; o++) {
				var s = [],
					l = [];
				s.push((o + n - 1) % n, o, (o + 1) % n), l.push(0, 1, 0);
				var h = THREE.AnimationUtils.getKeyframeOrder(s);
				s = THREE.AnimationUtils.sortedArray(s, 1, h), l = THREE.AnimationUtils.sortedArray(l, 1, h), r || 0 !== s[0] || (s.push(n), l.push(l[0])), a.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + t[o].name + "]", s, l).scale(1 / i))
			}
			return new THREE.AnimationClip(e, -1, a)
		},
		findByName: function(e, t) {
			var i = e;
			if(!Array.isArray(e)) {
				var r = e;
				i = r.geometry && r.geometry.animations || r.animations
			}
			for(var n = 0; n < i.length; n++)
				if(i[n].name === t) return i[n];
			return null
		},
		CreateClipsFromMorphTargetSequences: function(e, t, i) {
			for(var r = {}, n = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; o > a; a++) {
				var s = e[a],
					l = s.name.match(n);
				if(l && l.length > 1) {
					var h = l[1],
						c = r[h];
					c || (r[h] = c = []), c.push(s)
				}
			}
			var u = [];
			for(var h in r) u.push(THREE.AnimationClip.CreateFromMorphTargetSequence(h, r[h], t, i));
			return u
		},
		parseAnimation: function(e, t) {
			if(!e) return console.error("  no animation in JSONLoader data"), null;
			for(var i = function(e, t, i, r, n) {
					if(0 !== i.length) {
						var a = [],
							o = [];
						THREE.AnimationUtils.flattenJSON(i, a, o, r), 0 !== a.length && n.push(new e(t, a, o))
					}
				}, r = [], n = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.hierarchy || [], l = 0; l < s.length; l++) {
				var h = s[l].keys;
				if(h && 0 !== h.length)
					if(h[0].morphTargets) {
						for(var c = {}, u = 0; u < h.length; u++)
							if(h[u].morphTargets)
								for(var p = 0; p < h[u].morphTargets.length; p++) c[h[u].morphTargets[p]] = -1;
						for(var d in c) {
							for(var f = [], m = [], p = 0; p !== h[u].morphTargets.length; ++p) {
								var E = h[u];
								f.push(E.time), m.push(E.morphTarget === d ? 1 : 0)
							}
							r.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence[" + d + "]", f, m))
						}
						a = c.length * (o || 1)
					} else {
						var g = ".bones[" + t[l].name + "]";
						i(THREE.VectorKeyframeTrack, g + ".position", h, "pos", r), i(THREE.QuaternionKeyframeTrack, g + ".quaternion", h, "rot", r), i(THREE.VectorKeyframeTrack, g + ".scale", h, "scl", r)
					}
			}
			if(0 === r.length) return null;
			var v = new THREE.AnimationClip(n, a, r);
			return v
		}
	}), THREE.AnimationMixer = function(e) {
		this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
	}, Object.assign(THREE.AnimationMixer.prototype, THREE.EventDispatcher.prototype, {
		clipAction: function(e, t) {
			var i = t || this._root,
				r = i.uuid,
				n = "string" == typeof e ? THREE.AnimationClip.findByName(i, e) : e,
				a = null !== n ? n.uuid : e,
				o = this._actionsByClip[a],
				s = null;
			if(void 0 !== o) {
				var l = o.actionByRoot[r];
				if(void 0 !== l) return l;
				s = o.knownActions[0], null === n && (n = s._clip)
			}
			if(null === n) return null;
			var h = new THREE.AnimationMixer._Action(this, n, t);
			return this._bindAction(h, s), this._addInactiveAction(h, a, r), h
		},
		existingAction: function(e, t) {
			var i = t || this._root,
				r = i.uuid,
				n = "string" == typeof e ? THREE.AnimationClip.findByName(i, e) : e,
				a = n ? n.uuid : e,
				o = this._actionsByClip[a];
			return void 0 !== o ? o.actionByRoot[r] || null : null
		},
		stopAllAction: function() {
			var e = this._actions,
				t = this._nActiveActions,
				i = this._bindings,
				r = this._nActiveBindings;
			this._nActiveActions = 0, this._nActiveBindings = 0;
			for(var n = 0; n !== t; ++n) e[n].reset();
			for(var n = 0; n !== r; ++n) i[n].useCount = 0;
			return this
		},
		update: function(e) {
			e *= this.timeScale;
			for(var t = this._actions, i = this._nActiveActions, r = this.time += e, n = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
				var s = t[o];
				s.enabled && s._update(r, e, n, a)
			}
			for(var l = this._bindings, h = this._nActiveBindings, o = 0; o !== h; ++o) l[o].apply(a);
			return this
		},
		getRoot: function() {
			return this._root
		},
		uncacheClip: function(e) {
			var t = this._actions,
				i = e.uuid,
				r = this._actionsByClip,
				n = r[i];
			if(void 0 !== n) {
				for(var a = n.knownActions, o = 0, s = a.length; o !== s; ++o) {
					var l = a[o];
					this._deactivateAction(l);
					var h = l._cacheIndex,
						c = t[t.length - 1];
					l._cacheIndex = null, l._byClipCacheIndex = null, c._cacheIndex = h, t[h] = c, t.pop(), this._removeInactiveBindingsForAction(l)
				}
				delete r[i]
			}
		},
		uncacheRoot: function(e) {
			var t = e.uuid,
				i = this._actionsByClip;
			for(var r in i) {
				var n = i[r].actionByRoot,
					a = n[t];
				void 0 !== a && (this._deactivateAction(a), this._removeInactiveAction(a))
			}
			var o = this._bindingsByRootAndName,
				s = o[t];
			if(void 0 !== s)
				for(var l in s) {
					var h = s[l];
					h.restoreOriginalState(), this._removeInactiveBinding(h)
				}
		},
		uncacheAction: function(e, t) {
			var i = this.existingAction(e, t);
			null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
		}
	}), THREE.AnimationMixer._Action = THREE.AnimationAction._new, Object.assign(THREE.AnimationMixer.prototype, {
		_bindAction: function(e, t) {
			var i = e._localRoot || this._root,
				r = e._clip.tracks,
				n = r.length,
				a = e._propertyBindings,
				o = e._interpolants,
				s = i.uuid,
				l = this._bindingsByRootAndName,
				h = l[s];
			void 0 === h && (h = {}, l[s] = h);
			for(var c = 0; c !== n; ++c) {
				var u = r[c],
					p = u.name,
					d = h[p];
				if(void 0 !== d) a[c] = d;
				else {
					if(d = a[c], void 0 !== d) {
						null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
						continue
					}
					var f = t && t._propertyBindings[c].binding.parsedPath;
					d = new THREE.PropertyMixer(THREE.PropertyBinding.create(i, p, f), u.ValueTypeName, u.getValueSize()), ++d.referenceCount, this._addInactiveBinding(d, s, p), a[c] = d
				}
				o[c].resultBuffer = d.buffer
			}
		},
		_activateAction: function(e) {
			if(!this._isActiveAction(e)) {
				if(null === e._cacheIndex) {
					var t = (e._localRoot || this._root).uuid,
						i = e._clip.uuid,
						r = this._actionsByClip[i];
					this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, i, t)
				}
				for(var n = e._propertyBindings, a = 0, o = n.length; a !== o; ++a) {
					var s = n[a];
					0 === s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
				}
				this._lendAction(e)
			}
		},
		_deactivateAction: function(e) {
			if(this._isActiveAction(e)) {
				for(var t = e._propertyBindings, i = 0, r = t.length; i !== r; ++i) {
					var n = t[i];
					0 === --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n))
				}
				this._takeBackAction(e)
			}
		},
		_initMemoryManager: function() {
			this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
			var e = this;
			this.stats = {
				actions: {get total() {
						return e._actions.length
					},
					get inUse() {
						return e._nActiveActions
					}
				},
				bindings: {get total() {
						return e._bindings.length
					},
					get inUse() {
						return e._nActiveBindings
					}
				},
				controlInterpolants: {get total() {
						return e._controlInterpolants.length
					},
					get inUse() {
						return e._nActiveControlInterpolants
					}
				}
			}
		},
		_isActiveAction: function(e) {
			var t = e._cacheIndex;
			return null !== t && t < this._nActiveActions
		},
		_addInactiveAction: function(e, t, i) {
			var r = this._actions,
				n = this._actionsByClip,
				a = n[t];
			if(void 0 === a) a = {
				knownActions: [e],
				actionByRoot: {}
			}, e._byClipCacheIndex = 0, n[t] = a;
			else {
				var o = a.knownActions;
				e._byClipCacheIndex = o.length, o.push(e)
			}
			e._cacheIndex = r.length, r.push(e), a.actionByRoot[i] = e
		},
		_removeInactiveAction: function(e) {
			var t = this._actions,
				i = t[t.length - 1],
				r = e._cacheIndex;
			i._cacheIndex = r, t[r] = i, t.pop(), e._cacheIndex = null;
			var n = e._clip.uuid,
				a = this._actionsByClip,
				o = a[n],
				s = o.knownActions,
				l = s[s.length - 1],
				h = e._byClipCacheIndex;
			l._byClipCacheIndex = h, s[h] = l, s.pop(), e._byClipCacheIndex = null;
			var c = o.actionByRoot,
				u = (t._localRoot || this._root).uuid;
			delete c[u], 0 === s.length && delete a[n], this._removeInactiveBindingsForAction(e)
		},
		_removeInactiveBindingsForAction: function(e) {
			for(var t = e._propertyBindings, i = 0, r = t.length; i !== r; ++i) {
				var n = t[i];
				0 === --n.referenceCount && this._removeInactiveBinding(n)
			}
		},
		_lendAction: function(e) {
			var t = this._actions,
				i = e._cacheIndex,
				r = this._nActiveActions++,
				n = t[r];
			e._cacheIndex = r, t[r] = e, n._cacheIndex = i, t[i] = n
		},
		_takeBackAction: function(e) {
			var t = this._actions,
				i = e._cacheIndex,
				r = --this._nActiveActions,
				n = t[r];
			e._cacheIndex = r, t[r] = e, n._cacheIndex = i, t[i] = n
		},
		_addInactiveBinding: function(e, t, i) {
			var r = this._bindingsByRootAndName,
				n = r[t],
				a = this._bindings;
			void 0 === n && (n = {}, r[t] = n), n[i] = e, e._cacheIndex = a.length, a.push(e)
		},
		_removeInactiveBinding: function(e) {
			var t = this._bindings,
				i = e.binding,
				r = i.rootNode.uuid,
				n = i.path,
				a = this._bindingsByRootAndName,
				o = a[r],
				s = t[t.length - 1],
				l = e._cacheIndex;
			s._cacheIndex = l, t[l] = s, t.pop(), delete o[n];
			e: {
				for(var h in o) break e;delete a[r]
			}
		},
		_lendBinding: function(e) {
			var t = this._bindings,
				i = e._cacheIndex,
				r = this._nActiveBindings++,
				n = t[r];
			e._cacheIndex = r, t[r] = e, n._cacheIndex = i, t[i] = n
		},
		_takeBackBinding: function(e) {
			var t = this._bindings,
				i = e._cacheIndex,
				r = --this._nActiveBindings,
				n = t[r];
			e._cacheIndex = r, t[r] = e, n._cacheIndex = i, t[i] = n
		},
		_lendControlInterpolant: function() {
			var e = this._controlInterpolants,
				t = this._nActiveControlInterpolants++,
				i = e[t];
			return void 0 === i && (i = new THREE.LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), i.__cacheIndex = t, e[t] = i), i
		},
		_takeBackControlInterpolant: function(e) {
			var t = this._controlInterpolants,
				i = e.__cacheIndex,
				r = --this._nActiveControlInterpolants,
				n = t[r];
			e.__cacheIndex = r, t[r] = e, n.__cacheIndex = i, t[i] = n
		},
		_controlInterpolantsResultBuffer: new Float32Array(1)
	}), THREE.AnimationObjectGroup = function() {
		this.uuid = THREE.Math.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
		var e = {};
		this._indicesByUUID = e;
		for(var t = 0, i = arguments.length; t !== i; ++t) e[arguments[t].uuid] = t;
		this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
		var r = this;
		this.stats = {
			objects: {get total() {
					return r._objects.length
				},
				get inUse() {
					return this.total - r.nCachedObjects_
				}
			},
			get bindingsPerObject() {
				return r._bindings.length
			}
		}
	}, THREE.AnimationObjectGroup.prototype = {
		constructor: THREE.AnimationObjectGroup,
		add: function() {
			for(var e = this._objects, t = e.length, i = this.nCachedObjects_, r = this._indicesByUUID, n = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, l = 0, h = arguments.length; l !== h; ++l) {
				var c = arguments[l],
					u = c.uuid,
					p = r[u];
				if(void 0 === p) {
					p = t++, r[u] = p, e.push(c);
					for(var d = 0, f = s; d !== f; ++d) o[d].push(new THREE.PropertyBinding(c, n[d], a[d]))
				} else if(i > p) {
					var m = e[p],
						E = --i,
						g = e[E];
					r[g.uuid] = p, e[p] = g, r[u] = E, e[E] = c;
					for(var d = 0, f = s; d !== f; ++d) {
						var v = o[d],
							T = v[E],
							y = v[p];
						v[p] = T, void 0 === y && (y = new THREE.PropertyBinding(c, n[d], a[d])), v[E] = y
					}
				} else e[p] !== m && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
			}
			this.nCachedObjects_ = i
		},
		remove: function() {
			for(var e = this._objects, t = (e.length, this.nCachedObjects_), i = this._indicesByUUID, r = this._bindings, n = r.length, a = 0, o = arguments.length; a !== o; ++a) {
				var s = arguments[a],
					l = s.uuid,
					h = i[l];
				if(void 0 !== h && h >= t) {
					var c = t++,
						u = e[c];
					i[u.uuid] = h, e[h] = u, i[l] = c, e[c] = s;
					for(var p = 0, d = n; p !== d; ++p) {
						var f = r[p],
							m = f[c],
							E = f[h];
						f[h] = m, f[c] = E
					}
				}
			}
			this.nCachedObjects_ = t
		},
		uncache: function() {
			for(var e = this._objects, t = e.length, i = this.nCachedObjects_, r = this._indicesByUUID, n = this._bindings, a = n.length, o = 0, s = arguments.length; o !== s; ++o) {
				var l = arguments[o],
					h = l.uuid,
					c = r[h];
				if(void 0 !== c)
					if(delete r[h], i > c) {
						var u = --i,
							p = e[u],
							d = --t,
							f = e[d];
						r[p.uuid] = c, e[c] = p, r[f.uuid] = u, e[u] = f, e.pop();
						for(var m = 0, E = a; m !== E; ++m) {
							var g = n[m],
								v = g[u],
								T = g[d];
							g[c] = v, g[u] = T, g.pop()
						}
					} else {
						var d = --t,
							f = e[d];
						r[f.uuid] = c, e[c] = f, e.pop();
						for(var m = 0, E = a; m !== E; ++m) {
							var g = n[m];
							g[c] = g[d], g.pop()
						}
					}
			}
			this.nCachedObjects_ = i
		},
		subscribe_: function(e, t) {
			var i = this._bindingsIndicesByPath,
				r = i[e],
				n = this._bindings;
			if(void 0 !== r) return n[r];
			var a = this._paths,
				o = this._parsedPaths,
				s = this._objects,
				l = s.length,
				h = this.nCachedObjects_,
				c = new Array(l);
			r = n.length, i[e] = r, a.push(e), o.push(t), n.push(c);
			for(var u = h, p = s.length; u !== p; ++u) {
				var d = s[u];
				c[u] = new THREE.PropertyBinding(d, e, t)
			}
			return c
		},
		unsubscribe_: function(e) {
			var t = this._bindingsIndicesByPath,
				i = t[e];
			if(void 0 !== i) {
				var r = this._paths,
					n = this._parsedPaths,
					a = this._bindings,
					o = a.length - 1,
					s = a[o],
					l = e[o];
				t[l] = i, a[i] = s, a.pop(), n[i] = n[o], n.pop(), r[i] = r[o], r.pop()
			}
		}
	}, THREE.AnimationUtils = {
		arraySlice: function(e, t, i) {
			return THREE.AnimationUtils.isTypedArray(e) ? new e.constructor(e.subarray(t, i)) : e.slice(t, i)
		},
		convertArray: function(e, t, i) {
			return !e || !i && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
		},
		isTypedArray: function(e) {
			return ArrayBuffer.isView(e) && !(e instanceof DataView)
		},
		getKeyframeOrder: function(e) {
			function t(t, i) {
				return e[t] - e[i]
			}
			for(var i = e.length, r = new Array(i), n = 0; n !== i; ++n) r[n] = n;
			return r.sort(t), r
		},
		sortedArray: function(e, t, i) {
			for(var r = e.length, n = new e.constructor(r), a = 0, o = 0; o !== r; ++a)
				for(var s = i[a] * t, l = 0; l !== t; ++l) n[o++] = e[s + l];
			return n
		},
		flattenJSON: function(e, t, i, r) {
			for(var n = 1, a = e[0]; void 0 !== a && void 0 === a[r];) a = e[n++];
			if(void 0 !== a) {
				var o = a[r];
				if(void 0 !== o)
					if(Array.isArray(o)) {
						do o = a[r], void 0 !== o && (t.push(a.time), i.push.apply(i, o)), a = e[n++]; while (void 0 !== a)
					} else if(void 0 !== o.toArray) {
					do o = a[r], void 0 !== o && (t.push(a.time), o.toArray(i, i.length)), a = e[n++]; while (void 0 !== a)
				} else
					do o = a[r], void 0 !== o && (t.push(a.time), i.push(o)), a = e[n++]; while (void 0 !== a)
			}
		}
	}, THREE.KeyframeTrack = function(e, t, i, r) {
		if(void 0 === e) throw new Error("track name is undefined");
		if(void 0 === t || 0 === t.length) throw new Error("no keyframes in track named " + e);
		this.name = e, this.times = THREE.AnimationUtils.convertArray(t, this.TimeBufferType), this.values = THREE.AnimationUtils.convertArray(i, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation), this.validate(), this.optimize()
	}, THREE.KeyframeTrack.prototype = {
		constructor: THREE.KeyframeTrack,
		TimeBufferType: Float32Array,
		ValueBufferType: Float32Array,
		DefaultInterpolation: THREE.InterpolateLinear,
		InterpolantFactoryMethodDiscrete: function(e) {
			return new THREE.DiscreteInterpolant(this.times, this.values, this.getValueSize(), e)
		},
		InterpolantFactoryMethodLinear: function(e) {
			return new THREE.LinearInterpolant(this.times, this.values, this.getValueSize(), e)
		},
		InterpolantFactoryMethodSmooth: function(e) {
			return new THREE.CubicInterpolant(this.times, this.values, this.getValueSize(), e)
		},
		setInterpolation: function(e) {
			var t;
			switch(e) {
				case THREE.InterpolateDiscrete:
					t = this.InterpolantFactoryMethodDiscrete;
					break;
				case THREE.InterpolateLinear:
					t = this.InterpolantFactoryMethodLinear;
					break;
				case THREE.InterpolateSmooth:
					t = this.InterpolantFactoryMethodSmooth
			}
			if(void 0 === t) {
				var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if(void 0 === this.createInterpolant) {
					if(e === this.DefaultInterpolation) throw new Error(i);
					this.setInterpolation(this.DefaultInterpolation)
				}
				return void console.warn(i)
			}
			this.createInterpolant = t
		},
		getInterpolation: function() {
			switch(this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete:
					return THREE.InterpolateDiscrete;
				case this.InterpolantFactoryMethodLinear:
					return THREE.InterpolateLinear;
				case this.InterpolantFactoryMethodSmooth:
					return THREE.InterpolateSmooth
			}
		},
		getValueSize: function() {
			return this.values.length / this.times.length
		},
		shift: function(e) {
			if(0 !== e)
				for(var t = this.times, i = 0, r = t.length; i !== r; ++i) t[i] += e;
			return this
		},
		scale: function(e) {
			if(1 !== e)
				for(var t = this.times, i = 0, r = t.length; i !== r; ++i) t[i] *= e;
			return this
		},
		trim: function(e, t) {
			for(var i = this.times, r = i.length, n = 0, a = r - 1; n !== r && i[n] < e;) ++n;
			for(; - 1 !== a && i[a] > t;) --a;
			if(++a, 0 !== n || a !== r) {
				n >= a && (a = Math.max(a, 1), n = a - 1);
				var o = this.getValueSize();
				this.times = THREE.AnimationUtils.arraySlice(i, n, a), this.values = THREE.AnimationUtils.arraySlice(this.values, n * o, a * o)
			}
			return this
		},
		validate: function() {
			var e = !0,
				t = this.getValueSize();
			t - Math.floor(t) !== 0 && (console.error("invalid value size in track", this), e = !1);
			var i = this.times,
				r = this.values,
				n = i.length;
			0 === n && (console.error("track is empty", this), e = !1);
			for(var a = null, o = 0; o !== n; o++) {
				var s = i[o];
				if("number" == typeof s && isNaN(s)) {
					console.error("time is not a valid number", this, o, s), e = !1;
					break
				}
				if(null !== a && a > s) {
					console.error("out of order keys", this, o, s, a), e = !1;
					break
				}
				a = s
			}
			if(void 0 !== r && THREE.AnimationUtils.isTypedArray(r))
				for(var o = 0, l = r.length; o !== l; ++o) {
					var h = r[o];
					if(isNaN(h)) {
						console.error("value is not a valid number", this, o, h), e = !1;
						break
					}
				}
			return e
		},
		optimize: function() {
			for(var e = this.times, t = this.values, i = this.getValueSize(), r = 1, n = 1, a = e.length - 1; a >= n; ++n) {
				var o = !1,
					s = e[n],
					l = e[n + 1];
				if(s !== l && (1 !== n || s !== s[0]))
					for(var h = n * i, c = h - i, u = h + i, p = 0; p !== i; ++p) {
						var d = t[h + p];
						if(d !== t[c + p] || d !== t[u + p]) {
							o = !0;
							break
						}
					}
				if(o) {
					if(n !== r) {
						e[r] = e[n];
						for(var f = n * i, m = r * i, p = 0; p !== i; ++p) t[m + p] = t[f + p]
					}++r
				}
			}
			return r !== e.length && (this.times = THREE.AnimationUtils.arraySlice(e, 0, r), this.values = THREE.AnimationUtils.arraySlice(t, 0, r * i)), this
		}
	}, Object.assign(THREE.KeyframeTrack, {
		parse: function(e) {
			if(void 0 === e.type) throw new Error("track type undefined, can not parse");
			var t = THREE.KeyframeTrack._getTrackTypeForValueTypeName(e.type);
			if(void 0 === e.times) {
				var i = [],
					r = [];
				THREE.AnimationUtils.flattenJSON(e.keys, i, r, "value"), e.times = i, e.values = r
			}
			return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
		},
		toJSON: function(e) {
			var t, i = e.constructor;
			if(void 0 !== i.toJSON) t = i.toJSON(e);
			else {
				t = {
					name: e.name,
					times: THREE.AnimationUtils.convertArray(e.times, Array),
					values: THREE.AnimationUtils.convertArray(e.values, Array)
				};
				var r = e.getInterpolation();
				r !== e.DefaultInterpolation && (t.interpolation = r)
			}
			return t.type = e.ValueTypeName, t
		},
		_getTrackTypeForValueTypeName: function(e) {
			switch(e.toLowerCase()) {
				case "scalar":
				case "double":
				case "float":
				case "number":
				case "integer":
					return THREE.NumberKeyframeTrack;
				case "vector":
				case "vector2":
				case "vector3":
				case "vector4":
					return THREE.VectorKeyframeTrack;
				case "color":
					return THREE.ColorKeyframeTrack;
				case "quaternion":
					return THREE.QuaternionKeyframeTrack;
				case "bool":
				case "boolean":
					return THREE.BooleanKeyframeTrack;
				case "string":
					return THREE.StringKeyframeTrack
			}
			throw new Error("Unsupported typeName: " + e)
		}
	}), THREE.PropertyBinding = function(e, t, i) {
		this.path = t, this.parsedPath = i || THREE.PropertyBinding.parseTrackName(t), this.node = THREE.PropertyBinding.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
	}, THREE.PropertyBinding.prototype = {
		constructor: THREE.PropertyBinding,
		getValue: function(e, t) {
			this.bind(), this.getValue(e, t)
		},
		setValue: function(e, t) {
			this.bind(), this.setValue(e, t)
		},
		bind: function() {
			var e = this.node,
				t = this.parsedPath,
				i = t.objectName,
				r = t.propertyName,
				n = t.propertyIndex;
			if(e || (e = THREE.PropertyBinding.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
			if(i) {
				var a = t.objectIndex;
				switch(i) {
					case "materials":
						if(!e.material) return void console.error("  can not bind to material as node does not have a material", this);
						if(!e.material.materials) return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
						e = e.material.materials;
						break;
					case "bones":
						if(!e.skeleton) return void console.error("  can not bind to bones as node does not have a skeleton", this);
						e = e.skeleton.bones;
						for(var o = 0; o < e.length; o++)
							if(e[o].name === a) {
								a = o;
								break
							}
						break;
					default:
						if(void 0 === e[i]) return void console.error("  can not bind to objectName of node, undefined", this);
						e = e[i]
				}
				if(void 0 !== a) {
					if(void 0 === e[a]) return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
					e = e[a]
				}
			}
			var s = e[r];
			if(void 0 === s) {
				var l = t.nodeName;
				return void console.error("  trying to update property for track: " + l + "." + r + " but it wasn't found.", e)
			}
			var h = this.Versioning.None;
			void 0 !== e.needsUpdate ? (h = this.Versioning.NeedsUpdate, this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = e);
			var c = this.BindingType.Direct;
			if(void 0 !== n) {
				if("morphTargetInfluences" === r) {
					if(!e.geometry) return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
					if(!e.geometry.morphTargets) return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
					for(var o = 0; o < this.node.geometry.morphTargets.length; o++)
						if(e.geometry.morphTargets[o].name === n) {
							n = o;
							break
						}
				}
				c = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = n
			} else void 0 !== s.fromArray && void 0 !== s.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = s) : void 0 !== s.length ? (c = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
			this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][h]
		},
		unbind: function() {
			this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
		}
	}, Object.assign(THREE.PropertyBinding.prototype, {
		_getValue_unavailable: function() {},
		_setValue_unavailable: function() {},
		_getValue_unbound: THREE.PropertyBinding.prototype.getValue,
		_setValue_unbound: THREE.PropertyBinding.prototype.setValue,
		BindingType: {
			Direct: 0,
			EntireArray: 1,
			ArrayElement: 2,
			HasFromToArray: 3
		},
		Versioning: {
			None: 0,
			NeedsUpdate: 1,
			MatrixWorldNeedsUpdate: 2
		},
		GetterByBindingType: [function(e, t) {
			e[t] = this.node[this.propertyName]
		}, function(e, t) {
			for(var i = this.resolvedProperty, r = 0, n = i.length; r !== n; ++r) e[t++] = i[r]
		}, function(e, t) {
			e[t] = this.resolvedProperty[this.propertyIndex]
		}, function(e, t) {
			this.resolvedProperty.toArray(e, t)
		}],
		SetterByBindingTypeAndVersioning: [
			[function(e, t) {
				this.node[this.propertyName] = e[t]
			}, function(e, t) {
				this.node[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
			}, function(e, t) {
				this.node[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(e, t) {
				for(var i = this.resolvedProperty, r = 0, n = i.length; r !== n; ++r) i[r] = e[t++]
			}, function(e, t) {
				for(var i = this.resolvedProperty, r = 0, n = i.length; r !== n; ++r) i[r] = e[t++];
				this.targetObject.needsUpdate = !0
			}, function(e, t) {
				for(var i = this.resolvedProperty, r = 0, n = i.length; r !== n; ++r) i[r] = e[t++];
				this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(e, t) {
				this.resolvedProperty[this.propertyIndex] = e[t]
			}, function(e, t) {
				this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
			}, function(e, t) {
				this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(e, t) {
				this.resolvedProperty.fromArray(e, t)
			}, function(e, t) {
				this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
			}, function(e, t) {
				this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
			}]
		]
	}), THREE.PropertyBinding.Composite = function(e, t, i) {
		var r = i || THREE.PropertyBinding.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r)
	}, THREE.PropertyBinding.Composite.prototype = {
		constructor: THREE.PropertyBinding.Composite,
		getValue: function(e, t) {
			this.bind();
			var i = this._targetGroup.nCachedObjects_,
				r = this._bindings[i];
			void 0 !== r && r.getValue(e, t)
		},
		setValue: function(e, t) {
			for(var i = this._bindings, r = this._targetGroup.nCachedObjects_, n = i.length; r !== n; ++r) i[r].setValue(e, t)
		},
		bind: function() {
			for(var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind()
		},
		unbind: function() {
			for(var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind()
		}
	}, THREE.PropertyBinding.create = function(e, t, i) {
		return e instanceof THREE.AnimationObjectGroup ? new THREE.PropertyBinding.Composite(e, t, i) : new THREE.PropertyBinding(e, t, i)
	}, THREE.PropertyBinding.parseTrackName = function(e) {
		var t = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,
			i = t.exec(e);
		if(!i) throw new Error("cannot parse trackName at all: " + e);
		i.index === t.lastIndex && t.lastIndex++;
		var r = {
			nodeName: i[3],
			objectName: i[5],
			objectIndex: i[7],
			propertyName: i[9],
			propertyIndex: i[11]
		};
		if(null === r.propertyName || 0 === r.propertyName.length) throw new Error("can not parse propertyName from trackName: " + e);
		return r
	}, THREE.PropertyBinding.findNode = function(e, t) {
		if(!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
		if(e.skeleton) {
			var i = function(e) {
					for(var i = 0; i < e.bones.length; i++) {
						var r = e.bones[i];
						if(r.name === t) return r
					}
					return null
				},
				r = i(e.skeleton);
			if(r) return r
		}
		if(e.children) {
			var n = function(e) {
					for(var i = 0; i < e.length; i++) {
						var r = e[i];
						if(r.name === t || r.uuid === t) return r;
						var a = n(r.children);
						if(a) return a
					}
					return null
				},
				a = n(e.children);
			if(a) return a
		}
		return null
	}, THREE.PropertyMixer = function(e, t, i) {
		this.binding = e, this.valueSize = i;
		var r, n = Float64Array;
		switch(t) {
			case "quaternion":
				r = this._slerp;
				break;
			case "string":
			case "bool":
				n = Array, r = this._select;
				break;
			default:
				r = this._lerp
		}
		this.buffer = new n(4 * i), this._mixBufferRegion = r, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
	}, THREE.PropertyMixer.prototype = {
		constructor: THREE.PropertyMixer,
		accumulate: function(e, t) {
			var i = this.buffer,
				r = this.valueSize,
				n = e * r + r,
				a = this.cumulativeWeight;
			if(0 === a) {
				for(var o = 0; o !== r; ++o) i[n + o] = i[o];
				a = t
			} else {
				a += t;
				var s = t / a;
				this._mixBufferRegion(i, n, 0, s, r)
			}
			this.cumulativeWeight = a
		},
		apply: function(e) {
			var t = this.valueSize,
				i = this.buffer,
				r = e * t + t,
				n = this.cumulativeWeight,
				a = this.binding;
			if(this.cumulativeWeight = 0, 1 > n) {
				var o = 3 * t;
				this._mixBufferRegion(i, r, o, 1 - n, t)
			}
			for(var s = t, l = t + t; s !== l; ++s)
				if(i[s] !== i[s + t]) {
					a.setValue(i, r);
					break
				}
		},
		saveOriginalState: function() {
			var e = this.binding,
				t = this.buffer,
				i = this.valueSize,
				r = 3 * i;
			e.getValue(t, r);
			for(var n = i, a = r; n !== a; ++n) t[n] = t[r + n % i];
			this.cumulativeWeight = 0
		},
		restoreOriginalState: function() {
			var e = 3 * this.valueSize;
			this.binding.setValue(this.buffer, e)
		},
		_select: function(e, t, i, r, n) {
			if(r >= .5)
				for(var a = 0; a !== n; ++a) e[t + a] = e[i + a]
		},
		_slerp: function(e, t, i, r) {
			THREE.Quaternion.slerpFlat(e, t, e, t, e, i, r)
		},
		_lerp: function(e, t, i, r, n) {
			for(var a = 1 - r, o = 0; o !== n; ++o) {
				var s = t + o;
				e[s] = e[s] * a + e[i + o] * r
			}
		}
	}, THREE.BooleanKeyframeTrack = function(e, t, i) {
		THREE.KeyframeTrack.call(this, e, t, i)
	}, THREE.BooleanKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
		constructor: THREE.BooleanKeyframeTrack,
		ValueTypeName: "bool",
		ValueBufferType: Array,
		DefaultInterpolation: THREE.InterpolateDiscrete,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), THREE.ColorKeyframeTrack = function(e, t, i, r) {
		THREE.KeyframeTrack.call(this, e, t, i, r)
	}, THREE.ColorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
		constructor: THREE.ColorKeyframeTrack,
		ValueTypeName: "color"
	}), THREE.NumberKeyframeTrack = function(e, t, i, r) {
		THREE.KeyframeTrack.call(this, e, t, i, r)
	}, THREE.NumberKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
		constructor: THREE.NumberKeyframeTrack,
		ValueTypeName: "number"
	}), THREE.QuaternionKeyframeTrack = function(e, t, i, r) {
		THREE.KeyframeTrack.call(this, e, t, i, r)
	}, THREE.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
		constructor: THREE.QuaternionKeyframeTrack,
		ValueTypeName: "quaternion",
		DefaultInterpolation: THREE.InterpolateLinear,
		InterpolantFactoryMethodLinear: function(e) {
			return new THREE.QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), e)
		},
		InterpolantFactoryMethodSmooth: void 0
	}), THREE.StringKeyframeTrack = function(e, t, i, r) {
		THREE.KeyframeTrack.call(this, e, t, i, r)
	}, THREE.StringKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
		constructor: THREE.StringKeyframeTrack,
		ValueTypeName: "string",
		ValueBufferType: Array,
		DefaultInterpolation: THREE.InterpolateDiscrete,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), THREE.VectorKeyframeTrack = function(e, t, i, r) {
		THREE.KeyframeTrack.call(this, e, t, i, r)
	}, THREE.VectorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
		constructor: THREE.VectorKeyframeTrack,
		ValueTypeName: "vector"
	}), THREE.Audio = function(e) {
		THREE.Object3D.call(this), this.type = "Audio", this.context = e.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
	}, THREE.Audio.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.Audio,
		getOutput: function() {
			return this.gain
		},
		setNodeSource: function(e) {
			return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
		},
		setBuffer: function(e) {
			return this.source.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
		},
		play: function() {
			if(this.isPlaying === !0) return void console.warn("THREE.Audio: Audio is already playing.");
			if(this.hasPlaybackControl === !1) return void console.warn("THREE.Audio: this Audio has no playback control.");
			var e = this.context.createBufferSource();
			return e.buffer = this.source.buffer, e.loop = this.source.loop, e.onended = this.source.onended, e.start(0, this.startTime), e.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = e, this.connect()
		},
		pause: function() {
			return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this)
		},
		stop: function() {
			return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), this.startTime = 0, this.isPlaying = !1, this)
		},
		connect: function() {
			if(this.filters.length > 0) {
				this.source.connect(this.filters[0]);
				for(var e = 1, t = this.filters.length; t > e; e++) this.filters[e - 1].connect(this.filters[e]);
				this.filters[this.filters.length - 1].connect(this.getOutput())
			} else this.source.connect(this.getOutput());
			return this
		},
		disconnect: function() {
			if(this.filters.length > 0) {
				this.source.disconnect(this.filters[0]);
				for(var e = 1, t = this.filters.length; t > e; e++) this.filters[e - 1].disconnect(this.filters[e]);
				this.filters[this.filters.length - 1].disconnect(this.getOutput())
			} else this.source.disconnect(this.getOutput());
			return this
		},
		getFilters: function() {
			return this.filters
		},
		setFilters: function(e) {
			return e || (e = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
		},
		getFilter: function() {
			return this.getFilters()[0]
		},
		setFilter: function(e) {
			return this.setFilters(e ? [e] : [])
		},
		setPlaybackRate: function(e) {
			return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = e, this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate), this)
		},
		getPlaybackRate: function() {
			return this.playbackRate
		},
		onEnded: function() {
			this.isPlaying = !1
		},
		getLoop: function() {
			return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.source.loop
		},
		setLoop: function(e) {
			return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : void(this.source.loop = e)
		},
		getVolume: function() {
			return this.gain.gain.value
		},
		setVolume: function(e) {
			return this.gain.gain.value = e, this
		}
	}), THREE.AudioAnalyser = function(e, t) {
		this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
	}, Object.assign(THREE.AudioAnalyser.prototype, {
		getFrequencyData: function() {
			return this.analyser.getByteFrequencyData(this.data), this.data
		},
		getAverageFrequency: function() {
			for(var e = 0, t = this.getFrequencyData(), i = 0; i < t.length; i++) e += t[i];
			return e / t.length
		}
	}), Object.defineProperty(THREE, "AudioContext", {
		get: function() {
			var e;
			return function() {
				return void 0 === e && (e = new(window.AudioContext || window.webkitAudioContext)), e
			}
		}()
	}), THREE.PositionalAudio = function(e) {
		THREE.Audio.call(this, e), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
	}, THREE.PositionalAudio.prototype = Object.assign(Object.create(THREE.Audio.prototype), {
		constructor: THREE.PositionalAudio,
		getOutput: function() {
			return this.panner
		},
		getRefDistance: function() {
			return this.panner.refDistance
		},
		setRefDistance: function(e) {
			this.panner.refDistance = e
		},
		getRolloffFactor: function() {
			return this.panner.rolloffFactor
		},
		setRolloffFactor: function(e) {
			this.panner.rolloffFactor = e
		},
		getDistanceModel: function() {
			return this.panner.distanceModel
		},
		setDistanceModel: function(e) {
			this.panner.distanceModel = e
		},
		getMaxDistance: function() {
			return this.panner.maxDistance
		},
		setMaxDistance: function(e) {
			this.panner.maxDistance = e
		},
		updateMatrixWorld: function() {
			var e = new THREE.Vector3;
			return function(t) {
				THREE.Object3D.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z)
			}
		}()
	}), THREE.AudioListener = function() {
		THREE.Object3D.call(this), this.type = "AudioListener", this.context = THREE.AudioContext, this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
	}, THREE.AudioListener.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.AudioListener,
		getInput: function() {
			return this.gain
		},
		removeFilter: function() {
			null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
		},
		getFilter: function() {
			return this.filter
		},
		setFilter: function(e) {
			null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
		},
		getMasterVolume: function() {
			return this.gain.gain.value
		},
		setMasterVolume: function(e) {
			this.gain.gain.value = e
		},
		updateMatrixWorld: function() {
			var e = new THREE.Vector3,
				t = new THREE.Quaternion,
				i = new THREE.Vector3,
				r = new THREE.Vector3;
			return function(n) {
				THREE.Object3D.prototype.updateMatrixWorld.call(this, n);
				var a = this.context.listener,
					o = this.up;
				this.matrixWorld.decompose(e, t, i), r.set(0, 0, -1).applyQuaternion(t), a.setPosition(e.x, e.y, e.z), a.setOrientation(r.x, r.y, r.z, o.x, o.y, o.z)
			}
		}()
	}), THREE.Camera = function() {
		THREE.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4
	}, THREE.Camera.prototype = Object.create(THREE.Object3D.prototype), THREE.Camera.prototype.constructor = THREE.Camera, THREE.Camera.prototype.getWorldDirection = function() {
		var e = new THREE.Quaternion;
		return function(t) {
			var i = t || new THREE.Vector3;
			return this.getWorldQuaternion(e), i.set(0, 0, -1).applyQuaternion(e)
		}
	}(), THREE.Camera.prototype.lookAt = function() {
		var e = new THREE.Matrix4;
		return function(t) {
			e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
		}
	}(), THREE.Camera.prototype.clone = function() {
		return(new this.constructor).copy(this)
	}, THREE.Camera.prototype.copy = function(e) {
		return THREE.Object3D.prototype.copy.call(this, e), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
	}, THREE.CubeCamera = function(e, t, i) {
		THREE.Object3D.call(this), this.type = "CubeCamera";
		var r = 90,
			n = 1,
			a = new THREE.PerspectiveCamera(r, n, e, t);
		a.up.set(0, -1, 0), a.lookAt(new THREE.Vector3(1, 0, 0)), this.add(a);
		var o = new THREE.PerspectiveCamera(r, n, e, t);
		o.up.set(0, -1, 0), o.lookAt(new THREE.Vector3(-1, 0, 0)), this.add(o);
		var s = new THREE.PerspectiveCamera(r, n, e, t);
		s.up.set(0, 0, 1), s.lookAt(new THREE.Vector3(0, 1, 0)), this.add(s);
		var l = new THREE.PerspectiveCamera(r, n, e, t);
		l.up.set(0, 0, -1), l.lookAt(new THREE.Vector3(0, -1, 0)), this.add(l);
		var h = new THREE.PerspectiveCamera(r, n, e, t);
		h.up.set(0, -1, 0), h.lookAt(new THREE.Vector3(0, 0, 1)), this.add(h);
		var c = new THREE.PerspectiveCamera(r, n, e, t);
		c.up.set(0, -1, 0), c.lookAt(new THREE.Vector3(0, 0, -1)), this.add(c);
		var u = {
			format: THREE.RGBFormat,
			magFilter: THREE.LinearFilter,
			minFilter: THREE.LinearFilter
		};
		this.renderTarget = new THREE.WebGLRenderTargetCube(i, i, u), this.updateCubeMap = function(e, t) {
			null === this.parent && this.updateMatrixWorld();
			var i = this.renderTarget,
				r = i.texture.generateMipmaps;
			i.texture.generateMipmaps = !1, i.activeCubeFace = 0, e.render(t, a, i), i.activeCubeFace = 1, e.render(t, o, i), i.activeCubeFace = 2, e.render(t, s, i), i.activeCubeFace = 3, e.render(t, l, i), i.activeCubeFace = 4, e.render(t, h, i), i.texture.generateMipmaps = r, i.activeCubeFace = 5, e.render(t, c, i), e.setRenderTarget(null)
		}
	}, THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype), THREE.CubeCamera.prototype.constructor = THREE.CubeCamera, THREE.OrthographicCamera = function(e, t, i, r, n, a) {
		THREE.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = void 0 !== n ? n : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
	}, THREE.OrthographicCamera.prototype = Object.assign(Object.create(THREE.Camera.prototype), {
		constructor: THREE.OrthographicCamera,
		copy: function(e) {
			return THREE.Camera.prototype.copy.call(this, e), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
		},
		setViewOffset: function(e, t, i, r, n, a) {
			this.view = {
				fullWidth: e,
				fullHeight: t,
				offsetX: i,
				offsetY: r,
				width: n,
				height: a
			}, this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			this.view = null, this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var e = (this.right - this.left) / (2 * this.zoom),
				t = (this.top - this.bottom) / (2 * this.zoom),
				i = (this.right + this.left) / 2,
				r = (this.top + this.bottom) / 2,
				n = i - e,
				a = i + e,
				o = r + t,
				s = r - t;
			if(null !== this.view) {
				var l = this.zoom / (this.view.width / this.view.fullWidth),
					h = this.zoom / (this.view.height / this.view.fullHeight),
					c = (this.right - this.left) / this.view.width,
					u = (this.top - this.bottom) / this.view.height;
				n += c * (this.view.offsetX / l), a = n + c * (this.view.width / l), o -= u * (this.view.offsetY / h), s = o - u * (this.view.height / h)
			}
			this.projectionMatrix.makeOrthographic(n, a, o, s, this.near, this.far)
		},
		toJSON: function(e) {
			var t = THREE.Object3D.prototype.toJSON.call(this, e);
			return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
		}
	}), THREE.PerspectiveCamera = function(e, t, i, r) {
		THREE.Camera.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== e ? e : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== r ? r : 2e3, this.focus = 10, this.aspect = void 0 !== t ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
	}, THREE.PerspectiveCamera.prototype = Object.assign(Object.create(THREE.Camera.prototype), {
		constructor: THREE.PerspectiveCamera,
		copy: function(e) {
			return THREE.Camera.prototype.copy.call(this, e), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
		},
		setFocalLength: function(e) {
			var t = .5 * this.getFilmHeight() / e;
			this.fov = 2 * THREE.Math.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
		},
		getFocalLength: function() {
			var e = Math.tan(.5 * THREE.Math.DEG2RAD * this.fov);
			return .5 * this.getFilmHeight() / e
		},
		getEffectiveFOV: function() {
			return 2 * THREE.Math.RAD2DEG * Math.atan(Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom)
		},
		getFilmWidth: function() {
			return this.filmGauge * Math.min(this.aspect, 1)
		},
		getFilmHeight: function() {
			return this.filmGauge / Math.max(this.aspect, 1)
		},
		setViewOffset: function(e, t, i, r, n, a) {
			this.aspect = e / t, this.view = {
				fullWidth: e,
				fullHeight: t,
				offsetX: i,
				offsetY: r,
				width: n,
				height: a
			}, this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			this.view = null, this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var e = this.near,
				t = e * Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom,
				i = 2 * t,
				r = this.aspect * i,
				n = -.5 * r,
				a = this.view;
			if(null !== a) {
				var o = a.fullWidth,
					s = a.fullHeight;
				n += a.offsetX * r / o, t -= a.offsetY * i / s, r *= a.width / o, i *= a.height / s
			}
			var l = this.filmOffset;
			0 !== l && (n += e * l / this.getFilmWidth()), this.projectionMatrix.makeFrustum(n, n + r, t - i, t, e, this.far)
		},
		toJSON: function(e) {
			var t = THREE.Object3D.prototype.toJSON.call(this, e);
			return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
		}
	}), THREE.StereoCamera = function() {
		this.type = "StereoCamera", this.aspect = 1, this.cameraL = new THREE.PerspectiveCamera, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new THREE.PerspectiveCamera, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
	}, Object.assign(THREE.StereoCamera.prototype, {
		update: function() {
			var e, t, i, r, n, a = new THREE.Matrix4,
				o = new THREE.Matrix4;
			return function(s) {
				var l = e !== s.focus || t !== s.fov || i !== s.aspect * this.aspect || r !== s.near || n !== s.far;
				if(l) {
					e = s.focus, t = s.fov, i = s.aspect * this.aspect, r = s.near, n = s.far;
					var h, c, u = s.projectionMatrix.clone(),
						p = .032,
						d = p * r / e,
						f = r * Math.tan(THREE.Math.DEG2RAD * t * .5);
					o.elements[12] = -p, a.elements[12] = p, h = -f * i + d, c = f * i + d, u.elements[0] = 2 * r / (c - h), u.elements[8] = (c + h) / (c - h), this.cameraL.projectionMatrix.copy(u), h = -f * i - d, c = f * i - d, u.elements[0] = 2 * r / (c - h), u.elements[8] = (c + h) / (c - h), this.cameraR.projectionMatrix.copy(u)
				}
				this.cameraL.matrixWorld.copy(s.matrixWorld).multiply(o), this.cameraR.matrixWorld.copy(s.matrixWorld).multiply(a)
			}
		}()
	}), THREE.Light = function(e, t) {
		THREE.Object3D.call(this), this.type = "Light", this.color = new THREE.Color(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
	}, THREE.Light.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.Light,
		copy: function(e) {
			return THREE.Object3D.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
		},
		toJSON: function(e) {
			var t = THREE.Object3D.prototype.toJSON.call(this, e);
			return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), t
		}
	}), THREE.LightShadow = function(e) {
		this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new THREE.Vector2(512, 512), this.map = null, this.matrix = new THREE.Matrix4
	}, Object.assign(THREE.LightShadow.prototype, {
		copy: function(e) {
			return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		}
	}), THREE.AmbientLight = function(e, t) {
		THREE.Light.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
	}, THREE.AmbientLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
		constructor: THREE.AmbientLight
	}), THREE.DirectionalLight = function(e, t) {
		THREE.Light.call(this, e, t), this.type = "DirectionalLight", this.position.copy(THREE.Object3D.DefaultUp), this.updateMatrix(), this.target = new THREE.Object3D, this.shadow = new THREE.DirectionalLightShadow
	}, THREE.DirectionalLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
		constructor: THREE.DirectionalLight,
		copy: function(e) {
			return THREE.Light.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
		}
	}), THREE.DirectionalLightShadow = function() {
		THREE.LightShadow.call(this, new THREE.OrthographicCamera(-5, 5, 5, -5, .5, 500))
	}, THREE.DirectionalLightShadow.prototype = Object.assign(Object.create(THREE.LightShadow.prototype), {
		constructor: THREE.DirectionalLightShadow
	}), THREE.HemisphereLight = function(e, t, i) {
		THREE.Light.call(this, e, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(THREE.Object3D.DefaultUp), this.updateMatrix(), this.groundColor = new THREE.Color(t)
	}, THREE.HemisphereLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
		constructor: THREE.HemisphereLight,
		copy: function(e) {
			return THREE.Light.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
		}
	}), THREE.PointLight = function(e, t, i, r) {
		THREE.Light.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
			get: function() {
				return 4 * this.intensity * Math.PI
			},
			set: function(e) {
				this.intensity = e / (4 * Math.PI)
			}
		}), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== r ? r : 1, this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90, 1, .5, 500))
	}, THREE.PointLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
		constructor: THREE.PointLight,
		copy: function(e) {
			return THREE.Light.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
		}
	}), THREE.SpotLight = function(e, t, i, r, n, a) {
		THREE.Light.call(this, e, t), this.type = "SpotLight", this.position.copy(THREE.Object3D.DefaultUp), this.updateMatrix(), this.target = new THREE.Object3D, Object.defineProperty(this, "power", {
			get: function() {
				return this.intensity * Math.PI
			},
			set: function(e) {
				this.intensity = e / Math.PI
			}
		}), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.penumbra = void 0 !== n ? n : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new THREE.SpotLightShadow
	}, THREE.SpotLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
		constructor: THREE.SpotLight,
		copy: function(e) {
			return THREE.Light.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
		}
	}), THREE.SpotLightShadow = function() {
		THREE.LightShadow.call(this, new THREE.PerspectiveCamera(50, 1, .5, 500))
	}, THREE.SpotLightShadow.prototype = Object.assign(Object.create(THREE.LightShadow.prototype), {
		constructor: THREE.SpotLightShadow,
		update: function(e) {
			var t = 2 * THREE.Math.RAD2DEG * e.angle,
				i = this.mapSize.width / this.mapSize.height,
				r = e.distance || 500,
				n = this.camera;
			(t !== n.fov || i !== n.aspect || r !== n.far) && (n.fov = t, n.aspect = i, n.far = r, n.updateProjectionMatrix())
		}
	}), THREE.AudioLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
	}, Object.assign(THREE.AudioLoader.prototype, {
		load: function(e, t, i, r) {
			var n = new THREE.XHRLoader(this.manager);
			n.setResponseType("arraybuffer"), n.load(e, function(e) {
				var i = THREE.AudioContext;
				i.decodeAudioData(e, function(e) {
					t(e)
				})
			}, i, r)
		}
	}), THREE.Cache = {
		enabled: !1,
		files: {},
		add: function(e, t) {
			this.enabled !== !1 && (this.files[e] = t)
		},
		get: function(e) {
			return this.enabled !== !1 ? this.files[e] : void 0
		},
		remove: function(e) {
			delete this.files[e]
		},
		clear: function() {
			this.files = {}
		}
	}, THREE.Loader = function() {
		this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
	}, THREE.Loader.prototype = {
		constructor: THREE.Loader,
		crossOrigin: void 0,
		extractUrlBase: function(e) {
			var t = e.split("/");
			return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
		},
		initMaterials: function(e, t, i) {
			for(var r = [], n = 0; n < e.length; ++n) r[n] = this.createMaterial(e[n], t, i);
			return r
		},
		createMaterial: function() {
			var e, t, i;
			return function(r, n, a) {
				function o(e, i, r, o, l) {
					var h, c = n + e,
						u = THREE.Loader.Handlers.get(c);
					null !== u ? h = u.load(c) : (t.setCrossOrigin(a), h = t.load(c)), void 0 !== i && (h.repeat.fromArray(i), 1 !== i[0] && (h.wrapS = THREE.RepeatWrapping), 1 !== i[1] && (h.wrapT = THREE.RepeatWrapping)), void 0 !== r && h.offset.fromArray(r), void 0 !== o && ("repeat" === o[0] && (h.wrapS = THREE.RepeatWrapping), "mirror" === o[0] && (h.wrapS = THREE.MirroredRepeatWrapping), "repeat" === o[1] && (h.wrapT = THREE.RepeatWrapping), "mirror" === o[1] && (h.wrapT = THREE.MirroredRepeatWrapping)), void 0 !== l && (h.anisotropy = l);
					var p = THREE.Math.generateUUID();
					return s[p] = h, p
				}
				void 0 === e && (e = new THREE.Color), void 0 === t && (t = new THREE.TextureLoader), void 0 === i && (i = new THREE.MaterialLoader);
				var s = {},
					l = {
						uuid: THREE.Math.generateUUID(),
						type: "MeshLambertMaterial"
					};
				for(var h in r) {
					var c = r[h];
					switch(h) {
						case "DbgColor":
						case "DbgIndex":
						case "opticalDensity":
						case "illumination":
							break;
						case "DbgName":
							l.name = c;
							break;
						case "blending":
							l.blending = THREE[c];
							break;
						case "colorAmbient":
						case "mapAmbient":
							console.warn("THREE.Loader.createMaterial:", h, "is no longer supported.");
							break;
						case "colorDiffuse":
							l.color = e.fromArray(c).getHex();
							break;
						case "colorSpecular":
							l.specular = e.fromArray(c).getHex();
							break;
						case "colorEmissive":
							l.emissive = e.fromArray(c).getHex();
							break;
						case "specularCoef":
							l.shininess = c;
							break;
						case "shading":
							"basic" === c.toLowerCase() && (l.type = "MeshBasicMaterial"), "phong" === c.toLowerCase() && (l.type = "MeshPhongMaterial"), "standard" === c.toLowerCase() && (l.type = "MeshStandardMaterial");
							break;
						case "mapDiffuse":
							l.map = o(c, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
							break;
						case "mapDiffuseRepeat":
						case "mapDiffuseOffset":
						case "mapDiffuseWrap":
						case "mapDiffuseAnisotropy":
							break;
						case "mapEmissive":
							l.emissiveMap = o(c, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
							break;
						case "mapEmissiveRepeat":
						case "mapEmissiveOffset":
						case "mapEmissiveWrap":
						case "mapEmissiveAnisotropy":
							break;
						case "mapLight":
							l.lightMap = o(c, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
							break;
						case "mapLightRepeat":
						case "mapLightOffset":
						case "mapLightWrap":
						case "mapLightAnisotropy":
							break;
						case "mapAO":
							l.aoMap = o(c, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
							break;
						case "mapAORepeat":
						case "mapAOOffset":
						case "mapAOWrap":
						case "mapAOAnisotropy":
							break;
						case "mapBump":
							l.bumpMap = o(c, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
							break;
						case "mapBumpScale":
							l.bumpScale = c;
							break;
						case "mapBumpRepeat":
						case "mapBumpOffset":
						case "mapBumpWrap":
						case "mapBumpAnisotropy":
							break;
						case "mapNormal":
							l.normalMap = o(c, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
							break;
						case "mapNormalFactor":
							l.normalScale = [c, c];
							break;
						case "mapNormalRepeat":
						case "mapNormalOffset":
						case "mapNormalWrap":
						case "mapNormalAnisotropy":
							break;
						case "mapSpecular":
							l.specularMap = o(c, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
							break;
						case "mapSpecularRepeat":
						case "mapSpecularOffset":
						case "mapSpecularWrap":
						case "mapSpecularAnisotropy":
							break;
						case "mapMetalness":
							l.metalnessMap = o(c, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
							break;
						case "mapMetalnessRepeat":
						case "mapMetalnessOffset":
						case "mapMetalnessWrap":
						case "mapMetalnessAnisotropy":
							break;
						case "mapRoughness":
							l.roughnessMap = o(c, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
							break;
						case "mapRoughnessRepeat":
						case "mapRoughnessOffset":
						case "mapRoughnessWrap":
						case "mapRoughnessAnisotropy":
							break;
						case "mapAlpha":
							l.alphaMap = o(c, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
							break;
						case "mapAlphaRepeat":
						case "mapAlphaOffset":
						case "mapAlphaWrap":
						case "mapAlphaAnisotropy":
							break;
						case "flipSided":
							l.side = THREE.BackSide;
							break;
						case "doubleSided":
							l.side = THREE.DoubleSide;
							break;
						case "transparency":
							console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), l.opacity = c;
							break;
						case "depthTest":
						case "depthWrite":
						case "colorWrite":
						case "opacity":
						case "reflectivity":
						case "transparent":
						case "visible":
						case "wireframe":
							l[h] = c;
							break;
						case "vertexColors":
							c === !0 && (l.vertexColors = THREE.VertexColors), "face" === c && (l.vertexColors = THREE.FaceColors);
							break;
						default:
							console.error("THREE.Loader.createMaterial: Unsupported", h, c)
					}
				}
				return "MeshBasicMaterial" === l.type && delete l.emissive, "MeshPhongMaterial" !== l.type && delete l.specular, l.opacity < 1 && (l.transparent = !0), i.setTextures(s), i.parse(l)
			}
		}()
	}, THREE.Loader.Handlers = {
		handlers: [],
		add: function(e, t) {
			this.handlers.push(e, t)
		},
		get: function(e) {
			for(var t = this.handlers, i = 0, r = t.length; r > i; i += 2) {
				var n = t[i],
					a = t[i + 1];
				if(n.test(e)) return a
			}
			return null
		}
	}, THREE.XHRLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
	}, Object.assign(THREE.XHRLoader.prototype, {
		load: function(e, t, i, r) {
			void 0 !== this.path && (e = this.path + e);
			var n = this,
				a = THREE.Cache.get(e);
			if(void 0 !== a) return n.manager.itemStart(e), setTimeout(function() {
				t && t(a), n.manager.itemEnd(e)
			}, 0), a;
			var o = new XMLHttpRequest;
			return o.overrideMimeType("text/plain"), o.open("GET", e, !0), o.addEventListener("load", function(i) {
				var a = i.target.response;
				THREE.Cache.add(e, a), 200 === this.status ? (t && t(a), n.manager.itemEnd(e)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."), t && t(a), n.manager.itemEnd(e)) : (r && r(i), n.manager.itemError(e))
			}, !1), void 0 !== i && o.addEventListener("progress", function(e) {
				i(e)
			}, !1), o.addEventListener("error", function(t) {
				r && r(t), n.manager.itemError(e)
			}, !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.send(null), n.manager.itemStart(e), o
		},
		setPath: function(e) {
			return this.path = e, this
		},
		setResponseType: function(e) {
			return this.responseType = e, this
		},
		setWithCredentials: function(e) {
			return this.withCredentials = e, this
		}
	}), THREE.FontLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
	}, Object.assign(THREE.FontLoader.prototype, {
		load: function(e, t, i, r) {
			var n = this,
				a = new THREE.XHRLoader(this.manager);
			a.load(e, function(e) {
				var i;
				try {
					i = JSON.parse(e)
				} catch(r) {
					console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(e.substring(65, e.length - 2))
				}
				var a = n.parse(i);
				t && t(a)
			}, i, r)
		},
		parse: function(e) {
			return new THREE.Font(e)
		}
	}), THREE.ImageLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
	}, Object.assign(THREE.ImageLoader.prototype, {
		load: function(e, t, i, r) {
			var n = this,
				a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
			if(a.onload = function() {
					URL.revokeObjectURL(a.src), t && t(a), n.manager.itemEnd(e)
				}, 0 === e.indexOf("data:")) a.src = e;
			else {
				var o = new THREE.XHRLoader;
				o.setPath(this.path), o.setResponseType("blob"), o.load(e, function(e) {
					a.src = URL.createObjectURL(e)
				}, i, r)
			}
			return n.manager.itemStart(e), a
		},
		setCrossOrigin: function(e) {
			return this.crossOrigin = e, this
		},
		setPath: function(e) {
			return this.path = e, this
		}
	}), THREE.JSONLoader = function(e) {
		"boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.withCredentials = !1
	}, Object.assign(THREE.JSONLoader.prototype, {
		load: function(e, t, i, r) {
			var n = this,
				a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(e),
				o = new THREE.XHRLoader(this.manager);
			o.setWithCredentials(this.withCredentials), o.load(e, function(i) {
				var r = JSON.parse(i),
					o = r.metadata;
				if(void 0 !== o) {
					var s = o.type;
					if(void 0 !== s) {
						if("object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
						if("scene" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
					}
				}
				var l = n.parse(r, a);
				t(l.geometry, l.materials)
			}, i, r)
		},
		setTexturePath: function(e) {
			this.texturePath = e
		},
		parse: function(e, t) {
			function i(t) {
				function i(e, t) {
					return e & 1 << t
				}
				var r, n, a, s, l, h, c, u, p, d, f, m, E, g, v, T, y, _, R, x, b, w, H, M, S, A, C, L = e.faces,
					P = e.vertices,
					D = e.normals,
					O = e.colors,
					I = 0;
				if(void 0 !== e.uvs) {
					for(r = 0; r < e.uvs.length; r++) e.uvs[r].length && I++;
					for(r = 0; I > r; r++) o.faceVertexUvs[r] = []
				}
				for(s = 0, l = P.length; l > s;) _ = new THREE.Vector3, _.x = P[s++] * t, _.y = P[s++] * t, _.z = P[s++] * t, o.vertices.push(_);
				for(s = 0, l = L.length; l > s;)
					if(d = L[s++], f = i(d, 0), m = i(d, 1), E = i(d, 3), g = i(d, 4), v = i(d, 5), T = i(d, 6), y = i(d, 7), f) {
						if(x = new THREE.Face3, x.a = L[s], x.b = L[s + 1], x.c = L[s + 3], b = new THREE.Face3, b.a = L[s + 1], b.b = L[s + 2], b.c = L[s + 3], s += 4, m && (p = L[s++], x.materialIndex = p, b.materialIndex = p), a = o.faces.length, E)
							for(r = 0; I > r; r++)
								for(M = e.uvs[r], o.faceVertexUvs[r][a] = [], o.faceVertexUvs[r][a + 1] = [], n = 0; 4 > n; n++) u = L[s++], A = M[2 * u], C = M[2 * u + 1], S = new THREE.Vector2(A, C), 2 !== n && o.faceVertexUvs[r][a].push(S), 0 !== n && o.faceVertexUvs[r][a + 1].push(S);
						if(g && (c = 3 * L[s++], x.normal.set(D[c++], D[c++], D[c]), b.normal.copy(x.normal)), v)
							for(r = 0; 4 > r; r++) c = 3 * L[s++], H = new THREE.Vector3(D[c++], D[c++], D[c]), 2 !== r && x.vertexNormals.push(H), 0 !== r && b.vertexNormals.push(H);
						if(T && (h = L[s++], w = O[h], x.color.setHex(w), b.color.setHex(w)), y)
							for(r = 0; 4 > r; r++) h = L[s++], w = O[h], 2 !== r && x.vertexColors.push(new THREE.Color(w)), 0 !== r && b.vertexColors.push(new THREE.Color(w));
						o.faces.push(x), o.faces.push(b)
					} else {
						if(R = new THREE.Face3, R.a = L[s++], R.b = L[s++], R.c = L[s++], m && (p = L[s++], R.materialIndex = p), a = o.faces.length, E)
							for(r = 0; I > r; r++)
								for(M = e.uvs[r], o.faceVertexUvs[r][a] = [], n = 0; 3 > n; n++) u = L[s++], A = M[2 * u], C = M[2 * u + 1], S = new THREE.Vector2(A, C), o.faceVertexUvs[r][a].push(S);
						if(g && (c = 3 * L[s++], R.normal.set(D[c++], D[c++], D[c])), v)
							for(r = 0; 3 > r; r++) c = 3 * L[s++], H = new THREE.Vector3(D[c++], D[c++], D[c]), R.vertexNormals.push(H);
						if(T && (h = L[s++], R.color.setHex(O[h])), y)
							for(r = 0; 3 > r; r++) h = L[s++], R.vertexColors.push(new THREE.Color(O[h]));
						o.faces.push(R)
					}
			}

			function r() {
				var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
				if(e.skinWeights)
					for(var i = 0, r = e.skinWeights.length; r > i; i += t) {
						var n = e.skinWeights[i],
							a = t > 1 ? e.skinWeights[i + 1] : 0,
							s = t > 2 ? e.skinWeights[i + 2] : 0,
							l = t > 3 ? e.skinWeights[i + 3] : 0;
						o.skinWeights.push(new THREE.Vector4(n, a, s, l))
					}
				if(e.skinIndices)
					for(var i = 0, r = e.skinIndices.length; r > i; i += t) {
						var h = e.skinIndices[i],
							c = t > 1 ? e.skinIndices[i + 1] : 0,
							u = t > 2 ? e.skinIndices[i + 2] : 0,
							p = t > 3 ? e.skinIndices[i + 3] : 0;
						o.skinIndices.push(new THREE.Vector4(h, c, u, p))
					}
				o.bones = e.bones, o.bones && o.bones.length > 0 && (o.skinWeights.length !== o.skinIndices.length || o.skinIndices.length !== o.vertices.length) && console.warn("When skinning, number of vertices (" + o.vertices.length + "), skinIndices (" + o.skinIndices.length + "), and skinWeights (" + o.skinWeights.length + ") should match.")
			}

			function n(t) {
				if(void 0 !== e.morphTargets)
					for(var i = 0, r = e.morphTargets.length; r > i; i++) {
						o.morphTargets[i] = {}, o.morphTargets[i].name = e.morphTargets[i].name, o.morphTargets[i].vertices = [];
						for(var n = o.morphTargets[i].vertices, a = e.morphTargets[i].vertices, s = 0, l = a.length; l > s; s += 3) {
							var h = new THREE.Vector3;
							h.x = a[s] * t, h.y = a[s + 1] * t, h.z = a[s + 2] * t, n.push(h)
						}
					}
				if(void 0 !== e.morphColors && e.morphColors.length > 0) {
					console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
					for(var c = o.faces, u = e.morphColors[0].colors, i = 0, r = c.length; r > i; i++) c[i].color.fromArray(u, 3 * i)
				}
			}

			function a() {
				var t = [],
					i = [];
				void 0 !== e.animation && i.push(e.animation), void 0 !== e.animations && (e.animations.length ? i = i.concat(e.animations) : i.push(e.animations));
				for(var r = 0; r < i.length; r++) {
					var n = THREE.AnimationClip.parseAnimation(i[r], o.bones);
					n && t.push(n)
				}
				if(o.morphTargets) {
					var a = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(o.morphTargets, 10);
					t = t.concat(a)
				}
				t.length > 0 && (o.animations = t)
			}
			var o = new THREE.Geometry,
				s = void 0 !== e.scale ? 1 / e.scale : 1;
			if(i(s), r(), n(s), a(), o.computeFaceNormals(), o.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length) return {
				geometry: o
			};
			var l = THREE.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin);
			return {
				geometry: o,
				materials: l
			}
		}
	}), THREE.LoadingManager = function(e, t, i) {
		var r = this,
			n = !1,
			a = 0,
			o = 0;
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function(e) {
			o++, n === !1 && void 0 !== r.onStart && r.onStart(e, a, o), n = !0
		}, this.itemEnd = function(e) {
			a++, void 0 !== r.onProgress && r.onProgress(e, a, o), a === o && (n = !1, void 0 !== r.onLoad && r.onLoad())
		}, this.itemError = function(e) {
			void 0 !== r.onError && r.onError(e)
		}
	}, THREE.DefaultLoadingManager = new THREE.LoadingManager, THREE.BufferGeometryLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
	}, Object.assign(THREE.BufferGeometryLoader.prototype, {
		load: function(e, t, i, r) {
			var n = this,
				a = new THREE.XHRLoader(n.manager);
			a.load(e, function(e) {
				t(n.parse(JSON.parse(e)))
			}, i, r)
		},
		parse: function(e) {
			var t = new THREE.BufferGeometry,
				i = e.data.index,
				r = {
					Int8Array: Int8Array,
					Uint8Array: Uint8Array,
					Uint8ClampedArray: Uint8ClampedArray,
					Int16Array: Int16Array,
					Uint16Array: Uint16Array,
					Int32Array: Int32Array,
					Uint32Array: Uint32Array,
					Float32Array: Float32Array,
					Float64Array: Float64Array
				};
			if(void 0 !== i) {
				var n = new r[i.type](i.array);
				t.setIndex(new THREE.BufferAttribute(n, 1))
			}
			var a = e.data.attributes;
			for(var o in a) {
				var s = a[o],
					n = new r[s.type](s.array);
				t.addAttribute(o, new THREE.BufferAttribute(n, s.itemSize, s.normalized))
			}
			var l = e.data.groups || e.data.drawcalls || e.data.offsets;
			if(void 0 !== l)
				for(var h = 0, c = l.length; h !== c; ++h) {
					var u = l[h];
					t.addGroup(u.start, u.count, u.materialIndex)
				}
			var p = e.data.boundingSphere;
			if(void 0 !== p) {
				var d = new THREE.Vector3;
				void 0 !== p.center && d.fromArray(p.center), t.boundingSphere = new THREE.Sphere(d, p.radius)
			}
			return t
		}
	}), THREE.MaterialLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.textures = {}
	}, Object.assign(THREE.MaterialLoader.prototype, {
		load: function(e, t, i, r) {
			var n = this,
				a = new THREE.XHRLoader(n.manager);
			a.load(e, function(e) {
				t(n.parse(JSON.parse(e)))
			}, i, r)
		},
		setTextures: function(e) {
			this.textures = e
		},
		getTexture: function(e) {
			var t = this.textures;
			return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
		},
		parse: function(e) {
			var t = new THREE[e.type];
			if(void 0 !== e.uuid && (t.uuid = e.uuid), void 0 !== e.name && (t.name = e.name), void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.roughness && (t.roughness = e.roughness), void 0 !== e.metalness && (t.metalness = e.metalness), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.uniforms && (t.uniforms = e.uniforms), void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.shading && (t.shading = e.shading), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest), void 0 !== e.depthTest && (t.depthTest = e.depthTest), void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (t.colorWrite = e.colorWrite), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.size && (t.size = e.size), void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (t.map = this.getTexture(e.map)), void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap), t.transparent = !0), void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)), void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale), void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)), void 0 !== e.normalScale) {
				var i = e.normalScale;
				Array.isArray(i) === !1 && (i = [i, i]), t.normalScale = (new THREE.Vector2).fromArray(i)
			}
			if(void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)), void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (t.roughnessMap = this.getTexture(e.roughnessMap)), void 0 !== e.metalnessMap && (t.metalnessMap = this.getTexture(e.metalnessMap)), void 0 !== e.emissiveMap && (t.emissiveMap = this.getTexture(e.emissiveMap)), void 0 !== e.emissiveIntensity && (t.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)), void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap), t.combine = THREE.MultiplyOperation), void 0 !== e.reflectivity && (t.reflectivity = e.reflectivity), void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)), void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)), void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity), void 0 !== e.materials)
				for(var r = 0, n = e.materials.length; n > r; r++) t.materials.push(this.parse(e.materials[r]));
			return t
		}
	}), THREE.ObjectLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.texturePath = ""
	}, Object.assign(THREE.ObjectLoader.prototype, {
		load: function(e, t, i, r) {
			"" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
			var n = this,
				a = new THREE.XHRLoader(n.manager);
			a.load(e, function(e) {
				n.parse(JSON.parse(e), t)
			}, i, r)
		},
		setTexturePath: function(e) {
			this.texturePath = e
		},
		setCrossOrigin: function(e) {
			this.crossOrigin = e
		},
		parse: function(e, t) {
			var i = this.parseGeometries(e.geometries),
				r = this.parseImages(e.images, function() {
					void 0 !== t && t(o)
				}),
				n = this.parseTextures(e.textures, r),
				a = this.parseMaterials(e.materials, n),
				o = this.parseObject(e.object, i, a);
			return e.animations && (o.animations = this.parseAnimations(e.animations)), (void 0 === e.images || 0 === e.images.length) && void 0 !== t && t(o), o
		},
		parseGeometries: function(e) {
			var t = {};
			if(void 0 !== e)
				for(var i = new THREE.JSONLoader, r = new THREE.BufferGeometryLoader, n = 0, a = e.length; a > n; n++) {
					var o, s = e[n];
					switch(s.type) {
						case "PlaneGeometry":
						case "PlaneBufferGeometry":
							o = new THREE[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
							break;
						case "BoxGeometry":
						case "BoxBufferGeometry":
						case "CubeGeometry":
							o = new THREE[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
							break;
						case "CircleGeometry":
						case "CircleBufferGeometry":
							o = new THREE[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
							break;
						case "CylinderGeometry":
						case "CylinderBufferGeometry":
							o = new THREE[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
							break;
						case "ConeGeometry":
						case "ConeBufferGeometry":
							o = new THREE[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
							break;
						case "SphereGeometry":
						case "SphereBufferGeometry":
							o = new THREE[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
							break;
						case "DodecahedronGeometry":
						case "IcosahedronGeometry":
						case "OctahedronGeometry":
						case "TetrahedronGeometry":
							o = new THREE[s.type](s.radius, s.detail);
							break;
						case "RingGeometry":
						case "RingBufferGeometry":
							o = new THREE[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
							break;
						case "TorusGeometry":
						case "TorusBufferGeometry":
							o = new THREE[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
							break;
						case "TorusKnotGeometry":
						case "TorusKnotBufferGeometry":
							o = new THREE[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
							break;
						case "LatheGeometry":
						case "LatheBufferGeometry":
							o = new THREE[s.type](s.points, s.segments, s.phiStart, s.phiLength);
							break;
						case "BufferGeometry":
							o = r.parse(s);
							break;
						case "Geometry":
							o = i.parse(s.data, this.texturePath).geometry;
							break;
						default:
							console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
							continue
					}
					o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), t[s.uuid] = o
				}
			return t
		},
		parseMaterials: function(e, t) {
			var i = {};
			if(void 0 !== e) {
				var r = new THREE.MaterialLoader;
				r.setTextures(t);
				for(var n = 0, a = e.length; a > n; n++) {
					var o = r.parse(e[n]);
					i[o.uuid] = o
				}
			}
			return i
		},
		parseAnimations: function(e) {
			for(var t = [], i = 0; i < e.length; i++) {
				var r = THREE.AnimationClip.parse(e[i]);
				t.push(r)
			}
			return t
		},
		parseImages: function(e, t) {
			function i(e) {
				return r.manager.itemStart(e), o.load(e, function() {
					r.manager.itemEnd(e)
				})
			}
			var r = this,
				n = {};
			if(void 0 !== e && e.length > 0) {
				var a = new THREE.LoadingManager(t),
					o = new THREE.ImageLoader(a);
				o.setCrossOrigin(this.crossOrigin);
				for(var s = 0, l = e.length; l > s; s++) {
					var h = e[s],
						c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : r.texturePath + h.url;
					n[h.uuid] = i(c)
				}
			}
			return n
		},
		parseTextures: function(e, t) {
			function i(e) {
				return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), THREE[e])
			}
			var r = {};
			if(void 0 !== e)
				for(var n = 0, a = e.length; a > n; n++) {
					var o = e[n];
					void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), void 0 === t[o.image] && console.warn("THREE.ObjectLoader: Undefined image", o.image);
					var s = new THREE.Texture(t[o.image]);
					s.needsUpdate = !0, s.uuid = o.uuid, void 0 !== o.name && (s.name = o.name), void 0 !== o.mapping && (s.mapping = i(o.mapping)), void 0 !== o.offset && s.offset.fromArray(o.offset), void 0 !== o.repeat && s.repeat.fromArray(o.repeat), void 0 !== o.wrap && (s.wrapS = i(o.wrap[0]), s.wrapT = i(o.wrap[1])), void 0 !== o.minFilter && (s.minFilter = i(o.minFilter)), void 0 !== o.magFilter && (s.magFilter = i(o.magFilter)), void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy), void 0 !== o.flipY && (s.flipY = o.flipY), r[o.uuid] = s
				}
			return r
		},
		parseObject: function() {
			var e = new THREE.Matrix4;
			return function(t, i, r) {
				function n(e) {
					return void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), i[e]
				}

				function a(e) {
					return void 0 === e ? void 0 : (void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined material", e), r[e])
				}
				var o;
				switch(t.type) {
					case "Scene":
						o = new THREE.Scene;
						break;
					case "PerspectiveCamera":
						o = new THREE.PerspectiveCamera(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (o.focus = t.focus), void 0 !== t.zoom && (o.zoom = t.zoom), void 0 !== t.filmGauge && (o.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (o.filmOffset = t.filmOffset), void 0 !== t.view && (o.view = Object.assign({}, t.view));
						break;
					case "OrthographicCamera":
						o = new THREE.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
						break;
					case "AmbientLight":
						o = new THREE.AmbientLight(t.color, t.intensity);
						break;
					case "DirectionalLight":
						o = new THREE.DirectionalLight(t.color, t.intensity);
						break;
					case "PointLight":
						o = new THREE.PointLight(t.color, t.intensity, t.distance, t.decay);
						break;
					case "SpotLight":
						o = new THREE.SpotLight(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
						break;
					case "HemisphereLight":
						o = new THREE.HemisphereLight(t.color, t.groundColor, t.intensity);
						break;
					case "Mesh":
						var s = n(t.geometry),
							l = a(t.material);
						o = s.bones && s.bones.length > 0 ? new THREE.SkinnedMesh(s, l) : new THREE.Mesh(s, l);
						break;
					case "LOD":
						o = new THREE.LOD;
						break;
					case "Line":
						o = new THREE.Line(n(t.geometry), a(t.material), t.mode);
						break;
					case "PointCloud":
					case "Points":
						o = new THREE.Points(n(t.geometry), a(t.material));
						break;
					case "Sprite":
						o = new THREE.Sprite(a(t.material));
						break;
					case "Group":
						o = new THREE.Group;
						break;
					default:
						o = new THREE.Object3D
				}
				if(o.uuid = t.uuid, void 0 !== t.name && (o.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position), void 0 !== t.rotation && o.rotation.fromArray(t.rotation), void 0 !== t.scale && o.scale.fromArray(t.scale)), void 0 !== t.castShadow && (o.castShadow = t.castShadow), void 0 !== t.receiveShadow && (o.receiveShadow = t.receiveShadow), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.userData && (o.userData = t.userData), void 0 !== t.children)
					for(var h in t.children) o.add(this.parseObject(t.children[h], i, r));
				if("LOD" === t.type)
					for(var c = t.levels, u = 0; u < c.length; u++) {
						var p = c[u],
							h = o.getObjectByProperty("uuid", p.object);
						void 0 !== h && o.addLevel(h, p.distance)
					}
				return o
			}
		}()
	}), THREE.TextureLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
	}, Object.assign(THREE.TextureLoader.prototype, {
		load: function(e, t, i, r) {
			var n = new THREE.Texture,
				a = new THREE.ImageLoader(this.manager);
			return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(i) {
				var r = e.search(/\.(jpg|jpeg)$/) > 0 || 0 === e.search(/^data\:image\/jpeg/);
				n.format = r ? THREE.RGBFormat : THREE.RGBAFormat, n.image = i, n.needsUpdate = !0, void 0 !== t && t(n)
			}, i, r), n
		},
		setCrossOrigin: function(e) {
			return this.crossOrigin = e, this
		},
		setPath: function(e) {
			return this.path = e, this
		}
	}), THREE.CubeTextureLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
	}, Object.assign(THREE.CubeTextureLoader.prototype, {
		load: function(e, t, i, r) {
			function n(i) {
				o.load(e[i], function(e) {
					a.images[i] = e, s++, 6 === s && (a.needsUpdate = !0, t && t(a))
				}, void 0, r)
			}
			var a = new THREE.CubeTexture,
				o = new THREE.ImageLoader(this.manager);
			o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
			for(var s = 0, l = 0; l < e.length; ++l) n(l);
			return a
		},
		setCrossOrigin: function(e) {
			return this.crossOrigin = e, this
		},
		setPath: function(e) {
			return this.path = e, this
		}
	}), THREE.DataTextureLoader = THREE.BinaryTextureLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this._parser = null
	}, Object.assign(THREE.BinaryTextureLoader.prototype, {
		load: function(e, t, i, r) {
			var n = this,
				a = new THREE.DataTexture,
				o = new THREE.XHRLoader(this.manager);
			return o.setResponseType("arraybuffer"), o.load(e, function(e) {
				var i = n._parser(e);
				i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : THREE.ClampToEdgeWrapping, a.wrapT = void 0 !== i.wrapT ? i.wrapT : THREE.ClampToEdgeWrapping, a.magFilter = void 0 !== i.magFilter ? i.magFilter : THREE.LinearFilter, a.minFilter = void 0 !== i.minFilter ? i.minFilter : THREE.LinearMipMapLinearFilter, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps), 1 === i.mipmapCount && (a.minFilter = THREE.LinearFilter), a.needsUpdate = !0, t && t(a, i))
			}, i, r), a
		}
	}), THREE.CompressedTextureLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this._parser = null
	}, Object.assign(THREE.CompressedTextureLoader.prototype, {
		load: function(e, t, i, r) {
			function n(n) {
				l.load(e[n], function(e) {
					var i = a._parser(e, !0);
					o[n] = {
						width: i.width,
						height: i.height,
						format: i.format,
						mipmaps: i.mipmaps
					}, h += 1, 6 === h && (1 === i.mipmapCount && (s.minFilter = THREE.LinearFilter), s.format = i.format, s.needsUpdate = !0, t && t(s))
				}, i, r)
			}
			var a = this,
				o = [],
				s = new THREE.CompressedTexture;
			s.image = o;
			var l = new THREE.XHRLoader(this.manager);
			if(l.setPath(this.path), l.setResponseType("arraybuffer"), Array.isArray(e))
				for(var h = 0, c = 0, u = e.length; u > c; ++c) n(c);
			else l.load(e, function(e) {
				var i = a._parser(e, !0);
				if(i.isCubemap)
					for(var r = i.mipmaps.length / i.mipmapCount, n = 0; r > n; n++) {
						o[n] = {
							mipmaps: []
						};
						for(var l = 0; l < i.mipmapCount; l++) o[n].mipmaps.push(i.mipmaps[n * i.mipmapCount + l]), o[n].format = i.format, o[n].width = i.width, o[n].height = i.height
					} else s.image.width = i.width, s.image.height = i.height, s.mipmaps = i.mipmaps;
				1 === i.mipmapCount && (s.minFilter = THREE.LinearFilter), s.format = i.format, s.needsUpdate = !0, t && t(s)
			}, i, r);
			return s
		},
		setPath: function(e) {
			return this.path = e, this
		}
	}), THREE.Material = function() {
		Object.defineProperty(this, "id", {
			value: THREE.MaterialIdCount++
		}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = THREE.NormalBlending, this.side = THREE.FrontSide, this.shading = THREE.SmoothShading, this.vertexColors = THREE.NoColors, this.opacity = 1, this.transparent = !1, this.blendSrc = THREE.SrcAlphaFactor, this.blendDst = THREE.OneMinusSrcAlphaFactor, this.blendEquation = THREE.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = THREE.LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
	}, THREE.Material.prototype = {
		constructor: THREE.Material,
		get needsUpdate() {
			return this._needsUpdate
		},
		set needsUpdate(e) {
			e === !0 && this.update(), this._needsUpdate = e
		},
		setValues: function(e) {
			if(void 0 !== e)
				for(var t in e) {
					var i = e[t];
					if(void 0 !== i) {
						var r = this[t];
						void 0 !== r ? r instanceof THREE.Color ? r.set(i) : r instanceof THREE.Vector3 && i instanceof THREE.Vector3 ? r.copy(i) : this[t] = "overdraw" === t ? Number(i) : i : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
					} else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
				}
		},
		toJSON: function(e) {
			function t(e) {
				var t = [];
				for(var i in e) {
					var r = e[i];
					delete r.metadata, t.push(r)
				}
				return t
			}
			var i = void 0 === e;
			i && (e = {
				textures: {},
				images: {}
			});
			var r = {
				metadata: {
					version: 4.4,
					type: "Material",
					generator: "Material.toJSON"
				}
			};
			if(r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), this.color instanceof THREE.Color && (r.color = this.color.getHex()), void 0 !== this.roughness && (r.roughness = this.roughness), void 0 !== this.metalness && (r.metalness = this.metalness), this.emissive instanceof THREE.Color && (r.emissive = this.emissive.getHex()), this.specular instanceof THREE.Color && (r.specular = this.specular.getHex()), void 0 !== this.shininess && (r.shininess = this.shininess), this.map instanceof THREE.Texture && (r.map = this.map.toJSON(e).uuid), this.alphaMap instanceof THREE.Texture && (r.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap instanceof THREE.Texture && (r.lightMap = this.lightMap.toJSON(e).uuid), this.bumpMap instanceof THREE.Texture && (r.bumpMap = this.bumpMap.toJSON(e).uuid, r.bumpScale = this.bumpScale), this.normalMap instanceof THREE.Texture && (r.normalMap = this.normalMap.toJSON(e).uuid, r.normalScale = this.normalScale.toArray()), this.displacementMap instanceof THREE.Texture && (r.displacementMap = this.displacementMap.toJSON(e).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap instanceof THREE.Texture && (r.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap instanceof THREE.Texture && (r.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap instanceof THREE.Texture && (r.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap instanceof THREE.Texture && (r.specularMap = this.specularMap.toJSON(e).uuid), this.envMap instanceof THREE.Texture && (r.envMap = this.envMap.toJSON(e).uuid, r.reflectivity = this.reflectivity), void 0 !== this.size && (r.size = this.size), void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation), this.blending !== THREE.NormalBlending && (r.blending = this.blending), this.shading !== THREE.SmoothShading && (r.shading = this.shading), this.side !== THREE.FrontSide && (r.side = this.side), this.vertexColors !== THREE.NoColors && (r.vertexColors = this.vertexColors), this.opacity < 1 && (r.opacity = this.opacity), this.transparent === !0 && (r.transparent = this.transparent), this.alphaTest > 0 && (r.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (r.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (r.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (r.wireframeLinewidth = this.wireframeLinewidth), i) {
				var n = t(e.textures),
					a = t(e.images);
				n.length > 0 && (r.textures = n), a.length > 0 && (r.images = a)
			}
			return r
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			this.name = e.name, this.fog = e.fog, this.lights = e.lights, this.blending = e.blending, this.side = e.side, this.shading = e.shading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.overdraw = e.overdraw, this.visible = e.visible, this.clipShadows = e.clipShadows;
			var t = e.clippingPlanes,
				i = null;
			if(null !== t) {
				var r = t.length;
				i = new Array(r);
				for(var n = 0; n !== r; ++n) i[n] = t[n].clone()
			}
			return this.clippingPlanes = i, this
		},
		update: function() {
			this.dispatchEvent({
				type: "update"
			})
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}, Object.assign(THREE.Material.prototype, THREE.EventDispatcher.prototype), THREE.MaterialIdCount = 0, THREE.LineBasicMaterial = function(e) {
		THREE.Material.call(this), this.type = "LineBasicMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(e)
	}, THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial, THREE.LineBasicMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
	}, THREE.LineDashedMaterial = function(e) {
		THREE.Material.call(this), this.type = "LineDashedMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.lights = !1, this.setValues(e)
	}, THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial, THREE.LineDashedMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
	}, THREE.MeshBasicMaterial = function(e) {
		THREE.Material.call(this), this.type = "MeshBasicMaterial", this.color = new THREE.Color(16777215), this.map = null, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(e)
	}, THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial, THREE.MeshBasicMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
	}, THREE.MeshDepthMaterial = function(e) {
		THREE.Material.call(this), this.type = "MeshDepthMaterial", this.depthPacking = THREE.BasicDepthPacking, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(e)
	}, THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial, THREE.MeshDepthMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
	}, THREE.MeshLambertMaterial = function(e) {
		THREE.Material.call(this), this.type = "MeshLambertMaterial", this.color = new THREE.Color(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new THREE.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
	}, THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial, THREE.MeshLambertMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
	}, THREE.MeshNormalMaterial = function(e) {
		THREE.Material.call(this, e), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.morphTargets = !1, this.setValues(e)
	}, THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial, THREE.MeshNormalMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
	}, THREE.MeshPhongMaterial = function(e) {
		THREE.Material.call(this), this.type = "MeshPhongMaterial", this.color = new THREE.Color(16777215), this.specular = new THREE.Color(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new THREE.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
	}, THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial, THREE.MeshPhongMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
	}, THREE.MeshStandardMaterial = function(e) {
		THREE.Material.call(this), this.defines = {
			STANDARD: ""
		}, this.type = "MeshStandardMaterial", this.color = new THREE.Color(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new THREE.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
	}, THREE.MeshStandardMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshStandardMaterial.prototype.constructor = THREE.MeshStandardMaterial, THREE.MeshStandardMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.defines = {
			STANDARD: ""
		}, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
	}, THREE.MeshPhysicalMaterial = function(e) {
		THREE.MeshStandardMaterial.call(this), this.defines = {
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(e)
	}, THREE.MeshPhysicalMaterial.prototype = Object.create(THREE.MeshStandardMaterial.prototype), THREE.MeshPhysicalMaterial.prototype.constructor = THREE.MeshPhysicalMaterial, THREE.MeshPhysicalMaterial.prototype.copy = function(e) {
		return THREE.MeshStandardMaterial.prototype.copy.call(this, e), this.defines = {
			PHYSICAL: ""
		}, this.reflectivity = e.reflectivity, this.clearCoat = e.clearCoat, this.clearCoatRoughness = e.clearCoatRoughness, this
	}, THREE.MultiMaterial = function(e) {
		this.uuid = THREE.Math.generateUUID(), this.type = "MultiMaterial", this.materials = e instanceof Array ? e : [], this.visible = !0
	}, THREE.MultiMaterial.prototype = {
		constructor: THREE.MultiMaterial,
		toJSON: function(e) {
			for(var t = {
					metadata: {
						version: 4.2,
						type: "material",
						generator: "MaterialExporter"
					},
					uuid: this.uuid,
					type: this.type,
					materials: []
				}, i = this.materials, r = 0, n = i.length; n > r; r++) {
				var a = i[r].toJSON(e);
				delete a.metadata, t.materials.push(a)
			}
			return t.visible = this.visible, t
		},
		clone: function() {
			for(var e = new this.constructor, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
			return e.visible = this.visible, e
		}
	}, THREE.PointsMaterial = function(e) {
		THREE.Material.call(this), this.type = "PointsMaterial", this.color = new THREE.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(e)
	}, THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype), THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial, THREE.PointsMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
	}, THREE.ShaderMaterial = function(e) {
		THREE.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.defaultAttributeValues = {
			color: [1, 1, 1],
			uv: [0, 0],
			uv2: [0, 0]
		}, this.index0AttributeName = void 0, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
	}, THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype), THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial, THREE.ShaderMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = THREE.UniformsUtils.clone(e.uniforms), this.defines = e.defines, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
	}, THREE.ShaderMaterial.prototype.toJSON = function(e) {
		var t = THREE.Material.prototype.toJSON.call(this, e);
		return t.uniforms = this.uniforms, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
	}, THREE.RawShaderMaterial = function(e) {
		THREE.ShaderMaterial.call(this, e), this.type = "RawShaderMaterial"
	}, THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype), THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial, THREE.SpriteMaterial = function(e) {
		THREE.Material.call(this), this.type = "SpriteMaterial", this.color = new THREE.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(e)
	}, THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype), THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial, THREE.SpriteMaterial.prototype.copy = function(e) {
		return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this
	}, THREE.ShadowMaterial = function() {
		THREE.ShaderMaterial.call(this, {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.lights, {
				opacity: {
					value: 1
				}
			}]),
			vertexShader: THREE.ShaderChunk.shadow_vert,
			fragmentShader: THREE.ShaderChunk.shadow_frag
		}), this.lights = !0, this.transparent = !0, Object.defineProperties(this, {
			opacity: {
				enumerable: !0,
				get: function() {
					return this.uniforms.opacity.value
				},
				set: function(e) {
					this.uniforms.opacity.value = e
				}
			}
		})
	}, THREE.ShadowMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype), THREE.ShadowMaterial.prototype.constructor = THREE.ShadowMaterial, THREE.Texture = function(e, t, i, r, n, a, o, s, l, h) {
		Object.defineProperty(this, "id", {
			value: THREE.TextureIdCount++
		}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 !== e ? e : THREE.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : THREE.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== r ? r : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== n ? n : THREE.LinearFilter, this.minFilter = void 0 !== a ? a : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== o ? o : THREE.RGBAFormat, this.type = void 0 !== s ? s : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : THREE.LinearEncoding, this.version = 0, this.onUpdate = null
	}, THREE.Texture.DEFAULT_IMAGE = void 0, THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping, THREE.Texture.prototype = {
		constructor: THREE.Texture,
		set needsUpdate(e) {
			e === !0 && this.version++
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
		},
		toJSON: function(e) {
			function t(e) {
				var t;
				return void 0 !== e.toDataURL ? t = e : (t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(e, 0, 0, e.width, e.height)), t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
			}
			if(void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
			var i = {
				metadata: {
					version: 4.4,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				wrap: [this.wrapS, this.wrapT],
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY
			};
			if(void 0 !== this.image) {
				var r = this.image;
				void 0 === r.uuid && (r.uuid = THREE.Math.generateUUID()), void 0 === e.images[r.uuid] && (e.images[r.uuid] = {
					uuid: r.uuid,
					url: t(r)
				}), i.image = r.uuid
			}
			return e.textures[this.uuid] = i, i
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		},
		transformUv: function(e) {
			if(this.mapping === THREE.UVMapping) {
				if(e.multiply(this.repeat), e.add(this.offset), e.x < 0 || e.x > 1) switch(this.wrapS) {
					case THREE.RepeatWrapping:
						e.x = e.x - Math.floor(e.x);
						break;
					case THREE.ClampToEdgeWrapping:
						e.x = e.x < 0 ? 0 : 1;
						break;
					case THREE.MirroredRepeatWrapping:
						e.x = 1 === Math.abs(Math.floor(e.x) % 2) ? Math.ceil(e.x) - e.x : e.x - Math.floor(e.x)
				}
				if(e.y < 0 || e.y > 1) switch(this.wrapT) {
					case THREE.RepeatWrapping:
						e.y = e.y - Math.floor(e.y);
						break;
					case THREE.ClampToEdgeWrapping:
						e.y = e.y < 0 ? 0 : 1;
						break;
					case THREE.MirroredRepeatWrapping:
						e.y = 1 === Math.abs(Math.floor(e.y) % 2) ? Math.ceil(e.y) - e.y : e.y - Math.floor(e.y)
				}
				this.flipY && (e.y = 1 - e.y)
			}
		}
	}, Object.assign(THREE.Texture.prototype, THREE.EventDispatcher.prototype), THREE.TextureIdCount = 0, THREE.DepthTexture = function(e, t, i, r, n, a, o, s, l) {
		THREE.Texture.call(this, null, r, n, a, o, s, THREE.DepthFormat, i, l), this.image = {
			width: e,
			height: t
		}, this.type = void 0 !== i ? i : THREE.UnsignedShortType, this.magFilter = void 0 !== o ? o : THREE.NearestFilter, this.minFilter = void 0 !== s ? s : THREE.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
	}, THREE.DepthTexture.prototype = Object.create(THREE.Texture.prototype), THREE.DepthTexture.prototype.constructor = THREE.DepthTexture, THREE.CanvasTexture = function(e, t, i, r, n, a, o, s, l) {
		THREE.Texture.call(this, e, t, i, r, n, a, o, s, l), this.needsUpdate = !0
	}, THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture, THREE.CubeTexture = function(e, t, i, r, n, a, o, s, l, h) {
		e = void 0 !== e ? e : [], t = void 0 !== t ? t : THREE.CubeReflectionMapping, THREE.Texture.call(this, e, t, i, r, n, a, o, s, l, h), this.flipY = !1
	}, THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CubeTexture.prototype.constructor = THREE.CubeTexture, Object.defineProperty(THREE.CubeTexture.prototype, "images", {
		get: function() {
			return this.image
		},
		set: function(e) {
			this.image = e
		}
	}), THREE.CompressedTexture = function(e, t, i, r, n, a, o, s, l, h, c, u) {
		THREE.Texture.call(this, null, a, o, s, l, h, r, n, c, u), this.image = {
			width: t,
			height: i
		}, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
	}, THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture, THREE.DataTexture = function(e, t, i, r, n, a, o, s, l, h, c, u) {
		THREE.Texture.call(this, null, a, o, s, l, h, r, n, c, u), this.image = {
			data: e,
			width: t,
			height: i
		}, this.magFilter = void 0 !== l ? l : THREE.NearestFilter, this.minFilter = void 0 !== h ? h : THREE.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
	}, THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype), THREE.DataTexture.prototype.constructor = THREE.DataTexture, THREE.VideoTexture = function(e, t, i, r, n, a, o, s, l) {
		function h() {
			requestAnimationFrame(h), e.readyState >= e.HAVE_CURRENT_DATA && (c.needsUpdate = !0)
		}
		THREE.Texture.call(this, e, t, i, r, n, a, o, s, l), this.generateMipmaps = !1;
		var c = this;
		h()
	}, THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype), THREE.VideoTexture.prototype.constructor = THREE.VideoTexture, THREE.Group = function() {
		THREE.Object3D.call(this), this.type = "Group"
	}, THREE.Group.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.Group
	}), THREE.Points = function(e, t) {
		THREE.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new THREE.BufferGeometry, this.material = void 0 !== t ? t : new THREE.PointsMaterial({
			color: 16777215 * Math.random()
		})
	}, THREE.Points.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.Points,
		raycast: function() {
			var e = new THREE.Matrix4,
				t = new THREE.Ray,
				i = new THREE.Sphere;
			return function(r, n) {
				function a(e, i) {
					var a = t.distanceSqToPoint(e);
					if(u > a) {
						var s = t.closestPointToPoint(e);
						s.applyMatrix4(l);
						var h = r.ray.origin.distanceTo(s);
						if(h < r.near || h > r.far) return;
						n.push({
							distance: h,
							distanceToRay: Math.sqrt(a),
							point: s.clone(),
							index: i,
							face: null,
							object: o
						})
					}
				}
				var o = this,
					s = this.geometry,
					l = this.matrixWorld,
					h = r.params.Points.threshold;
				if(null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(l), r.ray.intersectsSphere(i) !== !1) {
					e.getInverse(l), t.copy(r.ray).applyMatrix4(e);
					var c = h / ((this.scale.x + this.scale.y + this.scale.z) / 3),
						u = c * c,
						p = new THREE.Vector3;
					if(s instanceof THREE.BufferGeometry) {
						var d = s.index,
							f = s.attributes,
							m = f.position.array;
						if(null !== d)
							for(var E = d.array, g = 0, v = E.length; v > g; g++) {
								var T = E[g];
								p.fromArray(m, 3 * T), a(p, T)
							} else
								for(var g = 0, y = m.length / 3; y > g; g++) p.fromArray(m, 3 * g), a(p, g)
					} else
						for(var _ = s.vertices, g = 0, y = _.length; y > g; g++) a(_[g], g)
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), THREE.Line = function(e, t, i) {
		return 1 === i ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new THREE.LineSegments(e, t)) : (THREE.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new THREE.BufferGeometry, void(this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({
			color: 16777215 * Math.random()
		})))
	}, THREE.Line.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.Line,
		raycast: function() {
			var e = new THREE.Matrix4,
				t = new THREE.Ray,
				i = new THREE.Sphere;
			return function(r, n) {
				var a = r.linePrecision,
					o = a * a,
					s = this.geometry,
					l = this.matrixWorld;
				if(null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(l), r.ray.intersectsSphere(i) !== !1) {
					e.getInverse(l), t.copy(r.ray).applyMatrix4(e);
					var h = new THREE.Vector3,
						c = new THREE.Vector3,
						u = new THREE.Vector3,
						p = new THREE.Vector3,
						d = this instanceof THREE.LineSegments ? 2 : 1;
					if(s instanceof THREE.BufferGeometry) {
						var f = s.index,
							m = s.attributes,
							E = m.position.array;
						if(null !== f)
							for(var g = f.array, v = 0, T = g.length - 1; T > v; v += d) {
								var y = g[v],
									_ = g[v + 1];
								h.fromArray(E, 3 * y), c.fromArray(E, 3 * _);
								var R = t.distanceSqToSegment(h, c, p, u);
								if(!(R > o)) {
									p.applyMatrix4(this.matrixWorld);
									var x = r.ray.origin.distanceTo(p);
									x < r.near || x > r.far || n.push({
										distance: x,
										point: u.clone().applyMatrix4(this.matrixWorld),
										index: v,
										face: null,
										faceIndex: null,
										object: this
									})
								}
							} else
								for(var v = 0, T = E.length / 3 - 1; T > v; v += d) {
									h.fromArray(E, 3 * v), c.fromArray(E, 3 * v + 3);
									var R = t.distanceSqToSegment(h, c, p, u);
									if(!(R > o)) {
										p.applyMatrix4(this.matrixWorld);
										var x = r.ray.origin.distanceTo(p);
										x < r.near || x > r.far || n.push({
											distance: x,
											point: u.clone().applyMatrix4(this.matrixWorld),
											index: v,
											face: null,
											faceIndex: null,
											object: this
										})
									}
								}
					} else if(s instanceof THREE.Geometry)
						for(var b = s.vertices, w = b.length, v = 0; w - 1 > v; v += d) {
							var R = t.distanceSqToSegment(b[v], b[v + 1], p, u);
							if(!(R > o)) {
								p.applyMatrix4(this.matrixWorld);
								var x = r.ray.origin.distanceTo(p);
								x < r.near || x > r.far || n.push({
									distance: x,
									point: u.clone().applyMatrix4(this.matrixWorld),
									index: v,
									face: null,
									faceIndex: null,
									object: this
								})
							}
						}
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), THREE.LineSegments = function(e, t) {
		THREE.Line.call(this, e, t), this.type = "LineSegments"
	}, THREE.LineSegments.prototype = Object.assign(Object.create(THREE.Line.prototype), {
		constructor: THREE.LineSegments
	}), THREE.Mesh = function(e, t) {
		THREE.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new THREE.BufferGeometry, this.material = void 0 !== t ? t : new THREE.MeshBasicMaterial({
			color: 16777215 * Math.random()
		}), this.drawMode = THREE.TrianglesDrawMode, this.updateMorphTargets()
	}, THREE.Mesh.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.Mesh,
		setDrawMode: function(e) {
			this.drawMode = e
		},
		copy: function(e) {
			return THREE.Object3D.prototype.copy.call(this, e), this.drawMode = e.drawMode, this
		},
		updateMorphTargets: function() {
			if(void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
				this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for(var e = 0, t = this.geometry.morphTargets.length; t > e; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
			}
		},
		getMorphTargetIndexByName: function(e) {
			return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
		},
		raycast: function() {
			function e(e, t, i, r, n, a, o) {
				return THREE.Triangle.barycoordFromPoint(e, t, i, r, m), n.multiplyScalar(m.x), a.multiplyScalar(m.y), o.multiplyScalar(m.z), n.add(a).add(o), n.clone()
			}

			function t(e, t, i, r, n, a, o) {
				var s, l = e.material;
				if(s = l.side === THREE.BackSide ? i.intersectTriangle(a, n, r, !0, o) : i.intersectTriangle(r, n, a, l.side !== THREE.DoubleSide, o), null === s) return null;
				g.copy(o), g.applyMatrix4(e.matrixWorld);
				var h = t.ray.origin.distanceTo(g);
				return h < t.near || h > t.far ? null : {
					distance: h,
					point: g.clone(),
					object: e
				}
			}

			function i(i, r, n, a, h, c, u, m) {
				o.fromArray(a, 3 * c), s.fromArray(a, 3 * u), l.fromArray(a, 3 * m);
				var g = t(i, r, n, o, s, l, E);
				return g && (h && (p.fromArray(h, 2 * c), d.fromArray(h, 2 * u), f.fromArray(h, 2 * m), g.uv = e(E, o, s, l, p, d, f)), g.face = new THREE.Face3(c, u, m, THREE.Triangle.normal(o, s, l)), g.faceIndex = c), g
			}
			var r = new THREE.Matrix4,
				n = new THREE.Ray,
				a = new THREE.Sphere,
				o = new THREE.Vector3,
				s = new THREE.Vector3,
				l = new THREE.Vector3,
				h = new THREE.Vector3,
				c = new THREE.Vector3,
				u = new THREE.Vector3,
				p = new THREE.Vector2,
				d = new THREE.Vector2,
				f = new THREE.Vector2,
				m = new THREE.Vector3,
				E = new THREE.Vector3,
				g = new THREE.Vector3;
			return function(m, g) {
				var v = this.geometry,
					T = this.material,
					y = this.matrixWorld;
				if(void 0 !== T && (null === v.boundingSphere && v.computeBoundingSphere(), a.copy(v.boundingSphere), a.applyMatrix4(y), m.ray.intersectsSphere(a) !== !1 && (r.getInverse(y), n.copy(m.ray).applyMatrix4(r), null === v.boundingBox || n.intersectsBox(v.boundingBox) !== !1))) {
					var _, R;
					if(v instanceof THREE.BufferGeometry) {
						var x, b, w, H = v.index,
							M = v.attributes,
							S = M.position.array;
						if(void 0 !== M.uv && (_ = M.uv.array), null !== H)
							for(var A = H.array, C = 0, L = A.length; L > C; C += 3) x = A[C], b = A[C + 1], w = A[C + 2], R = i(this, m, n, S, _, x, b, w), R && (R.faceIndex = Math.floor(C / 3), g.push(R));
						else
							for(var C = 0, L = S.length; L > C; C += 9) x = C / 3, b = x + 1, w = x + 2, R = i(this, m, n, S, _, x, b, w), R && (R.index = x, g.push(R))
					} else if(v instanceof THREE.Geometry) {
						var P, D, O, I = T instanceof THREE.MultiMaterial,
							B = I === !0 ? T.materials : null,
							U = v.vertices,
							F = v.faces,
							N = v.faceVertexUvs[0];
						N.length > 0 && (_ = N);
						for(var k = 0, G = F.length; G > k; k++) {
							var V = F[k],
								z = I === !0 ? B[V.materialIndex] : T;
							if(void 0 !== z) {
								if(P = U[V.a], D = U[V.b], O = U[V.c], z.morphTargets === !0) {
									var j = v.morphTargets,
										W = this.morphTargetInfluences;
									o.set(0, 0, 0), s.set(0, 0, 0), l.set(0, 0, 0);
									for(var X = 0, q = j.length; q > X; X++) {
										var Y = W[X];
										if(0 !== Y) {
											var $ = j[X].vertices;
											o.addScaledVector(h.subVectors($[V.a], P), Y), s.addScaledVector(c.subVectors($[V.b], D), Y), l.addScaledVector(u.subVectors($[V.c], O), Y)
										}
									}
									o.add(P), s.add(D), l.add(O), P = o, D = s, O = l
								}
								if(R = t(this, m, n, P, D, O, E)) {
									if(_) {
										var Z = _[k];
										p.copy(Z[0]), d.copy(Z[1]), f.copy(Z[2]), R.uv = e(E, P, D, O, p, d, f)
									}
									R.face = V, R.faceIndex = k, g.push(R)
								}
							}
						}
					}
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), THREE.Bone = function(e) {
		THREE.Object3D.call(this), this.type = "Bone", this.skin = e
	}, THREE.Bone.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.Bone,
		copy: function(e) {
			return THREE.Object3D.prototype.copy.call(this, e), this.skin = e.skin, this
		}
	}), THREE.Skeleton = function(e, t, i) {
		if(this.useVertexTexture = void 0 !== i ? i : !0, this.identityMatrix = new THREE.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture) {
			var r = Math.sqrt(4 * this.bones.length);
			r = THREE.Math.nextPowerOfTwo(Math.ceil(r)), r = Math.max(r, 4), this.boneTextureWidth = r, this.boneTextureHeight = r, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType)
		} else this.boneMatrices = new Float32Array(16 * this.bones.length);
		if(void 0 === t) this.calculateInverses();
		else if(this.bones.length === t.length) this.boneInverses = t.slice(0);
		else {
			console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
			for(var n = 0, a = this.bones.length; a > n; n++) this.boneInverses.push(new THREE.Matrix4)
		}
	}, Object.assign(THREE.Skeleton.prototype, {
		calculateInverses: function() {
			this.boneInverses = [];
			for(var e = 0, t = this.bones.length; t > e; e++) {
				var i = new THREE.Matrix4;
				this.bones[e] && i.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(i)
			}
		},
		pose: function() {
			for(var e, t = 0, i = this.bones.length; i > t; t++) e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
			for(var t = 0, i = this.bones.length; i > t; t++) e = this.bones[t], e && (e.parent instanceof THREE.Bone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
		},
		update: function() {
			var e = new THREE.Matrix4;
			return function() {
				for(var t = 0, i = this.bones.length; i > t; t++) {
					var r = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
					e.multiplyMatrices(r, this.boneInverses[t]), e.toArray(this.boneMatrices, 16 * t)
				}
				this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
			}
		}(),
		clone: function() {
			return new THREE.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
		}
	}), THREE.SkinnedMesh = function(e, t, i) {
		THREE.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new THREE.Matrix4, this.bindMatrixInverse = new THREE.Matrix4;
		var r = [];
		if(this.geometry && void 0 !== this.geometry.bones) {
			for(var n, a, o = 0, s = this.geometry.bones.length; s > o; ++o) a = this.geometry.bones[o], n = new THREE.Bone(this), r.push(n), n.name = a.name, n.position.fromArray(a.pos), n.quaternion.fromArray(a.rotq), void 0 !== a.scl && n.scale.fromArray(a.scl);
			for(var o = 0, s = this.geometry.bones.length; s > o; ++o) a = this.geometry.bones[o], -1 !== a.parent && null !== a.parent && void 0 !== r[a.parent] ? r[a.parent].add(r[o]) : this.add(r[o])
		}
		this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new THREE.Skeleton(r, void 0, i), this.matrixWorld)
	}, THREE.SkinnedMesh.prototype = Object.assign(Object.create(THREE.Mesh.prototype), {
		constructor: THREE.SkinnedMesh,
		bind: function(e, t) {
			this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
		},
		pose: function() {
			this.skeleton.pose()
		},
		normalizeSkinWeights: function() {
			if(this.geometry instanceof THREE.Geometry)
				for(var e = 0; e < this.geometry.skinWeights.length; e++) {
					var t = this.geometry.skinWeights[e],
						i = 1 / t.lengthManhattan();
					1 / 0 !== i ? t.multiplyScalar(i) : t.set(1, 0, 0, 0)
				} else if(this.geometry instanceof THREE.BufferGeometry)
					for(var r = new THREE.Vector4, n = this.geometry.attributes.skinWeight, e = 0; e < n.count; e++) {
						r.x = n.getX(e), r.y = n.getY(e), r.z = n.getZ(e), r.w = n.getW(e);
						var i = 1 / r.lengthManhattan();
						1 / 0 !== i ? r.multiplyScalar(i) : r.set(1, 0, 0, 0), n.setXYZW(e, r.x, r.y, r.z, r.w)
					}
		},
		updateMatrixWorld: function() {
			THREE.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
		},
		clone: function() {
			return new this.constructor(this.geometry, this.material, this.skeleton.useVertexTexture).copy(this)
		}
	}), THREE.LOD = function() {
		THREE.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {
			levels: {
				enumerable: !0,
				value: []
			}
		})
	}, THREE.LOD.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.LOD,
		copy: function(e) {
			THREE.Object3D.prototype.copy.call(this, e, !1);
			for(var t = e.levels, i = 0, r = t.length; r > i; i++) {
				var n = t[i];
				this.addLevel(n.object.clone(), n.distance)
			}
			return this
		},
		addLevel: function(e, t) {
			void 0 === t && (t = 0), t = Math.abs(t);
			for(var i = this.levels, r = 0; r < i.length && !(t < i[r].distance); r++);
			i.splice(r, 0, {
				distance: t,
				object: e
			}), this.add(e)
		},
		getObjectForDistance: function(e) {
			for(var t = this.levels, i = 1, r = t.length; r > i && !(e < t[i].distance); i++);
			return t[i - 1].object
		},
		raycast: function() {
			var e = new THREE.Vector3;
			return function(t, i) {
				e.setFromMatrixPosition(this.matrixWorld);
				var r = t.ray.origin.distanceTo(e);
				this.getObjectForDistance(r).raycast(t, i)
			}
		}(),
		update: function() {
			var e = new THREE.Vector3,
				t = new THREE.Vector3;
			return function(i) {
				var r = this.levels;
				if(r.length > 1) {
					e.setFromMatrixPosition(i.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
					var n = e.distanceTo(t);
					r[0].object.visible = !0;
					for(var a = 1, o = r.length; o > a && n >= r[a].distance; a++) r[a - 1].object.visible = !1, r[a].object.visible = !0;
					for(; o > a; a++) r[a].object.visible = !1
				}
			}
		}(),
		toJSON: function(e) {
			var t = THREE.Object3D.prototype.toJSON.call(this, e);
			t.object.levels = [];
			for(var i = this.levels, r = 0, n = i.length; n > r; r++) {
				var a = i[r];
				t.object.levels.push({
					object: a.object.uuid,
					distance: a.distance
				})
			}
			return t
		}
	}), THREE.Sprite = function(e) {
		THREE.Object3D.call(this), this.type = "Sprite", this.material = void 0 !== e ? e : new THREE.SpriteMaterial
	}, THREE.Sprite.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.Sprite,
		raycast: function() {
			var e = new THREE.Vector3;
			return function(t, i) {
				e.setFromMatrixPosition(this.matrixWorld);
				var r = t.ray.distanceSqToPoint(e),
					n = this.scale.x * this.scale.y / 4;
				r > n || i.push({
					distance: Math.sqrt(r),
					point: this.position,
					face: null,
					object: this
				})
			}
		}(),
		clone: function() {
			return new this.constructor(this.material).copy(this)
		}
	}), THREE.LensFlare = function(e, t, i, r, n) {
		THREE.Object3D.call(this), this.lensFlares = [], this.positionScreen = new THREE.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, i, r, n)
	}, THREE.LensFlare.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
		constructor: THREE.LensFlare,
		copy: function(e) {
			THREE.Object3D.prototype.copy.call(this, e), this.positionScreen.copy(e.positionScreen), this.customUpdateCallback = e.customUpdateCallback;
			for(var t = 0, i = e.lensFlares.length; i > t; t++) this.lensFlares.push(e.lensFlares[t]);
			return this
		},
		add: function(e, t, i, r, n, a) {
			void 0 === t && (t = -1), void 0 === i && (i = 0), void 0 === a && (a = 1), void 0 === n && (n = new THREE.Color(16777215)), void 0 === r && (r = THREE.NormalBlending), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
				texture: e,
				size: t,
				distance: i,
				x: 0,
				y: 0,
				z: 0,
				scale: 1,
				rotation: 0,
				opacity: a,
				color: n,
				blending: r
			})
		},
		updateLensFlares: function() {
			var e, t, i = this.lensFlares.length,
				r = 2 * -this.positionScreen.x,
				n = 2 * -this.positionScreen.y;
			for(e = 0; i > e; e++) t = this.lensFlares[e], t.x = this.positionScreen.x + r * t.distance, t.y = this.positionScreen.y + n * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
		}
	}), THREE.Scene = function() {
		THREE.Object3D.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
	}, THREE.Scene.prototype = Object.create(THREE.Object3D.prototype), THREE.Scene.prototype.constructor = THREE.Scene, THREE.Scene.prototype.copy = function(e, t) {
		return THREE.Object3D.prototype.copy.call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
	}, THREE.Fog = function(e, t, i) {
		this.name = "", this.color = new THREE.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== i ? i : 1e3
	}, THREE.Fog.prototype.clone = function() {
		return new THREE.Fog(this.color.getHex(), this.near, this.far)
	}, THREE.FogExp2 = function(e, t) {
		this.name = "", this.color = new THREE.Color(e), this.density = void 0 !== t ? t : 25e-5
	}, THREE.FogExp2.prototype.clone = function() {
		return new THREE.FogExp2(this.color.getHex(), this.density)
	}, THREE.ShaderChunk = {}, THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n", THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif\n", THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n", THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif\n", THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n", THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n", THREE.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n	return any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n		if( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n			return distanceFalloff * maxDistanceCutoffFactor;\n#else\n			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n		}\n		return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n", THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif\n", THREE.ShaderChunk.clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n	for ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n		vec4 plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n	}\n#endif\n", THREE.ShaderChunk.clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n	#if ! defined( PHYSICAL ) && ! defined( PHONG )\n		varying vec3 vViewPosition;\n	#endif\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n", THREE.ShaderChunk.clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	varying vec3 vViewPosition;\n#endif\n", THREE.ShaderChunk.clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	vViewPosition = - mvPosition.xyz;\n#endif\n", THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif", THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif\n", THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif", THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif", THREE.ShaderChunk.common = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n", THREE.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n	vec3 absDirection = abs(direction);\n	int face = -1;\n	if( absDirection.x > absDirection.z ) {\n		if(absDirection.x > absDirection.y )\n			face = direction.x > 0.0 ? 0 : 3;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	else {\n		if(absDirection.z > absDirection.y )\n			face = direction.z > 0.0 ? 2 : 5;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	return face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n	float dxRoughness = dFdx(roughness);\n	float dyRoughness = dFdy(roughness);\n	vec3 dx = dFdx( vec * scale * dxRoughness );\n	vec3 dy = dFdy( vec * scale * dyRoughness );\n	float d = max( dot( dx, dx ), dot( dy, dy ) );\n	d = clamp(d, 1.0, cubeUV_rangeClamp);\n	float mipLevel = 0.5 * log2(d);\n	return vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n	float a = 16.0 * cubeUV_rcpTextureSize;\n	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n	float powScale = exp2_packed.x * exp2_packed.y;\n	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n	bool bRes = mipLevel == 0.0;\n	scale =  bRes && (scale < a) ? a : scale;\n	vec3 r;\n	vec2 offset;\n	int face = getFaceFromDirection(direction);\n	float rcpPowScale = 1.0 / powScale;\n	if( face == 0) {\n		r = vec3(direction.x, -direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 1) {\n		r = vec3(direction.y, direction.x, direction.z);\n		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 2) {\n		r = vec3(direction.z, direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 3) {\n		r = vec3(direction.x, direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else if( face == 4) {\n		r = vec3(direction.y, direction.x, -direction.z);\n		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else {\n		r = vec3(direction.z, -direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	r = normalize(r);\n	float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n	vec2 base = offset + vec2( texelOffset );\n	return base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n	float roughnessVal = roughness* cubeUV_maxLods3;\n	float r1 = floor(roughnessVal);\n	float r2 = r1 + 1.0;\n	float t = fract(roughnessVal);\n	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n	float s = mipInfo.y;\n	float level0 = mipInfo.x;\n	float level1 = level0 + 1.0;\n	level1 = level1 > 5.0 ? 5.0 : level1;\n	level0 += min( floor( s + 0.5 ), 5.0 );\n	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n	vec4 result = mix(color10, color20, t);\n	return vec4(result.rgb, 1.0);\n}\n#endif\n", THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n	objectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n", THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n", THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif\n", THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n", THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif\n", THREE.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n", THREE.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n", THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n	envColor = envMapTexelToLinear( envColor );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif\n", THREE.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n	uniform float reflectivity;\n	uniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n		varying vec3 vWorldPosition;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif\n", THREE.ShaderChunk.envmap_pars_vertex = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif\n", THREE.ShaderChunk.envmap_vertex = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif\n", THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	#ifdef FOG_EXP2\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n", THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n", THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", THREE.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif\n", THREE.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		if ( testLightInRange( lightDistance, pointLight.distance ) ) {\n			directLight.color = pointLight.color;\n			directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		#include <normal_flip>\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n		#else\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n		#endif\n		#include <normal_flip>\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n			sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif\n", THREE.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n", THREE.ShaderChunk.lights_phong_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n", THREE.ShaderChunk.lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n", THREE.ShaderChunk.lights_physical_pars_fragment = "struct PhysicalMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n	#ifndef STANDARD\n		float clearCoat;\n		float clearCoatRoughness;\n	#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifndef STANDARD\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	#ifndef STANDARD\n		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifndef STANDARD\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		float dotNL = dotNV;\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n	#ifndef STANDARD\n		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n", THREE.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef USE_LIGHTMAP\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n	 	irradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n	#endif\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n	#ifndef STANDARD\n		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n	#else\n		vec3 clearCoatRadiance = vec3( 0.0 );\n	#endif\n		\n	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n", THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif", THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n	uniform float logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n#endif\n", THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n	uniform float logDepthBufFC;\n#endif", THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n	#else\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n	#endif\n#endif\n", THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif\n", THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n", THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n", THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n#endif\n", THREE.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.r;\n#endif\n", THREE.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n", THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif", THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif\n", THREE.ShaderChunk.normal_flip = "#ifdef DOUBLE_SIDED\n	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n	float flipNormal = 1.0;\n#endif\n", THREE.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n", THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif\n", THREE.ShaderChunk.packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n", THREE.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n", THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n	vec4 mvPosition = modelViewMatrix * skinned;\n#else\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n", THREE.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.r;\n#endif\n", THREE.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return 1.0;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif\n", THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n#endif\n", THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif\n", THREE.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}\n", THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif\n", THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n#endif\n", THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n", THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", THREE.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n", THREE.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n", THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif", THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif", THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif", THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n#endif", THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n#endif\n", THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif", THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n	#ifdef USE_SKINNING\n		vec4 worldPosition = modelMatrix * skinned;\n	#else\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n	#endif\n#endif\n", THREE.UniformsUtils = {
		merge: function(e) {
			for(var t = {}, i = 0; i < e.length; i++) {
				var r = this.clone(e[i]);
				for(var n in r) t[n] = r[n]
			}
			return t
		},
		clone: function(e) {
			var t = {};
			for(var i in e) {
				t[i] = {};
				for(var r in e[i]) {
					var n = e[i][r];
					t[i][r] = n instanceof THREE.Color || n instanceof THREE.Vector2 || n instanceof THREE.Vector3 || n instanceof THREE.Vector4 || n instanceof THREE.Matrix3 || n instanceof THREE.Matrix4 || n instanceof THREE.Texture ? n.clone() : Array.isArray(n) ? n.slice() : n
				}
			}
			return t
		}
	}, THREE.UniformsLib = {
		common: {
			diffuse: {
				value: new THREE.Color(15658734)
			},
			opacity: {
				value: 1
			},
			map: {
				value: null
			},
			offsetRepeat: {
				value: new THREE.Vector4(0, 0, 1, 1)
			},
			specularMap: {
				value: null
			},
			alphaMap: {
				value: null
			},
			envMap: {
				value: null
			},
			flipEnvMap: {
				value: -1
			},
			reflectivity: {
				value: 1
			},
			refractionRatio: {
				value: .98
			}
		},
		aomap: {
			aoMap: {
				value: null
			},
			aoMapIntensity: {
				value: 1
			}
		},
		lightmap: {
			lightMap: {
				value: null
			},
			lightMapIntensity: {
				value: 1
			}
		},
		emissivemap: {
			emissiveMap: {
				value: null
			}
		},
		bumpmap: {
			bumpMap: {
				value: null
			},
			bumpScale: {
				value: 1
			}
		},
		normalmap: {
			normalMap: {
				value: null
			},
			normalScale: {
				value: new THREE.Vector2(1, 1)
			}
		},
		displacementmap: {
			displacementMap: {
				value: null
			},
			displacementScale: {
				value: 1
			},
			displacementBias: {
				value: 0
			}
		},
		roughnessmap: {
			roughnessMap: {
				value: null
			}
		},
		metalnessmap: {
			metalnessMap: {
				value: null
			}
		},
		fog: {
			fogDensity: {
				value: 25e-5
			},
			fogNear: {
				value: 1
			},
			fogFar: {
				value: 2e3
			},
			fogColor: {
				value: new THREE.Color(16777215)
			}
		},
		lights: {
			ambientLightColor: {
				value: []
			},
			directionalLights: {
				value: [],
				properties: {
					direction: {},
					color: {},
					shadow: {},
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			directionalShadowMap: {
				value: []
			},
			directionalShadowMatrix: {
				value: []
			},
			spotLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					direction: {},
					distance: {},
					coneCos: {},
					penumbraCos: {},
					decay: {},
					shadow: {},
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			spotShadowMap: {
				value: []
			},
			spotShadowMatrix: {
				value: []
			},
			pointLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					decay: {},
					distance: {},
					shadow: {},
					shadowBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			pointShadowMap: {
				value: []
			},
			pointShadowMatrix: {
				value: []
			},
			hemisphereLights: {
				value: [],
				properties: {
					direction: {},
					skyColor: {},
					groundColor: {}
				}
			}
		},
		points: {
			diffuse: {
				value: new THREE.Color(15658734)
			},
			opacity: {
				value: 1
			},
			size: {
				value: 1
			},
			scale: {
				value: 1
			},
			map: {
				value: null
			},
			offsetRepeat: {
				value: new THREE.Vector4(0, 0, 1, 1)
			}
		}
	}, THREE.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n	gl_FragColor.a *= opacity;\n}\n", THREE.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n", THREE.ShaderChunk.depth_frag = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n	#endif\n}\n", THREE.ShaderChunk.depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n", THREE.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n", THREE.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition;\n}\n", THREE.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldPosition );\n	vec2 sampleUV;\n	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n}\n", THREE.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n", THREE.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n", THREE.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight;\n	reflectedLight.directDiffuse = vec3( 0.0 );\n	reflectedLight.directSpecular = vec3( 0.0 );\n	reflectedLight.indirectDiffuse = diffuseColor.rgb;\n	reflectedLight.indirectSpecular = vec3( 0.0 );\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n}\n", THREE.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderChunk.meshphysical_frag = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n	uniform float clearCoat;\n	uniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.meshphysical_vert = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	gl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n	#include <logdepthbuf_fragment>\n}\n", THREE.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vNormal = normalize( normalMatrix * normal );\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n", THREE.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <project_vertex>\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / - mvPosition.z );\n	#else\n		gl_PointSize = size;\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderChunk.shadow_frag = "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n", THREE.ShaderChunk.shadow_vert = "#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderLib = {
		basic: {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog]),
			vertexShader: THREE.ShaderChunk.meshbasic_vert,
			fragmentShader: THREE.ShaderChunk.meshbasic_frag
		},
		lambert: {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
				emissive: {
					value: new THREE.Color(0)
				}
			}]),
			vertexShader: THREE.ShaderChunk.meshlambert_vert,
			fragmentShader: THREE.ShaderChunk.meshlambert_frag
		},
		phong: {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
				emissive: {
					value: new THREE.Color(0)
				},
				specular: {
					value: new THREE.Color(1118481)
				},
				shininess: {
					value: 30
				}
			}]),
			vertexShader: THREE.ShaderChunk.meshphong_vert,
			fragmentShader: THREE.ShaderChunk.meshphong_frag
		},
		standard: {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.roughnessmap, THREE.UniformsLib.metalnessmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
				emissive: {
					value: new THREE.Color(0)
				},
				roughness: {
					value: .5
				},
				metalness: {
					value: 0
				},
				envMapIntensity: {
					value: 1
				}
			}]),
			vertexShader: THREE.ShaderChunk.meshphysical_vert,
			fragmentShader: THREE.ShaderChunk.meshphysical_frag
		},
		points: {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.fog]),
			vertexShader: THREE.ShaderChunk.points_vert,
			fragmentShader: THREE.ShaderChunk.points_frag
		},
		dashed: {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
				scale: {
					value: 1
				},
				dashSize: {
					value: 1
				},
				totalSize: {
					value: 2
				}
			}]),
			vertexShader: THREE.ShaderChunk.linedashed_vert,
			fragmentShader: THREE.ShaderChunk.linedashed_frag
		},
		depth: {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.displacementmap]),
			vertexShader: THREE.ShaderChunk.depth_vert,
			fragmentShader: THREE.ShaderChunk.depth_frag
		},
		normal: {
			uniforms: {
				opacity: {
					value: 1
				}
			},
			vertexShader: THREE.ShaderChunk.normal_vert,
			fragmentShader: THREE.ShaderChunk.normal_frag
		},
		cube: {
			uniforms: {
				tCube: {
					value: null
				},
				tFlip: {
					value: -1
				},
				opacity: {
					value: 1
				}
			},
			vertexShader: THREE.ShaderChunk.cube_vert,
			fragmentShader: THREE.ShaderChunk.cube_frag
		},
		equirect: {
			uniforms: {
				tEquirect: {
					value: null
				},
				tFlip: {
					value: -1
				}
			},
			vertexShader: THREE.ShaderChunk.equirect_vert,
			fragmentShader: THREE.ShaderChunk.equirect_frag
		},
		distanceRGBA: {
			uniforms: {
				lightPos: {
					value: new THREE.Vector3
				}
			},
			vertexShader: THREE.ShaderChunk.distanceRGBA_vert,
			fragmentShader: THREE.ShaderChunk.distanceRGBA_frag
		}
	}, THREE.ShaderLib.physical = {
		uniforms: THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms, {
			clearCoat: {
				value: 0
			},
			clearCoatRoughness: {
				value: 0
			}
		}]),
		vertexShader: THREE.ShaderChunk.meshphysical_vert,
		fragmentShader: THREE.ShaderChunk.meshphysical_frag
	}, THREE.WebGLRenderer = function(e) {
		function t() {
			return null === et ? dt : 1
		}

		function i(e, t, i, r) {
			V === !0 && (e *= r, t *= r, i *= r), Lt.clearColor(e, t, i, r)
		}

		function r() {
			Lt.init(), Lt.scissor(at.copy(ft).multiplyScalar(dt)), Lt.viewport(st.copy(Et).multiplyScalar(dt)), i(ht.r, ht.g, ht.b, ct)
		}

		function n() {
			J = null, nt = null, rt = "", it = -1, Lt.reset()
		}

		function a(e) {
			e.preventDefault(), n(), r(), Pt.clear()
		}

		function o(e) {
			var t = e.target;
			t.removeEventListener("dispose", o), s(t)
		}

		function s(e) {
			l(e), Pt.delete(e)
		}

		function l(e) {
			var t = Pt.get(e).program;
			e.program = void 0, void 0 !== t && It.releaseProgram(t)
		}

		function h(e, t, i, r) {
			var n;
			if(i instanceof THREE.InstancedBufferGeometry && (n = At.get("ANGLE_instanced_arrays"), null === n)) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			void 0 === r && (r = 0), Lt.initAttributes();
			var a = i.attributes,
				o = t.getAttributes(),
				s = e.defaultAttributeValues;
			for(var l in o) {
				var h = o[l];
				if(h >= 0) {
					var c = a[l];
					if(void 0 !== c) {
						var u = Ht.FLOAT,
							p = c.array,
							d = c.normalized;
						p instanceof Float32Array ? u = Ht.FLOAT : p instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : p instanceof Uint16Array ? u = Ht.UNSIGNED_SHORT : p instanceof Int16Array ? u = Ht.SHORT : p instanceof Uint32Array ? u = Ht.UNSIGNED_INT : p instanceof Int32Array ? u = Ht.INT : p instanceof Int8Array ? u = Ht.BYTE : p instanceof Uint8Array && (u = Ht.UNSIGNED_BYTE);
						var f = c.itemSize,
							m = Ot.getAttributeBuffer(c);
						if(c instanceof THREE.InterleavedBufferAttribute) {
							var E = c.data,
								g = E.stride,
								v = c.offset;
							E instanceof THREE.InstancedInterleavedBuffer ? (Lt.enableAttributeAndDivisor(h, E.meshPerAttribute, n), void 0 === i.maxInstancedCount && (i.maxInstancedCount = E.meshPerAttribute * E.count)) : Lt.enableAttribute(h), Ht.bindBuffer(Ht.ARRAY_BUFFER, m), Ht.vertexAttribPointer(h, f, u, d, g * E.array.BYTES_PER_ELEMENT, (r * g + v) * E.array.BYTES_PER_ELEMENT)
						} else c instanceof THREE.InstancedBufferAttribute ? (Lt.enableAttributeAndDivisor(h, c.meshPerAttribute, n), void 0 === i.maxInstancedCount && (i.maxInstancedCount = c.meshPerAttribute * c.count)) : Lt.enableAttribute(h), Ht.bindBuffer(Ht.ARRAY_BUFFER, m), Ht.vertexAttribPointer(h, f, u, d, 0, r * f * c.array.BYTES_PER_ELEMENT)
					} else if(void 0 !== s) {
						var T = s[l];
						if(void 0 !== T) switch(T.length) {
							case 2:
								Ht.vertexAttrib2fv(h, T);
								break;
							case 3:
								Ht.vertexAttrib3fv(h, T);
								break;
							case 4:
								Ht.vertexAttrib4fv(h, T);
								break;
							default:
								Ht.vertexAttrib1fv(h, T)
						}
					}
				}
			}
			Lt.disableUnusedAttributes()
		}

		function c(e, t) {
			return Math.abs(t[0]) - Math.abs(e[0])
		}

		function u(e, t) {
			return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.program && t.material.program && e.material.program !== t.material.program ? e.material.program.id - t.material.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
		}

		function p(e, t) {
			return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
		}

		function d(e, t, i, r, n) {
			var a, o;
			i.transparent ? (a = q, o = ++Y) : (a = W, o = ++X);
			var s = a[o];
			void 0 !== s ? (s.id = e.id, s.object = e, s.geometry = t, s.material = i, s.z = xt.z, s.group = n) : (s = {
				id: e.id,
				object: e,
				geometry: t,
				material: i,
				z: xt.z,
				group: n
			}, a.push(s))
		}

		function f(e) {
			var t = e.geometry;
			return null === t.boundingSphere && t.computeBoundingSphere(), _t.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), E(_t)
		}

		function m(e) {
			return _t.center.set(0, 0, 0), _t.radius = .7071067811865476, _t.applyMatrix4(e.matrixWorld), E(_t)
		}

		function E(e) {
			if(!gt.intersectsSphere(e)) return !1;
			var t = vt.numPlanes;
			if(0 === t) return !0;
			var i = Q.clippingPlanes,
				r = e.center,
				n = -e.radius,
				a = 0;
			do
				if(i[a].distanceToPoint(r) < n) return !1;
			while(++a !== t);
			return !0
		}

		function g(e, t) {
			if(e.visible !== !1) {
				if(e.layers.test(t.layers))
					if(e instanceof THREE.Light) j.push(e);
					else if(e instanceof THREE.Sprite)(e.frustumCulled === !1 || m(e) === !0) && Z.push(e);
				else if(e instanceof THREE.LensFlare) K.push(e);
				else if(e instanceof THREE.ImmediateRenderObject) Q.sortObjects === !0 && (xt.setFromMatrixPosition(e.matrixWorld), xt.applyProjection(Rt)), d(e, null, e.material, xt.z, null);
				else if((e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && (e instanceof THREE.SkinnedMesh && e.skeleton.update(), e.frustumCulled === !1 || f(e) === !0)) {
					var i = e.material;
					if(i.visible === !0) {
						Q.sortObjects === !0 && (xt.setFromMatrixPosition(e.matrixWorld), xt.applyProjection(Rt));
						var r = Ot.update(e);
						if(i instanceof THREE.MultiMaterial)
							for(var n = r.groups, a = i.materials, o = 0, s = n.length; s > o; o++) {
								var l = n[o],
									h = a[l.materialIndex];
								h.visible === !0 && d(e, r, h, xt.z, l)
							} else d(e, r, i, xt.z, null)
					}
				}
				for(var c = e.children, o = 0, s = c.length; s > o; o++) g(c[o], t)
			}
		}

		function v(e, t, i, r) {
			for(var n = 0, a = e.length; a > n; n++) {
				var o = e[n],
					s = o.object,
					l = o.geometry,
					h = void 0 === r ? o.material : r,
					c = o.group;
				if(s.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, s.matrixWorld), s.normalMatrix.getNormalMatrix(s.modelViewMatrix), s instanceof THREE.ImmediateRenderObject) {
					y(h);
					var u = _(t, i, h, s);
					rt = "", s.render(function(e) {
						Q.renderBufferImmediate(e, u, h)
					})
				} else Q.renderBufferDirect(t, i, l, h, s, c)
			}
		}

		function T(e, t, i) {
			var r = Pt.get(e),
				n = It.getParameters(e, bt, t, vt.numPlanes, i),
				a = It.getProgramCode(e, n),
				s = r.program,
				h = !0;
			if(void 0 === s) e.addEventListener("dispose", o);
			else if(s.code !== a) l(e);
			else {
				if(void 0 !== n.shaderID) return;
				h = !1
			}
			if(h) {
				if(n.shaderID) {
					var c = THREE.ShaderLib[n.shaderID];
					r.__webglShader = {
						name: e.type,
						uniforms: THREE.UniformsUtils.clone(c.uniforms),
						vertexShader: c.vertexShader,
						fragmentShader: c.fragmentShader
					}
				} else r.__webglShader = {
					name: e.type,
					uniforms: e.uniforms,
					vertexShader: e.vertexShader,
					fragmentShader: e.fragmentShader
				};
				e.__webglShader = r.__webglShader, s = It.acquireProgram(e, n, a), r.program = s, e.program = s
			}
			var u = s.getAttributes();
			if(e.morphTargets) {
				e.numSupportedMorphTargets = 0;
				for(var p = 0; p < Q.maxMorphTargets; p++) u["morphTarget" + p] >= 0 && e.numSupportedMorphTargets++
			}
			if(e.morphNormals) {
				e.numSupportedMorphNormals = 0;
				for(var p = 0; p < Q.maxMorphNormals; p++) u["morphNormal" + p] >= 0 && e.numSupportedMorphNormals++
			}
			var d = r.__webglShader.uniforms;
			(e instanceof THREE.ShaderMaterial || e instanceof THREE.RawShaderMaterial) && e.clipping !== !0 || (r.numClippingPlanes = vt.numPlanes, d.clippingPlanes = vt.uniform), e.lights && (r.lightsHash = bt.hash, d.ambientLightColor.value = bt.ambient, d.directionalLights.value = bt.directional, d.spotLights.value = bt.spot, d.pointLights.value = bt.point, d.hemisphereLights.value = bt.hemi, d.directionalShadowMap.value = bt.directionalShadowMap, d.directionalShadowMatrix.value = bt.directionalShadowMatrix, d.spotShadowMap.value = bt.spotShadowMap, d.spotShadowMatrix.value = bt.spotShadowMatrix, d.pointShadowMap.value = bt.pointShadowMap, d.pointShadowMatrix.value = bt.pointShadowMatrix);
			var f = r.program.getUniforms(),
				m = THREE.WebGLUniforms.seqWithValue(f.seq, d);
			r.uniformsList = m, r.dynamicUniforms = THREE.WebGLUniforms.splitDynamic(m, d)
		}

		function y(e) {
			e.side !== THREE.DoubleSide ? Lt.enable(Ht.CULL_FACE) : Lt.disable(Ht.CULL_FACE), Lt.setFlipSided(e.side === THREE.BackSide), e.transparent === !0 ? Lt.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : Lt.setBlending(THREE.NoBlending), Lt.setDepthFunc(e.depthFunc), Lt.setDepthTest(e.depthTest), Lt.setDepthWrite(e.depthWrite), Lt.setColorWrite(e.colorWrite), Lt.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
		}

		function _(e, t, i, r) {
			lt = 0;
			var n = Pt.get(i);
			if(Tt) {
				if(yt || e !== nt) {
					var a = e === nt && i.id === it;
					vt.setState(i.clippingPlanes, i.clipShadows, e, n, a)
				}
				void 0 !== n.numClippingPlanes && n.numClippingPlanes !== vt.numPlanes && (i.needsUpdate = !0)
			}
			void 0 === n.program && (i.needsUpdate = !0), void 0 !== n.lightsHash && n.lightsHash !== bt.hash && (i.needsUpdate = !0), i.needsUpdate && (T(i, t, r), i.needsUpdate = !1);
			var o = !1,
				s = !1,
				l = !1,
				h = n.program,
				c = h.getUniforms(),
				u = n.__webglShader.uniforms;
			if(h.id !== J && (Ht.useProgram(h.program), J = h.id, o = !0, s = !0, l = !0), i.id !== it && (it = i.id, s = !0), o || e !== nt) {
				if(c.set(Ht, e, "projectionMatrix"), Ct.logarithmicDepthBuffer && c.setValue(Ht, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), e !== nt && (nt = e, s = !0, l = !0), i instanceof THREE.ShaderMaterial || i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshStandardMaterial || i.envMap) {
					var p = c.map.cameraPosition;
					void 0 !== p && p.setValue(Ht, xt.setFromMatrixPosition(e.matrixWorld))
				}(i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshBasicMaterial || i instanceof THREE.MeshStandardMaterial || i instanceof THREE.ShaderMaterial || i.skinning) && c.setValue(Ht, "viewMatrix", e.matrixWorldInverse), c.set(Ht, Q, "toneMappingExposure"), c.set(Ht, Q, "toneMappingWhitePoint")
			}
			if(i.skinning) {
				c.setOptional(Ht, r, "bindMatrix"), c.setOptional(Ht, r, "bindMatrixInverse");
				var d = r.skeleton;
				d && (Ct.floatVertexTextures && d.useVertexTexture ? (c.set(Ht, d, "boneTexture"), c.set(Ht, d, "boneTextureWidth"), c.set(Ht, d, "boneTextureHeight")) : c.setOptional(Ht, d, "boneMatrices"))
			}
			s && (i.lights && L(u, l), t && i.fog && H(u, t), (i instanceof THREE.MeshBasicMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshStandardMaterial || i instanceof THREE.MeshDepthMaterial) && R(u, i), i instanceof THREE.LineBasicMaterial ? x(u, i) : i instanceof THREE.LineDashedMaterial ? (x(u, i), b(u, i)) : i instanceof THREE.PointsMaterial ? w(u, i) : i instanceof THREE.MeshLambertMaterial ? M(u, i) : i instanceof THREE.MeshPhongMaterial ? S(u, i) : i instanceof THREE.MeshPhysicalMaterial ? C(u, i) : i instanceof THREE.MeshStandardMaterial ? A(u, i) : i instanceof THREE.MeshDepthMaterial ? i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias) : i instanceof THREE.MeshNormalMaterial && (u.opacity.value = i.opacity), THREE.WebGLUniforms.upload(Ht, n.uniformsList, u, Q)), c.set(Ht, r, "modelViewMatrix"), c.set(Ht, r, "normalMatrix"), c.setValue(Ht, "modelMatrix", r.matrixWorld);
			var f = n.dynamicUniforms;
			return null !== f && (THREE.WebGLUniforms.evalDynamic(f, u, r, e), THREE.WebGLUniforms.upload(Ht, f, u, Q)), h
		}

		function R(e, t) {
			e.opacity.value = t.opacity, e.diffuse.value = t.color, t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity), e.map.value = t.map, e.specularMap.value = t.specularMap, e.alphaMap.value = t.alphaMap, t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity);
			var i;
			if(t.map ? i = t.map : t.specularMap ? i = t.specularMap : t.displacementMap ? i = t.displacementMap : t.normalMap ? i = t.normalMap : t.bumpMap ? i = t.bumpMap : t.roughnessMap ? i = t.roughnessMap : t.metalnessMap ? i = t.metalnessMap : t.alphaMap ? i = t.alphaMap : t.emissiveMap && (i = t.emissiveMap), void 0 !== i) {
				i instanceof THREE.WebGLRenderTarget && (i = i.texture);
				var r = i.offset,
					n = i.repeat;
				e.offsetRepeat.value.set(r.x, r.y, n.x, n.y)
			}
			e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap instanceof THREE.CubeTexture ? -1 : 1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio
		}

		function x(e, t) {
			e.diffuse.value = t.color, e.opacity.value = t.opacity
		}

		function b(e, t) {
			e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
		}

		function w(e, t) {
			if(e.diffuse.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size * dt, e.scale.value = .5 * B.clientHeight, e.map.value = t.map, null !== t.map) {
				var i = t.map.offset,
					r = t.map.repeat;
				e.offsetRepeat.value.set(i.x, i.y, r.x, r.y)
			}
		}

		function H(e, t) {
			e.fogColor.value = t.color, t instanceof THREE.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof THREE.FogExp2 && (e.fogDensity.value = t.density)
		}

		function M(e, t) {
			t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
		}

		function S(e, t) {
			e.specular.value = t.specular, e.shininess.value = Math.max(t.shininess, 1e-4), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
		}

		function A(e, t) {
			e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
		}

		function C(e, t) {
			e.clearCoat.value = t.clearCoat, e.clearCoatRoughness.value = t.clearCoatRoughness, A(e, t)
		}

		function L(e, t) {
			e.ambientLightColor.needsUpdate = t, e.directionalLights.needsUpdate = t, e.pointLights.needsUpdate = t, e.spotLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t
		}

		function P(e) {
			for(var t = 0, i = 0, r = e.length; r > i; i++) {
				var n = e[i];
				n.castShadow && (bt.shadows[t++] = n)
			}
			bt.shadows.length = t
		}

		function D(e, t) {
			var i, r, n, a, o, s, l, h = 0,
				c = 0,
				u = 0,
				p = t.matrixWorldInverse,
				d = 0,
				f = 0,
				m = 0,
				E = 0;
			for(i = 0, r = e.length; r > i; i++)
				if(n = e[i], a = n.color, o = n.intensity, s = n.distance, l = n.shadow && n.shadow.map ? n.shadow.map.texture : null, n instanceof THREE.AmbientLight) h += a.r * o, c += a.g * o, u += a.b * o;
				else if(n instanceof THREE.DirectionalLight) {
				var g = Bt.get(n);
				g.color.copy(n.color).multiplyScalar(n.intensity), g.direction.setFromMatrixPosition(n.matrixWorld), xt.setFromMatrixPosition(n.target.matrixWorld), g.direction.sub(xt), g.direction.transformDirection(p), g.shadow = n.castShadow, n.castShadow && (g.shadowBias = n.shadow.bias, g.shadowRadius = n.shadow.radius, g.shadowMapSize = n.shadow.mapSize), bt.directionalShadowMap[d] = l, bt.directionalShadowMatrix[d] = n.shadow.matrix, bt.directional[d++] = g
			} else if(n instanceof THREE.SpotLight) {
				var g = Bt.get(n);
				g.position.setFromMatrixPosition(n.matrixWorld), g.position.applyMatrix4(p), g.color.copy(a).multiplyScalar(o), g.distance = s, g.direction.setFromMatrixPosition(n.matrixWorld), xt.setFromMatrixPosition(n.target.matrixWorld), g.direction.sub(xt), g.direction.transformDirection(p), g.coneCos = Math.cos(n.angle), g.penumbraCos = Math.cos(n.angle * (1 - n.penumbra)), g.decay = 0 === n.distance ? 0 : n.decay, g.shadow = n.castShadow, n.castShadow && (g.shadowBias = n.shadow.bias, g.shadowRadius = n.shadow.radius, g.shadowMapSize = n.shadow.mapSize), bt.spotShadowMap[m] = l, bt.spotShadowMatrix[m] = n.shadow.matrix, bt.spot[m++] = g
			} else if(n instanceof THREE.PointLight) {
				var g = Bt.get(n);
				g.position.setFromMatrixPosition(n.matrixWorld), g.position.applyMatrix4(p), g.color.copy(n.color).multiplyScalar(n.intensity), g.distance = n.distance, g.decay = 0 === n.distance ? 0 : n.decay, g.shadow = n.castShadow, n.castShadow && (g.shadowBias = n.shadow.bias, g.shadowRadius = n.shadow.radius, g.shadowMapSize = n.shadow.mapSize), bt.pointShadowMap[f] = l, void 0 === bt.pointShadowMatrix[f] && (bt.pointShadowMatrix[f] = new THREE.Matrix4), xt.setFromMatrixPosition(n.matrixWorld).negate(), bt.pointShadowMatrix[f].identity().setPosition(xt), bt.point[f++] = g
			} else if(n instanceof THREE.HemisphereLight) {
				var g = Bt.get(n);
				g.direction.setFromMatrixPosition(n.matrixWorld), g.direction.transformDirection(p), g.direction.normalize(), g.skyColor.copy(n.color).multiplyScalar(o), g.groundColor.copy(n.groundColor).multiplyScalar(o), bt.hemi[E++] = g
			}
			bt.ambient[0] = h, bt.ambient[1] = c, bt.ambient[2] = u, bt.directional.length = d, bt.spot.length = m, bt.point.length = f, bt.hemi.length = E, bt.hash = d + "," + f + "," + m + "," + E + "," + bt.shadows.length
		}

		function O() {
			var e = lt;
			return e >= Ct.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + Ct.maxTextures), lt += 1, e
		}

		function I(e) {
			var t;
			if(e === THREE.RepeatWrapping) return Ht.REPEAT;
			if(e === THREE.ClampToEdgeWrapping) return Ht.CLAMP_TO_EDGE;
			if(e === THREE.MirroredRepeatWrapping) return Ht.MIRRORED_REPEAT;
			if(e === THREE.NearestFilter) return Ht.NEAREST;
			if(e === THREE.NearestMipMapNearestFilter) return Ht.NEAREST_MIPMAP_NEAREST;
			if(e === THREE.NearestMipMapLinearFilter) return Ht.NEAREST_MIPMAP_LINEAR;
			if(e === THREE.LinearFilter) return Ht.LINEAR;
			if(e === THREE.LinearMipMapNearestFilter) return Ht.LINEAR_MIPMAP_NEAREST;
			if(e === THREE.LinearMipMapLinearFilter) return Ht.LINEAR_MIPMAP_LINEAR;
			if(e === THREE.UnsignedByteType) return Ht.UNSIGNED_BYTE;
			if(e === THREE.UnsignedShort4444Type) return Ht.UNSIGNED_SHORT_4_4_4_4;
			if(e === THREE.UnsignedShort5551Type) return Ht.UNSIGNED_SHORT_5_5_5_1;
			if(e === THREE.UnsignedShort565Type) return Ht.UNSIGNED_SHORT_5_6_5;
			if(e === THREE.ByteType) return Ht.BYTE;
			if(e === THREE.ShortType) return Ht.SHORT;
			if(e === THREE.UnsignedShortType) return Ht.UNSIGNED_SHORT;
			if(e === THREE.IntType) return Ht.INT;
			if(e === THREE.UnsignedIntType) return Ht.UNSIGNED_INT;
			if(e === THREE.FloatType) return Ht.FLOAT;
			if(t = At.get("OES_texture_half_float"), null !== t && e === THREE.HalfFloatType) return t.HALF_FLOAT_OES;
			if(e === THREE.AlphaFormat) return Ht.ALPHA;
			if(e === THREE.RGBFormat) return Ht.RGB;
			if(e === THREE.RGBAFormat) return Ht.RGBA;
			if(e === THREE.LuminanceFormat) return Ht.LUMINANCE;
			if(e === THREE.LuminanceAlphaFormat) return Ht.LUMINANCE_ALPHA;
			if(e === THREE.DepthFormat) return Ht.DEPTH_COMPONENT;
			if(e === THREE.AddEquation) return Ht.FUNC_ADD;
			if(e === THREE.SubtractEquation) return Ht.FUNC_SUBTRACT;
			if(e === THREE.ReverseSubtractEquation) return Ht.FUNC_REVERSE_SUBTRACT;
			if(e === THREE.ZeroFactor) return Ht.ZERO;
			if(e === THREE.OneFactor) return Ht.ONE;
			if(e === THREE.SrcColorFactor) return Ht.SRC_COLOR;
			if(e === THREE.OneMinusSrcColorFactor) return Ht.ONE_MINUS_SRC_COLOR;
			if(e === THREE.SrcAlphaFactor) return Ht.SRC_ALPHA;
			if(e === THREE.OneMinusSrcAlphaFactor) return Ht.ONE_MINUS_SRC_ALPHA;
			if(e === THREE.DstAlphaFactor) return Ht.DST_ALPHA;
			if(e === THREE.OneMinusDstAlphaFactor) return Ht.ONE_MINUS_DST_ALPHA;
			if(e === THREE.DstColorFactor) return Ht.DST_COLOR;
			if(e === THREE.OneMinusDstColorFactor) return Ht.ONE_MINUS_DST_COLOR;
			if(e === THREE.SrcAlphaSaturateFactor) return Ht.SRC_ALPHA_SATURATE;
			if(t = At.get("WEBGL_compressed_texture_s3tc"), null !== t) {
				if(e === THREE.RGB_S3TC_DXT1_Format) return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if(e === THREE.RGBA_S3TC_DXT1_Format) return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if(e === THREE.RGBA_S3TC_DXT3_Format) return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if(e === THREE.RGBA_S3TC_DXT5_Format) return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
			}
			if(t = At.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
				if(e === THREE.RGB_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if(e === THREE.RGB_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if(e === THREE.RGBA_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if(e === THREE.RGBA_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
			}
			if(t = At.get("WEBGL_compressed_texture_etc1"), null !== t && e === THREE.RGB_ETC1_Format) return t.COMPRESSED_RGB_ETC1_WEBGL;
			if(t = At.get("EXT_blend_minmax"), null !== t) {
				if(e === THREE.MinEquation) return t.MIN_EXT;
				if(e === THREE.MaxEquation) return t.MAX_EXT
			}
			return 0
		}
		console.log("THREE.WebGLRenderer", THREE.REVISION), e = e || {};
		var B = void 0 !== e.canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
			U = void 0 !== e.context ? e.context : null,
			F = void 0 !== e.alpha ? e.alpha : !1,
			N = void 0 !== e.depth ? e.depth : !0,
			k = void 0 !== e.stencil ? e.stencil : !0,
			G = void 0 !== e.antialias ? e.antialias : !1,
			V = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
			z = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
			j = [],
			W = [],
			X = -1,
			q = [],
			Y = -1,
			$ = new Float32Array(8),
			Z = [],
			K = [];
		this.domElement = B, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = THREE.LinearToneMapping, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
		var Q = this,
			J = null,
			et = null,
			tt = null,
			it = -1,
			rt = "",
			nt = null,
			at = new THREE.Vector4,
			ot = null,
			st = new THREE.Vector4,
			lt = 0,
			ht = new THREE.Color(0),
			ct = 0,
			ut = B.width,
			pt = B.height,
			dt = 1,
			ft = new THREE.Vector4(0, 0, ut, pt),
			mt = !1,
			Et = new THREE.Vector4(0, 0, ut, pt),
			gt = new THREE.Frustum,
			vt = new THREE.WebGLClipping,
			Tt = !1,
			yt = !1,
			_t = new THREE.Sphere,
			Rt = new THREE.Matrix4,
			xt = new THREE.Vector3,
			bt = {
				hash: "",
				ambient: [0, 0, 0],
				directional: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				point: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: [],
				shadows: []
			},
			wt = {
				calls: 0,
				vertices: 0,
				faces: 0,
				points: 0
			};
		this.info = {
			render: wt,
			memory: {
				geometries: 0,
				textures: 0
			},
			programs: null
		};
		var Ht;
		try {
			var Mt = {
				alpha: F,
				depth: N,
				stencil: k,
				antialias: G,
				premultipliedAlpha: V,
				preserveDrawingBuffer: z
			};
			if(Ht = U || B.getContext("webgl", Mt) || B.getContext("experimental-webgl", Mt), null === Ht) throw null !== B.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
			void 0 === Ht.getShaderPrecisionFormat && (Ht.getShaderPrecisionFormat = function() {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				}
			}), B.addEventListener("webglcontextlost", a, !1)
		} catch(St) {
			console.error("THREE.WebGLRenderer: " + St)
		}
		var At = new THREE.WebGLExtensions(Ht);
		At.get("WEBGL_depth_texture"), At.get("OES_texture_float"), At.get("OES_texture_float_linear"), At.get("OES_texture_half_float"), At.get("OES_texture_half_float_linear"), At.get("OES_standard_derivatives"), At.get("ANGLE_instanced_arrays"), At.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
		var Ct = new THREE.WebGLCapabilities(Ht, At, e),
			Lt = new THREE.WebGLState(Ht, At, I),
			Pt = new THREE.WebGLProperties,
			Dt = new THREE.WebGLTextures(Ht, At, Lt, Pt, Ct, I, this.info),
			Ot = new THREE.WebGLObjects(Ht, Pt, this.info),
			It = new THREE.WebGLPrograms(this, Ct),
			Bt = new THREE.WebGLLights;
		this.info.programs = It.programs;
		var Ut = new THREE.WebGLBufferRenderer(Ht, At, wt),
			Ft = new THREE.WebGLIndexedBufferRenderer(Ht, At, wt),
			Nt = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
			kt = new THREE.PerspectiveCamera,
			Gt = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.MeshBasicMaterial({
				depthTest: !1,
				depthWrite: !1,
				fog: !1
			})),
			Vt = THREE.ShaderLib.cube,
			zt = new THREE.Mesh(new THREE.BoxBufferGeometry(5, 5, 5), new THREE.ShaderMaterial({
				uniforms: Vt.uniforms,
				vertexShader: Vt.vertexShader,
				fragmentShader: Vt.fragmentShader,
				side: THREE.BackSide,
				depthTest: !1,
				depthWrite: !1,
				fog: !1
			}));
		r(), this.context = Ht, this.capabilities = Ct, this.extensions = At, this.properties = Pt, this.state = Lt;
		var jt = new THREE.WebGLShadowMap(this, bt, Ot, Ct);
		this.shadowMap = jt;
		var Wt = new THREE.SpritePlugin(this, Z),
			Xt = new THREE.LensFlarePlugin(this, K);
		this.getContext = function() {
			return Ht
		}, this.getContextAttributes = function() {
			return Ht.getContextAttributes()
		}, this.forceContextLoss = function() {
			At.get("WEBGL_lose_context").loseContext()
		}, this.getMaxAnisotropy = function() {
			return Ct.getMaxAnisotropy()
		}, this.getPrecision = function() {
			return Ct.precision
		}, this.getPixelRatio = function() {
			return dt
		}, this.setPixelRatio = function(e) {
			void 0 !== e && (dt = e, this.setSize(Et.z, Et.w, !1))
		}, this.getSize = function() {
			return {
				width: ut,
				height: pt
			}
		}, this.setSize = function(e, t, i) {
			ut = e, pt = t, B.width = e * dt, B.height = t * dt, i !== !1 && (B.style.width = e + "px", B.style.height = t + "px"), this.setViewport(0, 0, e, t)
		}, this.setViewport = function(e, t, i, r) {
			Lt.viewport(Et.set(e, t, i, r))
		}, this.setScissor = function(e, t, i, r) {
			Lt.scissor(ft.set(e, t, i, r))
		}, this.setScissorTest = function(e) {
			Lt.setScissorTest(mt = e)
		}, this.getClearColor = function() {
			return ht
		}, this.setClearColor = function(e, t) {
			ht.set(e), ct = void 0 !== t ? t : 1, i(ht.r, ht.g, ht.b, ct)
		}, this.getClearAlpha = function() {
			return ct
		}, this.setClearAlpha = function(e) {
			ct = e, i(ht.r, ht.g, ht.b, ct)
		}, this.clear = function(e, t, i) {
			var r = 0;
			(void 0 === e || e) && (r |= Ht.COLOR_BUFFER_BIT), (void 0 === t || t) && (r |= Ht.DEPTH_BUFFER_BIT), (void 0 === i || i) && (r |= Ht.STENCIL_BUFFER_BIT), Ht.clear(r)
		}, this.clearColor = function() {
			this.clear(!0, !1, !1)
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1)
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0)
		}, this.clearTarget = function(e, t, i, r) {
			this.setRenderTarget(e), this.clear(t, i, r)
		}, this.resetGLState = n, this.dispose = function() {
			q = [], Y = -1, W = [], X = -1, B.removeEventListener("webglcontextlost", a, !1)
		}, this.renderBufferImmediate = function(e, t, i) {
			Lt.initAttributes();
			var r = Pt.get(e);
			e.hasPositions && !r.position && (r.position = Ht.createBuffer()), e.hasNormals && !r.normal && (r.normal = Ht.createBuffer()), e.hasUvs && !r.uv && (r.uv = Ht.createBuffer()), e.hasColors && !r.color && (r.color = Ht.createBuffer());
			var n = t.getAttributes();
			if(e.hasPositions && (Ht.bindBuffer(Ht.ARRAY_BUFFER, r.position), Ht.bufferData(Ht.ARRAY_BUFFER, e.positionArray, Ht.DYNAMIC_DRAW), Lt.enableAttribute(n.position), Ht.vertexAttribPointer(n.position, 3, Ht.FLOAT, !1, 0, 0)), e.hasNormals) {
				if(Ht.bindBuffer(Ht.ARRAY_BUFFER, r.normal), "MeshPhongMaterial" !== i.type && "MeshStandardMaterial" !== i.type && "MeshPhysicalMaterial" !== i.type && i.shading === THREE.FlatShading)
					for(var a = 0, o = 3 * e.count; o > a; a += 9) {
						var s = e.normalArray,
							l = (s[a + 0] + s[a + 3] + s[a + 6]) / 3,
							h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3,
							c = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
						s[a + 0] = l, s[a + 1] = h, s[a + 2] = c, s[a + 3] = l, s[a + 4] = h, s[a + 5] = c, s[a + 6] = l, s[a + 7] = h, s[a + 8] = c
					}
				Ht.bufferData(Ht.ARRAY_BUFFER, e.normalArray, Ht.DYNAMIC_DRAW), Lt.enableAttribute(n.normal), Ht.vertexAttribPointer(n.normal, 3, Ht.FLOAT, !1, 0, 0)
			}
			e.hasUvs && i.map && (Ht.bindBuffer(Ht.ARRAY_BUFFER, r.uv), Ht.bufferData(Ht.ARRAY_BUFFER, e.uvArray, Ht.DYNAMIC_DRAW), Lt.enableAttribute(n.uv), Ht.vertexAttribPointer(n.uv, 2, Ht.FLOAT, !1, 0, 0)), e.hasColors && i.vertexColors !== THREE.NoColors && (Ht.bindBuffer(Ht.ARRAY_BUFFER, r.color), Ht.bufferData(Ht.ARRAY_BUFFER, e.colorArray, Ht.DYNAMIC_DRAW), Lt.enableAttribute(n.color), Ht.vertexAttribPointer(n.color, 3, Ht.FLOAT, !1, 0, 0)), Lt.disableUnusedAttributes(), Ht.drawArrays(Ht.TRIANGLES, 0, e.count), e.count = 0
		}, this.renderBufferDirect = function(e, i, r, n, a, o) {
			y(n);
			var s = _(e, i, n, a),
				l = !1,
				u = r.id + "_" + s.id + "_" + n.wireframe;
			u !== rt && (rt = u, l = !0);
			var p = a.morphTargetInfluences;
			if(void 0 !== p) {
				for(var d = [], f = 0, m = p.length; m > f; f++) {
					var E = p[f];
					d.push([E, f])
				}
				d.sort(c), d.length > 8 && (d.length = 8);
				for(var g = r.morphAttributes, f = 0, m = d.length; m > f; f++) {
					var E = d[f];
					if($[f] = E[0], 0 !== E[0]) {
						var v = E[1];
						n.morphTargets === !0 && g.position && r.addAttribute("morphTarget" + f, g.position[v]), n.morphNormals === !0 && g.normal && r.addAttribute("morphNormal" + f, g.normal[v])
					} else n.morphTargets === !0 && r.removeAttribute("morphTarget" + f), n.morphNormals === !0 && r.removeAttribute("morphNormal" + f)
				}
				s.getUniforms().setValue(Ht, "morphTargetInfluences", $), l = !0
			}
			var v = r.index,
				T = r.attributes.position;
			n.wireframe === !0 && (v = Ot.getWireframeAttribute(r));
			var R;
			null !== v ? (R = Ft, R.setIndex(v)) : R = Ut, l && (h(n, s, r), null !== v && Ht.bindBuffer(Ht.ELEMENT_ARRAY_BUFFER, Ot.getAttributeBuffer(v)));
			var x = 0,
				b = 1 / 0;
			null !== v ? b = v.count : void 0 !== T && (b = T.count);
			var w = r.drawRange.start,
				H = r.drawRange.count,
				M = null !== o ? o.start : 0,
				S = null !== o ? o.count : 1 / 0,
				A = Math.max(x, w, M),
				C = Math.min(x + b, w + H, M + S) - 1,
				L = Math.max(0, C - A + 1);
			if(a instanceof THREE.Mesh)
				if(n.wireframe === !0) Lt.setLineWidth(n.wireframeLinewidth * t()), R.setMode(Ht.LINES);
				else switch(a.drawMode) {
					case THREE.TrianglesDrawMode:
						R.setMode(Ht.TRIANGLES);
						break;
					case THREE.TriangleStripDrawMode:
						R.setMode(Ht.TRIANGLE_STRIP);
						break;
					case THREE.TriangleFanDrawMode:
						R.setMode(Ht.TRIANGLE_FAN)
				} else if(a instanceof THREE.Line) {
					var P = n.linewidth;
					void 0 === P && (P = 1), Lt.setLineWidth(P * t()), R.setMode(a instanceof THREE.LineSegments ? Ht.LINES : Ht.LINE_STRIP)
				} else a instanceof THREE.Points && R.setMode(Ht.POINTS);
			r instanceof THREE.InstancedBufferGeometry ? r.maxInstancedCount > 0 && R.renderInstances(r, A, L) : R.render(A, L)
		}, this.render = function(e, t, r, n) {
			if(t instanceof THREE.Camera == !1) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
			var a = e.fog;
			rt = "", it = -1, nt = null, e.autoUpdate === !0 && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), Rt.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), gt.setFromMatrix(Rt), j.length = 0, X = -1, Y = -1, Z.length = 0, K.length = 0, yt = this.localClippingEnabled, Tt = vt.init(this.clippingPlanes, yt, t), g(e, t), W.length = X + 1, q.length = Y + 1, Q.sortObjects === !0 && (W.sort(u), q.sort(p)), Tt && vt.beginShadows(), P(j), jt.render(e, t), D(j, t), Tt && vt.endShadows(), wt.calls = 0, wt.vertices = 0, wt.faces = 0, wt.points = 0, void 0 === r && (r = null), this.setRenderTarget(r);
			var o = e.background;
			if(null === o ? i(ht.r, ht.g, ht.b, ct) : o instanceof THREE.Color && i(o.r, o.g, o.b, 1), (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), o instanceof THREE.CubeTexture ? (kt.projectionMatrix.copy(t.projectionMatrix), kt.matrixWorld.extractRotation(t.matrixWorld), kt.matrixWorldInverse.getInverse(kt.matrixWorld), zt.material.uniforms.tCube.value = o, zt.modelViewMatrix.multiplyMatrices(kt.matrixWorldInverse, zt.matrixWorld), Ot.update(zt), Q.renderBufferDirect(kt, null, zt.geometry, zt.material, zt, null)) : o instanceof THREE.Texture && (Gt.material.map = o, Ot.update(Gt), Q.renderBufferDirect(Nt, null, Gt.geometry, Gt.material, Gt, null)), e.overrideMaterial) {
				var s = e.overrideMaterial;
				v(W, t, a, s), v(q, t, a, s)
			} else Lt.setBlending(THREE.NoBlending), v(W, t, a), v(q, t, a);
			Wt.render(e, t), Xt.render(e, t, st), r && Dt.updateRenderTargetMipmap(r), Lt.setDepthTest(!0), Lt.setDepthWrite(!0), Lt.setColorWrite(!0)
		}, this.setFaceCulling = function(e, t) {
			Lt.setCullFace(e), Lt.setFlipSided(t === THREE.FrontFaceDirectionCW)
		}, this.allocTextureUnit = O, this.setTexture2D = function() {
			var e = !1;
			return function(t, i) {
				t instanceof THREE.WebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), Dt.setTexture2D(t, i)
			}
		}(), this.setTexture = function() {
			var e = !1;
			return function(t, i) {
				e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), e = !0), Dt.setTexture2D(t, i)
			}
		}(), this.setTextureCube = function() {
			var e = !1;
			return function(t, i) {
				t instanceof THREE.WebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), t instanceof THREE.CubeTexture || Array.isArray(t.image) && 6 === t.image.length ? Dt.setTextureCube(t, i) : Dt.setTextureCubeDynamic(t, i)
			}
		}(), this.getCurrentRenderTarget = function() {
			return et
		}, this.setRenderTarget = function(e) {
			et = e, e && void 0 === Pt.get(e).__webglFramebuffer && Dt.setupRenderTarget(e);
			var t, i = e instanceof THREE.WebGLRenderTargetCube;
			if(e) {
				var r = Pt.get(e);
				t = i ? r.__webglFramebuffer[e.activeCubeFace] : r.__webglFramebuffer, at.copy(e.scissor), ot = e.scissorTest, st.copy(e.viewport)
			} else t = null, at.copy(ft).multiplyScalar(dt), ot = mt, st.copy(Et).multiplyScalar(dt);
			if(tt !== t && (Ht.bindFramebuffer(Ht.FRAMEBUFFER, t), tt = t), Lt.scissor(at), Lt.setScissorTest(ot), Lt.viewport(st), i) {
				var n = Pt.get(e.texture);
				Ht.framebufferTexture2D(Ht.FRAMEBUFFER, Ht.COLOR_ATTACHMENT0, Ht.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, n.__webglTexture, e.activeMipMapLevel)
			}
		}, this.readRenderTargetPixels = function(e, t, i, r, n, a) {
			if(e instanceof THREE.WebGLRenderTarget == !1) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			var o = Pt.get(e).__webglFramebuffer;
			if(o) {
				var s = !1;
				o !== tt && (Ht.bindFramebuffer(Ht.FRAMEBUFFER, o), s = !0);
				try {
					var l = e.texture;
					if(l.format !== THREE.RGBAFormat && I(l.format) !== Ht.getParameter(Ht.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
					if(!(l.type === THREE.UnsignedByteType || I(l.type) === Ht.getParameter(Ht.IMPLEMENTATION_COLOR_READ_TYPE) || l.type === THREE.FloatType && At.get("WEBGL_color_buffer_float") || l.type === THREE.HalfFloatType && At.get("EXT_color_buffer_half_float"))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
					Ht.checkFramebufferStatus(Ht.FRAMEBUFFER) === Ht.FRAMEBUFFER_COMPLETE ? t >= 0 && t <= e.width - r && i >= 0 && i <= e.height - n && Ht.readPixels(t, i, r, n, I(l.format), I(l.type), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
				} finally {
					s && Ht.bindFramebuffer(Ht.FRAMEBUFFER, tt)
				}
			}
		}
	}, THREE.WebGLRenderTarget = function(e, t, i) {
		this.uuid = THREE.Math.generateUUID(), this.width = e, this.height = t, this.scissor = new THREE.Vector4(0, 0, e, t), this.scissorTest = !1, this.viewport = new THREE.Vector4(0, 0, e, t), i = i || {}, void 0 === i.minFilter && (i.minFilter = THREE.LinearFilter), this.texture = new THREE.Texture(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.depthBuffer = void 0 !== i.depthBuffer ? i.depthBuffer : !0, this.stencilBuffer = void 0 !== i.stencilBuffer ? i.stencilBuffer : !0, this.depthTexture = null
	}, Object.assign(THREE.WebGLRenderTarget.prototype, THREE.EventDispatcher.prototype, {
		setSize: function(e, t) {
			(this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(e) {
			return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), THREE.WebGLRenderTargetCube = function(e, t, i) {
		THREE.WebGLRenderTarget.call(this, e, t, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
	}, THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype), THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube, THREE.WebGLBufferRenderer = function(e, t, i) {
		function r(e) {
			o = e
		}

		function n(t, r) {
			e.drawArrays(o, t, r), i.calls++, i.vertices += r, o === e.TRIANGLES && (i.faces += r / 3)
		}

		function a(r) {
			var n = t.get("ANGLE_instanced_arrays");
			if(null === n) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			var a = r.attributes.position,
				s = 0;
			a instanceof THREE.InterleavedBufferAttribute ? (s = a.data.count, n.drawArraysInstancedANGLE(o, 0, s, r.maxInstancedCount)) : (s = a.count, n.drawArraysInstancedANGLE(o, 0, s, r.maxInstancedCount)), i.calls++, i.vertices += s * r.maxInstancedCount, o === e.TRIANGLES && (i.faces += r.maxInstancedCount * s / 3)
		}
		var o;
		this.setMode = r, this.render = n, this.renderInstances = a
	}, THREE.WebGLClipping = function() {
		function e() {
			h.value !== r && (h.value = r, h.needsUpdate = n > 0), i.numPlanes = n
		}

		function t(e, t, r, n) {
			var a = null !== e ? e.length : 0,
				o = null;
			if(0 !== a) {
				if(o = h.value, n !== !0 || null === o) {
					var c = r + 4 * a,
						u = t.matrixWorldInverse;
					l.getNormalMatrix(u), (null === o || o.length < c) && (o = new Float32Array(c));
					for(var p = 0, d = r; p !== a; ++p, d += 4) s.copy(e[p]).applyMatrix4(u, l), s.normal.toArray(o, d), o[d + 3] = s.constant
				}
				h.value = o, h.needsUpdate = !0
			}
			return i.numPlanes = a, o
		}
		var i = this,
			r = null,
			n = 0,
			a = !1,
			o = !1,
			s = new THREE.Plane,
			l = new THREE.Matrix3,
			h = {
				value: null,
				needsUpdate: !1
			};
		this.uniform = h, this.numPlanes = 0, this.init = function(e, i, o) {
			var s = 0 !== e.length || i || 0 !== n || a;
			return a = i, r = t(e, o, 0), n = e.length, s
		}, this.beginShadows = function() {
			o = !0, t(null)
		}, this.endShadows = function() {
			o = !1, e()
		}, this.setState = function(i, s, l, c, u) {
			if(!a || null === i || 0 === i.length || o && !s) o ? t(null) : e();
			else {
				var p = o ? 0 : n,
					d = 4 * p,
					f = c.clippingState || null;
				h.value = f, f = t(i, l, d, u);
				for(var m = 0; m !== d; ++m) f[m] = r[m];
				c.clippingState = f, this.numPlanes += p
			}
		}
	}, THREE.WebGLIndexedBufferRenderer = function(e, t, i) {
		function r(e) {
			s = e
		}

		function n(i) {
			i.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (l = e.UNSIGNED_INT, h = 4) : (l = e.UNSIGNED_SHORT, h = 2)
		}

		function a(t, r) {
			e.drawElements(s, r, l, t * h), i.calls++, i.vertices += r, s === e.TRIANGLES && (i.faces += r / 3)
		}

		function o(r, n, a) {
			var o = t.get("ANGLE_instanced_arrays");
			return null === o ? void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (o.drawElementsInstancedANGLE(s, a, l, n * h, r.maxInstancedCount), i.calls++, i.vertices += a * r.maxInstancedCount, void(s === e.TRIANGLES && (i.faces += r.maxInstancedCount * a / 3)))
		}
		var s, l, h;
		this.setMode = r, this.setIndex = n, this.render = a, this.renderInstances = o
	}, THREE.WebGLExtensions = function(e) {
		var t = {};
		this.get = function(i) {
			if(void 0 !== t[i]) return t[i];
			var r;
			switch(i) {
				case "WEBGL_depth_texture":
					r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
					break;
				case "EXT_texture_filter_anisotropic":
					r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
					break;
				case "WEBGL_compressed_texture_s3tc":
					r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
					break;
				case "WEBGL_compressed_texture_pvrtc":
					r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
					break;
				case "WEBGL_compressed_texture_etc1":
					r = e.getExtension("WEBGL_compressed_texture_etc1");
					break;
				default:
					r = e.getExtension(i)
			}
			return null === r && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), t[i] = r, r
		}
	}, THREE.WebGLCapabilities = function(e, t, i) {
		function r() {
			if(void 0 !== a) return a;
			var i = t.get("EXT_texture_filter_anisotropic");
			return a = null !== i ? e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
		}

		function n(t) {
			if("highp" === t) {
				if(e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
				t = "mediump"
			}
			return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
		}
		var a;
		this.getMaxAnisotropy = r, this.getMaxPrecision = n, this.precision = void 0 !== i.precision ? i.precision : "highp", this.logarithmicDepthBuffer = void 0 !== i.logarithmicDepthBuffer ? i.logarithmicDepthBuffer : !1, this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS), this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = this.maxVertexTextures > 0, this.floatFragmentTextures = !!t.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
		var o = n(this.precision);
		o !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", o, "instead."), this.precision = o), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
	}, THREE.WebGLGeometries = function(e, t, i) {
		function r(e) {
			var t = e.geometry;
			if(void 0 !== h[t.id]) return h[t.id];
			t.addEventListener("dispose", n);
			var r;
			return t instanceof THREE.BufferGeometry ? r = t : t instanceof THREE.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new THREE.BufferGeometry).setFromObject(e)), r = t._bufferGeometry), h[t.id] = r, i.memory.geometries++, r
		}

		function n(e) {
			var r = e.target,
				a = h[r.id];
			null !== a.index && o(a.index), s(a.attributes), r.removeEventListener("dispose", n), delete h[r.id];
			var l = t.get(r);
			l.wireframe && o(l.wireframe), t.delete(r);
			var c = t.get(a);
			c.wireframe && o(c.wireframe), t.delete(a), i.memory.geometries--
		}

		function a(e) {
			return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
		}

		function o(t) {
			var i = a(t);
			void 0 !== i && (e.deleteBuffer(i), l(t))
		}

		function s(e) {
			for(var t in e) o(e[t])
		}

		function l(e) {
			t.delete(e instanceof THREE.InterleavedBufferAttribute ? e.data : e)
		}
		var h = {};
		this.get = r
	}, THREE.WebGLLights = function() {
		var e = {};
		this.get = function(t) {
			if(void 0 !== e[t.id]) return e[t.id];
			var i;
			switch(t.type) {
				case "DirectionalLight":
					i = {
						direction: new THREE.Vector3,
						color: new THREE.Color,
						shadow: !1,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new THREE.Vector2
					};
					break;
				case "SpotLight":
					i = {
						position: new THREE.Vector3,
						direction: new THREE.Vector3,
						color: new THREE.Color,
						distance: 0,
						coneCos: 0,
						penumbraCos: 0,
						decay: 0,
						shadow: !1,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new THREE.Vector2
					};
					break;
				case "PointLight":
					i = {
						position: new THREE.Vector3,
						color: new THREE.Color,
						distance: 0,
						decay: 0,
						shadow: !1,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new THREE.Vector2
					};
					break;
				case "HemisphereLight":
					i = {
						direction: new THREE.Vector3,
						skyColor: new THREE.Color,
						groundColor: new THREE.Color
					}
			}
			return e[t.id] = i, i
		}
	}, THREE.WebGLObjects = function(e, t, i) {
		function r(t) {
			var i = c.get(t);
			t.geometry instanceof THREE.Geometry && i.updateFromObject(t);
			var r = i.index,
				a = i.attributes;
			null !== r && n(r, e.ELEMENT_ARRAY_BUFFER);
			for(var o in a) n(a[o], e.ARRAY_BUFFER);
			var s = i.morphAttributes;
			for(var o in s)
				for(var l = s[o], h = 0, u = l.length; u > h; h++) n(l[h], e.ARRAY_BUFFER);
			return i
		}

		function n(e, i) {
			var r = e instanceof THREE.InterleavedBufferAttribute ? e.data : e,
				n = t.get(r);
			void 0 === n.__webglBuffer ? a(n, r, i) : n.version !== r.version && o(n, r, i)
		}

		function a(t, i, r) {
			t.__webglBuffer = e.createBuffer(), e.bindBuffer(r, t.__webglBuffer);
			var n = i.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW;
			e.bufferData(r, i.array, n), t.version = i.version
		}

		function o(t, i, r) {
			e.bindBuffer(r, t.__webglBuffer), i.dynamic === !1 || -1 === i.updateRange.count ? e.bufferSubData(r, 0, i.array) : 0 === i.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(r, i.updateRange.offset * i.array.BYTES_PER_ELEMENT, i.array.subarray(i.updateRange.offset, i.updateRange.offset + i.updateRange.count)), i.updateRange.count = 0), t.version = i.version
		}

		function s(e) {
			return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
		}

		function l(i) {
			var r = t.get(i);
			if(void 0 !== r.wireframe) return r.wireframe;
			var a = [],
				o = i.index,
				s = i.attributes,
				l = s.position;
			if(null !== o)
				for(var c = {}, u = o.array, p = 0, d = u.length; d > p; p += 3) {
					var f = u[p + 0],
						m = u[p + 1],
						E = u[p + 2];
					h(c, f, m) && a.push(f, m), h(c, m, E) && a.push(m, E), h(c, E, f) && a.push(E, f)
				} else
					for(var u = s.position.array, p = 0, d = u.length / 3 - 1; d > p; p += 3) {
						var f = p + 0,
							m = p + 1,
							E = p + 2;
						a.push(f, m, m, E, E, f)
					}
			var g = l.count > 65535 ? Uint32Array : Uint16Array,
				v = new THREE.BufferAttribute(new g(a), 1);
			return n(v, e.ELEMENT_ARRAY_BUFFER), r.wireframe = v, v
		}

		function h(e, t, i) {
			if(t > i) {
				var r = t;
				t = i, i = r
			}
			var n = e[t];
			return void 0 === n ? (e[t] = [i], !0) : -1 === n.indexOf(i) ? (n.push(i), !0) : !1
		}
		var c = new THREE.WebGLGeometries(e, t, i);
		this.getAttributeBuffer = s, this.getWireframeAttribute = l, this.update = r
	}, THREE.WebGLProgram = function() {
		function e(e) {
			switch(e) {
				case THREE.LinearEncoding:
					return ["Linear", "( value )"];
				case THREE.sRGBEncoding:
					return ["sRGB", "( value )"];
				case THREE.RGBEEncoding:
					return ["RGBE", "( value )"];
				case THREE.RGBM7Encoding:
					return ["RGBM", "( value, 7.0 )"];
				case THREE.RGBM16Encoding:
					return ["RGBM", "( value, 16.0 )"];
				case THREE.RGBDEncoding:
					return ["RGBD", "( value, 256.0 )"];
				case THREE.GammaEncoding:
					return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
				default:
					throw new Error("unsupported encoding: " + e)
			}
		}

		function t(t, i) {
			var r = e(i);
			return "vec4 " + t + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
		}

		function i(t, i) {
			var r = e(i);
			return "vec4 " + t + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }"
		}

		function r(e, t) {
			var i;
			switch(t) {
				case THREE.LinearToneMapping:
					i = "Linear";
					break;
				case THREE.ReinhardToneMapping:
					i = "Reinhard";
					break;
				case THREE.Uncharted2ToneMapping:
					i = "Uncharted2";
					break;
				case THREE.CineonToneMapping:
					i = "OptimizedCineon";
					break;
				default:
					throw new Error("unsupported toneMapping: " + t)
			}
			return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
		}

		function n(e, t, i) {
			e = e || {};
			var r = [e.derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
			return r.filter(s).join("\n")
		}

		function a(e) {
			var t = [];
			for(var i in e) {
				var r = e[i];
				r !== !1 && t.push("#define " + i + " " + r)
			}
			return t.join("\n")
		}

		function o(e, t) {
			for(var i = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), n = 0; r > n; n++) {
				var a = e.getActiveAttrib(t, n),
					o = a.name;
				i[o] = e.getAttribLocation(t, o)
			}
			return i
		}

		function s(e) {
			return "" !== e
		}

		function l(e, t) {
			return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
		}

		function h(e) {
			function t(e, t) {
				var i = THREE.ShaderChunk[t];
				if(void 0 === i) throw new Error("Can not resolve #include <" + t + ">");
				return h(i)
			}
			var i = /#include +<([\w\d.]+)>/g;
			return e.replace(i, t)
		}

		function c(e) {
			function t(e, t, i, r) {
				for(var n = "", a = parseInt(t); a < parseInt(i); a++) n += r.replace(/\[ i \]/g, "[ " + a + " ]");
				return n
			}
			var i = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
				r = e.replace(i, t);
			return r
		}
		var u = 0;
		return function(e, p, d, f) {
			var m = e.context,
				E = d.extensions,
				g = d.defines,
				v = d.__webglShader.vertexShader,
				T = d.__webglShader.fragmentShader,
				y = "SHADOWMAP_TYPE_BASIC";
			f.shadowMapType === THREE.PCFShadowMap ? y = "SHADOWMAP_TYPE_PCF" : f.shadowMapType === THREE.PCFSoftShadowMap && (y = "SHADOWMAP_TYPE_PCF_SOFT");
			var _ = "ENVMAP_TYPE_CUBE",
				R = "ENVMAP_MODE_REFLECTION",
				x = "ENVMAP_BLENDING_MULTIPLY";
			if(f.envMap) {
				switch(d.envMap.mapping) {
					case THREE.CubeReflectionMapping:
					case THREE.CubeRefractionMapping:
						_ = "ENVMAP_TYPE_CUBE";
						break;
					case THREE.CubeUVReflectionMapping:
					case THREE.CubeUVRefractionMapping:
						_ = "ENVMAP_TYPE_CUBE_UV";
						break;
					case THREE.EquirectangularReflectionMapping:
					case THREE.EquirectangularRefractionMapping:
						_ = "ENVMAP_TYPE_EQUIREC";
						break;
					case THREE.SphericalReflectionMapping:
						_ = "ENVMAP_TYPE_SPHERE"
				}
				switch(d.envMap.mapping) {
					case THREE.CubeRefractionMapping:
					case THREE.EquirectangularRefractionMapping:
						R = "ENVMAP_MODE_REFRACTION"
				}
				switch(d.combine) {
					case THREE.MultiplyOperation:
						x = "ENVMAP_BLENDING_MULTIPLY";
						break;
					case THREE.MixOperation:
						x = "ENVMAP_BLENDING_MIX";
						break;
					case THREE.AddOperation:
						x = "ENVMAP_BLENDING_ADD"
				}
			}
			var b, w, H = e.gammaFactor > 0 ? e.gammaFactor : 1,
				M = n(E, f, e.extensions),
				S = a(g),
				A = m.createProgram();
			d instanceof THREE.RawShaderMaterial ? (b = [S].filter(s).join("\n"), w = [S].filter(s).join("\n")) : (b = ["precision " + f.precision + " float;", "precision " + f.precision + " int;", "#define SHADER_NAME " + d.__webglShader.name, S, f.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + H, "#define MAX_BONES " + f.maxBones, f.map ? "#define USE_MAP" : "", f.envMap ? "#define USE_ENVMAP" : "", f.envMap ? "#define " + R : "", f.lightMap ? "#define USE_LIGHTMAP" : "", f.aoMap ? "#define USE_AOMAP" : "", f.emissiveMap ? "#define USE_EMISSIVEMAP" : "", f.bumpMap ? "#define USE_BUMPMAP" : "", f.normalMap ? "#define USE_NORMALMAP" : "", f.displacementMap && f.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", f.specularMap ? "#define USE_SPECULARMAP" : "", f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", f.metalnessMap ? "#define USE_METALNESSMAP" : "", f.alphaMap ? "#define USE_ALPHAMAP" : "", f.vertexColors ? "#define USE_COLOR" : "", f.flatShading ? "#define FLAT_SHADED" : "", f.skinning ? "#define USE_SKINNING" : "", f.useVertexTexture ? "#define BONE_TEXTURE" : "", f.morphTargets ? "#define USE_MORPHTARGETS" : "", f.morphNormals && f.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", f.doubleSided ? "#define DOUBLE_SIDED" : "", f.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + f.numClippingPlanes, f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", f.shadowMapEnabled ? "#define " + y : "", f.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", f.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(s).join("\n"), w = [M, "precision " + f.precision + " float;", "precision " + f.precision + " int;", "#define SHADER_NAME " + d.__webglShader.name, S, f.alphaTest ? "#define ALPHATEST " + f.alphaTest : "", "#define GAMMA_FACTOR " + H, f.useFog && f.fog ? "#define USE_FOG" : "", f.useFog && f.fogExp ? "#define FOG_EXP2" : "", f.map ? "#define USE_MAP" : "", f.envMap ? "#define USE_ENVMAP" : "", f.envMap ? "#define " + _ : "", f.envMap ? "#define " + R : "", f.envMap ? "#define " + x : "", f.lightMap ? "#define USE_LIGHTMAP" : "", f.aoMap ? "#define USE_AOMAP" : "", f.emissiveMap ? "#define USE_EMISSIVEMAP" : "", f.bumpMap ? "#define USE_BUMPMAP" : "", f.normalMap ? "#define USE_NORMALMAP" : "", f.specularMap ? "#define USE_SPECULARMAP" : "", f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", f.metalnessMap ? "#define USE_METALNESSMAP" : "", f.alphaMap ? "#define USE_ALPHAMAP" : "", f.vertexColors ? "#define USE_COLOR" : "", f.flatShading ? "#define FLAT_SHADED" : "", f.doubleSided ? "#define DOUBLE_SIDED" : "", f.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + f.numClippingPlanes, f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", f.shadowMapEnabled ? "#define " + y : "", f.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", f.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", f.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", f.envMap && e.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", f.toneMapping !== THREE.NoToneMapping ? "#define TONE_MAPPING" : "", f.toneMapping !== THREE.NoToneMapping ? THREE.ShaderChunk.tonemapping_pars_fragment : "", f.toneMapping !== THREE.NoToneMapping ? r("toneMapping", f.toneMapping) : "", f.outputEncoding || f.mapEncoding || f.envMapEncoding || f.emissiveMapEncoding ? THREE.ShaderChunk.encodings_pars_fragment : "", f.mapEncoding ? t("mapTexelToLinear", f.mapEncoding) : "", f.envMapEncoding ? t("envMapTexelToLinear", f.envMapEncoding) : "", f.emissiveMapEncoding ? t("emissiveMapTexelToLinear", f.emissiveMapEncoding) : "", f.outputEncoding ? i("linearToOutputTexel", f.outputEncoding) : "", f.depthPacking ? "#define DEPTH_PACKING " + d.depthPacking : "", "\n"].filter(s).join("\n")), v = h(v, f), v = l(v, f), T = h(T, f), T = l(T, f), d instanceof THREE.ShaderMaterial == !1 && (v = c(v), T = c(T));
			var C = b + v,
				L = w + T,
				P = THREE.WebGLShader(m, m.VERTEX_SHADER, C),
				D = THREE.WebGLShader(m, m.FRAGMENT_SHADER, L);
			m.attachShader(A, P), m.attachShader(A, D), void 0 !== d.index0AttributeName ? m.bindAttribLocation(A, 0, d.index0AttributeName) : f.morphTargets === !0 && m.bindAttribLocation(A, 0, "position"), m.linkProgram(A);
			var O = m.getProgramInfoLog(A),
				I = m.getShaderInfoLog(P),
				B = m.getShaderInfoLog(D),
				U = !0,
				F = !0;
			m.getProgramParameter(A, m.LINK_STATUS) === !1 ? (U = !1, console.error("THREE.WebGLProgram: shader error: ", m.getError(), "gl.VALIDATE_STATUS", m.getProgramParameter(A, m.VALIDATE_STATUS), "gl.getProgramInfoLog", O, I, B)) : "" !== O ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", O) : ("" === I || "" === B) && (F = !1), F && (this.diagnostics = {
				runnable: U,
				material: d,
				programLog: O,
				vertexShader: {
					log: I,
					prefix: b
				},
				fragmentShader: {
					log: B,
					prefix: w
				}
			}), m.deleteShader(P), m.deleteShader(D);
			var N;
			this.getUniforms = function() {
				return void 0 === N && (N = new THREE.WebGLUniforms(m, A, e)), N
			};
			var k;
			return this.getAttributes = function() {
				return void 0 === k && (k = o(m, A)), k
			}, this.destroy = function() {
				m.deleteProgram(A), this.program = void 0
			}, Object.defineProperties(this, {
				uniforms: {
					get: function() {
						return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
					}
				},
				attributes: {
					get: function() {
						return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
					}
				}
			}), this.id = u++, this.code = p, this.usedTimes = 1, this.program = A, this.vertexShader = P, this.fragmentShader = D, this
		}
	}(), THREE.WebGLPrograms = function(e, t) {
		function i(e) {
			if(t.floatVertexTextures && e && e.skeleton && e.skeleton.useVertexTexture) return 1024;
			var i = t.maxVertexUniforms,
				r = Math.floor((i - 20) / 4),
				n = r;
			return void 0 !== e && e instanceof THREE.SkinnedMesh && (n = Math.min(e.skeleton.bones.length, n), n < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + n + " (try OpenGL instead of ANGLE)")), n
		}

		function r(e, t) {
			var i;
			return e ? e instanceof THREE.Texture ? i = e.encoding : e instanceof THREE.WebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = e.texture.encoding) : i = THREE.LinearEncoding, i === THREE.LinearEncoding && t && (i = THREE.GammaEncoding), i
		}
		var n = [],
			a = {
				MeshDepthMaterial: "depth",
				MeshNormalMaterial: "normal",
				MeshBasicMaterial: "basic",
				MeshLambertMaterial: "lambert",
				MeshPhongMaterial: "phong",
				MeshStandardMaterial: "physical",
				MeshPhysicalMaterial: "physical",
				LineBasicMaterial: "basic",
				LineDashedMaterial: "dashed",
				PointsMaterial: "points"
			},
			o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "depthPacking"];
		this.getParameters = function(n, o, s, l, h) {
			var c = a[n.type],
				u = i(h),
				p = e.getPrecision();
			null !== n.precision && (p = t.getMaxPrecision(n.precision), p !== n.precision && console.warn("THREE.WebGLProgram.getParameters:", n.precision, "not supported, using", p, "instead."));
			var d = e.getCurrentRenderTarget(),
				f = {
					shaderID: c,
					precision: p,
					supportsVertexTextures: t.vertexTextures,
					outputEncoding: r(d ? d.texture : null, e.gammaOutput),
					map: !!n.map,
					mapEncoding: r(n.map, e.gammaInput),
					envMap: !!n.envMap,
					envMapMode: n.envMap && n.envMap.mapping,
					envMapEncoding: r(n.envMap, e.gammaInput),
					envMapCubeUV: !!n.envMap && (n.envMap.mapping === THREE.CubeUVReflectionMapping || n.envMap.mapping === THREE.CubeUVRefractionMapping),
					lightMap: !!n.lightMap,
					aoMap: !!n.aoMap,
					emissiveMap: !!n.emissiveMap,
					emissiveMapEncoding: r(n.emissiveMap, e.gammaInput),
					bumpMap: !!n.bumpMap,
					normalMap: !!n.normalMap,
					displacementMap: !!n.displacementMap,
					roughnessMap: !!n.roughnessMap,
					metalnessMap: !!n.metalnessMap,
					specularMap: !!n.specularMap,
					alphaMap: !!n.alphaMap,
					combine: n.combine,
					vertexColors: n.vertexColors,
					fog: !!s,
					useFog: n.fog,
					fogExp: s instanceof THREE.FogExp2,
					flatShading: n.shading === THREE.FlatShading,
					sizeAttenuation: n.sizeAttenuation,
					logarithmicDepthBuffer: t.logarithmicDepthBuffer,
					skinning: n.skinning,
					maxBones: u,
					useVertexTexture: t.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture,
					morphTargets: n.morphTargets,
					morphNormals: n.morphNormals,
					maxMorphTargets: e.maxMorphTargets,
					maxMorphNormals: e.maxMorphNormals,
					numDirLights: o.directional.length,
					numPointLights: o.point.length,
					numSpotLights: o.spot.length,
					numHemiLights: o.hemi.length,
					numClippingPlanes: l,
					shadowMapEnabled: e.shadowMap.enabled && h.receiveShadow && o.shadows.length > 0,
					shadowMapType: e.shadowMap.type,
					toneMapping: e.toneMapping,
					physicallyCorrectLights: e.physicallyCorrectLights,
					premultipliedAlpha: n.premultipliedAlpha,
					alphaTest: n.alphaTest,
					doubleSided: n.side === THREE.DoubleSide,
					flipSided: n.side === THREE.BackSide,
					depthPacking: void 0 !== n.depthPacking ? n.depthPacking : !1
				};
			return f
		}, this.getProgramCode = function(e, t) {
			var i = [];
			if(t.shaderID ? i.push(t.shaderID) : (i.push(e.fragmentShader), i.push(e.vertexShader)), void 0 !== e.defines)
				for(var r in e.defines) i.push(r), i.push(e.defines[r]);
			for(var n = 0; n < o.length; n++) i.push(t[o[n]]);
			return i.join()
		}, this.acquireProgram = function(t, i, r) {
			for(var a, o = 0, s = n.length; s > o; o++) {
				var l = n[o];
				if(l.code === r) {
					a = l, ++a.usedTimes;
					break
				}
			}
			return void 0 === a && (a = new THREE.WebGLProgram(e, r, t, i), n.push(a)), a
		}, this.releaseProgram = function(e) {
			if(0 === --e.usedTimes) {
				var t = n.indexOf(e);
				n[t] = n[n.length - 1], n.pop(), e.destroy()
			}
		}, this.programs = n
	}, THREE.WebGLProperties = function() {
		var e = {};
		this.get = function(t) {
			var i = t.uuid,
				r = e[i];
			return void 0 === r && (r = {}, e[i] = r), r
		}, this.delete = function(t) {
			delete e[t.uuid]
		}, this.clear = function() {
			e = {}
		}
	}, THREE.WebGLShader = function() {
		function e(e) {
			for(var t = e.split("\n"), i = 0; i < t.length; i++) t[i] = i + 1 + ": " + t[i];
			return t.join("\n")
		}
		return function(t, i, r) {
			var n = t.createShader(i);
			return t.shaderSource(n, r), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", i === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), e(r)), n
		}
	}(), THREE.WebGLShadowMap = function(e, t, i, r) {
		function n(t, i, r, n) {
			var a = t.geometry,
				o = null,
				s = T,
				l = t.customDepthMaterial;
			if(r && (s = y, l = t.customDistanceMaterial), l) o = l;
			else {
				var h = !1;
				i.morphTargets && (a instanceof THREE.BufferGeometry ? h = a.morphAttributes && a.morphAttributes.position && a.morphAttributes.position.length > 0 : a instanceof THREE.Geometry && (h = a.morphTargets && a.morphTargets.length > 0));
				var c = t instanceof THREE.SkinnedMesh && i.skinning,
					u = 0;
				h && (u |= E), c && (u |= g), o = s[u]
			}
			if(e.localClippingEnabled && i.clipShadows === !0 && 0 !== i.clippingPlanes.length) {
				var p = o.uuid,
					d = i.uuid,
					f = _[p];
				void 0 === f && (f = {}, _[p] = f);
				var m = f[d];
				void 0 === m && (m = o.clone(), f[d] = m), o = m
			}
			o.visible = i.visible, o.wireframe = i.wireframe;
			var v = i.side;
			return D.renderSingleSided && v == THREE.DoubleSide && (v = THREE.FrontSide), D.renderReverseSided && (v === THREE.FrontSide ? v = THREE.BackSide : v === THREE.BackSide && (v = THREE.FrontSide)), o.side = v, o.clipShadows = i.clipShadows, o.clippingPlanes = i.clippingPlanes, o.wireframeLinewidth = i.wireframeLinewidth, o.linewidth = i.linewidth, r && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(n), o
		}

		function a(e, t, i) {
			if(e.visible !== !1) {
				if(e.layers.test(t.layers) && (e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && e.castShadow && (e.frustumCulled === !1 || l.intersectsObject(e) === !0)) {
					var r = e.material;
					r.visible === !0 && (e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld), m.push(e))
				}
				for(var n = e.children, o = 0, s = n.length; s > o; o++) a(n[o], t, i)
			}
		}
		var o = e.context,
			s = e.state,
			l = new THREE.Frustum,
			h = new THREE.Matrix4,
			c = t.shadows,
			u = new THREE.Vector2,
			p = new THREE.Vector2(r.maxTextureSize, r.maxTextureSize),
			d = new THREE.Vector3,
			f = new THREE.Vector3,
			m = [],
			E = 1,
			g = 2,
			v = (E | g) + 1,
			T = new Array(v),
			y = new Array(v),
			_ = {},
			R = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0)],
			x = [new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)],
			b = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
			w = new THREE.MeshDepthMaterial;
		w.depthPacking = THREE.RGBADepthPacking, w.clipping = !0;
		for(var H = THREE.ShaderLib.distanceRGBA, M = THREE.UniformsUtils.clone(H.uniforms), S = 0; S !== v; ++S) {
			var A = 0 !== (S & E),
				C = 0 !== (S & g),
				L = w.clone();
			L.morphTargets = A, L.skinning = C, T[S] = L;
			var P = new THREE.ShaderMaterial({
				defines: {
					USE_SHADOWMAP: ""
				},
				uniforms: M,
				vertexShader: H.vertexShader,
				fragmentShader: H.fragmentShader,
				morphTargets: A,
				skinning: C,
				clipping: !0
			});
			y[S] = P
		}
		var D = this;
		this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = THREE.PCFShadowMap, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function(t, r) {
			if(D.enabled !== !1 && (D.autoUpdate !== !1 || D.needsUpdate !== !1) && 0 !== c.length) {
				s.clearColor(1, 1, 1, 1), s.disable(o.BLEND), s.setDepthTest(!0), s.setScissorTest(!1);
				for(var E, g, v = 0, T = c.length; T > v; v++) {
					var y = c[v],
						_ = y.shadow;
					if(void 0 !== _) {
						var w = _.camera;
						if(u.copy(_.mapSize), u.min(p), y instanceof THREE.PointLight) {
							E = 6, g = !0;
							var H = u.x,
								M = u.y;
							b[0].set(2 * H, M, H, M), b[1].set(0, M, H, M), b[2].set(3 * H, M, H, M), b[3].set(H, M, H, M), b[4].set(3 * H, 0, H, M), b[5].set(H, 0, H, M), u.x *= 4, u.y *= 2
						} else E = 1, g = !1;
						if(null === _.map) {
							var S = {
								minFilter: THREE.NearestFilter,
								magFilter: THREE.NearestFilter,
								format: THREE.RGBAFormat
							};
							_.map = new THREE.WebGLRenderTarget(u.x, u.y, S), w.updateProjectionMatrix()
						}
						_ instanceof THREE.SpotLightShadow && _.update(y);
						var A = _.map,
							C = _.matrix;
						f.setFromMatrixPosition(y.matrixWorld), w.position.copy(f), e.setRenderTarget(A), e.clear();
						for(var L = 0; E > L; L++) {
							if(g) {
								d.copy(w.position), d.add(R[L]), w.up.copy(x[L]), w.lookAt(d);
								var P = b[L];
								s.viewport(P)
							} else d.setFromMatrixPosition(y.target.matrixWorld), w.lookAt(d);
							w.updateMatrixWorld(), w.matrixWorldInverse.getInverse(w.matrixWorld), C.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), C.multiply(w.projectionMatrix), C.multiply(w.matrixWorldInverse), h.multiplyMatrices(w.projectionMatrix, w.matrixWorldInverse), l.setFromMatrix(h), m.length = 0, a(t, r, w);
							for(var O = 0, I = m.length; I > O; O++) {
								var B = m[O],
									U = i.update(B),
									F = B.material;
								if(F instanceof THREE.MultiMaterial)
									for(var N = U.groups, k = F.materials, G = 0, V = N.length; V > G; G++) {
										var z = N[G],
											j = k[z.materialIndex];
										if(j.visible === !0) {
											var W = n(B, j, g, f);
											e.renderBufferDirect(w, null, U, W, B, z)
										}
									} else {
										var W = n(B, F, g, f);
										e.renderBufferDirect(w, null, U, W, B, null)
									}
							}
						}
					} else console.warn("THREE.WebGLShadowMap:", y, "has no shadow.")
				}
				var X = e.getClearColor(),
					q = e.getClearAlpha();
				e.setClearColor(X, q), D.needsUpdate = !1
			}
		}
	}, THREE.WebGLState = function(e, t, i) {
		function r(t, i, r) {
			var n = new Uint8Array(4),
				a = e.createTexture();
			e.bindTexture(t, a), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
			for(var o = 0; r > o; o++) e.texImage2D(i + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, n);
			return a
		}
		var n = this;
		this.buffers = {
			color: new THREE.WebGLColorBuffer(e, this),
			depth: new THREE.WebGLDepthBuffer(e, this),
			stencil: new THREE.WebGLStencilBuffer(e, this)
		};
		var a = e.getParameter(e.MAX_VERTEX_ATTRIBS),
			o = new Uint8Array(a),
			s = new Uint8Array(a),
			l = new Uint8Array(a),
			h = {},
			c = null,
			u = null,
			p = null,
			d = null,
			f = null,
			m = null,
			E = null,
			g = null,
			v = !1,
			T = null,
			y = null,
			_ = null,
			R = null,
			x = null,
			b = null,
			w = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
			H = null,
			M = {},
			S = new THREE.Vector4,
			A = new THREE.Vector4,
			C = {};
		C[e.TEXTURE_2D] = r(e.TEXTURE_2D, e.TEXTURE_2D, 1), C[e.TEXTURE_CUBE_MAP] = r(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), this.init = function() {
			this.clearColor(0, 0, 0, 1), this.clearDepth(1), this.clearStencil(0), this.enable(e.DEPTH_TEST), this.setDepthFunc(THREE.LessEqualDepth), this.setFlipSided(!1), this.setCullFace(THREE.CullFaceBack), this.enable(e.CULL_FACE), this.enable(e.BLEND), this.setBlending(THREE.NormalBlending)
		}, this.initAttributes = function() {
			for(var e = 0, t = o.length; t > e; e++) o[e] = 0
		}, this.enableAttribute = function(i) {
			if(o[i] = 1, 0 === s[i] && (e.enableVertexAttribArray(i), s[i] = 1), 0 !== l[i]) {
				var r = t.get("ANGLE_instanced_arrays");
				r.vertexAttribDivisorANGLE(i, 0), l[i] = 0
			}
		}, this.enableAttributeAndDivisor = function(t, i, r) {
			o[t] = 1, 0 === s[t] && (e.enableVertexAttribArray(t), s[t] = 1), l[t] !== i && (r.vertexAttribDivisorANGLE(t, i), l[t] = i)
		}, this.disableUnusedAttributes = function() {
			for(var t = 0, i = s.length; t !== i; ++t) s[t] !== o[t] && (e.disableVertexAttribArray(t), s[t] = 0)
		}, this.enable = function(t) {
			h[t] !== !0 && (e.enable(t), h[t] = !0)
		}, this.disable = function(t) {
			h[t] !== !1 && (e.disable(t), h[t] = !1)
		}, this.getCompressedTextureFormats = function() {
			if(null === c && (c = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
				for(var i = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), r = 0; r < i.length; r++) c.push(i[r]);
			return c
		}, this.setBlending = function(t, r, n, a, o, s, l, h) {
			return t === THREE.NoBlending ? (this.disable(e.BLEND), void(u = t)) : (this.enable(e.BLEND), (t !== u || h !== v) && (t === THREE.AdditiveBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === THREE.SubtractiveBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === THREE.MultiplyBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), u = t, v = h), void(t === THREE.CustomBlending ? (o = o || r, s = s || n, l = l || a, (r !== p || o !== m) && (e.blendEquationSeparate(i(r), i(o)), p = r, m = o), (n !== d || a !== f || s !== E || l !== g) && (e.blendFuncSeparate(i(n), i(a), i(s), i(l)), d = n, f = a, E = s, g = l)) : (p = null, d = null, f = null, m = null, E = null, g = null)))
		}, this.setColorWrite = function(e) {
			this.buffers.color.setMask(e)
		}, this.setDepthTest = function(e) {
			this.buffers.depth.setTest(e)
		}, this.setDepthWrite = function(e) {
			this.buffers.depth.setMask(e)
		}, this.setDepthFunc = function(e) {
			this.buffers.depth.setFunc(e)
		}, this.setStencilTest = function(e) {
			this.buffers.stencil.setTest(e)
		}, this.setStencilWrite = function(e) {
			this.buffers.stencil.setMask(e)
		}, this.setStencilFunc = function(e, t, i) {
			this.buffers.stencil.setFunc(e, t, i)
		}, this.setStencilOp = function(e, t, i) {
			this.buffers.stencil.setOp(e, t, i)
		}, this.setFlipSided = function(t) {
			T !== t && (e.frontFace(t ? e.CW : e.CCW), T = t)
		}, this.setCullFace = function(t) {
			t !== THREE.CullFaceNone ? (this.enable(e.CULL_FACE), t !== y && e.cullFace(t === THREE.CullFaceBack ? e.BACK : t === THREE.CullFaceFront ? e.FRONT : e.FRONT_AND_BACK)) : this.disable(e.CULL_FACE), y = t
		}, this.setLineWidth = function(t) {
			t !== _ && (e.lineWidth(t), _ = t)
		}, this.setPolygonOffset = function(t, i, r) {
			t ? (this.enable(e.POLYGON_OFFSET_FILL), (R !== i || x !== r) && (e.polygonOffset(i, r), R = i, x = r)) : this.disable(e.POLYGON_OFFSET_FILL)
		}, this.getScissorTest = function() {
			return b
		}, this.setScissorTest = function(t) {
			b = t, t ? this.enable(e.SCISSOR_TEST) : this.disable(e.SCISSOR_TEST)
		}, this.activeTexture = function(t) {
			void 0 === t && (t = e.TEXTURE0 + w - 1), H !== t && (e.activeTexture(t), H = t)
		}, this.bindTexture = function(t, i) {
			null === H && n.activeTexture();
			var r = M[H];
			void 0 === r && (r = {
				type: void 0,
				texture: void 0
			}, M[H] = r), (r.type !== t || r.texture !== i) && (e.bindTexture(t, i || C[t]), r.type = t, r.texture = i)
		}, this.compressedTexImage2D = function() {
			try {
				e.compressedTexImage2D.apply(e, arguments)
			} catch(t) {
				console.error(t)
			}
		}, this.texImage2D = function() {
			try {
				e.texImage2D.apply(e, arguments)
			} catch(t) {
				console.error(t)
			}
		}, this.clearColor = function(e, t, i, r) {
			this.buffers.color.setClear(e, t, i, r)
		}, this.clearDepth = function(e) {
			this.buffers.depth.setClear(e)
		}, this.clearStencil = function(e) {
			this.buffers.stencil.setClear(e)
		}, this.scissor = function(t) {
			S.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), S.copy(t))
		}, this.viewport = function(t) {
			A.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), A.copy(t))
		}, this.reset = function() {
			for(var t = 0; t < s.length; t++) 1 === s[t] && (e.disableVertexAttribArray(t), s[t] = 0);
			h = {}, c = null, H = null, M = {}, u = null, T = null, y = null, this.buffers.color.reset(), this.buffers.depth.reset(), this.buffers.stencil.reset()
		}
	}, THREE.WebGLColorBuffer = function(e) {
		var t = !1,
			i = new THREE.Vector4,
			r = null,
			n = new THREE.Vector4;
		this.setMask = function(i) {
			r === i || t || (e.colorMask(i, i, i, i), r = i)
		}, this.setLocked = function(e) {
			t = e
		}, this.setClear = function(t, r, a, o) {
			i.set(t, r, a, o), n.equals(i) === !1 && (e.clearColor(t, r, a, o), n.copy(i))
		}, this.reset = function() {
			t = !1, r = null, n = new THREE.Vector4
		}
	}, THREE.WebGLDepthBuffer = function(e, t) {
		var i = !1,
			r = null,
			n = null,
			a = null;
		this.setTest = function(i) {
			i ? t.enable(e.DEPTH_TEST) : t.disable(e.DEPTH_TEST)
		}, this.setMask = function(t) {
			r === t || i || (e.depthMask(t), r = t)
		}, this.setFunc = function(t) {
			if(n !== t) {
				if(t) switch(t) {
					case THREE.NeverDepth:
						e.depthFunc(e.NEVER);
						break;
					case THREE.AlwaysDepth:
						e.depthFunc(e.ALWAYS);
						break;
					case THREE.LessDepth:
						e.depthFunc(e.LESS);
						break;
					case THREE.LessEqualDepth:
						e.depthFunc(e.LEQUAL);
						break;
					case THREE.EqualDepth:
						e.depthFunc(e.EQUAL);
						break;
					case THREE.GreaterEqualDepth:
						e.depthFunc(e.GEQUAL);
						break;
					case THREE.GreaterDepth:
						e.depthFunc(e.GREATER);
						break;
					case THREE.NotEqualDepth:
						e.depthFunc(e.NOTEQUAL);
						break;
					default:
						e.depthFunc(e.LEQUAL)
				} else e.depthFunc(e.LEQUAL);
				n = t
			}
		}, this.setLocked = function(e) {
			i = e
		}, this.setClear = function(t) {
			a !== t && (e.clearDepth(t), a = t)
		}, this.reset = function() {
			i = !1, r = null, n = null, a = null
		}
	}, THREE.WebGLStencilBuffer = function(e, t) {
		var i = !1,
			r = null,
			n = null,
			a = null,
			o = null,
			s = null,
			l = null,
			h = null,
			c = null;
		this.setTest = function(i) {
			i ? t.enable(e.STENCIL_TEST) : t.disable(e.STENCIL_TEST)
		}, this.setMask = function(t) {
			r === t || i || (e.stencilMask(t), r = t)
		}, this.setFunc = function(t, i, r) {
			(n !== t || a !== i || o !== r) && (e.stencilFunc(t, i, r), n = t, a = i, o = r)
		}, this.setOp = function(t, i, r) {
			(s !== t || l !== i || h !== r) && (e.stencilOp(t, i, r), s = t, l = i, h = r)
		}, this.setLocked = function(e) {
			i = e
		}, this.setClear = function(t) {
			c !== t && (e.clearStencil(t), c = t)
		}, this.reset = function() {
			i = !1, r = null, n = null, a = null, o = null, s = null, l = null, h = null, c = null
		}
	}, THREE.WebGLTextures = function(e, t, i, r, n, a, o) {
		function s(e, t) {
			if(e.width > t || e.height > t) {
				var i = t / Math.max(e.width, e.height),
					r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				r.width = Math.floor(e.width * i), r.height = Math.floor(e.height * i);
				var n = r.getContext("2d");
				return n.drawImage(e, 0, 0, e.width, e.height, 0, 0, r.width, r.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + r.width + "x" + r.height, e), r
			}
			return e
		}

		function l(e) {
			return THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height)
		}

		function h(e) {
			if(e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
				var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				t.width = THREE.Math.nearestPowerOfTwo(e.width), t.height = THREE.Math.nearestPowerOfTwo(e.height);
				var i = t.getContext("2d");
				return i.drawImage(e, 0, 0, t.width, t.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + t.width + "x" + t.height, e), t
			}
			return e
		}

		function c(e) {
			return e.wrapS !== THREE.ClampToEdgeWrapping || e.wrapT !== THREE.ClampToEdgeWrapping ? !0 : e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter ? !0 : !1
		}

		function u(t) {
			return t === THREE.NearestFilter || t === THREE.NearestMipMapNearestFilter || t === THREE.NearestMipMapLinearFilter ? e.NEAREST : e.LINEAR
		}

		function p(e) {
			var t = e.target;
			t.removeEventListener("dispose", p), f(t), M.textures--
		}

		function d(e) {
			var t = e.target;
			t.removeEventListener("dispose", d), m(t), M.textures--
		}

		function f(t) {
			var i = r.get(t);
			if(t.image && i.__image__webglTextureCube) e.deleteTexture(i.__image__webglTextureCube);
			else {
				if(void 0 === i.__webglInit) return;
				e.deleteTexture(i.__webglTexture)
			}
			r.delete(t)
		}

		function m(t) {
			var i = r.get(t),
				n = r.get(t.texture);
			if(t) {
				if(void 0 !== n.__webglTexture && e.deleteTexture(n.__webglTexture), t.depthTexture && t.depthTexture.dispose(), t instanceof THREE.WebGLRenderTargetCube)
					for(var a = 0; 6 > a; a++) e.deleteFramebuffer(i.__webglFramebuffer[a]), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer[a]);
				else e.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer);
				r.delete(t.texture), r.delete(t)
			}
		}

		function E(t, n) {
			var a = r.get(t);
			if(t.version > 0 && a.__version !== t.version) {
				var o = t.image;
				if(void 0 === o) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t);
				else {
					if(o.complete !== !1) return void y(a, t, n);
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t)
				}
			}
			i.activeTexture(e.TEXTURE0 + n), i.bindTexture(e.TEXTURE_2D, a.__webglTexture)
		}

		function g(t, o) {
			var h = r.get(t);
			if(6 === t.image.length)
				if(t.version > 0 && h.__version !== t.version) {
					h.__image__webglTextureCube || (t.addEventListener("dispose", p), h.__image__webglTextureCube = e.createTexture(), M.textures++), i.activeTexture(e.TEXTURE0 + o), i.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
					for(var c = t instanceof THREE.CompressedTexture, u = t.image[0] instanceof THREE.DataTexture, d = [], f = 0; 6 > f; f++) d[f] = c || u ? u ? t.image[f].image : t.image[f] : s(t.image[f], n.maxCubemapSize);
					var m = d[0],
						E = l(m),
						g = a(t.format),
						v = a(t.type);
					T(e.TEXTURE_CUBE_MAP, t, E);
					for(var f = 0; 6 > f; f++)
						if(c)
							for(var y, _ = d[f].mipmaps, R = 0, x = _.length; x > R; R++) y = _[R], t.format !== THREE.RGBAFormat && t.format !== THREE.RGBFormat ? i.getCompressedTextureFormats().indexOf(g) > -1 ? i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, R, g, y.width, y.height, 0, y.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, R, g, y.width, y.height, 0, g, v, y.data);
						else u ? i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, g, d[f].width, d[f].height, 0, g, v, d[f].data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, g, g, v, d[f]);
					t.generateMipmaps && E && e.generateMipmap(e.TEXTURE_CUBE_MAP), h.__version = t.version, t.onUpdate && t.onUpdate(t)
				} else i.activeTexture(e.TEXTURE0 + o), i.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube)
		}

		function v(t, n) {
			i.activeTexture(e.TEXTURE0 + n), i.bindTexture(e.TEXTURE_CUBE_MAP, r.get(t).__webglTexture)
		}

		function T(i, o, s) {
			var l;
			if(s ? (e.texParameteri(i, e.TEXTURE_WRAP_S, a(o.wrapS)), e.texParameteri(i, e.TEXTURE_WRAP_T, a(o.wrapT)), e.texParameteri(i, e.TEXTURE_MAG_FILTER, a(o.magFilter)), e.texParameteri(i, e.TEXTURE_MIN_FILTER, a(o.minFilter))) : (e.texParameteri(i, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(i, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), (o.wrapS !== THREE.ClampToEdgeWrapping || o.wrapT !== THREE.ClampToEdgeWrapping) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", o), e.texParameteri(i, e.TEXTURE_MAG_FILTER, u(o.magFilter)), e.texParameteri(i, e.TEXTURE_MIN_FILTER, u(o.minFilter)), o.minFilter !== THREE.NearestFilter && o.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", o)), l = t.get("EXT_texture_filter_anisotropic")) {
				if(o.type === THREE.FloatType && null === t.get("OES_texture_float_linear")) return;
				if(o.type === THREE.HalfFloatType && null === t.get("OES_texture_half_float_linear")) return;
				(o.anisotropy > 1 || r.get(o).__currentAnisotropy) && (e.texParameterf(i, l.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, n.getMaxAnisotropy())), r.get(o).__currentAnisotropy = o.anisotropy)
			}
		}

		function y(t, r, o) {
			void 0 === t.__webglInit && (t.__webglInit = !0, r.addEventListener("dispose", p), t.__webglTexture = e.createTexture(), M.textures++), i.activeTexture(e.TEXTURE0 + o), i.bindTexture(e.TEXTURE_2D, t.__webglTexture), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, r.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, r.unpackAlignment);
			var u = s(r.image, n.maxTextureSize);
			c(r) && l(u) === !1 && (u = h(u));
			var d = l(u),
				f = a(r.format),
				m = a(r.type);
			T(e.TEXTURE_2D, r, d);
			var E, g = r.mipmaps;
			if(r instanceof THREE.DepthTexture) {
				var v = e.DEPTH_COMPONENT;
				if(r.type === THREE.FloatType) {
					if(!S) throw new Error("Float Depth Texture only supported in WebGL2.0");
					v = e.DEPTH_COMPONENT32F
				} else S && (v = e.DEPTH_COMPONENT16);
				i.texImage2D(e.TEXTURE_2D, 0, v, u.width, u.height, 0, f, m, null)
			} else if(r instanceof THREE.DataTexture)
				if(g.length > 0 && d) {
					for(var y = 0, _ = g.length; _ > y; y++) E = g[y], i.texImage2D(e.TEXTURE_2D, y, f, E.width, E.height, 0, f, m, E.data);
					r.generateMipmaps = !1
				} else i.texImage2D(e.TEXTURE_2D, 0, f, u.width, u.height, 0, f, m, u.data);
			else if(r instanceof THREE.CompressedTexture)
				for(var y = 0, _ = g.length; _ > y; y++) E = g[y], r.format !== THREE.RGBAFormat && r.format !== THREE.RGBFormat ? i.getCompressedTextureFormats().indexOf(f) > -1 ? i.compressedTexImage2D(e.TEXTURE_2D, y, f, E.width, E.height, 0, E.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(e.TEXTURE_2D, y, f, E.width, E.height, 0, f, m, E.data);
			else if(g.length > 0 && d) {
				for(var y = 0, _ = g.length; _ > y; y++) E = g[y], i.texImage2D(e.TEXTURE_2D, y, f, f, m, E);
				r.generateMipmaps = !1
			} else i.texImage2D(e.TEXTURE_2D, 0, f, f, m, u);
			r.generateMipmaps && d && e.generateMipmap(e.TEXTURE_2D), t.__version = r.version, r.onUpdate && r.onUpdate(r)
		}

		function _(t, n, o, s) {
			var l = a(n.texture.format),
				h = a(n.texture.type);
			i.texImage2D(s, 0, l, n.width, n.height, 0, l, h, null), e.bindFramebuffer(e.FRAMEBUFFER, t), e.framebufferTexture2D(e.FRAMEBUFFER, o, s, r.get(n.texture).__webglTexture, 0), e.bindFramebuffer(e.FRAMEBUFFER, null)
		}

		function R(t, i) {
			e.bindRenderbuffer(e.RENDERBUFFER, t), i.depthBuffer && !i.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, i.width, i.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : i.depthBuffer && i.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, i.width, i.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, i.width, i.height), e.bindRenderbuffer(e.RENDERBUFFER, null)
		}

		function x(t, i) {
			var n = i instanceof THREE.WebGLRenderTargetCube;
			if(n) throw new Error("Depth Texture with cube render targets is not supported!");
			if(e.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture instanceof THREE.DepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
			r.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), E(i.depthTexture, 0);
			var a = r.get(i.depthTexture).__webglTexture;
			e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a, 0)
		}

		function b(t) {
			var i = r.get(t),
				n = t instanceof THREE.WebGLRenderTargetCube;
			if(t.depthTexture) {
				if(n) throw new Error("target.depthTexture not supported in Cube render targets");
				x(i.__webglFramebuffer, t)
			} else if(n) {
				i.__webglDepthbuffer = [];
				for(var a = 0; 6 > a; a++) e.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[a]), i.__webglDepthbuffer[a] = e.createRenderbuffer(), R(i.__webglDepthbuffer[a], t)
			} else e.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer = e.createRenderbuffer(), R(i.__webglDepthbuffer, t);
			e.bindFramebuffer(e.FRAMEBUFFER, null)
		}

		function w(t) {
			var n = r.get(t),
				a = r.get(t.texture);
			t.addEventListener("dispose", d), a.__webglTexture = e.createTexture(), M.textures++;
			var o = t instanceof THREE.WebGLRenderTargetCube,
				s = l(t);
			if(o) {
				n.__webglFramebuffer = [];
				for(var h = 0; 6 > h; h++) n.__webglFramebuffer[h] = e.createFramebuffer()
			} else n.__webglFramebuffer = e.createFramebuffer();
			if(o) {
				i.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture), T(e.TEXTURE_CUBE_MAP, t.texture, s);
				for(var h = 0; 6 > h; h++) _(n.__webglFramebuffer[h], t, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + h);
				t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_CUBE_MAP), i.bindTexture(e.TEXTURE_CUBE_MAP, null)
			} else i.bindTexture(e.TEXTURE_2D, a.__webglTexture), T(e.TEXTURE_2D, t.texture, s), _(n.__webglFramebuffer, t, e.COLOR_ATTACHMENT0, e.TEXTURE_2D), t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_2D), i.bindTexture(e.TEXTURE_2D, null);
			t.depthBuffer && b(t)
		}

		function H(t) {
			var n = t.texture;
			if(n.generateMipmaps && l(t) && n.minFilter !== THREE.NearestFilter && n.minFilter !== THREE.LinearFilter) {
				var a = t instanceof THREE.WebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D,
					o = r.get(n).__webglTexture;
				i.bindTexture(a, o), e.generateMipmap(a), i.bindTexture(a, null)
			}
		}
		var M = o.memory,
			S = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext;
		this.setTexture2D = E, this.setTextureCube = g, this.setTextureCubeDynamic = v, this.setupRenderTarget = w, this.updateRenderTargetMipmap = H
	}, THREE.WebGLUniforms = function() {
		var e = new THREE.Texture,
			t = new THREE.CubeTexture,
			i = function() {
				this.seq = [], this.map = {}
			},
			r = [],
			n = [],
			a = function(e, t, i) {
				var n = e[0];
				if(0 >= n || n > 0) return e;
				var a = t * i,
					o = r[a];
				if(void 0 === o && (o = new Float32Array(a), r[a] = o), 0 !== t) {
					n.toArray(o, 0);
					for(var s = 1, l = 0; s !== t; ++s) l += i, e[s].toArray(o, l)
				}
				return o
			},
			o = function(e, t) {
				var i = n[t];
				void 0 === i && (i = new Int32Array(t), n[t] = i);
				for(var r = 0; r !== t; ++r) i[r] = e.allocTextureUnit();
				return i
			},
			s = function(e, t) {
				e.uniform1f(this.addr, t)
			},
			l = function(e, t) {
				e.uniform1i(this.addr, t)
			},
			h = function(e, t) {
				void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
			},
			c = function(e, t) {
				void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
			},
			u = function(e, t) {
				void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
			},
			p = function(e, t) {
				e.uniformMatrix2fv(this.addr, !1, t.elements || t)
			},
			d = function(e, t) {
				e.uniformMatrix3fv(this.addr, !1, t.elements || t)
			},
			f = function(e, t) {
				e.uniformMatrix4fv(this.addr, !1, t.elements || t)
			},
			m = function(t, i, r) {
				var n = r.allocTextureUnit();
				t.uniform1i(this.addr, n), r.setTexture2D(i || e, n)
			},
			E = function(e, i, r) {
				var n = r.allocTextureUnit();
				e.uniform1i(this.addr, n), r.setTextureCube(i || t, n)
			},
			g = function(e, t) {
				e.uniform2iv(this.addr, t)
			},
			v = function(e, t) {
				e.uniform3iv(this.addr, t)
			},
			T = function(e, t) {
				e.uniform4iv(this.addr, t)
			},
			y = function(e) {
				switch(e) {
					case 5126:
						return s;
					case 35664:
						return h;
					case 35665:
						return c;
					case 35666:
						return u;
					case 35674:
						return p;
					case 35675:
						return d;
					case 35676:
						return f;
					case 35678:
						return m;
					case 35680:
						return E;
					case 5124:
					case 35670:
						return l;
					case 35667:
					case 35671:
						return g;
					case 35668:
					case 35672:
						return v;
					case 35669:
					case 35673:
						return T
				}
			},
			_ = function(e, t) {
				e.uniform1fv(this.addr, t)
			},
			R = function(e, t) {
				e.uniform1iv(this.addr, t)
			},
			x = function(e, t) {
				e.uniform2fv(this.addr, a(t, this.size, 2))
			},
			b = function(e, t) {
				e.uniform3fv(this.addr, a(t, this.size, 3))
			},
			w = function(e, t) {
				e.uniform4fv(this.addr, a(t, this.size, 4))
			},
			H = function(e, t) {
				e.uniformMatrix2fv(this.addr, !1, a(t, this.size, 4))
			},
			M = function(e, t) {
				e.uniformMatrix3fv(this.addr, !1, a(t, this.size, 9))
			},
			S = function(e, t) {
				e.uniformMatrix4fv(this.addr, !1, a(t, this.size, 16))
			},
			A = function(t, i, r) {
				var n = i.length,
					a = o(r, n);
				t.uniform1iv(this.addr, a);
				for(var s = 0; s !== n; ++s) r.setTexture2D(i[s] || e, a[s])
			},
			C = function(e, i, r) {
				var n = i.length,
					a = o(r, n);
				e.uniform1iv(this.addr, a);
				for(var s = 0; s !== n; ++s) r.setTextureCube(i[s] || t, a[s])
			},
			L = function(e) {
				switch(e) {
					case 5126:
						return _;
					case 35664:
						return x;
					case 35665:
						return b;
					case 35666:
						return w;
					case 35674:
						return H;
					case 35675:
						return M;
					case 35676:
						return S;
					case 35678:
						return A;
					case 35680:
						return C;
					case 5124:
					case 35670:
						return R;
					case 35667:
					case 35671:
						return g;
					case 35668:
					case 35672:
						return v;
					case 35669:
					case 35673:
						return T
				}
			},
			P = function(e, t, i) {
				this.id = e, this.addr = i, this.setValue = y(t.type)
			},
			D = function(e, t, i) {
				this.id = e, this.addr = i, this.size = t.size, this.setValue = L(t.type)
			},
			O = function(e) {
				this.id = e, i.call(this)
			};
		O.prototype.setValue = function(e, t) {
			for(var i = this.seq, r = 0, n = i.length; r !== n; ++r) {
				var a = i[r];
				a.setValue(e, t[a.id])
			}
		};
		var I = /([\w\d_]+)(\])?(\[|\.)?/g,
			B = function(e, t) {
				e.seq.push(t), e.map[t.id] = t
			},
			U = function(e, t, i) {
				var r = e.name,
					n = r.length;
				for(I.lastIndex = 0;;) {
					var a = I.exec(r),
						o = I.lastIndex,
						s = a[1],
						l = "]" === a[2],
						h = a[3];
					if(l && (s = 0 | s), void 0 === h || "[" === h && o + 2 === n) {
						B(i, void 0 === h ? new P(s, e, t) : new D(s, e, t));
						break
					}
					var c = i.map,
						u = c[s];
					void 0 === u && (u = new O(s), B(i, u)), i = u
				}
			},
			F = function(e, t, r) {
				i.call(this), this.renderer = r;
				for(var n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), a = 0; a !== n; ++a) {
					var o = e.getActiveUniform(t, a),
						s = o.name,
						l = e.getUniformLocation(t, s);
					U(o, l, this)
				}
			};
		return F.prototype.setValue = function(e, t, i) {
			var r = this.map[t];
			void 0 !== r && r.setValue(e, i, this.renderer)
		}, F.prototype.set = function(e, t, i) {
			var r = this.map[i];
			void 0 !== r && r.setValue(e, t[i], this.renderer)
		}, F.prototype.setOptional = function(e, t, i) {
			var r = t[i];
			void 0 !== r && this.setValue(e, i, r)
		}, F.upload = function(e, t, i, r) {
			for(var n = 0, a = t.length; n !== a; ++n) {
				var o = t[n],
					s = i[o.id];
				s.needsUpdate !== !1 && o.setValue(e, s.value, r)
			}
		}, F.seqWithValue = function(e, t) {
			for(var i = [], r = 0, n = e.length; r !== n; ++r) {
				var a = e[r];
				a.id in t && i.push(a)
			}
			return i
		}, F.splitDynamic = function(e, t) {
			for(var i = null, r = e.length, n = 0, a = 0; a !== r; ++a) {
				var o = e[a],
					s = t[o.id];
				s && s.dynamic === !0 ? (null === i && (i = []), i.push(o)) : (a > n && (e[n] = o), ++n)
			}
			return r > n && (e.length = n), i
		}, F.evalDynamic = function(e, t, i, r) {
			for(var n = 0, a = e.length; n !== a; ++n) {
				var o = t[e[n].id],
					s = o.onUpdateCallback;
				void 0 !== s && s.call(o, i, r)
			}
		}, F
	}(), THREE.LensFlarePlugin = function(e, t) {
		function i() {
			var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
				t = new Uint16Array([0, 1, 2, 0, 2, 3]);
			n = p.createBuffer(), a = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, n), p.bufferData(p.ARRAY_BUFFER, e, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), p.bufferData(p.ELEMENT_ARRAY_BUFFER, t, p.STATIC_DRAW), c = p.createTexture(), u = p.createTexture(), d.bindTexture(p.TEXTURE_2D, c), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), d.bindTexture(p.TEXTURE_2D, u), p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), o = {
				vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
				fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
			}, s = r(o), l = {
				vertex: p.getAttribLocation(s, "position"),
				uv: p.getAttribLocation(s, "uv")
			}, h = {
				renderType: p.getUniformLocation(s, "renderType"),
				map: p.getUniformLocation(s, "map"),
				occlusionMap: p.getUniformLocation(s, "occlusionMap"),
				opacity: p.getUniformLocation(s, "opacity"),
				color: p.getUniformLocation(s, "color"),
				scale: p.getUniformLocation(s, "scale"),
				rotation: p.getUniformLocation(s, "rotation"),
				screenPosition: p.getUniformLocation(s, "screenPosition")
			}
		}

		function r(t) {
			var i = p.createProgram(),
				r = p.createShader(p.FRAGMENT_SHADER),
				n = p.createShader(p.VERTEX_SHADER),
				a = "precision " + e.getPrecision() + " float;\n";
			return p.shaderSource(r, a + t.fragmentShader), p.shaderSource(n, a + t.vertexShader), p.compileShader(r), p.compileShader(n), p.attachShader(i, r), p.attachShader(i, n), p.linkProgram(i), i
		}
		var n, a, o, s, l, h, c, u, p = e.context,
			d = e.state;
		this.render = function(r, o, f) {
			if(0 !== t.length) {
				var m = new THREE.Vector3,
					E = f.w / f.z,
					g = .5 * f.z,
					v = .5 * f.w,
					T = 16 / f.w,
					y = new THREE.Vector2(T * E, T),
					_ = new THREE.Vector3(1, 1, 0),
					R = new THREE.Vector2(1, 1),
					x = new THREE.Box2;
				x.min.set(0, 0), x.max.set(f.z - 16, f.w - 16), void 0 === s && i(), p.useProgram(s), d.initAttributes(), d.enableAttribute(l.vertex), d.enableAttribute(l.uv), d.disableUnusedAttributes(), p.uniform1i(h.occlusionMap, 0), p.uniform1i(h.map, 1), p.bindBuffer(p.ARRAY_BUFFER, n), p.vertexAttribPointer(l.vertex, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(l.uv, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), d.disable(p.CULL_FACE), d.setDepthWrite(!1);
				for(var b = 0, w = t.length; w > b; b++) {
					T = 16 / f.w, y.set(T * E, T);
					var H = t[b];
					if(m.set(H.matrixWorld.elements[12], H.matrixWorld.elements[13], H.matrixWorld.elements[14]), m.applyMatrix4(o.matrixWorldInverse), m.applyProjection(o.projectionMatrix), _.copy(m), R.x = f.x + _.x * g + g - 8, R.y = f.y + _.y * v + v - 8, x.containsPoint(R) === !0) {
						d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, null), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, c), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, R.x, R.y, 16, 16, 0), p.uniform1i(h.renderType, 0), p.uniform2f(h.scale, y.x, y.y), p.uniform3f(h.screenPosition, _.x, _.y, _.z), d.disable(p.BLEND), d.enable(p.DEPTH_TEST), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, u), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, R.x, R.y, 16, 16, 0), p.uniform1i(h.renderType, 1), d.disable(p.DEPTH_TEST), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, c), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), H.positionScreen.copy(_), H.customUpdateCallback ? H.customUpdateCallback(H) : H.updateLensFlares(), p.uniform1i(h.renderType, 2), d.enable(p.BLEND);
						for(var M = 0, S = H.lensFlares.length; S > M; M++) {
							var A = H.lensFlares[M];
							A.opacity > .001 && A.scale > .001 && (_.x = A.x, _.y = A.y, _.z = A.z, T = A.size * A.scale / f.w, y.x = T * E, y.y = T, p.uniform3f(h.screenPosition, _.x, _.y, _.z), p.uniform2f(h.scale, y.x, y.y), p.uniform1f(h.rotation, A.rotation), p.uniform1f(h.opacity, A.opacity), p.uniform3f(h.color, A.color.r, A.color.g, A.color.b), d.setBlending(A.blending, A.blendEquation, A.blendSrc, A.blendDst), e.setTexture2D(A.texture, 1), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
						}
					}
				}
				d.enable(p.CULL_FACE), d.enable(p.DEPTH_TEST), d.setDepthWrite(!0), e.resetGLState()
			}
		}
	}, THREE.SpritePlugin = function(e, t) {
		function i() {
			var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
				t = new Uint16Array([0, 1, 2, 0, 2, 3]);
			a = u.createBuffer(), o = u.createBuffer(), u.bindBuffer(u.ARRAY_BUFFER, a), u.bufferData(u.ARRAY_BUFFER, e, u.STATIC_DRAW), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, o), u.bufferData(u.ELEMENT_ARRAY_BUFFER, t, u.STATIC_DRAW), s = r(), l = {
				position: u.getAttribLocation(s, "position"),
				uv: u.getAttribLocation(s, "uv")
			}, h = {
				uvOffset: u.getUniformLocation(s, "uvOffset"),
				uvScale: u.getUniformLocation(s, "uvScale"),
				rotation: u.getUniformLocation(s, "rotation"),
				scale: u.getUniformLocation(s, "scale"),
				color: u.getUniformLocation(s, "color"),
				map: u.getUniformLocation(s, "map"),
				opacity: u.getUniformLocation(s, "opacity"),
				modelViewMatrix: u.getUniformLocation(s, "modelViewMatrix"),
				projectionMatrix: u.getUniformLocation(s, "projectionMatrix"),
				fogType: u.getUniformLocation(s, "fogType"),
				fogDensity: u.getUniformLocation(s, "fogDensity"),
				fogNear: u.getUniformLocation(s, "fogNear"),
				fogFar: u.getUniformLocation(s, "fogFar"),
				fogColor: u.getUniformLocation(s, "fogColor"),
				alphaTest: u.getUniformLocation(s, "alphaTest")
			};
			var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
			i.width = 8, i.height = 8;
			var n = i.getContext("2d");
			n.fillStyle = "white", n.fillRect(0, 0, 8, 8), c = new THREE.Texture(i), c.needsUpdate = !0
		}

		function r() {
			var t = u.createProgram(),
				i = u.createShader(u.VERTEX_SHADER),
				r = u.createShader(u.FRAGMENT_SHADER);
			return u.shaderSource(i, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), u.shaderSource(r, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), u.compileShader(i), u.compileShader(r), u.attachShader(t, i), u.attachShader(t, r), u.linkProgram(t), t
		}

		function n(e, t) {
			return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
		}
		var a, o, s, l, h, c, u = e.context,
			p = e.state,
			d = new THREE.Vector3,
			f = new THREE.Quaternion,
			m = new THREE.Vector3;
		this.render = function(r, E) {
			if(0 !== t.length) {
				void 0 === s && i(), u.useProgram(s), p.initAttributes(), p.enableAttribute(l.position), p.enableAttribute(l.uv), p.disableUnusedAttributes(), p.disable(u.CULL_FACE), p.enable(u.BLEND), u.bindBuffer(u.ARRAY_BUFFER, a), u.vertexAttribPointer(l.position, 2, u.FLOAT, !1, 16, 0), u.vertexAttribPointer(l.uv, 2, u.FLOAT, !1, 16, 8), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, o), u.uniformMatrix4fv(h.projectionMatrix, !1, E.projectionMatrix.elements), p.activeTexture(u.TEXTURE0), u.uniform1i(h.map, 0);
				var g = 0,
					v = 0,
					T = r.fog;
				T ? (u.uniform3f(h.fogColor, T.color.r, T.color.g, T.color.b), T instanceof THREE.Fog ? (u.uniform1f(h.fogNear, T.near), u.uniform1f(h.fogFar, T.far), u.uniform1i(h.fogType, 1), g = 1, v = 1) : T instanceof THREE.FogExp2 && (u.uniform1f(h.fogDensity, T.density), u.uniform1i(h.fogType, 2), g = 2, v = 2)) : (u.uniform1i(h.fogType, 0), g = 0, v = 0);
				for(var y = 0, _ = t.length; _ > y; y++) {
					var R = t[y];
					R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, R.matrixWorld), R.z = -R.modelViewMatrix.elements[14]
				}
				t.sort(n);
				for(var x = [], y = 0, _ = t.length; _ > y; y++) {
					var R = t[y],
						b = R.material;
					if(b.visible !== !1) {
						u.uniform1f(h.alphaTest, b.alphaTest), u.uniformMatrix4fv(h.modelViewMatrix, !1, R.modelViewMatrix.elements), R.matrixWorld.decompose(d, f, m), x[0] = m.x, x[1] = m.y;
						var w = 0;
						r.fog && b.fog && (w = v), g !== w && (u.uniform1i(h.fogType, w), g = w), null !== b.map ? (u.uniform2f(h.uvOffset, b.map.offset.x, b.map.offset.y), u.uniform2f(h.uvScale, b.map.repeat.x, b.map.repeat.y)) : (u.uniform2f(h.uvOffset, 0, 0), u.uniform2f(h.uvScale, 1, 1)), u.uniform1f(h.opacity, b.opacity), u.uniform3f(h.color, b.color.r, b.color.g, b.color.b), u.uniform1f(h.rotation, b.rotation), u.uniform2fv(h.scale, x), p.setBlending(b.blending, b.blendEquation, b.blendSrc, b.blendDst), p.setDepthTest(b.depthTest), p.setDepthWrite(b.depthWrite), b.map ? e.setTexture2D(b.map, 0) : e.setTexture2D(c, 0), u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0)
					}
				}
				p.enable(u.CULL_FACE), e.resetGLState()
			}
		}
	}, Object.assign(THREE, {
		Face4: function(e, t, i, r, n, a, o) {
			return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new THREE.Face3(e, t, i, n, a, o)
		},
		LineStrip: 0,
		LinePieces: 1,
		MeshFaceMaterial: THREE.MultiMaterial,
		PointCloud: function(e, t) {
			return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new THREE.Points(e, t)
		},
		Particle: THREE.Sprite,
		ParticleSystem: function(e, t) {
			return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new THREE.Points(e, t)
		},
		PointCloudMaterial: function(e) {
			return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
		},
		ParticleBasicMaterial: function(e) {
			return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
		},
		ParticleSystemMaterial: function(e) {
			return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
		},
		Vertex: function(e, t, i) {
			return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new THREE.Vector3(e, t, i)
		}
	}), Object.assign(THREE.Box2.prototype, {
		empty: function() {
			return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function(e) {
			return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
		}
	}), Object.assign(THREE.Box3.prototype, {
		empty: function() {
			return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function(e) {
			return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
		},
		isIntersectionSphere: function(e) {
			return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
		}
	}), Object.assign(THREE.Matrix3.prototype, {
		multiplyVector3: function(e) {
			return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
		},
		multiplyVector3Array: function(e) {
			return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
		}
	}), Object.assign(THREE.Matrix4.prototype, {
		extractPosition: function(e) {
			return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
		},
		setRotationFromQuaternion: function(e) {
			return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
		},
		multiplyVector3: function(e) {
			return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
		},
		multiplyVector4: function(e) {
			return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
		},
		multiplyVector3Array: function(e) {
			return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
		},
		rotateAxis: function(e) {
			console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
		},
		crossVector: function(e) {
			return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
		},
		translate: function() {
			console.error("THREE.Matrix4: .translate() has been removed.")
		},
		rotateX: function() {
			console.error("THREE.Matrix4: .rotateX() has been removed.")
		},
		rotateY: function() {
			console.error("THREE.Matrix4: .rotateY() has been removed.")
		},
		rotateZ: function() {
			console.error("THREE.Matrix4: .rotateZ() has been removed.")
		},
		rotateByAxis: function() {
			console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
		}
	}), Object.assign(THREE.Plane.prototype, {
		isIntersectionLine: function(e) {
			return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
		}
	}), Object.assign(THREE.Quaternion.prototype, {
		multiplyVector3: function(e) {
			return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
		}
	}), Object.assign(THREE.Ray.prototype, {
		isIntersectionBox: function(e) {
			return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
		},
		isIntersectionPlane: function(e) {
			return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
		},
		isIntersectionSphere: function(e) {
			return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
		}
	}), Object.assign(THREE.Vector3.prototype, {
		setEulerFromRotationMatrix: function() {
			console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
		},
		setEulerFromQuaternion: function() {
			console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
		},
		getPositionFromMatrix: function(e) {
			return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
		},
		getScaleFromMatrix: function(e) {
			return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
		},
		getColumnFromMatrix: function(e, t) {
			return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
		}
	}), Object.assign(THREE.Object3D.prototype, {
		getChildByName: function(e) {
			return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
		},
		renderDepth: function() {
			console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
		},
		translate: function(e, t) {
			return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
		}
	}), Object.defineProperties(THREE.Object3D.prototype, {
		eulerOrder: {
			get: function() {
				return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
			},
			set: function(e) {
				console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
			}
		},
		useQuaternion: {
			get: function() {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			},
			set: function() {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			}
		}
	}), Object.defineProperties(THREE.LOD.prototype, {
		objects: {
			get: function() {
				return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
			}
		}
	}), THREE.PerspectiveCamera.prototype.setLens = function(e, t) {
		console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
	}, Object.defineProperties(THREE.Light.prototype, {
		onlyShadow: {
			set: function() {
				console.warn("THREE.Light: .onlyShadow has been removed.")
			}
		},
		shadowCameraFov: {
			set: function(e) {
				console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
			}
		},
		shadowCameraLeft: {
			set: function(e) {
				console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
			}
		},
		shadowCameraRight: {
			set: function(e) {
				console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
			}
		},
		shadowCameraTop: {
			set: function(e) {
				console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
			}
		},
		shadowCameraBottom: {
			set: function(e) {
				console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
			}
		},
		shadowCameraNear: {
			set: function(e) {
				console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
			}
		},
		shadowCameraFar: {
			set: function(e) {
				console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
			}
		},
		shadowCameraVisible: {
			set: function() {
				console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
			}
		},
		shadowBias: {
			set: function(e) {
				console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
			}
		},
		shadowDarkness: {
			set: function() {
				console.warn("THREE.Light: .shadowDarkness has been removed.")
			}
		},
		shadowMapWidth: {
			set: function(e) {
				console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
			}
		},
		shadowMapHeight: {
			set: function(e) {
				console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
			}
		}
	}), Object.defineProperties(THREE.BufferAttribute.prototype, {
		length: {
			get: function() {
				return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
			}
		}
	}), Object.assign(THREE.BufferGeometry.prototype, {
		addIndex: function(e) {
			console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
		},
		addDrawCall: function(e, t, i) {
			void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
		},
		clearDrawCalls: function() {
			console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
		},
		computeTangents: function() {
			console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
		},
		computeOffsets: function() {
			console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
		}
	}), Object.defineProperties(THREE.BufferGeometry.prototype, {
		drawcalls: {
			get: function() {
				return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
			}
		},
		offsets: {
			get: function() {
				return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
			}
		}
	}), Object.defineProperties(THREE.Material.prototype, {
		wrapAround: {
			get: function() {
				console.warn("THREE." + this.type + ": .wrapAround has been removed.")
			},
			set: function() {
				console.warn("THREE." + this.type + ": .wrapAround has been removed.")
			}
		},
		wrapRGB: {
			get: function() {
				return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new THREE.Color
			}
		}
	}), Object.defineProperties(THREE.MeshPhongMaterial.prototype, {
		metal: {
			get: function() {
				return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
			},
			set: function() {
				console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
			}
		}
	}), Object.defineProperties(THREE.ShaderMaterial.prototype, {
		derivatives: {
			get: function() {
				return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
			},
			set: function(e) {
				console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
			}
		}
	}), THREE.EventDispatcher.prototype = Object.assign(Object.create({
		constructor: THREE.EventDispatcher,
		apply: function(e) {
			console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."), Object.assign(e, this)
		}
	}), THREE.EventDispatcher.prototype), Object.assign(THREE.WebGLRenderer.prototype, {
		supportsFloatTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
		},
		supportsHalfFloatTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
		},
		supportsStandardDerivatives: function() {
			return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
		},
		supportsCompressedTextureS3TC: function() {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
		},
		supportsCompressedTexturePVRTC: function() {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
		},
		supportsBlendMinMax: function() {
			return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
		},
		supportsVertexTextures: function() {
			return this.capabilities.vertexTextures
		},
		supportsInstancedArrays: function() {
			return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
		},
		enableScissorTest: function(e) {
			console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
		},
		initMaterial: function() {
			console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
		},
		addPrePlugin: function() {
			console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
		},
		addPostPlugin: function() {
			console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
		},
		updateShadowMap: function() {
			console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
		}
	}), Object.defineProperties(THREE.WebGLRenderer.prototype, {
		shadowMapEnabled: {
			get: function() {
				return this.shadowMap.enabled
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
			}
		},
		shadowMapType: {
			get: function() {
				return this.shadowMap.type
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
			}
		},
		shadowMapCullFace: {
			get: function() {
				return this.shadowMap.cullFace
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = e
			}
		}
	}), Object.defineProperties(THREE.WebGLShadowMap.prototype, {
		cullFace: {
			get: function() {
				return this.renderReverseSided ? THREE.CullFaceFront : THREE.CullFaceBack
			},
			set: function(e) {
				var t = e !== THREE.CullFaceBack;
				console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + t + "."), this.renderReverseSided = t
			}
		}
	}), Object.defineProperties(THREE.WebGLRenderTarget.prototype, {
		wrapS: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
			}
		},
		wrapT: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
			}
		},
		magFilter: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
			}
		},
		minFilter: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
			}
		},
		anisotropy: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
			}
		},
		offset: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
			}
		},
		repeat: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
			}
		},
		format: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
			}
		},
		type: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
			}
		},
		generateMipmaps: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
			},
			set: function(e) {
				console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
			}
		}
	}), Object.assign(THREE.Audio.prototype, {
		load: function(e) {
			console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
			var t = this,
				i = new THREE.AudioLoader;
			return i.load(e, function(e) {
				t.setBuffer(e)
			}), this
		}
	}), Object.assign(THREE.AudioAnalyser.prototype, {
		getData: function() {
			return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
		}
	}), THREE.GeometryUtils = {
		merge: function(e, t, i) {
			console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
			var r;
			t instanceof THREE.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), r = t.matrix, t = t.geometry), e.merge(t, r, i)
		},
		center: function(e) {
			return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
		}
	}, THREE.ImageUtils = {
		crossOrigin: void 0,
		loadTexture: function(e, t, i, r) {
			console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
			var n = new THREE.TextureLoader;
			n.setCrossOrigin(this.crossOrigin);
			var a = n.load(e, i, void 0, r);
			return t && (a.mapping = t), a
		},
		loadTextureCube: function(e, t, i, r) {
			console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
			var n = new THREE.CubeTextureLoader;
			n.setCrossOrigin(this.crossOrigin);
			var a = n.load(e, i, void 0, r);
			return t && (a.mapping = t), a
		},
		loadCompressedTexture: function() {
			console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
		},
		loadCompressedTextureCube: function() {
			console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
		}
	}, THREE.Projector = function() {
		console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(e, t) {
			console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
		}, this.unprojectVector = function(e, t) {
			console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
		}, this.pickingRay = function() {
			console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
		}
	}, THREE.CanvasRenderer = function() {
		console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
	}, THREE.CurveUtils = {
		tangentQuadraticBezier: function(e, t, i, r) {
			return 2 * (1 - e) * (i - t) + 2 * e * (r - i)
		},
		tangentCubicBezier: function(e, t, i, r, n) {
			return -3 * t * (1 - e) * (1 - e) + 3 * i * (1 - e) * (1 - e) - 6 * e * i * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r + 3 * e * e * n
		},
		tangentSpline: function(e) {
			var t = 6 * e * e - 6 * e,
				i = 3 * e * e - 4 * e + 1,
				r = -6 * e * e + 6 * e,
				n = 3 * e * e - 2 * e;
			return t + i + r + n
		},
		interpolate: function(e, t, i, r, n) {
			var a = .5 * (i - e),
				o = .5 * (r - t),
				s = n * n,
				l = n * s;
			return(2 * t - 2 * i + a + o) * l + (-3 * t + 3 * i - 2 * a - o) * s + a * n + t
		}
	}, THREE.SceneUtils = {
		createMultiMaterialObject: function(e, t) {
			for(var i = new THREE.Group, r = 0, n = t.length; n > r; r++) i.add(new THREE.Mesh(e, t[r]));
			return i
		},
		detach: function(e, t, i) {
			e.applyMatrix(t.matrixWorld), t.remove(e), i.add(e)
		},
		attach: function(e, t, i) {
			var r = new THREE.Matrix4;
			r.getInverse(i.matrixWorld), e.applyMatrix(r), t.remove(e), i.add(e)
		}
	}, THREE.ShapeUtils = {
		area: function(e) {
			for(var t = e.length, i = 0, r = t - 1, n = 0; t > n; r = n++) i += e[r].x * e[n].y - e[n].x * e[r].y;
			return .5 * i
		},
		triangulate: function() {
			function e(e, t, i, r, n, a) {
				var o, s, l, h, c, u, p, d, f;
				if(s = e[a[t]].x, l = e[a[t]].y, h = e[a[i]].x, c = e[a[i]].y, u = e[a[r]].x, p = e[a[r]].y, Number.EPSILON > (h - s) * (p - l) - (c - l) * (u - s)) return !1;
				var m, E, g, v, T, y, _, R, x, b, w, H, M, S, A;
				for(m = u - h, E = p - c, g = s - u, v = l - p, T = h - s, y = c - l, o = 0; n > o; o++)
					if(d = e[a[o]].x, f = e[a[o]].y, !(d === s && f === l || d === h && f === c || d === u && f === p) && (_ = d - s, R = f - l, x = d - h, b = f - c, w = d - u, H = f - p, A = m * b - E * x, M = T * R - y * _, S = g * H - v * w, A >= -Number.EPSILON && S >= -Number.EPSILON && M >= -Number.EPSILON)) return !1;
				return !0
			}
			return function(t, i) {
				var r = t.length;
				if(3 > r) return null;
				var n, a, o, s = [],
					l = [],
					h = [];
				if(THREE.ShapeUtils.area(t) > 0)
					for(a = 0; r > a; a++) l[a] = a;
				else
					for(a = 0; r > a; a++) l[a] = r - 1 - a;
				var c = r,
					u = 2 * c;
				for(a = c - 1; c > 2;) {
					if(u-- <= 0) return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"), i ? h : s;
					if(n = a, n >= c && (n = 0), a = n + 1, a >= c && (a = 0), o = a + 1, o >= c && (o = 0), e(t, n, a, o, c, l)) {
						var p, d, f, m, E;
						for(p = l[n], d = l[a], f = l[o], s.push([t[p], t[d], t[f]]), h.push([l[n], l[a], l[o]]), m = a, E = a + 1; c > E; m++, E++) l[m] = l[E];
						c--, u = 2 * c
					}
				}
				return i ? h : s
			}
		}(),
		triangulateShape: function(e, t) {
			function i(e) {
				var t = e.length;
				t > 2 && e[t - 1].equals(e[0]) && e.pop()
			}

			function r(e, t, i) {
				return e.x !== t.x ? e.x < t.x ? e.x <= i.x && i.x <= t.x : t.x <= i.x && i.x <= e.x : e.y < t.y ? e.y <= i.y && i.y <= t.y : t.y <= i.y && i.y <= e.y
			}

			function n(e, t, i, n, a) {
				var o = t.x - e.x,
					s = t.y - e.y,
					l = n.x - i.x,
					h = n.y - i.y,
					c = e.x - i.x,
					u = e.y - i.y,
					p = s * l - o * h,
					d = s * c - o * u;
				if(Math.abs(p) > Number.EPSILON) {
					var f;
					if(p > 0) {
						if(0 > d || d > p) return [];
						if(f = h * c - l * u, 0 > f || f > p) return []
					} else {
						if(d > 0 || p > d) return [];
						if(f = h * c - l * u, f > 0 || p > f) return []
					}
					if(0 === f) return !a || 0 !== d && d !== p ? [e] : [];
					if(f === p) return !a || 0 !== d && d !== p ? [t] : [];
					if(0 === d) return [i];
					if(d === p) return [n];
					var m = f / p;
					return [{
						x: e.x + m * o,
						y: e.y + m * s
					}]
				}
				if(0 !== d || h * c !== l * u) return [];
				var E = 0 === o && 0 === s,
					g = 0 === l && 0 === h;
				if(E && g) return e.x !== i.x || e.y !== i.y ? [] : [e];
				if(E) return r(i, n, e) ? [e] : [];
				if(g) return r(e, t, i) ? [i] : [];
				var v, T, y, _, R, x, b, w;
				return 0 !== o ? (e.x < t.x ? (v = e, y = e.x, T = t, _ = t.x) : (v = t, y = t.x, T = e, _ = e.x), i.x < n.x ? (R = i, b = i.x, x = n, w = n.x) : (R = n, b = n.x, x = i, w = i.x)) : (e.y < t.y ? (v = e, y = e.y, T = t, _ = t.y) : (v = t, y = t.y, T = e, _ = e.y), i.y < n.y ? (R = i, b = i.y, x = n, w = n.y) : (R = n, b = n.y, x = i, w = i.y)), b >= y ? b > _ ? [] : _ === b ? a ? [] : [R] : w >= _ ? [R, T] : [R, x] : y > w ? [] : y === w ? a ? [] : [v] : w >= _ ? [v, T] : [v, x]
			}

			function a(e, t, i, r) {
				var n = t.x - e.x,
					a = t.y - e.y,
					o = i.x - e.x,
					s = i.y - e.y,
					l = r.x - e.x,
					h = r.y - e.y,
					c = n * s - a * o,
					u = n * h - a * l;
				if(Math.abs(c) > Number.EPSILON) {
					var p = l * s - h * o;
					return c > 0 ? u >= 0 && p >= 0 : u >= 0 || p >= 0
				}
				return u > 0
			}

			function o(e, t) {
				function i(e, t) {
					var i = v.length - 1,
						r = e - 1;
					0 > r && (r = i);
					var n = e + 1;
					n > i && (n = 0);
					var o = a(v[e], v[r], v[n], s[t]);
					if(!o) return !1;
					var l = s.length - 1,
						h = t - 1;
					0 > h && (h = l);
					var c = t + 1;
					return c > l && (c = 0), o = a(s[t], s[h], s[c], v[e]), o ? !0 : !1
				}

				function r(e, t) {
					var i, r, a;
					for(i = 0; i < v.length; i++)
						if(r = i + 1, r %= v.length, a = n(e, t, v[i], v[r], !0), a.length > 0) return !0;
					return !1
				}

				function o(e, i) {
					var r, a, o, s, l;
					for(r = 0; r < T.length; r++)
						for(a = t[T[r]], o = 0; o < a.length; o++)
							if(s = o + 1, s %= a.length, l = n(e, i, a[o], a[s], !0), l.length > 0) return !0;
					return !1
				}
				for(var s, l, h, c, u, p, d, f, m, E, g, v = e.concat(), T = [], y = [], _ = 0, R = t.length; R > _; _++) T.push(_);
				for(var x = 0, b = 2 * T.length; T.length > 0;) {
					if(b--, 0 > b) {
						console.log("Infinite Loop! Holes left:" + T.length + ", Probably Hole outside Shape!");
						break
					}
					for(h = x; h < v.length; h++) {
						c = v[h], l = -1;
						for(var _ = 0; _ < T.length; _++)
							if(p = T[_], d = c.x + ":" + c.y + ":" + p, void 0 === y[d]) {
								s = t[p];
								for(var w = 0; w < s.length; w++)
									if(u = s[w], i(h, w) && !r(c, u) && !o(c, u)) {
										l = w, T.splice(_, 1), f = v.slice(0, h + 1), m = v.slice(h), E = s.slice(l), g = s.slice(0, l + 1), v = f.concat(E).concat(g).concat(m), x = h;
										break
									}
								if(l >= 0) break;
								y[d] = !0
							}
						if(l >= 0) break
					}
				}
				return v
			}
			i(e), t.forEach(i);
			for(var s, l, h, c, u, p, d = {}, f = e.concat(), m = 0, E = t.length; E > m; m++) Array.prototype.push.apply(f, t[m]);
			for(s = 0, l = f.length; l > s; s++) u = f[s].x + ":" + f[s].y, void 0 !== d[u] && console.warn("THREE.ShapeUtils: Duplicate point", u, s), d[u] = s;
			var g = o(e, t),
				v = THREE.ShapeUtils.triangulate(g, !1);
			for(s = 0, l = v.length; l > s; s++)
				for(c = v[s], h = 0; 3 > h; h++) u = c[h].x + ":" + c[h].y, p = d[u], void 0 !== p && (c[h] = p);
			return v.concat()
		},
		isClockWise: function(e) {
			return THREE.ShapeUtils.area(e) < 0
		},
		b2: function() {
			function e(e, t) {
				var i = 1 - e;
				return i * i * t
			}

			function t(e, t) {
				return 2 * (1 - e) * e * t
			}

			function i(e, t) {
				return e * e * t
			}
			return function(r, n, a, o) {
				return e(r, n) + t(r, a) + i(r, o)
			}
		}(),
		b3: function() {
			function e(e, t) {
				var i = 1 - e;
				return i * i * i * t
			}

			function t(e, t) {
				var i = 1 - e;
				return 3 * i * i * e * t
			}

			function i(e, t) {
				var i = 1 - e;
				return 3 * i * e * e * t
			}

			function r(e, t) {
				return e * e * e * t
			}
			return function(n, a, o, s, l) {
				return e(n, a) + t(n, o) + i(n, s) + r(n, l)
			}
		}()
	}, THREE.Curve = function() {}, THREE.Curve.prototype = {
		constructor: THREE.Curve,
		getPoint: function() {
			return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
		},
		getPointAt: function(e) {
			var t = this.getUtoTmapping(e);
			return this.getPoint(t)
		},
		getPoints: function(e) {
			e || (e = 5);
			for(var t = [], i = 0; e >= i; i++) t.push(this.getPoint(i / e));
			return t
		},
		getSpacedPoints: function(e) {
			e || (e = 5);
			for(var t = [], i = 0; e >= i; i++) t.push(this.getPointAt(i / e));
			return t
		},
		getLength: function() {
			var e = this.getLengths();
			return e[e.length - 1]
		},
		getLengths: function(e) {
			if(e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
			this.needsUpdate = !1;
			var t, i, r = [],
				n = this.getPoint(0),
				a = 0;
			for(r.push(0), i = 1; e >= i; i++) t = this.getPoint(i / e), a += t.distanceTo(n), r.push(a), n = t;
			return this.cacheArcLengths = r, r
		},
		updateArcLengths: function() {
			this.needsUpdate = !0, this.getLengths()
		},
		getUtoTmapping: function(e, t) {
			var i, r = this.getLengths(),
				n = 0,
				a = r.length;
			i = t ? t : e * r[a - 1];
			for(var o, s = 0, l = a - 1; l >= s;)
				if(n = Math.floor(s + (l - s) / 2), o = r[n] - i, 0 > o) s = n + 1;
				else {
					if(!(o > 0)) {
						l = n;
						break
					}
					l = n - 1
				}
			if(n = l, r[n] === i) {
				var h = n / (a - 1);
				return h
			}
			var c = r[n],
				u = r[n + 1],
				p = u - c,
				d = (i - c) / p,
				h = (n + d) / (a - 1);
			return h
		},
		getTangent: function(e) {
			var t = 1e-4,
				i = e - t,
				r = e + t;
			0 > i && (i = 0), r > 1 && (r = 1);
			var n = this.getPoint(i),
				a = this.getPoint(r),
				o = a.clone().sub(n);
			return o.normalize()
		},
		getTangentAt: function(e) {
			var t = this.getUtoTmapping(e);
			return this.getTangent(t)
		}
	}, THREE.Curve.create = function(e, t) {
		return e.prototype = Object.create(THREE.Curve.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
	}, THREE.CurvePath = function() {
		this.curves = [], this.autoClose = !1
	}, THREE.CurvePath.prototype = Object.assign(Object.create(THREE.Curve.prototype), {
		constructor: THREE.CurvePath,
		add: function(e) {
			this.curves.push(e)
		},
		closePath: function() {
			var e = this.curves[0].getPoint(0),
				t = this.curves[this.curves.length - 1].getPoint(1);
			e.equals(t) || this.curves.push(new THREE.LineCurve(t, e))
		},
		getPoint: function(e) {
			for(var t = e * this.getLength(), i = this.getCurveLengths(), r = 0; r < i.length;) {
				if(i[r] >= t) {
					var n = i[r] - t,
						a = this.curves[r],
						o = a.getLength(),
						s = 0 === o ? 0 : 1 - n / o;
					return a.getPointAt(s)
				}
				r++
			}
			return null
		},
		getLength: function() {
			var e = this.getCurveLengths();
			return e[e.length - 1]
		},
		updateArcLengths: function() {
			this.needsUpdate = !0, this.cacheLengths = null, this.getLengths()
		},
		getCurveLengths: function() {
			if(this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
			for(var e = [], t = 0, i = 0, r = this.curves.length; r > i; i++) t += this.curves[i].getLength(), e.push(t);
			return this.cacheLengths = e, e
		},
		getSpacedPoints: function(e) {
			e || (e = 40);
			for(var t = [], i = 0; e >= i; i++) t.push(this.getPoint(i / e));
			return this.autoClose && t.push(t[0]), t
		},
		getPoints: function(e) {
			e = e || 12;
			for(var t, i = [], r = 0, n = this.curves; r < n.length; r++)
				for(var a = n[r], o = a instanceof THREE.EllipseCurve ? 2 * e : a instanceof THREE.LineCurve ? 1 : a instanceof THREE.SplineCurve ? e * a.points.length : e, s = a.getPoints(o), l = 0; l < s.length; l++) {
					var h = s[l];
					t && t.equals(h) || (i.push(h), t = h)
				}
			return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
		},
		createPointsGeometry: function(e) {
			var t = this.getPoints(e);
			return this.createGeometry(t)
		},
		createSpacedPointsGeometry: function(e) {
			var t = this.getSpacedPoints(e);
			return this.createGeometry(t)
		},
		createGeometry: function(e) {
			for(var t = new THREE.Geometry, i = 0, r = e.length; r > i; i++) {
				var n = e[i];
				t.vertices.push(new THREE.Vector3(n.x, n.y, n.z || 0))
			}
			return t
		}
	}), THREE.Font = function(e) {
		this.data = e
	}, Object.assign(THREE.Font.prototype, {
		generateShapes: function(e, t, i) {
			function r(e) {
				for(var i = String(e).split(""), r = t / a.resolution, o = 0, s = [], l = 0; l < i.length; l++) {
					var h = n(i[l], r, o);
					o += h.offset, s.push(h.path)
				}
				return s
			}

			function n(e, t, r) {
				var n = a.glyphs[e] || a.glyphs["?"];
				if(n) {
					var o, s, l, h, c, u, p, d, f, m, E, g = new THREE.ShapePath,
						v = [],
						T = THREE.ShapeUtils.b2,
						y = THREE.ShapeUtils.b3;
					if(n.o)
						for(var _ = n._cachedOutline || (n._cachedOutline = n.o.split(" ")), R = 0, x = _.length; x > R;) {
							var b = _[R++];
							switch(b) {
								case "m":
									o = _[R++] * t + r, s = _[R++] * t, g.moveTo(o, s);
									break;
								case "l":
									o = _[R++] * t + r, s = _[R++] * t, g.lineTo(o, s);
									break;
								case "q":
									if(l = _[R++] * t + r, h = _[R++] * t, p = _[R++] * t + r, d = _[R++] * t, g.quadraticCurveTo(p, d, l, h), E = v[v.length - 1]) {
										c = E.x, u = E.y;
										for(var w = 1; i >= w; w++) {
											var H = w / i;
											T(H, c, p, l), T(H, u, d, h)
										}
									}
									break;
								case "b":
									if(l = _[R++] * t + r, h = _[R++] * t, p = _[R++] * t + r, d = _[R++] * t, f = _[R++] * t + r, m = _[R++] * t, g.bezierCurveTo(p, d, f, m, l, h), E = v[v.length - 1]) {
										c = E.x, u = E.y;
										for(var w = 1; i >= w; w++) {
											var H = w / i;
											y(H, c, p, f, l), y(H, u, d, m, h)
										}
									}
							}
						}
					return {
						offset: n.ha * t,
						path: g
					}
				}
			}
			void 0 === t && (t = 100), void 0 === i && (i = 4);
			for(var a = this.data, o = r(e), s = [], l = 0, h = o.length; h > l; l++) Array.prototype.push.apply(s, o[l].toShapes());
			return s
		}
	}), THREE.Path = function(e) {
		THREE.CurvePath.call(this), this.currentPoint = new THREE.Vector2, e && this.fromPoints(e)
	}, THREE.Path.prototype = Object.assign(Object.create(THREE.CurvePath.prototype), {
		constructor: THREE.Path,
		fromPoints: function(e) {
			this.moveTo(e[0].x, e[0].y);
			for(var t = 1, i = e.length; i > t; t++) this.lineTo(e[t].x, e[t].y)
		},
		moveTo: function(e, t) {
			this.currentPoint.set(e, t)
		},
		lineTo: function(e, t) {
			var i = new THREE.LineCurve(this.currentPoint.clone(), new THREE.Vector2(e, t));
			this.curves.push(i), this.currentPoint.set(e, t)
		},
		quadraticCurveTo: function(e, t, i, r) {
			var n = new THREE.QuadraticBezierCurve(this.currentPoint.clone(), new THREE.Vector2(e, t), new THREE.Vector2(i, r));
			this.curves.push(n), this.currentPoint.set(i, r)
		},
		bezierCurveTo: function(e, t, i, r, n, a) {
			var o = new THREE.CubicBezierCurve(this.currentPoint.clone(), new THREE.Vector2(e, t), new THREE.Vector2(i, r), new THREE.Vector2(n, a));
			this.curves.push(o), this.currentPoint.set(n, a)
		},
		splineThru: function(e) {
			var t = [this.currentPoint.clone()].concat(e),
				i = new THREE.SplineCurve(t);
			this.curves.push(i), this.currentPoint.copy(e[e.length - 1])
		},
		arc: function(e, t, i, r, n, a) {
			var o = this.currentPoint.x,
				s = this.currentPoint.y;
			this.absarc(e + o, t + s, i, r, n, a)
		},
		absarc: function(e, t, i, r, n, a) {
			this.absellipse(e, t, i, i, r, n, a)
		},
		ellipse: function(e, t, i, r, n, a, o, s) {
			var l = this.currentPoint.x,
				h = this.currentPoint.y;
			this.absellipse(e + l, t + h, i, r, n, a, o, s)
		},
		absellipse: function(e, t, i, r, n, a, o, s) {
			var l = new THREE.EllipseCurve(e, t, i, r, n, a, o, s);
			if(this.curves.length > 0) {
				var h = l.getPoint(0);
				h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
			}
			this.curves.push(l);
			var c = l.getPoint(1);
			this.currentPoint.copy(c)
		}
	}), THREE.ShapePath = function() {
		this.subPaths = [], this.currentPath = null
	}, THREE.ShapePath.prototype = {
		moveTo: function(e, t) {
			this.currentPath = new THREE.Path, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t)
		},
		lineTo: function(e, t) {
			this.currentPath.lineTo(e, t)
		},
		quadraticCurveTo: function(e, t, i, r) {
			this.currentPath.quadraticCurveTo(e, t, i, r)
		},
		bezierCurveTo: function(e, t, i, r, n, a) {
			this.currentPath.bezierCurveTo(e, t, i, r, n, a)
		},
		splineThru: function(e) {
			this.currentPath.splineThru(e)
		},
		toShapes: function(e, t) {
			function i(e) {
				for(var t = [], i = 0, r = e.length; r > i; i++) {
					var n = e[i],
						a = new THREE.Shape;
					a.curves = n.curves, t.push(a)
				}
				return t
			}

			function r(e, t) {
				for(var i = t.length, r = !1, n = i - 1, a = 0; i > a; n = a++) {
					var o = t[n],
						s = t[a],
						l = s.x - o.x,
						h = s.y - o.y;
					if(Math.abs(h) > Number.EPSILON) {
						if(0 > h && (o = t[a], l = -l, s = t[n], h = -h), e.y < o.y || e.y > s.y) continue;
						if(e.y === o.y) {
							if(e.x === o.x) return !0
						} else {
							var c = h * (e.x - o.x) - l * (e.y - o.y);
							if(0 === c) return !0;
							if(0 > c) continue;
							r = !r
						}
					} else {
						if(e.y !== o.y) continue;
						if(s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x) return !0
					}
				}
				return r
			}
			var n = THREE.ShapeUtils.isClockWise,
				a = this.subPaths;
			if(0 === a.length) return [];
			if(t === !0) return i(a);
			var o, s, l, h = [];
			if(1 === a.length) return s = a[0], l = new THREE.Shape, l.curves = s.curves, h.push(l), h;
			var c = !n(a[0].getPoints());
			c = e ? !c : c;
			var u, p = [],
				d = [],
				f = [],
				m = 0;
			d[m] = void 0, f[m] = [];
			for(var E = 0, g = a.length; g > E; E++) s = a[E], u = s.getPoints(), o = n(u), o = e ? !o : o, o ? (!c && d[m] && m++, d[m] = {
				s: new THREE.Shape,
				p: u
			}, d[m].s.curves = s.curves, c && m++, f[m] = []) : f[m].push({
				h: s,
				p: u[0]
			});
			if(!d[0]) return i(a);
			if(d.length > 1) {
				for(var v = !1, T = [], y = 0, _ = d.length; _ > y; y++) p[y] = [];
				for(var y = 0, _ = d.length; _ > y; y++)
					for(var R = f[y], x = 0; x < R.length; x++) {
						for(var b = R[x], w = !0, H = 0; H < d.length; H++) r(b.p, d[H].p) && (y !== H && T.push({
							froms: y,
							tos: H,
							hole: x
						}), w ? (w = !1, p[H].push(b)) : v = !0);
						w && p[y].push(b)
					}
				T.length > 0 && (v || (f = p))
			}
			for(var M, E = 0, S = d.length; S > E; E++) {
				l = d[E].s, h.push(l), M = f[E];
				for(var A = 0, C = M.length; C > A; A++) l.holes.push(M[A].h)
			}
			return h
		}
	}, THREE.Shape = function() {
		THREE.Path.apply(this, arguments), this.holes = []
	}, THREE.Shape.prototype = Object.assign(Object.create(THREE.Path.prototype), {
		constructor: THREE.Shape,
		extrude: function(e) {
			return new THREE.ExtrudeGeometry(this, e)
		},
		makeGeometry: function(e) {
			return new THREE.ShapeGeometry(this, e)
		},
		getPointsHoles: function(e) {
			for(var t = [], i = 0, r = this.holes.length; r > i; i++) t[i] = this.holes[i].getPoints(e);
			return t
		},
		extractAllPoints: function(e) {
			return {
				shape: this.getPoints(e),
				holes: this.getPointsHoles(e)
			}
		},
		extractPoints: function(e) {
			return this.extractAllPoints(e)
		}
	}), THREE.LineCurve = function(e, t) {
		this.v1 = e, this.v2 = t
	}, THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.LineCurve.prototype.constructor = THREE.LineCurve, THREE.LineCurve.prototype.getPoint = function(e) {
		if(1 === e) return this.v2.clone();
		var t = this.v2.clone().sub(this.v1);
		return t.multiplyScalar(e).add(this.v1), t
	}, THREE.LineCurve.prototype.getPointAt = function(e) {
		return this.getPoint(e)
	}, THREE.LineCurve.prototype.getTangent = function() {
		var e = this.v2.clone().sub(this.v1);
		return e.normalize()
	}, THREE.QuadraticBezierCurve = function(e, t, i) {
		this.v0 = e, this.v1 = t, this.v2 = i
	}, THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve, THREE.QuadraticBezierCurve.prototype.getPoint = function(e) {
		var t = THREE.ShapeUtils.b2;
		return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y))
	}, THREE.QuadraticBezierCurve.prototype.getTangent = function(e) {
		var t = THREE.CurveUtils.tangentQuadraticBezier;
		return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
	}, THREE.CubicBezierCurve = function(e, t, i, r) {
		this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
	}, THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve, THREE.CubicBezierCurve.prototype.getPoint = function(e) {
		var t = THREE.ShapeUtils.b3;
		return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
	}, THREE.CubicBezierCurve.prototype.getTangent = function(e) {
		var t = THREE.CurveUtils.tangentCubicBezier;
		return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
	}, THREE.SplineCurve = function(e) {
		this.points = void 0 == e ? [] : e
	}, THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.SplineCurve.prototype.constructor = THREE.SplineCurve, THREE.SplineCurve.prototype.getPoint = function(e) {
		var t = this.points,
			i = (t.length - 1) * e,
			r = Math.floor(i),
			n = i - r,
			a = t[0 === r ? r : r - 1],
			o = t[r],
			s = t[r > t.length - 2 ? t.length - 1 : r + 1],
			l = t[r > t.length - 3 ? t.length - 1 : r + 2],
			h = THREE.CurveUtils.interpolate;
		return new THREE.Vector2(h(a.x, o.x, s.x, l.x, n), h(a.y, o.y, s.y, l.y, n))
	}, THREE.EllipseCurve = function(e, t, i, r, n, a, o, s) {
		this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = r, this.aStartAngle = n, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s || 0
	}, THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype), THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve, THREE.EllipseCurve.prototype.getPoint = function(e) {
		for(var t = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, r = Math.abs(i) < Number.EPSILON; 0 > i;) i += t;
		for(; i > t;) i -= t;
		i < Number.EPSILON && (i = r ? 0 : t), this.aClockwise !== !0 || r || (i === t ? i = -t : i -= t);
		var n = this.aStartAngle + e * i,
			a = this.aX + this.xRadius * Math.cos(n),
			o = this.aY + this.yRadius * Math.sin(n);
		if(0 !== this.aRotation) {
			var s = Math.cos(this.aRotation),
				l = Math.sin(this.aRotation),
				h = a - this.aX,
				c = o - this.aY;
			a = h * s - c * l + this.aX, o = h * l + c * s + this.aY
		}
		return new THREE.Vector2(a, o)
	}, THREE.ArcCurve = function(e, t, i, r, n, a) {
		THREE.EllipseCurve.call(this, e, t, i, i, r, n, a)
	}, THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype), THREE.ArcCurve.prototype.constructor = THREE.ArcCurve, THREE.LineCurve3 = THREE.Curve.create(function(e, t) {
		this.v1 = e, this.v2 = t
	}, function(e) {
		if(1 === e) return this.v2.clone();
		var t = new THREE.Vector3;
		return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
	}), THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(e, t, i) {
		this.v0 = e, this.v1 = t, this.v2 = i
	}, function(e) {
		var t = THREE.ShapeUtils.b2;
		return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y), t(e, this.v0.z, this.v1.z, this.v2.z))
	}), THREE.CubicBezierCurve3 = THREE.Curve.create(function(e, t, i, r) {
		this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
	}, function(e) {
		var t = THREE.ShapeUtils.b3;
		return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
	}), THREE.SplineCurve3 = THREE.Curve.create(function(e) {
		console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 == e ? [] : e
	}, function(e) {
		var t = this.points,
			i = (t.length - 1) * e,
			r = Math.floor(i),
			n = i - r,
			a = t[0 == r ? r : r - 1],
			o = t[r],
			s = t[r > t.length - 2 ? t.length - 1 : r + 1],
			l = t[r > t.length - 3 ? t.length - 1 : r + 2],
			h = THREE.CurveUtils.interpolate;
		return new THREE.Vector3(h(a.x, o.x, s.x, l.x, n), h(a.y, o.y, s.y, l.y, n), h(a.z, o.z, s.z, l.z, n))
	}), THREE.CatmullRomCurve3 = function() {
		function e() {}
		var t = new THREE.Vector3,
			i = new e,
			r = new e,
			n = new e;
		return e.prototype.init = function(e, t, i, r) {
			this.c0 = e, this.c1 = i, this.c2 = -3 * e + 3 * t - 2 * i - r, this.c3 = 2 * e - 2 * t + i + r
		}, e.prototype.initNonuniformCatmullRom = function(e, t, i, r, n, a, o) {
			var s = (t - e) / n - (i - e) / (n + a) + (i - t) / a,
				l = (i - t) / a - (r - t) / (a + o) + (r - i) / o;
			s *= a, l *= a, this.init(t, i, s, l)
		}, e.prototype.initCatmullRom = function(e, t, i, r, n) {
			this.init(t, i, n * (i - e), n * (r - t))
		}, e.prototype.calc = function(e) {
			var t = e * e,
				i = t * e;
			return this.c0 + this.c1 * e + this.c2 * t + this.c3 * i
		}, THREE.Curve.create(function(e) {
			this.points = e || [], this.closed = !1
		}, function(e) {
			var a, o, s, l, h = this.points;
			l = h.length, 2 > l && console.log("duh, you need at least 2 points"), a = (l - (this.closed ? 0 : 1)) * e, o = Math.floor(a), s = a - o, this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / h.length) + 1) * h.length : 0 === s && o === l - 1 && (o = l - 2, s = 1);
			var c, u, p, d;
			if(this.closed || o > 0 ? c = h[(o - 1) % l] : (t.subVectors(h[0], h[1]).add(h[0]), c = t), u = h[o % l], p = h[(o + 1) % l], this.closed || l > o + 2 ? d = h[(o + 2) % l] : (t.subVectors(h[l - 1], h[l - 2]).add(h[l - 1]), d = t), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
				var f = "chordal" === this.type ? .5 : .25,
					m = Math.pow(c.distanceToSquared(u), f),
					E = Math.pow(u.distanceToSquared(p), f),
					g = Math.pow(p.distanceToSquared(d), f);
				1e-4 > E && (E = 1), 1e-4 > m && (m = E), 1e-4 > g && (g = E), i.initNonuniformCatmullRom(c.x, u.x, p.x, d.x, m, E, g), r.initNonuniformCatmullRom(c.y, u.y, p.y, d.y, m, E, g), n.initNonuniformCatmullRom(c.z, u.z, p.z, d.z, m, E, g)
			} else if("catmullrom" === this.type) {
				var v = void 0 !== this.tension ? this.tension : .5;
				i.initCatmullRom(c.x, u.x, p.x, d.x, v), r.initCatmullRom(c.y, u.y, p.y, d.y, v), n.initCatmullRom(c.z, u.z, p.z, d.z, v)
			}
			var T = new THREE.Vector3(i.calc(s), r.calc(s), n.calc(s));
			return T
		})
	}(), THREE.ClosedSplineCurve3 = function(e) {
		console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."), THREE.CatmullRomCurve3.call(this, e), this.type = "catmullrom", this.closed = !0
	}, THREE.ClosedSplineCurve3.prototype = Object.create(THREE.CatmullRomCurve3.prototype), THREE.BoxGeometry = function(e, t, i, r, n, a) {
		THREE.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: i,
			widthSegments: r,
			heightSegments: n,
			depthSegments: a
		}, this.fromBufferGeometry(new THREE.BoxBufferGeometry(e, t, i, r, n, a)), this.mergeVertices()
	}, THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry, THREE.CubeGeometry = THREE.BoxGeometry, THREE.BoxBufferGeometry = function(e, t, i, r, n, a) {
		function o(e, t, i) {
			var r = 0;
			return r += (e + 1) * (t + 1) * 2, r += (e + 1) * (i + 1) * 2, r += (i + 1) * (t + 1) * 2
		}

		function s(e, t, i) {
			var r = 0;
			return r += e * t * 2, r += e * i * 2, r += i * t * 2, 6 * r
		}

		function l(e, t, i, r, n, a, o, s, l, c, u) {
			for(var _ = a / l, R = o / c, x = a / 2, b = o / 2, w = s / 2, H = l + 1, M = c + 1, S = 0, A = 0, C = new THREE.Vector3, L = 0; M > L; L++)
				for(var P = L * R - b, D = 0; H > D; D++) {
					var O = D * _ - x;
					C[e] = O * r, C[t] = P * n, C[i] = w, d[E] = C.x, d[E + 1] = C.y, d[E + 2] = C.z, C[e] = 0, C[t] = 0, C[i] = s > 0 ? 1 : -1, f[E] = C.x, f[E + 1] = C.y, f[E + 2] = C.z, m[g] = D / l, m[g + 1] = 1 - L / c, E += 3, g += 2, S += 1
				}
			for(L = 0; c > L; L++)
				for(D = 0; l > D; D++) {
					var I = T + D + H * L,
						B = T + D + H * (L + 1),
						U = T + (D + 1) + H * (L + 1),
						F = T + (D + 1) + H * L;
					p[v] = I, p[v + 1] = B, p[v + 2] = F, p[v + 3] = B, p[v + 4] = U, p[v + 5] = F, v += 6, A += 6
				}
			h.addGroup(y, A, u), y += A, T += S
		}
		THREE.BufferGeometry.call(this), this.type = "BoxBufferGeometry", this.parameters = {
			width: e,
			height: t,
			depth: i,
			widthSegments: r,
			heightSegments: n,
			depthSegments: a
		};
		var h = this;
		r = Math.floor(r) || 1, n = Math.floor(n) || 1, a = Math.floor(a) || 1;
		var c = o(r, n, a),
			u = s(r, n, a),
			p = new(u > 65535 ? Uint32Array : Uint16Array)(u),
			d = new Float32Array(3 * c),
			f = new Float32Array(3 * c),
			m = new Float32Array(2 * c),
			E = 0,
			g = 0,
			v = 0,
			T = 0,
			y = 0;
		l("z", "y", "x", -1, -1, i, t, e, a, n, 0), l("z", "y", "x", 1, -1, i, t, -e, a, n, 1), l("x", "z", "y", 1, 1, e, i, t, r, a, 2), l("x", "z", "y", 1, -1, e, i, -t, r, a, 3), l("x", "y", "z", 1, -1, e, t, i, r, n, 4), l("x", "y", "z", -1, -1, e, t, -i, r, n, 5), this.setIndex(new THREE.BufferAttribute(p, 1)), this.addAttribute("position", new THREE.BufferAttribute(d, 3)), this.addAttribute("normal", new THREE.BufferAttribute(f, 3)), this.addAttribute("uv", new THREE.BufferAttribute(m, 2))
	}, THREE.BoxBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.BoxBufferGeometry.prototype.constructor = THREE.BoxBufferGeometry, THREE.CircleGeometry = function(e, t, i, r) {
		THREE.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
			radius: e,
			segments: t,
			thetaStart: i,
			thetaLength: r
		}, this.fromBufferGeometry(new THREE.CircleBufferGeometry(e, t, i, r))
	}, THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry, THREE.CircleBufferGeometry = function(e, t, i, r) {
		THREE.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
			radius: e,
			segments: t,
			thetaStart: i,
			thetaLength: r
		}, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI;
		var n = t + 2,
			a = new Float32Array(3 * n),
			o = new Float32Array(3 * n),
			s = new Float32Array(2 * n);
		o[2] = 1, s[0] = .5, s[1] = .5;
		for(var l = 0, h = 3, c = 2; t >= l; l++, h += 3, c += 2) {
			var u = i + l / t * r;
			a[h] = e * Math.cos(u), a[h + 1] = e * Math.sin(u), o[h + 2] = 1, s[c] = (a[h] / e + 1) / 2, s[c + 1] = (a[h + 1] / e + 1) / 2
		}
		for(var p = [], h = 1; t >= h; h++) p.push(h, h + 1, 0);
		this.setIndex(new THREE.BufferAttribute(new Uint16Array(p), 1)), this.addAttribute("position", new THREE.BufferAttribute(a, 3)), this.addAttribute("normal", new THREE.BufferAttribute(o, 3)), this.addAttribute("uv", new THREE.BufferAttribute(s, 2)), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
	}, THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry, THREE.CylinderBufferGeometry = function(e, t, i, r, n, a, o, s) {
		function l() {
			var e = (r + 1) * (n + 1);
			return a === !1 && (e += (r + 1) * d + r * d), e
		}

		function h() {
			var e = r * n * 2 * 3;
			return a === !1 && (e += r * d * 3), e
		}

		function c() {
			var a, l, h = new THREE.Vector3,
				c = new THREE.Vector3,
				u = 0,
				d = (t - e) / i;
			for(l = 0; n >= l; l++) {
				var f = [],
					m = l / n,
					w = m * (t - e) + e;
				for(a = 0; r >= a; a++) {
					var H = a / r;
					c.x = w * Math.sin(H * s + o), c.y = -m * i + x, c.z = w * Math.cos(H * s + o), g.setXYZ(y, c.x, c.y, c.z), h.copy(c), (0 === e && 0 === l || 0 === t && l === n) && (h.x = Math.sin(H * s + o), h.z = Math.cos(H * s + o)), h.setY(Math.sqrt(h.x * h.x + h.z * h.z) * d).normalize(), v.setXYZ(y, h.x, h.y, h.z), T.setXY(y, H, 1 - m), f.push(y), y++
				}
				R.push(f)
			}
			for(a = 0; r > a; a++)
				for(l = 0; n > l; l++) {
					var M = R[l][a],
						S = R[l + 1][a],
						A = R[l + 1][a + 1],
						C = R[l][a + 1];
					E.setX(_, M), _++, E.setX(_, S), _++, E.setX(_, C), _++, E.setX(_, S), _++, E.setX(_, A), _++, E.setX(_, C), _++, u += 6
				}
			p.addGroup(b, u, 0), b += u
		}

		function u(i) {
			var n, a, l, h = new THREE.Vector2,
				c = new THREE.Vector3,
				u = 0,
				d = i === !0 ? e : t,
				f = i === !0 ? 1 : -1;
			for(a = y, n = 1; r >= n; n++) g.setXYZ(y, 0, x * f, 0), v.setXYZ(y, 0, f, 0), h.x = .5, h.y = .5, T.setXY(y, h.x, h.y), y++;
			for(l = y, n = 0; r >= n; n++) {
				var m = n / r,
					R = m * s + o,
					w = Math.cos(R),
					H = Math.sin(R);
				c.x = d * H, c.y = x * f, c.z = d * w, g.setXYZ(y, c.x, c.y, c.z), v.setXYZ(y, 0, f, 0), h.x = .5 * w + .5, h.y = .5 * H * f + .5, T.setXY(y, h.x, h.y), y++
			}
			for(n = 0; r > n; n++) {
				var M = a + n,
					S = l + n;
				i === !0 ? (E.setX(_, S), _++, E.setX(_, S + 1), _++, E.setX(_, M), _++) : (E.setX(_, S + 1), _++, E.setX(_, S), _++, E.setX(_, M), _++), u += 3
			}
			p.addGroup(b, u, i === !0 ? 1 : 2), b += u
		}
		THREE.BufferGeometry.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: i,
			radialSegments: r,
			heightSegments: n,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		var p = this;
		e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, i = void 0 !== i ? i : 100, r = Math.floor(r) || 8, n = Math.floor(n) || 1, a = void 0 !== a ? a : !1, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
		var d = 0;
		a === !1 && (e > 0 && d++, t > 0 && d++);
		var f = l(),
			m = h(),
			E = new THREE.BufferAttribute(new(m > 65535 ? Uint32Array : Uint16Array)(m), 1),
			g = new THREE.BufferAttribute(new Float32Array(3 * f), 3),
			v = new THREE.BufferAttribute(new Float32Array(3 * f), 3),
			T = new THREE.BufferAttribute(new Float32Array(2 * f), 2),
			y = 0,
			_ = 0,
			R = [],
			x = i / 2,
			b = 0;
		c(), a === !1 && (e > 0 && u(!0), t > 0 && u(!1)), this.setIndex(E), this.addAttribute("position", g), this.addAttribute("normal", v), this.addAttribute("uv", T)
	}, THREE.CylinderBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.CylinderBufferGeometry.prototype.constructor = THREE.CylinderBufferGeometry, THREE.CylinderGeometry = function(e, t, i, r, n, a, o, s) {
		THREE.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: i,
			radialSegments: r,
			heightSegments: n,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		}, this.fromBufferGeometry(new THREE.CylinderBufferGeometry(e, t, i, r, n, a, o, s)), this.mergeVertices()
	}, THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry, THREE.ConeBufferGeometry = function(e, t, i, r, n, a, o) {
		THREE.CylinderBufferGeometry.call(this, 0, e, t, i, r, n, a, o), this.type = "ConeBufferGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: i,
			heightSegments: r,
			thetaStart: a,
			thetaLength: o
		}
	}, THREE.ConeBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.ConeBufferGeometry.prototype.constructor = THREE.ConeBufferGeometry, THREE.ConeGeometry = function(e, t, i, r, n, a, o) {
		THREE.CylinderGeometry.call(this, 0, e, t, i, r, n, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: i,
			heightSegments: r,
			openEnded: n,
			thetaStart: a,
			thetaLength: o
		}
	}, THREE.ConeGeometry.prototype = Object.create(THREE.CylinderGeometry.prototype), THREE.ConeGeometry.prototype.constructor = THREE.ConeGeometry, THREE.EdgesGeometry = function(e, t) {
		function i(e, t) {
			return e - t
		}
		THREE.BufferGeometry.call(this), t = void 0 !== t ? t : 1;
		var r, n = Math.cos(THREE.Math.DEG2RAD * t),
			a = [0, 0],
			o = {},
			s = ["a", "b", "c"];
		e instanceof THREE.BufferGeometry ? (r = new THREE.Geometry, r.fromBufferGeometry(e)) : r = e.clone(), r.mergeVertices(), r.computeFaceNormals();
		for(var l = r.vertices, h = r.faces, c = 0, u = h.length; u > c; c++)
			for(var p = h[c], d = 0; 3 > d; d++) {
				a[0] = p[s[d]], a[1] = p[s[(d + 1) % 3]], a.sort(i);
				var f = a.toString();
				void 0 === o[f] ? o[f] = {
					vert1: a[0],
					vert2: a[1],
					face1: c,
					face2: void 0
				} : o[f].face2 = c
			}
		var m = [];
		for(var f in o) {
			var E = o[f];
			if(void 0 === E.face2 || h[E.face1].normal.dot(h[E.face2].normal) <= n) {
				var g = l[E.vert1];
				m.push(g.x), m.push(g.y), m.push(g.z), g = l[E.vert2], m.push(g.x), m.push(g.y), m.push(g.z)
			}
		}
		this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(m), 3))
	}, THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry, THREE.ExtrudeGeometry = function(e, t) {
		return "undefined" == typeof e ? void(e = []) : (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", e = Array.isArray(e) ? e : [e], this.addShapeList(e, t), void this.computeFaceNormals())
	}, THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry, THREE.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
		for(var i = e.length, r = 0; i > r; r++) {
			var n = e[r];
			this.addShape(n, t)
		}
	}, THREE.ExtrudeGeometry.prototype.addShape = function(e, t) {
		function i(e, t, i) {
			return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(i).add(e)
		}

		function r(e, t, i) {
			var r, n, a = 1,
				o = e.x - t.x,
				s = e.y - t.y,
				l = i.x - e.x,
				h = i.y - e.y,
				c = o * o + s * s,
				u = o * h - s * l;
			if(Math.abs(u) > Number.EPSILON) {
				var p = Math.sqrt(c),
					d = Math.sqrt(l * l + h * h),
					f = t.x - s / p,
					m = t.y + o / p,
					E = i.x - h / d,
					g = i.y + l / d,
					v = ((E - f) * h - (g - m) * l) / (o * h - s * l);
				r = f + o * v - e.x, n = m + s * v - e.y;
				var T = r * r + n * n;
				if(2 >= T) return new THREE.Vector2(r, n);
				a = Math.sqrt(T / 2)
			} else {
				var y = !1;
				o > Number.EPSILON ? l > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? l < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(h) && (y = !0), y ? (r = -s, n = o, a = Math.sqrt(c)) : (r = o, n = s, a = Math.sqrt(c / 2))
			}
			return new THREE.Vector2(r / a, n / a)
		}

		function n() {
			if(T) {
				var e = 0,
					t = V * e;
				for(W = 0; z > W; W++) G = O[W], l(G[2] + t, G[1] + t, G[0] + t);
				for(e = _ + 2 * v, t = V * e, W = 0; z > W; W++) G = O[W], l(G[0] + t, G[1] + t, G[2] + t)
			} else {
				for(W = 0; z > W; W++) G = O[W], l(G[2], G[1], G[0]);
				for(W = 0; z > W; W++) G = O[W], l(G[0] + V * _, G[1] + V * _, G[2] + V * _)
			}
		}

		function a() {
			var e = 0;
			for(o(I, e), e += I.length, H = 0, M = P.length; M > H; H++) w = P[H], o(w, e), e += w.length
		}

		function o(e, t) {
			var i, r;
			for(W = e.length; --W >= 0;) {
				i = W, r = W - 1, 0 > r && (r = e.length - 1);
				var n = 0,
					a = _ + 2 * v;
				for(n = 0; a > n; n++) {
					var o = V * n,
						s = V * (n + 1),
						l = t + i + o,
						c = t + r + o,
						u = t + r + s,
						p = t + i + s;
					h(l, c, u, p, e, n, a, i, r)
				}
			}
		}

		function s(e, t, i) {
			S.vertices.push(new THREE.Vector3(e, t, i))
		}

		function l(e, t, i) {
			e += A, t += A, i += A, S.faces.push(new THREE.Face3(e, t, i, null, null, 0));
			var r = b.generateTopUV(S, e, t, i);
			S.faceVertexUvs[0].push(r)
		}

		function h(e, t, i, r) {
			e += A, t += A, i += A, r += A, S.faces.push(new THREE.Face3(e, t, r, null, null, 1)), S.faces.push(new THREE.Face3(t, i, r, null, null, 1));
			var n = b.generateSideWallUV(S, e, t, i, r);
			S.faceVertexUvs[0].push([n[0], n[1], n[3]]), S.faceVertexUvs[0].push([n[1], n[2], n[3]])
		}
		var c, u, p, d, f, m = void 0 !== t.amount ? t.amount : 100,
			E = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
			g = void 0 !== t.bevelSize ? t.bevelSize : E - 2,
			v = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
			T = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
			y = void 0 !== t.curveSegments ? t.curveSegments : 12,
			_ = void 0 !== t.steps ? t.steps : 1,
			R = t.extrudePath,
			x = !1,
			b = void 0 !== t.UVGenerator ? t.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
		R && (c = R.getSpacedPoints(_), x = !0, T = !1, u = void 0 !== t.frames ? t.frames : new THREE.TubeGeometry.FrenetFrames(R, _, !1), p = new THREE.Vector3, d = new THREE.Vector3, f = new THREE.Vector3), T || (v = 0, E = 0, g = 0);
		var w, H, M, S = this,
			A = this.vertices.length,
			C = e.extractPoints(y),
			L = C.shape,
			P = C.holes,
			D = !THREE.ShapeUtils.isClockWise(L);
		if(D) {
			for(L = L.reverse(), H = 0, M = P.length; M > H; H++) w = P[H], THREE.ShapeUtils.isClockWise(w) && (P[H] = w.reverse());
			D = !1
		}
		var O = THREE.ShapeUtils.triangulateShape(L, P),
			I = L;
		for(H = 0, M = P.length; M > H; H++) w = P[H], L = L.concat(w);
		for(var B, U, F, N, k, G, V = L.length, z = O.length, j = [], W = 0, X = I.length, q = X - 1, Y = W + 1; X > W; W++, q++, Y++) q === X && (q = 0), Y === X && (Y = 0), j[W] = r(I[W], I[q], I[Y]);
		var $, Z = [],
			K = j.concat();
		for(H = 0, M = P.length; M > H; H++) {
			for(w = P[H], $ = [], W = 0, X = w.length, q = X - 1, Y = W + 1; X > W; W++, q++, Y++) q === X && (q = 0), Y === X && (Y = 0), $[W] = r(w[W], w[q], w[Y]);
			Z.push($), K = K.concat($)
		}
		for(B = 0; v > B; B++) {
			for(F = B / v, N = E * (1 - F), U = g * Math.sin(F * Math.PI / 2), W = 0, X = I.length; X > W; W++) k = i(I[W], j[W], U), s(k.x, k.y, -N);
			for(H = 0, M = P.length; M > H; H++)
				for(w = P[H], $ = Z[H], W = 0, X = w.length; X > W; W++) k = i(w[W], $[W], U), s(k.x, k.y, -N)
		}
		for(U = g, W = 0; V > W; W++) k = T ? i(L[W], K[W], U) : L[W], x ? (d.copy(u.normals[0]).multiplyScalar(k.x), p.copy(u.binormals[0]).multiplyScalar(k.y), f.copy(c[0]).add(d).add(p), s(f.x, f.y, f.z)) : s(k.x, k.y, 0);
		var Q;
		for(Q = 1; _ >= Q; Q++)
			for(W = 0; V > W; W++) k = T ? i(L[W], K[W], U) : L[W], x ? (d.copy(u.normals[Q]).multiplyScalar(k.x), p.copy(u.binormals[Q]).multiplyScalar(k.y), f.copy(c[Q]).add(d).add(p), s(f.x, f.y, f.z)) : s(k.x, k.y, m / _ * Q);
		for(B = v - 1; B >= 0; B--) {
			for(F = B / v, N = E * (1 - F), U = g * Math.sin(F * Math.PI / 2), W = 0, X = I.length; X > W; W++) k = i(I[W], j[W], U), s(k.x, k.y, m + N);
			for(H = 0, M = P.length; M > H; H++)
				for(w = P[H], $ = Z[H], W = 0, X = w.length; X > W; W++) k = i(w[W], $[W], U), x ? s(k.x, k.y + c[_ - 1].y, c[_ - 1].x + N) : s(k.x, k.y, m + N)
		}
		n(), a()
	}, THREE.ExtrudeGeometry.WorldUVGenerator = {
		generateTopUV: function(e, t, i, r) {
			var n = e.vertices,
				a = n[t],
				o = n[i],
				s = n[r];
			return [new THREE.Vector2(a.x, a.y), new THREE.Vector2(o.x, o.y), new THREE.Vector2(s.x, s.y)]
		},
		generateSideWallUV: function(e, t, i, r, n) {
			var a = e.vertices,
				o = a[t],
				s = a[i],
				l = a[r],
				h = a[n];
			return Math.abs(o.y - s.y) < .01 ? [new THREE.Vector2(o.x, 1 - o.z), new THREE.Vector2(s.x, 1 - s.z), new THREE.Vector2(l.x, 1 - l.z), new THREE.Vector2(h.x, 1 - h.z)] : [new THREE.Vector2(o.y, 1 - o.z), new THREE.Vector2(s.y, 1 - s.z), new THREE.Vector2(l.y, 1 - l.z), new THREE.Vector2(h.y, 1 - h.z)]
		}
	}, THREE.ShapeGeometry = function(e, t) {
		THREE.Geometry.call(this), this.type = "ShapeGeometry", Array.isArray(e) === !1 && (e = [e]), this.addShapeList(e, t), this.computeFaceNormals()
	}, THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry, THREE.ShapeGeometry.prototype.addShapeList = function(e, t) {
		for(var i = 0, r = e.length; r > i; i++) this.addShape(e[i], t);
		return this
	}, THREE.ShapeGeometry.prototype.addShape = function(e, t) {
		void 0 === t && (t = {});
		var i, r, n, a = void 0 !== t.curveSegments ? t.curveSegments : 12,
			o = t.material,
			s = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
			l = this.vertices.length,
			h = e.extractPoints(a),
			c = h.shape,
			u = h.holes,
			p = !THREE.ShapeUtils.isClockWise(c);
		if(p) {
			for(c = c.reverse(), i = 0, r = u.length; r > i; i++) n = u[i], THREE.ShapeUtils.isClockWise(n) && (u[i] = n.reverse());
			p = !1
		}
		var d = THREE.ShapeUtils.triangulateShape(c, u);
		for(i = 0, r = u.length; r > i; i++) n = u[i], c = c.concat(n);
		var f, m, E = c.length,
			g = d.length;
		for(i = 0; E > i; i++) f = c[i], this.vertices.push(new THREE.Vector3(f.x, f.y, 0));
		for(i = 0; g > i; i++) {
			m = d[i];
			var v = m[0] + l,
				T = m[1] + l,
				y = m[2] + l;
			this.faces.push(new THREE.Face3(v, T, y, null, null, o)), this.faceVertexUvs[0].push(s.generateTopUV(this, v, T, y))
		}
	}, THREE.LatheBufferGeometry = function(e, t, i, r) {
		THREE.BufferGeometry.call(this), this.type = "LatheBufferGeometry", this.parameters = {
			points: e,
			segments: t,
			phiStart: i,
			phiLength: r
		}, t = Math.floor(t) || 12, i = i || 0, r = r || 2 * Math.PI, r = THREE.Math.clamp(r, 0, 2 * Math.PI);
		var n, a, o, s = (t + 1) * e.length,
			l = t * e.length * 2 * 3,
			h = new THREE.BufferAttribute(new(l > 65535 ? Uint32Array : Uint16Array)(l), 1),
			c = new THREE.BufferAttribute(new Float32Array(3 * s), 3),
			u = new THREE.BufferAttribute(new Float32Array(2 * s), 2),
			p = 0,
			d = 0,
			f = (1 / (e.length - 1), 1 / t),
			m = new THREE.Vector3,
			E = new THREE.Vector2;
		for(a = 0; t >= a; a++) {
			var g = i + a * f * r,
				v = Math.sin(g),
				T = Math.cos(g);
			for(o = 0; o <= e.length - 1; o++) m.x = e[o].x * v, m.y = e[o].y, m.z = e[o].x * T, c.setXYZ(p, m.x, m.y, m.z), E.x = a / t, E.y = o / (e.length - 1), u.setXY(p, E.x, E.y), p++
		}
		for(a = 0; t > a; a++)
			for(o = 0; o < e.length - 1; o++) {
				n = o + a * e.length;
				var y = n,
					_ = n + e.length,
					R = n + e.length + 1,
					x = n + 1;
				h.setX(d, y), d++, h.setX(d, _), d++, h.setX(d, x), d++, h.setX(d, _), d++, h.setX(d, R), d++, h.setX(d, x), d++
			}
		if(this.setIndex(h), this.addAttribute("position", c), this.addAttribute("uv", u), this.computeVertexNormals(), r === 2 * Math.PI) {
			var b = this.attributes.normal.array,
				w = new THREE.Vector3,
				H = new THREE.Vector3,
				M = new THREE.Vector3;
			for(n = t * e.length * 3, a = 0, o = 0; a < e.length; a++, o += 3) w.x = b[o + 0], w.y = b[o + 1], w.z = b[o + 2], H.x = b[n + o + 0], H.y = b[n + o + 1], H.z = b[n + o + 2], M.addVectors(w, H).normalize(), b[o + 0] = b[n + o + 0] = M.x, b[o + 1] = b[n + o + 1] = M.y, b[o + 2] = b[n + o + 2] = M.z
		}
	}, THREE.LatheBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.LatheBufferGeometry.prototype.constructor = THREE.LatheBufferGeometry, THREE.LatheGeometry = function(e, t, i, r) {
		THREE.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
			points: e,
			segments: t,
			phiStart: i,
			phiLength: r
		}, this.fromBufferGeometry(new THREE.LatheBufferGeometry(e, t, i, r)), this.mergeVertices()
	}, THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry, THREE.PlaneGeometry = function(e, t, i, r) {
		THREE.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: i,
			heightSegments: r
		}, this.fromBufferGeometry(new THREE.PlaneBufferGeometry(e, t, i, r))
	}, THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry, THREE.PlaneBufferGeometry = function(e, t, i, r) {
		THREE.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: i,
			heightSegments: r
		};
		for(var n = e / 2, a = t / 2, o = Math.floor(i) || 1, s = Math.floor(r) || 1, l = o + 1, h = s + 1, c = e / o, u = t / s, p = new Float32Array(l * h * 3), d = new Float32Array(l * h * 3), f = new Float32Array(l * h * 2), m = 0, E = 0, g = 0; h > g; g++)
			for(var v = g * u - a, T = 0; l > T; T++) {
				var y = T * c - n;
				p[m] = y, p[m + 1] = -v, d[m + 2] = 1, f[E] = T / o, f[E + 1] = 1 - g / s, m += 3, E += 2
			}
		m = 0;
		for(var _ = new(p.length / 3 > 65535 ? Uint32Array : Uint16Array)(o * s * 6), g = 0; s > g; g++)
			for(var T = 0; o > T; T++) {
				var R = T + l * g,
					x = T + l * (g + 1),
					b = T + 1 + l * (g + 1),
					w = T + 1 + l * g;
				_[m] = R, _[m + 1] = x, _[m + 2] = w, _[m + 3] = x, _[m + 4] = b, _[m + 5] = w, m += 6
			}
		this.setIndex(new THREE.BufferAttribute(_, 1)), this.addAttribute("position", new THREE.BufferAttribute(p, 3)), this.addAttribute("normal", new THREE.BufferAttribute(d, 3)), this.addAttribute("uv", new THREE.BufferAttribute(f, 2))
	}, THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry, THREE.RingBufferGeometry = function(e, t, i, r, n, a) {
		THREE.BufferGeometry.call(this), this.type = "RingBufferGeometry", this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: i,
			phiSegments: r,
			thetaStart: n,
			thetaLength: a
		}, e = e || 20, t = t || 50, n = void 0 !== n ? n : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, r = void 0 !== r ? Math.max(1, r) : 1;
		var o, s, l, h = (i + 1) * (r + 1),
			c = i * r * 2 * 3,
			u = new THREE.BufferAttribute(new(c > 65535 ? Uint32Array : Uint16Array)(c), 1),
			p = new THREE.BufferAttribute(new Float32Array(3 * h), 3),
			d = new THREE.BufferAttribute(new Float32Array(3 * h), 3),
			f = new THREE.BufferAttribute(new Float32Array(2 * h), 2),
			m = 0,
			E = 0,
			g = e,
			v = (t - e) / r,
			T = new THREE.Vector3,
			y = new THREE.Vector2;
		for(s = 0; r >= s; s++) {
			for(l = 0; i >= l; l++) o = n + l / i * a, T.x = g * Math.cos(o), T.y = g * Math.sin(o), p.setXYZ(m, T.x, T.y, T.z), d.setXYZ(m, 0, 0, 1), y.x = (T.x / t + 1) / 2, y.y = (T.y / t + 1) / 2, f.setXY(m, y.x, y.y), m++;
			g += v
		}
		for(s = 0; r > s; s++) {
			var _ = s * (i + 1);
			for(l = 0; i > l; l++) {
				o = l + _;
				var R = o,
					x = o + i + 1,
					b = o + i + 2,
					w = o + 1;
				u.setX(E, R), E++, u.setX(E, x), E++, u.setX(E, b), E++, u.setX(E, R), E++, u.setX(E, b), E++, u.setX(E, w), E++
			}
		}
		this.setIndex(u), this.addAttribute("position", p), this.addAttribute("normal", d), this.addAttribute("uv", f)
	}, THREE.RingBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.RingBufferGeometry.prototype.constructor = THREE.RingBufferGeometry, THREE.RingGeometry = function(e, t, i, r, n, a) {
		THREE.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: i,
			phiSegments: r,
			thetaStart: n,
			thetaLength: a
		}, this.fromBufferGeometry(new THREE.RingBufferGeometry(e, t, i, r, n, a))
	}, THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.RingGeometry.prototype.constructor = THREE.RingGeometry, THREE.SphereGeometry = function(e, t, i, r, n, a, o) {
		THREE.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: i,
			phiStart: r,
			phiLength: n,
			thetaStart: a,
			thetaLength: o
		}, this.fromBufferGeometry(new THREE.SphereBufferGeometry(e, t, i, r, n, a, o))
	}, THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry, THREE.SphereBufferGeometry = function(e, t, i, r, n, a, o) {
		THREE.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: i,
			phiStart: r,
			phiLength: n,
			thetaStart: a,
			thetaLength: o
		}, e = e || 50, t = Math.max(3, Math.floor(t) || 8), i = Math.max(2, Math.floor(i) || 6), r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : Math.PI;
		for(var s = a + o, l = (t + 1) * (i + 1), h = new THREE.BufferAttribute(new Float32Array(3 * l), 3), c = new THREE.BufferAttribute(new Float32Array(3 * l), 3), u = new THREE.BufferAttribute(new Float32Array(2 * l), 2), p = 0, d = [], f = new THREE.Vector3, m = 0; i >= m; m++) {
			for(var E = [], g = m / i, v = 0; t >= v; v++) {
				var T = v / t,
					y = -e * Math.cos(r + T * n) * Math.sin(a + g * o),
					_ = e * Math.cos(a + g * o),
					R = e * Math.sin(r + T * n) * Math.sin(a + g * o);
				f.set(y, _, R).normalize(), h.setXYZ(p, y, _, R), c.setXYZ(p, f.x, f.y, f.z), u.setXY(p, T, 1 - g), E.push(p), p++
			}
			d.push(E)
		}
		for(var x = [], m = 0; i > m; m++)
			for(var v = 0; t > v; v++) {
				var b = d[m][v + 1],
					w = d[m][v],
					H = d[m + 1][v],
					M = d[m + 1][v + 1];
				(0 !== m || a > 0) && x.push(b, w, M), (m !== i - 1 || s < Math.PI) && x.push(w, H, M)
			}
		this.setIndex(new(h.count > 65535 ? THREE.Uint32Attribute : THREE.Uint16Attribute)(x, 1)), this.addAttribute("position", h), this.addAttribute("normal", c), this.addAttribute("uv", u), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
	}, THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry, THREE.TextGeometry = function(e, t) {
		t = t || {};
		var i = t.font;
		if(i instanceof THREE.Font == !1) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new THREE.Geometry;
		var r = i.generateShapes(e, t.size, t.curveSegments);
		t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), THREE.ExtrudeGeometry.call(this, r, t), this.type = "TextGeometry"
	}, THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype), THREE.TextGeometry.prototype.constructor = THREE.TextGeometry, THREE.TorusBufferGeometry = function(e, t, i, r, n) {
		THREE.BufferGeometry.call(this), this.type = "TorusBufferGeometry", this.parameters = {
			radius: e,
			tube: t,
			radialSegments: i,
			tubularSegments: r,
			arc: n
		}, e = e || 100, t = t || 40, i = Math.floor(i) || 8, r = Math.floor(r) || 6, n = n || 2 * Math.PI;
		var a, o, s = (i + 1) * (r + 1),
			l = i * r * 2 * 3,
			h = new(l > 65535 ? Uint32Array : Uint16Array)(l),
			c = new Float32Array(3 * s),
			u = new Float32Array(3 * s),
			p = new Float32Array(2 * s),
			d = 0,
			f = 0,
			m = 0,
			E = new THREE.Vector3,
			g = new THREE.Vector3,
			v = new THREE.Vector3;
		for(a = 0; i >= a; a++)
			for(o = 0; r >= o; o++) {
				var T = o / r * n,
					y = a / i * Math.PI * 2;
				g.x = (e + t * Math.cos(y)) * Math.cos(T), g.y = (e + t * Math.cos(y)) * Math.sin(T), g.z = t * Math.sin(y), c[d] = g.x, c[d + 1] = g.y, c[d + 2] = g.z, E.x = e * Math.cos(T), E.y = e * Math.sin(T), v.subVectors(g, E).normalize(), u[d] = v.x, u[d + 1] = v.y, u[d + 2] = v.z, p[f] = o / r, p[f + 1] = a / i, d += 3, f += 2
			}
		for(a = 1; i >= a; a++)
			for(o = 1; r >= o; o++) {
				var _ = (r + 1) * a + o - 1,
					R = (r + 1) * (a - 1) + o - 1,
					x = (r + 1) * (a - 1) + o,
					b = (r + 1) * a + o;
				h[m] = _, h[m + 1] = R, h[m + 2] = b, h[m + 3] = R, h[m + 4] = x, h[m + 5] = b, m += 6
			}
		this.setIndex(new THREE.BufferAttribute(h, 1)), this.addAttribute("position", new THREE.BufferAttribute(c, 3)), this.addAttribute("normal", new THREE.BufferAttribute(u, 3)), this.addAttribute("uv", new THREE.BufferAttribute(p, 2))
	}, THREE.TorusBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.TorusBufferGeometry.prototype.constructor = THREE.TorusBufferGeometry, THREE.TorusGeometry = function(e, t, i, r, n) {
		THREE.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
			radius: e,
			tube: t,
			radialSegments: i,
			tubularSegments: r,
			arc: n
		}, this.fromBufferGeometry(new THREE.TorusBufferGeometry(e, t, i, r, n))
	}, THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry, THREE.TorusKnotBufferGeometry = function(e, t, i, r, n, a) {
		function o(e, t, i, r, n) {
			var a = Math.cos(e),
				o = Math.sin(e),
				s = i / t * e,
				l = Math.cos(s);
			n.x = r * (2 + l) * .5 * a, n.y = r * (2 + l) * o * .5, n.z = r * Math.sin(s) * .5
		}
		THREE.BufferGeometry.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
			radius: e,
			tube: t,
			tubularSegments: i,
			radialSegments: r,
			p: n,
			q: a
		}, e = e || 100, t = t || 40, i = Math.floor(i) || 64, r = Math.floor(r) || 8, n = n || 2, a = a || 3;
		var s, l, h = (r + 1) * (i + 1),
			c = r * i * 2 * 3,
			u = new THREE.BufferAttribute(new(c > 65535 ? Uint32Array : Uint16Array)(c), 1),
			p = new THREE.BufferAttribute(new Float32Array(3 * h), 3),
			d = new THREE.BufferAttribute(new Float32Array(3 * h), 3),
			f = new THREE.BufferAttribute(new Float32Array(2 * h), 2),
			m = 0,
			E = 0,
			g = new THREE.Vector3,
			v = new THREE.Vector3,
			T = new THREE.Vector2,
			y = new THREE.Vector3,
			_ = new THREE.Vector3,
			R = new THREE.Vector3,
			x = new THREE.Vector3,
			b = new THREE.Vector3;
		for(s = 0; i >= s; ++s) {
			var w = s / i * n * Math.PI * 2;
			for(o(w, n, a, e, y), o(w + .01, n, a, e, _), x.subVectors(_, y), b.addVectors(_, y), R.crossVectors(x, b), b.crossVectors(R, x), R.normalize(), b.normalize(), l = 0; r >= l; ++l) {
				var H = l / r * Math.PI * 2,
					M = -t * Math.cos(H),
					S = t * Math.sin(H);
				g.x = y.x + (M * b.x + S * R.x), g.y = y.y + (M * b.y + S * R.y), g.z = y.z + (M * b.z + S * R.z), p.setXYZ(m, g.x, g.y, g.z), v.subVectors(g, y).normalize(), d.setXYZ(m, v.x, v.y, v.z), T.x = s / i, T.y = l / r, f.setXY(m, T.x, T.y), m++
			}
		}
		for(l = 1; i >= l; l++)
			for(s = 1; r >= s; s++) {
				var A = (r + 1) * (l - 1) + (s - 1),
					C = (r + 1) * l + (s - 1),
					L = (r + 1) * l + s,
					P = (r + 1) * (l - 1) + s;
				u.setX(E, A), E++, u.setX(E, C), E++, u.setX(E, P), E++, u.setX(E, C), E++, u.setX(E, L), E++, u.setX(E, P), E++
			}
		this.setIndex(u), this.addAttribute("position", p), this.addAttribute("normal", d), this.addAttribute("uv", f)
	}, THREE.TorusKnotBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.TorusKnotBufferGeometry.prototype.constructor = THREE.TorusKnotBufferGeometry, THREE.TorusKnotGeometry = function(e, t, i, r, n, a, o) {
		THREE.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
			radius: e,
			tube: t,
			tubularSegments: i,
			radialSegments: r,
			p: n,
			q: a
		}, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(e, t, i, r, n, a)), this.mergeVertices()
	}, THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry, THREE.TubeGeometry = function(e, t, i, r, n, a) {
		function o(e, t, i) {
			return A.vertices.push(new THREE.Vector3(e, t, i)) - 1
		}
		THREE.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
			path: e,
			segments: t,
			radius: i,
			radialSegments: r,
			closed: n,
			taper: a
		}, t = t || 64, i = i || 1, r = r || 8, n = n || !1, a = a || THREE.TubeGeometry.NoTaper;
		var s, l, h, c, u, p, d, f, m, E, g, v, T, y, _, R, x, b, w, H, M, S = [],
			A = this,
			C = t + 1,
			L = new THREE.Vector3,
			P = new THREE.TubeGeometry.FrenetFrames(e, t, n),
			D = P.tangents,
			O = P.normals,
			I = P.binormals;
		for(this.tangents = D, this.normals = O, this.binormals = I, E = 0; C > E; E++)
			for(S[E] = [], c = E / (C - 1), m = e.getPointAt(c), s = D[E], l = O[E], h = I[E], p = i * a(c), g = 0; r > g; g++) u = g / r * 2 * Math.PI, d = -p * Math.cos(u), f = p * Math.sin(u), L.copy(m), L.x += d * l.x + f * h.x, L.y += d * l.y + f * h.y, L.z += d * l.z + f * h.z, S[E][g] = o(L.x, L.y, L.z);
		for(E = 0; t > E; E++)
			for(g = 0; r > g; g++) v = n ? (E + 1) % t : E + 1, T = (g + 1) % r, y = S[E][g], _ = S[v][g], R = S[v][T], x = S[E][T], b = new THREE.Vector2(E / t, g / r), w = new THREE.Vector2((E + 1) / t, g / r), H = new THREE.Vector2((E + 1) / t, (g + 1) / r), M = new THREE.Vector2(E / t, (g + 1) / r), this.faces.push(new THREE.Face3(y, _, x)), this.faceVertexUvs[0].push([b, w, M]), this.faces.push(new THREE.Face3(_, R, x)), this.faceVertexUvs[0].push([w.clone(), H, M.clone()]);
		this.computeFaceNormals(), this.computeVertexNormals()
	}, THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry, THREE.TubeGeometry.NoTaper = function() {
		return 1
	}, THREE.TubeGeometry.SinusoidalTaper = function(e) {
		return Math.sin(Math.PI * e)
	}, THREE.TubeGeometry.FrenetFrames = function(e, t, i) {
		function r() {
			d[0] = new THREE.Vector3, f[0] = new THREE.Vector3, a = Number.MAX_VALUE, o = Math.abs(p[0].x), s = Math.abs(p[0].y), l = Math.abs(p[0].z), a >= o && (a = o, u.set(1, 0, 0)), a >= s && (a = s, u.set(0, 1, 0)), a >= l && u.set(0, 0, 1), m.crossVectors(p[0], u).normalize(), d[0].crossVectors(p[0], m), f[0].crossVectors(p[0], d[0])
		}
		var n, a, o, s, l, h, c, u = new THREE.Vector3,
			p = [],
			d = [],
			f = [],
			m = new THREE.Vector3,
			E = new THREE.Matrix4,
			g = t + 1;
		for(this.tangents = p, this.normals = d, this.binormals = f, h = 0; g > h; h++) c = h / (g - 1), p[h] = e.getTangentAt(c), p[h].normalize();
		for(r(), h = 1; g > h; h++) d[h] = d[h - 1].clone(), f[h] = f[h - 1].clone(), m.crossVectors(p[h - 1], p[h]), m.length() > Number.EPSILON && (m.normalize(), n = Math.acos(THREE.Math.clamp(p[h - 1].dot(p[h]), -1, 1)), d[h].applyMatrix4(E.makeRotationAxis(m, n))), f[h].crossVectors(p[h], d[h]);
		if(i)
			for(n = Math.acos(THREE.Math.clamp(d[0].dot(d[g - 1]), -1, 1)), n /= g - 1, p[0].dot(m.crossVectors(d[0], d[g - 1])) > 0 && (n = -n), h = 1; g > h; h++) d[h].applyMatrix4(E.makeRotationAxis(p[h], n * h)), f[h].crossVectors(p[h], d[h])
	}, THREE.PolyhedronGeometry = function(e, t, i, r) {
		function n(e) {
			var t = e.normalize().clone();
			t.index = c.vertices.push(t) - 1;
			var i = s(e) / 2 / Math.PI + .5,
				r = l(e) / Math.PI + .5;
			return t.uv = new THREE.Vector2(i, 1 - r), t
		}

		function a(e, t, i) {
			var r = new THREE.Face3(e.index, t.index, i.index, [e.clone(), t.clone(), i.clone()]);
			c.faces.push(r), T.copy(e).add(t).add(i).divideScalar(3);
			var n = s(T);
			c.faceVertexUvs[0].push([h(e.uv, e, n), h(t.uv, t, n), h(i.uv, i, n)])
		}

		function o(e, t) {
			for(var i = Math.pow(2, t), r = n(c.vertices[e.a]), o = n(c.vertices[e.b]), s = n(c.vertices[e.c]), l = [], h = 0; i >= h; h++) {
				l[h] = [];
				for(var u = n(r.clone().lerp(s, h / i)), p = n(o.clone().lerp(s, h / i)), d = i - h, f = 0; d >= f; f++) l[h][f] = 0 === f && h === i ? u : n(u.clone().lerp(p, f / d))
			}
			for(var h = 0; i > h; h++)
				for(var f = 0; 2 * (i - h) - 1 > f; f++) {
					var m = Math.floor(f / 2);
					f % 2 === 0 ? a(l[h][m + 1], l[h + 1][m], l[h][m]) : a(l[h][m + 1], l[h + 1][m + 1], l[h + 1][m])
				}
		}

		function s(e) {
			return Math.atan2(e.z, -e.x)
		}

		function l(e) {
			return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
		}

		function h(e, t, i) {
			return 0 > i && 1 === e.x && (e = new THREE.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new THREE.Vector2(i / 2 / Math.PI + .5, e.y)), e.clone()
		}
		THREE.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: e,
			indices: t,
			radius: i,
			detail: r
		}, i = i || 1, r = r || 0;
		for(var c = this, u = 0, p = e.length; p > u; u += 3) n(new THREE.Vector3(e[u], e[u + 1], e[u + 2]));
		for(var d = this.vertices, f = [], u = 0, m = 0, p = t.length; p > u; u += 3, m++) {
			var E = d[t[u]],
				g = d[t[u + 1]],
				v = d[t[u + 2]];
			f[m] = new THREE.Face3(E.index, g.index, v.index, [E.clone(), g.clone(), v.clone()])
		}
		for(var T = new THREE.Vector3, u = 0, p = f.length; p > u; u++) o(f[u], r);
		for(var u = 0, p = this.faceVertexUvs[0].length; p > u; u++) {
			var y = this.faceVertexUvs[0][u],
				_ = y[0].x,
				R = y[1].x,
				x = y[2].x,
				b = Math.max(_, R, x),
				w = Math.min(_, R, x);
			b > .9 && .1 > w && (.2 > _ && (y[0].x += 1), .2 > R && (y[1].x += 1), .2 > x && (y[2].x += 1))
		}
		for(var u = 0, p = this.vertices.length; p > u; u++) this.vertices[u].multiplyScalar(i);
		this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, i)
	}, THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry, THREE.DodecahedronGeometry = function(e, t) {
		var i = (1 + Math.sqrt(5)) / 2,
			r = 1 / i,
			n = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -i, 0, -r, i, 0, r, -i, 0, r, i, -r, -i, 0, -r, i, 0, r, -i, 0, r, i, 0, -i, 0, -r, i, 0, -r, -i, 0, r, i, 0, r],
			a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
		THREE.PolyhedronGeometry.call(this, n, a, e, t), this.type = "DodecahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		}
	}, THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype), THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry, THREE.IcosahedronGeometry = function(e, t) {
		var i = (1 + Math.sqrt(5)) / 2,
			r = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1],
			n = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
		THREE.PolyhedronGeometry.call(this, r, n, e, t), this.type = "IcosahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		}
	}, THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype), THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry, THREE.OctahedronGeometry = function(e, t) {
		var i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
			r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
		THREE.PolyhedronGeometry.call(this, i, r, e, t), this.type = "OctahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		}
	}, THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype), THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry, THREE.TetrahedronGeometry = function(e, t) {
		var i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
			r = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
		THREE.PolyhedronGeometry.call(this, i, r, e, t), this.type = "TetrahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		}
	}, THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype), THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry, THREE.ParametricGeometry = function(e, t, i) {
		THREE.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {
			func: e,
			slices: t,
			stacks: i
		};
		var r, n, a, o, s, l = this.vertices,
			h = this.faces,
			c = this.faceVertexUvs[0],
			u = t + 1;
		for(r = 0; i >= r; r++)
			for(s = r / i, n = 0; t >= n; n++) o = n / t, a = e(o, s), l.push(a);
		var p, d, f, m, E, g, v, T;
		for(r = 0; i > r; r++)
			for(n = 0; t > n; n++) p = r * u + n, d = r * u + n + 1, f = (r + 1) * u + n + 1, m = (r + 1) * u + n, E = new THREE.Vector2(n / t, r / i), g = new THREE.Vector2((n + 1) / t, r / i), v = new THREE.Vector2((n + 1) / t, (r + 1) / i), T = new THREE.Vector2(n / t, (r + 1) / i), h.push(new THREE.Face3(p, d, m)), c.push([E, g, T]), h.push(new THREE.Face3(d, f, m)), c.push([g.clone(), v, T.clone()]);
		this.computeFaceNormals(), this.computeVertexNormals()
	}, THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry, THREE.WireframeGeometry = function(e) {
		function t(e, t) {
			return e - t
		}
		THREE.BufferGeometry.call(this);
		var i = [0, 0],
			r = {},
			n = ["a", "b", "c"];
		if(e instanceof THREE.Geometry) {
			for(var a = e.vertices, o = e.faces, s = 0, l = new Uint32Array(6 * o.length), h = 0, c = o.length; c > h; h++)
				for(var u = o[h], p = 0; 3 > p; p++) {
					i[0] = u[n[p]], i[1] = u[n[(p + 1) % 3]], i.sort(t);
					var d = i.toString();
					void 0 === r[d] && (l[2 * s] = i[0], l[2 * s + 1] = i[1], r[d] = !0, s++)
				}
			for(var f = new Float32Array(2 * s * 3), h = 0, c = s; c > h; h++)
				for(var p = 0; 2 > p; p++) {
					var m = a[l[2 * h + p]],
						E = 6 * h + 3 * p;
					f[E + 0] = m.x, f[E + 1] = m.y, f[E + 2] = m.z
				}
			this.addAttribute("position", new THREE.BufferAttribute(f, 3))
		} else if(e instanceof THREE.BufferGeometry)
			if(null !== e.index) {
				var g = e.index.array,
					a = e.attributes.position,
					v = e.groups,
					s = 0;
				0 === v.length && e.addGroup(0, g.length);
				for(var l = new Uint32Array(2 * g.length), T = 0, y = v.length; y > T; ++T)
					for(var _ = v[T], R = _.start, x = _.count, h = R, b = R + x; b > h; h += 3)
						for(var p = 0; 3 > p; p++) {
							i[0] = g[h + p], i[1] = g[h + (p + 1) % 3], i.sort(t);
							var d = i.toString();
							void 0 === r[d] && (l[2 * s] = i[0], l[2 * s + 1] = i[1], r[d] = !0, s++)
						}
				for(var f = new Float32Array(2 * s * 3), h = 0, c = s; c > h; h++)
					for(var p = 0; 2 > p; p++) {
						var E = 6 * h + 3 * p,
							w = l[2 * h + p];
						f[E + 0] = a.getX(w), f[E + 1] = a.getY(w), f[E + 2] = a.getZ(w)
					}
				this.addAttribute("position", new THREE.BufferAttribute(f, 3))
			} else {
				for(var a = e.attributes.position.array, s = a.length / 3, H = s / 3, f = new Float32Array(2 * s * 3), h = 0, c = H; c > h; h++)
					for(var p = 0; 3 > p; p++) {
						var E = 18 * h + 6 * p,
							M = 9 * h + 3 * p;
						f[E + 0] = a[M], f[E + 1] = a[M + 1], f[E + 2] = a[M + 2];
						var w = 9 * h + 3 * ((p + 1) % 3);
						f[E + 3] = a[w], f[E + 4] = a[w + 1], f[E + 5] = a[w + 2]
					}
				this.addAttribute("position", new THREE.BufferAttribute(f, 3))
			}
	}, THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry, THREE.AxisHelper = function(e) {
		e = e || 1;
		var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]),
			i = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]),
			r = new THREE.BufferGeometry;
		r.addAttribute("position", new THREE.BufferAttribute(t, 3)), r.addAttribute("color", new THREE.BufferAttribute(i, 3));
		var n = new THREE.LineBasicMaterial({
			vertexColors: THREE.VertexColors
		});
		THREE.LineSegments.call(this, r, n)
	}, THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.AxisHelper.prototype.constructor = THREE.AxisHelper, THREE.ArrowHelper = function() {
		var e = new THREE.BufferGeometry;
		e.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 1, 0], 3));
		var t = new THREE.CylinderBufferGeometry(0, .5, 1, 5, 1);
		return t.translate(0, -.5, 0),
			function(i, r, n, a, o, s) {
				THREE.Object3D.call(this), void 0 === a && (a = 16776960), void 0 === n && (n = 1), void 0 === o && (o = .2 * n), void 0 === s && (s = .2 * o), this.position.copy(r), this.line = new THREE.Line(e, new THREE.LineBasicMaterial({
					color: a
				})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new THREE.Mesh(t, new THREE.MeshBasicMaterial({
					color: a
				})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(i), this.setLength(n, o, s)
			}
	}(), THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper, THREE.ArrowHelper.prototype.setDirection = function() {
		var e, t = new THREE.Vector3;
		return function(i) {
			i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(i.z, 0, -i.x).normalize(), e = Math.acos(i.y), this.quaternion.setFromAxisAngle(t, e))
		}
	}(), THREE.ArrowHelper.prototype.setLength = function(e, t, i) {
		void 0 === t && (t = .2 * e), void 0 === i && (i = .2 * t), this.line.scale.set(1, Math.max(0, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(i, t, i), this.cone.position.y = e, this.cone.updateMatrix()
	}, THREE.ArrowHelper.prototype.setColor = function(e) {
		this.line.material.color.copy(e), this.cone.material.color.copy(e)
	}, THREE.BoxHelper = function(e, t) {
		void 0 === t && (t = 16776960);
		var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
			r = new Float32Array(24),
			n = new THREE.BufferGeometry;
		n.setIndex(new THREE.BufferAttribute(i, 1)), n.addAttribute("position", new THREE.BufferAttribute(r, 3)), THREE.LineSegments.call(this, n, new THREE.LineBasicMaterial({
			color: t
		})), void 0 !== e && this.update(e)
	}, THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.BoxHelper.prototype.constructor = THREE.BoxHelper, THREE.BoxHelper.prototype.update = function() {
		var e = new THREE.Box3;
		return function(t) {
			if(t instanceof THREE.Box3 ? e.copy(t) : e.setFromObject(t), !e.isEmpty()) {
				var i = e.min,
					r = e.max,
					n = this.geometry.attributes.position,
					a = n.array;
				a[0] = r.x, a[1] = r.y, a[2] = r.z, a[3] = i.x, a[4] = r.y, a[5] = r.z, a[6] = i.x, a[7] = i.y, a[8] = r.z, a[9] = r.x, a[10] = i.y, a[11] = r.z, a[12] = r.x, a[13] = r.y, a[14] = i.z, a[15] = i.x, a[16] = r.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[21] = r.x, a[22] = i.y, a[23] = i.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
			}
		}
	}(), THREE.BoundingBoxHelper = function(e, t) {
		var i = void 0 !== t ? t : 8947848;
		this.object = e, this.box = new THREE.Box3, THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
			color: i,
			wireframe: !0
		}))
	}, THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype), THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper, THREE.BoundingBoxHelper.prototype.update = function() {
		this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
	}, THREE.CameraHelper = function(e) {
		function t(e, t, r) {
			i(e, r), i(t, r)
		}

		function i(e, t) {
			r.vertices.push(new THREE.Vector3), r.colors.push(new THREE.Color(t)), void 0 === a[e] && (a[e] = []), a[e].push(r.vertices.length - 1)
		}
		var r = new THREE.Geometry,
			n = new THREE.LineBasicMaterial({
				color: 16777215,
				vertexColors: THREE.FaceColors
			}),
			a = {},
			o = 16755200,
			s = 16711680,
			l = 43775,
			h = 16777215,
			c = 3355443;
		t("n1", "n2", o), t("n2", "n4", o), t("n4", "n3", o), t("n3", "n1", o), t("f1", "f2", o), t("f2", "f4", o), t("f4", "f3", o), t("f3", "f1", o), t("n1", "f1", o), t("n2", "f2", o), t("n3", "f3", o), t("n4", "f4", o), t("p", "n1", s), t("p", "n2", s), t("p", "n3", s), t("p", "n4", s), t("u1", "u2", l), t("u2", "u3", l), t("u3", "u1", l), t("c", "t", h), t("p", "c", c), t("cn1", "cn2", c), t("cn3", "cn4", c), t("cf1", "cf2", c), t("cf3", "cf4", c), THREE.LineSegments.call(this, r, n), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
	}, THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.CameraHelper.prototype.constructor = THREE.CameraHelper, THREE.CameraHelper.prototype.update = function() {
		function e(e, a, o, s) {
			r.set(a, o, s).unproject(n);
			var l = i[e];
			if(void 0 !== l)
				for(var h = 0, c = l.length; c > h; h++) t.vertices[l[h]].copy(r)
		}
		var t, i, r = new THREE.Vector3,
			n = new THREE.Camera;
		return function() {
			t = this.geometry, i = this.pointMap;
			var r = 1,
				a = 1;
			n.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -r, -a, -1), e("n2", r, -a, -1), e("n3", -r, a, -1), e("n4", r, a, -1), e("f1", -r, -a, 1), e("f2", r, -a, 1), e("f3", -r, a, 1), e("f4", r, a, 1), e("u1", .7 * r, 1.1 * a, -1), e("u2", .7 * -r, 1.1 * a, -1), e("u3", 0, 2 * a, -1), e("cf1", -r, 0, 1), e("cf2", r, 0, 1), e("cf3", 0, -a, 1), e("cf4", 0, a, 1), e("cn1", -r, 0, -1), e("cn2", r, 0, -1), e("cn3", 0, -a, -1), e("cn4", 0, a, -1), t.verticesNeedUpdate = !0
		}
	}(), THREE.DirectionalLightHelper = function(e, t) {
		THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, void 0 === t && (t = 1);
		var i = new THREE.BufferGeometry;
		i.addAttribute("position", new THREE.Float32Attribute([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
		var r = new THREE.LineBasicMaterial({
			fog: !1
		});
		this.add(new THREE.Line(i, r)), i = new THREE.BufferGeometry, i.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 0, 1], 3)), this.add(new THREE.Line(i, r)), this.update()
	}, THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper, THREE.DirectionalLightHelper.prototype.dispose = function() {
		var e = this.children[0],
			t = this.children[1];
		e.geometry.dispose(), e.material.dispose(), t.geometry.dispose(), t.material.dispose()
	}, THREE.DirectionalLightHelper.prototype.update = function() {
		var e = new THREE.Vector3,
			t = new THREE.Vector3,
			i = new THREE.Vector3;
		return function() {
			e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(t, e);
			var r = this.children[0],
				n = this.children[1];
			r.lookAt(i), r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), n.lookAt(i), n.scale.z = i.length()
		}
	}(), THREE.EdgesHelper = function(e, t, i) {
		var r = void 0 !== t ? t : 16777215;
		THREE.LineSegments.call(this, new THREE.EdgesGeometry(e.geometry, i), new THREE.LineBasicMaterial({
			color: r
		})), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
	}, THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper, THREE.FaceNormalsHelper = function(e, t, i, r) {
		this.object = e, this.size = void 0 !== t ? t : 1;
		var n = void 0 !== i ? i : 16776960,
			a = void 0 !== r ? r : 1,
			o = 0,
			s = this.object.geometry;
		s instanceof THREE.Geometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
		var l = new THREE.BufferGeometry,
			h = new THREE.Float32Attribute(2 * o * 3, 3);
		l.addAttribute("position", h), THREE.LineSegments.call(this, l, new THREE.LineBasicMaterial({
			color: n,
			linewidth: a
		})), this.matrixAutoUpdate = !1, this.update()
	}, THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper, THREE.FaceNormalsHelper.prototype.update = function() {
		var e = new THREE.Vector3,
			t = new THREE.Vector3,
			i = new THREE.Matrix3;
		return function() {
			this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
			for(var r = this.object.matrixWorld, n = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, l = 0, h = 0, c = s.length; c > h; h++) {
				var u = s[h],
					p = u.normal;
				e.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(r), t.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), n.setXYZ(l, e.x, e.y, e.z), l += 1, n.setXYZ(l, t.x, t.y, t.z), l += 1
			}
			return n.needsUpdate = !0, this
		}
	}(), THREE.GridHelper = function(e, t, i, r) {
		t = t || 1, i = new THREE.Color(void 0 !== i ? i : 4473924), r = new THREE.Color(void 0 !== r ? r : 8947848);
		for(var n = t / 2, a = 2 * e / t, o = [], s = [], l = 0, h = 0, c = -e; t >= l; l++, c += a) {
			o.push(-e, 0, c, e, 0, c), o.push(c, 0, -e, c, 0, e);
			var u = l === n ? i : r;
			u.toArray(s, h), h += 3, u.toArray(s, h), h += 3, u.toArray(s, h), h += 3, u.toArray(s, h), h += 3
		}
		var p = new THREE.BufferGeometry;
		p.addAttribute("position", new THREE.Float32Attribute(o, 3)), p.addAttribute("color", new THREE.Float32Attribute(s, 3));
		var d = new THREE.LineBasicMaterial({
			vertexColors: THREE.VertexColors
		});
		THREE.LineSegments.call(this, p, d)
	}, THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.GridHelper.prototype.constructor = THREE.GridHelper, THREE.GridHelper.prototype.setColors = function() {
		console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
	}, THREE.HemisphereLightHelper = function(e, t) {
		THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new THREE.Color, new THREE.Color];
		var i = new THREE.SphereGeometry(t, 4, 2);
		i.rotateX(-Math.PI / 2);
		for(var r = 0, n = 8; n > r; r++) i.faces[r].color = this.colors[4 > r ? 0 : 1];
		var a = new THREE.MeshBasicMaterial({
			vertexColors: THREE.FaceColors,
			wireframe: !0
		});
		this.lightSphere = new THREE.Mesh(i, a), this.add(this.lightSphere), this.update()
	}, THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper, THREE.HemisphereLightHelper.prototype.dispose = function() {
		this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
	}, THREE.HemisphereLightHelper.prototype.update = function() {
		var e = new THREE.Vector3;
		return function() {
			this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
		}
	}(), THREE.PointLightHelper = function(e, t) {
		this.light = e, this.light.updateMatrixWorld();
		var i = new THREE.SphereBufferGeometry(t, 4, 2),
			r = new THREE.MeshBasicMaterial({
				wireframe: !0,
				fog: !1
			});
		r.color.copy(this.light.color).multiplyScalar(this.light.intensity), THREE.Mesh.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
	}, THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype), THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper, THREE.PointLightHelper.prototype.dispose = function() {
		this.geometry.dispose(), this.material.dispose()
	}, THREE.PointLightHelper.prototype.update = function() {
		this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
	}, THREE.SkeletonHelper = function(e) {
		this.bones = this.getBoneList(e);
		for(var t = new THREE.Geometry, i = 0; i < this.bones.length; i++) {
			var r = this.bones[i];
			r.parent instanceof THREE.Bone && (t.vertices.push(new THREE.Vector3), t.vertices.push(new THREE.Vector3), t.colors.push(new THREE.Color(0, 0, 1)), t.colors.push(new THREE.Color(0, 1, 0)))
		}
		t.dynamic = !0;
		var n = new THREE.LineBasicMaterial({
			vertexColors: THREE.VertexColors,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		});
		THREE.LineSegments.call(this, t, n), this.root = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.update()
	}, THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper, THREE.SkeletonHelper.prototype.getBoneList = function(e) {
		var t = [];
		e instanceof THREE.Bone && t.push(e);
		for(var i = 0; i < e.children.length; i++) t.push.apply(t, this.getBoneList(e.children[i]));
		return t
	}, THREE.SkeletonHelper.prototype.update = function() {
		for(var e = this.geometry, t = (new THREE.Matrix4).getInverse(this.root.matrixWorld), i = new THREE.Matrix4, r = 0, n = 0; n < this.bones.length; n++) {
			var a = this.bones[n];
			a.parent instanceof THREE.Bone && (i.multiplyMatrices(t, a.matrixWorld), e.vertices[r].setFromMatrixPosition(i), i.multiplyMatrices(t, a.parent.matrixWorld), e.vertices[r + 1].setFromMatrixPosition(i), r += 2)
		}
		e.verticesNeedUpdate = !0, e.computeBoundingSphere()
	}, THREE.SpotLightHelper = function(e) {
		THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
		for(var t = new THREE.BufferGeometry, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, n = 1, a = 32; a > r; r++, n++) {
			var o = r / a * Math.PI * 2,
				s = n / a * Math.PI * 2;
			i.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
		}
		t.addAttribute("position", new THREE.Float32Attribute(i, 3));
		var l = new THREE.LineBasicMaterial({
			fog: !1
		});
		this.cone = new THREE.LineSegments(t, l), this.add(this.cone), this.update()
	}, THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper, THREE.SpotLightHelper.prototype.dispose = function() {
		this.cone.geometry.dispose(), this.cone.material.dispose()
	}, THREE.SpotLightHelper.prototype.update = function() {
		var e = new THREE.Vector3,
			t = new THREE.Vector3;
		return function() {
			var i = this.light.distance ? this.light.distance : 1e3,
				r = i * Math.tan(this.light.angle);
			this.cone.scale.set(r, r, i), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
		}
	}(), THREE.VertexNormalsHelper = function(e, t, i, r) {
		this.object = e, this.size = void 0 !== t ? t : 1;
		var n = void 0 !== i ? i : 16711680,
			a = void 0 !== r ? r : 1,
			o = 0,
			s = this.object.geometry;
		s instanceof THREE.Geometry ? o = 3 * s.faces.length : s instanceof THREE.BufferGeometry && (o = s.attributes.normal.count);
		var l = new THREE.BufferGeometry,
			h = new THREE.Float32Attribute(2 * o * 3, 3);
		l.addAttribute("position", h), THREE.LineSegments.call(this, l, new THREE.LineBasicMaterial({
			color: n,
			linewidth: a
		})), this.matrixAutoUpdate = !1, this.update()
	}, THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper, THREE.VertexNormalsHelper.prototype.update = function() {
		var e = new THREE.Vector3,
			t = new THREE.Vector3,
			i = new THREE.Matrix3;
		return function() {
			var r = ["a", "b", "c"];
			this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
			var n = this.object.matrixWorld,
				a = this.geometry.attributes.position,
				o = this.object.geometry;
			if(o instanceof THREE.Geometry)
				for(var s = o.vertices, l = o.faces, h = 0, c = 0, u = l.length; u > c; c++)
					for(var p = l[c], d = 0, f = p.vertexNormals.length; f > d; d++) {
						var m = s[p[r[d]]],
							E = p.vertexNormals[d];
						e.copy(m).applyMatrix4(n), t.copy(E).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), a.setXYZ(h, e.x, e.y, e.z), h += 1, a.setXYZ(h, t.x, t.y, t.z), h += 1
					} else if(o instanceof THREE.BufferGeometry)
						for(var g = o.attributes.position, v = o.attributes.normal, h = 0, d = 0, f = g.count; f > d; d++) e.set(g.getX(d), g.getY(d), g.getZ(d)).applyMatrix4(n), t.set(v.getX(d), v.getY(d), v.getZ(d)), t.applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), a.setXYZ(h, e.x, e.y, e.z), h += 1, a.setXYZ(h, t.x, t.y, t.z), h += 1;
			return a.needsUpdate = !0, this
		}
	}(), THREE.WireframeHelper = function(e, t) {
		var i = void 0 !== t ? t : 16777215;
		THREE.LineSegments.call(this, new THREE.WireframeGeometry(e.geometry), new THREE.LineBasicMaterial({
			color: i
		})), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
	}, THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper, THREE.ImmediateRenderObject = function(e) {
		THREE.Object3D.call(this), this.material = e, this.render = function() {}
	}, THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype), THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject, THREE.MorphBlendMesh = function(e, t) {
		THREE.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
		var i = this.geometry.morphTargets.length,
			r = "__default",
			n = 0,
			a = i - 1,
			o = i / 1;
		this.createAnimation(r, n, a, o), this.setAnimationWeight(r, 1)
	}, THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh, THREE.MorphBlendMesh.prototype.createAnimation = function(e, t, i, r) {
		var n = {
			start: t,
			end: i,
			length: i - t + 1,
			fps: r,
			duration: (i - t) / r,
			lastFrame: 0,
			currentFrame: 0,
			active: !1,
			time: 0,
			direction: 1,
			weight: 1,
			directionBackwards: !1,
			mirroredLoop: !1
		};
		this.animationsMap[e] = n, this.animationsList.push(n)
	}, THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
		for(var t, i = /([a-z]+)_?(\d+)/i, r = {}, n = this.geometry, a = 0, o = n.morphTargets.length; o > a; a++) {
			var s = n.morphTargets[a],
				l = s.name.match(i);
			if(l && l.length > 1) {
				var h = l[1];
				r[h] || (r[h] = {
					start: 1 / 0,
					end: -1 / 0
				});
				var c = r[h];
				a < c.start && (c.start = a), a > c.end && (c.end = a), t || (t = h)
			}
		}
		for(var h in r) {
			var c = r[h];
			this.createAnimation(h, c.start, c.end, e)
		}
		this.firstAnimation = t
	}, THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
		var t = this.animationsMap[e];
		t && (t.direction = 1, t.directionBackwards = !1)
	}, THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
		var t = this.animationsMap[e];
		t && (t.direction = -1, t.directionBackwards = !0)
	}, THREE.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
		var i = this.animationsMap[e];
		i && (i.fps = t, i.duration = (i.end - i.start) / i.fps)
	}, THREE.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
		var i = this.animationsMap[e];
		i && (i.duration = t, i.fps = (i.end - i.start) / i.duration)
	}, THREE.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
		var i = this.animationsMap[e];
		i && (i.weight = t)
	}, THREE.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
		var i = this.animationsMap[e];
		i && (i.time = t)
	}, THREE.MorphBlendMesh.prototype.getAnimationTime = function(e) {
		var t = 0,
			i = this.animationsMap[e];
		return i && (t = i.time), t
	}, THREE.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
		var t = -1,
			i = this.animationsMap[e];
		return i && (t = i.duration), t
	}, THREE.MorphBlendMesh.prototype.playAnimation = function(e) {
		var t = this.animationsMap[e];
		t ? (t.time = 0, t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
	}, THREE.MorphBlendMesh.prototype.stopAnimation = function(e) {
		var t = this.animationsMap[e];
		t && (t.active = !1)
	}, THREE.MorphBlendMesh.prototype.update = function(e) {
		for(var t = 0, i = this.animationsList.length; i > t; t++) {
			var r = this.animationsList[t];
			if(r.active) {
				var n = r.duration / r.length;
				r.time += r.direction * e, r.mirroredLoop ? (r.time > r.duration || r.time < 0) && (r.direction *= -1, r.time > r.duration && (r.time = r.duration, r.directionBackwards = !0), r.time < 0 && (r.time = 0, r.directionBackwards = !1)) : (r.time = r.time % r.duration, r.time < 0 && (r.time += r.duration));
				var a = r.start + THREE.Math.clamp(Math.floor(r.time / n), 0, r.length - 1),
					o = r.weight;
				a !== r.currentFrame && (this.morphTargetInfluences[r.lastFrame] = 0, this.morphTargetInfluences[r.currentFrame] = 1 * o, this.morphTargetInfluences[a] = 0, r.lastFrame = r.currentFrame, r.currentFrame = a);
				var s = r.time % n / n;
				r.directionBackwards && (s = 1 - s), r.currentFrame !== r.lastFrame ? (this.morphTargetInfluences[r.currentFrame] = s * o, this.morphTargetInfluences[r.lastFrame] = (1 - s) * o) : this.morphTargetInfluences[r.currentFrame] = o
			}
		}
	}, THREE.OBJLoader = function(e) {
		this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.materials = null, this.regexp = {
			vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
			normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
			uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
			face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
			face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
			face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
			face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
			object_pattern: /^[og]\s*(.+)?/,
			smoothing_pattern: /^s\s+(\d+|on|off)/,
			material_library_pattern: /^mtllib /,
			material_use_pattern: /^usemtl /
		}
	}, THREE.OBJLoader.prototype = {
		constructor: THREE.OBJLoader,
		load: function(e, t, i, r) {
			var n = this,
				a = new THREE.XHRLoader(n.manager);
			a.setPath(this.path), a.load(e, function(e) {
				t(n.parse(e))
			}, i, r)
		},
		setPath: function(e) {
			this.path = e
		},
		setMaterials: function(e) {
			this.materials = e
		},
		_createParserState: function() {
			var e = {
				objects: [],
				object: {},
				vertices: [],
				normals: [],
				uvs: [],
				materialLibraries: [],
				startObject: function(e, t) {
					if(this.object && this.object.fromDeclaration === !1) return this.object.name = e, void(this.object.fromDeclaration = t !== !1);
					this.object && "function" == typeof this.object._finalize && this.object._finalize();
					var i = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
					if(this.object = {
							name: e || "",
							fromDeclaration: t !== !1,
							geometry: {
								vertices: [],
								normals: [],
								uvs: []
							},
							materials: [],
							smooth: !0,
							startMaterial: function(e, t) {
								var i = this._finalize(!1);
								i && (i.inherited || i.groupCount <= 0) && this.materials.splice(i.index, 1);
								var r = {
									index: this.materials.length,
									name: e || "",
									mtllib: Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "",
									smooth: void 0 !== i ? i.smooth : this.smooth,
									groupStart: void 0 !== i ? i.groupEnd : 0,
									groupEnd: -1,
									groupCount: -1,
									inherited: !1,
									clone: function(e) {
										return {
											index: "number" == typeof e ? e : this.index,
											name: this.name,
											mtllib: this.mtllib,
											smooth: this.smooth,
											groupStart: this.groupEnd,
											groupEnd: -1,
											groupCount: -1,
											inherited: !1
										}
									}
								};
								return this.materials.push(r), r
							},
							currentMaterial: function() {
								return this.materials.length > 0 ? this.materials[this.materials.length - 1] : void 0
							},
							_finalize: function(e) {
								var t = this.currentMaterial();
								return t && -1 === t.groupEnd && (t.groupEnd = this.geometry.vertices.length / 3, t.groupCount = t.groupEnd - t.groupStart, t.inherited = !1), e !== !1 && 0 === this.materials.length && this.materials.push({
									name: "",
									smooth: this.smooth
								}), t
							}
						}, i && i.name && "function" == typeof i.clone) {
						var r = i.clone(0);
						r.inherited = !0, this.object.materials.push(r)
					}
					this.objects.push(this.object)
				},
				finalize: function() {
					this.object && "function" == typeof this.object._finalize && this.object._finalize()
				},
				parseVertexIndex: function(e, t) {
					var i = parseInt(e, 10);
					return 3 * (i >= 0 ? i - 1 : i + t / 3)
				},
				parseNormalIndex: function(e, t) {
					var i = parseInt(e, 10);
					return 3 * (i >= 0 ? i - 1 : i + t / 3)
				},
				parseUVIndex: function(e, t) {
					var i = parseInt(e, 10);
					return 2 * (i >= 0 ? i - 1 : i + t / 2)
				},
				addVertex: function(e, t, i) {
					var r = this.vertices,
						n = this.object.geometry.vertices;
					n.push(r[e + 0]), n.push(r[e + 1]), n.push(r[e + 2]), n.push(r[t + 0]), n.push(r[t + 1]), n.push(r[t + 2]), n.push(r[i + 0]), n.push(r[i + 1]), n.push(r[i + 2])
				},
				addVertexLine: function(e) {
					var t = this.vertices,
						i = this.object.geometry.vertices;
					i.push(t[e + 0]), i.push(t[e + 1]), i.push(t[e + 2])
				},
				addNormal: function(e, t, i) {
					var r = this.normals,
						n = this.object.geometry.normals;
					n.push(r[e + 0]), n.push(r[e + 1]), n.push(r[e + 2]), n.push(r[t + 0]), n.push(r[t + 1]), n.push(r[t + 2]), n.push(r[i + 0]), n.push(r[i + 1]), n.push(r[i + 2])
				},
				addUV: function(e, t, i) {
					var r = this.uvs,
						n = this.object.geometry.uvs;
					n.push(r[e + 0]), n.push(r[e + 1]), n.push(r[t + 0]), n.push(r[t + 1]), n.push(r[i + 0]), n.push(r[i + 1])
				},
				addUVLine: function(e) {
					var t = this.uvs,
						i = this.object.geometry.uvs;
					i.push(t[e + 0]), i.push(t[e + 1])
				},
				addFace: function(e, t, i, r, n, a, o, s, l, h, c, u) {
					var p, d = this.vertices.length,
						f = this.parseVertexIndex(e, d),
						m = this.parseVertexIndex(t, d),
						E = this.parseVertexIndex(i, d);
					if(void 0 === r ? this.addVertex(f, m, E) : (p = this.parseVertexIndex(r, d), this.addVertex(f, m, p), this.addVertex(m, E, p)), void 0 !== n) {
						var g = this.uvs.length;
						f = this.parseUVIndex(n, g), m = this.parseUVIndex(a, g), E = this.parseUVIndex(o, g), void 0 === r ? this.addUV(f, m, E) : (p = this.parseUVIndex(s, g), this.addUV(f, m, p), this.addUV(m, E, p))
					}
					if(void 0 !== l) {
						var v = this.normals.length;
						f = this.parseNormalIndex(l, v), m = l === h ? f : this.parseNormalIndex(h, v), E = l === c ? f : this.parseNormalIndex(c, v), void 0 === r ? this.addNormal(f, m, E) : (p = this.parseNormalIndex(u, v), this.addNormal(f, m, p), this.addNormal(m, E, p))
					}
				},
				addLineGeometry: function(e, t) {
					this.object.geometry.type = "Line";
					for(var i = this.vertices.length, r = this.uvs.length, n = 0, a = e.length; a > n; n++) this.addVertexLine(this.parseVertexIndex(e[n], i));
					for(var o = 0, a = t.length; a > o; o++) this.addUVLine(this.parseUVIndex(t[o], r))
				}
			};
			return e.startObject("", !1), e
		},
		parse: function(e) {
			var t = this._createParserState(); - 1 !== e.indexOf("\r\n") && (e = e.replace("\r\n", "\n"));
			for(var i = e.split("\n"), r = "", n = "", a = "", o = 0, s = [], l = "function" == typeof "".trimLeft, h = 0, c = i.length; c > h; h++)
				if(r = i[h], r = l ? r.trimLeft() : r.trim(), o = r.length, 0 !== o && (n = r.charAt(0), "#" !== n))
					if("v" === n)
						if(a = r.charAt(1), " " === a && null !== (s = this.regexp.vertex_pattern.exec(r))) t.vertices.push(parseFloat(s[1]), parseFloat(s[2]), parseFloat(s[3]));
						else if("n" === a && null !== (s = this.regexp.normal_pattern.exec(r))) t.normals.push(parseFloat(s[1]), parseFloat(s[2]), parseFloat(s[3]));
			else {
				if("t" !== a || null === (s = this.regexp.uv_pattern.exec(r))) throw new Error("Unexpected vertex/normal/uv line: '" + r + "'");
				t.uvs.push(parseFloat(s[1]), parseFloat(s[2]))
			} else if("f" === n)
				if(null !== (s = this.regexp.face_vertex_uv_normal.exec(r))) t.addFace(s[1], s[4], s[7], s[10], s[2], s[5], s[8], s[11], s[3], s[6], s[9], s[12]);
				else if(null !== (s = this.regexp.face_vertex_uv.exec(r))) t.addFace(s[1], s[3], s[5], s[7], s[2], s[4], s[6], s[8]);
			else if(null !== (s = this.regexp.face_vertex_normal.exec(r))) t.addFace(s[1], s[3], s[5], s[7], void 0, void 0, void 0, void 0, s[2], s[4], s[6], s[8]);
			else {
				if(null === (s = this.regexp.face_vertex.exec(r))) throw new Error("Unexpected face line: '" + r + "'");
				t.addFace(s[1], s[2], s[3], s[4])
			} else if("l" === n) {
				var u = r.substring(1).trim().split(" "),
					p = [],
					d = [];
				if(-1 === r.indexOf("/")) p = u;
				else
					for(var f = 0, m = u.length; m > f; f++) {
						var E = u[f].split("/");
						"" !== E[0] && p.push(E[0]), "" !== E[1] && d.push(E[1])
					}
				t.addLineGeometry(p, d)
			} else if(null !== (s = this.regexp.object_pattern.exec(r))) {
				var g = s[0].substr(1).trim();
				t.startObject(g)
			} else if(this.regexp.material_use_pattern.test(r)) t.object.startMaterial(r.substring(7).trim(), t.materialLibraries);
			else if(this.regexp.material_library_pattern.test(r)) t.materialLibraries.push(r.substring(7).trim());
			else {
				if(null === (s = this.regexp.smoothing_pattern.exec(r))) {
					if("\x00" === r) continue;
					throw new Error("Unexpected line: '" + r + "'")
				}
				var v = s[1].trim().toLowerCase();
				t.object.smooth = "1" === v || "on" === v;
				var T = t.object.currentMaterial();
				T && (T.smooth = t.object.smooth)
			}
			t.finalize();
			var y = new THREE.Group;
			y.materialLibraries = [].concat(t.materialLibraries);
			for(var h = 0, c = t.objects.length; c > h; h++) {
				var _ = t.objects[h],
					R = _.geometry,
					x = _.materials,
					b = "Line" === R.type;
				if(0 !== R.vertices.length) {
					var w = new THREE.BufferGeometry;
					w.addAttribute("position", new THREE.BufferAttribute(new Float32Array(R.vertices), 3)), R.normals.length > 0 ? w.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(R.normals), 3)) : w.computeVertexNormals(), R.uvs.length > 0 && w.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(R.uvs), 2));
					for(var H = [], M = 0, S = x.length; S > M; M++) {
						var A = x[M],
							T = void 0;
						if(null !== this.materials && (T = this.materials.create(A.name), b && T && !(T instanceof THREE.LineBasicMaterial))) {
							var C = new THREE.LineBasicMaterial;
							C.copy(T), T = C
						}
						T || (T = b ? new THREE.LineBasicMaterial : new THREE.MeshPhongMaterial, T.name = A.name), T.shading = A.smooth ? THREE.SmoothShading : THREE.FlatShading, H.push(T)
					}
					var L;
					if(H.length > 1) {
						for(var M = 0, S = x.length; S > M; M++) {
							var A = x[M];
							w.addGroup(A.groupStart, A.groupCount, M)
						}
						var P = new THREE.MultiMaterial(H);
						L = b ? new THREE.Line(w, P) : new THREE.Mesh(w, P)
					} else L = b ? new THREE.Line(w, H[0]) : new THREE.Mesh(w, H[0]);
					L.name = _.name, y.add(L)
				}
			}
			return y
		}
	},
	function() {
		if("performance" in window == 0 && (window.performance = {}), Date.now = Date.now || function() {
				return(new Date).getTime()
			}, "now" in window.performance == 0) {
			var e = Date.now();
			performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
				return Date.now() - e
			}
		}
	}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(e) {
	"use strict";
	var i = e.GreenSockGlobals || e,
		r = function(e) {
			var t, r = e.split("."),
				n = i;
			for(t = 0; t < r.length; t++) n[r[t]] = n = n[r[t]] || {};
			return n
		},
		n = r("com.greensock.utils"),
		a = function(e) {
			var t = e.nodeType,
				i = "";
			if(1 === t || 9 === t || 11 === t) {
				if("string" == typeof e.textContent) return e.textContent;
				for(e = e.firstChild; e; e = e.nextSibling) i += a(e)
			} else if(3 === t || 4 === t) return e.nodeValue;
			return i
		},
		o = document,
		l = o.defaultView ? o.defaultView.getComputedStyle : function() {},
		h = /([A-Z])/g,
		c = function(e, t, i, r) {
			var n;
			return(i = i || l(e, null)) ? (e = i.getPropertyValue(t.replace(h, "-$1").toLowerCase()), n = e || i.length ? e : i[t]) : e.currentStyle && (i = e.currentStyle, n = i[t]), r ? n : parseInt(n, 10) || 0
		},
		u = function(e) {
			return e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? !0 : !1
		},
		p = function(e) {
			var t, i, r, n = [],
				a = e.length;
			for(t = 0; a > t; t++)
				if(i = e[t], u(i))
					for(r = i.length, r = 0; r < i.length; r++) n.push(i[r]);
				else n.push(i);
			return n
		},
		d = ")eefec303079ad17405c",
		f = /(?:<br>|<br\/>|<br \/>)/gi,
		m = o.all && !o.addEventListener,
		E = "<div style='position:relative;display:inline-block;" + (m ? "*display:inline;*zoom:1;'" : "'"),
		g = function(e) {
			e = e || "";
			var t = -1 !== e.indexOf("++"),
				i = 1;
			return t && (e = e.split("++").join("")),
				function() {
					return E + (e ? " class='" + e + (t ? i++ : "") + "'>" : ">")
				}
		},
		v = "",
		T = "SplitText",
		y = function() {
			return !0
		}(e ? e.location.host : ""),
		_ = n.SplitText = i.SplitText = function(i, r) {
			if("string" == typeof i && (i = _.selector(i)), !i) throw "cannot split a null element.";
			return y ? (this.elements = u(i) ? p(i) : [i], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = r || {}, void this.split(r)) : (e.location.href = "http://" + s + t + "?plugin=" + T + "&source=" + v, !1)
		},
		R = function(e, t, i) {
			var r = e.nodeType;
			if(1 === r || 9 === r || 11 === r)
				for(e = e.firstChild; e; e = e.nextSibling) R(e, t, i);
			else(3 === r || 4 === r) && (e.nodeValue = e.nodeValue.split(t).join(i))
		},
		x = function(e, t) {
			for(var i = t.length; --i > -1;) e.push(t[i])
		},
		b = function(e, t, i, r, n) {
			f.test(e.innerHTML) && (e.innerHTML = e.innerHTML.replace(f, d));
			var s, h, u, p, m, E, v, T, y, _, b, w, H, M, S = a(e),
				A = t.type || t.split || "chars,words,lines",
				C = -1 !== A.indexOf("lines") ? [] : null,
				L = -1 !== A.indexOf("words"),
				P = -1 !== A.indexOf("chars"),
				D = "absolute" === t.position || t.absolute === !0,
				O = D ? "&#173; " : " ",
				I = -999,
				B = l(e),
				U = c(e, "paddingLeft", B),
				F = c(e, "borderBottomWidth", B) + c(e, "borderTopWidth", B),
				N = c(e, "borderLeftWidth", B) + c(e, "borderRightWidth", B),
				k = c(e, "paddingTop", B) + c(e, "paddingBottom", B),
				G = c(e, "paddingLeft", B) + c(e, "paddingRight", B),
				V = c(e, "textAlign", B, !0),
				z = e.clientHeight,
				j = e.clientWidth,
				W = "</div>",
				X = g(t.wordsClass),
				q = g(t.charsClass),
				Y = -1 !== (t.linesClass || "").indexOf("++"),
				$ = t.linesClass,
				Z = -1 !== S.indexOf("<"),
				K = !0,
				Q = [],
				J = [],
				et = [];
			for(Y && ($ = $.split("++").join("")), Z && (S = S.split("<").join("{{LT}}")), s = S.length, p = X(), m = 0; s > m; m++)
				if(v = S.charAt(m), ")" === v && S.substr(m, 20) === d) p += (K ? W : "") + "<BR/>", K = !1, m !== s - 20 && S.substr(m + 20, 20) !== d && (p += " " + X(), K = !0), m += 19;
				else if(" " === v && " " !== S.charAt(m - 1) && m !== s - 1 && S.substr(m - 20, 20) !== d) {
				for(p += K ? W : "", K = !1;
					" " === S.charAt(m + 1);) p += O, m++;
				(")" !== S.charAt(m + 1) || S.substr(m + 1, 20) !== d) && (p += O + X(), K = !0)
			} else p += P && " " !== v ? q() + v + "</div>" : v;
			for(e.innerHTML = p + (K ? W : ""), Z && R(e, "{{LT}}", "<"), E = e.getElementsByTagName("*"), s = E.length, T = [], m = 0; s > m; m++) T[m] = E[m];
			if(C || D)
				for(m = 0; s > m; m++) y = T[m], u = y.parentNode === e, (u || D || P && !L) && (_ = y.offsetTop, C && u && _ !== I && "BR" !== y.nodeName && (h = [], C.push(h), I = _), D && (y._x = y.offsetLeft, y._y = _, y._w = y.offsetWidth, y._h = y.offsetHeight), C && (L !== u && P || (h.push(y), y._x -= U), u && m && (T[m - 1]._wordEnd = !0), "BR" === y.nodeName && y.nextSibling && "BR" === y.nextSibling.nodeName && C.push([])));
			for(m = 0; s > m; m++) y = T[m], u = y.parentNode === e, "BR" !== y.nodeName ? (D && (w = y.style, L || u || (y._x += y.parentNode._x, y._y += y.parentNode._y), w.left = y._x + "px", w.top = y._y + "px", w.position = "absolute", w.display = "block", w.width = y._w + 1 + "px", w.height = y._h + "px"), L ? u && "" !== y.innerHTML ? J.push(y) : P && Q.push(y) : u ? (e.removeChild(y), T.splice(m--, 1), s--) : !u && P && (_ = !C && !D && y.nextSibling, e.appendChild(y), _ || e.appendChild(o.createTextNode(" ")), Q.push(y))) : C || D ? (e.removeChild(y), T.splice(m--, 1), s--) : L || e.appendChild(y);
			if(C) {
				for(D && (b = o.createElement("div"), e.appendChild(b), H = b.offsetWidth + "px", _ = b.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(b)), w = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
				for(M = !D || !L && !P, m = 0; m < C.length; m++) {
					for(h = C[m], b = o.createElement("div"), b.style.cssText = "display:block;text-align:" + V + ";position:" + (D ? "absolute;" : "relative;"), $ && (b.className = $ + (Y ? m + 1 : "")), et.push(b), s = h.length, E = 0; s > E; E++) "BR" !== h[E].nodeName && (y = h[E], b.appendChild(y), M && (y._wordEnd || L) && b.appendChild(o.createTextNode(" ")), D && (0 === E && (b.style.top = y._y + "px", b.style.left = U + _ + "px"), y.style.top = "0px", _ && (y.style.left = y._x - _ + "px")));
					0 === s && (b.innerHTML = "&nbsp;"), L || P || (b.innerHTML = a(b).split(String.fromCharCode(160)).join(" ")), D && (b.style.width = H, b.style.height = y._h + "px"), e.appendChild(b)
				}
				e.style.cssText = w
			}
			D && (z > e.clientHeight && (e.style.height = z - k + "px", e.clientHeight < z && (e.style.height = z + F + "px")), j > e.clientWidth && (e.style.width = j - G + "px", e.clientWidth < j && (e.style.width = j + N + "px"))), x(i, Q), x(r, J), x(n, et)
		},
		w = _.prototype;
	w.split = function(e) {
		this.isSplit && this.revert(), this.vars = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
		for(var t = this.elements.length; --t > -1;) this._originals[t] = this.elements[t].innerHTML, b(this.elements[t], this.vars, this.chars, this.words, this.lines);
		return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
	}, w.revert = function() {
		if(!this._originals) throw "revert() call wasn't scoped properly.";
		for(var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
		return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
	}, _.selector = e.$ || e.jQuery || function(t) {
		var i = e.$ || e.jQuery;
		return i ? (_.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
	}, _.version = "0.3.3"
}(_gsScope),
function(e) {
	"use strict";
	var t = function() {
		return(_gsScope.GreenSockGlobals || _gsScope)[e]
	};
	"function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (module.exports = t())
}("SplitText");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
		"use strict";
		_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
				var r = function(e) {
						var t, i = [],
							r = e.length;
						for(t = 0; t !== r; i.push(e[t++]));
						return i
					},
					n = function(e, t, i) {
						var r, n, a = e.cycle;
						for(r in a) n = a[r], e[r] = "function" == typeof n ? n.call(t[i], i) : n[i % n.length];
						delete e.cycle
					},
					a = function(e, t, r) {
						i.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = a.prototype.render
					},
					o = 1e-10,
					s = i._internals,
					l = s.isSelector,
					h = s.isArray,
					c = a.prototype = i.to({}, .1, {}),
					u = [];
				a.version = "1.18.5", c.constructor = a, c.kill()._gc = !1, a.killTweensOf = a.killDelayedCallsTo = i.killTweensOf, a.getTweensOf = i.getTweensOf, a.lagSmoothing = i.lagSmoothing, a.ticker = i.ticker, a.render = i.render, c.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
				}, c.updateTo = function(e, t) {
					var r, n = this.ratio,
						a = this.vars.immediateRender || e.immediateRender;
					t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
					for(r in e) this.vars[r] = e[r];
					if(this._initted || a)
						if(t) this._initted = !1, a && this.render(0, !0, !0);
						else if(this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
						var o = this._totalTime;
						this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
					} else if(this._initted = !1, this._init(), this._time > 0 || a)
						for(var s, l = 1 / (1 - n), h = this._firstPT; h;) s = h.s + h.c, h.c *= l, h.s = s - h.c, h = h._next;
					return this
				}, c.render = function(e, t, i) {
					this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
					var r, n, a, l, h, c, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
						f = this._time,
						m = this._totalTime,
						E = this._cycle,
						g = this._duration,
						v = this._rawPrevTime;
					if(e >= d - 1e-7 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > v || 0 >= e && e >= -1e-7 || v === o && "isPause" !== this.data) && v !== e && (i = !0, v > o && (n = "onReverseComplete")), this._rawPrevTime = p = !t || e || v === e ? e : o)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (n = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = p = !t || e || v === e ? e : o)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && e >= m && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, c = this._easeType, u = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : this._time / g < .5 ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), f === this._time && !i && E === this._cycle) return void(m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
					if(!this._initted) {
						if(this._init(), !this._initted || this._gc) return;
						if(!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = m, this._rawPrevTime = v, this._cycle = E, s.lazyTweens.push(this), void(this._lazy = [e, t]);
						this._time && !r ? this.ratio = this._ease.getRatio(this._time / g) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for(this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && e >= 0 && (this._active = !0), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
					this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== E && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === g && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
				}, a.to = function(e, t, i) {
					return new a(e, t, i)
				}, a.from = function(e, t, i) {
					return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new a(e, t, i)
				}, a.fromTo = function(e, t, i, r) {
					return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new a(e, t, r)
				}, a.staggerTo = a.allTo = function(e, t, o, s, c, p, d) {
					s = s || 0;
					var f, m, E, g, v = 0,
						T = [],
						y = function() {
							o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(d || o.callbackScope || this, p || u)
						},
						_ = o.cycle,
						R = o.startAt && o.startAt.cycle;
					for(h(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = r(e))), e = e || [], 0 > s && (e = r(e), e.reverse(), s *= -1), f = e.length - 1, E = 0; f >= E; E++) {
						m = {};
						for(g in o) m[g] = o[g];
						if(_ && (n(m, e, E), null != m.duration && (t = m.duration, delete m.duration)), R) {
							R = m.startAt = {};
							for(g in o.startAt) R[g] = o.startAt[g];
							n(m.startAt, e, E)
						}
						m.delay = v + (m.delay || 0), E === f && c && (m.onComplete = y), T[E] = new a(e[E], t, m), v += s
					}
					return T
				}, a.staggerFrom = a.allFrom = function(e, t, i, r, n, o, s) {
					return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, a.staggerTo(e, t, i, r, n, o, s)
				}, a.staggerFromTo = a.allFromTo = function(e, t, i, r, n, o, s, l) {
					return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, a.staggerTo(e, t, r, n, o, s, l)
				}, a.delayedCall = function(e, t, i, r, n) {
					return new a(t, 0, {
						delay: e,
						onComplete: t,
						onCompleteParams: i,
						callbackScope: r,
						onReverseComplete: t,
						onReverseCompleteParams: i,
						immediateRender: !1,
						useFrames: n,
						overwrite: 0
					})
				}, a.set = function(e, t) {
					return new a(e, 0, t)
				}, a.isTweening = function(e) {
					return i.getTweensOf(e, !0).length > 0
				};
				var p = function(e, t) {
						for(var r = [], n = 0, a = e._first; a;) a instanceof i ? r[n++] = a : (t && (r[n++] = a), r = r.concat(p(a, t)), n = r.length), a = a._next;
						return r
					},
					d = a.getAllTweens = function(t) {
						return p(e._rootTimeline, t).concat(p(e._rootFramesTimeline, t))
					};
				a.killAll = function(e, i, r, n) {
					null == i && (i = !0), null == r && (r = !0);
					var a, o, s, l = d(0 != n),
						h = l.length,
						c = i && r && n;
					for(s = 0; h > s; s++) o = l[s], (c || o instanceof t || (a = o.target === o.vars.onComplete) && r || i && !a) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
				}, a.killChildTweensOf = function(e, t) {
					if(null != e) {
						var n, o, c, u, p, d = s.tweenLookup;
						if("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = r(e)), h(e))
							for(u = e.length; --u > -1;) a.killChildTweensOf(e[u], t);
						else {
							n = [];
							for(c in d)
								for(o = d[c].target.parentNode; o;) o === e && (n = n.concat(d[c].tweens)), o = o.parentNode;
							for(p = n.length, u = 0; p > u; u++) t && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
						}
					}
				};
				var f = function(e, i, r, n) {
					i = i !== !1, r = r !== !1, n = n !== !1;
					for(var a, o, s = d(n), l = i && r && n, h = s.length; --h > -1;) o = s[h], (l || o instanceof t || (a = o.target === o.vars.onComplete) && r || i && !a) && o.paused(e)
				};
				return a.pauseAll = function(e, t, i) {
					f(!0, e, t, i)
				}, a.resumeAll = function(e, t, i) {
					f(!1, e, t, i)
				}, a.globalTimeScale = function(t) {
					var r = e._rootTimeline,
						n = i.ticker.time;
					return arguments.length ? (t = t || o, r._startTime = n - (n - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, n = i.ticker.frame, r._startTime = n - (n - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
				}, c.progress = function(e, t) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
				}, c.totalProgress = function(e, t) {
					return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
				}, c.time = function(e, t) {
					return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
				}, c.duration = function(t) {
					return arguments.length ? e.prototype.duration.call(this, t) : this._duration
				}, c.totalDuration = function(e) {
					return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
				}, c.repeat = function(e) {
					return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
				}, c.repeatDelay = function(e) {
					return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
				}, c.yoyo = function(e) {
					return arguments.length ? (this._yoyo = e, this) : this._yoyo
				}, a
			}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
				var r = function(e) {
						t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
						var i, r, n = this.vars;
						for(r in n) i = n[r], l(i) && -1 !== i.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(i));
						l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
					},
					n = 1e-10,
					a = i._internals,
					o = r._internals = {},
					s = a.isSelector,
					l = a.isArray,
					h = a.lazyTweens,
					c = a.lazyRender,
					u = _gsScope._gsDefine.globals,
					p = function(e) {
						var t, i = {};
						for(t in e) i[t] = e[t];
						return i
					},
					d = function(e, t, i) {
						var r, n, a = e.cycle;
						for(r in a) n = a[r], e[r] = "function" == typeof n ? n.call(t[i], i) : n[i % n.length];
						delete e.cycle
					},
					f = o.pauseCallback = function() {},
					m = function(e) {
						var t, i = [],
							r = e.length;
						for(t = 0; t !== r; i.push(e[t++]));
						return i
					},
					E = r.prototype = new t;
				return r.version = "1.18.5", E.constructor = r, E.kill()._gc = E._forcingPlayhead = E._hasPause = !1, E.to = function(e, t, r, n) {
					var a = r.repeat && u.TweenMax || i;
					return t ? this.add(new a(e, t, r), n) : this.set(e, r, n)
				}, E.from = function(e, t, r, n) {
					return this.add((r.repeat && u.TweenMax || i).from(e, t, r), n)
				}, E.fromTo = function(e, t, r, n, a) {
					var o = n.repeat && u.TweenMax || i;
					return t ? this.add(o.fromTo(e, t, r, n), a) : this.set(e, n, a)
				}, E.staggerTo = function(e, t, n, a, o, l, h, c) {
					var u, f, E = new r({
							onComplete: l,
							onCompleteParams: h,
							callbackScope: c,
							smoothChildTiming: this.smoothChildTiming
						}),
						g = n.cycle;
					for("string" == typeof e && (e = i.selector(e) || e), e = e || [], s(e) && (e = m(e)), a = a || 0, 0 > a && (e = m(e), e.reverse(), a *= -1), f = 0; f < e.length; f++) u = p(n), u.startAt && (u.startAt = p(u.startAt), u.startAt.cycle && d(u.startAt, e, f)), g && (d(u, e, f), null != u.duration && (t = u.duration, delete u.duration)), E.to(e[f], t, u, f * a);
					return this.add(E, o)
				}, E.staggerFrom = function(e, t, i, r, n, a, o, s) {
					return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, r, n, a, o, s)
				}, E.staggerFromTo = function(e, t, i, r, n, a, o, s, l) {
					return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, r, n, a, o, s, l)
				}, E.call = function(e, t, r, n) {
					return this.add(i.delayedCall(0, e, t, r), n)
				}, E.set = function(e, t, r) {
					return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new i(e, 0, t), r)
				}, r.exportRoot = function(e, t) {
					e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
					var n, a, o = new r(e),
						s = o._timeline;
					for(null == t && (t = !0), s._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = s._time, n = s._first; n;) a = n._next, t && n instanceof i && n.target === n.vars.onComplete || o.add(n, n._startTime - n._delay), n = a;
					return s.add(o, 0), o
				}, E.add = function(n, a, o, s) {
					var h, c, u, p, d, f;
					if("number" != typeof a && (a = this._parseTimeOrLabel(a, 0, !0, n)), !(n instanceof e)) {
						if(n instanceof Array || n && n.push && l(n)) {
							for(o = o || "normal", s = s || 0, h = a, c = n.length, u = 0; c > u; u++) l(p = n[u]) && (p = new r({
								tweens: p
							})), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += s;
							return this._uncache(!0)
						}
						if("string" == typeof n) return this.addLabel(n, a);
						if("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
						n = i.delayedCall(0, n)
					}
					if(t.prototype.add.call(this, n, a), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
						for(d = this, f = d.rawTime() > n._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
					return this
				}, E.remove = function(t) {
					if(t instanceof e) {
						this._remove(t, !1);
						var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
						return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
					}
					if(t instanceof Array || t && t.push && l(t)) {
						for(var r = t.length; --r > -1;) this.remove(t[r]);
						return this
					}
					return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
				}, E._remove = function(e, i) {
					t.prototype._remove.call(this, e, i);
					var r = this._last;
					return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
				}, E.append = function(e, t) {
					return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
				}, E.insert = E.insertMultiple = function(e, t, i, r) {
					return this.add(e, t || 0, i, r)
				}, E.appendMultiple = function(e, t, i, r) {
					return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, r)
				}, E.addLabel = function(e, t) {
					return this._labels[e] = this._parseTimeOrLabel(t), this
				}, E.addPause = function(e, t, r, n) {
					var a = i.delayedCall(0, f, r, n || this);
					return a.vars.onComplete = a.vars.onReverseComplete = t, a.data = "isPause", this._hasPause = !0, this.add(a, e)
				}, E.removeLabel = function(e) {
					return delete this._labels[e], this
				}, E.getLabelTime = function(e) {
					return null != this._labels[e] ? this._labels[e] : -1
				}, E._parseTimeOrLabel = function(t, i, r, n) {
					var a;
					if(n instanceof e && n.timeline === this) this.remove(n);
					else if(n && (n instanceof Array || n.push && l(n)))
						for(a = n.length; --a > -1;) n[a] instanceof e && n[a].timeline === this && this.remove(n[a]);
					if("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, r);
					if(i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
					else {
						if(a = t.indexOf("="), -1 === a) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
						i = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1)), t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, r) : this.duration()
					}
					return Number(t) + i
				}, E.seek = function(e, t) {
					return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
				}, E.stop = function() {
					return this.paused(!0)
				}, E.gotoAndPlay = function(e, t) {
					return this.play(e, t)
				}, E.gotoAndStop = function(e, t) {
					return this.pause(e, t)
				}, E.render = function(e, t, i) {
					this._gc && this._enabled(!0, !1);
					var r, a, o, s, l, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
						f = this._time,
						m = this._startTime,
						E = this._timeScale,
						g = this._paused;
					if(e >= d - 1e-7) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (a = !0, s = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > n && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, e = d + 1e-4;
					else if(1e-7 > e)
						if(this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (s = "onReverseComplete", a = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = a = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
						else {
							if(this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, 0 === e && a)
								for(r = this._first; r && 0 === r._startTime;) r._duration || (a = !1), r = r._next;
							e = 0, this._initted || (l = !0)
						}
					else {
						if(this._hasPause && !this._forcingPlayhead && !t) {
							if(e >= f)
								for(r = this._first; r && r._startTime <= e && !u;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r), r = r._next;
							else
								for(r = this._last; r && r._startTime >= e && !u;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r), r = r._prev;
							u && (this._time = e = u._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
						}
						this._totalTime = this._time = this._rawPrevTime = e
					}
					if(this._time !== f && this._first || i || l || u) {
						if(this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && e > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), p = this._time, p >= f)
							for(r = this._first; r && (o = r._next, p === this._time && (!this._paused || g));)(r._active || r._startTime <= p && !r._paused && !r._gc) && (u === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = o;
						else
							for(r = this._last; r && (o = r._prev, p === this._time && (!this._paused || g));) {
								if(r._active || r._startTime <= f && !r._paused && !r._gc) {
									if(u === r) {
										for(u = r._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, i), u = u._prev;
										u = null, this.pause()
									}
									r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
								}
								r = o
							}
						this._onUpdate && (t || (h.length && c(), this._callback("onUpdate"))), s && (this._gc || (m === this._startTime || E !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (a && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s)))
					}
				}, E._hasPausedChild = function() {
					for(var e = this._first; e;) {
						if(e._paused || e instanceof r && e._hasPausedChild()) return !0;
						e = e._next
					}
					return !1
				}, E.getChildren = function(e, t, r, n) {
					n = n || -9999999999;
					for(var a = [], o = this._first, s = 0; o;) o._startTime < n || (o instanceof i ? t !== !1 && (a[s++] = o) : (r !== !1 && (a[s++] = o), e !== !1 && (a = a.concat(o.getChildren(!0, t, r)), s = a.length))), o = o._next;
					return a
				}, E.getTweensOf = function(e, t) {
					var r, n, a = this._gc,
						o = [],
						s = 0;
					for(a && this._enabled(!0, !0), r = i.getTweensOf(e), n = r.length; --n > -1;)(r[n].timeline === this || t && this._contains(r[n])) && (o[s++] = r[n]);
					return a && this._enabled(!1, !0), o
				}, E.recent = function() {
					return this._recent
				}, E._contains = function(e) {
					for(var t = e.timeline; t;) {
						if(t === this) return !0;
						t = t.timeline
					}
					return !1
				}, E.shiftChildren = function(e, t, i) {
					i = i || 0;
					for(var r, n = this._first, a = this._labels; n;) n._startTime >= i && (n._startTime += e), n = n._next;
					if(t)
						for(r in a) a[r] >= i && (a[r] += e);
					return this._uncache(!0)
				}, E._kill = function(e, t) {
					if(!e && !t) return this._enabled(!1, !1);
					for(var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(e, t) && (n = !0);
					return n
				}, E.clear = function(e) {
					var t = this.getChildren(!1, !0, !0),
						i = t.length;
					for(this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
					return e !== !1 && (this._labels = {}), this._uncache(!0)
				}, E.invalidate = function() {
					for(var t = this._first; t;) t.invalidate(), t = t._next;
					return e.prototype.invalidate.call(this)
				}, E._enabled = function(e, i) {
					if(e === this._gc)
						for(var r = this._first; r;) r._enabled(e, !0), r = r._next;
					return t.prototype._enabled.call(this, e, i)
				}, E.totalTime = function() {
					this._forcingPlayhead = !0;
					var t = e.prototype.totalTime.apply(this, arguments);
					return this._forcingPlayhead = !1, t
				}, E.duration = function(e) {
					return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
				}, E.totalDuration = function(e) {
					if(!arguments.length) {
						if(this._dirty) {
							for(var t, i, r = 0, n = this._last, a = 999999999999; n;) t = n._prev, n._dirty && n.totalDuration(), n._startTime > a && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : a = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), a = 0), i = n._startTime + n._totalDuration / n._timeScale, i > r && (r = i), n = t;
							this._duration = this._totalDuration = r, this._dirty = !1
						}
						return this._totalDuration
					}
					return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
				}, E.paused = function(t) {
					if(!t)
						for(var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
					return e.prototype.paused.apply(this, arguments)
				}, E.usesFrames = function() {
					for(var t = this._timeline; t._timeline;) t = t._timeline;
					return t === e._rootFramesTimeline
				}, E.rawTime = function() {
					return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
				}, r
			}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
				var r = function(t) {
						e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
					},
					n = 1e-10,
					a = t._internals,
					o = a.lazyTweens,
					s = a.lazyRender,
					l = new i(null, null, 1, 0),
					h = r.prototype = new e;
				return h.constructor = r, h.kill()._gc = !1, r.version = "1.18.5", h.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
				}, h.addCallback = function(e, i, r, n) {
					return this.add(t.delayedCall(0, e, r, n), i)
				}, h.removeCallback = function(e, t) {
					if(e)
						if(null == t) this._kill(null, e);
						else
							for(var i = this.getTweensOf(e, !1), r = i.length, n = this._parseTimeOrLabel(t); --r > -1;) i[r]._startTime === n && i[r]._enabled(!1, !1);
					return this
				}, h.removePause = function(t) {
					return this.removeCallback(e._internals.pauseCallback, t)
				}, h.tweenTo = function(e, i) {
					i = i || {};
					var r, n, a, o = {
						ease: l,
						useFrames: this.usesFrames(),
						immediateRender: !1
					};
					for(n in i) o[n] = i[n];
					return o.time = this._parseTimeOrLabel(e), r = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new t(this, r, o), o.onStart = function() {
						a.target.paused(!0), a.vars.time !== a.target.time() && r === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && a._callback("onStart")
					}, a
				}, h.tweenFromTo = function(e, t, i) {
					i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
						onComplete: this.seek,
						onCompleteParams: [e],
						callbackScope: this
					}, i.immediateRender = i.immediateRender !== !1;
					var r = this.tweenTo(t, i);
					return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
				}, h.render = function(e, t, i) {
					this._gc && this._enabled(!0, !1);
					var r, a, l, h, c, u, p, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
						m = this._duration,
						E = this._time,
						g = this._totalTime,
						v = this._startTime,
						T = this._timeScale,
						y = this._rawPrevTime,
						_ = this._paused,
						R = this._cycle;
					if(e >= f - 1e-7) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > y || y === n) && y !== e && this._first && (c = !0, y > n && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = m, e = m + 1e-4);
					else if(1e-7 > e)
						if(this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== E || 0 === m && y !== n && (y > 0 || 0 > e && y >= 0) && !this._locked) && (h = "onReverseComplete", a = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = a = !0, h = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = e;
						else {
							if(this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : n, 0 === e && a)
								for(r = this._first; r && 0 === r._startTime;) r._duration || (a = !1), r = r._next;
							e = 0, this._initted || (c = !0)
						}
					else if(0 === m && 0 > y && (c = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && e >= g && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
						if(e = this._time, e >= E)
							for(r = this._first; r && r._startTime <= e && !p;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (p = r), r = r._next;
						else
							for(r = this._last; r && r._startTime >= e && !p;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (p = r), r = r._prev;
						p && (this._time = e = p._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
					}
					if(this._cycle !== R && !this._locked) {
						var x = this._yoyo && 0 !== (1 & R),
							b = x === (this._yoyo && 0 !== (1 & this._cycle)),
							w = this._totalTime,
							H = this._cycle,
							M = this._rawPrevTime,
							S = this._time;
						if(this._totalTime = R * m, this._cycle < R ? x = !x : this._totalTime += m, this._time = E, this._rawPrevTime = 0 === m ? y - 1e-4 : y, this._cycle = R, this._locked = !0, E = x ? 0 : m, this.render(E, t, 0 === m), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), E !== this._time) return;
						if(b && (E = x ? m + 1e-4 : -1e-4, this.render(E, !0, !1)), this._locked = !1, this._paused && !_) return;
						this._time = S, this._totalTime = w, this._cycle = H, this._rawPrevTime = M
					}
					if(!(this._time !== E && this._first || i || c || p)) return void(g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
					if(this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && e > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), d = this._time, d >= E)
						for(r = this._first; r && (l = r._next, d === this._time && (!this._paused || _));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (p === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = l;
					else
						for(r = this._last; r && (l = r._prev, d === this._time && (!this._paused || _));) {
							if(r._active || r._startTime <= E && !r._paused && !r._gc) {
								if(p === r) {
									for(p = r._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (e - p._startTime) * p._timeScale : (e - p._startTime) * p._timeScale, t, i), p = p._prev;
									p = null, this.pause()
								}
								r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
							}
							r = l
						}
					this._onUpdate && (t || (o.length && s(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || T !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (a && (o.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[h] && this._callback(h)))
				}, h.getActive = function(e, t, i) {
					null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
					var r, n, a = [],
						o = this.getChildren(e, t, i),
						s = 0,
						l = o.length;
					for(r = 0; l > r; r++) n = o[r], n.isActive() && (a[s++] = n);
					return a
				}, h.getLabelAfter = function(e) {
					e || 0 !== e && (e = this._time);
					var t, i = this.getLabelsArray(),
						r = i.length;
					for(t = 0; r > t; t++)
						if(i[t].time > e) return i[t].name;
					return null
				}, h.getLabelBefore = function(e) {
					null == e && (e = this._time);
					for(var t = this.getLabelsArray(), i = t.length; --i > -1;)
						if(t[i].time < e) return t[i].name;
					return null
				}, h.getLabelsArray = function() {
					var e, t = [],
						i = 0;
					for(e in this._labels) t[i++] = {
						time: this._labels[e],
						name: e
					};
					return t.sort(function(e, t) {
						return e.time - t.time
					}), t
				}, h.progress = function(e, t) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
				}, h.totalProgress = function(e, t) {
					return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
				}, h.totalDuration = function(t) {
					return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
				}, h.time = function(e, t) {
					return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
				}, h.repeat = function(e) {
					return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
				}, h.repeatDelay = function(e) {
					return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
				}, h.yoyo = function(e) {
					return arguments.length ? (this._yoyo = e, this) : this._yoyo
				}, h.currentLabel = function(e) {
					return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
				}, r
			}, !0),
			function() {
				var e = 180 / Math.PI,
					t = [],
					i = [],
					r = [],
					n = {},
					a = _gsScope._gsDefine.globals,
					o = function(e, t, i, r) {
						i === r && (i = r - (r - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = r, this.da = r - e, this.ca = i - e, this.ba = t - e
					},
					s = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
					l = function(e, t, i, r) {
						var n = {
								a: e
							},
							a = {},
							o = {},
							s = {
								c: r
							},
							l = (e + t) / 2,
							h = (t + i) / 2,
							c = (i + r) / 2,
							u = (l + h) / 2,
							p = (h + c) / 2,
							d = (p - u) / 8;
						return n.b = l + (e - l) / 4, a.b = u + d, n.c = a.a = (n.b + a.b) / 2, a.c = o.a = (u + p) / 2, o.b = p - d, s.b = c + (r - c) / 4, o.c = s.a = (o.b + s.b) / 2, [n, a, o, s]
					},
					h = function(e, n, a, o, s) {
						var h, c, u, p, d, f, m, E, g, v, T, y, _, R = e.length - 1,
							x = 0,
							b = e[0].a;
						for(h = 0; R > h; h++) d = e[x], c = d.a, u = d.d, p = e[x + 1].d, s ? (T = t[h], y = i[h], _ = (y + T) * n * .25 / (o ? .5 : r[h] || .5), f = u - (u - c) * (o ? .5 * n : 0 !== T ? _ / T : 0), m = u + (p - u) * (o ? .5 * n : 0 !== y ? _ / y : 0), E = u - (f + ((m - f) * (3 * T / (T + y) + .5) / 4 || 0))) : (f = u - (u - c) * n * .5, m = u + (p - u) * n * .5, E = u - (f + m) / 2), f += E, m += E, d.c = g = f, d.b = 0 !== h ? b : b = d.a + .6 * (d.c - d.a), d.da = u - c, d.ca = g - c, d.ba = b - c, a ? (v = l(c, b, g, u), e.splice(x, 1, v[0], v[1], v[2], v[3]), x += 4) : x++, b = m;
						d = e[x], d.b = b, d.c = b + .4 * (d.d - b), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = b - d.a, a && (v = l(d.a, b, d.c, d.d), e.splice(x, 1, v[0], v[1], v[2], v[3]))
					},
					c = function(e, r, n, a) {
						var s, l, h, c, u, p, d = [];
						if(a)
							for(e = [a].concat(e), l = e.length; --l > -1;) "string" == typeof(p = e[l][r]) && "=" === p.charAt(1) && (e[l][r] = a[r] + Number(p.charAt(0) + p.substr(2)));
						if(s = e.length - 2, 0 > s) return d[0] = new o(e[0][r], 0, 0, e[-1 > s ? 0 : 1][r]), d;
						for(l = 0; s > l; l++) h = e[l][r], c = e[l + 1][r], d[l] = new o(h, 0, 0, c), n && (u = e[l + 2][r], t[l] = (t[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
						return d[l] = new o(e[l][r], 0, 0, e[l + 1][r]), d
					},
					u = function(e, a, o, l, u, p) {
						var d, f, m, E, g, v, T, y, _ = {},
							R = [],
							x = p || e[0];
						u = "string" == typeof u ? "," + u + "," : s, null == a && (a = 1);
						for(f in e[0]) R.push(f);
						if(e.length > 1) {
							for(y = e[e.length - 1], T = !0, d = R.length; --d > -1;)
								if(f = R[d], Math.abs(x[f] - y[f]) > .05) {
									T = !1;
									break
								}
							T && (e = e.concat(), p && e.unshift(p), e.push(e[1]), p = e[e.length - 3])
						}
						for(t.length = i.length = r.length = 0, d = R.length; --d > -1;) f = R[d], n[f] = -1 !== u.indexOf("," + f + ","), _[f] = c(e, f, n[f], p);
						for(d = t.length; --d > -1;) t[d] = Math.sqrt(t[d]), i[d] = Math.sqrt(i[d]);
						if(!l) {
							for(d = R.length; --d > -1;)
								if(n[f])
									for(m = _[R[d]], v = m.length - 1, E = 0; v > E; E++) g = m[E + 1].da / i[E] + m[E].da / t[E] || 0, r[E] = (r[E] || 0) + g * g;
							for(d = r.length; --d > -1;) r[d] = Math.sqrt(r[d])
						}
						for(d = R.length, E = o ? 4 : 1; --d > -1;) f = R[d], m = _[f], h(m, a, o, l, n[f]), T && (m.splice(0, E), m.splice(m.length - E, E));
						return _
					},
					p = function(e, t, i) {
						t = t || "soft";
						var r, n, a, s, l, h, c, u, p, d, f, m = {},
							E = "cubic" === t ? 3 : 2,
							g = "soft" === t,
							v = [];
						if(g && i && (e = [i].concat(e)), null == e || e.length < E + 1) throw "invalid Bezier data";
						for(p in e[0]) v.push(p);
						for(h = v.length; --h > -1;) {
							for(p = v[h], m[p] = l = [], d = 0, u = e.length, c = 0; u > c; c++) r = null == i ? e[c][p] : "string" == typeof(f = e[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && c > 1 && u - 1 > c && (l[d++] = (r + l[d - 2]) / 2), l[d++] = r;
							for(u = d - E + 1, d = 0, c = 0; u > c; c += E) r = l[c], n = l[c + 1], a = l[c + 2], s = 2 === E ? 0 : l[c + 3], l[d++] = f = 3 === E ? new o(r, n, a, s) : new o(r, (2 * n + r) / 3, (2 * n + a) / 3, a);
							l.length = d
						}
						return m
					},
					d = function(e, t, i) {
						for(var r, n, a, o, s, l, h, c, u, p, d, f = 1 / i, m = e.length; --m > -1;)
							for(p = e[m], a = p.a, o = p.d - a, s = p.c - a, l = p.b - a, r = n = 0, c = 1; i >= c; c++) h = f * c, u = 1 - h, r = n - (n = (h * h * o + 3 * u * (h * s + u * l)) * h), d = m * i + c - 1, t[d] = (t[d] || 0) + r * r
					},
					f = function(e, t) {
						t = t >> 0 || 6;
						var i, r, n, a, o = [],
							s = [],
							l = 0,
							h = 0,
							c = t - 1,
							u = [],
							p = [];
						for(i in e) d(e[i], o, t);
						for(n = o.length, r = 0; n > r; r++) l += Math.sqrt(o[r]), a = r % t, p[a] = l, a === c && (h += l, a = r / t >> 0, u[a] = p, s[a] = h, l = 0, p = []);
						return {
							length: h,
							lengths: s,
							segments: u
						}
					},
					m = _gsScope._gsDefine.plugin({
						propName: "bezier",
						priority: -1,
						version: "1.3.6",
						API: 2,
						global: !0,
						init: function(e, t, i) {
							this._target = e, t instanceof Array && (t = {
								values: t
							}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
							var r, n, a, o, s, l = t.values || [],
								h = {},
								c = l[0],
								d = t.autoRotate || i.vars.orientToBezier;
							this._autoRotate = d ? d instanceof Array ? d : [
								["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
							] : null;
							for(r in c) this._props.push(r);
							for(a = this._props.length; --a > -1;) r = this._props[a], this._overwriteProps.push(r), n = this._func[r] = "function" == typeof e[r], h[r] = n ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), s || h[r] !== l[0][r] && (s = h);
							if(this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, s) : p(l, t.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
								var m = f(this._beziers, this._timeRes);
								this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
							}
							if(d = this._autoRotate)
								for(this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), a = d.length; --a > -1;) {
									for(o = 0; 3 > o; o++) r = d[a][o], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
									r = d[a][2], this._initialRotations[a] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0
								}
							return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
						},
						set: function(t) {
							var i, r, n, a, o, s, l, h, c, u, p = this._segCount,
								d = this._func,
								f = this._target,
								m = t !== this._startRatio;
							if(this._timeRes) {
								if(c = this._lengths, u = this._curSeg, t *= this._length, n = this._li, t > this._l2 && p - 1 > n) {
									for(h = p - 1; h > n && (this._l2 = c[++n]) <= t;);
									this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
								} else if(t < this._l1 && n > 0) {
									for(; n > 0 && (this._l1 = c[--n]) >= t;);
									0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
								}
								if(i = n, t -= this._l1, n = this._si, t > this._s2 && n < u.length - 1) {
									for(h = u.length - 1; h > n && (this._s2 = u[++n]) <= t;);
									this._s1 = u[n - 1], this._si = n
								} else if(t < this._s1 && n > 0) {
									for(; n > 0 && (this._s1 = u[--n]) >= t;);
									0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
								}
								s = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
							} else i = 0 > t ? 0 : t >= 1 ? p - 1 : p * t >> 0, s = (t - i * (1 / p)) * p;
							for(r = 1 - s, n = this._props.length; --n > -1;) a = this._props[n], o = this._beziers[a][i], l = (s * s * o.da + 3 * r * (s * o.ca + r * o.ba)) * s + o.a, this._round[a] && (l = Math.round(l)), d[a] ? f[a](l) : f[a] = l;
							if(this._autoRotate) {
								var E, g, v, T, y, _, R, x = this._autoRotate;
								for(n = x.length; --n > -1;) a = x[n][2], _ = x[n][3] || 0, R = x[n][4] === !0 ? 1 : e, o = this._beziers[x[n][0]], E = this._beziers[x[n][1]], o && E && (o = o[i], E = E[i], g = o.a + (o.b - o.a) * s, T = o.b + (o.c - o.b) * s, g += (T - g) * s, T += (o.c + (o.d - o.c) * s - T) * s, v = E.a + (E.b - E.a) * s, y = E.b + (E.c - E.b) * s, v += (y - v) * s, y += (E.c + (E.d - E.c) * s - y) * s, l = m ? Math.atan2(y - v, T - g) * R + _ : this._initialRotations[n], d[a] ? f[a](l) : f[a] = l)
							}
						}
					}),
					E = m.prototype;
				m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(e, t, i) {
					return new o(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
				}, m._cssRegister = function() {
					var e = a.CSSPlugin;
					if(e) {
						var t = e._internals,
							i = t._parseToProxy,
							r = t._setPluginRatio,
							n = t.CSSPropTween;
						t._registerComplexSpecialProp("bezier", {
							parser: function(e, t, a, o, s, l) {
								t instanceof Array && (t = {
									values: t
								}), l = new m;
								var h, c, u, p = t.values,
									d = p.length - 1,
									f = [],
									E = {};
								if(0 > d) return s;
								for(h = 0; d >= h; h++) u = i(e, p[h], o, s, l, d !== h), f[h] = u.end;
								for(c in t) E[c] = t[c];
								return E.values = f, s = new n(e, "bezier", 0, 0, u.pt, 2), s.data = u, s.plugin = l, s.setRatio = r, 0 === E.autoRotate && (E.autoRotate = !0), !E.autoRotate || E.autoRotate instanceof Array || (h = E.autoRotate === !0 ? 0 : Number(E.autoRotate), E.autoRotate = null != u.end.left ? [
									["left", "top", "rotation", h, !1]
								] : null != u.end.x ? [
									["x", "y", "rotation", h, !1]
								] : !1), E.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0), l._onInitTween(u.proxy, E, o._tween), s
							}
						})
					}
				}, E._roundProps = function(e, t) {
					for(var i = this._overwriteProps, r = i.length; --r > -1;)(e[i[r]] || e.bezier || e.bezierThrough) && (this._round[i[r]] = t)
				}, E._kill = function(e) {
					var t, i, r = this._props;
					for(t in this._beziers)
						if(t in e)
							for(delete this._beziers[t], delete this._func[t], i = r.length; --i > -1;) r[i] === t && r.splice(i, 1);
					return this._super._kill.call(this, e)
				}
			}(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
				var i, r, n, a, o = function() {
						e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
					},
					s = _gsScope._gsDefine.globals,
					l = {},
					h = o.prototype = new e("css");
				h.constructor = o, o.version = "1.18.5", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
					top: h,
					right: h,
					bottom: h,
					left: h,
					width: h,
					height: h,
					fontSize: h,
					padding: h,
					margin: h,
					perspective: h,
					lineHeight: ""
				};
				var c, u, p, d, f, m, E = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
					g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					y = /(?:\d|\-|\+|=|#|\.)*/g,
					_ = /opacity *= *([^)]*)/i,
					R = /opacity:([^;]*)/i,
					x = /alpha\(opacity *=.+?\)/i,
					b = /^(rgb|hsl)/,
					w = /([A-Z])/g,
					H = /-([a-z])/gi,
					M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					S = function(e, t) {
						return t.toUpperCase()
					},
					A = /(?:Left|Right|Width)/i,
					C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					P = /,(?=[^\)]*(?:\(|$))/gi,
					D = /[\s,\(]/i,
					O = Math.PI / 180,
					I = 180 / Math.PI,
					B = {},
					U = document,
					F = function(e) {
						return U.createElementNS ? U.createElementNS("http://www.w3.org/1999/xhtml", e) : U.createElement(e)
					},
					N = F("div"),
					k = F("img"),
					G = o._internals = {
						_specialProps: l
					},
					V = navigator.userAgent,
					z = function() {
						var e = V.indexOf("Android"),
							t = F("a");
						return p = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === e || Number(V.substr(e + 8, 1)) > 3), f = p && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6, d = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (m = parseFloat(RegExp.$1)), t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
					}(),
					j = function(e) {
						return _.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
					},
					W = function(e) {
						window.console && console.log(e)
					},
					X = "",
					q = "",
					Y = function(e, t) {
						t = t || N;
						var i, r, n = t.style;
						if(void 0 !== n[e]) return e;
						for(e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + e];);
						return r >= 0 ? (q = 3 === r ? "ms" : i[r], X = "-" + q.toLowerCase() + "-", q + e) : null
					},
					$ = U.defaultView ? U.defaultView.getComputedStyle : function() {},
					Z = o.getStyle = function(e, t, i, r, n) {
						var a;
						return z || "opacity" !== t ? (!r && e.style[t] ? a = e.style[t] : (i = i || $(e)) ? a = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(w, "-$1").toLowerCase()) : e.currentStyle && (a = e.currentStyle[t]), null == n || a && "none" !== a && "auto" !== a && "auto auto" !== a ? a : n) : j(e)
					},
					K = G.convertToPixels = function(e, i, r, n, a) {
						if("px" === n || !n) return r;
						if("auto" === n || !r) return 0;
						var s, l, h, c = A.test(i),
							u = e,
							p = N.style,
							d = 0 > r,
							f = 1 === r;
						if(d && (r = -r), f && (r *= 100), "%" === n && -1 !== i.indexOf("border")) s = r / 100 * (c ? e.clientWidth : e.clientHeight);
						else {
							if(p.cssText = "border:0 solid red;position:" + Z(e, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) p[c ? "borderLeftWidth" : "borderTopWidth"] = r + n;
							else {
								if(u = e.parentNode || U.body, l = u._gsCache, h = t.ticker.frame, l && c && l.time === h) return l.width * r / 100;
								p[c ? "width" : "height"] = r + n
							}
							u.appendChild(N), s = parseFloat(N[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(N), c && "%" === n && o.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = s / r * 100), 0 !== s || a || (s = K(e, i, r, n, !0))
						}
						return f && (s /= 100), d ? -s : s
					},
					Q = G.calculateOffset = function(e, t, i) {
						if("absolute" !== Z(e, "position", i)) return 0;
						var r = "left" === t ? "Left" : "Top",
							n = Z(e, "margin" + r, i);
						return e["offset" + r] - (K(e, t, parseFloat(n), n.replace(y, "")) || 0)
					},
					J = function(e, t) {
						var i, r, n, a = {};
						if(t = t || $(e, null))
							if(i = t.length)
								for(; --i > -1;) n = t[i], (-1 === n.indexOf("-transform") || Ht === n) && (a[n.replace(H, S)] = t.getPropertyValue(n));
							else
								for(i in t)(-1 === i.indexOf("Transform") || wt === i) && (a[i] = t[i]);
						else if(t = e.currentStyle || e.style)
							for(i in t) "string" == typeof i && void 0 === a[i] && (a[i.replace(H, S)] = t[i]);
						return z || (a.opacity = j(e)), r = Nt(e, t, !1), a.rotation = r.rotation, a.skewX = r.skewX, a.scaleX = r.scaleX, a.scaleY = r.scaleY, a.x = r.x, a.y = r.y, St && (a.z = r.z, a.rotationX = r.rotationX, a.rotationY = r.rotationY, a.scaleZ = r.scaleZ), a.filters && delete a.filters, a
					},
					et = function(e, t, i, r, n) {
						var a, o, s, l = {},
							h = e.style;
						for(o in i) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (a = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof a || "string" == typeof a) && (l[o] = "auto" !== a || "left" !== o && "top" !== o ? "" !== a && "auto" !== a && "none" !== a || "string" != typeof t[o] || "" === t[o].replace(T, "") ? a : 0 : Q(e, o), void 0 !== h[o] && (s = new mt(h, o, h[o], s)));
						if(r)
							for(o in r) "className" !== o && (l[o] = r[o]);
						return {
							difs: l,
							firstMPT: s
						}
					},
					tt = {
						width: ["Left", "Right"],
						height: ["Top", "Bottom"]
					},
					it = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
					rt = function(e, t, i) {
						if("svg" === (e.nodeName + "").toLowerCase()) return(i || $(e))[t] || 0;
						if(e.getBBox && Bt(e)) return e.getBBox()[t] || 0;
						var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
							n = tt[t],
							a = n.length;
						for(i = i || $(e, null); --a > -1;) r -= parseFloat(Z(e, "padding" + n[a], i, !0)) || 0, r -= parseFloat(Z(e, "border" + n[a] + "Width", i, !0)) || 0;
						return r
					},
					nt = function(e, t) {
						if("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
						(null == e || "" === e) && (e = "0 0");
						var i, r = e.split(" "),
							n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : r[0],
							a = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : r[1];
						if(r.length > 3 && !t) {
							for(r = e.split(", ").join(",").split(","), e = [], i = 0; i < r.length; i++) e.push(nt(r[i]));
							return e.join(",")
						}
						return null == a ? a = "center" === n ? "50%" : "0" : "center" === a && (a = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e = n + " " + a + (r.length > 2 ? " " + r[2] : ""), t && (t.oxp = -1 !== n.indexOf("%"), t.oyp = -1 !== a.indexOf("%"), t.oxr = "=" === n.charAt(1), t.oyr = "=" === a.charAt(1), t.ox = parseFloat(n.replace(T, "")), t.oy = parseFloat(a.replace(T, "")), t.v = e), t || e
					},
					at = function(e, t) {
						return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
					},
					ot = function(e, t) {
						return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
					},
					st = function(e, t, i, r) {
						var n, a, o, s, l, h = 1e-6;
						return null == e ? s = t : "number" == typeof e ? s = e : (n = 360, a = e.split("_"), l = "=" === e.charAt(1), o = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(a[0].substr(2)) : parseFloat(a[0])) * (-1 === e.indexOf("rad") ? 1 : I) - (l ? 0 : t), a.length && (r && (r[i] = t + o), -1 !== e.indexOf("short") && (o %= n, o !== o % (n / 2) && (o = 0 > o ? o + n : o - n)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * n) % n - (o / n | 0) * n : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * n) % n - (o / n | 0) * n)), s = t + o), h > s && s > -h && (s = 0), s
					},
					lt = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0]
					},
					ht = function(e, t, i) {
						return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 255 * (1 > 6 * e ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
					},
					ct = o.parseColor = function(e, t) {
						var i, r, n, a, o, s, l, h, c, u, p;
						if(e)
							if("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
							else {
								if("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), lt[e]) i = lt[e];
								else if("#" === e.charAt(0)) 4 === e.length && (r = e.charAt(1), n = e.charAt(2), a = e.charAt(3), e = "#" + r + r + n + n + a + a), e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & 255, 255 & e];
								else if("hsl" === e.substr(0, 3))
									if(i = p = e.match(E), t) {
										if(-1 !== e.indexOf("=")) return e.match(g)
									} else o = Number(i[0]) % 360 / 360, s = Number(i[1]) / 100, l = Number(i[2]) / 100, n = .5 >= l ? l * (s + 1) : l + s - l * s, r = 2 * l - n, i.length > 3 && (i[3] = Number(e[3])), i[0] = ht(o + 1 / 3, r, n), i[1] = ht(o, r, n), i[2] = ht(o - 1 / 3, r, n);
								else i = e.match(E) || lt.transparent;
								i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
							}
						else i = lt.black;
						return t && !p && (r = i[0] / 255, n = i[1] / 255, a = i[2] / 255, h = Math.max(r, n, a), c = Math.min(r, n, a), l = (h + c) / 2, h === c ? o = s = 0 : (u = h - c, s = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === r ? (n - a) / u + (a > n ? 6 : 0) : h === n ? (a - r) / u + 2 : (r - n) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * s + .5 | 0, i[2] = 100 * l + .5 | 0), i
					},
					ut = function(e, t) {
						var i, r, n, a = e.match(pt) || [],
							o = 0,
							s = a.length ? "" : e;
						for(i = 0; i < a.length; i++) r = a[i], n = e.substr(o, e.indexOf(r, o) - o), o += n.length + r.length, r = ct(r, t), 3 === r.length && r.push(1), s += n + (t ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
						return s + e.substr(o)
					},
					pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for(h in lt) pt += "|" + h + "\\b";
				pt = new RegExp(pt + ")", "gi"), o.colorStringFilter = function(e) {
					var t, i = e[0] + e[1];
					pt.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = ut(e[0], t), e[1] = ut(e[1], t)), pt.lastIndex = 0
				}, t.defaultStringFilter || (t.defaultStringFilter = o.colorStringFilter);
				var dt = function(e, t, i, r) {
						if(null == e) return function(e) {
							return e
						};
						var n, a = t ? (e.match(pt) || [""])[0] : "",
							o = e.split(a).join("").match(v) || [],
							s = e.substr(0, e.indexOf(o[0])),
							l = ")" === e.charAt(e.length - 1) ? ")" : "",
							h = -1 !== e.indexOf(" ") ? " " : ",",
							c = o.length,
							u = c > 0 ? o[0].replace(E, "") : "";
						return c ? n = t ? function(e) {
							var t, p, d, f;
							if("number" == typeof e) e += u;
							else if(r && P.test(e)) {
								for(f = e.replace(P, "|").split("|"), d = 0; d < f.length; d++) f[d] = n(f[d]);
								return f.join(",")
							}
							if(t = (e.match(pt) || [a])[0], p = e.split(t).join("").match(v) || [], d = p.length, c > d--)
								for(; ++d < c;) p[d] = i ? p[(d - 1) / 2 | 0] : o[d];
							return s + p.join(h) + h + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
						} : function(e) {
							var t, a, p;
							if("number" == typeof e) e += u;
							else if(r && P.test(e)) {
								for(a = e.replace(P, "|").split("|"), p = 0; p < a.length; p++) a[p] = n(a[p]);
								return a.join(",")
							}
							if(t = e.match(v) || [], p = t.length, c > p--)
								for(; ++p < c;) t[p] = i ? t[(p - 1) / 2 | 0] : o[p];
							return s + t.join(h) + l
						} : function(e) {
							return e
						}
					},
					ft = function(e) {
						return e = e.split(","),
							function(t, i, r, n, a, o, s) {
								var l, h = (i + "").split(" ");
								for(s = {}, l = 0; 4 > l; l++) s[e[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
								return n.parse(t, s, a, o)
							}
					},
					mt = (G._setPluginRatio = function(e) {
						this.plugin.setRatio(e);
						for(var t, i, r, n, a, o = this.data, s = o.proxy, l = o.firstMPT, h = 1e-6; l;) t = s[l.v], l.r ? t = Math.round(t) : h > t && t > -h && (t = 0), l.t[l.p] = t, l = l._next;
						if(o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === e || 0 === e)
							for(l = o.firstMPT, a = 1 === e ? "e" : "b"; l;) {
								if(i = l.t, i.type) {
									if(1 === i.type) {
										for(n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
										i[a] = n
									}
								} else i[a] = i.s + i.xs0;
								l = l._next
							}
					}, function(e, t, i, r, n) {
						this.t = e, this.p = t, this.v = i, this.r = n, r && (r._prev = this, this._next = r)
					}),
					Et = (G._parseToProxy = function(e, t, i, r, n, a) {
						var o, s, l, h, c, u = r,
							p = {},
							d = {},
							f = i._transform,
							m = B;
						for(i._transform = null, B = t, r = c = i.parse(e, t, r, n), B = m, a && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); r && r !== u;) {
							if(r.type <= 1 && (s = r.p, d[s] = r.s + r.c, p[s] = r.s, a || (h = new mt(r, "s", s, h, r.r), r.c = 0), 1 === r.type))
								for(o = r.l; --o > 0;) l = "xn" + o, s = r.p + "_" + l, d[s] = r.data[l], p[s] = r[l], a || (h = new mt(r, l, s, h, r.rxp[l]));
							r = r._next
						}
						return {
							proxy: p,
							end: d,
							firstMPT: h,
							pt: c
						}
					}, G.CSSPropTween = function(e, t, r, n, o, s, l, h, c, u, p) {
						this.t = e, this.p = t, this.s = r, this.c = n, this.n = l || t, e instanceof Et || a.push(this.n), this.r = h, this.type = s || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? r : u, this.e = void 0 === p ? r + n : p, o && (this._next = o, o._prev = this)
					}),
					gt = function(e, t, i, r, n, a) {
						var o = new Et(e, t, i, r - i, n, -1, a);
						return o.b = i, o.e = o.xs0 = r, o
					},
					vt = o.parseComplex = function(e, t, i, r, n, a, s, l, h, u) {
						i = i || a || "", s = new Et(e, t, 0, 0, s, u ? 2 : 1, null, !1, l, i, r), r += "", n && pt.test(r + i) && (r = [i, r], o.colorStringFilter(r), i = r[0], r = r[1]);
						var p, d, f, m, v, T, y, _, R, x, b, w, H, M = i.split(", ").join(",").split(" "),
							S = r.split(", ").join(",").split(" "),
							A = M.length,
							C = c !== !1;
						for((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (M = M.join(" ").replace(P, ", ").split(" "), S = S.join(" ").replace(P, ", ").split(" "), A = M.length), A !== S.length && (M = (a || "").split(" "), A = M.length), s.plugin = h, s.setRatio = u, pt.lastIndex = 0, p = 0; A > p; p++)
							if(m = M[p], v = S[p], _ = parseFloat(m), _ || 0 === _) s.appendXtra("", _, at(v, _), v.replace(g, ""), C && -1 !== v.indexOf("px"), !0);
							else if(n && pt.test(m)) w = v.indexOf(")") + 1, w = ")" + (w ? v.substr(w) : ""), H = -1 !== v.indexOf("hsl") && z, m = ct(m, H), v = ct(v, H), R = m.length + v.length > 6, R && !z && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(S[p]).join("transparent")) : (z || (R = !1), H ? s.appendXtra(R ? "hsla(" : "hsl(", m[0], at(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], at(v[1], m[1]), "%,", !1).appendXtra("", m[2], at(v[2], m[2]), R ? "%," : "%" + w, !1) : s.appendXtra(R ? "rgba(" : "rgb(", m[0], v[0] - m[0], ",", !0, !0).appendXtra("", m[1], v[1] - m[1], ",", !0).appendXtra("", m[2], v[2] - m[2], R ? "," : w, !0), R && (m = m.length < 4 ? 1 : m[3], s.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, w, !1))), pt.lastIndex = 0;
						else if(T = m.match(E)) {
							if(y = v.match(g), !y || y.length !== T.length) return s;
							for(f = 0, d = 0; d < T.length; d++) b = T[d], x = m.indexOf(b, f), s.appendXtra(m.substr(f, x - f), Number(b), at(y[d], b), "", C && "px" === m.substr(x + b.length, 2), 0 === d), f = x + b.length;
							s["xs" + s.l] += m.substr(f)
						} else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + v : v;
						if(-1 !== r.indexOf("=") && s.data) {
							for(w = s.xs0 + s.data.s, p = 1; p < s.l; p++) w += s["xs" + p] + s.data["xn" + p];
							s.e = w + s["xs" + p]
						}
						return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
					},
					Tt = 9;
				for(h = Et.prototype, h.l = h.pr = 0; --Tt > 0;) h["xn" + Tt] = 0, h["xs" + Tt] = "";
				h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(e, t, i, r, n, a) {
					var o = this,
						s = o.l;
					return o["xs" + s] += a && (s || o["xs" + s]) ? " " + e : e || "", i || 0 === s || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", s > 0 ? (o.data["xn" + s] = t + i, o.rxp["xn" + s] = n, o["xn" + s] = t, o.plugin || (o.xfirst = new Et(o, "xn" + s, t, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
						s: t + i
					}, o.rxp = {}, o.s = t, o.c = i, o.r = n, o)) : (o["xs" + s] += t + (r || ""), o)
				};
				var yt = function(e, t) {
						t = t || {}, this.p = t.prefix ? Y(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || dt(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
					},
					_t = G._registerComplexSpecialProp = function(e, t, i) {
						"object" != typeof t && (t = {
							parser: i
						});
						var r, n, a = e.split(","),
							o = t.defaultValue;
						for(i = i || [o], r = 0; r < a.length; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = i[r] || o, n = new yt(a[r], t)
					},
					Rt = function(e) {
						if(!l[e]) {
							var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
							_t(e, {
								parser: function(e, i, r, n, a, o, h) {
									var c = s.com.greensock.plugins[t];
									return c ? (c._cssRegister(), l[r].parse(e, i, r, n, a, o, h)) : (W("Error: " + t + " js file not loaded."), a)
								}
							})
						}
					};
				h = yt.prototype, h.parseComplex = function(e, t, i, r, n, a) {
					var o, s, l, h, c, u, p = this.keyword;
					if(this.multi && (P.test(i) || P.test(t) ? (s = t.replace(P, "|").split("|"), l = i.replace(P, "|").split("|")) : p && (s = [t], l = [i])), l) {
						for(h = l.length > s.length ? l.length : s.length, o = 0; h > o; o++) t = s[o] = s[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = t.indexOf(p), u = i.indexOf(p), c !== u && (-1 === u ? s[o] = s[o].split(p).join("") : -1 === c && (s[o] += " " + p)));
						t = s.join(", "), i = l.join(", ")
					}
					return vt(e, this.p, t, i, this.clrs, this.dflt, r, this.pr, n, a)
				}, h.parse = function(e, t, i, r, a, o) {
					return this.parseComplex(e.style, this.format(Z(e, this.p, n, !1, this.dflt)), this.format(t), a, o)
				}, o.registerSpecialProp = function(e, t, i) {
					_t(e, {
						parser: function(e, r, n, a, o, s) {
							var l = new Et(e, n, 0, 0, o, 2, n, !1, i);
							return l.plugin = s, l.setRatio = t(e, r, a._tween, n), l
						},
						priority: i
					})
				}, o.useSVGTransformAttr = p || d;
				var xt, bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					wt = Y("transform"),
					Ht = X + "transform",
					Mt = Y("transformOrigin"),
					St = null !== Y("perspective"),
					At = G.Transform = function() {
						this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && St ? o.defaultForce3D || "auto" : !1
					},
					Ct = window.SVGElement,
					Lt = function(e, t, i) {
						var r, n = U.createElementNS("http://www.w3.org/2000/svg", e),
							a = /([a-z])([A-Z])/g;
						for(r in i) n.setAttributeNS(null, r.replace(a, "$1-$2").toLowerCase(), i[r]);
						return t.appendChild(n), n
					},
					Pt = U.documentElement,
					Dt = function() {
						var e, t, i, r = m || /Android/i.test(V) && !window.chrome;
						return U.createElementNS && !r && (e = Lt("svg", Pt), t = Lt("rect", e, {
							width: 100,
							height: 50,
							x: 100
						}), i = t.getBoundingClientRect().width, t.style[Mt] = "50% 50%", t.style[wt] = "scaleX(0.5)", r = i === t.getBoundingClientRect().width && !(d && St), Pt.removeChild(e)), r
					}(),
					Ot = function(e, t, i, r, n, a) {
						var s, l, h, c, u, p, d, f, m, E, g, v, T, y, _ = e._gsTransform,
							R = Ft(e, !0);
						_ && (T = _.xOrigin, y = _.yOrigin), (!r || (s = r.split(" ")).length < 2) && (d = e.getBBox(), t = nt(t).split(" "), s = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * d.width : parseFloat(t[0])) + d.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * d.height : parseFloat(t[1])) + d.y]), i.xOrigin = c = parseFloat(s[0]), i.yOrigin = u = parseFloat(s[1]), r && R !== Ut && (p = R[0], d = R[1], f = R[2], m = R[3], E = R[4], g = R[5], v = p * m - d * f, l = c * (m / v) + u * (-f / v) + (f * g - m * E) / v, h = c * (-d / v) + u * (p / v) - (p * g - d * E) / v, c = i.xOrigin = s[0] = l, u = i.yOrigin = s[1] = h), _ && (a && (i.xOffset = _.xOffset, i.yOffset = _.yOffset, _ = i), n || n !== !1 && o.defaultSmoothOrigin !== !1 ? (l = c - T, h = u - y, _.xOffset += l * R[0] + h * R[2] - l, _.yOffset += l * R[1] + h * R[3] - h) : _.xOffset = _.yOffset = 0), a || e.setAttribute("data-svg-origin", s.join(" "))
					},
					It = function(e) {
						try {
							return e.getBBox()
						} catch(e) {}
					},
					Bt = function(e) {
						return !!(Ct && e.getBBox && e.getCTM && It(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
					},
					Ut = [1, 0, 0, 1, 0, 0],
					Ft = function(e, t) {
						var i, r, n, a, o, s, l = e._gsTransform || new At,
							h = 1e5,
							c = e.style;
						if(wt ? r = Z(e, Ht, null, !0) : e.currentStyle && (r = e.currentStyle.filter.match(C), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, i && wt && ((s = "none" === $(e).display) || !e.parentNode) && (s && (a = c.display, c.display = "block"), e.parentNode || (o = 1, Pt.appendChild(e)), r = Z(e, Ht, null, !0), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, a ? c.display = a : s && zt(c, "display"), o && Pt.removeChild(e)), (l.svg || e.getBBox && Bt(e)) && (i && -1 !== (c[wt] + "").indexOf("matrix") && (r = c[wt], i = 0), n = e.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (r = n, i = 0) : -1 !== n.indexOf("translate") && (r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ut;
						for(n = (r || "").match(E) || [], Tt = n.length; --Tt > -1;) a = Number(n[Tt]), n[Tt] = (o = a - (a |= 0)) ? (o * h + (0 > o ? -.5 : .5) | 0) / h + a : a;
						return t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
					},
					Nt = G.getTransform = function(e, i, r, n) {
						if(e._gsTransform && r && !n) return e._gsTransform;
						var a, s, l, h, c, u, p = r ? e._gsTransform || new At : new At,
							d = p.scaleX < 0,
							f = 2e-5,
							m = 1e5,
							E = St ? parseFloat(Z(e, Mt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
							g = parseFloat(o.defaultTransformPerspective) || 0;
						if(p.svg = !(!e.getBBox || !Bt(e)), p.svg && (Ot(e, Z(e, Mt, i, !1, "50% 50%") + "", p, e.getAttribute("data-svg-origin")), xt = o.useSVGTransformAttr || Dt), a = Ft(e), a !== Ut) {
							if(16 === a.length) {
								var v, T, y, _, R, x = a[0],
									b = a[1],
									w = a[2],
									H = a[3],
									M = a[4],
									S = a[5],
									A = a[6],
									C = a[7],
									L = a[8],
									P = a[9],
									D = a[10],
									O = a[12],
									B = a[13],
									U = a[14],
									F = a[11],
									N = Math.atan2(A, D);
								p.zOrigin && (U = -p.zOrigin, O = L * U - a[12], B = P * U - a[13], U = D * U + p.zOrigin - a[14]), p.rotationX = N * I, N && (_ = Math.cos(-N), R = Math.sin(-N), v = M * _ + L * R, T = S * _ + P * R, y = A * _ + D * R, L = M * -R + L * _, P = S * -R + P * _, D = A * -R + D * _, F = C * -R + F * _, M = v, S = T, A = y), N = Math.atan2(-w, D), p.rotationY = N * I, N && (_ = Math.cos(-N), R = Math.sin(-N), v = x * _ - L * R, T = b * _ - P * R, y = w * _ - D * R, P = b * R + P * _, D = w * R + D * _, F = H * R + F * _, x = v, b = T, w = y), N = Math.atan2(b, x), p.rotation = N * I, N && (_ = Math.cos(-N), R = Math.sin(-N), x = x * _ + M * R, T = b * _ + S * R, S = b * -R + S * _, A = w * -R + A * _, b = T), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), p.scaleX = (Math.sqrt(x * x + b * b) * m + .5 | 0) / m, p.scaleY = (Math.sqrt(S * S + P * P) * m + .5 | 0) / m, p.scaleZ = (Math.sqrt(A * A + D * D) * m + .5 | 0) / m, p.rotationX || p.rotationY ? p.skewX = 0 : (p.skewX = M || S ? Math.atan2(M, S) * I + p.rotation : p.skewX || 0, Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180))), p.perspective = F ? 1 / (0 > F ? -F : F) : 0, p.x = O, p.y = B, p.z = U, p.svg && (p.x -= p.xOrigin - (p.xOrigin * x - p.yOrigin * M), p.y -= p.yOrigin - (p.yOrigin * b - p.xOrigin * S))
							} else if(!St || n || !a.length || p.x !== a[4] || p.y !== a[5] || !p.rotationX && !p.rotationY) {
								var k = a.length >= 6,
									G = k ? a[0] : 1,
									V = a[1] || 0,
									z = a[2] || 0,
									j = k ? a[3] : 1;
								p.x = a[4] || 0, p.y = a[5] || 0, l = Math.sqrt(G * G + V * V), h = Math.sqrt(j * j + z * z), c = G || V ? Math.atan2(V, G) * I : p.rotation || 0, u = z || j ? Math.atan2(z, j) * I + c : p.skewX || 0, Math.abs(u) > 90 && Math.abs(u) < 270 && (d ? (l *= -1, u += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (h *= -1, u += 0 >= u ? 180 : -180)), p.scaleX = l, p.scaleY = h, p.rotation = c, p.skewX = u, St && (p.rotationX = p.rotationY = p.z = 0, p.perspective = g, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * G + p.yOrigin * z), p.y -= p.yOrigin - (p.xOrigin * V + p.yOrigin * j))
							}
							p.zOrigin = E;
							for(s in p) p[s] < f && p[s] > -f && (p[s] = 0)
						}
						return r && (e._gsTransform = p, p.svg && (xt && e.style[wt] ? t.delayedCall(.001, function() {
							zt(e.style, wt)
						}) : !xt && e.getAttribute("transform") && t.delayedCall(.001, function() {
							e.removeAttribute("transform")
						}))), p
					},
					kt = function(e) {
						var t, i, r = this.data,
							n = -r.rotation * O,
							a = n + r.skewX * O,
							o = 1e5,
							s = (Math.cos(n) * r.scaleX * o | 0) / o,
							l = (Math.sin(n) * r.scaleX * o | 0) / o,
							h = (Math.sin(a) * -r.scaleY * o | 0) / o,
							c = (Math.cos(a) * r.scaleY * o | 0) / o,
							u = this.t.style,
							p = this.t.currentStyle;
						if(p) {
							i = l, l = -h, h = -i, t = p.filter, u.filter = "";
							var d, f, E = this.t.offsetWidth,
								g = this.t.offsetHeight,
								v = "absolute" !== p.position,
								T = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + h + ", M22=" + c,
								R = r.x + E * r.xPercent / 100,
								x = r.y + g * r.yPercent / 100;
							if(null != r.ox && (d = (r.oxp ? E * r.ox * .01 : r.ox) - E / 2, f = (r.oyp ? g * r.oy * .01 : r.oy) - g / 2, R += d - (d * s + f * l), x += f - (d * h + f * c)), v ? (d = E / 2, f = g / 2, T += ", Dx=" + (d - (d * s + f * l) + R) + ", Dy=" + (f - (d * h + f * c) + x) + ")") : T += ", sizingMethod='auto expand')", u.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(L, T) : T + " " + t, (0 === e || 1 === e) && 1 === s && 0 === l && 0 === h && 1 === c && (v && -1 === T.indexOf("Dx=0, Dy=0") || _.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf("gradient(" && t.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
								var b, w, H, M = 8 > m ? 1 : -1;
								for(d = r.ieOffsetX || 0, f = r.ieOffsetY || 0, r.ieOffsetX = Math.round((E - ((0 > s ? -s : s) * E + (0 > l ? -l : l) * g)) / 2 + R), r.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > h ? -h : h) * E)) / 2 + x), Tt = 0; 4 > Tt; Tt++) w = it[Tt], b = p[w], i = -1 !== b.indexOf("px") ? parseFloat(b) : K(this.t, w, parseFloat(b), b.replace(y, "")) || 0, H = i !== r[w] ? 2 > Tt ? -r.ieOffsetX : -r.ieOffsetY : 2 > Tt ? d - r.ieOffsetX : f - r.ieOffsetY, u[w] = (r[w] = Math.round(i - H * (0 === Tt || 2 === Tt ? 1 : M))) + "px"
							}
						}
					},
					Gt = G.set3DTransformRatio = G.setTransformRatio = function(e) {
						var t, i, r, n, a, o, s, l, h, c, u, p, f, m, E, g, v, T, y, _, R, x, b, w = this.data,
							H = this.t.style,
							M = w.rotation,
							S = w.rotationX,
							A = w.rotationY,
							C = w.scaleX,
							L = w.scaleY,
							P = w.scaleZ,
							D = w.x,
							I = w.y,
							B = w.z,
							U = w.svg,
							F = w.perspective,
							N = w.force3D;
						if(!(((1 !== e && 0 !== e || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || B || F || A || S || 1 !== P) && (!xt || !U) && St)) return void(M || w.skewX || U ? (M *= O, x = w.skewX * O, b = 1e5, t = Math.cos(M) * C, n = Math.sin(M) * C, i = Math.sin(M - x) * -L, a = Math.cos(M - x) * L, x && "simple" === w.skewType && (v = Math.tan(x), v = Math.sqrt(1 + v * v), i *= v, a *= v, w.skewY && (t *= v, n *= v)), U && (D += w.xOrigin - (w.xOrigin * t + w.yOrigin * i) + w.xOffset, I += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset, xt && (w.xPercent || w.yPercent) && (m = this.t.getBBox(), D += .01 * w.xPercent * m.width, I += .01 * w.yPercent * m.height), m = 1e-6, m > D && D > -m && (D = 0), m > I && I > -m && (I = 0)), y = (t * b | 0) / b + "," + (n * b | 0) / b + "," + (i * b | 0) / b + "," + (a * b | 0) / b + "," + D + "," + I + ")", U && xt ? this.t.setAttribute("transform", "matrix(" + y) : H[wt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + y) : H[wt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + L + "," + D + "," + I + ")");
						if(d && (m = 1e-4, m > C && C > -m && (C = P = 2e-5), m > L && L > -m && (L = P = 2e-5), !F || w.z || w.rotationX || w.rotationY || (F = 0)), M || w.skewX) M *= O, E = t = Math.cos(M), g = n = Math.sin(M), w.skewX && (M -= w.skewX * O, E = Math.cos(M), g = Math.sin(M), "simple" === w.skewType && (v = Math.tan(w.skewX * O), v = Math.sqrt(1 + v * v), E *= v, g *= v, w.skewY && (t *= v, n *= v))), i = -g, a = E;
						else {
							if(!(A || S || 1 !== P || F || U)) return void(H[wt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + I + "px," + B + "px)" + (1 !== C || 1 !== L ? " scale(" + C + "," + L + ")" : ""));
							t = a = 1, i = n = 0
						}
						h = 1, r = o = s = l = c = u = 0, p = F ? -1 / F : 0, f = w.zOrigin, m = 1e-6, _ = ",", R = "0", M = A * O, M && (E = Math.cos(M), g = Math.sin(M), s = -g, c = p * -g, r = t * g, o = n * g, h = E, p *= E, t *= E, n *= E), M = S * O, M && (E = Math.cos(M), g = Math.sin(M), v = i * E + r * g, T = a * E + o * g, l = h * g, u = p * g, r = i * -g + r * E, o = a * -g + o * E, h *= E, p *= E, i = v, a = T), 1 !== P && (r *= P, o *= P, h *= P, p *= P), 1 !== L && (i *= L, a *= L, l *= L, u *= L), 1 !== C && (t *= C, n *= C, s *= C, c *= C), (f || U) && (f && (D += r * -f, I += o * -f, B += h * -f + f), U && (D += w.xOrigin - (w.xOrigin * t + w.yOrigin * i) + w.xOffset, I += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset), m > D && D > -m && (D = R), m > I && I > -m && (I = R), m > B && B > -m && (B = 0)), y = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", y += (m > t && t > -m ? R : t) + _ + (m > n && n > -m ? R : n) + _ + (m > s && s > -m ? R : s), y += _ + (m > c && c > -m ? R : c) + _ + (m > i && i > -m ? R : i) + _ + (m > a && a > -m ? R : a), S || A || 1 !== P ? (y += _ + (m > l && l > -m ? R : l) + _ + (m > u && u > -m ? R : u) + _ + (m > r && r > -m ? R : r), y += _ + (m > o && o > -m ? R : o) + _ + (m > h && h > -m ? R : h) + _ + (m > p && p > -m ? R : p) + _) : y += ",0,0,0,0,1,0,", y += D + _ + I + _ + B + _ + (F ? 1 + -B / F : 1) + ")", H[wt] = y
					};
				h = At.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
					parser: function(e, t, i, r, a, s, l) {
						if(r._lastParsedTransform === l) return a;
						r._lastParsedTransform = l;
						var h, c, u, p, d, f, m, E, g, v = e._gsTransform,
							T = e.style,
							y = 1e-6,
							_ = bt.length,
							R = l,
							x = {},
							b = "transformOrigin",
							w = Nt(e, n, !0, l.parseTransform);
						if(r._transform = w, "string" == typeof R.transform && wt) c = N.style, c[wt] = R.transform, c.display = "block", c.position = "absolute", U.body.appendChild(N), h = Nt(N, null, !1), w.svg && (m = w.xOrigin, E = w.yOrigin, h.x -= w.xOffset, h.y -= w.yOffset, (R.transformOrigin || R.svgOrigin) && (u = {}, Ot(e, nt(R.transformOrigin), u, R.svgOrigin, R.smoothOrigin, !0), m = u.xOrigin, E = u.yOrigin, h.x -= u.xOffset - w.xOffset, h.y -= u.yOffset - w.yOffset), (m || E) && (g = Ft(N, !0), h.x -= m - (m * g[0] + E * g[2]), h.y -= E - (m * g[1] + E * g[3]))), U.body.removeChild(N), h.perspective || (h.perspective = w.perspective), null != R.xPercent && (h.xPercent = ot(R.xPercent, w.xPercent)), null != R.yPercent && (h.yPercent = ot(R.yPercent, w.yPercent));
						else if("object" == typeof R) {
							if(h = {
									scaleX: ot(null != R.scaleX ? R.scaleX : R.scale, w.scaleX),
									scaleY: ot(null != R.scaleY ? R.scaleY : R.scale, w.scaleY),
									scaleZ: ot(R.scaleZ, w.scaleZ),
									x: ot(R.x, w.x),
									y: ot(R.y, w.y),
									z: ot(R.z, w.z),
									xPercent: ot(R.xPercent, w.xPercent),
									yPercent: ot(R.yPercent, w.yPercent),
									perspective: ot(R.transformPerspective, w.perspective)
								}, f = R.directionalRotation, null != f)
								if("object" == typeof f)
									for(c in f) R[c] = f[c];
								else R.rotation = f;
								"string" == typeof R.x && -1 !== R.x.indexOf("%") && (h.x = 0, h.xPercent = ot(R.x, w.xPercent)), "string" == typeof R.y && -1 !== R.y.indexOf("%") && (h.y = 0, h.yPercent = ot(R.y, w.yPercent)), h.rotation = st("rotation" in R ? R.rotation : "shortRotation" in R ? R.shortRotation + "_short" : "rotationZ" in R ? R.rotationZ : w.rotation - w.skewY, w.rotation - w.skewY, "rotation", x), St && (h.rotationX = st("rotationX" in R ? R.rotationX : "shortRotationX" in R ? R.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", x), h.rotationY = st("rotationY" in R ? R.rotationY : "shortRotationY" in R ? R.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", x)), h.skewX = st(R.skewX, w.skewX - w.skewY), (h.skewY = st(R.skewY, w.skewY)) && (h.skewX += h.skewY, h.rotation += h.skewY)
						}
						for(St && null != R.force3D && (w.force3D = R.force3D, d = !0), w.skewType = R.skewType || w.skewType || o.defaultSkewType, p = w.force3D || w.z || w.rotationX || w.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == R.scale || (h.scaleZ = 1); --_ > -1;) i = bt[_], u = h[i] - w[i], (u > y || -y > u || null != R[i] || null != B[i]) && (d = !0, a = new Et(w, i, w[i], u, a), i in x && (a.e = x[i]), a.xs0 = 0, a.plugin = s, r._overwriteProps.push(a.n));
						return u = R.transformOrigin, w.svg && (u || R.svgOrigin) && (m = w.xOffset, E = w.yOffset, Ot(e, nt(u), h, R.svgOrigin, R.smoothOrigin), a = gt(w, "xOrigin", (v ? w : h).xOrigin, h.xOrigin, a, b), a = gt(w, "yOrigin", (v ? w : h).yOrigin, h.yOrigin, a, b), (m !== w.xOffset || E !== w.yOffset) && (a = gt(w, "xOffset", v ? m : w.xOffset, w.xOffset, a, b), a = gt(w, "yOffset", v ? E : w.yOffset, w.yOffset, a, b)), u = xt ? null : "0px 0px"), (u || St && p && w.zOrigin) && (wt ? (d = !0, i = Mt, u = (u || Z(e, i, n, !1, "50% 50%")) + "", a = new Et(T, i, 0, 0, a, -1, b), a.b = T[i], a.plugin = s, St ? (c = w.zOrigin, u = u.split(" "), w.zOrigin = (u.length > 2 && (0 === c || "0px" !== u[2]) ? parseFloat(u[2]) : c) || 0, a.xs0 = a.e = u[0] + " " + (u[1] || "50%") + " 0px", a = new Et(w, "zOrigin", 0, 0, a, -1, a.n), a.b = c, a.xs0 = a.e = w.zOrigin) : a.xs0 = a.e = u) : nt(u + "", w)), d && (r._transformType = w.svg && xt || !p && 3 !== this._transformType ? 2 : 3), a
					},
					prefix: !0
				}), _t("boxShadow", {
					defaultValue: "0px 0px 0px 0px #999",
					prefix: !0,
					color: !0,
					multi: !0,
					keyword: "inset"
				}), _t("borderRadius", {
					defaultValue: "0px",
					parser: function(e, t, i, a, o) {
						t = this.format(t);
						var s, l, h, c, u, p, d, f, m, E, g, v, T, y, _, R, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
							b = e.style;
						for(m = parseFloat(e.offsetWidth), E = parseFloat(e.offsetHeight), s = t.split(" "), l = 0; l < x.length; l++) this.p.indexOf("border") && (x[l] = Y(x[l])), u = c = Z(e, x[l], n, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), p = h = s[l], d = parseFloat(u), v = u.substr((d + "").length), T = "=" === p.charAt(1), T ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = r[i] || v), g !== v && (y = K(e, "borderLeft", d, v), _ = K(e, "borderTop", d, v), "%" === g ? (u = y / m * 100 + "%", c = _ / E * 100 + "%") : "em" === g ? (R = K(e, "borderLeft", 1, "em"), u = y / R + "em", c = _ / R + "em") : (u = y + "px", c = _ + "px"), T && (p = parseFloat(u) + f + g, h = parseFloat(c) + f + g)), o = vt(b, x[l], u + " " + c, p + " " + h, !1, "0px", o);
						return o
					},
					prefix: !0,
					formatter: dt("0px 0px 0px 0px", !1, !0)
				}), _t("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
					defaultValue: "0px",
					parser: function(e, t, i, r, a) {
						return vt(e.style, i, this.format(Z(e, i, n, !1, "0px 0px")), this.format(t), !1, "0px", a)
					},
					prefix: !0,
					formatter: dt("0px 0px", !1, !0)
				}), _t("backgroundPosition", {
					defaultValue: "0 0",
					parser: function(e, t, i, r, a, o) {
						var s, l, h, c, u, p, d = "background-position",
							f = n || $(e, null),
							E = this.format((f ? m ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
							g = this.format(t);
						if(-1 !== E.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (p = Z(e, "backgroundImage").replace(M, ""), p && "none" !== p)) {
							for(s = E.split(" "), l = g.split(" "), k.setAttribute("src", p), h = 2; --h > -1;) E = s[h], c = -1 !== E.indexOf("%"), c !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? e.offsetWidth - k.width : e.offsetHeight - k.height, s[h] = c ? parseFloat(E) / 100 * u + "px" : parseFloat(E) / u * 100 + "%");
							E = s.join(" ")
						}
						return this.parseComplex(e.style, E, g, a, o)
					},
					formatter: nt
				}), _t("backgroundSize", {
					defaultValue: "0 0",
					formatter: nt
				}), _t("perspective", {
					defaultValue: "0px",
					prefix: !0
				}), _t("perspectiveOrigin", {
					defaultValue: "50% 50%",
					prefix: !0
				}), _t("transformStyle", {
					prefix: !0
				}), _t("backfaceVisibility", {
					prefix: !0
				}), _t("userSelect", {
					prefix: !0
				}), _t("margin", {
					parser: ft("marginTop,marginRight,marginBottom,marginLeft")
				}), _t("padding", {
					parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
				}), _t("clip", {
					defaultValue: "rect(0px,0px,0px,0px)",
					parser: function(e, t, i, r, a, o) {
						var s, l, h;
						return 9 > m ? (l = e.currentStyle, h = 8 > m ? " " : ",", s = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", t = this.format(t).split(",").join(h)) : (s = this.format(Z(e, this.p, n, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, s, t, a, o)
					}
				}), _t("textShadow", {
					defaultValue: "0px 0px 0px #999",
					color: !0,
					multi: !0
				}), _t("autoRound,strictUnits", {
					parser: function(e, t, i, r, n) {
						return n
					}
				}), _t("border", {
					defaultValue: "0px solid #000",
					parser: function(e, t, i, r, a, o) {
						var s = Z(e, "borderTopWidth", n, !1, "0px"),
							l = this.format(t).split(" "),
							h = l[0].replace(y, "");
						return "px" !== h && (s = parseFloat(s) / K(e, "borderTopWidth", 1, h) + h), this.parseComplex(e.style, this.format(s + " " + Z(e, "borderTopStyle", n, !1, "solid") + " " + Z(e, "borderTopColor", n, !1, "#000")), l.join(" "), a, o)
					},
					color: !0,
					formatter: function(e) {
						var t = e.split(" ");
						return t[0] + " " + (t[1] || "solid") + " " + (e.match(pt) || ["#000"])[0]
					}
				}), _t("borderWidth", {
					parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
				}), _t("float,cssFloat,styleFloat", {
					parser: function(e, t, i, r, n) {
						var a = e.style,
							o = "cssFloat" in a ? "cssFloat" : "styleFloat";
						return new Et(a, o, 0, 0, n, -1, i, !1, 0, a[o], t)
					}
				});
				var Vt = function(e) {
					var t, i = this.t,
						r = i.filter || Z(this.data, "filter") || "",
						n = this.s + this.c * e | 0;
					100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), t = !Z(this.data, "filter")) : (i.filter = r.replace(x, ""), t = !0)), t || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(_, "opacity=" + n))
				};
				_t("opacity,alpha,autoAlpha", {
					defaultValue: "1",
					parser: function(e, t, i, r, a, o) {
						var s = parseFloat(Z(e, "opacity", n, !1, "1")),
							l = e.style,
							h = "autoAlpha" === i;
						return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s), h && 1 === s && "hidden" === Z(e, "visibility", n) && 0 !== t && (s = 0), z ? a = new Et(l, "opacity", s, t - s, a) : (a = new Et(l, "opacity", 100 * s, 100 * (t - s), a), a.xn1 = h ? 1 : 0, l.zoom = 1, a.type = 2, a.b = "alpha(opacity=" + a.s + ")", a.e = "alpha(opacity=" + (a.s + a.c) + ")", a.data = e, a.plugin = o, a.setRatio = Vt), h && (a = new Et(l, "visibility", 0, 0, a, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), a.xs0 = "inherit", r._overwriteProps.push(a.n), r._overwriteProps.push(i)), a
					}
				});
				var zt = function(e, t) {
						t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(w, "-$1").toLowerCase())) : e.removeAttribute(t))
					},
					jt = function(e) {
						if(this.t._gsClassPT = this, 1 === e || 0 === e) {
							this.t.setAttribute("class", 0 === e ? this.b : this.e);
							for(var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : zt(i, t.p), t = t._next;
							1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
						} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
					};
				_t("className", {
					parser: function(e, t, r, a, o, s, l) {
						var h, c, u, p, d, f = e.getAttribute("class") || "",
							m = e.style.cssText;
						if(o = a._classNamePT = new Et(e, r, 0, 0, o, 2), o.setRatio = jt, o.pr = -11, i = !0, o.b = f, c = J(e, n), u = e._gsClassPT) {
							for(p = {}, d = u.data; d;) p[d.p] = 1, d = d._next;
							u.setRatio(1)
						}
						return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : f.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", o.e), h = et(e, c, J(e), l, p), e.setAttribute("class", f), o.data = h.firstMPT, e.style.cssText = m, o = o.xfirst = a.parse(e, h.difs, o, s)
					}
				});
				var Wt = function(e) {
					if((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
						var t, i, r, n, a, o = this.t.style,
							s = l.transform.parse;
						if("all" === this.e) o.cssText = "", n = !0;
						else
							for(t = this.e.split(" ").join("").split(","), r = t.length; --r > -1;) i = t[r], l[i] && (l[i].parse === s ? n = !0 : i = "transformOrigin" === i ? Mt : l[i].p), zt(o, i);
						n && (zt(o, wt), a = this.t._gsTransform, a && (a.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
					}
				};
				for(_t("clearProps", {
						parser: function(e, t, r, n, a) {
							return a = new Et(e, r, 0, 0, a, 2), a.setRatio = Wt, a.e = t, a.pr = -10, a.data = n._tween, i = !0, a
						}
					}), h = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = h.length; Tt--;) Rt(h[Tt]);
				h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(e, t, s) {
					if(!e.nodeType) return !1;
					this._target = e, this._tween = s, this._vars = t, c = t.autoRound, i = !1, r = t.suffixMap || o.suffixMap, n = $(e, ""), a = this._overwriteProps;
					var h, d, m, E, g, v, T, y, _, x = e.style;
					if(u && "" === x.zIndex && (h = Z(e, "zIndex", n), ("auto" === h || "" === h) && this._addLazySet(x, "zIndex", 0)), "string" == typeof t && (E = x.cssText, h = J(e, n), x.cssText = E + ";" + t, h = et(e, h, J(e)).difs, !z && R.test(t) && (h.opacity = parseFloat(RegExp.$1)), t = h, x.cssText = E), this._firstPT = d = t.className ? l.className.parse(e, t.className, "className", this, null, null, t) : this.parse(e, t, null), this._transformType) {
						for(_ = 3 === this._transformType, wt ? p && (u = !0, "" === x.zIndex && (T = Z(e, "zIndex", n), ("auto" === T || "" === T) && this._addLazySet(x, "zIndex", 0)), f && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (_ ? "visible" : "hidden"))) : x.zoom = 1, m = d; m && m._next;) m = m._next;
						y = new Et(e, "transform", 0, 0, null, 2), this._linkCSSP(y, null, m), y.setRatio = wt ? Gt : kt, y.data = this._transform || Nt(e, n, !0), y.tween = s, y.pr = -1, a.pop()
					}
					if(i) {
						for(; d;) {
							for(v = d._next, m = E; m && m.pr > d.pr;) m = m._next;
							(d._prev = m ? m._prev : g) ? d._prev._next = d: E = d, (d._next = m) ? m._prev = d : g = d, d = v
						}
						this._firstPT = E
					}
					return !0
				}, h.parse = function(e, t, i, a) {
					var o, s, h, u, p, d, f, m, E, g, v = e.style;
					for(o in t) d = t[o], s = l[o], s ? i = s.parse(e, d, o, this, i, a, t) : (p = Z(e, o, n) + "", E = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || E && b.test(d) ? (E || (d = ct(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = vt(v, o, p, d, !0, "transparent", i, 0, a)) : E && D.test(d) ? i = vt(v, o, p, d, !0, null, i, 0, a) : (h = parseFloat(p), f = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = rt(e, o, n), f = "px") : "left" === o || "top" === o ? (h = Q(e, o, n), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), g = E && "=" === d.charAt(1), g ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), m = d.replace(y, "")) : (u = parseFloat(d), m = E ? d.replace(y, "") : ""), "" === m && (m = o in r ? r[o] : f), d = u || 0 === u ? (g ? u + h : u) + m : t[o], f !== m && "" !== m && (u || 0 === u) && h && (h = K(e, o, h, f), "%" === m ? (h /= K(e, o, 100, "%") / 100, t.strictUnits !== !0 && (p = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= K(e, o, 1, m) : "px" !== m && (u = K(e, o, u, m), m = "px"), g && (u || 0 === u) && (d = u + h + m)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[o] && (d || d + "" != "NaN" && null != d) ? (i = new Et(v, o, u || h || 0, 0, i, -1, o, !1, 0, p, d), i.xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : p) : W("invalid " + o + " tween value: " + t[o]) : (i = new Et(v, o, h, u - h, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, p, d), i.xs0 = m))), a && i && !i.plugin && (i.plugin = a);
					return i
				}, h.setRatio = function(e) {
					var t, i, r, n = this._firstPT,
						a = 1e-6;
					if(1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
						if(e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
							for(; n;) {
								if(t = n.c * e + n.s, n.r ? t = Math.round(t) : a > t && t > -a && (t = 0), n.type)
									if(1 === n.type)
										if(r = n.l, 2 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2;
										else if(3 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
								else if(4 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
								else if(5 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
								else {
									for(i = n.xs0 + t + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
									n.t[n.p] = i
								} else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(e);
								else n.t[n.p] = t + n.xs0;
								n = n._next
							} else
								for(; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(e), n = n._next;
						else
							for(; n;) {
								if(2 !== n.type)
									if(n.r && -1 !== n.type)
										if(t = Math.round(n.s + n.c), n.type) {
											if(1 === n.type) {
												for(r = n.l, i = n.xs0 + t + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
												n.t[n.p] = i
											}
										} else n.t[n.p] = t + n.xs0;
								else n.t[n.p] = n.e;
								else n.setRatio(e);
								n = n._next
							}
				}, h._enableTransforms = function(e) {
					this._transform = this._transform || Nt(this._target, n, !0), this._transformType = this._transform.svg && xt || !e && 3 !== this._transformType ? 2 : 3
				};
				var Xt = function() {
					this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
				};
				h._addLazySet = function(e, t, i) {
					var r = this._firstPT = new Et(e, t, 0, 0, this._firstPT, 2);
					r.e = i, r.setRatio = Xt, r.data = this
				}, h._linkCSSP = function(e, t, i, r) {
					return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), i ? i._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
				}, h._kill = function(t) {
					var i, r, n, a = t;
					if(t.autoAlpha || t.alpha) {
						a = {};
						for(r in t) a[r] = t[r];
						a.opacity = 1, a.autoAlpha && (a.visibility = 1)
					}
					return t.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), e.prototype._kill.call(this, a)
				};
				var qt = function(e, t, i) {
					var r, n, a, o;
					if(e.slice)
						for(n = e.length; --n > -1;) qt(e[n], t, i);
					else
						for(r = e.childNodes, n = r.length; --n > -1;) a = r[n], o = a.type, a.style && (t.push(J(a)), i && i.push(a)), 1 !== o && 9 !== o && 11 !== o || !a.childNodes.length || qt(a, t, i)
				};
				return o.cascadeTo = function(e, i, r) {
					var n, a, o, s, l = t.to(e, i, r),
						h = [l],
						c = [],
						u = [],
						p = [],
						d = t._internals.reservedProps;
					for(e = l._targets || l.target, qt(e, c, p), l.render(i, !0, !0), qt(e, u), l.render(0, !0, !0), l._enabled(!0), n = p.length; --n > -1;)
						if(a = et(p[n], c[n], u[n]), a.firstMPT) {
							a = a.difs;
							for(o in r) d[o] && (a[o] = r[o]);
							s = {};
							for(o in a) s[o] = c[n][o];
							h.push(t.fromTo(p[n], i, s, a))
						}
					return h
				}, e.activate([o]), o
			}, !0),
			function() {
				var e = _gsScope._gsDefine.plugin({
						propName: "roundProps",
						version: "1.5",
						priority: -1,
						API: 2,
						init: function(e, t, i) {
							return this._tween = i, !0
						}
					}),
					t = function(e) {
						for(; e;) e.f || e.blob || (e.r = 1), e = e._next
					},
					i = e.prototype;
				i._onInitAllProps = function() {
					for(var e, i, r, n = this._tween, a = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), o = a.length, s = {}, l = n._propLookup.roundProps; --o > -1;) s[a[o]] = 1;
					for(o = a.length; --o > -1;)
						for(e = a[o], i = n._firstPT; i;) r = i._next, i.pg ? i.t._roundProps(s, !0) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), r && (r._prev = i._prev), i._prev ? i._prev._next = r : n._firstPT === i && (n._firstPT = r), i._next = i._prev = null, n._propLookup[e] = l)), i = r;
					return !1
				}, i._add = function(e, t, i, r) {
					this._addTween(e, t, i, i + r, t, !0), this._overwriteProps.push(t)
				}
			}(),
			function() {
				_gsScope._gsDefine.plugin({
					propName: "attr",
					API: 2,
					version: "0.5.0",
					init: function(e, t) {
						var i;
						if("function" != typeof e.setAttribute) return !1;
						for(i in t) this._addTween(e, "setAttribute", e.getAttribute(i) + "", t[i] + "", i, !1, i), this._overwriteProps.push(i);
						return !0
					}
				})
			}(), _gsScope._gsDefine.plugin({
				propName: "directionalRotation",
				version: "0.2.1",
				API: 2,
				init: function(e, t) {
					"object" != typeof t && (t = {
						rotation: t
					}), this.finals = {};
					var i, r, n, a, o, s, l = t.useRadians === !0 ? 2 * Math.PI : 360,
						h = 1e-6;
					for(i in t) "useRadians" !== i && (s = (t[i] + "").split("_"), r = s[0], n = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), a = this.finals[i] = "string" == typeof r && "=" === r.charAt(1) ? n + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, o = a - n, s.length && (r = s.join("_"), -1 !== r.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== r.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (o / l | 0) * l : -1 !== r.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (o / l | 0) * l)), (o > h || -h > o) && (this._addTween(e, i, n, n + o, i), this._overwriteProps.push(i)));
					return !0
				},
				set: function(e) {
					var t;
					if(1 !== e) this._super.setRatio.call(this, e);
					else
						for(t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
				}
			})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
				var t, i, r, n = _gsScope.GreenSockGlobals || _gsScope,
					a = n.com.greensock,
					o = 2 * Math.PI,
					s = Math.PI / 2,
					l = a._class,
					h = function(t, i) {
						var r = l("easing." + t, function() {}, !0),
							n = r.prototype = new e;
						return n.constructor = r, n.getRatio = i, r
					},
					c = e.register || function() {},
					u = function(e, t, i, r) {
						var n = l("easing." + e, {
							easeOut: new t,
							easeIn: new i,
							easeInOut: new r
						}, !0);
						return c(n, e), n
					},
					p = function(e, t, i) {
						this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
					},
					d = function(t, i) {
						var r = l("easing." + t, function(e) {
								this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
							}, !0),
							n = r.prototype = new e;
						return n.constructor = r, n.getRatio = i, n.config = function(e) {
							return new r(e)
						}, r
					},
					f = u("Back", d("BackOut", function(e) {
						return(e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
					}), d("BackIn", function(e) {
						return e * e * ((this._p1 + 1) * e - this._p1)
					}), d("BackInOut", function(e) {
						return(e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
					})),
					m = l("easing.SlowMo", function(e, t, i) {
						t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
					}, !0),
					E = m.prototype = new e;
				return E.constructor = m, E.getRatio = function(e) {
					var t = e + (.5 - e) * this._p;
					return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
				}, m.ease = new m(.7, .7), E.config = m.config = function(e, t, i) {
					return new m(e, t, i)
				}, t = l("easing.SteppedEase", function(e) {
					e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
				}, !0), E = t.prototype = new e, E.constructor = t, E.getRatio = function(e) {
					return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
				}, E.config = t.config = function(e) {
					return new t(e)
				}, i = l("easing.RoughEase", function(t) {
					t = t || {};
					for(var i, r, n, a, o, s, l = t.taper || "none", h = [], c = 0, u = 0 | (t.points || 20), d = u, f = t.randomize !== !1, m = t.clamp === !0, E = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --d > -1;) i = f ? Math.random() : 1 / u * d, r = E ? E.getRatio(i) : i, "none" === l ? n = g : "out" === l ? (a = 1 - i, n = a * a * g) : "in" === l ? n = i * i * g : .5 > i ? (a = 2 * i, n = a * a * .5 * g) : (a = 2 * (1 - i), n = a * a * .5 * g), f ? r += Math.random() * n - .5 * n : d % 2 ? r += .5 * n : r -= .5 * n, m && (r > 1 ? r = 1 : 0 > r && (r = 0)), h[c++] = {
						x: i,
						y: r
					};
					for(h.sort(function(e, t) {
							return e.x - t.x
						}), s = new p(1, 1, null), d = u; --d > -1;) o = h[d], s = new p(o.x, o.y, s);
					this._prev = new p(0, 0, 0 !== s.t ? s : s.next)
				}, !0), E = i.prototype = new e, E.constructor = i, E.getRatio = function(e) {
					var t = this._prev;
					if(e > t.t) {
						for(; t.next && e >= t.t;) t = t.next;
						t = t.prev
					} else
						for(; t.prev && e <= t.t;) t = t.prev;
					return this._prev = t, t.v + (e - t.t) / t.gap * t.c
				}, E.config = function(e) {
					return new i(e)
				}, i.ease = new i, u("Bounce", h("BounceOut", function(e) {
					return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
				}), h("BounceIn", function(e) {
					return(e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
				}), h("BounceInOut", function(e) {
					var t = .5 > e;
					return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
				})), u("Circ", h("CircOut", function(e) {
					return Math.sqrt(1 - (e -= 1) * e)
				}), h("CircIn", function(e) {
					return -(Math.sqrt(1 - e * e) - 1)
				}), h("CircInOut", function(e) {
					return(e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
				})), r = function(t, i, r) {
					var n = l("easing." + t, function(e, t) {
							this._p1 = e >= 1 ? e : 1, this._p2 = (t || r) / (1 > e ? e : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
						}, !0),
						a = n.prototype = new e;
					return a.constructor = n, a.getRatio = i, a.config = function(e, t) {
						return new n(e, t)
					}, n
				}, u("Elastic", r("ElasticOut", function(e) {
					return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
				}, .3), r("ElasticIn", function(e) {
					return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
				}, .3), r("ElasticInOut", function(e) {
					return(e *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
				}, .45)), u("Expo", h("ExpoOut", function(e) {
					return 1 - Math.pow(2, -10 * e)
				}), h("ExpoIn", function(e) {
					return Math.pow(2, 10 * (e - 1)) - .001
				}), h("ExpoInOut", function(e) {
					return(e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
				})), u("Sine", h("SineOut", function(e) {
					return Math.sin(e * s)
				}), h("SineIn", function(e) {
					return -Math.cos(e * s) + 1
				}), h("SineInOut", function(e) {
					return -.5 * (Math.cos(Math.PI * e) - 1)
				})), l("easing.EaseLookup", {
					find: function(t) {
						return e.map[t]
					}
				}, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), f
			}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(e, t) {
		"use strict";
		var i = {},
			r = e.GreenSockGlobals = e.GreenSockGlobals || e;
		if(!r.TweenLite) {
			var n, a, o, s, l, h = function(e) {
					var t, i = e.split("."),
						n = r;
					for(t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
					return n
				},
				c = h("com.greensock"),
				u = 1e-10,
				p = function(e) {
					var t, i = [],
						r = e.length;
					for(t = 0; t !== r; i.push(e[t++]));
					return i
				},
				d = function() {},
				f = function() {
					var e = Object.prototype.toString,
						t = e.call([]);
					return function(i) {
						return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
					}
				}(),
				m = {},
				E = function(n, a, o, s) {
					this.sc = m[n] ? m[n].sc : [], m[n] = this, this.gsClass = null, this.func = o;
					var l = [];
					this.check = function(c) {
						for(var u, p, d, f, g, v = a.length, T = v; --v > -1;)(u = m[a[v]] || new E(a[v], [])).gsClass ? (l[v] = u.gsClass, T--) : c && u.sc.push(this);
						if(0 === T && o) {
							if(p = ("com.greensock." + n).split("."), d = p.pop(), f = h(p.join("."))[d] = this.gsClass = o.apply(o, l), s)
								if(r[d] = f, g = "undefined" != typeof module && module.exports, !g && "function" == typeof define && define.amd) define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
									return f
								});
								else if(g)
								if(n === t) {
									module.exports = i[t] = f;
									for(v in i) f[v] = i[v]
								} else i[t] && (i[t][d] = f);
							for(v = 0; v < this.sc.length; v++) this.sc[v].check()
						}
					}, this.check(!0)
				},
				g = e._gsDefine = function(e, t, i, r) {
					return new E(e, t, i, r)
				},
				v = c._class = function(e, t, i) {
					return t = t || function() {}, g(e, [], function() {
						return t
					}, i), t
				};
			g.globals = r;
			var T = [0, 0, 1, 1],
				y = [],
				_ = v("easing.Ease", function(e, t, i, r) {
					this._func = e, this._type = i || 0, this._power = r || 0, this._params = t ? T.concat(t) : T
				}, !0),
				R = _.map = {},
				x = _.register = function(e, t, i, r) {
					for(var n, a, o, s, l = t.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
						for(a = l[h], n = r ? v("easing." + a, null, !0) : c.easing[a] || {}, o = u.length; --o > -1;) s = u[o], R[a + "." + s] = R[s + a] = n[s] = e.getRatio ? e : e[s] || new e
				};
			for(o = _.prototype, o._calcEnd = !1, o.getRatio = function(e) {
					if(this._func) return this._params[0] = e, this._func.apply(null, this._params);
					var t = this._type,
						i = this._power,
						r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
					return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
				}, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = n.length; --a > -1;) o = n[a] + ",Power" + a, x(new _(null, null, 1, a), o, "easeOut", !0), x(new _(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone" : "")), x(new _(null, null, 3, a), o, "easeInOut");
			R.linear = c.easing.Linear.easeIn, R.swing = c.easing.Quad.easeInOut;
			var b = v("events.EventDispatcher", function(e) {
				this._listeners = {}, this._eventTarget = e || this
			});
			o = b.prototype, o.addEventListener = function(e, t, i, r, n) {
				n = n || 0;
				var a, o, h = this._listeners[e],
					c = 0;
				for(this !== s || l || s.wake(), null == h && (this._listeners[e] = h = []), o = h.length; --o > -1;) a = h[o], a.c === t && a.s === i ? h.splice(o, 1) : 0 === c && a.pr < n && (c = o + 1);
				h.splice(c, 0, {
					c: t,
					s: i,
					up: r,
					pr: n
				})
			}, o.removeEventListener = function(e, t) {
				var i, r = this._listeners[e];
				if(r)
					for(i = r.length; --i > -1;)
						if(r[i].c === t) return void r.splice(i, 1)
			}, o.dispatchEvent = function(e) {
				var t, i, r, n = this._listeners[e];
				if(n)
					for(t = n.length, i = this._eventTarget; --t > -1;) r = n[t], r && (r.up ? r.c.call(r.s || i, {
						type: e,
						target: i
					}) : r.c.call(r.s || i))
			};
			var w = e.requestAnimationFrame,
				H = e.cancelAnimationFrame,
				M = Date.now || function() {
					return(new Date).getTime()
				},
				S = M();
			for(n = ["ms", "moz", "webkit", "o"], a = n.length; --a > -1 && !w;) w = e[n[a] + "RequestAnimationFrame"], H = e[n[a] + "CancelAnimationFrame"] || e[n[a] + "CancelRequestAnimationFrame"];
			v("Ticker", function(e, t) {
				var i, r, n, a, o, h = this,
					c = M(),
					p = t !== !1 && w ? "auto" : !1,
					f = 500,
					m = 33,
					E = "tick",
					g = function(e) {
						var t, s, l = M() - S;
						l > f && (c += l - m), S += l, h.time = (S - c) / 1e3, t = h.time - o, (!i || t > 0 || e === !0) && (h.frame++, o += t + (t >= a ? .004 : a - t), s = !0), e !== !0 && (n = r(g)), s && h.dispatchEvent(E)
					};
				b.call(h), h.time = h.frame = 0, h.tick = function() {
					g(!0)
				}, h.lagSmoothing = function(e, t) {
					f = e || 1 / u, m = Math.min(t, f, 0)
				}, h.sleep = function() {
					null != n && (p && H ? H(n) : clearTimeout(n), r = d, n = null, h === s && (l = !1))
				}, h.wake = function(e) {
					null !== n ? h.sleep() : e ? c += -S + (S = M()) : h.frame > 10 && (S = M() - f + 5), r = 0 === i ? d : p && w ? w : function(e) {
						return setTimeout(e, 1e3 * (o - h.time) + 1 | 0)
					}, h === s && (l = !0), g(2)
				}, h.fps = function(e) {
					return arguments.length ? (i = e, a = 1 / (i || 60), o = this.time + a, void h.wake()) : i
				}, h.useRAF = function(e) {
					return arguments.length ? (h.sleep(), p = e, void h.fps(i)) : p
				}, h.fps(e), setTimeout(function() {
					"auto" === p && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
				}, 1500)
			}), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
			var A = v("core.Animation", function(e, t) {
				if(this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, Y) {
					l || s.wake();
					var i = this.vars.useFrames ? q : Y;
					i.add(this, i._time), this.vars.paused && this.paused(!0)
				}
			});
			s = A.ticker = new c.Ticker, o = A.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
			var C = function() {
				l && M() - S > 2e3 && s.wake(), setTimeout(C, 2e3)
			};
			C(), o.play = function(e, t) {
				return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
			}, o.pause = function(e, t) {
				return null != e && this.seek(e, t), this.paused(!0)
			}, o.resume = function(e, t) {
				return null != e && this.seek(e, t), this.paused(!1)
			}, o.seek = function(e, t) {
				return this.totalTime(Number(e), t !== !1)
			}, o.restart = function(e, t) {
				return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
			}, o.reverse = function(e, t) {
				return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
			}, o.render = function() {}, o.invalidate = function() {
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
			}, o.isActive = function() {
				var e, t = this._timeline,
					i = this._startTime;
				return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() / this._timeScale
			}, o._enabled = function(e, t) {
				return l || s.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
			}, o._kill = function() {
				return this._enabled(!1, !1)
			}, o.kill = function(e, t) {
				return this._kill(e, t), this
			}, o._uncache = function(e) {
				for(var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
				return this
			}, o._swapSelfInParams = function(e) {
				for(var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
				return i
			}, o._callback = function(e) {
				var t = this.vars;
				t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || y)
			}, o.eventCallback = function(e, t, i, r) {
				if("on" === (e || "").substr(0, 2)) {
					var n = this.vars;
					if(1 === arguments.length) return n[e];
					null == t ? delete n[e] : (n[e] = t, n[e + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
				}
				return this
			}, o.delay = function(e) {
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
			}, o.duration = function(e) {
				return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, o.totalDuration = function(e) {
				return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
			}, o.time = function(e, t) {
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
			}, o.totalTime = function(e, t, i) {
				if(l || s.wake(), !arguments.length) return this._totalTime;
				if(this._timeline) {
					if(0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
						this._dirty && this.totalDuration();
						var r = this._totalDuration,
							n = this._timeline;
						if(e > r && !i && (e = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - e : e) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
							for(; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
					}
					this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (I.length && Z(), this.render(e, t, !1), I.length && Z())
				}
				return this
			}, o.progress = o.totalProgress = function(e, t) {
				var i = this.duration();
				return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
			}, o.startTime = function(e) {
				return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
			}, o.endTime = function(e) {
				return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
			}, o.timeScale = function(e) {
				if(!arguments.length) return this._timeScale;
				if(e = e || u, this._timeline && this._timeline.smoothChildTiming) {
					var t = this._pauseTime,
						i = t || 0 === t ? t : this._timeline.totalTime();
					this._startTime = i - (i - this._startTime) * this._timeScale / e
				}
				return this._timeScale = e, this._uncache(!1)
			}, o.reversed = function(e) {
				return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, o.paused = function(e) {
				if(!arguments.length) return this._paused;
				var t, i, r = this._timeline;
				return e != this._paused && r && (l || e || s.wake(), t = r.rawTime(), i = t - this._pauseTime, !e && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = r.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
			};
			var L = v("core.SimpleTimeline", function(e) {
				A.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			o = L.prototype = new A, o.constructor = L, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(e, t) {
				var i, r;
				if(e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
					for(r = e._startTime; i && i._startTime > r;) i = i._prev;
				return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
			}, o._remove = function(e, t) {
				return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
			}, o.render = function(e, t, i) {
				var r, n = this._first;
				for(this._totalTime = this._time = this._rawPrevTime = e; n;) r = n._next, (n._active || e >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r
			}, o.rawTime = function() {
				return l || s.wake(), this._totalTime
			};
			var P = v("TweenLite", function(t, i, r) {
					if(A.call(this, i, r), this.render = P.prototype.render, null == t) throw "Cannot tween a null target.";
					this.target = t = "string" != typeof t ? t : P.selector(t) || t;
					var n, a, o, s = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
						l = this.vars.overwrite;
					if(this._overwrite = l = null == l ? X[P.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (s || t instanceof Array || t.push && f(t)) && "number" != typeof t[0])
						for(this._targets = o = p(t), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++) a = o[n], a ? "string" != typeof a ? a.length && a !== e && a[0] && (a[0] === e || a[0].nodeType && a[0].style && !a.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(p(a))) : (this._siblings[n] = K(a, this, !1), 1 === l && this._siblings[n].length > 1 && J(a, this, null, 1, this._siblings[n])) : (a = o[n--] = P.selector(a), "string" == typeof a && o.splice(n + 1, 1)) : o.splice(n--, 1);
					else this._propLookup = {}, this._siblings = K(t, this, !1), 1 === l && this._siblings.length > 1 && J(t, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(Math.min(0, -this._delay)))
				}, !0),
				D = function(t) {
					return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
				},
				O = function(e, t) {
					var i, r = {};
					for(i in e) W[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!V[i] || V[i] && V[i]._autoCSS) || (r[i] = e[i], delete e[i]);
					e.css = r
				};
			o = P.prototype = new A, o.constructor = P, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, P.version = "1.18.5", P.defaultEase = o._ease = new _(null, null, 1, 1), P.defaultOverwrite = "auto", P.ticker = s, P.autoSleep = 120, P.lagSmoothing = function(e, t) {
				s.lagSmoothing(e, t)
			}, P.selector = e.$ || e.jQuery || function(t) {
				var i = e.$ || e.jQuery;
				return i ? (P.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
			};
			var I = [],
				B = {},
				U = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				F = function(e) {
					for(var t, i = this._firstPT, r = 1e-6; i;) t = i.blob ? e ? this.join("") : this.start : i.c * e + i.s, i.r ? t = Math.round(t) : r > t && t > -r && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
				},
				N = function(e, t, i, r) {
					var n, a, o, s, l, h, c, u = [e, t],
						p = 0,
						d = "",
						f = 0;
					for(u.start = e, i && (i(u), e = u[0], t = u[1]), u.length = 0, n = e.match(U) || [], a = t.match(U) || [], r && (r._next = null, r.blob = 1, u._firstPT = r), l = a.length, s = 0; l > s; s++) c = a[s], h = t.substr(p, t.indexOf(c, p) - p), d += h || !s ? h : ",", p += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === n[s] || n.length <= s ? d += c : (d && (u.push(d), d = ""), o = parseFloat(n[s]), u.push(o), u._firstPT = {
						_next: u._firstPT,
						t: u,
						p: u.length - 1,
						s: o,
						c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
						f: 0,
						r: f && 4 > f
					}), p += c.length;
					return d += t.substr(p), d && u.push(d), u.setRatio = F, u
				},
				k = function(e, t, i, r, n, a, o, s) {
					var l, h, c = "get" === i ? e[t] : i,
						u = typeof e[t],
						p = "string" == typeof r && "=" === r.charAt(1),
						d = {
							t: e,
							p: t,
							s: c,
							f: "function" === u,
							pg: 0,
							n: n || t,
							r: a,
							pr: 0,
							c: p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - c || 0
						};
					return "number" !== u && ("function" === u && "get" === i && (h = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), d.s = c = o ? e[h](o) : e[h]()), "string" == typeof c && (o || isNaN(c)) ? (d.fp = o, l = N(c, r, s || P.defaultStringFilter, d), d = {
						t: l,
						p: "setRatio",
						s: 0,
						c: 1,
						f: 2,
						pg: 0,
						n: n || t,
						pr: 0
					}) : p || (d.s = parseFloat(c), d.c = parseFloat(r) - d.s || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
				},
				G = P._internals = {
					isArray: f,
					isSelector: D,
					lazyTweens: I,
					blobDif: N
				},
				V = P._plugins = {},
				z = G.tweenLookup = {},
				j = 0,
				W = G.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1
				},
				X = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				q = A._rootFramesTimeline = new L,
				Y = A._rootTimeline = new L,
				$ = 30,
				Z = G.lazyRender = function() {
					var e, t = I.length;
					for(B = {}; --t > -1;) e = I[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
					I.length = 0
				};
			Y._startTime = s.time, q._startTime = s.frame, Y._active = q._active = !0, setTimeout(Z, 1), A._updateRoot = P.render = function() {
				var e, t, i;
				if(I.length && Z(), Y.render((s.time - Y._startTime) * Y._timeScale, !1, !1), q.render((s.frame - q._startTime) * q._timeScale, !1, !1), I.length && Z(), s.frame >= $) {
					$ = s.frame + (parseInt(P.autoSleep, 10) || 120);
					for(i in z) {
						for(t = z[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
						0 === t.length && delete z[i]
					}
					if(i = Y._first, (!i || i._paused) && P.autoSleep && !q._first && 1 === s._listeners.tick.length) {
						for(; i && i._paused;) i = i._next;
						i || s.sleep()
					}
				}
			}, s.addEventListener("tick", A._updateRoot);
			var K = function(e, t, i) {
					var r, n, a = e._gsTweenID;
					if(z[a || (e._gsTweenID = a = "t" + j++)] || (z[a] = {
							target: e,
							tweens: []
						}), t && (r = z[a].tweens, r[n = r.length] = t, i))
						for(; --n > -1;) r[n] === t && r.splice(n, 1);
					return z[a].tweens
				},
				Q = function(e, t, i, r) {
					var n, a, o = e.vars.onOverwrite;
					return o && (n = o(e, t, i, r)), o = P.onOverwrite, o && (a = o(e, t, i, r)), n !== !1 && a !== !1
				},
				J = function(e, t, i, r, n) {
					var a, o, s, l;
					if(1 === r || r >= 4) {
						for(l = n.length, a = 0; l > a; a++)
							if((s = n[a]) !== t) s._gc || s._kill(null, e, t) && (o = !0);
							else if(5 === r) break;
						return o
					}
					var h, c = t._startTime + u,
						p = [],
						d = 0,
						f = 0 === t._duration;
					for(a = n.length; --a > -1;)(s = n[a]) === t || s._gc || s._paused || (s._timeline !== t._timeline ? (h = h || et(t, 0, f), 0 === et(s, h, f) && (p[d++] = s)) : s._startTime <= c && s._startTime + s.totalDuration() / s._timeScale > c && ((f || !s._initted) && c - s._startTime <= 2e-10 || (p[d++] = s)));
					for(a = d; --a > -1;)
						if(s = p[a], 2 === r && s._kill(i, e, t) && (o = !0), 2 !== r || !s._firstPT && s._initted) {
							if(2 !== r && !Q(s, t)) continue;
							s._enabled(!1, !1) && (o = !0)
						}
					return o
				},
				et = function(e, t, i) {
					for(var r = e._timeline, n = r._timeScale, a = e._startTime; r._timeline;) {
						if(a += r._startTime, n *= r._timeScale, r._paused) return -100;
						r = r._timeline
					}
					return a /= n, a > t ? a - t : i && a === t || !e._initted && 2 * u > a - t ? u : (a += e.totalDuration() / e._timeScale / n) > t + u ? 0 : a - t - u
				};
			o._init = function() {
				var e, t, i, r, n, a = this.vars,
					o = this._overwrittenProps,
					s = this._duration,
					l = !!a.immediateRender,
					h = a.ease;
				if(a.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
					for(r in a.startAt) n[r] = a.startAt[r];
					if(n.overwrite = !1, n.immediateRender = !0, n.lazy = l && a.lazy !== !1, n.startAt = n.delay = null, this._startAt = P.to(this.target, 0, n), l)
						if(this._time > 0) this._startAt = null;
						else if(0 !== s) return
				} else if(a.runBackwards && 0 !== s)
					if(this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else {
						0 !== this._time && (l = !1), i = {};
						for(r in a) W[r] && "autoCSS" !== r || (i[r] = a[r]);
						if(i.overwrite = 0, i.data = "isFromStart", i.lazy = l && a.lazy !== !1, i.immediateRender = l, this._startAt = P.to(this.target, 0, i), l) {
							if(0 === this._time) return
						} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					}
				if(this._ease = h = h ? h instanceof _ ? h : "function" == typeof h ? new _(h, a.easeParams) : R[h] || P.defaultEase : P.defaultEase, a.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for(e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null) && (t = !0);
				else t = this._initProps(this.target, this._propLookup, this._siblings, o);
				if(t && P._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
					for(i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
				this._onUpdate = a.onUpdate, this._initted = !0
			}, o._initProps = function(t, i, r, n) {
				var a, o, s, l, h, c;
				if(null == t) return !1;
				B[t._gsTweenID] && Z(), this.vars.css || t.style && t !== e && t.nodeType && V.css && this.vars.autoCSS !== !1 && O(this.vars, t);
				for(a in this.vars)
					if(c = this.vars[a], W[a]) c && (c instanceof Array || c.push && f(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
					else if(V[a] && (l = new V[a])._onInitTween(t, this.vars[a], this)) {
					for(this._firstPT = h = {
							_next: this._firstPT,
							t: l,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: a,
							pg: 1,
							pr: l._priority
						}, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
					(l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
				} else i[a] = k.call(this, t, a, "get", c, a, 0, null, this.vars.stringFilter);
				return n && this._kill(n, t) ? this._initProps(t, i, r, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && J(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0), s)
			}, o.render = function(e, t, i) {
				var r, n, a, o, s = this._time,
					l = this._duration,
					h = this._rawPrevTime;
				if(e >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > h || 0 >= e && e >= -1e-7 || h === u && "isPause" !== this.data) && h !== e && (i = !0, h > u && (n = "onReverseComplete")), this._rawPrevTime = o = !t || e || h === e ? e : u);
				else if(1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && h > 0) && (n = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !t || e || h === e ? e : u)), this._initted || (i = !0);
				else if(this._totalTime = this._time = e, this._easeType) {
					var c = e / l,
						p = this._easeType,
						d = this._easePower;
					(1 === p || 3 === p && c >= .5) && (c = 1 - c), 3 === p && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === p ? 1 - c : 2 === p ? c : .5 > e / l ? c / 2 : 1 - c / 2
				} else this.ratio = this._ease.getRatio(e / l);
				if(this._time !== s || i) {
					if(!this._initted) {
						if(this._init(), !this._initted || this._gc) return;
						if(!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = h, I.push(this), void(this._lazy = [e, t]);
						this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for(this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && e >= 0 && (this._active = !0), 0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
					this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, i), t || (this._time !== s || r || i) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0))
				}
			}, o._kill = function(e, t, i) {
				if("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				t = "string" != typeof t ? t || this._targets || this.target : P.selector(t) || t;
				var r, n, a, o, s, l, h, c, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
				if((f(t) || D(t)) && "number" != typeof t[0])
					for(r = t.length; --r > -1;) this._kill(e, t[r], i) && (l = !0);
				else {
					if(this._targets) {
						for(r = this._targets.length; --r > -1;)
							if(t === this._targets[r]) {
								s = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {} : "all";
								break
							}
					} else {
						if(t !== this.target) return !1;
						s = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
					}
					if(s) {
						if(h = e || s, c = e !== n && "all" !== n && e !== s && ("object" != typeof e || !e._tempKill), i && (P.onOverwrite || this.vars.onOverwrite)) {
							for(a in h) s[a] && (u || (u = []), u.push(a));
							if((u || !e) && !Q(this, i, t, u)) return !1
						}
						for(a in h)(o = s[a]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[a]), c && (n[a] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return l
			}, o.invalidate = function() {
				return this._notifyPluginsOfEnabled && P._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(Math.min(0, -this._delay))), this
			}, o._enabled = function(e, t) {
				if(l || s.wake(), e && this._gc) {
					var i, r = this._targets;
					if(r)
						for(i = r.length; --i > -1;) this._siblings[i] = K(r[i], this, !0);
					else this._siblings = K(this.target, this, !0)
				}
				return A.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? P._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
			}, P.to = function(e, t, i) {
				return new P(e, t, i)
			}, P.from = function(e, t, i) {
				return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new P(e, t, i)
			}, P.fromTo = function(e, t, i, r) {
				return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new P(e, t, r)
			}, P.delayedCall = function(e, t, i, r, n) {
				return new P(t, 0, {
					delay: e,
					onComplete: t,
					onCompleteParams: i,
					callbackScope: r,
					onReverseComplete: t,
					onReverseCompleteParams: i,
					immediateRender: !1,
					lazy: !1,
					useFrames: n,
					overwrite: 0
				})
			}, P.set = function(e, t) {
				return new P(e, 0, t)
			}, P.getTweensOf = function(e, t) {
				if(null == e) return [];
				e = "string" != typeof e ? e : P.selector(e) || e;
				var i, r, n, a;
				if((f(e) || D(e)) && "number" != typeof e[0]) {
					for(i = e.length, r = []; --i > -1;) r = r.concat(P.getTweensOf(e[i], t));
					for(i = r.length; --i > -1;)
						for(a = r[i], n = i; --n > -1;) a === r[n] && r.splice(i, 1)
				} else
					for(r = K(e).concat(), i = r.length; --i > -1;)(r[i]._gc || t && !r[i].isActive()) && r.splice(i, 1);
				return r
			}, P.killTweensOf = P.killDelayedCallsTo = function(e, t, i) {
				"object" == typeof t && (i = t, t = !1);
				for(var r = P.getTweensOf(e, t), n = r.length; --n > -1;) r[n]._kill(i, e)
			};
			var tt = v("plugins.TweenPlugin", function(e, t) {
				this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = tt.prototype
			}, !0);
			if(o = tt.prototype, tt.version = "1.18.0", tt.API = 2, o._firstPT = null, o._addTween = k, o.setRatio = F, o._kill = function(e) {
					var t, i = this._overwriteProps,
						r = this._firstPT;
					if(null != e[this._propName]) this._overwriteProps = [];
					else
						for(t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
					for(; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
					return !1
				}, o._roundProps = function(e, t) {
					for(var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
				}, P._onPluginEvent = function(e, t) {
					var i, r, n, a, o, s = t._firstPT;
					if("_onInitAllProps" === e) {
						for(; s;) {
							for(o = s._next, r = n; r && r.pr > s.pr;) r = r._next;
							(s._prev = r ? r._prev : a) ? s._prev._next = s: n = s, (s._next = r) ? r._prev = s : a = s, s = o
						}
						s = t._firstPT = n
					}
					for(; s;) s.pg && "function" == typeof s.t[e] && s.t[e]() && (i = !0), s = s._next;
					return i
				}, tt.activate = function(e) {
					for(var t = e.length; --t > -1;) e[t].API === tt.API && (V[(new e[t])._propName] = e[t]);
					return !0
				}, g.plugin = function(e) {
					if(!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
					var t, i = e.propName,
						r = e.priority || 0,
						n = e.overwriteProps,
						a = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_roundProps",
							initAll: "_onInitAllProps"
						},
						o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
							tt.call(this, i, r), this._overwriteProps = n || []
						}, e.global === !0),
						s = o.prototype = new tt(i);
					s.constructor = o, o.API = e.API;
					for(t in a) "function" == typeof e[t] && (s[a[t]] = e[t]);
					return o.version = e.version, tt.activate([o]), o
				}, n = e._gsQueue) {
				for(a = 0; a < n.length; a++) n[a]();
				for(o in m) m[o].func || e.console.log("GSAP encountered missing dependency: com.greensock." + o)
			}
			l = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
		"use strict";
		_gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
			var r = function(t) {
					e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
				},
				n = 1e-10,
				a = t._internals,
				o = a.lazyTweens,
				s = a.lazyRender,
				l = new i(null, null, 1, 0),
				h = r.prototype = new e;
			return h.constructor = r, h.kill()._gc = !1, r.version = "1.18.5", h.invalidate = function() {
				return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
			}, h.addCallback = function(e, i, r, n) {
				return this.add(t.delayedCall(0, e, r, n), i)
			}, h.removeCallback = function(e, t) {
				if(e)
					if(null == t) this._kill(null, e);
					else
						for(var i = this.getTweensOf(e, !1), r = i.length, n = this._parseTimeOrLabel(t); --r > -1;) i[r]._startTime === n && i[r]._enabled(!1, !1);
				return this
			}, h.removePause = function(t) {
				return this.removeCallback(e._internals.pauseCallback, t)
			}, h.tweenTo = function(e, i) {
				i = i || {};
				var r, n, a, o = {
					ease: l,
					useFrames: this.usesFrames(),
					immediateRender: !1
				};
				for(n in i) o[n] = i[n];
				return o.time = this._parseTimeOrLabel(e), r = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new t(this, r, o), o.onStart = function() {
					a.target.paused(!0), a.vars.time !== a.target.time() && r === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && a._callback("onStart")
				}, a
			}, h.tweenFromTo = function(e, t, i) {
				i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
					onComplete: this.seek,
					onCompleteParams: [e],
					callbackScope: this
				}, i.immediateRender = i.immediateRender !== !1;
				var r = this.tweenTo(t, i);
				return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
			}, h.render = function(e, t, i) {
				this._gc && this._enabled(!0, !1);
				var r, a, l, h, c, u, p, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
					m = this._duration,
					E = this._time,
					g = this._totalTime,
					v = this._startTime,
					T = this._timeScale,
					y = this._rawPrevTime,
					_ = this._paused,
					R = this._cycle;
				if(e >= f - 1e-7) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > y || y === n) && y !== e && this._first && (c = !0, y > n && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = m, e = m + 1e-4);
				else if(1e-7 > e)
					if(this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== E || 0 === m && y !== n && (y > 0 || 0 > e && y >= 0) && !this._locked) && (h = "onReverseComplete", a = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = a = !0, h = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = e;
					else {
						if(this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : n, 0 === e && a)
							for(r = this._first; r && 0 === r._startTime;) r._duration || (a = !1), r = r._next;
						e = 0, this._initted || (c = !0)
					}
				else if(0 === m && 0 > y && (c = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && e >= g && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
					if(e = this._time, e >= E)
						for(r = this._first; r && r._startTime <= e && !p;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (p = r), r = r._next;
					else
						for(r = this._last; r && r._startTime >= e && !p;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (p = r), r = r._prev;
					p && (this._time = e = p._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
				}
				if(this._cycle !== R && !this._locked) {
					var x = this._yoyo && 0 !== (1 & R),
						b = x === (this._yoyo && 0 !== (1 & this._cycle)),
						w = this._totalTime,
						H = this._cycle,
						M = this._rawPrevTime,
						S = this._time;
					if(this._totalTime = R * m, this._cycle < R ? x = !x : this._totalTime += m, this._time = E, this._rawPrevTime = 0 === m ? y - 1e-4 : y, this._cycle = R, this._locked = !0, E = x ? 0 : m, this.render(E, t, 0 === m), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), E !== this._time) return;
					if(b && (E = x ? m + 1e-4 : -1e-4, this.render(E, !0, !1)), this._locked = !1, this._paused && !_) return;
					this._time = S, this._totalTime = w, this._cycle = H, this._rawPrevTime = M
				}
				if(!(this._time !== E && this._first || i || c || p)) return void(g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
				if(this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && e > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), d = this._time, d >= E)
					for(r = this._first; r && (l = r._next, d === this._time && (!this._paused || _));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (p === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = l;
				else
					for(r = this._last; r && (l = r._prev, d === this._time && (!this._paused || _));) {
						if(r._active || r._startTime <= E && !r._paused && !r._gc) {
							if(p === r) {
								for(p = r._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (e - p._startTime) * p._timeScale : (e - p._startTime) * p._timeScale, t, i), p = p._prev;
								p = null, this.pause()
							}
							r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
						}
						r = l
					}
				this._onUpdate && (t || (o.length && s(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || T !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (a && (o.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[h] && this._callback(h)))
			}, h.getActive = function(e, t, i) {
				null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
				var r, n, a = [],
					o = this.getChildren(e, t, i),
					s = 0,
					l = o.length;
				for(r = 0; l > r; r++) n = o[r], n.isActive() && (a[s++] = n);
				return a
			}, h.getLabelAfter = function(e) {
				e || 0 !== e && (e = this._time);
				var t, i = this.getLabelsArray(),
					r = i.length;
				for(t = 0; r > t; t++)
					if(i[t].time > e) return i[t].name;
				return null
			}, h.getLabelBefore = function(e) {
				null == e && (e = this._time);
				for(var t = this.getLabelsArray(), i = t.length; --i > -1;)
					if(t[i].time < e) return t[i].name;
				return null
			}, h.getLabelsArray = function() {
				var e, t = [],
					i = 0;
				for(e in this._labels) t[i++] = {
					time: this._labels[e],
					name: e
				};
				return t.sort(function(e, t) {
					return e.time - t.time
				}), t
			}, h.progress = function(e, t) {
				return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
			}, h.totalProgress = function(e, t) {
				return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
			}, h.totalDuration = function(t) {
				return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
			}, h.time = function(e, t) {
				return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
			}, h.repeat = function(e) {
				return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
			}, h.repeatDelay = function(e) {
				return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
			}, h.yoyo = function(e) {
				return arguments.length ? (this._yoyo = e, this) : this._yoyo
			}, h.currentLabel = function(e) {
				return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
			}, r
		}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
			var r = function(e) {
					t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
					var i, r, n = this.vars;
					for(r in n) i = n[r], l(i) && -1 !== i.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(i));
					l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
				},
				n = 1e-10,
				a = i._internals,
				o = r._internals = {},
				s = a.isSelector,
				l = a.isArray,
				h = a.lazyTweens,
				c = a.lazyRender,
				u = _gsScope._gsDefine.globals,
				p = function(e) {
					var t, i = {};
					for(t in e) i[t] = e[t];
					return i
				},
				d = function(e, t, i) {
					var r, n, a = e.cycle;
					for(r in a) n = a[r], e[r] = "function" == typeof n ? n.call(t[i], i) : n[i % n.length];
					delete e.cycle
				},
				f = o.pauseCallback = function() {},
				m = function(e) {
					var t, i = [],
						r = e.length;
					for(t = 0; t !== r; i.push(e[t++]));
					return i
				},
				E = r.prototype = new t;
			return r.version = "1.18.5", E.constructor = r, E.kill()._gc = E._forcingPlayhead = E._hasPause = !1, E.to = function(e, t, r, n) {
				var a = r.repeat && u.TweenMax || i;
				return t ? this.add(new a(e, t, r), n) : this.set(e, r, n)
			}, E.from = function(e, t, r, n) {
				return this.add((r.repeat && u.TweenMax || i).from(e, t, r), n)
			}, E.fromTo = function(e, t, r, n, a) {
				var o = n.repeat && u.TweenMax || i;
				return t ? this.add(o.fromTo(e, t, r, n), a) : this.set(e, n, a)
			}, E.staggerTo = function(e, t, n, a, o, l, h, c) {
				var u, f, E = new r({
						onComplete: l,
						onCompleteParams: h,
						callbackScope: c,
						smoothChildTiming: this.smoothChildTiming
					}),
					g = n.cycle;
				for("string" == typeof e && (e = i.selector(e) || e), e = e || [], s(e) && (e = m(e)), a = a || 0, 0 > a && (e = m(e), e.reverse(), a *= -1), f = 0; f < e.length; f++) u = p(n), u.startAt && (u.startAt = p(u.startAt), u.startAt.cycle && d(u.startAt, e, f)), g && (d(u, e, f), null != u.duration && (t = u.duration, delete u.duration)), E.to(e[f], t, u, f * a);
				return this.add(E, o)
			}, E.staggerFrom = function(e, t, i, r, n, a, o, s) {
				return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, r, n, a, o, s)
			}, E.staggerFromTo = function(e, t, i, r, n, a, o, s, l) {
				return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, r, n, a, o, s, l)
			}, E.call = function(e, t, r, n) {
				return this.add(i.delayedCall(0, e, t, r), n)
			}, E.set = function(e, t, r) {
				return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new i(e, 0, t), r)
			}, r.exportRoot = function(e, t) {
				e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
				var n, a, o = new r(e),
					s = o._timeline;
				for(null == t && (t = !0), s._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = s._time, n = s._first; n;) a = n._next, t && n instanceof i && n.target === n.vars.onComplete || o.add(n, n._startTime - n._delay), n = a;
				return s.add(o, 0), o
			}, E.add = function(n, a, o, s) {
				var h, c, u, p, d, f;
				if("number" != typeof a && (a = this._parseTimeOrLabel(a, 0, !0, n)), !(n instanceof e)) {
					if(n instanceof Array || n && n.push && l(n)) {
						for(o = o || "normal", s = s || 0, h = a, c = n.length, u = 0; c > u; u++) l(p = n[u]) && (p = new r({
							tweens: p
						})), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += s;
						return this._uncache(!0)
					}
					if("string" == typeof n) return this.addLabel(n, a);
					if("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
					n = i.delayedCall(0, n)
				}
				if(t.prototype.add.call(this, n, a), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
					for(d = this, f = d.rawTime() > n._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
				return this
			}, E.remove = function(t) {
				if(t instanceof e) {
					this._remove(t, !1);
					var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
					return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
				}
				if(t instanceof Array || t && t.push && l(t)) {
					for(var r = t.length; --r > -1;) this.remove(t[r]);
					return this
				}
				return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
			}, E._remove = function(e, i) {
				t.prototype._remove.call(this, e, i);
				var r = this._last;
				return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
			}, E.append = function(e, t) {
				return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
			}, E.insert = E.insertMultiple = function(e, t, i, r) {
				return this.add(e, t || 0, i, r)
			}, E.appendMultiple = function(e, t, i, r) {
				return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, r)
			}, E.addLabel = function(e, t) {
				return this._labels[e] = this._parseTimeOrLabel(t), this
			}, E.addPause = function(e, t, r, n) {
				var a = i.delayedCall(0, f, r, n || this);
				return a.vars.onComplete = a.vars.onReverseComplete = t, a.data = "isPause", this._hasPause = !0, this.add(a, e)
			}, E.removeLabel = function(e) {
				return delete this._labels[e], this
			}, E.getLabelTime = function(e) {
				return null != this._labels[e] ? this._labels[e] : -1
			}, E._parseTimeOrLabel = function(t, i, r, n) {
				var a;
				if(n instanceof e && n.timeline === this) this.remove(n);
				else if(n && (n instanceof Array || n.push && l(n)))
					for(a = n.length; --a > -1;) n[a] instanceof e && n[a].timeline === this && this.remove(n[a]);
				if("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, r);
				if(i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
				else {
					if(a = t.indexOf("="), -1 === a) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
					i = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1)), t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, r) : this.duration()
				}
				return Number(t) + i
			}, E.seek = function(e, t) {
				return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
			}, E.stop = function() {
				return this.paused(!0)
			}, E.gotoAndPlay = function(e, t) {
				return this.play(e, t)
			}, E.gotoAndStop = function(e, t) {
				return this.pause(e, t)
			}, E.render = function(e, t, i) {
				this._gc && this._enabled(!0, !1);
				var r, a, o, s, l, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
					f = this._time,
					m = this._startTime,
					E = this._timeScale,
					g = this._paused;
				if(e >= d - 1e-7) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (a = !0, s = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > n && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, e = d + 1e-4;
				else if(1e-7 > e)
					if(this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (s = "onReverseComplete", a = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = a = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
					else {
						if(this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, 0 === e && a)
							for(r = this._first; r && 0 === r._startTime;) r._duration || (a = !1), r = r._next;
						e = 0, this._initted || (l = !0)
					}
				else {
					if(this._hasPause && !this._forcingPlayhead && !t) {
						if(e >= f)
							for(r = this._first; r && r._startTime <= e && !u;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r), r = r._next;
						else
							for(r = this._last; r && r._startTime >= e && !u;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r), r = r._prev;
						u && (this._time = e = u._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
					}
					this._totalTime = this._time = this._rawPrevTime = e
				}
				if(this._time !== f && this._first || i || l || u) {
					if(this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && e > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), p = this._time, p >= f)
						for(r = this._first; r && (o = r._next, p === this._time && (!this._paused || g));)(r._active || r._startTime <= p && !r._paused && !r._gc) && (u === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = o;
					else
						for(r = this._last; r && (o = r._prev, p === this._time && (!this._paused || g));) {
							if(r._active || r._startTime <= f && !r._paused && !r._gc) {
								if(u === r) {
									for(u = r._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, i), u = u._prev;
									u = null, this.pause()
								}
								r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
							}
							r = o
						}
					this._onUpdate && (t || (h.length && c(), this._callback("onUpdate"))), s && (this._gc || (m === this._startTime || E !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (a && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s)))
				}
			}, E._hasPausedChild = function() {
				for(var e = this._first; e;) {
					if(e._paused || e instanceof r && e._hasPausedChild()) return !0;
					e = e._next
				}
				return !1
			}, E.getChildren = function(e, t, r, n) {
				n = n || -9999999999;
				for(var a = [], o = this._first, s = 0; o;) o._startTime < n || (o instanceof i ? t !== !1 && (a[s++] = o) : (r !== !1 && (a[s++] = o), e !== !1 && (a = a.concat(o.getChildren(!0, t, r)), s = a.length))), o = o._next;
				return a
			}, E.getTweensOf = function(e, t) {
				var r, n, a = this._gc,
					o = [],
					s = 0;
				for(a && this._enabled(!0, !0), r = i.getTweensOf(e), n = r.length; --n > -1;)(r[n].timeline === this || t && this._contains(r[n])) && (o[s++] = r[n]);
				return a && this._enabled(!1, !0), o
			}, E.recent = function() {
				return this._recent
			}, E._contains = function(e) {
				for(var t = e.timeline; t;) {
					if(t === this) return !0;
					t = t.timeline
				}
				return !1
			}, E.shiftChildren = function(e, t, i) {
				i = i || 0;
				for(var r, n = this._first, a = this._labels; n;) n._startTime >= i && (n._startTime += e), n = n._next;
				if(t)
					for(r in a) a[r] >= i && (a[r] += e);
				return this._uncache(!0)
			}, E._kill = function(e, t) {
				if(!e && !t) return this._enabled(!1, !1);
				for(var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(e, t) && (n = !0);
				return n
			}, E.clear = function(e) {
				var t = this.getChildren(!1, !0, !0),
					i = t.length;
				for(this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
				return e !== !1 && (this._labels = {}), this._uncache(!0)
			}, E.invalidate = function() {
				for(var t = this._first; t;) t.invalidate(), t = t._next;
				return e.prototype.invalidate.call(this)
			}, E._enabled = function(e, i) {
				if(e === this._gc)
					for(var r = this._first; r;) r._enabled(e, !0), r = r._next;
				return t.prototype._enabled.call(this, e, i)
			}, E.totalTime = function() {
				this._forcingPlayhead = !0;
				var t = e.prototype.totalTime.apply(this, arguments);
				return this._forcingPlayhead = !1, t
			}, E.duration = function(e) {
				return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
			}, E.totalDuration = function(e) {
				if(!arguments.length) {
					if(this._dirty) {
						for(var t, i, r = 0, n = this._last, a = 999999999999; n;) t = n._prev, n._dirty && n.totalDuration(), n._startTime > a && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : a = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), a = 0), i = n._startTime + n._totalDuration / n._timeScale, i > r && (r = i), n = t;
						this._duration = this._totalDuration = r, this._dirty = !1
					}
					return this._totalDuration
				}
				return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
			}, E.paused = function(t) {
				if(!t)
					for(var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
				return e.prototype.paused.apply(this, arguments)
			}, E.usesFrames = function() {
				for(var t = this._timeline; t._timeline;) t = t._timeline;
				return t === e._rootFramesTimeline
			}, E.rawTime = function() {
				return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
			}, r
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(e) {
		"use strict";
		var t = function() {
			return(_gsScope.GreenSockGlobals || _gsScope)[e]
		};
		"function" == typeof define && define.amd ? define(["./TweenLite"], t) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = t())
	}("TimelineMax"),
	function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
	}(function(e) {
		var t = function() {
				if(e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
				var t;
				return function() {
					if(!t || !t.requirejs) {
						t ? i = t : t = {};
						var e, i, r;
						! function(t) {
							function n(e, t) {
								return y.call(e, t)
							}

							function a(e, t) {
								var i, r, n, a, o, s, l, h, c, u, p, d = t && t.split("/"),
									f = v.map,
									m = f && f["*"] || {};
								if(e && "." === e.charAt(0))
									if(t) {
										for(e = e.split("/"), o = e.length - 1, v.nodeIdCompat && R.test(e[o]) && (e[o] = e[o].replace(R, "")), e = d.slice(0, d.length - 1).concat(e), c = 0; c < e.length; c += 1)
											if(p = e[c], "." === p) e.splice(c, 1), c -= 1;
											else if(".." === p) {
											if(1 === c && (".." === e[2] || ".." === e[0])) break;
											c > 0 && (e.splice(c - 1, 2), c -= 2)
										}
										e = e.join("/")
									} else 0 === e.indexOf("./") && (e = e.substring(2));
								if((d || m) && f) {
									for(i = e.split("/"), c = i.length; c > 0; c -= 1) {
										if(r = i.slice(0, c).join("/"), d)
											for(u = d.length; u > 0; u -= 1)
												if(n = f[d.slice(0, u).join("/")], n && (n = n[r])) {
													a = n, s = c;
													break
												}
										if(a) break;
										!l && m && m[r] && (l = m[r], h = c)
									}!a && l && (a = l, s = h), a && (i.splice(0, s, a), e = i.join("/"))
								}
								return e
							}

							function o(e, i) {
								return function() {
									var r = _.call(arguments, 0);
									return "string" != typeof r[0] && 1 === r.length && r.push(null), d.apply(t, r.concat([e, i]))
								}
							}

							function s(e) {
								return function(t) {
									return a(t, e)
								}
							}

							function l(e) {
								return function(t) {
									E[e] = t
								}
							}

							function h(e) {
								if(n(g, e)) {
									var i = g[e];
									delete g[e], T[e] = !0, p.apply(t, i)
								}
								if(!n(E, e) && !n(T, e)) throw new Error("No " + e);
								return E[e]
							}

							function c(e) {
								var t, i = e ? e.indexOf("!") : -1;
								return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
							}

							function u(e) {
								return function() {
									return v && v.config && v.config[e] || {}
								}
							}
							var p, d, f, m, E = {},
								g = {},
								v = {},
								T = {},
								y = Object.prototype.hasOwnProperty,
								_ = [].slice,
								R = /\.js$/;
							f = function(e, t) {
								var i, r = c(e),
									n = r[0];
								return e = r[1], n && (n = a(n, t), i = h(n)), n ? e = i && i.normalize ? i.normalize(e, s(t)) : a(e, t) : (e = a(e, t), r = c(e), n = r[0], e = r[1], n && (i = h(n))), {
									f: n ? n + "!" + e : e,
									n: e,
									pr: n,
									p: i
								}
							}, m = {
								require: function(e) {
									return o(e)
								},
								exports: function(e) {
									var t = E[e];
									return "undefined" != typeof t ? t : E[e] = {}
								},
								module: function(e) {
									return {
										id: e,
										uri: "",
										exports: E[e],
										config: u(e)
									}
								}
							}, p = function(e, i, r, a) {
								var s, c, u, p, d, v, y = [],
									_ = typeof r;
								if(a = a || e, "undefined" === _ || "function" === _) {
									for(i = !i.length && r.length ? ["require", "exports", "module"] : i, d = 0; d < i.length; d += 1)
										if(p = f(i[d], a), c = p.f, "require" === c) y[d] = m.require(e);
										else if("exports" === c) y[d] = m.exports(e), v = !0;
									else if("module" === c) s = y[d] = m.module(e);
									else if(n(E, c) || n(g, c) || n(T, c)) y[d] = h(c);
									else {
										if(!p.p) throw new Error(e + " missing " + c);
										p.p.load(p.n, o(a, !0), l(c), {}), y[d] = E[c]
									}
									u = r ? r.apply(E[e], y) : void 0, e && (s && s.exports !== t && s.exports !== E[e] ? E[e] = s.exports : u === t && v || (E[e] = u))
								} else e && (E[e] = r)
							}, e = i = d = function(e, i, r, n, a) {
								if("string" == typeof e) return m[e] ? m[e](i) : h(f(e, i).f);
								if(!e.splice) {
									if(v = e, v.deps && d(v.deps, v.callback), !i) return;
									i.splice ? (e = i, i = r, r = null) : e = t
								}
								return i = i || function() {}, "function" == typeof r && (r = n, n = a), n ? p(t, e, i, r) : setTimeout(function() {
									p(t, e, i, r)
								}, 4), d
							}, d.config = function(e) {
								return d(e)
							}, e._defined = E, r = function(e, t, i) {
								if("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
								t.splice || (i = t, t = []), n(E, e) || n(g, e) || (g[e] = [e, t, i])
							}, r.amd = {
								jQuery: !0
							}
						}(), t.requirejs = e, t.require = i, t.define = r
					}
				}(), t.define("almond", function() {}), t.define("jquery", [], function() {
					var t = e || $;
					return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
				}), t.define("select2/utils", ["jquery"], function(e) {
					function t(e) {
						var t = e.prototype,
							i = [];
						for(var r in t) {
							var n = t[r];
							"function" == typeof n && "constructor" !== r && i.push(r)
						}
						return i
					}
					var i = {};
					i.Extend = function(e, t) {
						function i() {
							this.constructor = e
						}
						var r = {}.hasOwnProperty;
						for(var n in t) r.call(t, n) && (e[n] = t[n]);
						return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
					}, i.Decorate = function(e, i) {
						function r() {
							var t = Array.prototype.unshift,
								r = i.prototype.constructor.length,
								n = e.prototype.constructor;
							r > 0 && (t.call(arguments, e.prototype.constructor), n = i.prototype.constructor), n.apply(this, arguments)
						}

						function n() {
							this.constructor = r
						}
						var a = t(i),
							o = t(e);
						i.displayName = e.displayName, r.prototype = new n;
						for(var s = 0; s < o.length; s++) {
							var l = o[s];
							r.prototype[l] = e.prototype[l]
						}
						for(var h = (function(e) {
								var t = function() {};
								e in r.prototype && (t = r.prototype[e]);
								var n = i.prototype[e];
								return function() {
									var e = Array.prototype.unshift;
									return e.call(arguments, t), n.apply(this, arguments)
								}
							}), c = 0; c < a.length; c++) {
							var u = a[c];
							r.prototype[u] = h(u)
						}
						return r
					};
					var r = function() {
						this.listeners = {}
					};
					return r.prototype.on = function(e, t) {
						this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
					}, r.prototype.trigger = function(e) {
						var t = Array.prototype.slice,
							i = t.call(arguments, 1);
						this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), i[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
					}, r.prototype.invoke = function(e, t) {
						for(var i = 0, r = e.length; r > i; i++) e[i].apply(this, t)
					}, i.Observable = r, i.generateChars = function(e) {
						for(var t = "", i = 0; e > i; i++) {
							var r = Math.floor(36 * Math.random());
							t += r.toString(36)
						}
						return t
					}, i.bind = function(e, t) {
						return function() {
							e.apply(t, arguments)
						}
					}, i._convertData = function(e) {
						for(var t in e) {
							var i = t.split("-"),
								r = e;
							if(1 !== i.length) {
								for(var n = 0; n < i.length; n++) {
									var a = i[n];
									a = a.substring(0, 1).toLowerCase() + a.substring(1), a in r || (r[a] = {}), n == i.length - 1 && (r[a] = e[t]), r = r[a]
								}
								delete e[t]
							}
						}
						return e
					}, i.hasScroll = function(t, i) {
						var r = e(i),
							n = i.style.overflowX,
							a = i.style.overflowY;
						return n !== a || "hidden" !== a && "visible" !== a ? "scroll" === n || "scroll" === a ? !0 : r.innerHeight() < i.scrollHeight || r.innerWidth() < i.scrollWidth : !1
					}, i.escapeMarkup = function(e) {
						var t = {
							"\\": "&#92;",
							"&": "&amp;",
							"<": "&lt;",
							">": "&gt;",
							'"': "&quot;",
							"'": "&#39;",
							"/": "&#47;"
						};
						return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
							return t[e]
						})
					}, i.appendMany = function(t, i) {
						if("1.7" === e.fn.jquery.substr(0, 3)) {
							var r = e();
							e.map(i, function(e) {
								r = r.add(e)
							}), i = r
						}
						t.append(i)
					}, i
				}), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
					function i(e, t, r) {
						this.$element = e, this.data = r, this.options = t, i.__super__.constructor.call(this)
					}
					return t.Extend(i, t.Observable), i.prototype.render = function() {
						var t = e('<ul class="select2-results__options" role="tree"></ul>');
						return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
					}, i.prototype.clear = function() {
						this.$results.empty()
					}, i.prototype.displayMessage = function(t) {
						var i = this.options.get("escapeMarkup");
						this.clear(), this.hideLoading();
						var r = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
							n = this.options.get("translations").get(t.message);
						r.append(i(n(t.args))), r[0].className += " select2-results__message", this.$results.append(r)
					}, i.prototype.hideMessages = function() {
						this.$results.find(".select2-results__message").remove()
					}, i.prototype.append = function(e) {
						this.hideLoading();
						var t = [];
						if(null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
							message: "noResults"
						}));
						e.results = this.sort(e.results);
						for(var i = 0; i < e.results.length; i++) {
							var r = e.results[i],
								n = this.option(r);
							t.push(n)
						}
						this.$results.append(t)
					}, i.prototype.position = function(e, t) {
						var i = t.find(".select2-results");
						i.append(e)
					}, i.prototype.sort = function(e) {
						var t = this.options.get("sorter");
						return t(e)
					}, i.prototype.highlightFirstItem = function() {
						var e = this.$results.find(".select2-results__option[aria-selected]"),
							t = e.filter("[aria-selected=true]");
						t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
					}, i.prototype.setClasses = function() {
						var t = this;
						this.data.current(function(i) {
							var r = e.map(i, function(e) {
									return e.id.toString()
								}),
								n = t.$results.find(".select2-results__option[aria-selected]");
							n.each(function() {
								var t = e(this),
									i = e.data(this, "data"),
									n = "" + i.id;
								null != i.element && i.element.selected || null == i.element && e.inArray(n, r) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
							})
						})
					}, i.prototype.showLoading = function(e) {
						this.hideLoading();
						var t = this.options.get("translations").get("searching"),
							i = {
								disabled: !0,
								loading: !0,
								text: t(e)
							},
							r = this.option(i);
						r.className += " loading-results", this.$results.prepend(r)
					}, i.prototype.hideLoading = function() {
						this.$results.find(".loading-results").remove()
					}, i.prototype.option = function(t) {
						var i = document.createElement("li");
						i.className = "select2-results__option";
						var r = {
							role: "treeitem",
							"aria-selected": "false"
						};
						t.disabled && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == t.id && delete r["aria-selected"], null != t._resultId && (i.id = t._resultId), t.title && (i.title = t.title), t.children && (r.role = "group", r["aria-label"] = t.text, delete r["aria-selected"]);
						for(var n in r) {
							var a = r[n];
							i.setAttribute(n, a)
						}
						if(t.children) {
							var o = e(i),
								s = document.createElement("strong");
							s.className = "select2-results__group"; {
								e(s)
							}
							this.template(t, s);
							for(var l = [], h = 0; h < t.children.length; h++) {
								var c = t.children[h],
									u = this.option(c);
								l.push(u)
							}
							var p = e("<ul></ul>", {
								"class": "select2-results__options select2-results__options--nested"
							});
							p.append(l), o.append(s), o.append(p)
						} else this.template(t, i);
						return e.data(i, "data", t), i
					}, i.prototype.bind = function(t) {
						var i = this,
							r = t.id + "-results";
						this.$results.attr("id", r), t.on("results:all", function(e) {
							i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem())
						}), t.on("results:append", function(e) {
							i.append(e.data), t.isOpen() && i.setClasses()
						}), t.on("query", function(e) {
							i.hideMessages(), i.showLoading(e)
						}), t.on("select", function() {
							t.isOpen() && (i.setClasses(), i.highlightFirstItem())
						}), t.on("unselect", function() {
							t.isOpen() && (i.setClasses(), i.highlightFirstItem())
						}), t.on("open", function() {
							i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
						}), t.on("close", function() {
							i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
						}), t.on("results:toggle", function() {
							var e = i.getHighlightedResults();
							0 !== e.length && e.trigger("mouseup")
						}), t.on("results:select", function() {
							var e = i.getHighlightedResults();
							if(0 !== e.length) {
								var t = e.data("data");
								"true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
									data: t
								})
							}
						}), t.on("results:previous", function() {
							var e = i.getHighlightedResults(),
								t = i.$results.find("[aria-selected]"),
								r = t.index(e);
							if(0 !== r) {
								var n = r - 1;
								0 === e.length && (n = 0);
								var a = t.eq(n);
								a.trigger("mouseenter");
								var o = i.$results.offset().top,
									s = a.offset().top,
									l = i.$results.scrollTop() + (s - o);
								0 === n ? i.$results.scrollTop(0) : 0 > s - o && i.$results.scrollTop(l)
							}
						}), t.on("results:next", function() {
							var e = i.getHighlightedResults(),
								t = i.$results.find("[aria-selected]"),
								r = t.index(e),
								n = r + 1;
							if(!(n >= t.length)) {
								var a = t.eq(n);
								a.trigger("mouseenter");
								var o = i.$results.offset().top + i.$results.outerHeight(!1),
									s = a.offset().top + a.outerHeight(!1),
									l = i.$results.scrollTop() + s - o;
								0 === n ? i.$results.scrollTop(0) : s > o && i.$results.scrollTop(l)
							}
						}), t.on("results:focus", function(e) {
							e.element.addClass("select2-results__option--highlighted")
						}), t.on("results:message", function(e) {
							i.displayMessage(e)
						}), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
							var t = i.$results.scrollTop(),
								r = i.$results.get(0).scrollHeight - t + e.deltaY,
								n = e.deltaY > 0 && t - e.deltaY <= 0,
								a = e.deltaY < 0 && r <= i.$results.height();
							n ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : a && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
						}), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
							var r = e(this),
								n = r.data("data");
							return "true" === r.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
								originalEvent: t,
								data: n
							}) : i.trigger("close", {})) : void i.trigger("select", {
								originalEvent: t,
								data: n
							})
						}), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
							var t = e(this).data("data");
							i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
								data: t,
								element: e(this)
							})
						})
					}, i.prototype.getHighlightedResults = function() {
						var e = this.$results.find(".select2-results__option--highlighted");
						return e
					}, i.prototype.destroy = function() {
						this.$results.remove()
					}, i.prototype.ensureHighlightVisible = function() {
						var e = this.getHighlightedResults();
						if(0 !== e.length) {
							var t = this.$results.find("[aria-selected]"),
								i = t.index(e),
								r = this.$results.offset().top,
								n = e.offset().top,
								a = this.$results.scrollTop() + (n - r),
								o = n - r;
							a -= 2 * e.outerHeight(!1), 2 >= i ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || 0 > o) && this.$results.scrollTop(a)
						}
					}, i.prototype.template = function(t, i) {
						var r = this.options.get("templateResult"),
							n = this.options.get("escapeMarkup"),
							a = r(t, i);
						null == a ? i.style.display = "none" : "string" == typeof a ? i.innerHTML = n(a) : e(i).append(a)
					}, i
				}), t.define("select2/keys", [], function() {
					var e = {
						BACKSPACE: 8,
						TAB: 9,
						ENTER: 13,
						SHIFT: 16,
						CTRL: 17,
						ALT: 18,
						ESC: 27,
						SPACE: 32,
						PAGE_UP: 33,
						PAGE_DOWN: 34,
						END: 35,
						HOME: 36,
						LEFT: 37,
						UP: 38,
						RIGHT: 39,
						DOWN: 40,
						DELETE: 46
					};
					return e
				}), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, i) {
					function r(e, t) {
						this.$element = e, this.options = t, r.__super__.constructor.call(this)
					}
					return t.Extend(r, t.Observable), r.prototype.render = function() {
						var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
						return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
					}, r.prototype.bind = function(e) {
						var t = this,
							r = (e.id + "-container", e.id + "-results");
						this.container = e, this.$selection.on("focus", function(e) {
							t.trigger("focus", e)
						}), this.$selection.on("blur", function(e) {
							t._handleBlur(e)
						}), this.$selection.on("keydown", function(e) {
							t.trigger("keypress", e), e.which === i.SPACE && e.preventDefault()
						}), e.on("results:focus", function(e) {
							t.$selection.attr("aria-activedescendant", e.data._resultId)
						}), e.on("selection:update", function(e) {
							t.update(e.data)
						}), e.on("open", function() {
							t.$selection.attr("aria-expanded", "true"), t.$selection.attr("aria-owns", r), t._attachCloseHandler(e)
						}), e.on("close", function() {
							t.$selection.attr("aria-expanded", "false"), t.$selection.removeAttr("aria-activedescendant"), t.$selection.removeAttr("aria-owns"), t.$selection.focus(), t._detachCloseHandler(e)
						}), e.on("enable", function() {
							t.$selection.attr("tabindex", t._tabindex)
						}), e.on("disable", function() {
							t.$selection.attr("tabindex", "-1")
						})
					}, r.prototype._handleBlur = function(t) {
						var i = this;
						window.setTimeout(function() {
							document.activeElement == i.$selection[0] || e.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
						}, 1)
					}, r.prototype._attachCloseHandler = function(t) {
						e(document.body).on("mousedown.select2." + t.id, function(t) {
							var i = e(t.target),
								r = i.closest(".select2"),
								n = e(".select2.select2-container--open");
							n.each(function() {
								var t = e(this);
								if(this != r[0]) {
									var i = t.data("element");
									i.select2("close")
								}
							})
						})
					}, r.prototype._detachCloseHandler = function(t) {
						e(document.body).off("mousedown.select2." + t.id)
					}, r.prototype.position = function(e, t) {
						var i = t.find(".selection");
						i.append(e)
					}, r.prototype.destroy = function() {
						this._detachCloseHandler(this.container)
					}, r.prototype.update = function() {
						throw new Error("The `update` method must be defined in child classes.")
					}, r
				}), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, i) {
					function r() {
						r.__super__.constructor.apply(this, arguments)
					}
					return i.Extend(r, t), r.prototype.render = function() {
						var e = r.__super__.render.call(this);
						return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
					}, r.prototype.bind = function(e) {
						var t = this;
						r.__super__.bind.apply(this, arguments);
						var i = e.id + "-container";
						this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
							1 === e.which && t.trigger("toggle", {
								originalEvent: e
							})
						}), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), e.on("focus", function() {
							e.isOpen() || t.$selection.focus()
						}), e.on("selection:update", function(e) {
							t.update(e.data)
						})
					}, r.prototype.clear = function() {
						this.$selection.find(".select2-selection__rendered").empty()
					}, r.prototype.display = function(e, t) {
						var i = this.options.get("templateSelection"),
							r = this.options.get("escapeMarkup");
						return r(i(e, t))
					}, r.prototype.selectionContainer = function() {
						return e("<span></span>")
					}, r.prototype.update = function(e) {
						if(0 === e.length) return void this.clear();
						var t = e[0],
							i = this.$selection.find(".select2-selection__rendered"),
							r = this.display(t, i);
						i.empty().append(r), i.prop("title", t.title || t.text)
					}, r
				}), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, i) {
					function r() {
						r.__super__.constructor.apply(this, arguments)
					}
					return i.Extend(r, t), r.prototype.render = function() {
						var e = r.__super__.render.call(this);
						return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
					}, r.prototype.bind = function() {
						var t = this;
						r.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
							t.trigger("toggle", {
								originalEvent: e
							})
						}), this.$selection.on("click", ".select2-selection__choice__remove", function(i) {
							if(!t.options.get("disabled")) {
								var r = e(this),
									n = r.parent(),
									a = n.data("data");
								t.trigger("unselect", {
									originalEvent: i,
									data: a
								})
							}
						})
					}, r.prototype.clear = function() {
						this.$selection.find(".select2-selection__rendered").empty()
					}, r.prototype.display = function(e, t) {
						var i = this.options.get("templateSelection"),
							r = this.options.get("escapeMarkup");
						return r(i(e, t))
					}, r.prototype.selectionContainer = function() {
						var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
						return t
					}, r.prototype.update = function(e) {
						if(this.clear(), 0 !== e.length) {
							for(var t = [], r = 0; r < e.length; r++) {
								var n = e[r],
									a = this.selectionContainer(),
									o = this.display(n, a);
								a.append(o), a.prop("title", n.title || n.text), a.data("data", n), t.push(a)
							}
							var s = this.$selection.find(".select2-selection__rendered");
							i.appendMany(s, t)
						}
					}, r
				}), t.define("select2/selection/placeholder", ["../utils"], function() {
					function e(e, t, i) {
						this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i)
					}
					return e.prototype.normalizePlaceholder = function(e, t) {
						return "string" == typeof t && (t = {
							id: "",
							text: t
						}), t
					}, e.prototype.createPlaceholder = function(e, t) {
						var i = this.selectionContainer();
						return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
					}, e.prototype.update = function(e, t) {
						var i = 1 == t.length && t[0].id != this.placeholder.id,
							r = t.length > 1;
						if(r || i) return e.call(this, t);
						this.clear();
						var n = this.createPlaceholder(this.placeholder);
						this.$selection.find(".select2-selection__rendered").append(n)
					}, e
				}), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
					function i() {}
					return i.prototype.bind = function(e, t, i) {
						var r = this;
						e.call(this, t, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
							r._handleClear(e)
						}), t.on("keypress", function(e) {
							r._handleKeyboardClear(e, t)
						})
					}, i.prototype._handleClear = function(e, t) {
						if(!this.options.get("disabled")) {
							var i = this.$selection.find(".select2-selection__clear");
							if(0 !== i.length) {
								t.stopPropagation();
								for(var r = i.data("data"), n = 0; n < r.length; n++) {
									var a = {
										data: r[n]
									};
									if(this.trigger("unselect", a), a.prevented) return
								}
								this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
							}
						}
					}, i.prototype._handleKeyboardClear = function(e, i, r) {
						r.isOpen() || (i.which == t.DELETE || i.which == t.BACKSPACE) && this._handleClear(i)
					}, i.prototype.update = function(t, i) {
						if(t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
							var r = e('<span class="select2-selection__clear">&times;</span>');
							r.data("data", i), this.$selection.find(".select2-selection__rendered").prepend(r)
						}
					}, i
				}), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, i) {
					function r(e, t, i) {
						e.call(this, t, i)
					}
					return r.prototype.render = function(t) {
						var i = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
						this.$searchContainer = i, this.$search = i.find("input");
						var r = t.call(this);
						return this._transferTabIndex(), r
					}, r.prototype.bind = function(e, t, r) {
						var n = this;
						e.call(this, t, r), t.on("open", function() {
							n.$search.trigger("focus")
						}), t.on("close", function() {
							n.$search.val(""), n.$search.removeAttr("aria-activedescendant"), n.$search.trigger("focus")
						}), t.on("enable", function() {
							n.$search.prop("disabled", !1), n._transferTabIndex()
						}), t.on("disable", function() {
							n.$search.prop("disabled", !0)
						}), t.on("focus", function() {
							n.$search.trigger("focus")
						}), t.on("results:focus", function(e) {
							n.$search.attr("aria-activedescendant", e.id)
						}), this.$selection.on("focusin", ".select2-search--inline", function(e) {
							n.trigger("focus", e)
						}), this.$selection.on("focusout", ".select2-search--inline", function(e) {
							n._handleBlur(e)
						}), this.$selection.on("keydown", ".select2-search--inline", function(e) {
							e.stopPropagation(), n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented();
							var t = e.which;
							if(t === i.BACKSPACE && "" === n.$search.val()) {
								var r = n.$searchContainer.prev(".select2-selection__choice");
								if(r.length > 0) {
									var a = r.data("data");
									n.searchRemoveChoice(a), e.preventDefault()
								}
							}
						});
						var a = document.documentMode,
							o = a && 11 >= a;
						this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
							return o ? void n.$selection.off("input.search input.searchcheck") : void n.$selection.off("keyup.search")
						}), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
							if(o && "input" === e.type) return void n.$selection.off("input.search input.searchcheck");
							var t = e.which;
							t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && n.handleSearch(e)
						})
					}, r.prototype._transferTabIndex = function() {
						this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
					}, r.prototype.createPlaceholder = function(e, t) {
						this.$search.attr("placeholder", t.text)
					}, r.prototype.update = function(e, t) {
						var i = this.$search[0] == document.activeElement;
						this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
					}, r.prototype.handleSearch = function() {
						if(this.resizeSearch(), !this._keyUpPrevented) {
							var e = this.$search.val();
							this.trigger("query", {
								term: e
							})
						}
						this._keyUpPrevented = !1
					}, r.prototype.searchRemoveChoice = function(e, t) {
						this.trigger("unselect", {
							data: t
						}), this.$search.val(t.text), this.handleSearch()
					}, r.prototype.resizeSearch = function() {
						this.$search.css("width", "25px");
						var e = "";
						if("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth();
						else {
							var t = this.$search.val().length + 1;
							e = .75 * t + "em"
						}
						this.$search.css("width", e)
					}, r
				}), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
					function t() {}
					return t.prototype.bind = function(t, i, r) {
						var n = this,
							a = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
							o = ["opening", "closing", "selecting", "unselecting"];
						t.call(this, i, r), i.on("*", function(t, i) {
							if(-1 !== e.inArray(t, a)) {
								i = i || {};
								var r = e.Event("select2:" + t, {
									params: i
								});
								n.$element.trigger(r), -1 !== e.inArray(t, o) && (i.prevented = r.isDefaultPrevented())
							}
						})
					}, t
				}), t.define("select2/translation", ["jquery", "require"], function(e, t) {
					function i(e) {
						this.dict = e || {}
					}
					return i.prototype.all = function() {
						return this.dict
					}, i.prototype.get = function(e) {
						return this.dict[e]
					}, i.prototype.extend = function(t) {
						this.dict = e.extend({}, t.all(), this.dict)
					}, i._cache = {}, i.loadPath = function(e) {
						if(!(e in i._cache)) {
							var r = t(e);
							i._cache[e] = r
						}
						return new i(i._cache[e])
					}, i
				}), t.define("select2/diacritics", [], function() {
					var e = {
						"鈷�": "A",
						"锛�": "A",
						"脌": "A",
						"脕": "A",
						"脗": "A",
						"岷�": "A",
						"岷�": "A",
						"岷�": "A",
						"岷�": "A",
						"脙": "A",
						"膧": "A",
						"膫": "A",
						"岷�": "A",
						"岷�": "A",
						"岷�": "A",
						"岷�": "A",
						"圈": "A",
						"菭": "A",
						"脛": "A",
						"菫": "A",
						"岷�": "A",
						"脜": "A",
						"呛": "A",
						"菎": "A",
						"葊": "A",
						"葌": "A",
						"岷�": "A",
						"岷�": "A",
						"岷�": "A",
						"岣€": "A",
						"膭": "A",
						"群": "A",
						"獗�": "A",
						"隃�": "AA",
						"脝": "AE",
						"羌": "AE",
						"洽": "AE",
						"隃�": "AO",
						"隃�": "AU",
						"隃�": "AV",
						"隃�": "AV",
						"隃�": "AY",
						"鈷�": "B",
						"锛�": "B",
						"岣�": "B",
						"岣�": "B",
						"岣�": "B",
						"蓛": "B",
						"苽": "B",
						"苼": "B",
						"鈷�": "C",
						"锛�": "C",
						"膯": "C",
						"膱": "C",
						"膴": "C",
						"膶": "C",
						"脟": "C",
						"岣�": "C",
						"茋": "C",
						"然": "C",
						"隃�": "C",
						"鈷�": "D",
						"锛�": "D",
						"岣�": "D",
						"膸": "D",
						"岣�": "D",
						"岣�": "D",
						"岣�": "D",
						"岣�": "D",
						"膼": "D",
						"茓": "D",
						"茒": "D",
						"茐": "D",
						"隄�": "D",
						"潜": "DZ",
						"莿": "DZ",
						"遣": "Dz",
						"菂": "Dz",
						"鈷�": "E",
						"锛�": "E",
						"脠": "E",
						"脡": "E",
						"脢": "E",
						"峄€": "E",
						"岷�": "E",
						"峄�": "E",
						"峄�": "E",
						"岷�": "E",
						"膾": "E",
						"岣�": "E",
						"岣�": "E",
						"臄": "E",
						"臇": "E",
						"脣": "E",
						"岷�": "E",
						"臍": "E",
						"葎": "E",
						"葐": "E",
						"岷�": "E",
						"峄�": "E",
						"权": "E",
						"岣�": "E",
						"臉": "E",
						"岣�": "E",
						"岣�": "E",
						"茞": "E",
						"茙": "E",
						"鈷�": "F",
						"锛�": "F",
						"岣�": "F",
						"茟": "F",
						"隄�": "F",
						"鈷�": "G",
						"锛�": "G",
						"谴": "G",
						"臏": "G",
						"岣�": "G",
						"臑": "G",
						"臓": "G",
						"铅": "G",
						"蘑": "G",
						"扦": "G",
						"茡": "G",
						"隇�": "G",
						"隄�": "G",
						"隄�": "G",
						"鈷�": "H",
						"锛�": "H",
						"膜": "H",
						"岣�": "H",
						"岣�": "H",
						"葹": "H",
						"岣�": "H",
						"岣�": "H",
						"岣�": "H",
						"摩": "H",
						"獗�": "H",
						"獗�": "H",
						"隇�": "H",
						"鈷�": "I",
						"锛�": "I",
						"脤": "I",
						"脥": "I",
						"脦": "I",
						"抹": "I",
						"莫": "I",
						"默": "I",
						"陌": "I",
						"脧": "I",
						"岣�": "I",
						"峄�": "I",
						"菑": "I",
						"葓": "I",
						"葕": "I",
						"峄�": "I",
						"漠": "I",
						"岣�": "I",
						"茥": "I",
						"鈷�": "J",
						"锛�": "J",
						"拇": "J",
						"蓤": "J",
						"鈸€": "K",
						"锛�": "K",
						"岣�": "K",
						"迁": "K",
						"岣�": "K",
						"亩": "K",
						"岣�": "K",
						"茦": "K",
						"獗�": "K",
						"隄€": "K",
						"隄�": "K",
						"隄�": "K",
						"隇�": "K",
						"鈸�": "L",
						"锛�": "L",
						"目": "L",
						"墓": "L",
						"慕": "L",
						"岣�": "L",
						"岣�": "L",
						"幕": "L",
						"岣�": "L",
						"岣�": "L",
						"艁": "L",
						"冉": "L",
						"獗�": "L",
						"獗�": "L",
						"隄�": "L",
						"隄�": "L",
						"隇€": "L",
						"菄": "LJ",
						"菆": "Lj",
						"鈸�": "M",
						"锛�": "M",
						"岣�": "M",
						"峁€": "M",
						"峁�": "M",
						"獗�": "M",
						"茰": "M",
						"鈸�": "N",
						"锛�": "N",
						"歉": "N",
						"艃": "N",
						"脩": "N",
						"峁�": "N",
						"艊": "N",
						"峁�": "N",
						"艆": "N",
						"峁�": "N",
						"峁�": "N",
						"葼": "N",
						"茲": "N",
						"隇�": "N",
						"隇�": "N",
						"菉": "NJ",
						"菋": "Nj",
						"鈸�": "O",
						"锛�": "O",
						"脪": "O",
						"脫": "O",
						"脭": "O",
						"峄�": "O",
						"峄�": "O",
						"峄�": "O",
						"峄�": "O",
						"脮": "O",
						"峁�": "O",
						"痊": "O",
						"峁�": "O",
						"艑": "O",
						"峁�": "O",
						"峁�": "O",
						"艓": "O",
						"犬": "O",
						"劝": "O",
						"脰": "O",
						"泉": "O",
						"峄�": "O",
						"艕": "O",
						"菓": "O",
						"葘": "O",
						"葞": "O",
						"茽": "O",
						"峄�": "O",
						"峄�": "O",
						"峄�": "O",
						"峄�": "O",
						"峄�": "O",
						"峄�": "O",
						"峄�": "O",
						"仟": "O",
						"乾": "O",
						"脴": "O",
						"蔷": "O",
						"茊": "O",
						"茻": "O",
						"隄�": "O",
						"隄�": "O",
						"脾": "OI",
						"隄�": "OO",
						"娶": "OU",
						"鈸�": "P",
						"锛�": "P",
						"峁�": "P",
						"峁�": "P",
						"皮": "P",
						"獗�": "P",
						"隄�": "P",
						"隄�": "P",
						"隄�": "P",
						"鈸�": "Q",
						"锛�": "Q",
						"隄�": "Q",
						"隄�": "Q",
						"蓨": "Q",
						"鈸�": "R",
						"锛�": "R",
						"艛": "R",
						"峁�": "R",
						"艠": "R",
						"葠": "R",
						"葤": "R",
						"峁�": "R",
						"峁�": "R",
						"艝": "R",
						"峁�": "R",
						"蓪": "R",
						"獗�": "R",
						"隄�": "R",
						"隇�": "R",
						"隇�": "R",
						"鈸�": "S",
						"锛�": "S",
						"岷�": "S",
						"艢": "S",
						"峁�": "S",
						"艤": "S",
						"峁�": "S",
						"艩": "S",
						"峁�": "S",
						"峁�": "S",
						"峁�": "S",
						"葮": "S",
						"艦": "S",
						"獗�": "S",
						"隇�": "S",
						"隇�": "S",
						"鈸�": "T",
						"锛�": "T",
						"峁�": "T",
						"扭": "T",
						"峁�": "T",
						"葰": "T",
						"泞": "T",
						"峁�": "T",
						"峁�": "T",
						"纽": "T",
						"片": "T",
						"飘": "T",
						"染": "T",
						"隇�": "T",
						"隃�": "TZ",
						"鈸�": "U",
						"锛�": "U",
						"脵": "U",
						"脷": "U",
						"脹": "U",
						"浓": "U",
						"峁�": "U",
						"弄": "U",
						"峁�": "U",
						"努": "U",
						"脺": "U",
						"菦": "U",
						"菞": "U",
						"菚": "U",
						"菣": "U",
						"峄�": "U",
						"女": "U",
						"虐": "U",
						"菗": "U",
						"葦": "U",
						"葨": "U",
						"漂": "U",
						"峄�": "U",
						"峄�": "U",
						"峄�": "U",
						"峄�": "U",
						"峄�": "U",
						"峄�": "U",
						"峁�": "U",
						"挪": "U",
						"峁�": "U",
						"峁�": "U",
						"蓜": "U",
						"鈸�": "V",
						"锛�": "V",
						"峁�": "V",
						"峁�": "V",
						"撇": "V",
						"隄�": "V",
						"蓞": "V",
						"隄�": "VY",
						"鈸�": "W",
						"锛�": "W",
						"岷€": "W",
						"岷�": "W",
						"糯": "W",
						"岷�": "W",
						"岷�": "W",
						"岷�": "W",
						"獗�": "W",
						"鈸�": "X",
						"锛�": "X",
						"岷�": "X",
						"岷�": "X",
						"鈸�": "Y",
						"锛�": "Y",
						"峄�": "Y",
						"脻": "Y",
						"哦": "Y",
						"峄�": "Y",
						"炔": "Y",
						"岷�": "Y",
						"鸥": "Y",
						"峄�": "Y",
						"峄�": "Y",
						"瞥": "Y",
						"蓭": "Y",
						"峄�": "Y",
						"鈸�": "Z",
						"锛�": "Z",
						"殴": "Z",
						"岷�": "Z",
						"呕": "Z",
						"沤": "Z",
						"岷�": "Z",
						"岷�": "Z",
						"频": "Z",
						"趣": "Z",
						"獗�": "Z",
						"獗�": "Z",
						"隄�": "Z",
						"鈸�": "a",
						"锝�": "a",
						"岷�": "a",
						"脿": "a",
						"谩": "a",
						"芒": "a",
						"岷�": "a",
						"岷�": "a",
						"岷�": "a",
						"岷�": "a",
						"茫": "a",
						"膩": "a",
						"膬": "a",
						"岷�": "a",
						"岷�": "a",
						"岷�": "a",
						"岷�": "a",
						"颧": "a",
						"恰": "a",
						"盲": "a",
						"菬": "a",
						"岷�": "a",
						"氓": "a",
						"腔": "a",
						"菐": "a",
						"葋": "a",
						"葍": "a",
						"岷�": "a",
						"岷�": "a",
						"岷�": "a",
						"岣�": "a",
						"膮": "a",
						"獗�": "a",
						"蓯": "a",
						"隃�": "aa",
						"忙": "ae",
						"墙": "ae",
						"牵": "ae",
						"隃�": "ao",
						"隃�": "au",
						"隃�": "av",
						"隃�": "av",
						"隃�": "ay",
						"鈸�": "b",
						"锝�": "b",
						"岣�": "b",
						"岣�": "b",
						"岣�": "b",
						"苺": "b",
						"苾": "b",
						"蓳": "b",
						"鈸�": "c",
						"锝�": "c",
						"膰": "c",
						"膲": "c",
						"膵": "c",
						"膷": "c",
						"莽": "c",
						"岣�": "c",
						"茍": "c",
						"燃": "c",
						"隃�": "c",
						"鈫�": "c",
						"鈸�": "d",
						"锝�": "d",
						"岣�": "d",
						"膹": "d",
						"岣�": "d",
						"岣�": "d",
						"岣�": "d",
						"岣�": "d",
						"膽": "d",
						"茖": "d",
						"蓶": "d",
						"蓷": "d",
						"隄�": "d",
						"浅": "dz",
						"菃": "dz",
						"鈸�": "e",
						"锝�": "e",
						"猫": "e",
						"茅": "e",
						"锚": "e",
						"峄�": "e",
						"岷�": "e",
						"峄�": "e",
						"峄�": "e",
						"岷�": "e",
						"膿": "e",
						"岣�": "e",
						"岣�": "e",
						"臅": "e",
						"臈": "e",
						"毛": "e",
						"岷�": "e",
						"臎": "e",
						"葏": "e",
						"葒": "e",
						"岷�": "e",
						"峄�": "e",
						"醛": "e",
						"岣�": "e",
						"臋": "e",
						"岣�": "e",
						"岣�": "e",
						"蓢": "e",
						"蓻": "e",
						"菨": "e",
						"鈸�": "f",
						"锝�": "f",
						"岣�": "f",
						"茠": "f",
						"隄�": "f",
						"鈸�": "g",
						"锝�": "g",
						"堑": "g",
						"臐": "g",
						"岣�": "g",
						"臒": "g",
						"摹": "g",
						"千": "g",
						"模": "g",
						"钎": "g",
						"蔂": "g",
						"隇�": "g",
						"岬�": "g",
						"隄�": "g",
						"鈸�": "h",
						"锝�": "h",
						"磨": "h",
						"岣�": "h",
						"岣�": "h",
						"葻": "h",
						"岣�": "h",
						"岣�": "h",
						"岣�": "h",
						"岷�": "h",
						"魔": "h",
						"獗�": "h",
						"獗�": "h",
						"丧": "h",
						"茣": "hv",
						"鈸�": "i",
						"锝�": "i",
						"矛": "i",
						"铆": "i",
						"卯": "i",
						"末": "i",
						"墨": "i",
						"沫": "i",
						"茂": "i",
						"岣�": "i",
						"峄�": "i",
						"菒": "i",
						"葔": "i",
						"葖": "i",
						"峄�": "i",
						"寞": "i",
						"岣�": "i",
						"扫": "i",
						"谋": "i",
						"鈸�": "j",
						"锝�": "j",
						"牡": "j",
						"前": "j",
						"蓧": "j",
						"鈸�": "k",
						"锝�": "k",
						"岣�": "k",
						"签": "k",
						"岣�": "k",
						"姆": "k",
						"岣�": "k",
						"茩": "k",
						"獗�": "k",
						"隄�": "k",
						"隄�": "k",
						"隄�": "k",
						"隇�": "k",
						"鈸�": "l",
						"锝�": "l",
						"艀": "l",
						"暮": "l",
						"木": "l",
						"岣�": "l",
						"岣�": "l",
						"募": "l",
						"岣�": "l",
						"岣�": "l",
						"趴": "l",
						"艂": "l",
						"茪": "l",
						"色": "l",
						"獗�": "l",
						"隄�": "l",
						"隇�": "l",
						"隄�": "l",
						"菈": "lj",
						"鈸�": "m",
						"锝�": "m",
						"岣�": "m",
						"峁�": "m",
						"峁�": "m",
						"杀": "m",
						"莎": "m",
						"鈸�": "n",
						"锝�": "n",
						"枪": "n",
						"艅": "n",
						"帽": "n",
						"峁�": "n",
						"艌": "n",
						"峁�": "n",
						"艈": "n",
						"峁�": "n",
						"峁�": "n",
						"茷": "n",
						"刹": "n",
						"艍": "n",
						"隇�": "n",
						"隇�": "n",
						"菍": "nj",
						"鈸�": "o",
						"锝�": "o",
						"貌": "o",
						"贸": "o",
						"么": "o",
						"峄�": "o",
						"峄�": "o",
						"峄�": "o",
						"峄�": "o",
						"玫": "o",
						"峁�": "o",
						"拳": "o",
						"峁�": "o",
						"艒": "o",
						"峁�": "o",
						"峁�": "o",
						"艔": "o",
						"券": "o",
						"缺": "o",
						"枚": "o",
						"全": "o",
						"峄�": "o",
						"艖": "o",
						"菕": "o",
						"葝": "o",
						"葟": "o",
						"啤": "o",
						"峄�": "o",
						"峄�": "o",
						"峄�": "o",
						"峄�": "o",
						"峄�": "o",
						"峄�": "o",
						"峄�": "o",
						"谦": "o",
						"黔": "o",
						"酶": "o",
						"强": "o",
						"蓴": "o",
						"隄�": "o",
						"隄�": "o",
						"傻": "o",
						"疲": "oi",
						"龋": "ou",
						"隄�": "oo",
						"鈸�": "p",
						"锝�": "p",
						"峁�": "p",
						"峁�": "p",
						"匹": "p",
						"岬�": "p",
						"隄�": "p",
						"隄�": "p",
						"隄�": "p",
						"鈸�": "q",
						"锝�": "q",
						"蓩": "q",
						"隄�": "q",
						"隄�": "q",
						"鈸�": "r",
						"锝�": "r",
						"艜": "r",
						"峁�": "r",
						"艡": "r",
						"葢": "r",
						"葥": "r",
						"峁�": "r",
						"峁�": "r",
						"艞": "r",
						"峁�": "r",
						"蓫": "r",
						"山": "r",
						"隄�": "r",
						"隇�": "r",
						"隇�": "r",
						"鈸�": "s",
						"锝�": "s",
						"脽": "s",
						"艣": "s",
						"峁�": "s",
						"艥": "s",
						"峁�": "s",
						"拧": "s",
						"峁�": "s",
						"峁�": "s",
						"峁�": "s",
						"葯": "s",
						"艧": "s",
						"瓤": "s",
						"隇�": "s",
						"隇�": "s",
						"岷�": "s",
						"鈸�": "t",
						"锝�": "t",
						"峁�": "t",
						"岷�": "t",
						"钮": "t",
						"峁�": "t",
						"葲": "t",
						"牛": "t",
						"峁�": "t",
						"峁�": "t",
						"脓": "t",
						"骗": "t",
						"蕡": "t",
						"獗�": "t",
						"隇�": "t",
						"隃�": "tz",
						"鈸�": "u",
						"锝�": "u",
						"霉": "u",
						"煤": "u",
						"没": "u",
						"农": "u",
						"峁�": "u",
						"奴": "u",
						"峁�": "u",
						"怒": "u",
						"眉": "u",
						"菧": "u",
						"菢": "u",
						"菛": "u",
						"菤": "u",
						"峄�": "u",
						"暖": "u",
						"疟": "u",
						"菙": "u",
						"葧": "u",
						"葪": "u",
						"瓢": "u",
						"峄�": "u",
						"峄�": "u",
						"峄�": "u",
						"峄�": "u",
						"峄�": "u",
						"峄�": "u",
						"峁�": "u",
						"懦": "u",
						"峁�": "u",
						"峁�": "u",
						"蕢": "u",
						"鈸�": "v",
						"锝�": "v",
						"峁�": "v",
						"峁�": "v",
						"蕥": "v",
						"隄�": "v",
						"蕦": "v",
						"隄�": "vy",
						"鈸�": "w",
						"锝�": "w",
						"岷�": "w",
						"岷�": "w",
						"诺": "w",
						"岷�": "w",
						"岷�": "w",
						"岷�": "w",
						"岷�": "w",
						"獗�": "w",
						"鈸�": "x",
						"锝�": "x",
						"岷�": "x",
						"岷�": "x",
						"鈸�": "y",
						"锝�": "y",
						"峄�": "y",
						"媒": "y",
						"欧": "y",
						"峄�": "y",
						"瘸": "y",
						"岷�": "y",
						"每": "y",
						"峄�": "y",
						"岷�": "y",
						"峄�": "y",
						"拼": "y",
						"蓮": "y",
						"峄�": "y",
						"鈸�": "z",
						"锝�": "z",
						"藕": "z",
						"岷�": "z",
						"偶": "z",
						"啪": "z",
						"岷�": "z",
						"岷�": "z",
						"贫": "z",
						"去": "z",
						"蓘": "z",
						"獗�": "z",
						"隄�": "z",
						"螁": "螒",
						"螆": "螘",
						"螇": "螚",
						"螉": "螜",
						"为": "螜",
						"螌": "螣",
						"螏": "违",
						"潍": "违",
						"螐": "惟",
						"维": "伪",
						"苇": "蔚",
						"萎": "畏",
						"委": "喂",
						"蠆": "喂",
						"螑": "喂",
						"蠈": "慰",
						"蠉": "蠀",
						"蠇": "蠀",
						"伟": "蠀",
						"蠅": "蠅",
						"蟼": "蟽"
					};
					return e
				}), t.define("select2/data/base", ["../utils"], function(e) {
					function t() {
						t.__super__.constructor.call(this)
					}
					return e.Extend(t, e.Observable), t.prototype.current = function() {
						throw new Error("The `current` method must be defined in child classes.")
					}, t.prototype.query = function() {
						throw new Error("The `query` method must be defined in child classes.")
					}, t.prototype.bind = function() {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, i) {
						var r = t.id + "-result-";
						return r += e.generateChars(4), r += null != i.id ? "-" + i.id.toString() : "-" + e.generateChars(4)
					}, t
				}), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, i) {
					function r(e, t) {
						this.$element = e, this.options = t, r.__super__.constructor.call(this)
					}
					return t.Extend(r, e), r.prototype.current = function(e) {
						var t = [],
							r = this;
						this.$element.find(":selected").each(function() {
							var e = i(this),
								n = r.item(e);
							t.push(n)
						}), e(t)
					}, r.prototype.select = function(e) {
						var t = this;
						if(e.selected = !0, i(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
						if(this.$element.prop("multiple")) this.current(function(r) {
							var n = [];
							e = [e], e.push.apply(e, r);
							for(var a = 0; a < e.length; a++) {
								var o = e[a].id; - 1 === i.inArray(o, n) && n.push(o)
							}
							t.$element.val(n), t.$element.trigger("change")
						});
						else {
							var r = e.id;
							this.$element.val(r), this.$element.trigger("change")
						}
					}, r.prototype.unselect = function(e) {
						var t = this;
						if(this.$element.prop("multiple")) return e.selected = !1, i(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(r) {
							for(var n = [], a = 0; a < r.length; a++) {
								var o = r[a].id;
								o !== e.id && -1 === i.inArray(o, n) && n.push(o)
							}
							t.$element.val(n), t.$element.trigger("change")
						})
					}, r.prototype.bind = function(e) {
						var t = this;
						this.container = e, e.on("select", function(e) {
							t.select(e.data)
						}), e.on("unselect", function(e) {
							t.unselect(e.data)
						})
					}, r.prototype.destroy = function() {
						this.$element.find("*").each(function() {
							i.removeData(this, "data")
						})
					}, r.prototype.query = function(e, t) {
						var r = [],
							n = this,
							a = this.$element.children();
						a.each(function() {
							var t = i(this);
							if(t.is("option") || t.is("optgroup")) {
								var a = n.item(t),
									o = n.matches(e, a);
								null !== o && r.push(o)
							}
						}), t({
							results: r
						})
					}, r.prototype.addOptions = function(e) {
						t.appendMany(this.$element, e)
					}, r.prototype.option = function(e) {
						var t;
						e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
						var r = i(t),
							n = this._normalizeItem(e);
						return n.element = t, i.data(t, "data", n), r
					}, r.prototype.item = function(e) {
						var t = {};
						if(t = i.data(e[0], "data"), null != t) return t;
						if(e.is("option")) t = {
							id: e.val(),
							text: e.text(),
							disabled: e.prop("disabled"),
							selected: e.prop("selected"),
							title: e.prop("title")
						};
						else if(e.is("optgroup")) {
							t = {
								text: e.prop("label"),
								children: [],
								title: e.prop("title")
							};
							for(var r = e.children("option"), n = [], a = 0; a < r.length; a++) {
								var o = i(r[a]),
									s = this.item(o);
								n.push(s)
							}
							t.children = n
						}
						return t = this._normalizeItem(t), t.element = e[0], i.data(e[0], "data", t), t
					}, r.prototype._normalizeItem = function(e) {
						i.isPlainObject(e) || (e = {
							id: e,
							text: e
						}), e = i.extend({}, {
							text: ""
						}, e);
						var t = {
							selected: !1,
							disabled: !1
						};
						return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), i.extend({}, t, e)
					}, r.prototype.matches = function(e, t) {
						var i = this.options.get("matcher");
						return i(e, t)
					}, r
				}), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, i) {
					function r(e, t) {
						var i = t.get("data") || [];
						r.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(i))
					}
					return t.Extend(r, e), r.prototype.select = function(e) {
						var t = this.$element.find("option").filter(function(t, i) {
							return i.value == e.id.toString()
						});
						0 === t.length && (t = this.option(e), this.addOptions(t)), r.__super__.select.call(this, e)
					}, r.prototype.convertToOptions = function(e) {
						function r(e) {
							return function() {
								return i(this).val() == e.id
							}
						}
						for(var n = this, a = this.$element.find("option"), o = a.map(function() {
								return n.item(i(this)).id
							}).get(), s = [], l = 0; l < e.length; l++) {
							var h = this._normalizeItem(e[l]);
							if(i.inArray(h.id, o) >= 0) {
								var c = a.filter(r(h)),
									u = this.item(c),
									p = i.extend(!0, {}, h, u),
									d = this.option(p);
								c.replaceWith(d)
							} else {
								var f = this.option(h);
								if(h.children) {
									var m = this.convertToOptions(h.children);
									t.appendMany(f, m)
								}
								s.push(f)
							}
						}
						return s
					}, r
				}), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, i) {
					function r(e, t) {
						this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), r.__super__.constructor.call(this, e, t)
					}
					return t.Extend(r, e), r.prototype._applyDefaults = function(e) {
						var t = {
							data: function(e) {
								return i.extend({}, e, {
									q: e.term
								})
							},
							transport: function(e, t, r) {
								var n = i.ajax(e);
								return n.then(t), n.fail(r), n
							}
						};
						return i.extend({}, t, e, !0)
					}, r.prototype.processResults = function(e) {
						return e
					}, r.prototype.query = function(e, t) {
						function r() {
							var r = a.transport(a, function(r) {
								var a = n.processResults(r, e);
								n.options.get("debug") && window.console && console.error && (a && a.results && i.isArray(a.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(a)
							}, function() {
								r.status && "0" === r.status || n.trigger("results:message", {
									message: "errorLoading"
								})
							});
							n._request = r
						}
						var n = this;
						null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
						var a = i.extend({
							type: "GET"
						}, this.ajaxOptions);
						"function" == typeof a.url && (a.url = a.url.call(this.$element, e)), "function" == typeof a.data && (a.data = a.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(r, this.ajaxOptions.delay)) : r()
					}, r
				}), t.define("select2/data/tags", ["jquery"], function(e) {
					function t(t, i, r) {
						var n = r.get("tags"),
							a = r.get("createTag");
						void 0 !== a && (this.createTag = a);
						var o = r.get("insertTag");
						if(void 0 !== o && (this.insertTag = o), t.call(this, i, r), e.isArray(n))
							for(var s = 0; s < n.length; s++) {
								var l = n[s],
									h = this._normalizeItem(l),
									c = this.option(h);
								this.$element.append(c)
							}
					}
					return t.prototype.query = function(e, t, i) {
						function r(e, a) {
							for(var o = e.results, s = 0; s < o.length; s++) {
								var l = o[s],
									h = null != l.children && !r({
										results: l.children
									}, !0),
									c = l.text === t.term;
								if(c || h) return a ? !1 : (e.data = o, void i(e))
							}
							if(a) return !0;
							var u = n.createTag(t);
							if(null != u) {
								var p = n.option(u);
								p.attr("data-select2-tag", !0), n.addOptions([p]), n.insertTag(o, u)
							}
							e.results = o, i(e)
						}
						var n = this;
						return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, i) : void e.call(this, t, r)
					}, t.prototype.createTag = function(t, i) {
						var r = e.trim(i.term);
						return "" === r ? null : {
							id: r,
							text: r
						}
					}, t.prototype.insertTag = function(e, t, i) {
						t.unshift(i)
					}, t.prototype._removeOldTags = function() {
						var t = (this._lastTag, this.$element.find("option[data-select2-tag]"));
						t.each(function() {
							this.selected || e(this).remove()
						})
					}, t
				}), t.define("select2/data/tokenizer", ["jquery"], function(e) {
					function t(e, t, i) {
						var r = i.get("tokenizer");
						void 0 !== r && (this.tokenizer = r), e.call(this, t, i)
					}
					return t.prototype.bind = function(e, t, i) {
						e.call(this, t, i), this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
					}, t.prototype.query = function(t, i, r) {
						function n(t) {
							var i = o._normalizeItem(t),
								r = o.$element.find("option").filter(function() {
									return e(this).val() === i.id
								});
							if(!r.length) {
								var n = o.option(i);
								n.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([n])
							}
							a(i)
						}

						function a(e) {
							o.trigger("select", {
								data: e
							})
						}
						var o = this;
						i.term = i.term || "";
						var s = this.tokenizer(i, this.options, n);
						s.term !== i.term && (this.$search.length && (this.$search.val(s.term), this.$search.focus()), i.term = s.term), t.call(this, i, r)
					}, t.prototype.tokenizer = function(t, i, r, n) {
						for(var a = r.get("tokenSeparators") || [], o = i.term, s = 0, l = this.createTag || function(e) {
								return {
									id: e.term,
									text: e.term
								}
							}; s < o.length;) {
							var h = o[s];
							if(-1 !== e.inArray(h, a)) {
								var c = o.substr(0, s),
									u = e.extend({}, i, {
										term: c
									}),
									p = l(u);
								null != p ? (n(p), o = o.substr(s + 1) || "", s = 0) : s++
							} else s++
						}
						return {
							term: o
						}
					}, t
				}), t.define("select2/data/minimumInputLength", [], function() {
					function e(e, t, i) {
						this.minimumInputLength = i.get("minimumInputLength"), e.call(this, t, i)
					}
					return e.prototype.query = function(e, t, i) {
						return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
							message: "inputTooShort",
							args: {
								minimum: this.minimumInputLength,
								input: t.term,
								params: t
							}
						}) : void e.call(this, t, i)
					}, e
				}), t.define("select2/data/maximumInputLength", [], function() {
					function e(e, t, i) {
						this.maximumInputLength = i.get("maximumInputLength"), e.call(this, t, i)
					}
					return e.prototype.query = function(e, t, i) {
						return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
							message: "inputTooLong",
							args: {
								maximum: this.maximumInputLength,
								input: t.term,
								params: t
							}
						}) : void e.call(this, t, i)
					}, e
				}), t.define("select2/data/maximumSelectionLength", [], function() {
					function e(e, t, i) {
						this.maximumSelectionLength = i.get("maximumSelectionLength"), e.call(this, t, i)
					}
					return e.prototype.query = function(e, t, i) {
						var r = this;
						this.current(function(n) {
							var a = null != n ? n.length : 0;
							return r.maximumSelectionLength > 0 && a >= r.maximumSelectionLength ? void r.trigger("results:message", {
								message: "maximumSelected",
								args: {
									maximum: r.maximumSelectionLength
								}
							}) : void e.call(r, t, i)
						})
					}, e
				}), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
					function i(e, t) {
						this.$element = e, this.options = t, i.__super__.constructor.call(this)
					}
					return t.Extend(i, t.Observable), i.prototype.render = function() {
						var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
						return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
					}, i.prototype.bind = function() {}, i.prototype.position = function() {}, i.prototype.destroy = function() {
						this.$dropdown.remove()
					}, i
				}), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e) {
					function t() {}
					return t.prototype.render = function(t) {
						var i = t.call(this),
							r = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
						return this.$searchContainer = r, this.$search = r.find("input"), i.prepend(r), i
					}, t.prototype.bind = function(t, i, r) {
						var n = this;
						t.call(this, i, r), this.$search.on("keydown", function(e) {
							n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented()
						}), this.$search.on("input", function() {
							e(this).off("keyup")
						}), this.$search.on("keyup input", function(e) {
							n.handleSearch(e)
						}), i.on("open", function() {
							n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function() {
								n.$search.focus()
							}, 0)
						}), i.on("close", function() {
							n.$search.attr("tabindex", -1), n.$search.val("")
						}), i.on("focus", function() {
							i.isOpen() && n.$search.focus()
						}), i.on("results:all", function(e) {
							if(null == e.query.term || "" === e.query.term) {
								var t = n.showSearch(e);
								t ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide")
							}
						})
					}, t.prototype.handleSearch = function() {
						if(!this._keyUpPrevented) {
							var e = this.$search.val();
							this.trigger("query", {
								term: e
							})
						}
						this._keyUpPrevented = !1
					}, t.prototype.showSearch = function() {
						return !0
					}, t
				}), t.define("select2/dropdown/hidePlaceholder", [], function() {
					function e(e, t, i, r) {
						this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i, r)
					}
					return e.prototype.append = function(e, t) {
						t.results = this.removePlaceholder(t.results), e.call(this, t)
					}, e.prototype.normalizePlaceholder = function(e, t) {
						return "string" == typeof t && (t = {
							id: "",
							text: t
						}), t
					}, e.prototype.removePlaceholder = function(e, t) {
						for(var i = t.slice(0), r = t.length - 1; r >= 0; r--) {
							var n = t[r];
							this.placeholder.id === n.id && i.splice(r, 1)
						}
						return i
					}, e
				}), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
					function t(e, t, i, r) {
						this.lastParams = {}, e.call(this, t, i, r), this.$loadingMore = this.createLoadingMore(), this.loading = !1
					}
					return t.prototype.append = function(e, t) {
						this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
					}, t.prototype.bind = function(t, i, r) {
						var n = this;
						t.call(this, i, r), i.on("query", function(e) {
							n.lastParams = e, n.loading = !0
						}), i.on("query:append", function(e) {
							n.lastParams = e, n.loading = !0
						}), this.$results.on("scroll", function() {
							var t = e.contains(document.documentElement, n.$loadingMore[0]);
							if(!n.loading && t) {
								var i = n.$results.offset().top + n.$results.outerHeight(!1),
									r = n.$loadingMore.offset().top + n.$loadingMore.outerHeight(!1);
								i + 50 >= r && n.loadMore()
							}
						})
					}, t.prototype.loadMore = function() {
						this.loading = !0;
						var t = e.extend({}, {
							page: 1
						}, this.lastParams);
						t.page++, this.trigger("query:append", t)
					}, t.prototype.showLoadingMore = function(e, t) {
						return t.pagination && t.pagination.more
					}, t.prototype.createLoadingMore = function() {
						var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
							i = this.options.get("translations").get("loadingMore");
						return t.html(i(this.lastParams)), t
					}, t
				}), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
					function i(t, i, r) {
						this.$dropdownParent = r.get("dropdownParent") || e(document.body), t.call(this, i, r)
					}
					return i.prototype.bind = function(e, t, i) {
						var r = this,
							n = !1;
						e.call(this, t, i), t.on("open", function() {
							r._showDropdown(), r._attachPositioningHandler(t), n || (n = !0, t.on("results:all", function() {
								r._positionDropdown(), r._resizeDropdown()
							}), t.on("results:append", function() {
								r._positionDropdown(), r._resizeDropdown()
							}))
						}), t.on("close", function() {
							r._hideDropdown(), r._detachPositioningHandler(t)
						}), this.$dropdownContainer.on("mousedown", function(e) {
							e.stopPropagation()
						})
					}, i.prototype.destroy = function(e) {
						e.call(this), this.$dropdownContainer.remove()
					}, i.prototype.position = function(e, t, i) {
						t.attr("class", i.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
							position: "absolute",
							top: -999999
						}), this.$container = i
					}, i.prototype.render = function(t) {
						var i = e("<span></span>"),
							r = t.call(this);
						return i.append(r), this.$dropdownContainer = i, i
					}, i.prototype._hideDropdown = function() {
						this.$dropdownContainer.detach()
					}, i.prototype._attachPositioningHandler = function(i, r) {
						var n = this,
							a = "scroll.select2." + r.id,
							o = "resize.select2." + r.id,
							s = "orientationchange.select2." + r.id,
							l = this.$container.parents().filter(t.hasScroll);
						l.each(function() {
							e(this).data("select2-scroll-position", {
								x: e(this).scrollLeft(),
								y: e(this).scrollTop()
							})
						}), l.on(a, function() {
							var t = e(this).data("select2-scroll-position");
							e(this).scrollTop(t.y)
						}), e(window).on(a + " " + o + " " + s, function() {
							n._positionDropdown(), n._resizeDropdown()
						})
					}, i.prototype._detachPositioningHandler = function(i, r) {
						var n = "scroll.select2." + r.id,
							a = "resize.select2." + r.id,
							o = "orientationchange.select2." + r.id,
							s = this.$container.parents().filter(t.hasScroll);
						s.off(n), e(window).off(n + " " + a + " " + o)
					}, i.prototype._positionDropdown = function() {
						var t = e(window),
							i = this.$dropdown.hasClass("select2-dropdown--above"),
							r = this.$dropdown.hasClass("select2-dropdown--below"),
							n = null,
							a = this.$container.offset();
						a.bottom = a.top + this.$container.outerHeight(!1);
						var o = {
							height: this.$container.outerHeight(!1)
						};
						o.top = a.top, o.bottom = a.top + o.height;
						var s = {
								height: this.$dropdown.outerHeight(!1)
							},
							l = {
								top: t.scrollTop(),
								bottom: t.scrollTop() + t.height()
							},
							h = l.top < a.top - s.height,
							c = l.bottom > a.bottom + s.height,
							u = {
								left: a.left,
								top: o.bottom
							},
							p = this.$dropdownParent;
						"static" === p.css("position") && (p = p.offsetParent());
						var d = p.offset();
						u.top -= d.top, u.left -= d.left, i || r || (n = "below"), c || !h || i ? !h && c && i && (n = "below") : n = "above", ("above" == n || i && "below" !== n) && (u.top = o.top - d.top - s.height), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(u)
					}, i.prototype._resizeDropdown = function() {
						var e = {
							width: this.$container.outerWidth(!1) + "px"
						};
						this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
					}, i.prototype._showDropdown = function() {
						this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
					}, i
				}), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
					function e(t) {
						for(var i = 0, r = 0; r < t.length; r++) {
							var n = t[r];
							n.children ? i += e(n.children) : i++
						}
						return i
					}

					function t(e, t, i, r) {
						this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, i, r)
					}
					return t.prototype.showSearch = function(t, i) {
						return e(i.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, i)
					}, t
				}), t.define("select2/dropdown/selectOnClose", [], function() {
					function e() {}
					return e.prototype.bind = function(e, t, i) {
						var r = this;
						e.call(this, t, i), t.on("close", function(e) {
							r._handleSelectOnClose(e)
						})
					}, e.prototype._handleSelectOnClose = function(e, t) {
						if(t && null != t.originalSelect2Event) {
							var i = t.originalSelect2Event;
							if("select" === i._type || "unselect" === i._type) return
						}
						var r = this.getHighlightedResults();
						if(!(r.length < 1)) {
							var n = r.data("data");
							null != n.element && n.element.selected || null == n.element && n.selected || this.trigger("select", {
								data: n
							})
						}
					}, e
				}), t.define("select2/dropdown/closeOnSelect", [], function() {
					function e() {}
					return e.prototype.bind = function(e, t, i) {
						var r = this;
						e.call(this, t, i), t.on("select", function(e) {
							r._selectTriggered(e)
						}), t.on("unselect", function(e) {
							r._selectTriggered(e)
						})
					}, e.prototype._selectTriggered = function(e, t) {
						var i = t.originalEvent;
						i && i.ctrlKey || this.trigger("close", {
							originalEvent: i,
							originalSelect2Event: t
						})
					}, e
				}), t.define("select2/i18n/en", [], function() {
					return {
						errorLoading: function() {
							return "The results could not be loaded."
						},
						inputTooLong: function(e) {
							var t = e.input.length - e.maximum,
								i = "Please delete " + t + " character";
							return 1 != t && (i += "s"), i
						},
						inputTooShort: function(e) {
							var t = e.minimum - e.input.length,
								i = "Please enter " + t + " or more characters";
							return i
						},
						loadingMore: function() {
							return "Loading more results鈥�"
						},
						maximumSelected: function(e) {
							var t = "You can only select " + e.maximum + " item";
							return 1 != e.maximum && (t += "s"), t
						},
						noResults: function() {
							return "No results found"
						},
						searching: function() {
							return "Searching鈥�"
						}
					}
				}), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, i, r, n, a, o, s, l, h, c, u, p, d, f, m, E, g, v, T, y, _, R, x, b, w, H, M, S) {
					function A() {
						this.reset()
					}
					A.prototype.apply = function(u) {
						if(u = e.extend(!0, {}, this.defaults, u), null == u.dataAdapter) {
							if(u.dataAdapter = null != u.ajax ? f : null != u.data ? d : p, u.minimumInputLength > 0 && (u.dataAdapter = h.Decorate(u.dataAdapter, g)), u.maximumInputLength > 0 && (u.dataAdapter = h.Decorate(u.dataAdapter, v)), u.maximumSelectionLength > 0 && (u.dataAdapter = h.Decorate(u.dataAdapter, T)), u.tags && (u.dataAdapter = h.Decorate(u.dataAdapter, m)), (null != u.tokenSeparators || null != u.tokenizer) && (u.dataAdapter = h.Decorate(u.dataAdapter, E)), null != u.query) {
								var S = t(u.amdBase + "compat/query");
								u.dataAdapter = h.Decorate(u.dataAdapter, S)
							}
							if(null != u.initSelection) {
								var A = t(u.amdBase + "compat/initSelection");
								u.dataAdapter = h.Decorate(u.dataAdapter, A)
							}
						}
						if(null == u.resultsAdapter && (u.resultsAdapter = i, null != u.ajax && (u.resultsAdapter = h.Decorate(u.resultsAdapter, x)), null != u.placeholder && (u.resultsAdapter = h.Decorate(u.resultsAdapter, R)), u.selectOnClose && (u.resultsAdapter = h.Decorate(u.resultsAdapter, H))), null == u.dropdownAdapter) {
							if(u.multiple) u.dropdownAdapter = y;
							else {
								var C = h.Decorate(y, _);
								u.dropdownAdapter = C
							}
							if(0 !== u.minimumResultsForSearch && (u.dropdownAdapter = h.Decorate(u.dropdownAdapter, w)), u.closeOnSelect && (u.dropdownAdapter = h.Decorate(u.dropdownAdapter, M)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
								var L = t(u.amdBase + "compat/dropdownCss");
								u.dropdownAdapter = h.Decorate(u.dropdownAdapter, L)
							}
							u.dropdownAdapter = h.Decorate(u.dropdownAdapter, b)
						}
						if(null == u.selectionAdapter) {
							if(u.selectionAdapter = u.multiple ? n : r, null != u.placeholder && (u.selectionAdapter = h.Decorate(u.selectionAdapter, a)), u.allowClear && (u.selectionAdapter = h.Decorate(u.selectionAdapter, o)), u.multiple && (u.selectionAdapter = h.Decorate(u.selectionAdapter, s)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
								var P = t(u.amdBase + "compat/containerCss");
								u.selectionAdapter = h.Decorate(u.selectionAdapter, P)
							}
							u.selectionAdapter = h.Decorate(u.selectionAdapter, l)
						}
						if("string" == typeof u.language)
							if(u.language.indexOf("-") > 0) {
								var D = u.language.split("-"),
									O = D[0];
								u.language = [u.language, O]
							} else u.language = [u.language];
						if(e.isArray(u.language)) {
							var I = new c;
							u.language.push("en");
							for(var B = u.language, U = 0; U < B.length; U++) {
								var F = B[U],
									N = {};
								try {
									N = c.loadPath(F)
								} catch(k) {
									try {
										F = this.defaults.amdLanguageBase + F, N = c.loadPath(F)
									} catch(G) {
										u.debug && window.console && console.warn && console.warn('Select2: The language file for "' + F + '" could not be automatically loaded. A fallback will be used instead.');
										continue
									}
								}
								I.extend(N)
							}
							u.translations = I
						} else {
							var V = c.loadPath(this.defaults.amdLanguageBase + "en"),
								z = new c(u.language);
							z.extend(V), u.translations = z
						}
						return u
					}, A.prototype.reset = function() {
						function t(e) {
							function t(e) {
								return u[e] || e
							}
							return e.replace(/[^\u0000-\u007E]/g, t)
						}

						function i(r, n) {
							if("" === e.trim(r.term)) return n;
							if(n.children && n.children.length > 0) {
								for(var a = e.extend(!0, {}, n), o = n.children.length - 1; o >= 0; o--) {
									var s = n.children[o],
										l = i(r, s);
									null == l && a.children.splice(o, 1)
								}
								return a.children.length > 0 ? a : i(r, a)
							}
							var h = t(n.text).toUpperCase(),
								c = t(r.term).toUpperCase();
							return h.indexOf(c) > -1 ? n : null
						}
						this.defaults = {
							amdBase: "./",
							amdLanguageBase: "./i18n/",
							closeOnSelect: !0,
							debug: !1,
							dropdownAutoWidth: !1,
							escapeMarkup: h.escapeMarkup,
							language: S,
							matcher: i,
							minimumInputLength: 0,
							maximumInputLength: 0,
							maximumSelectionLength: 0,
							minimumResultsForSearch: 0,
							selectOnClose: !1,
							sorter: function(e) {
								return e
							},
							templateResult: function(e) {
								return e.text
							},
							templateSelection: function(e) {
								return e.text
							},
							theme: "default",
							width: "resolve"
						}
					}, A.prototype.set = function(t, i) {
						var r = e.camelCase(t),
							n = {};
						n[r] = i;
						var a = h._convertData(n);
						e.extend(this.defaults, a)
					};
					var C = new A;
					return C
				}), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, i, r) {
					function n(t, n) {
						if(this.options = t, null != n && this.fromElement(n), this.options = i.apply(this.options), n && n.is("input")) {
							var a = e(this.get("amdBase") + "compat/inputData");
							this.options.dataAdapter = r.Decorate(this.options.dataAdapter, a)
						}
					}
					return n.prototype.fromElement = function(e) {
						var i = ["select2"];
						null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = e.prop("dir") ? e.prop("dir") : e.closest("[dir]").prop("dir") ? e.closest("[dir]").prop("dir") : "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
						var n = {};
						n = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
						var a = t.extend(!0, {}, n);
						a = r._convertData(a);
						for(var o in a) t.inArray(o, i) > -1 || (t.isPlainObject(this.options[o]) ? t.extend(this.options[o], a[o]) : this.options[o] = a[o]);
						return this
					}, n.prototype.get = function(e) {
						return this.options[e]
					}, n.prototype.set = function(e, t) {
						this.options[e] = t
					}, n
				}), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, i, r) {
					var n = function(e, i) {
						null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), n.__super__.constructor.call(this);
						var r = e.attr("tabindex") || 0;
						e.data("old-tabindex", r), e.attr("tabindex", "-1");
						var a = this.options.get("dataAdapter");
						this.dataAdapter = new a(e, this.options);
						var o = this.render();
						this._placeContainer(o);
						var s = this.options.get("selectionAdapter");
						this.selection = new s(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
						var l = this.options.get("dropdownAdapter");
						this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
						var h = this.options.get("resultsAdapter");
						this.results = new h(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
						var c = this;
						this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
							c.trigger("selection:update", {
								data: e
							})
						}), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
					};
					return i.Extend(n, i.Observable), n.prototype._generateId = function(e) {
						var t = "";
						return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + i.generateChars(2) : i.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
					}, n.prototype._placeContainer = function(e) {
						e.insertAfter(this.$element);
						var t = this._resolveWidth(this.$element, this.options.get("width"));
						null != t && e.css("width", t)
					}, n.prototype._resolveWidth = function(e, t) {
						var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
						if("resolve" == t) {
							var r = this._resolveWidth(e, "style");
							return null != r ? r : this._resolveWidth(e, "element")
						}
						if("element" == t) {
							var n = e.outerWidth(!1);
							return 0 >= n ? "auto" : n + "px"
						}
						if("style" == t) {
							var a = e.attr("style");
							if("string" != typeof a) return null;
							for(var o = a.split(";"), s = 0, l = o.length; l > s; s += 1) {
								var h = o[s].replace(/\s/g, ""),
									c = h.match(i);
								if(null !== c && c.length >= 1) return c[1]
							}
							return null
						}
						return t
					}, n.prototype._bindAdapters = function() {
						this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
					}, n.prototype._registerDomEvents = function() {
						var t = this;
						this.$element.on("change.select2", function() {
							t.dataAdapter.current(function(e) {
								t.trigger("selection:update", {
									data: e
								})
							})
						}), this.$element.on("focus.select2", function(e) {
							t.trigger("focus", e)
						}), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
						var r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
						null != r ? (this._observer = new r(function(i) {
							e.each(i, t._syncA), e.each(i, t._syncS)
						}), this._observer.observe(this.$element[0], {
							attributes: !0,
							childList: !0,
							subtree: !1
						})) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
					}, n.prototype._registerDataEvents = function() {
						var e = this;
						this.dataAdapter.on("*", function(t, i) {
							e.trigger(t, i)
						})
					}, n.prototype._registerSelectionEvents = function() {
						var t = this,
							i = ["toggle", "focus"];
						this.selection.on("toggle", function() {
							t.toggleDropdown()
						}), this.selection.on("focus", function(e) {
							t.focus(e)
						}), this.selection.on("*", function(r, n) {
							-1 === e.inArray(r, i) && t.trigger(r, n)
						})
					}, n.prototype._registerDropdownEvents = function() {
						var e = this;
						this.dropdown.on("*", function(t, i) {
							e.trigger(t, i)
						})
					}, n.prototype._registerResultsEvents = function() {
						var e = this;
						this.results.on("*", function(t, i) {
							e.trigger(t, i)
						})
					}, n.prototype._registerEvents = function() {
						var e = this;
						this.on("open", function() {
							e.$container.addClass("select2-container--open")
						}), this.on("close", function() {
							e.$container.removeClass("select2-container--open")
						}), this.on("enable", function() {
							e.$container.removeClass("select2-container--disabled")
						}), this.on("disable", function() {
							e.$container.addClass("select2-container--disabled")
						}), this.on("blur", function() {
							e.$container.removeClass("select2-container--focus")
						}), this.on("query", function(t) {
							e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(i) {
								e.trigger("results:all", {
									data: i,
									query: t
								})
							})
						}), this.on("query:append", function(t) {
							this.dataAdapter.query(t, function(i) {
								e.trigger("results:append", {
									data: i,
									query: t
								})
							})
						}), this.on("keypress", function(t) {
							var i = t.which;
							e.isOpen() ? i === r.ESC || i === r.TAB || i === r.UP && t.altKey ? (e.close(), t.preventDefault()) : i === r.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : i === r.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : i === r.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : i === r.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (i === r.ENTER || i === r.SPACE || i === r.DOWN && t.altKey) && (e.open(), t.preventDefault())
						})
					}, n.prototype._syncAttributes = function() {
						this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
					}, n.prototype._syncSubtree = function(e, t) {
						var i = !1,
							r = this;
						if(!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
							if(t)
								if(t.addedNodes && t.addedNodes.length > 0)
									for(var n = 0; n < t.addedNodes.length; n++) {
										var a = t.addedNodes[n];
										a.selected && (i = !0)
									} else t.removedNodes && t.removedNodes.length > 0 && (i = !0);
								else i = !0;
							i && this.dataAdapter.current(function(e) {
								r.trigger("selection:update", {
									data: e
								})
							})
						}
					}, n.prototype.trigger = function(e, t) {
						var i = n.__super__.trigger,
							r = {
								open: "opening",
								close: "closing",
								select: "selecting",
								unselect: "unselecting"
							};
						if(void 0 === t && (t = {}), e in r) {
							var a = r[e],
								o = {
									prevented: !1,
									name: e,
									args: t
								};
							if(i.call(this, a, o), o.prevented) return void(t.prevented = !0)
						}
						i.call(this, e, t)
					}, n.prototype.toggleDropdown = function() {
						this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
					}, n.prototype.open = function() {
						this.isOpen() || this.trigger("query", {})
					}, n.prototype.close = function() {
						this.isOpen() && this.trigger("close", {})
					}, n.prototype.isOpen = function() {
						return this.$container.hasClass("select2-container--open")
					}, n.prototype.hasFocus = function() {
						return this.$container.hasClass("select2-container--focus")
					}, n.prototype.focus = function() {
						this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
					}, n.prototype.enable = function(e) {
						this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
						var t = !e[0];
						this.$element.prop("disabled", t)
					}, n.prototype.data = function() {
						this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
						var e = [];
						return this.dataAdapter.current(function(t) {
							e = t
						}), e
					}, n.prototype.val = function(t) {
						if(this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
						var i = t[0];
						e.isArray(i) && (i = e.map(i, function(e) {
							return e.toString()
						})), this.$element.val(i).trigger("change")
					}, n.prototype.destroy = function() {
						this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
					}, n.prototype.render = function() {
						var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
						return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
					}, n
				}), t.define("jquery-mousewheel", ["jquery"], function(e) {
					return e
				}), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, i, r) {
					if(null == e.fn.select2) {
						var n = ["open", "close", "destroy"];
						e.fn.select2 = function(t) {
							if(t = t || {}, "object" == typeof t) return this.each(function() {
								{
									var r = e.extend(!0, {}, t);
									new i(e(this), r)
								}
							}), this;
							if("string" == typeof t) {
								var r, a = Array.prototype.slice.call(arguments, 1);
								return this.each(function() {
									var i = e(this).data("select2");
									null == i && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), r = i[t].apply(i, a)
								}), e.inArray(t, n) > -1 ? this : r
							}
							throw new Error("Invalid arguments for Select2: " + t)
						}
					}
					return null == e.fn.select2.defaults && (e.fn.select2.defaults = r), i
				}), {
					define: t.define,
					require: t.require
				}
			}(),
			i = t.require("jquery.select2");
		return e.fn.select2.amd = t, i
	});