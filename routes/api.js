__path = process.cwd()


var express = require('express');
var db = require(__path + '/database/db');
try {
  var kuhong = db.get('ojan');
} catch (e) {
  console.log('bienvenido a lionfuri api')
}

var criador = `ANDRES-VPN`
var key = 'andress'

var chaveapi = 'GataDios'


const premiumkey = ["prempre"];
const listkey = ["andres", "doki", "Naoki", "escanor", "Sk-skid", "lionfuri"];

var fs = require('fs');
var FormData = require('form-data');
var fetch = require('node-fetch');
var util = require('util');
var router = express.Router();


var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');

precisos = {
  digitarapikey: {
    creador: `${criador}`,
    error: 'lion_402',
    mensage: `digite parametro apikey!`
  }
}
router.get('/playmp3mp4', async (req, res, next) => {
  var apikey = req.query.apikey;
  var quero = req.query.quero;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.lolhuman.xyz/api/ytplay?apikey=${chaveapi}&query=${quero}`))
      .then(response => response.json())
      .then(dataf => {
        var id = dataf.result.id;
        var titulo = dataf.result.title;
        var imagen = dataf.result.thumbnail;
        var canal = dataf.result.channel;
        var descripcion = dataf.result.description;
        var audio = dataf.result.audio.link;
        var video = dataf.result.video.link;
        res.json({
          creador: `${criador}`,
          estado: '✓activo',
          id,
          titulo,
          imagen,
          canal,
          audio,
          video,
          descripcion

        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/ytaudio', async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.url;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.lolhuman.xyz/api/ytaudio?apikey=${chaveapi}&url=${url}`))
      .then(response => response.json())
      .then(dataf => {
        var id = dataf.result.id;
        var titulo = dataf.result.title;
        var canal = dataf.result.channel;
        var duracion = dataf.result.duration;
        var vistas = dataf.result.view;
        var imagen = dataf.result.thumbnail;
        var audio = dataf.result.link.link;
        res.json({
          creador: `${criador}`,
          estado: '✓activo',
          id,
          titulo,
          canal,
          duracion,
          vistas,
          imagen,
          audio

        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/ytvideo', async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.url;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.lolhuman.xyz/api/ytvideo?apikey=${chaveapi}&url=${url}`))
      .then(response => response.json())
      .then(dataf => {
        var id = dataf.result.id;
        var titulo = dataf.result.title;
        var canal = dataf.result.channel;
        var duracion = dataf.result.duration;
        var vistas = dataf.result.view;
        var imagen = dataf.result.thumbnail;
        var video = dataf.result.link.link;
        res.json({
          creador: `${criador}`,
          estado: '✓activo',
          id,
          titulo,
          canal,
          duracion,
          vistas,
          imagen,
          video

        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/tiktokvideo', async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.url;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.lolhuman.xyz/api/tiktok?apikey=${chaveapi}&url=${url}`))
      .then(response => response.json())
      .then(dataf => {
        var id = dataf.result.id;
        var titulo = dataf.result.title;
        var nombreuser = dataf.result.author.username;
        var nick = dataf.result.author.nickname;
        var reproducciones = dataf.result.statistic.play_count;
        var likes = dataf.result.statistic.like_count;
        var compartido = dataf.result.statistic.share_count;
        var comentarios = dataf.result.statistic.comment_count;
        var video = dataf.result.link;
        res.json({
          creador: `${criador}`,
          estado: '✓activo',
          tik_tok_premium: `©${criador}✓`,
          id,
          titulo,
          nombreuser,
          nick,
          reproducciones,
          likes,
          compartido,
          comentarios,
          video


        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})





router.get('/gpt', async (req, res, next) => { 
  var apikey = req.query.apikey;
  var quero = req.query.quero;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${chaveapi}&text=${quero}&system=berikut%20resep%20masakan%20nasi%20goreng`))
      .then(response => response.json())
      .then(dataf => {
        var resultado = dataf.result;
        res.json({
          criador: `${criador}`,
          estado: 'activo',
          resultado
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/xnxxsearch', async (req, res, next) => {
  var apikey = req.query.apikey;
  var quero = req.query.quero;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${chaveapi}&query=${quero}`))
      .then(response => response.json())
      .then(dataf => {
        var resultado = dataf.result;
        res.json({
          criador: `${criador}`,
          resultado
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/xnxx', async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.url;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.lolhuman.xyz/api/xnxx?apikey=${chaveapi}&url=${url}`))
      .then(response => response.json())
      .then(dataf => {
        var titulo = dataf.result.title;
        var duracion = dataf.result.duration;
        var vistas = dataf.result.view;
        var like = dataf.result.like;
        var dislike = dataf.result.dislike;
        var descripcion = dataf.result.description;
        var imagen = dataf.result.thumbnail;
        var link = dataf.result.link;

        res.json({
          criador: `${criador}`,
          estado: 'activo',
          titulo,
          duracion,
          vistas,
          like,
          dislike,
          descripcion,
          imagen,
          link




       })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})
router.get('/simi', async (req, res, next) => { 
  var apikey = req.query.apikey;
  var quero = req.query.quero;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.simsimi.net/v2/?text=${quero}&lc=es&cf=false`))
      .then(response => response.json())
      .then(dataf => {
        var resultado = dataf.success;
        res.json({
          criador: `${criador}`,
          estado: 'activo',
          resultado
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/etra', async (req, res, next) => {
  var apikey = req.query.apikey;
  var quero = req.query.quero;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/letra?quero=${quero}&apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var resultado = dataf;
        res.json({
          criador: `${criador}`,
          resultado
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/xvideos', async (req, res, next) => {
  var apikey = req.query.apikey;
  var quero = req.query.quero;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/pesquisaxvideos?quero=${quero}&apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var resultado = dataf;
        res.json({
          criador: `${criador}`,
          resultado
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/saycat', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/saycat?apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var resultado = dataf.resultado;
        res.json({
          criador: `${criador}`,
          resultado
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/conselho', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/conselho?apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var frase = dataf.frase;
        res.json({
          criador: `${criador}`,
          frase
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/cantadas', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/cantadas18?apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var frase = dataf.frase;
        res.json({
          criador: `${criador}`,
          frase
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/metadinha', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/metadinha?apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var garoto = dataf.garoto;
        var garota = dataf.garota;
        res.json({
          criador: `${criador}`,
          garoto,
          garota
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/frasebomdia', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/frasebomdia?apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var frase = dataf.frase;
        res.json({
          criador: `${criador}`,
          frase
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/hentaivideo', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/hentaivideo?apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var resultado = dataf.resultado;
        res.json({
          criador: `${criador}`,
          resultado
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})



router.get('/formtext', async (req, res, next) => {
  var apikey = req.query.apikey;
  texto = req.query.texto;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/formtext?texto=${texto}apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var resultado = dataf.resultado;
        res.json({
          criador: `${criador}`,
          resultado
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/telesticker', async (req, res, next) => {
  var apikey = req.query.apikey;
  url = req.query.url;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/telesticker?url=${url}apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var frase = dataf.sticker;
        res.json({
          criador: `${criador}`,
          sticker
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/dolares', async (req, res, next) => {
  var apikey = req.query.apikey;
  quantia = req.query.quantia;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://alizindev-api.onrender.com/api/dolares?quantia=${quantia}&apikey=${chaveapi}`))
      .then(response => response.json())
      .then(dataf => {
        var valor = dataf.valor;
        res.json({
          criador: `${criador}`,
          valor
        })
      })
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/pinterest', async (req, res, next) => {
  quero = req.query.quero;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/pinterest?quero=' + quero + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/pinterest.jpeg', data)
    res.sendFile(__path + '/tmp/pinterest.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/fiction', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/fiction?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/fiction.jpeg', data)
    res.sendFile(__path + '/tmp/fiction.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/stickera', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/stickera?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/stickera.webp', data)
    res.sendFile(__path + '/tmp/stickera.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/neongreen', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://api.lolhuman.xyz/api/textprome/greenneon?apikey=' + chaveapi + 'text=' + texto + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/horror.jpeg', data)
    res.sendFile(__path + '/tmp/horror.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/purple', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/purple?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/purple.jpeg', data)
    res.sendFile(__path + '/tmp/purple.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/esqueleto', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/esqueleto?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/esqueleto.jpeg', data)
    res.sendFile(__path + '/tmp/esqueleto.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/summer', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/summer?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/summer.jpeg', data)
    res.sendFile(__path + '/tmp/summer.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/avanco', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/avanco?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/avanco.jpeg', data)
    res.sendFile(__path + '/tmp/avanco.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/bokeh', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/bokeh?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/bokeh.jpeg', data)
    res.sendFile(__path + '/tmp/bokeh.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/thunder', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/thunder?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/thunder.jpeg', data)
    res.sendFile(__path + '/tmp/thunder.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/batman', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/batman?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/batman.jpeg', data)
    res.sendFile(__path + '/tmp/batman.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/youtext', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/youtext?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/youtext.jpeg', data)
    res.sendFile(__path + '/tmp/youtext.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/textnatal', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/textnatal?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/textnatal.jpeg', data)
    res.sendFile(__path + '/tmp/textnatal.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/spooky', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/spooky?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/spooky.jpeg', data)
    res.sendFile(__path + '/tmp/spooky.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/halloween', async (req, res, next) => {
  texto = req.query.texto;
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/halloween?texto=' + texto + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/halloween.jpeg', data)
    res.sendFile(__path + '/tmp/halloween.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/dado', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/dadu?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/dado.webp', data)
    res.sendFile(__path + '/tmp/dado.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/stickermeme', async (req, res, next) => {
  var apikey = req.query.apikey;
  texto = req.query.texto;
  img = req.query.img;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/stickermeme?texto=' + texto + '&img=' + img + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/stickermeme.jpeg', data)
    res.sendFile(__path + '/tmp/stickermeme.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/stickermeme2', async (req, res, next) => {
  var apikey = req.query.apikey;
  texto1 = req.query.texto1;
  texto2 = req.query.texto2;
  img = req.query.img;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/stickermeme2?texto1=' + texto1 + '&texto2=' + texto2 + '&img=' + img + '&apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/stickermeme2.jpeg', data)
    res.sendFile(__path + '/tmp/stickermeme2.jpeg')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/hug', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/hug?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/hug.webp', data)
    res.sendFile(__path + '/tmp/hug.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/shotas', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/shotas?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/shotas.webp', data)
    res.sendFile(__path + '/tmp/shotas.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/heai', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/hentai2?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/hentai.webp', data)
    res.sendFile(__path + '/tmp/hentai.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/nfswloli', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/nfswloli?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/lolis.webp', data)
    res.sendFile(__path + '/tmp/lolis.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/pussy', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/pussy?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/pussy.webp', data)
    res.sendFile(__path + '/tmp/pussy.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/femdom', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/femdom?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/fendom.webp', data)
    res.sendFile(__path + '/tmp/fendom.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})


router.get('/bunda', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/bunda?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/bunda.webp', data)
    res.sendFile(__path + '/tmp/bunda.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

router.get('/prazer', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    deuz = 'https://alizindev-api.onrender.com/api/prazer?apikey=' + chaveapi + ''
    data = await fetch(deuz).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/prazer.webp', data)
    res.sendFile(__path + '/tmp/prazer.webp')
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})
router.get('/play', async (req, res, next) => {
          var apikey = req.query.apikey;
          var quero = req.query.quero;
          if (!apikey) return res.json(precisos.digitarapikey)
          if (listkey.includes(apikey)) {
            var q ='128kbps'
            var { youtubedl, youtubedlv2 } = require ("@bochilteam/scraper")
            var yts  = require ("youtube-yts")
            var ii = await yts(quero)
            var yt = ii.all
            var y = yt[0]
            var lin = y.url
            var i = await youtubedl(lin).catch(async (_) => await youtubedlv2(lin))
            var link = await i.audio[q].download()
            var titulo = y.title
            var vistas = y.views
            var duracion = y.timestamp
            var subido = y.ago
            var imagen = y.thumbnail
            var urlvid = y.url
          
            res.json({
              creador: "andresvpn",
              estado: "activo",
              result: {
              titulo,
              vistas,
              duracion,
              subido,
              urlvid,
              imagen,
              link,
              }


          })
          } else {
            res.sendFile(__path + '/views/key.html')
          }
        })

        router.get('/playvid', async (req, res, next) => {
          var apikey = req.query.apikey;
          var quero = req.query.quero;
          if (!apikey) return res.json(precisos.digitarapikey)
          if (listkey.includes(apikey)) {
            var qu ='360'
            var q = qu + 'p'
            var { youtubedl, youtubedlv2 } = require ("@bochilteam/scraper")
            var yts  = require ("youtube-yts")
            var ii = await yts(quero)
            var yt = ii.all
            var y = yt[0]
            var lin = y.url
            var i = await youtubedl(lin).catch(async (_) => await youtubedlv2(lin))
            var link = await i.video[q].download()
            var titulo = y.title
            var vistas = y.views
            var duracion = y.timestamp
            var subido = y.ago
            var imagen = y.thumbnail
            var urlvid = y.url
          
            res.json({
              creador: "andresvpn",
              estado: "activo",
              result: {
              titulo,
              vistas,
              duracion,
              subido,
              urlvid,
              imagen,
              link,
              }


          })
          } else {
            res.sendFile(__path + '/views/key.html')
          }
        })

router.get('/hentai', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    var h = JSON.parse(fs.readFileSync("./libjson/hentai.json"))
    var link = h[Math.floor(Math.random() * h.length)];
    data = await fetch(link).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/shotas.webp', data)
    res.sendFile(__path + '/tmp/shotas.webp')
      
      } else {
        res.sendFile(__path + '/views/key.html')
      }
    })

    router.get('/imagen', async (req, res, next) => {
      var apikey = req.query.apikey;
      var quero = req.query.quero;
      if (!apikey) return res.json(precisos.digitarapikey)
      if (listkey.includes(apikey)) {
        var { googleImage } = require("@bochilteam/scraper")
        var mol = await googleImage(quero)
        var lol = mol[Math.floor(Math.random() * mol.length)];
        var link = lol
        data = await fetch(link).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/shotas.webp', data)
        res.sendFile(__path + '/tmp/shotas.webp')
          
          } else {
            res.sendFile(__path + '/views/key.html')
          }
        })

        router.get('/lyrics', async (req, res, next) => {
          var apikey = req.query.apikey;
          var quero = req.query.quero;
          if (!apikey) return res.json(precisos.digitarapikey)
          if (listkey.includes(apikey)) {
             var { lyrics, lyricsv2 } = require("@bochilteam/scraper")
            var i = await lyricsv2(quero).catch(async _ => await lyrics(quero))
            var titulo = i.title
            var autor = i.author
            var link = i.link
            var letra = i.lyrics

                res.json({
                  creador: `${criador}`,
                  estado: '✓activo',
                  titulo,
                  autor,
                  link,
                  letra,

        
        
                })
              
              } else {
                res.sendFile(__path + '/views/key.html')
              }
            })

router.get('/mediafire', async (req, res, next) => {
          var apikey = req.query.apikey;
          var url = req.query.url;
          if (!apikey) return res.json(precisos.digitarapikey)
          if (listkey.includes(apikey)) {
            var { mediafiredl } = require ("@bochilteam/scraper")
            var i = await mediafiredl(url)
            var nombre = i.filename
            var peso = i.filesizeH
            var tipo = i.ext
            var filetype = i.filetype 
            var link = i.url
            var link_2 = i.url2
                res.json({
                  creador: `${criador}`,
                  estado: '✓activo',
                  result : {
                  nombre,
                  peso,
                  tipo,
                  filetype,
                  link,
                  link_2,
                  }
                })
              
              } else {
                res.sendFile(__path + '/views/key.html')
              }
            })
               
router.get('/pokemon', async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.url;
  if (!apikey) return res.json(precisos.digitarapikey)
  if (listkey.includes(apikey)) {
    var ala = [
      "Pokémon tiene apoyo y aprobación por parte del Vaticano",
      "Pikachu ocupó el segundo lugar en la lista “The Best People of 1999",
      "La evolución de Magikarp está basada en una leyenda china",
      "Los entrenadores Pareja Joven usan Pokémon que se complementan entre ellos",
      "Poliwhirl es el Pokémon favorito de Satoshi Tajiri", " Las películas de Pokémon siempre se estrenan en julio",
      "Las cartas de Pokémon fueron prohibidas en Arabia Saudí",
      "Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas.",
      "Al inicio eran 150 criaturas y hoy son más de 700.",
      "Pokémon tiene el acento en la sílaba “ké”, aunque muchos lo pronuncian en la sílaba “mon”.",
      "La Pokédex es una enciclopedia electrónica portátil que sirve para registrar automáticamente las fichas de todas las diversas especies Pokémon vistas y capturadas durante el viaje como entrenadores.",
      "En la etapa inicial del concepto su nombre era “Capsule Monster“",
      " Existe un avión Boeing 747 japonés decorado con dibujos de Pokémon.",
      "Un grupo de investigadores de la universidad de Osaka descubrió una proteína que sirve para transmitir la información visual al cerebro de manera más rápida y fue nombrada “Pikachurina” por la agilidad del pokémon Pikachu.",
      "El objetivo final del juego es llegar a ganar la Liga Pokémon y convertirse en el campeón regional",
      "Las evoluciones de los pokémon son transformaciones que cambian y/o mejoran algunas de sus habilidades y características.",
      "La evolución es irreversible, es decir, que el Pokémon evolucionado nunca podrá volver a su etapa anterior.",
      "Los entrenadores reciben un pokémon inicial o principiante para poder comenzar con su trayecto en el juego como regalo por parte del “profesor local”",
      "existe un debate en torno a cuál es el pokémon más poderoso, muchos consideran que es Arceus, el dios Pokémon.",
      "Aunque la mayoría de los Pokémon tienen al menos una evolución disponible, también existen Pokémon sin cadena evolutiva."
    ]
    var result = JSON.parse(fs.readFileSync("./libjson/pokemon.json"))
    var info = ala[Math.floor(Math.random() * ala.length)];
        res.json({
          creador: `${criador}`,
          estado: '✓activo',
          audio: 'https://www.cjoint.com/doc/23_08/MHvaeHOsk4I_ttsmaker-file-2023-8-20-18-24-49.mp3',
          audiobr: 'https://www.cjoint.com/doc/23_08/MHvaoFCDzLI_ttsmaker-file-2023-8-20-19-6-5.mp3',
          info,
          result,
        })
      
  } else {
    res.sendFile(__path + '/views/key.html')
  }
})

module.exports = router
