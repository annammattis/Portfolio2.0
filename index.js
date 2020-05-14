const express = require('express')
const path = require('path')
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'parallax-template')))
  .set('js', path.join(__dirname, 'js'))
  .set('js')
  .get('/', (req, res) => res.render('parallax-template/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/times', (req, res) => res.send(showTimes()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  showTimes = () => {
    let result = '';
    const times = process.env.TIMES || 5;
    for (i = 0; i < times; i++) {
      result += i + ' ';
    }
    return result;
  }