<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leccion 4</title>
</head>

<body>

    <?php

    require "./modules/functions.php";
    
        $usuario = infoUser("Raúl", 22);

        echo "+ $usuario </br>";

        $usuario = infoUser("Pedro", 17);

        echo "- $usuario </br>";

        $usuario = infoUser("Raúl", 18);

        echo "+ $usuario </br></br>";

        $parImpar = parImpar(8);

        echo "+ $parImpar </br>";

        $parImpar = parImpar(5);

        echo "- $parImpar </br></br>";

        $max = miMax(3, 5, 1);

        echo "5 $max </br>";

        $max = miMax(-2, 3, 8);

        echo "8 $max </br>";

        $max = miMax(10, 3, 2);

        echo "10 $max </br></br>";

        $factorial = factorial(3);

        echo "$factorial </br>";

        $factorial = factorial(5);

        echo "$factorial";

    ?>

</body>

</html>