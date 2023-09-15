import { createStore } from 'vuex'

const store = createStore({
	state: {
		page: 1,
		maxpage: 1,
		menutitle: "portfolio",
		menuprof: false,
		portfolio: [],
		preloder: true,
		heiderlist: {
			img: "/Hederprof/macbook.jpg",
			title: "Портфолио",
			href: "null",
			contents: "Здесь собрана небольшая часть сайтов над которыми я работал.К сожалению большую часть сайтов я потерял при переустановке виндус. Еще часть сайтов прекратили свое существование или изменили дизайн.Некоторые мне удалось восстановить из архивов, но не все.",
			arts: 0,
		},
		meta: {
			title: "Портфолио",
			contents: "Здесь собрана небольшая часть сайтов над которыми я работал.К сожалению большую часть сайтов я потерял при переустановке виндус. Еще часть сайтов прекратили свое существование или изменили дизайн.Некоторые мне удалось восстановить из архивов, но не все.",
		}
	},
	mutations: {
		INCREMENT_METADESCRIPT(state, payload) {
			console.log("INCREMENT_METADESCRIPT");
			state.meta.contents = payload;
			console.log(state.meta.contents);
		},
		INCREMENT_METATITLE(state, payload) {
			console.log("INCREMENT_METATITLE");
			state.meta.title = payload;
			console.log(state.meta.title);
		},
		INCREMENT_PAGE(state, payload) {
			state.page = payload;
			console.log("INCREMENT_PAGE");
			console.log(state.page);
		},
		INCREMENT_PORTFOLIO(state, payload) {
			state.portfolio = payload;
			console.log("INCREMENT_PORTFOLIO");
			console.log(state.portfolio);
		},
		INCREMENT_MENUTITLE(state, payload) {
			console.log("INCREMENT_MENUTITLE");
			state.menutitle = payload;
			console.log(state.menutitle);
		},
		INCREMENT_PRELODER(state, payload) {
			console.log("INCREMENT_MENUTITLE");
			state.preloder = payload;
			console.log(state.preloder);
		},
		INCREMENT_MAXPAGE(state, payload) {
			state.maxpage = payload;
			console.log("INCREMENT_MAXPAGE");
			console.log(state.maxpage);
		},
		INCREMENT_HEIDER_LIST(state, payload) {
			state.heiderlist.title = payload;
			console.log("INCREMENT_HEIDER_LIST");
			console.log(state.heiderlist.title);
		},
		INCREMENT_HEIDER_HREF(state, payload) {
			state.heiderlist.href = payload;
			console.log("INCREMENT_HEIDER_HREF");
			console.log(state.heiderlist.href);
		},
		INCREMENT_HEIDER_CENIA(state, payload) {
			state.heiderlist.arts = payload;
			console.log("INCREMENT_HEIDER_CENIA");
			console.log(state.heiderlist.arts);
		},
		INCREMENT_HEIDER_IMG(state, payload) {
			state.heiderlist.img = payload;
			console.log("INCREMENT_HEIDER_IMG");
			console.log(state.heiderlist.img);
		},
		INCREMENT_HEIDER_CONTENT(state, payload) {
			console.log("INCREMENT_HEIDER_CONTENT");
			state.heiderlist.contents = payload;
			console.log(state.heiderlist.contents);
		},
	}
})

export default store;