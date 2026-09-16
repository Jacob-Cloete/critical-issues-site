window.SITE_DATA = window.SITE_DATA || {};
window.SITE_DATA.innovation = {
  datasets: [
    {
      title: 'Solar photovoltaic module price',
      type: 'line',
      unit: '$',
      seriesLabel: 'Price per watt',
      trend: 'improving',
      takeaway: 'Solar panel prices have fallen about 99.8% since 1975 (from roughly $132/W to $0.27/W) — the single biggest driver of solar’s rise from niche technology to the cheapest new electricity source in most of the world.',
      data: [
        {x:1975,y:132.3757},{x:1976,y:99.59758},{x:1977,y:72.66112},{x:1978,y:51.408165},{x:1979,y:43.19512},
        {x:1980,y:36.604977},{x:1981,y:29.266363},{x:1982,y:26.295176},{x:1983,y:21.2281},{x:1984,y:19.725023},
        {x:1985,y:17.220385},{x:1986,y:14.24468},{x:1987,y:12.110387},{x:1988,y:11.311608},{x:1989,y:11.690053},
        {x:1990,y:12.091146},{x:1991,y:11.200797},{x:1992,y:10.435116},{x:1993,y:9.758667},{x:1994,y:9.231527},
        {x:1995,y:8.535535},{x:1996,y:7.9798346},{x:1997,y:7.952008},{x:1998,y:7.165558},{x:1999,y:6.6192613},
        {x:2000,y:6.495887},{x:2001,y:6.284449},{x:2002,y:5.747254},{x:2003,y:5.463806},{x:2004,y:4.695495},
        {x:2005,y:4.7456656},{x:2006,y:5.172746},{x:2007,y:5.211057},{x:2008,y:4.7491965},{x:2009,y:3.1742926},
        {x:2010,y:2.5118067},{x:2011,y:2.060892},{x:2012,y:1.1107162},{x:2013,y:0.85660523},{x:2014,y:0.79053074},
        {x:2015,y:0.7357285},{x:2016,y:0.6802508},{x:2017,y:0.57135326},{x:2018,y:0.5090506},{x:2019,y:0.46694848},
        {x:2020,y:0.36974207},{x:2021,y:0.33192256},{x:2022,y:0.3658019},{x:2023,y:0.32176703},{x:2024,y:0.26518628}
      ],
      source: { name: 'IRENA; Nemet (2009); Farmer & Lafond (2016), via Our World in Data', url: 'https://ourworldindata.org/grapher/solar-pv-prices' }
    },
    {
      title: 'Lithium-ion battery cell price',
      type: 'line',
      unit: '$',
      seriesLabel: 'Price per kWh',
      trend: 'improving',
      takeaway: 'Lithium-ion battery cell prices have dropped roughly 99% since 1991 (from over $9,000/kWh to $78/kWh) — the key enabler of affordable electric vehicles and grid storage. Prices did tick up in 2022 on a raw-material cost spike before resuming their fall.',
      data: [
        {x:1991,y:9210.23},{x:1992,y:7388.138},{x:1993,y:5881.7812},{x:1994,y:6714.4497},{x:1995,y:6301.8833},
        {x:1996,y:5307.834},{x:1997,y:4545.2925},{x:1998,y:3656.8633},{x:1999,y:2769.8726},{x:2000,y:2690.6272},
        {x:2001,y:1878.0293},{x:2002,y:1345.5295},{x:2003,y:1040.3679},{x:2004,y:930.90393},{x:2005,y:802.5369},
        {x:2006,y:687.29584},{x:2007,y:655.836},{x:2008,y:687.6569},{x:2009,y:612.57623},{x:2010,y:550.72064},
        {x:2011,y:524.59796},{x:2012,y:539.6925},{x:2013,y:490.8935},{x:2014,y:434.2699},{x:2015,y:331.94275},
        {x:2016,y:259},{x:2017,y:187},{x:2018,y:157},{x:2019,y:132},{x:2020,y:123},
        {x:2021,y:119},{x:2022,y:132},{x:2023,y:111},{x:2024,y:78}
      ],
      source: { name: 'Rupert Way (2026), based on Ziegler & Trancik (2021), BloombergNEF, via Our World in Data', url: 'https://ourworldindata.org/grapher/price-of-lithium-ion-battery-cells' }
    },
    {
      title: 'Share of world population using the internet',
      type: 'line',
      unit: '%',
      seriesLabel: 'Internet users',
      trend: 'improving',
      takeaway: 'The share of humanity online has risen from about 16% in 2005 to nearly 74% in 2025 — one of the fastest technology diffusions in history. That global average still hides a large access gap between rich and poor countries (see the chart alongside it).',
      data: [
        {x:2005,y:15.6},{x:2006,y:17.2},{x:2007,y:20.2},{x:2008,y:22.8},{x:2009,y:25.3},{x:2010,y:28.4},
        {x:2011,y:30.9},{x:2012,y:33.3},{x:2013,y:35.3},{x:2014,y:37.4},{x:2015,y:39.9},{x:2016,y:43.6},
        {x:2017,y:46.3},{x:2018,y:49.4},{x:2019,y:53.9},{x:2020,y:60.1},{x:2021,y:63.8},{x:2022,y:67},
        {x:2023,y:69.2},{x:2024,y:71.2},{x:2025,y:73.6}
      ],
      source: { name: 'ITU World Telecommunication/ICT Indicators, via World Bank / Our World in Data', url: 'https://ourworldindata.org/grapher/share-of-individuals-using-the-internet' }
    },
    {
      title: 'Internet access by income group (2023)',
      type: 'bar',
      unit: '%',
      seriesLabel: 'Internet users',
      takeaway: 'In 2023, only 22% of people in low-income countries used the internet, versus 92% in high-income countries — a roughly 4x gap that has narrowed only slowly. Innovation’s benefits remain very unevenly distributed by income.',
      data: [
        {category:'High income', value:91.9},
        {category:'Upper middle income', value:85.3},
        {category:'World average', value:69.2},
        {category:'Lower middle income', value:55.4},
        {category:'Low income', value:22.0}
      ],
      source: { name: 'World Bank World Development Indicators (ITU data)', url: 'https://data.worldbank.org/indicator/IT.NET.USER.ZS' }
    },
    {
      title: 'Global installed renewable energy capacity',
      type: 'line',
      unit: ' GW',
      seriesLabel: 'Capacity',
      trend: 'improving',
      takeaway: 'Global renewable power capacity has grown nearly 7x since 2000 (764 GW to over 5,150 GW) — the physical scale-up made possible by falling solar and battery costs. Capacity isn’t the same as generation share: solar and wind run at lower capacity factors than fossil or nuclear plants.',
      data: [
        {x:2000,y:763.94165},{x:2001,y:785.04565},{x:2002,y:805.9863},{x:2003,y:836.23505},{x:2004,y:869.0441},
        {x:2005,y:908.40063},{x:2006,y:949.881},{x:2007,y:999.30676},{x:2008,y:1062.3982},{x:2009,y:1143.4758},
        {x:2010,y:1226.5267},{x:2011,y:1331.3591},{x:2012,y:1446.2083},{x:2013,y:1570.126},{x:2014,y:1700.0487},
        {x:2015,y:1852.7697},{x:2016,y:2021.3016},{x:2017,y:2187.566},{x:2018,y:2358.148},{x:2019,y:2541.9038},
        {x:2020,y:2811.1064},{x:2021,y:3077.1157},{x:2022,y:3379.2378},{x:2023,y:3875.7563},{x:2024,y:4461.6313},
        {x:2025,y:5155.0073}
      ],
      source: { name: 'IRENA Renewable Energy Statistics, via Our World in Data', url: 'https://ourworldindata.org/grapher/installed-global-renewable-energy-capacity-by-technology' }
    },
    {
      title: 'Scientific and technical journal articles published per year',
      type: 'line',
      unit: '',
      seriesLabel: 'Articles published',
      trend: 'improving',
      takeaway: 'The world published about 3.3x more scientific and technical journal articles in 2023 than in 1996 (1.0 million to 3.3 million) — though rising counts partly reflect publishing incentives and a larger global research workforce, not purely breakthrough quality.',
      data: [
        {x:1996,y:984773},{x:1997,y:1014840},{x:1998,y:1020434},{x:1999,y:1020793},{x:2000,y:1070967},
        {x:2001,y:1109574},{x:2002,y:1154717},{x:2003,y:1213775},{x:2004,y:1324894},{x:2005,y:1484401},
        {x:2006,y:1570081},{x:2007,y:1636696},{x:2008,y:1725502},{x:2009,y:1827111},{x:2010,y:1909442},
        {x:2011,y:2003515},{x:2012,y:2062566},{x:2013,y:2125848},{x:2014,y:2195344},{x:2015,y:2252543},
        {x:2016,y:2336757},{x:2017,y:2425390},{x:2018,y:2522113},{x:2019,y:2708531},{x:2020,y:2868013},
        {x:2021,y:3111013},{x:2022,y:3220953},{x:2023,y:3271296}
      ],
      source: { name: 'National Science Foundation Science and Engineering Indicators, via World Bank / Our World in Data', url: 'https://ourworldindata.org/grapher/scientific-and-technical-journal-articles' }
    },
    {
      title: 'Global research & development expenditure',
      type: 'line',
      unit: '%',
      seriesLabel: 'R&D spending (% of GDP)',
      trend: 'improving',
      takeaway: 'Global R&D spending has climbed from under 2% of world GDP in the late 1990s to 2.6% in 2023 — a sustained rise in the world’s investment in innovation itself, though heavily weighted by a handful of large economies.',
      data: [
        {x:1996,y:1.96},{x:1997,y:1.96},{x:1998,y:1.97},{x:1999,y:2.05},{x:2000,y:2.05},{x:2001,y:2.06},
        {x:2002,y:2.03},{x:2003,y:2.02},{x:2004,y:1.97},{x:2005,y:1.95},{x:2006,y:1.96},{x:2007,y:1.92},
        {x:2008,y:1.98},{x:2009,y:2.01},{x:2010,y:2.00},{x:2011,y:1.98},{x:2012,y:2.01},{x:2013,y:1.98},
        {x:2014,y:2.09},{x:2015,y:2.10},{x:2016,y:2.15},{x:2017,y:2.14},{x:2018,y:2.22},{x:2019,y:2.26},
        {x:2020,y:2.46},{x:2021,y:2.52},{x:2022,y:2.57},{x:2023,y:2.60}
      ],
      source: { name: 'UNESCO UIS Stat, via World Bank / Our World in Data', url: 'https://ourworldindata.org/grapher/research-spending-gdp' }
    },
    {
      title: 'Share of new cars sold that are electric',
      type: 'line',
      unit: '%',
      seriesLabel: 'EV share of sales',
      trend: 'improving',
      takeaway: 'Electric vehicles went from essentially 0% of new car sales in 2010 to about 1 in 4 new cars sold worldwide in 2025 — though adoption is highly uneven across countries, and the climate benefit depends on how clean the local electricity grid is.',
      data: [
        {x:2010,y:0.012},{x:2011,y:0.072},{x:2012,y:0.17},{x:2013,y:0.29},{x:2014,y:0.44},{x:2015,y:0.68},
        {x:2016,y:0.95},{x:2017,y:1.4},{x:2018,y:2.4},{x:2019,y:2.7},{x:2020,y:4.4},{x:2021,y:9.3},
        {x:2022,y:15},{x:2023,y:18},{x:2024,y:21},{x:2025,y:25}
      ],
      source: { name: 'International Energy Agency, Global EV Outlook 2025, via Our World in Data', url: 'https://ourworldindata.org/grapher/electric-car-sales-share' }
    },
    {
      title: 'Cost of sequencing a human genome',
      type: 'line',
      unit: '$',
      seriesLabel: 'Cost per genome',
      trend: 'improving',
      takeaway: 'Sequencing a human genome cost about $95 million in 2001 and about $525 by 2022 — a decline far steeper than Moore’s Law for computer chips, though progress has plateaued somewhat since 2015 as short-read sequencing matured.',
      data: [
        {x:2001,y:95263070},{x:2002,y:61448420},{x:2003,y:40157556},{x:2004,y:18519312},{x:2005,y:13801124},
        {x:2006,y:10474556},{x:2007,y:7147571},{x:2008,y:342502},{x:2009,y:70333},{x:2010,y:29092},
        {x:2011,y:7743},{x:2012,y:5901},{x:2013,y:5096},{x:2014,y:4008},{x:2015,y:1245},
        {x:2016,y:1176},{x:2017,y:1015},{x:2018,y:1232},{x:2019,y:606},{x:2020,y:512},
        {x:2021,y:454},{x:2022,y:525}
      ],
      source: { name: 'National Human Genome Research Institute (NHGRI), DNA Sequencing Costs, via Our World in Data', url: 'https://ourworldindata.org/grapher/cost-of-sequencing-a-full-human-genome' }
    }
  ]
};
