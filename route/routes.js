const express = require('express');
const router = express.Router();
const { data } = require('./data')

//gambar response 1
router.get('/report', (req,res) => {
  const tgl_masuk = (new Date().toLocaleDateString())
  const jam_masuk = (new Date().toLocaleTimeString())


  const plat = data.map(val => val.plat_nomor)

  const hasil = [
      {
          plat_nomor : plat[0],
          parking_lot : 'A1',
          tanggal_masuk : tgl_masuk + ' ' + jam_masuk
      }
  ]
  res.send(hasil)
})


//gambar response 2
router.get('/report/keluar', (req,res) => {
  const tgl_masuk = "2019-4-3 19:23:53"
  const tgl_keluar = (new Date().toLocaleDateString())
  const jam_keluar = (new Date().toLocaleTimeString())


  const plat = data.map(val => val.plat_nomor)
  
  //pencarian
  const cari_plat = plat[0]
  
  const hasil = [
      {
          plat_nomor : cari_plat,
          tanggal_masuk : tgl_masuk,
          tanggal_keluar : tgl_keluar + ' ' + jam_keluar,
          jumlah_bayar: "45000"
      }
  ]
  res.send(hasil)
})


//gambar response 3
router.get('/report/jml_mobil', (req,res) => {
    const tipe = data.map(val => val)
    
    //pencarian tipe mobil
    const cari_tipe = tipe[0].tipe
    console.log(cari_tipe);
     
    const hasil = [
        {
            jumlah_kendaraan :1
        }
    ]
    res.send(hasil)
  })


//gambar response 4
router.get('/report/list_kendaraan', (req, res) => {
    const warna = data.map(val => val)

    //pencarian warna mobil
    const cari_warna = warna[0].warna
    console.log(cari_warna);

    
    const hasil = [{
        plat_nomor: warna[0].plat_nomor
    }]
    res.send(hasil)
})


module.exports = router