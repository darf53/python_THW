export let volumios = [
  { 
    "service": "webradio", 
    "type": "webradio", 
    "name": "novalanuit",
    "title": "Nova La Nuit", 
    "uri": "http://nova-ln.ice.infomaniak.ch/nova-ln-128", 
    "albumart": "https://www.nova.fr/wp-content/uploads/sites/2/2020/11/Nova-la-nuit.png" 
  },
  { 
    "service": "webradio", 
    "type": "webradio", 
    "name": "radio1",
    "title": "Radio1", 
    "uri": "http://icecast.vrtcdn.be/radio1-high.mp3", 
    "albumart": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/VRT_Radio_1_logo.svg/1200px-VRT_Radio_1_logo.svg.png"
  },
  { 
    "service": "webradio", 
    "type": "webradio", 
    "name": "stubru",
    "title": "Studio Brussel", 
    "uri": "http://icecast.vrtcdn.be/stubru-high.mp3", 
    "albumart": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/VRT_StuBru_logo.svg/1200px-VRT_StuBru_logo.svg.png"
  }
];

export let volumedict = {
  novalanuit: {
    "service": "webradio", 
    "type": "webradio", 
    "name": "novalanuit",
    "title": "Nova La Nuit", 
    "uri": "http://nova-ln.ice.infomaniak.ch/nova-ln-128", 
    "albumart": "https://www.nova.fr/wp-content/uploads/sites/2/2020/11/Nova-la-nuit.png" 
    },
  radio1: { 
    "service": "webradio", 
    "type": "webradio", 
    "name": "radio1",
    "title": "Radio1", 
    "uri": "http://icecast.vrtcdn.be/radio1-high.mp3", 
    "albumart": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/VRT_Radio_1_logo.svg/1200px-VRT_Radio_1_logo.svg.png"
  },
  stubru: { 
    "service": "webradio", 
    "type": "webradio", 
    "name": "stubru",
    "title": "Studio Brussel", 
    "uri": "http://icecast.vrtcdn.be/stubru-high.mp3", 
    "albumart": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/VRT_StuBru_logo.svg/1200px-VRT_StuBru_logo.svg.png"
  },
  tijdloze: {
    "name":"tijdloze",
    "service": "webradio", 
    "type": "webradio", 
    "title":"StuBru Tijdloze",
    "uri":"http://icecast.vrtcdn.be/stubru_tijdloze-high.mp3",
    "albumart": "images/stubru_tijdloze.jpeg"
  },
  ikluisterbelgisch: {
    "name":"ikluisterbelgisch",
    "service": "webradio", 
    "type": "webradio", 
    "title":"StuBru #ikluisterbelgisch",
    "uri":"http://icecast.vrtcdn.be/stubru_tgs-high.mp3",
    "albumart": "images/stubru_ikluisterbelgisch.png"
  },
  klara: {
    "name":"klara",
    "service": "webradio", 
    "type": "webradio", 
    "title":"Klara",
    "uri":"http://icecast.vrtcdn.be/klara-high.mp3",
    "albumart": "images/klara.png"
  },
  klaracontinuo: {
    "name":"klaracontinuo",
    "service": "webradio", 
    "type": "webradio", 
    "title":"Klara Continuo",
    "uri":"http://icecast.vrtcdn.be/klaracontinuo-high.mp3",
    "albumart": "images/klara_continuo.png"
  },
  RadioNova: {
    "name":"RadioNova",
    "service": "webradio", 
    "type": "webradio", 
    "title":"Radio Nova",
    "uri":"http://nova.ice.infomaniak.ch/nova-128",
    "albumart": "images/radioNova.png"
  },
  classics: {
    "name":"classics",
    "service": "webradio", 
    "type": "webradio", 
    "title":"Radio1 Classics",
    "uri":"http://icecast.vrtcdn.be/radio1_classics-high.mp3",
    "albumart": "images/radio1_classics_100.png"
  }, 
  novavintage: {
    "name":"novavintage",
    "service": "webradio", 
    "type": "webradio", 
    "title":"Nova Vintage",
    "uri":"http://nova-vnt.ice.infomaniak.ch/nova-vnt-128.mp3",
    "albumart": "images/radioNova_Vintage.jpeg"
  },
  mnm: {
    "name":"mnm",
    "service": "webradio", 
    "type": "webradio", 
    "title":"MNM",
    "uri":"http://icecast.vrtcdn.be/mnm-high.mp3",
    "albumart": "images/mnm.png"
  },
  mnmurb: {
    "name":"mnmurb",
    "service": "webradio", 
    "type": "webradio", 
    "title":"MNM R&Beats",
    "uri":"http://icecast.vrtcdn.be/mnm_urb-high.mp3 ",
    "albumart": "images/mnm_RBeats.png"
  },
  mnmhits: {
    "name":"mnmhits",
    "service": "webradio", 
    "type": "webradio", 
    "title":"MNM Hits",
    "uri":"http://icecast.vrtcdn.be/mnm_hits-high.mp3",
    "albumart": "images/mnm_hits.png"
  },
  mnm_90s_00s: {
    "name":"mnm_90s_00s",
    "service": "webradio", 
    "type": "webradio", 
    "title":"MNM 90's & 00's",
    "uri":"http://icecast.vrtcdn.be/mnm_90s00s-high.mp3",
    "albumart": "images/mnm_90s00s.png"
  }
};

