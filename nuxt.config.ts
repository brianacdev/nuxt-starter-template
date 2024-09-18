// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "@nuxt/ui"],

	runtimeConfig: {
		nodeEnv: "production",
	},

	css: ["~/assets/styles/main.css"],

	colorMode: {
		disableTransition: true,
		preference: "light",
	},

	routeRules: {
		"/": { prerender: true },
	},

	app: {
		head: {
			htmlAttrs: {
				class: "bg-white h-full w-full",
			},
			bodyAttrs: {
				class: "h-full w-full",
			},
		},
		rootAttrs: {
			class: "h-full w-full",
		},
	},

	devtools: {
		enabled: true,
	},

	typescript: {
		strict: false,
	},

	future: {
		compatibilityVersion: 4,
	},

	eslint: {
		config: {},
	},

	compatibilityDate: "2024-07-11",
})
