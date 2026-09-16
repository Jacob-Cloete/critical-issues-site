window.SITE_DATA = window.SITE_DATA || {};
window.SITE_DATA.biodiversity = {
  heroStats: [
    {
      label: 'Wildlife population decline since 1970',
      value: '73%',
      source: { name: 'WWF Living Planet Report 2024', url: 'https://www.worldwildlife.org/press-releases/catastrophic-73-decline-in-the-average-size-of-global-wildlife-populations-in-just-50-years-reveals-a-system-in-peril' }
    },
    {
      label: 'Species threatened with extinction',
      value: '47,187 of 169,420 assessed',
      source: { name: 'IUCN Red List Update, April 2025', url: 'https://iucn.org/news/202504/iucn-red-list-update-global-impacts-regional-statuses-and-way-forward' }
    },
    {
      label: '2024 tree cover loss',
      value: '~30M hectares',
      source: { name: 'World Resources Institute / Global Forest Watch', url: 'https://www.wri.org/news/release-global-forest-loss-shatters-records-2024-fueled-massive-fires' }
    }
  ],
  datasets: [
    {
      title: 'Global wildlife population decline (Living Planet Index)',
      type: 'line',
      unit: '',
      seriesLabel: 'Index (1970 = 100)',
      takeaway: 'The average size of monitored wildlife populations has fallen by 73% since 1970 — the typical tracked population today is barely more than a quarter of what it was two generations ago.',
      data: [
        {x:1970,y:100},{x:1971,y:99.41},{x:1972,y:98.14},{x:1973,y:96.62},{x:1974,y:94.81},{x:1975,y:92.66},
        {x:1976,y:89.99},{x:1977,y:86.37},{x:1978,y:82.87},{x:1979,y:80.26},{x:1980,y:78.43},{x:1981,y:77.01},
        {x:1982,y:74.73},{x:1983,y:72.18},{x:1984,y:69.71},{x:1985,y:67.67},{x:1986,y:66.17},{x:1987,y:64.42},
        {x:1988,y:62.68},{x:1989,y:61.36},{x:1990,y:60.09},{x:1991,y:58.82},{x:1992,y:57.28},{x:1993,y:55.24},
        {x:1994,y:53.25},{x:1995,y:51.15},{x:1996,y:50.25},{x:1997,y:48.92},{x:1998,y:47.50},{x:1999,y:45.68},
        {x:2000,y:44.37},{x:2001,y:43.13},{x:2002,y:42.01},{x:2003,y:40.93},{x:2004,y:39.98},{x:2005,y:38.87},
        {x:2006,y:37.45},{x:2007,y:35.95},{x:2008,y:34.36},{x:2009,y:32.71},{x:2010,y:31.10},{x:2011,y:29.60},
        {x:2012,y:28.67},{x:2013,y:28.41},{x:2014,y:28.50},{x:2015,y:28.57},{x:2016,y:27.79},{x:2017,y:27.37},
        {x:2018,y:27.10},{x:2019,y:27.33},{x:2020,y:27.13}
      ],
      source: { name: 'WWF & Zoological Society of London, Living Planet Index (2024), via Our World in Data', url: 'https://ourworldindata.org/grapher/global-living-planet-index' }
    },
    {
      title: 'Global tree cover loss',
      type: 'line',
      unit: 'ha',
      seriesLabel: 'Tree cover lost',
      takeaway: '2024 was the worst year on record for tree cover loss (~29.6 million hectares, roughly the size of Ecuador), driven largely by an unprecedented surge in forest fires.',
      data: [
        {x:2001,y:13227583},{x:2002,y:16346752},{x:2003,y:14404470},{x:2004,y:19794442},{x:2005,y:17999578},
        {x:2006,y:17552784},{x:2007,y:18287306},{x:2008,y:18508078},{x:2009,y:16885732},{x:2010,y:18435864},
        {x:2011,y:17471200},{x:2012,y:23327932},{x:2013,y:20515552},{x:2014,y:23616708},{x:2015,y:19571718},
        {x:2016,y:29610414},{x:2017,y:29308080},{x:2018,y:24710662},{x:2019,y:24135086},{x:2020,y:25756608},
        {x:2021,y:25229724},{x:2022,y:22774828},{x:2023,y:28231408},{x:2024,y:29559676}
      ],
      source: { name: 'Global Forest Watch / University of Maryland GLAD Lab, via Our World in Data', url: 'https://ourworldindata.org/grapher/tree-cover-loss' }
    },
    {
      title: 'Share of Earth’s land and ocean under legal protection',
      type: 'line',
      unit: '%',
      takeaway: 'Protected land and ocean area has grown steadily but both remain far short of the “30x30” global target of protecting 30% of land and sea by 2030.',
      series: [
        {
          label: 'Land protected',
          color: 'var(--series-1)',
          data: [
            {x:2013,y:14.95},{x:2014,y:15.21},{x:2015,y:15.00},{x:2016,y:14.90},{x:2017,y:15.13},{x:2018,y:14.97},
            {x:2019,y:15.11},{x:2020,y:15.38},{x:2021,y:15.79},{x:2022,y:15.87},{x:2023,y:16.08},{x:2024,y:16.44},{x:2025,y:16.51}
          ]
        },
        {
          label: 'Ocean protected',
          color: 'var(--series-3)',
          data: [
            {x:2013,y:6.83},{x:2014,y:8.30},{x:2015,y:9.01},{x:2016,y:11.41},{x:2017,y:11.72},{x:2018,y:13.20},
            {x:2019,y:13.88},{x:2020,y:14.21},{x:2021,y:13.47},{x:2022,y:13.70},{x:2023,y:13.68},{x:2024,y:14.01},{x:2025,y:17.46}
          ]
        }
      ],
      source: { name: 'Protected Planet (WDPA & WD-OECM), UNEP-WCMC and IUCN, via World Bank / Our World in Data', url: 'https://ourworldindata.org/grapher/terrestrial-protected-areas' }
    },
    {
      title: 'Species threatened with extinction, by group',
      type: 'bar',
      unit: '%',
      seriesLabel: 'Share threatened',
      takeaway: 'More than 2 in 5 amphibian species are now threatened with extinction — the highest rate of any well-assessed animal group, driven by habitat loss and a lethal fungal disease.',
      data: [
        {category:'Gymnosperms (conifers & cycads)', value:43},
        {category:'Amphibians', value:41},
        {category:'Mammals', value:26},
        {category:'Reptiles', value:21},
        {category:'All vertebrates (avg.)', value:21},
        {category:'Birds', value:11}
      ],
      source: { name: 'IUCN Red List of Threatened Species (2025), via Our World in Data', url: 'https://ourworldindata.org/grapher/share-threatened-species' }
    },
    {
      title: 'Wildlife population decline by region, 1970–2020',
      type: 'bar',
      unit: '%',
      seriesLabel: 'Average decline',
      takeaway: 'Latin America and the Caribbean has lost a staggering 95% of its monitored wildlife populations since 1970 — by far the steepest regional collapse on record.',
      data: [
        {category:'Latin America & Caribbean', value:94.6},
        {category:'Africa', value:76.0},
        {category:'Asia & Pacific', value:60.4},
        {category:'North America', value:39.0},
        {category:'Europe & Central Asia', value:35.3}
      ],
      source: { name: 'WWF & Zoological Society of London, Living Planet Index by region (2024), via Our World in Data', url: 'https://ourworldindata.org/grapher/living-planet-index-by-region' }
    }
  ]
};
