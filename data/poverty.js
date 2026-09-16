window.SITE_DATA = window.SITE_DATA || {};
window.SITE_DATA.poverty = {
  heroStats: [
    {
      label: 'People still in extreme poverty (2024)',
      value: '847 million',
      source: { name: 'World Bank, March 2026 Global Poverty Update', url: 'https://blogs.worldbank.org/en/opendata/march-2026-global-poverty-update-from-the-world-bank--new-data-a' }
    },
    {
      label: 'People undernourished worldwide (2024)',
      value: '673 million',
      source: { name: 'FAO, via Our World in Data', url: 'https://ourworldindata.org/grapher/global-population-defined-as-undernourished' }
    },
    {
      label: 'Income share: top 1% vs. bottom 50%',
      value: '20.7% vs 8.5%',
      source: { name: 'World Inequality Report 2022', url: 'https://wir2022.wid.world/executive-summary/' }
    }
  ],
  datasets: [
    {
      title: 'Share of world population in extreme poverty',
      type: 'line',
      unit: '%',
      seriesLabel: 'Extreme poverty rate',
      takeaway: 'The share of humanity living in extreme poverty has fallen by more than three-quarters since 1990 — from over 43% to about 10% — though COVID-19 triggered the first sustained increase in a generation.',
      data: [
        {x:1990,y:43.41},{x:1991,y:43.12},{x:1992,y:42.51},{x:1993,y:42.06},{x:1994,y:40.73},{x:1995,y:39.40},
        {x:1996,y:38.07},{x:1997,y:37.69},{x:1998,y:37.92},{x:1999,y:37.33},{x:2000,y:36.20},{x:2001,y:35.25},
        {x:2002,y:33.74},{x:2003,y:32.15},{x:2004,y:30.26},{x:2005,y:28.33},{x:2006,y:26.99},{x:2007,y:25.29},
        {x:2008,y:24.14},{x:2009,y:23.06},{x:2010,y:20.98},{x:2011,y:19.10},{x:2012,y:17.83},{x:2013,y:15.50},
        {x:2014,y:14.51},{x:2015,y:13.42},{x:2016,y:12.57},{x:2017,y:11.79},{x:2018,y:11.12},{x:2019,y:10.76},
        {x:2020,y:11.41},{x:2021,y:11.33},{x:2022,y:10.89},{x:2023,y:10.62},{x:2024,y:10.40}
      ],
      source: { name: 'World Bank Poverty and Inequality Platform, via Our World in Data ($3.00/day, 2021 PPP)', url: 'https://ourworldindata.org/grapher/share-of-population-in-extreme-poverty' }
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
      takeaway: 'Global hunger hit a record low of 7.1% in 2017, then the pandemic, conflict and food-price shocks pushed it back up — it is only now easing again, still above pre-pandemic levels.',
      data: [
        {x:2000,y:12.7},{x:2001,y:12.8},{x:2002,y:13.0},{x:2003,y:12.7},{x:2004,y:12.6},{x:2005,y:12.0},
        {x:2006,y:11.0},{x:2007,y:10.0},{x:2008,y:9.3},{x:2009,y:9.1},{x:2010,y:8.7},{x:2011,y:8.2},
        {x:2012,y:8.1},{x:2013,y:7.9},{x:2014,y:7.5},{x:2015,y:7.7},{x:2016,y:7.6},{x:2017,y:7.1},
        {x:2018,y:7.3},{x:2019,y:7.5},{x:2020,y:8.5},{x:2021,y:8.8},{x:2022,y:8.7},{x:2023,y:8.5},{x:2024,y:8.2}
      ],
      source: { name: 'Food and Agriculture Organization (FAO), via Our World in Data', url: 'https://ourworldindata.org/grapher/prevalence-of-undernourishment' }
    }
  ]
};
