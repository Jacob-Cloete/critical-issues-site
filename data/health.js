window.SITE_DATA = window.SITE_DATA || {};
window.SITE_DATA.health = {
  datasets: [
    {
      title: 'Global life expectancy at birth',
      type: 'line',
      unit: ' yrs',
      seriesLabel: 'Life expectancy',
      trend: 'improving',
      takeaway: 'Global life expectancy at birth has more than doubled, from roughly 29 years around 1800–1820 to about 73 years in 2023, with almost all of the gain occurring after 1950 — though COVID-19 briefly reversed decades of progress in 2021.',
      data: [
        {x:1770,y:28.5},{x:1800,y:28.5},{x:1820,y:29.0},{x:1850,y:29.3},{x:1870,y:29.7},{x:1900,y:32.0},{x:1913,y:34.1},
        {x:1950,y:46.39},{x:1951,y:47.13},{x:1952,y:48.22},{x:1953,y:48.81},{x:1954,y:49.65},{x:1955,y:50.21},
        {x:1956,y:50.74},{x:1957,y:51.06},{x:1958,y:51.62},{x:1959,y:49.58},{x:1960,y:47.82},{x:1961,y:50.35},
        {x:1962,y:53.24},{x:1963,y:53.72},{x:1964,y:54.26},{x:1965,y:54.0},{x:1966,y:54.56},{x:1967,y:55.07},
        {x:1968,y:55.62},{x:1969,y:56.0},{x:1970,y:56.27},{x:1971,y:56.02},{x:1972,y:57.22},{x:1973,y:57.69},
        {x:1974,y:58.06},{x:1975,y:58.27},{x:1976,y:58.58},{x:1977,y:59.15},{x:1978,y:59.51},{x:1979,y:60.16},
        {x:1980,y:60.5},{x:1981,y:60.92},{x:1982,y:61.34},{x:1983,y:61.52},{x:1984,y:61.87},{x:1985,y:62.21},
        {x:1986,y:62.73},{x:1987,y:63.18},{x:1988,y:63.37},{x:1989,y:63.78},{x:1990,y:63.95},{x:1991,y:64.06},
        {x:1992,y:64.29},{x:1993,y:64.43},{x:1994,y:64.3},{x:1995,y:64.88},{x:1996,y:65.2},{x:1997,y:65.54},
        {x:1998,y:65.74},{x:1999,y:66.04},{x:2000,y:66.43},{x:2001,y:66.75},{x:2002,y:67.07},{x:2003,y:67.4},
        {x:2004,y:67.74},{x:2005,y:68.14},{x:2006,y:68.61},{x:2007,y:69.03},{x:2008,y:69.3},{x:2009,y:69.68},
        {x:2010,y:70.09},{x:2011,y:70.4},{x:2012,y:70.82},{x:2013,y:71.14},{x:2014,y:71.4},{x:2015,y:71.61},
        {x:2016,y:71.88},{x:2017,y:72.07},{x:2018,y:72.39},{x:2019,y:72.61},{x:2020,y:71.92},{x:2021,y:70.86},
        {x:2022,y:72.64},{x:2023,y:73.17}
      ],
      source: { name: 'UN World Population Prospects (2024), 1950–2023; Riley (2005) long-run reconstruction, pre-1950; via Our World in Data', url: 'https://ourworldindata.org/grapher/life-expectancy' }
    },
    {
      title: 'Global under-5 child mortality rate',
      type: 'line',
      unit: '',
      seriesLabel: 'Deaths per 1,000 live births',
      trend: 'improving',
      takeaway: 'Global under-5 mortality has fallen from an estimated 428 deaths per 1,000 live births in 1800 to about 37 per 1,000 in 2024, with the steepest declines since 1950.',
      data: [
        {x:1800,y:428.0},{x:1801,y:427.0},{x:1802,y:427.0},{x:1803,y:426.0},{x:1804,y:426.0},{x:1805,y:426.0},{x:1806,y:426.0},{x:1807,y:425.0},{x:1808,y:425.0},{x:1809,y:425.0},{x:1810,y:425.0},{x:1811,y:424.0},{x:1812,y:424.0},{x:1813,y:423.0},{x:1814,y:423.0},{x:1815,y:422.0},{x:1816,y:422.0},{x:1817,y:422.0},{x:1818,y:422.0},{x:1819,y:422.0},{x:1820,y:421.0},{x:1821,y:421.0},{x:1822,y:421.0},{x:1823,y:421.0},{x:1824,y:421.0},{x:1825,y:421.0},{x:1826,y:421.0},{x:1827,y:421.0},{x:1828,y:421.0},{x:1829,y:421.0},{x:1830,y:422.0},{x:1831,y:422.0},{x:1832,y:422.0},{x:1833,y:422.0},{x:1834,y:423.0},{x:1835,y:422.0},{x:1836,y:422.0},{x:1837,y:422.0},{x:1838,y:422.0},{x:1839,y:421.0},{x:1840,y:421.0},{x:1841,y:421.0},{x:1842,y:422.0},{x:1843,y:421.0},{x:1844,y:421.0},{x:1845,y:420.0},{x:1846,y:424.0},{x:1847,y:422.0},{x:1848,y:423.0},{x:1849,y:423.0},{x:1850,y:420.0},{x:1851,y:424.0},{x:1852,y:429.0},{x:1853,y:432.0},{x:1854,y:437.0},{x:1855,y:440.0},{x:1856,y:442.0},{x:1857,y:442.0},{x:1858,y:438.0},{x:1859,y:437.0},{x:1860,y:429.0},{x:1861,y:429.0},{x:1862,y:426.0},{x:1863,y:425.0},{x:1864,y:422.0},{x:1865,y:423.0},{x:1866,y:421.0},{x:1867,y:420.0},{x:1868,y:424.0},{x:1869,y:421.0},{x:1870,y:419.0},{x:1871,y:422.0},{x:1872,y:421.0},{x:1873,y:418.0},{x:1874,y:417.0},{x:1875,y:415.0},{x:1876,y:414.0},{x:1877,y:412.0},{x:1878,y:416.0},{x:1879,y:411.0},{x:1880,y:416.0},{x:1881,y:411.0},{x:1882,y:415.0},{x:1883,y:414.0},{x:1884,y:411.0},{x:1885,y:412.0},{x:1886,y:411.0},{x:1887,y:411.0},{x:1888,y:410.0},{x:1889,y:412.0},{x:1890,y:415.0},{x:1891,y:413.0},{x:1892,y:417.0},{x:1893,y:412.0},{x:1894,y:412.0},{x:1895,y:413.0},{x:1896,y:411.0},{x:1897,y:410.0},{x:1898,y:412.0},{x:1899,y:408.0},{x:1900,y:409.0},{x:1901,y:408.0},{x:1902,y:401.0},{x:1903,y:395.0},{x:1904,y:389.0},{x:1905,y:388.0},{x:1906,y:381.0},{x:1907,y:374.0},{x:1908,y:372.0},{x:1909,y:366.0},{x:1910,y:364.0},{x:1911,y:360.0},{x:1912,y:355.0},{x:1913,y:351.0},{x:1914,y:354.0},{x:1915,y:353.0},{x:1916,y:351.0},{x:1917,y:353.0},{x:1918,y:376.0},{x:1919,y:357.0},{x:1920,y:344.0},{x:1921,y:342.0},{x:1922,y:332.0},{x:1923,y:331.0},{x:1924,y:331.0},{x:1925,y:324.0},{x:1926,y:327.0},{x:1927,y:319.0},{x:1928,y:319.0},{x:1929,y:320.0},{x:1930,y:316.0},{x:1931,y:314.0},{x:1932,y:307.0},{x:1933,y:305.0},{x:1934,y:307.0},{x:1935,y:295.0},{x:1936,y:291.0},{x:1937,y:288.0},{x:1938,y:287.0},{x:1939,y:280.0},{x:1940,y:279.0},{x:1941,y:278.0},{x:1942,y:279.0},{x:1943,y:277.0},{x:1944,y:274.0},{x:1945,y:267.0},{x:1946,y:258.0},{x:1947,y:255.0},{x:1948,y:249.0},{x:1949,y:249.0},{x:1950,y:247.0},{x:1951,y:243.0},{x:1952,y:239.0},{x:1953,y:233.0},{x:1954,y:228.0},{x:1955,y:223.0},{x:1956,y:213.0},{x:1957,y:205.0},{x:1958,y:197.0},{x:1959,y:199.0},{x:1960,y:202.0},{x:1961,y:188.0},{x:1962,y:170.0},{x:1963,y:162.0},{x:1964,y:157.0},{x:1965,y:151.0},{x:1966,y:151.0},{x:1967,y:153.0},{x:1968,y:150.0},{x:1969,y:146.0},{x:1970,y:142.0},{x:1971,y:139.0},{x:1972,y:137.0},{x:1973,y:135.0},{x:1974,y:133.0},{x:1975,y:131.0},{x:1976,y:128.0},{x:1977,y:126.0},{x:1978,y:123.0},{x:1979,y:119.0},{x:1980,y:119.0},{x:1981,y:115.8},{x:1982,y:112.4},{x:1983,y:111.3},{x:1984,y:109.0},{x:1985,y:106.3},{x:1986,y:103.1},{x:1987,y:99.4},{x:1988,y:99.8},{x:1989,y:95.4},{x:1990,y:93.5},{x:1991,y:92.9},{x:1992,y:92.3},{x:1993,y:91.1},{x:1994,y:89.4},{x:1995,y:87.5},{x:1996,y:86.4},{x:1997,y:84.3},{x:1998,y:82.8},{x:1999,y:79.4},{x:2000,y:76.7},{x:2001,y:74.3},{x:2002,y:71.3},{x:2003,y:68.3},{x:2004,y:65.8},{x:2005,y:62.3},{x:2006,y:59.6},{x:2007,y:57.0},{x:2008,y:54.7},{x:2009,y:52.9},{x:2010,y:50.6},{x:2011,y:49.5},{x:2012,y:46.7},{x:2013,y:45.1},{x:2014,y:43.9},{x:2015,y:42.9},{x:2016,y:41.7},{x:2017,y:40.9},{x:2018,y:40.0},{x:2019,y:39.6},{x:2020,y:39.2},{x:2021,y:39.6},{x:2022,y:40.0},{x:2023,y:38.3},{x:2024,y:37.4}
      ],
      source: { name: 'UN Inter-agency Group for Child Mortality Estimation (2025), 1950 onward; Gapminder (2015), pre-1950; via Our World in Data', url: 'https://ourworldindata.org/grapher/child-mortality' }
    },
    {
      title: 'Global deaths by leading cause, 2023',
      type: 'bar',
      unit: 'M',
      seriesLabel: 'Deaths',
      takeaway: '2023 is the most recent year with real published data and, unlike 2021, isn’t distorted by a COVID-19 peak (COVID fell to about 0.8M deaths that year, down from 8.7M in 2021). Bars are colored by how avoidable each cause is, using the OECD/Eurostat “avoidable mortality” classification — many of the biggest killers are at least partly preventable.',
      data: [
        {category:'Ischaemic heart disease', value:8.91, color:'var(--series-4)', legendLabel:'Mixed'},
        {category:'Stroke', value:6.79, color:'var(--series-4)', legendLabel:'Mixed'},
        {category:'COPD', value:3.43, color:'var(--series-1)', legendLabel:'Preventable'},
        {category:'Lower respiratory infections', value:2.50, color:'var(--series-4)', legendLabel:'Mixed'},
        {category:'Alzheimer’s & other dementias', value:2.21, color:'var(--text-muted)', legendLabel:'Not classified (age-related)'},
        {category:'Tracheal, bronchus & lung cancer', value:2.04, color:'var(--series-1)', legendLabel:'Preventable'},
        {category:'Diabetes mellitus', value:2.00, color:'var(--series-4)', legendLabel:'Mixed'},
        {category:'Neonatal disorders', value:1.63, color:'var(--series-3)', legendLabel:'Treatable'},
        {category:'Chronic kidney disease', value:1.52, color:'var(--series-3)', legendLabel:'Treatable'},
        {category:'Hypertensive heart disease', value:1.49, color:'var(--series-4)', legendLabel:'Mixed'}
      ],
      legend: [
        { label: 'Preventable (primary prevention)', color: 'var(--series-1)' },
        { label: 'Treatable (with timely healthcare)', color: 'var(--series-3)' },
        { label: 'Mixed (both, per OECD/Eurostat)', color: 'var(--series-4)' },
        { label: 'Not classified (age-related)', color: 'var(--text-muted)' }
      ],
      source: { name: 'GBD 2023 Causes of Death Collaborators, The Lancet (2025); classification: OECD/Eurostat avoidable mortality list (2022)', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)01917-8/fulltext' }
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
      trend: 'mixed',
      takeaway: 'Global coverage of the basic childhood DTP3 vaccine jumped from 20% to 86% between 1980 and 2019, then the pandemic knocked it backward — coverage still hasn’t fully recovered.',
      data: [
        {x:1980,y:20},{x:1985,y:48},{x:1990,y:76},{x:1995,y:72},{x:2000,y:72},{x:2005,y:77},
        {x:2010,y:83},{x:2015,y:85},{x:2019,y:86},{x:2020,y:83},{x:2021,y:82},{x:2022,y:85},{x:2023,y:84},{x:2024,y:85}
      ],
      source: { name: 'WHO & UNICEF Immunization Data (2025), via Our World in Data', url: 'https://ourworldindata.org/grapher/share-of-children-immunized-dtp3' }
    },
    {
      title: 'Global maternal mortality ratio',
      type: 'line',
      unit: '',
      seriesLabel: 'Deaths per 100,000 live births',
      trend: 'improving',
      takeaway: 'The global maternal mortality ratio has fallen by roughly 57% since the mid-1980s, though progress stalled after 2016 and briefly reversed during COVID-19.',
      data: [
        {x:1985,y:460.4},{x:1986,y:438.5},{x:1987,y:429.2},{x:1988,y:414.4},{x:1989,y:401.2},{x:1990,y:391.2},
        {x:1991,y:394.9},{x:1992,y:394.7},{x:1993,y:389.1},{x:1994,y:382.0},{x:1995,y:371.1},{x:1996,y:365.9},
        {x:1997,y:358.2},{x:1998,y:360.3},{x:1999,y:339.9},{x:2000,y:327.6},{x:2001,y:321.2},{x:2002,y:311.4},
        {x:2003,y:300.8},{x:2004,y:290.9},{x:2005,y:283.0},{x:2006,y:275.8},{x:2007,y:269.2},{x:2008,y:264.2},
        {x:2009,y:258.5},{x:2010,y:253.3},{x:2011,y:247.3},{x:2012,y:238.8},{x:2013,y:235.4},{x:2014,y:230.6},
        {x:2015,y:227.7},{x:2016,y:220.3},{x:2017,y:214.7},{x:2018,y:210.9},{x:2019,y:207.1},{x:2020,y:210.5},
        {x:2021,y:241.9},{x:2022,y:202.6},{x:2023,y:197.3}
      ],
      source: { name: 'UN Maternal Mortality Estimation Inter-agency Group (WHO, UNICEF, UNFPA, World Bank, UNDESA), 2025', url: 'https://www.who.int/publications/i/item/9789240108462' }
    },
    {
      title: 'Global HIV/AIDS deaths per year',
      type: 'line',
      unit: '',
      seriesLabel: 'Deaths',
      trend: 'improving',
      takeaway: 'Annual global AIDS deaths climbed through the 1990s to a peak of about 2.1 million in 2004, then fell roughly 70% to about 628,000 by 2024 as antiretroviral therapy scaled up worldwide.',
      data: [
        {x:1990,y:430359},{x:1991,y:548294},{x:1992,y:680113},{x:1993,y:823872},{x:1994,y:974899},{x:1995,y:1125249},
        {x:1996,y:1271292},{x:1997,y:1415485},{x:1998,y:1556300},{x:1999,y:1696746},{x:2000,y:1825908},{x:2001,y:1937883},
        {x:2002,y:2030361},{x:2003,y:2100445},{x:2004,y:2113223},{x:2005,y:2055187},{x:2006,y:1948298},{x:2007,y:1791220},
        {x:2008,y:1616831},{x:2009,y:1476023},{x:2010,y:1362874},{x:2011,y:1260758},{x:2012,y:1164119},{x:2013,y:1074220},
        {x:2014,y:1007809},{x:2015,y:959040},{x:2016,y:907010},{x:2017,y:856847},{x:2018,y:809571},{x:2019,y:772655},
        {x:2020,y:735870},{x:2021,y:709716},{x:2022,y:682940},{x:2023,y:651212},{x:2024,y:627811}
      ],
      source: { name: 'UNAIDS, Global AIDS Update (2026), via Our World in Data', url: 'https://ourworldindata.org/grapher/deaths-from-aids-un' }
    },
    {"title": "Too thin vs too heavy: adult underweight and obesity", "type": "line", "trend": "mixed", "unit": "%", "takeaway": "The share of the world’s adults who are underweight — a sign of chronic undernutrition — fell from 17.3% in 1980 to 6.9% in 2024, while obesity rose from 5.5% to 16.2%. The two lines crossed in 2008: since then, more adults worldwide have been obese than underweight. Both come from the same WHO / NCD-RisC estimates and are age-standardised shares of adults (18+). Underweight is a sign of long-term undernutrition, not a direct count of people going hungry.", "series": [{"label": "Adults who are underweight (BMI under 18.5)", "color": "var(--series-3)", "data": [{"x": 1980, "y": 17.29}, {"x": 1981, "y": 17.02}, {"x": 1982, "y": 16.74}, {"x": 1983, "y": 16.47}, {"x": 1984, "y": 16.21}, {"x": 1985, "y": 15.94}, {"x": 1986, "y": 15.68}, {"x": 1987, "y": 15.41}, {"x": 1988, "y": 15.14}, {"x": 1989, "y": 14.88}, {"x": 1990, "y": 14.64}, {"x": 1991, "y": 14.4}, {"x": 1992, "y": 14.17}, {"x": 1993, "y": 13.96}, {"x": 1994, "y": 13.76}, {"x": 1995, "y": 13.57}, {"x": 1996, "y": 13.38}, {"x": 1997, "y": 13.18}, {"x": 1998, "y": 12.98}, {"x": 1999, "y": 12.78}, {"x": 2000, "y": 12.57}, {"x": 2001, "y": 12.36}, {"x": 2002, "y": 12.14}, {"x": 2003, "y": 11.91}, {"x": 2004, "y": 11.67}, {"x": 2005, "y": 11.43}, {"x": 2006, "y": 11.18}, {"x": 2007, "y": 10.92}, {"x": 2008, "y": 10.65}, {"x": 2009, "y": 10.38}, {"x": 2010, "y": 10.12}, {"x": 2011, "y": 9.85}, {"x": 2012, "y": 9.59}, {"x": 2013, "y": 9.32}, {"x": 2014, "y": 9.06}, {"x": 2015, "y": 8.8}, {"x": 2016, "y": 8.55}, {"x": 2017, "y": 8.32}, {"x": 2018, "y": 8.09}, {"x": 2019, "y": 7.87}, {"x": 2020, "y": 7.66}, {"x": 2021, "y": 7.46}, {"x": 2022, "y": 7.27}, {"x": 2023, "y": 7.09}, {"x": 2024, "y": 6.91}]}, {"label": "Adults who are obese (BMI 30+)", "color": "var(--series-2)", "data": [{"x": 1980, "y": 5.45}, {"x": 1981, "y": 5.54}, {"x": 1982, "y": 5.64}, {"x": 1983, "y": 5.75}, {"x": 1984, "y": 5.86}, {"x": 1985, "y": 5.98}, {"x": 1986, "y": 6.1}, {"x": 1987, "y": 6.24}, {"x": 1988, "y": 6.37}, {"x": 1989, "y": 6.52}, {"x": 1990, "y": 6.67}, {"x": 1991, "y": 6.83}, {"x": 1992, "y": 7.01}, {"x": 1993, "y": 7.18}, {"x": 1994, "y": 7.37}, {"x": 1995, "y": 7.57}, {"x": 1996, "y": 7.78}, {"x": 1997, "y": 8.01}, {"x": 1998, "y": 8.24}, {"x": 1999, "y": 8.49}, {"x": 2000, "y": 8.74}, {"x": 2001, "y": 9.0}, {"x": 2002, "y": 9.27}, {"x": 2003, "y": 9.53}, {"x": 2004, "y": 9.8}, {"x": 2005, "y": 10.08}, {"x": 2006, "y": 10.36}, {"x": 2007, "y": 10.64}, {"x": 2008, "y": 10.93}, {"x": 2009, "y": 11.21}, {"x": 2010, "y": 11.49}, {"x": 2011, "y": 11.78}, {"x": 2012, "y": 12.06}, {"x": 2013, "y": 12.36}, {"x": 2014, "y": 12.66}, {"x": 2015, "y": 12.98}, {"x": 2016, "y": 13.31}, {"x": 2017, "y": 13.64}, {"x": 2018, "y": 13.96}, {"x": 2019, "y": 14.3}, {"x": 2020, "y": 14.64}, {"x": 2021, "y": 15.0}, {"x": 2022, "y": 15.37}, {"x": 2023, "y": 15.76}, {"x": 2024, "y": 16.17}]}], "source": {"name": "WHO Global Health Observatory (NCD_BMI_18A, NCD_BMI_30A); NCD Risk Factor Collaboration, Nature (2026)", "url": "https://ghoapi.azureedge.net/api/NCD_BMI_18A"}}
  ]
};
