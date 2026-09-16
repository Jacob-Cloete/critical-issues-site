window.SITE_DATA = window.SITE_DATA || {};
window.SITE_DATA.health = {
  heroStats: [
    {
      label: 'Global life expectancy (1950 → 2023)',
      value: '46.4 → 73.2 yrs',
      source: { name: 'Our World in Data / UN World Population Prospects', url: 'https://ourworldindata.org/grapher/life-expectancy' }
    },
    {
      label: 'Children under 5 who died, 2024',
      value: '4.9 million',
      source: { name: 'UN Inter-agency Group for Child Mortality Estimation', url: 'https://www.unicef.org/press-releases/progress-reducing-child-deaths-slows-49-million-children-under-five-die-2024' }
    },
    {
      label: 'Deaths from cardiovascular disease, 2021',
      value: '19.2 million',
      source: { name: 'WHO Global Health Estimates 2021', url: 'https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/ghe-leading-causes-of-death' }
    }
  ],
  datasets: [
    {
      title: 'Global life expectancy at birth',
      type: 'line',
      unit: ' yrs',
      seriesLabel: 'Life expectancy',
      takeaway: 'Global life expectancy has grown by nearly 27 years since 1950 — but COVID-19 briefly reversed decades of progress, cutting almost two years off global life expectancy in 2021 alone before it rebounded.',
      data: [
        {x:1950,y:46.4},{x:1955,y:50.2},{x:1960,y:47.8},{x:1965,y:54.0},{x:1970,y:56.3},{x:1975,y:58.3},
        {x:1980,y:60.5},{x:1985,y:62.2},{x:1990,y:64.0},{x:1995,y:64.9},{x:2000,y:66.4},{x:2005,y:68.1},
        {x:2010,y:70.1},{x:2015,y:71.6},{x:2019,y:72.6},{x:2020,y:71.9},{x:2021,y:70.9},{x:2022,y:72.6},{x:2023,y:73.2}
      ],
      source: { name: 'UN World Population Prospects (2024), via Our World in Data', url: 'https://ourworldindata.org/grapher/life-expectancy' }
    },
    {
      title: 'Global under-5 child mortality rate',
      type: 'line',
      unit: '',
      seriesLabel: 'Deaths per 1,000 live births',
      takeaway: 'A child born in 1950 faced roughly a 1-in-4 chance of dying before age five; today that risk has fallen to about 1-in-26 — although progress has nearly stalled since 2019.',
      data: [
        {x:1950,y:247.0},{x:1955,y:223.0},{x:1960,y:202.0},{x:1965,y:151.0},{x:1970,y:142.0},{x:1975,y:131.0},
        {x:1980,y:119.0},{x:1985,y:106.3},{x:1990,y:93.5},{x:1995,y:87.5},{x:2000,y:76.7},{x:2005,y:62.3},
        {x:2010,y:50.6},{x:2015,y:42.9},{x:2019,y:39.6},{x:2020,y:39.2},{x:2021,y:39.6},{x:2022,y:40.0},{x:2023,y:38.3}
      ],
      source: { name: 'UN Inter-agency Group for Child Mortality Estimation, via Our World in Data', url: 'https://ourworldindata.org/grapher/child-mortality' }
    },
    {
      title: 'Global deaths by major cause, 2021',
      type: 'bar',
      unit: 'M',
      seriesLabel: 'Deaths',
      takeaway: 'Cardiovascular disease alone killed more people in 2021 (19.2 million) than cancer and COVID-19 combined — it remains, by far, the world’s biggest killer.',
      data: [
        {category:'Cardiovascular diseases', value:19.21},
        {category:'Cancers (all)', value:9.81},
        {category:'COVID-19', value:8.72},
        {category:'Injuries (all)', value:4.48},
        {category:'Chronic respiratory diseases', value:4.28},
        {category:'Digestive diseases', value:2.50},
        {category:'Neurological conditions', value:2.54},
        {category:'Lower respiratory infections', value:2.45},
        {category:'Neonatal conditions', value:1.93},
        {category:'Diabetes mellitus', value:1.62}
      ],
      source: { name: 'WHO Global Health Estimates 2021', url: 'https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/ghe-leading-causes-of-death' }
    },
    {
      title: 'Life expectancy by country income group, 2023',
      type: 'bar',
      unit: ' yrs',
      seriesLabel: 'Life expectancy',
      takeaway: 'A baby born in a high-income country in 2023 can expect to live 16.5 years longer than one born in a low-income country — a stark reminder that where you’re born still shapes how long you live.',
      data: [
        {category:'High-income', value:81.4},
        {category:'Upper-middle-income', value:75.9},
        {category:'Lower-middle-income', value:69.6},
        {category:'Low-income', value:64.9}
      ],
      source: { name: 'UN World Population Prospects (2024), via Our World in Data', url: 'https://ourworldindata.org/grapher/life-expectancy' }
    },
    {
      title: 'Global vaccination coverage (DTP3, 1-year-olds)',
      type: 'line',
      unit: '%',
      seriesLabel: 'DTP3 coverage',
      takeaway: 'Global coverage of the basic childhood DTP3 vaccine jumped from 20% to 86% between 1980 and 2019, then the pandemic knocked it backward — coverage still hasn’t fully recovered.',
      data: [
        {x:1980,y:20},{x:1985,y:48},{x:1990,y:76},{x:1995,y:72},{x:2000,y:72},{x:2005,y:77},
        {x:2010,y:83},{x:2015,y:85},{x:2019,y:86},{x:2020,y:83},{x:2021,y:82},{x:2022,y:85},{x:2023,y:84},{x:2024,y:85}
      ],
      source: { name: 'WHO & UNICEF Immunization Data (2025), via Our World in Data', url: 'https://ourworldindata.org/grapher/share-of-children-immunized-dtp3' }
    }
  ]
};
