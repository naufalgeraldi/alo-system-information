<?php

//==================================================================================
// Fungsi Melihat Laporan
//==================================================================================

function getLaporan(){

// $content=file_get_contents('https://78d3-158-140-175-239.ngrok.io/tampil'); //Ubah dengan url api yang digunakan
$content=file_get_contents('http://localhost:3000/'); //Ubah dengan url api yang digunakan

$result=json_decode($content,true);

foreach ($result as $value) {
   echo "id_laporan : ".$value['id_laporan']."<br>";
   echo "Nama : ".$value['nama']."<br>";
   echo "Telpon : ".$value['telpon']."<br>";
   echo "Email : ".$value['email']."<br>";
   echo "Lokasi : ".$value['lokasi']."<br>";
   echo "Jenis : ".$value['jenis']."<br>";
   echo "Deskripsi : ".$value['deskripsi']."<br><br><br>";
}

}

//==================================================================================
// Fungsi Mengirim Laporan
//==================================================================================

function postLaporan($nama, $telpon, $email,$lokasi,$jenis,$deskripsi) {
// $url = "https://8d3e-158-140-175-239.ngrok.io/tambah"; //Ubah dengan url api yang digunakan
$url = "http://localhost:3000/tambah"; //Ubah dengan url api yang digunakan

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Accept: application/json",
   "Content-Type: application/json",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$data = <<<DATA
{
  "nama":"$nama",
  "telpon":"$telpon",
  "email":"$email",
  "lokasi":"$lokasi",
  "jenis":"$jenis",
  "deskripsi":"$deskripsi"
}
DATA;

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

$resp = curl_exec($curl);
curl_close($curl);

}

?>