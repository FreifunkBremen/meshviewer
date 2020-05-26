module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
/*
      {
        'name': 'Clientstatistik',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?orgId=1&panelId=1&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Entwicklung der Anzahl der Clients innerhalb des letzten Tages'
      },
      {
        'name': 'Trafficstatistik',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?orgId=1&panelId=2&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Entwicklung des Traffic innerhalb des letzten Tages'
      },
      {
        'name': 'Hardwareauslastung',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?orgId=1&panelId=4&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Loadavg und Arbeitspeicherauslastung innerhalb des letzten Tages'
      },
      {
        'name': 'Airtime',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?orgId=1&panelId=5&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Auslastung des WLAN-Frequenz innerhalb des letzten Tages'
      },
*/
      {
        'name': 'erweiterte Statistiken',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'grafana-logo.png',
        'title': 'erweiterte Statistiken',
      }
    ],
    'linkInfos': [
/*      {
        'name': 'Verlauf min. und max. Übertragungsqualität aller Links',
        'href': 'https://grafana.bremen.freifunk.net/d/nvSNqoHmz/link?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/nvSNqoHmz/link?orgId=1&panelId=7&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten'
      },
*/
      {
        'name': 'erweiterte Statistiken',
        'href': 'https://grafana.bremen.freifunk.net/d/nvSNqoHmz/link?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}',
        'image': 'grafana-logo.png',
        'title': 'erweiterte Statistiken'
      },
    ],
    'linkTypeInfos': [
/*
      {
        'name': 'Verlauf der Übertragungsqualität für {TYPE}',
        'href': 'https://grafana.bremen.freifunk.net/d/nvSNqoHmz/link?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_addr={SOURCE_ADDR}&var-target_addr={TARGET_ADDR}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/nvSNqoHmz/link?orgId=1&panelId=8&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_addr={SOURCE_ADDR}&var-target_addr={TARGET_ADDR}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages des einzelnen Links in beide Richtungen'
      }
*/
    ],
    'globalInfos': [
/*
      {
        'name': 'Globale Statistik',
        'href': 'https://regensburg.freifunk.net/netz/statistik',
        'image': 'https://grafana.regensburg.freifunk.net/render/d-solo/000000028/globals?panelId=2&from=now-7d&&width=650&height=350&theme=light&_t={TIME}',
        'title': 'Globale Statistik - weiteren Statistiken',
        'width': 650,
        'height': 350
      }
*/
    ],
    // Array of data provider are supported
    'dataPath': ['https://downloads.bremen.freifunk.net/data/'],
    'siteName': 'Freifunk Bremen',
    'maxAge': 7,
    'mapLayers': [
      {
        'name': 'Freifunk Bremen',
        'url': '//tiles.bremen.freifunk.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'type': 'osm',
          'attribution': '<a href="https://github.com/openmaptiles/mapbox-studio-osm-bright.tm2">Design</a> © <a href="https://openmaptiles.org/">OpenMapTiles</a>, <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a> — Daten © <a href="https://www.maptiler.com/copyright/">MapTiler</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Wikimedia OSM Map',
        'url': 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      },
      {
        'name': 'Freifunk Regensburg Night',
        // Please ask Freifunk Regensburg before using its tile server - example with retina and dark tiles
        'url': 'https://{s}.tiles.ffrgb.net/n/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': ' <a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
          'mode': 'night'
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
    // Northwest
      [
        53.27917,
        8.31390
      ],
      // Southeast
      [
        52.9734,
        9.2037
      ]
    ],
    'domainNames': [
      {
        'domain': '',
        'name': 'Unknown (servers?)'
      },
      {
        'domain': 'ffhb',
        'name': 'Freifunk Bremen'
      },
      {
        'domain': 'ffhb_batv15',
        'name': 'Freifunk Bremen neu (B.A.T.M.A.N V / v15)'
      },
      {
        'domain': 'ffhb_11s',
        'name': 'Freifunk Bremen (11s)'
      },
      {
        'domain': 'ffhb_legacy',
        'name': 'Freifunk Bremen alt (ibss)'
      }
    ],
    'linkList': [
      {
        'title': 'Homepage',
        'href': 'https://bremen.freifunk.net/'
      },
      {
        'title': 'Blog',
        'href': 'https://bremen.freifunk.net/blog/'
      },
      {
        'title': 'Grafana/Statistik',
        'href': 'https://grafana.bremen.freifunk.net/'
      },
      {
        'title': 'Impressum',
        'href': 'https://bremen.freifunk.net/impressum.html'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://wiki.bremen.freifunk.net/Infrastruktur/Datenschutz'
      }
    ]
  };
};
