window.SITE_DATA = window.SITE_DATA || {};
window.SITE_DATA.poverty = {
  datasets: [
    {
      title: 'Share of world population in extreme poverty',
      type: 'line',
      unit: '%',
      seriesLabel: 'Extreme poverty rate',
      trend: 'improving',
      takeaway: 'Global extreme poverty (at the $3/day, 2021-PPP line) has fallen from roughly 47% of the world’s population in 1981 to about 10% in 2024, though the decline stalled and briefly reversed around the COVID-19 pandemic.',
      data: [
        {x:1981,y:47.11},{x:1982,y:46.72},{x:1983,y:46.12},{x:1984,y:45.49},{x:1985,y:44.70},{x:1986,y:43.77},
        {x:1987,y:43.34},{x:1988,y:42.10},{x:1989,y:43.62},{x:1990,y:43.41},{x:1991,y:43.12},{x:1992,y:42.51},
        {x:1993,y:42.06},{x:1994,y:40.73},{x:1995,y:39.40},{x:1996,y:38.07},{x:1997,y:37.69},{x:1998,y:37.92},
        {x:1999,y:37.33},{x:2000,y:36.20},{x:2001,y:35.25},{x:2002,y:33.74},{x:2003,y:32.15},{x:2004,y:30.26},
        {x:2005,y:28.33},{x:2006,y:26.99},{x:2007,y:25.29},{x:2008,y:24.14},{x:2009,y:23.06},{x:2010,y:20.98},
        {x:2011,y:19.10},{x:2012,y:17.83},{x:2013,y:15.50},{x:2014,y:14.51},{x:2015,y:13.42},{x:2016,y:12.57},
        {x:2017,y:11.79},{x:2018,y:11.12},{x:2019,y:10.76},{x:2020,y:11.41},{x:2021,y:11.33},{x:2022,y:10.89},
        {x:2023,y:10.62},{x:2024,y:10.40}
      ],
      source: { name: 'World Bank Poverty and Inequality Platform, via Our World in Data / direct PIP API ($3.00/day, 2021 PPP)', url: 'https://ourworldindata.org/grapher/share-of-population-in-extreme-poverty' }
    },
    {
      title: 'Extreme poverty rate by world region, 2024',
      type: 'bar',
      unit: '%',
      seriesLabel: 'Poverty rate',
      takeaway: 'Sub-Saharan Africa’s extreme-poverty rate of 45% is nearly 80 times higher than East Asia & Pacific’s, and remains the only region where poverty reduction has stalled.',
      data: [
        {category:'Sub-Saharan Africa', value:45.09},
        {category:'MENA, Afghanistan & Pakistan', value:14.37},
        {category:'Latin America & Caribbean', value:4.28},
        {category:'South Asia', value:3.78},
        {category:'East Asia & Pacific', value:1.97},
        {category:'North America', value:0.94},
        {category:'Europe & Central Asia', value:0.57}
      ],
      source: { name: 'World Bank Poverty and Inequality Platform, via Our World in Data', url: 'https://ourworldindata.org/grapher/share-of-population-in-extreme-poverty' }
    },
    {
      title: 'Global income share captured by the richest 10%',
      type: 'line',
      unit: '%',
      seriesLabel: 'Top 10% income share',
      trend: 'mixed',
      takeaway: 'The richest 10% of the world have captured roughly half of all global income for two centuries — the share dipped in the mid-20th century but has crept back up since 1980.',
      data: [
        {x:1820,y:50.43},{x:1850,y:53.92},{x:1880,y:57.10},{x:1900,y:58.86},{x:1910,y:58.90},{x:1920,y:56.75},
        {x:1930,y:52.59},{x:1940,y:52.67},{x:1950,y:51.71},{x:1960,y:50.22},{x:1970,y:49.26},{x:1980,y:51.47},
        {x:1990,y:53.62},{x:2000,y:58.05},{x:2005,y:57.48},{x:2010,y:55.23},{x:2015,y:53.96},{x:2019,y:53.33},
        {x:2020,y:53.49},{x:2021,y:53.88},{x:2022,y:53.84},{x:2023,y:53.70},{x:2024,y:53.59}
      ],
      source: { name: 'World Inequality Database, via Our World in Data', url: 'https://ourworldindata.org/grapher/income-share-top-10-before-tax-wid' }
    },
    {
      title: 'Global income share: top 1% vs. bottom 50%',
      type: 'bar',
      unit: '%',
      seriesLabel: 'Income share (2021)',
      takeaway: 'The richest 1% of people on Earth earn more than twice as much of the world’s income as the poorest half of humanity combined.',
      data: [
        {category:'Top 1%', value:20.68},
        {category:'Bottom 50%', value:8.5}
      ],
      source: { name: 'World Inequality Database / World Inequality Report 2022', url: 'https://wir2022.wid.world/executive-summary/' }
    },
    {
      title: 'Global undernourishment rate',
      type: 'line',
      unit: '%',
      seriesLabel: 'Undernourished',
      trend: 'mixed',
      takeaway: 'Global hunger hit a record low of 7.1% in 2017, then the pandemic, conflict and food-price shocks pushed it back up — it is only now easing again, still above pre-pandemic levels.',
      data: [
        {x:2000,y:12.7},{x:2001,y:12.8},{x:2002,y:13.0},{x:2003,y:12.7},{x:2004,y:12.6},{x:2005,y:12.0},
        {x:2006,y:11.0},{x:2007,y:10.0},{x:2008,y:9.3},{x:2009,y:9.1},{x:2010,y:8.7},{x:2011,y:8.2},
        {x:2012,y:8.1},{x:2013,y:7.9},{x:2014,y:7.5},{x:2015,y:7.7},{x:2016,y:7.6},{x:2017,y:7.1},
        {x:2018,y:7.3},{x:2019,y:7.5},{x:2020,y:8.5},{x:2021,y:8.8},{x:2022,y:8.7},{x:2023,y:8.5},{x:2024,y:8.2}
      ],
      source: { name: 'Food and Agriculture Organization (FAO), via Our World in Data', url: 'https://ourworldindata.org/grapher/prevalence-of-undernourishment' }
    },
    {
      title: 'Global average GDP per capita, long run',
      type: 'line',
      unit: '$',
      seriesLabel: 'GDP per capita (PPP)',
      trend: 'improving',
      takeaway: 'World average income per person was roughly flat for most of human history until around 1800, then rose about 15-fold over the last two centuries, with growth accelerating sharply after 1950.',
      data: [
        {x:1,y:1100},{x:1000,y:1100},{x:1500,y:1300},{x:1600,y:1400},{x:1700,y:1400},{x:1820,y:1500},
        {x:1850,y:1800},{x:1870,y:2100},{x:1900,y:3100},{x:1920,y:3400},{x:1940,y:4700},{x:1950,y:4600},
        {x:1960,y:6000},{x:1970,y:8200},{x:1980,y:9900},{x:1990,y:11275.13},{x:1991,y:11183.41},{x:1992,y:11147.56},
        {x:1993,y:11138.33},{x:1994,y:11264.78},{x:1995,y:11442.80},{x:1996,y:11691.71},{x:1997,y:11979.72},{x:1998,y:12098.40},
        {x:1999,y:12360.74},{x:2000,y:12780.64},{x:2001,y:12915.06},{x:2002,y:13104.35},{x:2003,y:13410.60},{x:2004,y:13921.34},
        {x:2005,y:14377.21},{x:2006,y:14934.69},{x:2007,y:15519.54},{x:2008,y:15756.20},{x:2009,y:15456.59},{x:2010,y:16050.85},
        {x:2011,y:16478.65},{x:2012,y:16785.06},{x:2013,y:17121.72},{x:2014,y:17502.78},{x:2015,y:17870.98},{x:2016,y:18234.02},
        {x:2017,y:18714.57},{x:2018,y:19189.49},{x:2019,y:19551.09},{x:2020,y:18812.49},{x:2021,y:19875.57},{x:2022,y:20421.73},
        {x:2023,y:20894.87},{x:2024,y:21393.18},{x:2025,y:21913.51}
      ],
      source: { name: 'Maddison Project Database (2023) and World Bank, via Our World in Data (2021 int’l-$, PPP)', url: 'https://ourworldindata.org/grapher/global-average-gdp-per-capita-over-the-long-run' }
    },
    {
      title: 'Share of world population without electricity access',
      type: 'line',
      unit: '%',
      seriesLabel: 'Without electricity',
      trend: 'improving',
      takeaway: 'The share of the world’s population lacking electricity access has fallen from about 27% in 1998 to roughly 8% in 2024, though progress has slowed as remaining gaps concentrate in harder-to-reach areas, mostly Sub-Saharan Africa.',
      data: [
        {x:1998,y:26.80},{x:1999,y:25.49},{x:2000,y:21.78},{x:2001,y:21.28},{x:2002,y:20.90},{x:2003,y:20.03},
        {x:2004,y:20.04},{x:2005,y:19.30},{x:2006,y:18.64},{x:2007,y:18.03},{x:2008,y:17.33},{x:2009,y:17.13},
        {x:2010,y:16.55},{x:2011,y:15.49},{x:2012,y:15.06},{x:2013,y:14.29},{x:2014,y:13.80},{x:2015,y:13.07},
        {x:2016,y:11.89},{x:2017,y:11.06},{x:2018,y:10.20},{x:2019,y:9.89},{x:2020,y:9.60},{x:2021,y:8.66},
        {x:2022,y:8.72},{x:2023,y:8.40},{x:2024,y:8.07}
      ],
      source: { name: 'World Bank World Development Indicators, via Our World in Data', url: 'https://ourworldindata.org/grapher/share-of-the-population-with-access-to-electricity' }
    },
    {
      title: 'Global wealth share held by the richest 1%',
      type: 'line',
      unit: '%',
      seriesLabel: 'Top 1% wealth share',
      trend: 'worsening',
      takeaway: 'After declining for most of the 20th century — from over 50% around 1900 to a low of about 33% in 1984 — the share of global household wealth held by the richest 1% has been rising again since the mid-1980s and has stayed around 35–37% for two decades.',
      data: [
        {x:1820,y:45.97},{x:1850,y:51.58},{x:1880,y:54.66},{x:1900,y:55.53},{x:1910,y:54.28},{x:1920,y:46.98},
        {x:1930,y:49.57},{x:1940,y:46.14},{x:1950,y:43.99},{x:1960,y:41.14},{x:1970,y:37.69},{x:1980,y:34.41},
        {x:1981,y:33.96},{x:1982,y:33.38},{x:1983,y:33.28},{x:1984,y:33.15},{x:1985,y:33.40},{x:1986,y:33.76},
        {x:1987,y:34.40},{x:1988,y:35.06},{x:1989,y:35.16},{x:1990,y:35.03},{x:1991,y:35.24},{x:1992,y:35.56},
        {x:1993,y:35.34},{x:1994,y:35.50},{x:1995,y:35.59},{x:1996,y:35.87},{x:1997,y:36.41},{x:1998,y:37.22},
        {x:1999,y:37.45},{x:2000,y:37.34},{x:2001,y:37.40},{x:2002,y:36.90},{x:2003,y:36.68},{x:2004,y:37.31},
        {x:2005,y:37.16},{x:2006,y:37.02},{x:2007,y:37.45},{x:2008,y:36.50},{x:2009,y:35.50},{x:2010,y:36.11},
        {x:2011,y:35.79},{x:2012,y:35.62},{x:2013,y:35.59},{x:2014,y:36.00},{x:2015,y:36.20},{x:2016,y:35.54},
        {x:2017,y:35.88},{x:2018,y:36.23},{x:2019,y:35.99},{x:2020,y:36.18},{x:2021,y:37.17},{x:2022,y:36.64},
        {x:2023,y:36.39},{x:2024,y:36.44}
      ],
      source: { name: 'World Inequality Database (WID.world), via Our World in Data', url: 'https://ourworldindata.org/grapher/wealth-share-richest-1-percent' }
    }
  ]
};
