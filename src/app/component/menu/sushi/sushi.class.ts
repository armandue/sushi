export interface ISushi {
	id: number;
	name: string;
	price: number;
	ingredient: string;
	unit: number;
	tags: TAGS[];
	order: number;
	category: CATEGORY;
	avaiable: boolean;
}

export enum TAGS {
	PESCE_CRUDO = 0,
	PESCE_COTTO = 1,
	PICCANTE = 2,
	VEGETARIANO = 3,
	SENZA_GLUTINE = 4,
	QING = 5
}

export enum CATEGORY {
	STARTER,
	MIXED,
	SALADS,
	SASHIMI,
	HOT_DISHES,
	MAKI,
	BARCHE_MIX
}
