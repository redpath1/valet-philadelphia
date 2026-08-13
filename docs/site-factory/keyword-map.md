# Page Keyword Map

This map assigns one primary search intent to every indexable page. Primary phrases appear naturally in each page title or H1 and in the visible page copy. Supporting phrases appear only where the page genuinely answers that topic.

Google does not use a `meta keywords` tag, so the implementation relies on descriptive titles, headings, useful copy, internal links, and factual structured data.

| Page | Primary keyword | Supporting keywords | Search intent |
| --- | --- | --- | --- |
| Home | Philadelphia valet parking | event valet parking; restaurant valet parking | Broad local valet service |
| Services hub | valet parking services in Philadelphia | recurring valet parking; parking management services | Compare available services |
| Event service | event valet parking in Philadelphia | arrival planning; key control | Plan valet for an event |
| Restaurant service | restaurant valet parking in Philadelphia | dinner rush; curb space | Plan recurring or event restaurant valet |
| Wedding service | wedding valet parking in Philadelphia | ceremony timing; guest arrival flow | Plan valet for a wedding venue |
| Hotel service | hotel valet parking in Philadelphia | check-in peaks; overnight key custody | Plan recurring hotel valet operations |
| Healthcare service | healthcare valet parking in Philadelphia | accessible arrivals; medical office valet parking | Plan valet for a care entrance |
| Parking management | parking management in Philadelphia | parking lot management; garage traffic flow | Plan traffic, lot, and garage operations |
| About | valet parking company in Philadelphia | site planning; key control | Evaluate the company and approach |
| Contact | request valet parking in Philadelphia | valet service request; parking plan | Request service |
| FAQ | Philadelphia valet parking FAQ | valet staffing; key control | Answer planning questions |
| Locations hub | Philadelphia valet parking service areas | Philadelphia valet service areas; service coverage | Compare service areas |
| Philadelphia | valet parking in Philadelphia | Philadelphia parking operations; event valet parking | Evaluate citywide service |
| Center City | Center City Philadelphia valet parking | Center City valet service; restaurant valet parking | Evaluate central Philadelphia service |
| Main Line | Main Line valet parking | wedding valet parking; event valet parking | Evaluate Main Line service |
| King of Prussia | King of Prussia valet parking | hotel valet parking; parking management | Evaluate King of Prussia service |
| Bucks County | Bucks County valet parking | wedding valet parking; event valet parking | Evaluate Bucks County service |
| South Jersey | South Jersey valet parking | restaurant valet parking; wedding valet parking | Evaluate South Jersey service |
| HTML sitemap | Valet Philadelphia HTML sitemap | valet parking services; service area pages | Navigate the site |

The machine-readable source of truth is `src/data/seo-keywords.json`. The post-build SEO audit checks map coverage, unique primary targets, prominent usage, visible-copy usage, supporting phrase usage, and the absence of a `meta keywords` tag.
