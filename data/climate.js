window.SITE_DATA = window.SITE_DATA || {};
window.SITE_DATA.climate = {
  heroStats: [
    {
      label: 'Current atmospheric CO₂',
      value: '427.6 ppm',
      source: { name: 'NOAA Global Monitoring Laboratory', url: 'https://gml.noaa.gov/ccgg/trends/' }
    },
    {
      label: '2025 temperature anomaly',
      value: '+1.19°C',
      source: { name: 'NASA GISS (GISTEMP v4)', url: 'https://data.giss.nasa.gov/gistemp/' }
    },
    {
      label: '2024 global CO₂ emissions',
      value: '38.6 Gt',
      source: { name: 'Global Carbon Project, via Our World in Data', url: 'https://ourworldindata.org/grapher/annual-co2-emissions' }
    }
  ],
  datasets: [
    {
      title: 'Global mean temperature anomaly',
      type: 'line',
      unit: '°C',
      seriesLabel: 'Anomaly vs 1951–1980',
      takeaway: 'Global average temperature has risen from roughly flat in 1970 to about 1.2°C above the mid-20th-century average today; the ten warmest years on record have all occurred since 2015.',
      data: [
        {x:1970,y:0.03},{x:1971,y:-0.08},{x:1972,y:0.01},{x:1973,y:0.16},{x:1974,y:-0.07},{x:1975,y:-0.01},
        {x:1976,y:-0.10},{x:1977,y:0.18},{x:1978,y:0.07},{x:1979,y:0.16},{x:1980,y:0.26},{x:1981,y:0.32},
        {x:1982,y:0.14},{x:1983,y:0.31},{x:1984,y:0.16},{x:1985,y:0.12},{x:1986,y:0.18},{x:1987,y:0.32},
        {x:1988,y:0.39},{x:1989,y:0.27},{x:1990,y:0.45},{x:1991,y:0.41},{x:1992,y:0.22},{x:1993,y:0.23},
        {x:1994,y:0.32},{x:1995,y:0.45},{x:1996,y:0.33},{x:1997,y:0.47},{x:1998,y:0.61},{x:1999,y:0.38},
        {x:2000,y:0.39},{x:2001,y:0.53},{x:2002,y:0.63},{x:2003,y:0.62},{x:2004,y:0.53},{x:2005,y:0.68},
        {x:2006,y:0.64},{x:2007,y:0.66},{x:2008,y:0.54},{x:2009,y:0.66},{x:2010,y:0.72},{x:2011,y:0.61},
        {x:2012,y:0.65},{x:2013,y:0.68},{x:2014,y:0.75},{x:2015,y:0.90},{x:2016,y:1.01},{x:2017,y:0.92},
        {x:2018,y:0.85},{x:2019,y:0.98},{x:2020,y:1.01},{x:2021,y:0.85},{x:2022,y:0.89},{x:2023,y:1.17},
        {x:2024,y:1.29},{x:2025,y:1.19}
      ],
      source: { name: 'NASA Goddard Institute for Space Studies (GISTEMP v4)', url: 'https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv' }
    },
    {
      title: 'Atmospheric CO₂ concentration',
      type: 'line',
      unit: ' ppm',
      seriesLabel: 'CO₂ concentration',
      takeaway: 'CO₂ in the atmosphere has climbed every single year since continuous measurement began, from about 326 ppm in 1970 to over 427 ppm today — a level not seen in at least 800,000 years.',
      data: [
        {x:1970,y:325.68},{x:1971,y:326.32},{x:1972,y:327.46},{x:1973,y:329.68},{x:1974,y:330.19},{x:1975,y:331.13},
        {x:1976,y:332.03},{x:1977,y:333.84},{x:1978,y:335.41},{x:1979,y:336.84},{x:1980,y:338.76},{x:1981,y:340.12},
        {x:1982,y:341.48},{x:1983,y:343.15},{x:1984,y:344.87},{x:1985,y:346.35},{x:1986,y:347.61},{x:1987,y:349.31},
        {x:1988,y:351.69},{x:1989,y:353.20},{x:1990,y:354.45},{x:1991,y:355.70},{x:1992,y:356.54},{x:1993,y:357.21},
        {x:1994,y:358.96},{x:1995,y:360.97},{x:1996,y:362.74},{x:1997,y:363.88},{x:1998,y:366.84},{x:1999,y:368.54},
        {x:2000,y:369.71},{x:2001,y:371.32},{x:2002,y:373.45},{x:2003,y:375.98},{x:2004,y:377.70},{x:2005,y:379.98},
        {x:2006,y:382.09},{x:2007,y:384.02},{x:2008,y:385.83},{x:2009,y:387.64},{x:2010,y:390.10},{x:2011,y:391.85},
        {x:2012,y:394.06},{x:2013,y:396.74},{x:2014,y:398.81},{x:2015,y:401.01},{x:2016,y:404.41},{x:2017,y:406.76},
        {x:2018,y:408.72},{x:2019,y:411.65},{x:2020,y:414.21},{x:2021,y:416.41},{x:2022,y:418.53},{x:2023,y:421.08},
        {x:2024,y:424.61},{x:2025,y:427.35}
      ],
      source: { name: 'NOAA Global Monitoring Laboratory, Mauna Loa Observatory', url: 'https://gml.noaa.gov/ccgg/trends/' }
    },
    {
      title: 'Global CO₂ emissions',
      type: 'line',
      unit: ' Gt',
      seriesLabel: 'CO₂ emissions',
      takeaway: 'Humanity now emits roughly 2.6 times more CO₂ per year than in 1970, and annual emissions hit a fresh record high of about 38.6 billion tonnes in 2024.',
      data: [
        {x:1970,y:14.899},{x:1971,y:15.504},{x:1972,y:16.225},{x:1973,y:17.077},{x:1974,y:16.998},{x:1975,y:16.988},
        {x:1976,y:17.862},{x:1977,y:18.358},{x:1978,y:19.025},{x:1979,y:19.509},{x:1980,y:19.410},{x:1981,y:18.880},
        {x:1982,y:18.730},{x:1983,y:18.902},{x:1984,y:19.457},{x:1985,y:20.145},{x:1986,y:20.438},{x:1987,y:21.106},
        {x:1988,y:21.919},{x:1989,y:22.200},{x:1990,y:22.732},{x:1991,y:23.206},{x:1992,y:22.520},{x:1993,y:22.750},
        {x:1994,y:22.975},{x:1995,y:23.517},{x:1996,y:24.233},{x:1997,y:24.380},{x:1998,y:24.296},{x:1999,y:24.838},
        {x:2000,y:25.511},{x:2001,y:25.693},{x:2002,y:26.265},{x:2003,y:27.653},{x:2004,y:28.610},{x:2005,y:29.599},
        {x:2006,y:30.594},{x:2007,y:31.499},{x:2008,y:32.050},{x:2009,y:31.513},{x:2010,y:33.318},{x:2011,y:34.480},
        {x:2012,y:34.955},{x:2013,y:35.276},{x:2014,y:35.466},{x:2015,y:35.404},{x:2016,y:35.393},{x:2017,y:35.975},
        {x:2018,y:36.734},{x:2019,y:37.087},{x:2020,y:35.158},{x:2021,y:36.867},{x:2022,y:37.528},{x:2023,y:38.094},
        {x:2024,y:38.599}
      ],
      source: { name: 'Global Carbon Project, via Our World in Data', url: 'https://ourworldindata.org/grapher/annual-co2-emissions' }
    },
    {
      title: 'Renewable share of global electricity',
      type: 'line',
      unit: '%',
      seriesLabel: 'Renewables share',
      takeaway: 'After drifting near 18–19% for two decades, renewables’ share of global electricity has surged since 2010 to reach almost 34% in 2025, driven largely by cheap solar and wind.',
      data: [
        {x:1980,y:21.51},{x:1981,y:21.56},{x:1982,y:21.81},{x:1983,y:21.87},{x:1984,y:21.47},{x:1985,y:20.82},
        {x:1986,y:20.55},{x:1987,y:19.91},{x:1988,y:19.68},{x:1989,y:18.83},{x:1990,y:19.06},{x:1991,y:19.11},
        {x:1992,y:19.01},{x:1993,y:19.71},{x:1994,y:19.38},{x:1995,y:19.72},{x:1996,y:19.41},{x:1997,y:19.36},
        {x:1998,y:19.06},{x:1999,y:18.75},{x:2000,y:18.72},{x:2001,y:18.04},{x:2002,y:17.91},{x:2003,y:17.44},
        {x:2004,y:17.98},{x:2005,y:18.10},{x:2006,y:18.23},{x:2007,y:17.97},{x:2008,y:18.91},{x:2009,y:19.47},
        {x:2010,y:19.72},{x:2011,y:20.02},{x:2012,y:20.98},{x:2013,y:21.71},{x:2014,y:22.26},{x:2015,y:22.97},
        {x:2016,y:23.73},{x:2017,y:24.47},{x:2018,y:25.09},{x:2019,y:26.07},{x:2020,y:27.99},{x:2021,y:28.10},
        {x:2022,y:29.47},{x:2023,y:30.32},{x:2024,y:31.94},{x:2025,y:33.76}
      ],
      source: { name: 'Ember / Energy Institute Statistical Review of World Energy, via Our World in Data', url: 'https://ourworldindata.org/grapher/share-electricity-renewables' }
    },
    {
      title: 'Global sea level rise',
      type: 'line',
      unit: ' mm',
      seriesLabel: 'Sea level change',
      takeaway: 'Global sea level has risen roughly 10 cm since 1993, and the rate of rise has more than doubled over that period as ocean warming and ice melt both accelerate.',
      data: [
        {x:1993,y:-19.5},{x:1994,y:-14.8},{x:1995,y:-9.2},{x:1996,y:-5.8},{x:1997,y:-1.9},{x:1998,y:-2.7},
        {x:1999,y:-3.6},{x:2000,y:0.6},{x:2001,y:6.0},{x:2002,y:7.8},{x:2003,y:10.8},{x:2004,y:12.9},
        {x:2005,y:16.2},{x:2006,y:18.8},{x:2007,y:18.7},{x:2008,y:22.8},{x:2009,y:26.5},{x:2010,y:27.9},
        {x:2011,y:26.2},{x:2012,y:36.6},{x:2013,y:38.9},{x:2014,y:41.9},{x:2015,y:50.6},{x:2016,y:54.4},
        {x:2017,y:55.1},{x:2018,y:57.9},{x:2019,y:64.3},{x:2020,y:67.0},{x:2021,y:71.4},{x:2022,y:74.1},
        {x:2023,y:79.9},{x:2024,y:83.3}
      ],
      source: { name: 'NOAA Laboratory for Satellite Altimetry (annual means computed from published cycle-level data, 66°S–66°N)', url: 'https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/slr/slr_sla_gbl_free_all_66.csv' }
    },
    {
      title: 'Top CO₂-emitting countries (2024)',
      type: 'bar',
      unit: ' Mt',
      seriesLabel: 'CO₂ emissions',
      takeaway: 'Just two countries, China and the United States, together account for well over a third of all global CO₂ emissions.',
      data: [
        {category:'China',value:12289.0},
        {category:'United States',value:4904.1},
        {category:'India',value:3193.5},
        {category:'Russia',value:1780.5},
        {category:'Japan',value:961.9},
        {category:'Indonesia',value:812.2},
        {category:'Iran',value:792.6},
        {category:'Saudi Arabia',value:692.1},
        {category:'South Korea',value:583.7},
        {category:'Germany',value:572.3}
      ],
      source: { name: 'Global Carbon Project, via Our World in Data', url: 'https://ourworldindata.org/grapher/annual-co2-emissions-per-country' }
    }
  ]
};
