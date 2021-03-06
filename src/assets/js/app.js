import Vue from 'vue';
import VueI18n from 'vue-i18n';
import {
	ApicartSkeletonBundleSdk,
	ApicartProductDetail,
	ApicartCartDropdown,
	ApicartCategory,
	ApicartCheckoutDialog,
	ApicartCartDialog,
	ApicartOrderDialog
} from '@apicart/vue-components/lib';
import categoriesTranslations from '../../../static/category/translations.json';
import categoriesProducts from '../../../static/category/products.json';

Vue.use(VueI18n);

if (process.env.GRIDSOME_APICART_ENV === 'dev') {
	ApicartSkeletonBundleSdk.setDevEnv();
}

ApicartSkeletonBundleSdk.configure({
	store: new ApicartSkeletonBundleSdk.Store({ token: process.env.GRIDSOME_APICART_STORE_TOKEN }),
	vueComponents: {
		paymentMethodsList: {
			allowedMethods: ['cash', 'bank-transfer']
		},
		cartDropdown: {
			dropdownPosition: 'right'
		},
		category: {
			products: {
				list: categoriesProducts
			}
		}
	},
	vueComponentsTranslator: {
		actualLocale: 'en',
		currencyFormats: {
			en: {
				currency: {
					currency: 'USD'
				}
			}
		},
		localization: categoriesTranslations
	}
});

export {
	ApicartSkeletonBundleSdk,
	ApicartCartDropdown,
	ApicartCategory,
	ApicartCheckoutDialog,
	ApicartCartDialog,
	ApicartOrderDialog,
	ApicartProductDetail
}
