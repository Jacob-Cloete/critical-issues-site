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
    {"title": "Global income: richest 10%’s share vs bottom groups’ actual income", "type": "line", "trend": "mixed", "takeaway": "The richest 10% have taken roughly half of all global income for two centuries (50% in 1820, 53% in 2024). But the bottom panel shows the other side: average income of the poorest 50% rose from $2,266 in 1980 to $5,047 in 2024, and of the bottom 90% from $10,195 to $16,144 (constant 2025 US$ at PPP). Before 1980 the series only has benchmark years, so read the early part as approximate.", "panels": [{"type": "line", "subtitle": "Share of global pre-tax income going to the richest 10%", "unit": "%", "seriesLabel": "Top 10% share", "data": [{"x": 1820, "y": 50.5}, {"x": 1850, "y": 53.88}, {"x": 1880, "y": 57.11}, {"x": 1900, "y": 58.8}, {"x": 1910, "y": 58.8}, {"x": 1920, "y": 56.79}, {"x": 1930, "y": 52.65}, {"x": 1940, "y": 52.58}, {"x": 1950, "y": 51.84}, {"x": 1960, "y": 50.3}, {"x": 1970, "y": 49.19}, {"x": 1980, "y": 51.5}, {"x": 1981, "y": 51.41}, {"x": 1982, "y": 51.13}, {"x": 1983, "y": 51.31}, {"x": 1984, "y": 51.71}, {"x": 1985, "y": 51.95}, {"x": 1986, "y": 52.2}, {"x": 1987, "y": 52.45}, {"x": 1988, "y": 52.87}, {"x": 1989, "y": 53.27}, {"x": 1990, "y": 53.62}, {"x": 1991, "y": 53.99}, {"x": 1992, "y": 54.91}, {"x": 1993, "y": 55.16}, {"x": 1994, "y": 55.77}, {"x": 1995, "y": 55.88}, {"x": 1996, "y": 56.41}, {"x": 1997, "y": 56.47}, {"x": 1998, "y": 57.06}, {"x": 1999, "y": 57.36}, {"x": 2000, "y": 57.71}, {"x": 2001, "y": 57.57}, {"x": 2002, "y": 57.26}, {"x": 2003, "y": 57.21}, {"x": 2004, "y": 57.19}, {"x": 2005, "y": 57.27}, {"x": 2006, "y": 57.1}, {"x": 2007, "y": 56.75}, {"x": 2008, "y": 56.25}, {"x": 2009, "y": 55.32}, {"x": 2010, "y": 55.01}, {"x": 2011, "y": 54.84}, {"x": 2012, "y": 54.47}, {"x": 2013, "y": 54.3}, {"x": 2014, "y": 53.85}, {"x": 2015, "y": 53.7}, {"x": 2016, "y": 53.56}, {"x": 2017, "y": 53.48}, {"x": 2018, "y": 53.37}, {"x": 2019, "y": 53.03}, {"x": 2020, "y": 53.27}, {"x": 2021, "y": 53.63}, {"x": 2022, "y": 53.7}, {"x": 2023, "y": 53.5}, {"x": 2024, "y": 53.42}]}, {"type": "line", "subtitle": "Average pre-tax income per adult per year (constant 2025 US$, PPP)", "unit": "$", "series": [{"label": "Bottom 90%", "color": "var(--series-1)", "data": [{"x": 1820, "y": 1176}, {"x": 1850, "y": 1357}, {"x": 1880, "y": 1768}, {"x": 1900, "y": 2347}, {"x": 1910, "y": 2705}, {"x": 1920, "y": 2909}, {"x": 1930, "y": 3556}, {"x": 1940, "y": 3912}, {"x": 1950, "y": 4812}, {"x": 1960, "y": 6849}, {"x": 1970, "y": 10609}, {"x": 1980, "y": 10195}, {"x": 1981, "y": 10150}, {"x": 1982, "y": 10007}, {"x": 1983, "y": 9966}, {"x": 1984, "y": 10061}, {"x": 1985, "y": 10083}, {"x": 1986, "y": 10088}, {"x": 1987, "y": 10135}, {"x": 1988, "y": 10216}, {"x": 1989, "y": 10219}, {"x": 1990, "y": 10178}, {"x": 1991, "y": 9957}, {"x": 1992, "y": 9674}, {"x": 1993, "y": 9553}, {"x": 1994, "y": 9500}, {"x": 1995, "y": 9656}, {"x": 1996, "y": 9698}, {"x": 1997, "y": 9883}, {"x": 1998, "y": 9732}, {"x": 1999, "y": 9836}, {"x": 2000, "y": 10036}, {"x": 2001, "y": 10091}, {"x": 2002, "y": 10267}, {"x": 2003, "y": 10460}, {"x": 2004, "y": 10839}, {"x": 2005, "y": 11096}, {"x": 2006, "y": 11521}, {"x": 2007, "y": 11992}, {"x": 2008, "y": 12206}, {"x": 2009, "y": 12048}, {"x": 2010, "y": 12534}, {"x": 2011, "y": 12841}, {"x": 2012, "y": 13128}, {"x": 2013, "y": 13377}, {"x": 2014, "y": 13743}, {"x": 2015, "y": 14035}, {"x": 2016, "y": 14270}, {"x": 2017, "y": 14604}, {"x": 2018, "y": 14936}, {"x": 2019, "y": 15228}, {"x": 2020, "y": 14397}, {"x": 2021, "y": 15056}, {"x": 2022, "y": 15354}, {"x": 2023, "y": 15799}, {"x": 2024, "y": 16144}]}, {"label": "Bottom 50%", "color": "var(--series-3)", "data": [{"x": 1820, "y": 612}, {"x": 1850, "y": 670}, {"x": 1880, "y": 741}, {"x": 1900, "y": 908}, {"x": 1910, "y": 1057}, {"x": 1920, "y": 1110}, {"x": 1930, "y": 1251}, {"x": 1940, "y": 1327}, {"x": 1950, "y": 1677}, {"x": 1960, "y": 2113}, {"x": 1970, "y": 2681}, {"x": 1980, "y": 2266}, {"x": 1981, "y": 2318}, {"x": 1982, "y": 2359}, {"x": 1983, "y": 2354}, {"x": 1984, "y": 2443}, {"x": 1985, "y": 2470}, {"x": 1986, "y": 2490}, {"x": 1987, "y": 2546}, {"x": 1988, "y": 2565}, {"x": 1989, "y": 2551}, {"x": 1990, "y": 2561}, {"x": 1991, "y": 2536}, {"x": 1992, "y": 2532}, {"x": 1993, "y": 2545}, {"x": 1994, "y": 2563}, {"x": 1995, "y": 2671}, {"x": 1996, "y": 2730}, {"x": 1997, "y": 2827}, {"x": 1998, "y": 2820}, {"x": 1999, "y": 2878}, {"x": 2000, "y": 2888}, {"x": 2001, "y": 2890}, {"x": 2002, "y": 2931}, {"x": 2003, "y": 3008}, {"x": 2004, "y": 3149}, {"x": 2005, "y": 3212}, {"x": 2006, "y": 3380}, {"x": 2007, "y": 3534}, {"x": 2008, "y": 3609}, {"x": 2009, "y": 3650}, {"x": 2010, "y": 3783}, {"x": 2011, "y": 3892}, {"x": 2012, "y": 3998}, {"x": 2013, "y": 4094}, {"x": 2014, "y": 4240}, {"x": 2015, "y": 4354}, {"x": 2016, "y": 4424}, {"x": 2017, "y": 4510}, {"x": 2018, "y": 4642}, {"x": 2019, "y": 4724}, {"x": 2020, "y": 4481}, {"x": 2021, "y": 4646}, {"x": 2022, "y": 4751}, {"x": 2023, "y": 4935}, {"x": 2024, "y": 5047}]}]}], "source": {"name": "World Inequality Database (WID.world), World (PPP) series; constant 2025 US$ PPP, per adult", "url": "https://wid.world/"}},
    {"title": "Global income in 2021: top 1% vs bottom 50%", "type": "bar", "takeaway": "In 2021 the richest 1% received 20.6% of global pre-tax income and the poorest half 7.95%. In actual dollars, that’s about $602,000 a year per adult in the top 1%, versus about $4,600 in the bottom 50% — though the bottom 50%’s figure has itself roughly doubled since 1980 (about $2,300).", "panels": [{"subtitle": "Share of global pre-tax income (2021)", "unit": "%", "seriesLabel": "Income share", "data": [{"category": "Top 1%", "value": 20.59}, {"category": "Bottom 50%", "value": 7.95}]}, {"subtitle": "Average pre-tax income per adult, 2021 (constant 2025 US$, PPP)", "unit": "$", "seriesLabel": "Income per adult", "color": "var(--series-1)", "data": [{"category": "Top 1%", "value": 601582}, {"category": "World average", "value": 29222}, {"category": "Bottom 50%", "value": 4646}]}], "source": {"name": "World Inequality Database (WID.world), World (PPP) series; constant 2025 US$ PPP, per adult", "url": "https://wid.world/"}},
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
    {"title": "Global wealth: richest 1%’s share vs bottom groups’ actual wealth", "type": "line", "trend": "mixed", "takeaway": "The richest 1%’s share of global wealth fell from over half around 1900 to about a third in the 1980s, and has edged back up since (36% in 2024). In absolute terms, average net wealth of the poorest 50% was roughly flat for 160 years (about $871 in 1820 and $1,083 in 1980), then rose to $6,766 by 2024 — still only a small slice of the total, and it dipped after the 2008 financial crisis.", "panels": [{"type": "line", "subtitle": "Share of global net wealth held by the richest 1%", "unit": "%", "seriesLabel": "Top 1% share", "data": [{"x": 1820, "y": 45.84}, {"x": 1850, "y": 51.42}, {"x": 1880, "y": 55.26}, {"x": 1900, "y": 56.06}, {"x": 1910, "y": 54.8}, {"x": 1920, "y": 47.7}, {"x": 1930, "y": 50.37}, {"x": 1940, "y": 46.82}, {"x": 1950, "y": 44.27}, {"x": 1960, "y": 42.03}, {"x": 1970, "y": 37.97}, {"x": 1980, "y": 34.64}, {"x": 1981, "y": 34.26}, {"x": 1982, "y": 33.67}, {"x": 1983, "y": 33.51}, {"x": 1984, "y": 33.38}, {"x": 1985, "y": 33.62}, {"x": 1986, "y": 34.27}, {"x": 1987, "y": 34.58}, {"x": 1988, "y": 35.25}, {"x": 1989, "y": 35.44}, {"x": 1990, "y": 35.37}, {"x": 1991, "y": 35.55}, {"x": 1992, "y": 35.58}, {"x": 1993, "y": 35.42}, {"x": 1994, "y": 35.64}, {"x": 1995, "y": 35.53}, {"x": 1996, "y": 35.91}, {"x": 1997, "y": 36.33}, {"x": 1998, "y": 37.15}, {"x": 1999, "y": 37.39}, {"x": 2000, "y": 37.34}, {"x": 2001, "y": 37.26}, {"x": 2002, "y": 36.88}, {"x": 2003, "y": 36.68}, {"x": 2004, "y": 37.33}, {"x": 2005, "y": 37.03}, {"x": 2006, "y": 37.01}, {"x": 2007, "y": 37.73}, {"x": 2008, "y": 36.49}, {"x": 2009, "y": 35.5}, {"x": 2010, "y": 36.06}, {"x": 2011, "y": 36.01}, {"x": 2012, "y": 35.78}, {"x": 2013, "y": 35.56}, {"x": 2014, "y": 35.91}, {"x": 2015, "y": 36.25}, {"x": 2016, "y": 35.45}, {"x": 2017, "y": 35.88}, {"x": 2018, "y": 36.24}, {"x": 2019, "y": 35.96}, {"x": 2020, "y": 36.22}, {"x": 2021, "y": 37.37}, {"x": 2022, "y": 36.61}, {"x": 2023, "y": 36.43}, {"x": 2024, "y": 36.47}]}, {"type": "line", "subtitle": "Average net wealth per adult (constant 2025 US$, PPP)", "unit": "$", "series": [{"label": "Bottom 90%", "color": "var(--series-1)", "data": [{"x": 1820, "y": 2660}, {"x": 1850, "y": 3004}, {"x": 1880, "y": 3424}, {"x": 1900, "y": 4131}, {"x": 1910, "y": 4862}, {"x": 1920, "y": 4339}, {"x": 1930, "y": 4974}, {"x": 1940, "y": 4598}, {"x": 1950, "y": 5028}, {"x": 1960, "y": 6928}, {"x": 1970, "y": 11167}, {"x": 1980, "y": 12474}, {"x": 1981, "y": 12915}, {"x": 1982, "y": 13463}, {"x": 1983, "y": 13826}, {"x": 1984, "y": 13990}, {"x": 1985, "y": 14148}, {"x": 1986, "y": 14628}, {"x": 1987, "y": 15227}, {"x": 1988, "y": 15666}, {"x": 1989, "y": 16204}, {"x": 1990, "y": 16716}, {"x": 1991, "y": 16372}, {"x": 1992, "y": 16153}, {"x": 1993, "y": 16735}, {"x": 1994, "y": 16795}, {"x": 1995, "y": 16847}, {"x": 1996, "y": 17237}, {"x": 1997, "y": 18005}, {"x": 1998, "y": 18607}, {"x": 1999, "y": 19622}, {"x": 2000, "y": 20470}, {"x": 2001, "y": 20764}, {"x": 2002, "y": 21559}, {"x": 2003, "y": 22647}, {"x": 2004, "y": 23594}, {"x": 2005, "y": 25187}, {"x": 2006, "y": 26793}, {"x": 2007, "y": 27791}, {"x": 2008, "y": 28001}, {"x": 2009, "y": 28216}, {"x": 2010, "y": 28878}, {"x": 2011, "y": 28528}, {"x": 2012, "y": 29532}, {"x": 2013, "y": 31090}, {"x": 2014, "y": 32466}, {"x": 2015, "y": 34094}, {"x": 2016, "y": 35940}, {"x": 2017, "y": 37713}, {"x": 2018, "y": 38415}, {"x": 2019, "y": 39944}, {"x": 2020, "y": 41564}, {"x": 2021, "y": 41704}, {"x": 2022, "y": 42800}, {"x": 2023, "y": 43085}, {"x": 2024, "y": 43750}]}, {"label": "Bottom 50%", "color": "var(--series-3)", "data": [{"x": 1820, "y": 871}, {"x": 1850, "y": 978}, {"x": 1880, "y": 1070}, {"x": 1900, "y": 1256}, {"x": 1910, "y": 1321}, {"x": 1920, "y": 1118}, {"x": 1930, "y": 1265}, {"x": 1940, "y": 953}, {"x": 1950, "y": 950}, {"x": 1960, "y": 924}, {"x": 1970, "y": 944}, {"x": 1980, "y": 1083}, {"x": 1981, "y": 1218}, {"x": 1982, "y": 1479}, {"x": 1983, "y": 1672}, {"x": 1984, "y": 1646}, {"x": 1985, "y": 1662}, {"x": 1986, "y": 1761}, {"x": 1987, "y": 1844}, {"x": 1988, "y": 1864}, {"x": 1989, "y": 1922}, {"x": 1990, "y": 1951}, {"x": 1991, "y": 1924}, {"x": 1992, "y": 1939}, {"x": 1993, "y": 2206}, {"x": 1994, "y": 2239}, {"x": 1995, "y": 2296}, {"x": 1996, "y": 2353}, {"x": 1997, "y": 2548}, {"x": 1998, "y": 2684}, {"x": 1999, "y": 2899}, {"x": 2000, "y": 3019}, {"x": 2001, "y": 3014}, {"x": 2002, "y": 3160}, {"x": 2003, "y": 3355}, {"x": 2004, "y": 3536}, {"x": 2005, "y": 3779}, {"x": 2006, "y": 3946}, {"x": 2007, "y": 3954}, {"x": 2008, "y": 3862}, {"x": 2009, "y": 3960}, {"x": 2010, "y": 3167}, {"x": 2011, "y": 3228}, {"x": 2012, "y": 3600}, {"x": 2013, "y": 3992}, {"x": 2014, "y": 4395}, {"x": 2015, "y": 4773}, {"x": 2016, "y": 5174}, {"x": 2017, "y": 5684}, {"x": 2018, "y": 6018}, {"x": 2019, "y": 6248}, {"x": 2020, "y": 6475}, {"x": 2021, "y": 6292}, {"x": 2022, "y": 6517}, {"x": 2023, "y": 6655}, {"x": 2024, "y": 6766}]}]}], "source": {"name": "World Inequality Database (WID.world), World (PPP) series; constant 2025 US$ PPP, per adult", "url": "https://wid.world/"}}
  ]
};