export let radios = `[
    {
      "name":"radio1",
      "title":"Radio1",
      "uri":"http://icecast.vrtcdn.be/radio1-high.mp3",
      "albumart":"images/1200px-VRT_Radio_1_logo.svg.png"
    },
    {
      "name":"classics",
      "title":"Radio1 Classics",
      "uri":"http://icecast.vrtcdn.be/radio1_classics-high.mp3",
      "albumart": "images/radio1_classics_100.png"
    }, 
    {
      "name": "stubru",
      "title": "Studio Brussel",
      "uri": "http://icecast.vrtcdn.be/stubru-high.mp3",
      "albumart": "images/1200px-VRT_StuBru_logo.svg.png"
    },
    {
      "name":"tijdloze",
      "title":"StuBru Tijdloze",
      "uri":"http://icecast.vrtcdn.be/stubru_tijdloze-high.mp3",
      "albumart": "images/stubru_tijdloze.jpeg"
    },
    {
      "name":"ikluisterbelgisch",
      "title":"StuBru #ikluisterbelgisch",
      "uri":"http://icecast.vrtcdn.be/stubru_tgs-high.mp3",
      "albumart": "images/stubru_ikluisterbelgisch.png"
    },
    {
      "name":"klara",
      "title":"Klara",
      "uri":"http://icecast.vrtcdn.be/klara-high.mp3",
      "albumart": "images/klara.png"
    },
    {
      "name":"klaracontinuo",
      "title":"Klara Continuo",
      "uri":"http://icecast.vrtcdn.be/klaracontinuo-high.mp3",
      "albumart": "images/klara_continuo.png"
    },
    {
      "name":"Radio Nova",
      "title":"Radio Nova",
      "uri":"http://nova.ice.infomaniak.ch/nova-128",
      "albumart": "images/radioNova.png"
    },
    {
      "name":"novalanuit",
      "title":"Nova La Nuit",
      "uri":"http://nova-ln.ice.infomaniak.ch/nova-ln-128",
      "albumart": "images/radioNova_LaNuit.png"
    },
    {
      "name":"novavintage",
      "title":"Nova Vintage",
      "uri":"http://nova-vnt.ice.infomaniak.ch/nova-vnt-128.mp3",
      "albumart": "images/radioNova_Vintage.jpeg"
    },
    {
      "name":"mnm",
      "title":"MNM",
      "uri":"http://icecast.vrtcdn.be/mnm-high.mp3",
      "albumart": "images/mnm.png"
    },
    {
      "name":"mnmurb",
      "title":"MNM R&Beats",
      "uri":"http://icecast.vrtcdn.be/mnm_urb-high.mp3 ",
      "albumart": "images/mnm_RBeats.png"
    },
    {
      "name":"mnmhits",
      "title":"MNM Hits",
      "uri":"http://icecast.vrtcdn.be/mnm_hits-high.mp3",
      "albumart": "images/mnm_hits.png"
    },
    {
      "name":"mnm_90s_00s",
      "title":"MNM 90's & 00's",
      "uri":"http://icecast.vrtcdn.be/mnm_90s00s-high.mp3",
      "albumart": "images/mnm_90s00s.png"
    }
  ]`;