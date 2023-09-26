<?php
// Ítems del menú principal
$menu = ["Servicios","Sobre nosotros", "Contacto"];

// Array 2 dimensiones.
// Productos de la tienda
$products = [
    [
        "id" => 1,
        "title" => "Lenovo IdeaPad 3",
        "description" => "Lenovo IdeaPad 3 15IAU7 Intel Core i5-1235U/16GB/512GB SSD/15.6''",
        "img" => "https://thumb.pccomponentes.com/w-300-300/articles/1063/10639213/1359-lenovo-ideapad-3-15iau7-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg",
        "price" => 357
    ],
    [
        "id" => 2,
        "title" => "Logitech G502",
        "description" => "Logitech G502 Hero Ratón Gaming 25600DPI",
        "img" => "https://thumb.pccomponentes.com/w-300-300/articles/17/179806/244-logitech-g502-hero-raton-gaming-16000dpi-caracteristicas.jpg",
        "price" => 38.68
    ],
    [
        "id" => 3,
        "title" => "Google Nest Mini",
        "description" => "Google Nest Mini Altavoz Inteligente con Asistente Tiza",
        "img" => "https://thumb.pccomponentes.com/w-300-300/articles/24/243521/image-mini2-19-0403-0294-10-white-ttq-r04-simp.jpg",
        "price" => 22.89
    ],
    [
        "id" => 4,
        "title" => "HyperX Cloud Flight",
        "description" => "HyperX Cloud Flight Auriculares Gaming Inalámbricos",
        "img" => "https://thumb.pccomponentes.com/w-300-300/articles/1004/10042294/1601-hyperx-cloud-flight-auriculares-gaming-inalambricos.jpg",
        "price" => 69.99
    ],
    [
        "id" => 5,
        "title" => "AOC 24G2SAE",
        "description" => "AOC 24G2SAE/BK 23.8'' LED FullHD 165Hz FreeSync Premium",
        "img" => "https://thumb.pccomponentes.com/w-300-300/articles/1002/10026204/1597-aoc-27g2sae-bk-27-wled-fullhd-165hz-freesync-premium.jpg",
        "price" => 149.52
    ],
    [
        "id" => 6,
        "title" => "Silla Gaming",
        "description" => "AOC 24G2SAE/BK 23.8'' LED FullHD 165Hz FreeSync Premium",
        "img" => "Nacon CH-550 Silla Gaming",
        "price" =>  118.99
    ]
    
];


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda online PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="assets/css/style.css" rel="stylesheet"  >

</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html">LOGO</a>
        <ul class="nav justify-content-end">
            
            <a class="link" href="#" ><?php echo "$menu[0]"; ?></a>
            <a class="link" href="#" ><?php echo "$menu[1]"; ?></a>
            <a class="link" href="#" ><?php echo "$menu[2]"; ?></a>

            <li class="nav-item">
                <a class="btn btn-outline-light" href="#" >Login</a>
            </li>
        </ul>
    </nav>
    <main>
        <div class="container">
            <div class="row justify-content-around gap-3">
            <div class="card" style="width: 18rem;">
                    <img src="<?php echo $products[0]['img'] ?>" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $products[0]['title'] ?></h5>
                        <p class="card-text"><?php echo $products[0]['description'] ?><br>
                        <b> <?php echo $products[0]['price'] ?>€ </b></p>
                        <a href="#" class="btn btn-primary"> Ver </a>
                        <a href="#" class="btn btn-primary"> Añadir </a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="<?php echo $products[1]['img'] ?>" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $products[1]['title'] ?></h5>
                        <p class="card-text"><?php echo $products[1]['description'] ?><br>
                        <b>  <?php echo $products[1]['price'] ?>€ </b></p>
                        <a href="#" class="btn btn-primary"> Ver </a>
                        <a href="#" class="btn btn-primary"> Añadir </a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="<?php echo $products[2]['img'] ?>" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $products[2]['title'] ?></h5>
                        <p class="card-text"><?php echo $products[2]['description'] ?><br>
                        <b> <?php echo $products[2]['price'] ?>€ </b></p>
                        <a href="#" class="btn btn-primary"> Ver </a>
                        <a href="#" class="btn btn-primary"> Añadir </a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="<?php echo $products[3]['img'] ?>" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $products[3]['title'] ?></h5>
                        <p class="card-text"><?php echo $products[3]['description'] ?><br>
                        <b> <?php echo $products[3]['price'] ?> </b></p>
                        <a href="#" class="btn btn-primary"> Ver </a>
                        <a href="#" class="btn btn-primary"> Añadir </a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="<?php echo $products[4]['img'] ?>" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $products[4]['title'] ?></h5>
                        <p class="card-text"><?php echo $products[4]['description'] ?><br>
                        <b> <?php echo $products[4]['price'] ?>€ </b></p>
                        <a href="#" class="btn btn-primary"> Ver </a>
                        <a href="#" class="btn btn-primary"> Añadir </a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="<?php echo $products[5]['img'] ?>" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $products[5]['title'] ?></h5>
                        <p class="card-text"><?php echo $products[5]['description'] ?><br>
                        <b> <?php echo $products[5]['price'] ?>€ </b></p>
                        <a href="#" class="btn btn-primary"> Ver </a>
                        <a href="#" class="btn btn-primary"> Añadir </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4">Autor: Sí, yo </div>
            </div>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>


    
</body>
</html>