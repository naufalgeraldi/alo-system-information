<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $pagename = '';
    $websiteName = ' - Website';

    $currentPage = basename($_SERVER['SCRIPT_NAME'], '.php');

    if ($currentPage == 'index') {
        $currentPage = 'Home';
    }

    if ($currentPage == 'portofolio') {
        $currentPage = 'Portofolio';
    }

    if ($currentPage == 'gallery') {
        $currentPage = 'Gallery';
    }

    if ($currentPage == 'contact') {
        $currentPage = 'Contact';
    }
    ?>

    <title><?php echo $currentPage . '' . $websiteName ?></title>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <link rel="icon" type="image/svg+xml" href="img/leaves.png">

    <link href="css/style_tmp2.css" rel="stylesheet">
    <script src="js/script.js"></script>

</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <h3>Logo</h3>
                    <!-- <a href="index.php"><img src="" alt="" class="logo"></a> -->
                </ul>

                <ul class="navbar-nav">
                    <li>
                        <a class="nav-link <?php if ($currentPage == "Home") { ?>active<?php } ?>" aria-current="page" href="index.php"><span>Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($currentPage == "Portofolio") { ?>active<?php } ?>" href="portofolio.php"><span>Portofolio</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($currentPage == "Gallery") { ?>active<?php } ?>" href="gallery.php"><span>Gallery</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($currentPage == "Tentang") { ?>active<?php } ?>" href="contact.php"><span>Contact</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="mb-4"></div>

    <?php require 'template/function.php'; ?>