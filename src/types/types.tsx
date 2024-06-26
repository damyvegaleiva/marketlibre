import { z } from "zod";

export type TPurchaseSchema = z.infer<typeof purchaseSchema>;

export const purchaseSchema = z.object({
  name: z
    .string()
    .min(1, "Ingresa un nombre")
    .regex(/^[a-zA-Z\s]*$/, "Nombre solo puede contener letras"),

  last_name: z
    .string()
    .min(1, "Ingresa un apellido")
    .regex(/^[a-zA-Z\s]*$/, "Apellido solo puede contener letras"),

  email: z.string().email({ message: "Ingresa un email valido" }),

  phone: z
    .string()
    .min(1, "Ingresa un numero de telefono")
    .regex(/^[0-9]+$/, "Telefono solo puede contener números"),
});

export type TCategoryData = {
  id: string;
  name: string;
};

export type TDataSearch = {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: object;
  results: TDataResults[];
  sort: object;
  available_sorts: object[];
  filters: object[];
  available_filters: object[];
  pads_info: object;
};

export type TDataResults = {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: null;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: number;
  official_store_name: string;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: string[];
  variation_filters: string[];
  shipping: object;
  stop_time: string;
  seller: object;
  seller_address: object;
  address: object;
  attributes: object[];
  variations_data: object;
  installments: object;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: string[] | number[];
  inventory_id: null;
};

export type TDataItemPictures = {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
};

export type TDataItem = {
  id: string;
  site_id: string;
  title: string;
  subtitle: null;
  seller_id: number;
  category_id: string;
  official_store_id: number;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: string[];
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: TDataItemPictures[];
  video_id: null;
  descriptions: string[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: string[];
  shipping: object;
  international_delivery_mode: string;
  seller_address: object;
  seller_contact: null;
  location: object;
  coverage_areas: string[];
  attributes: object[];
  warnings: string[];
  listing_source: string;
  variations: object[];
  status: string;
  sub_status: string[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: null;
  differential_pricing: null;
  deal_ids: string[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: null;
  catalog_listing: boolean;
  channels: string[];
};
