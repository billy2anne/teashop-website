--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS ONLY public.career DROP CONSTRAINT IF EXISTS career_pkey;
ALTER TABLE IF EXISTS public.products ALTER COLUMN "teaId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.career ALTER COLUMN "careerId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_teaId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP SEQUENCE IF EXISTS public."career_careerId_seq";
DROP TABLE IF EXISTS public.career;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: career; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.career (
    "careerId" integer NOT NULL,
    "position" text NOT NULL,
    "positionDescription" text NOT NULL,
    "jobType" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: career_careerId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."career_careerId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: career_careerId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."career_careerId_seq" OWNED BY public.career."careerId";


--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "teaId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "teaId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    description text NOT NULL
);


--
-- Name: products_teaId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_teaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_teaId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_teaId_seq" OWNED BY public.products."teaId";


--
-- Name: career careerId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.career ALTER COLUMN "careerId" SET DEFAULT nextval('public."career_careerId_seq"'::regclass);


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products teaId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "teaId" SET DEFAULT nextval('public."products_teaId_seq"'::regclass);


--
-- Data for Name: career; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.career ("careerId", "position", "positionDescription", "jobType", "createdAt") FROM stdin;
1	dishwaher	Ensures the cleanliness and sanitization of dishes, tableware, glassware, pots, pans, and utensils through manual and machine cleaning methods. Additionally, dishwashers are expected to keep the dishwarshing area clean and safe.	part time	2020-10-22 03:06:30.617799+00
2	Kitchen Staff	 Clean all dishes, work stations, cooking equipment, and food storage areas in accordance with food safety regulations. Wash, chop, shred, and grate ingredients for subsequent use by the Chef. Store ingredients according to prescribed food safety regulations.	Full-time	2020-10-22 03:13:15.502464+00
3	Accounts Payable	Provide financial, administrative and clerical support to the organisation. This role is aims to complete payments and control expenses by receiving payments, plus processing, verifying and reconciling invoices	Full-time	2020-10-22 03:16:08.373513+00
4	Team Member	Motivates and inspires employees; being passionate about providing service to guests and ensuring each experience is of the highest quality; demonstrating a strong awareness and concern for food quality/safety and restaurant cleanliness; enjoy working in a fast-paced, high energy, and team-oriented environment; having to willingly comply with the company grooming and appearance standards; and performing basic administrative duties.	Part-time	2020-10-22 03:28:35.67459+00
5	Cashier	Provides a positive customer experience with fair, friendly, and courteous service. Registers sales on a cash register by scanning items, itemizing and totaling customers purchases. Resolves customer issues and answers questions. Bags purchases if needed. Processes return transactions.	Part-time	2020-10-22 03:34:31.314482+00
6	Team Leader	The ideal restaurant team leader will be: a self-motivated individual; an excellent communicator; experienced in large restaurant in buffet and a la carte style service; able to lead a team of colleagues; well organised; willing and able to work a rotating roster and be available to work both morning & nights.	Full-time	2020-10-22 03:48:23.249441+00
\.


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "teaId", price) FROM stdin;
1	1	1	250
2	1	1	250
3	1	1	250
4	1	4	250
5	1	8	275
6	1	5	250
7	1	4	250
8	1	4	250
9	2	3	270
10	2	3	270
11	3	1	250
12	3	2	350
13	3	2	350
14	4	1	250
15	4	2	350
16	4	2	350
17	4	3	270
18	4	3	270
19	4	1	250
20	4	1	250
21	4	2	350
22	4	2	350
23	5	1	250
24	4	1	250
25	6	1	250
26	6	3	270
27	6	2	350
28	6	2	350
29	6	2	350
30	6	4	250
31	6	4	250
32	6	1	250
33	7	5	250
34	7	1	250
35	7	6	275
36	7	1	250
37	7	2	350
38	8	5	250
39	8	5	250
40	8	5	250
41	8	3	270
42	8	1	250
43	9	2	350
44	9	5	250
45	9	1	250
46	9	2	350
47	9	2	350
48	9	2	350
49	9	3	270
50	10	2	350
51	9	1	250
52	11	2	350
53	11	2	350
54	12	1	250
55	12	2	350
56	12	4	250
57	12	2	350
58	12	1	250
59	12	5	250
60	12	3	270
61	12	1	250
62	12	3	270
63	12	1	250
64	12	1	250
65	12	1	250
66	12	1	250
67	12	7	275
68	12	3	270
69	12	2	350
70	12	2	350
71	12	2	350
72	12	2	350
73	12	2	350
74	12	1	250
75	12	3	270
76	12	1	250
77	12	1	250
78	12	1	250
79	12	1	250
80	12	3	270
81	12	1	250
82	12	3	270
83	12	1	250
94	14	1	250
95	14	2	350
96	14	1	250
97	14	3	270
98	14	3	270
99	14	2	350
100	14	3	270
101	14	1	250
102	14	2	350
103	14	1	250
104	14	3	270
105	14	2	350
106	14	1	250
107	15	1	250
108	15	3	270
109	15	3	270
110	15	1	250
111	15	1	250
113	17	1	250
136	16	1	250
137	16	1	250
138	16	2	350
139	16	3	270
140	16	3	270
141	16	1	250
142	16	3	270
143	16	2	350
144	16	2	350
145	16	2	350
146	16	2	350
147	16	2	350
148	16	2	350
149	16	2	350
150	16	2	350
151	16	1	250
152	16	3	270
153	16	2	350
154	16	2	350
155	16	2	350
156	16	1	250
157	18	2	350
158	19	2	350
159	19	2	350
160	19	1	250
161	19	3	270
162	19	2	350
163	19	2	350
164	19	3	270
165	19	2	350
166	19	3	270
167	19	1	250
168	19	2	350
169	19	1	250
170	19	1	250
171	19	2	350
172	19	1	250
173	19	1	250
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-10-11 08:10:41.004753+00
2	2020-10-11 21:32:20.117666+00
3	2020-10-11 23:40:46.148076+00
4	2020-10-13 04:39:45.691626+00
5	2020-10-13 07:14:02.884842+00
6	2020-10-14 00:59:42.676113+00
7	2020-10-15 05:37:15.030264+00
8	2020-10-16 01:54:11.932308+00
9	2020-10-17 03:42:49.938108+00
10	2020-10-17 06:32:08.119525+00
11	2020-10-17 21:46:31.820776+00
12	2020-10-18 20:03:49.956081+00
13	2020-10-19 05:51:21.011536+00
14	2020-10-19 06:40:42.026008+00
15	2020-10-20 05:41:34.50694+00
16	2020-10-21 02:51:34.938778+00
17	2020-10-21 03:33:23.239226+00
18	2020-10-21 23:53:39.674459+00
19	2020-10-21 23:54:54.646032+00
20	2020-10-22 00:30:39.421335+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	10	Kim	1234	121324 Arizona Blvd	2020-10-17 09:21:43.577613+00
2	12	Anne	12233243	12345 Oregon Trail Rd	2020-10-19 05:49:19.450475+00
3	13	Chan	9886544533	45678 Center Dr.	2020-10-19 06:35:13.686776+00
4	14	Bob	625662111	Yellow Brick Road	2020-10-19 08:27:26.330056+00
5	16	Anne	67890	1234 Sesame St.	2020-10-21 23:52:48.188213+00
6	18	Anne	1234	Sesame St.	2020-10-21 23:54:27.055063+00
7	19	Jonah	098877	123 Pike Place Rd	2020-10-22 00:30:31.841268+00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("teaId", name, price, image, description) FROM stdin;
1	Green Tea	250	/images/greentea.jpg	Tea is rich in polyphenols, which are natural compounds that have health benefits, such as reducing inflammation and helping to fight cancer.
2	Jasmine Tea	350	/images/jasminetea.jpg	Tea is floral, sweet, perfumed, fresh, blossomed, dewy, bouquet, fragrant, delicate and subtle.
3	Black Tea	270	/images/blacktea.jpg	This tea is malty, smoky, brisk, and earthy. It is more oxidized than oolong, yellow, white and green teas. Black tea is generally stronger in flavor than other teas.
4	Oolong Tea	250	/images/oolongtea.jpg	This tea is oxidized so its flavor is full bodied, floral and toasty. The color of the leaves are golden to brown.
5	Hibiscus Tea	250	/images/hibiscustea.jpg	This tea is an herbal tea made from the roselle flower. It has many health benefits linked to lowering blood pressure, fighting bacteria and even aid in weight loss.
6	Raspberry Tea	275	/images/raspberrytea.jpg	This tea is an herbal tea made from raspberry fruit so it has a rich, sweet flavor. It's also rich in nutrients and antioxidants.
7	White Tea	275	/images/whitetea.jpg	This tea made from Camellia sinensis plant leaves. The flavor is mildly sweet with notes of peach.
8	Ginger Tea	275	/images/gingertea.jpg	This tea is made from ginger root. It is believed to have antioxidants which increase immunity and decrease stress. It's flavor is aromatic, warm, and spicy.
9	Citron Honey Tea	250	/images/citronhoneytea.jpg	This tea is made from ginger root. It is believed to have antioxidants which increase immunity and decrease stress. It's flavor is aromatic, warm, and spicy.
\.


--
-- Name: career_careerId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."career_careerId_seq"', 6, true);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 228, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 20, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 7, true);


--
-- Name: products_teaId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_teaId_seq"', 1, false);


--
-- Name: career career_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.career
    ADD CONSTRAINT career_pkey PRIMARY KEY ("careerId");


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("teaId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

