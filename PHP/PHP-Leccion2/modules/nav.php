<?php 

 $url = $_SERVER['PHP_SELF'];

 $site = explode("/", $url);

?>

<nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="./index.php">LOGO</a>
        <ul class="nav justify-content-end">
            <a class="enlace <?php if ($site[5]=="servicios.php") { echo "active"; } ?>" href="./servicios.php" >Servicios</a>
            <a class="enlace <?php if ($site[5]=="contacto.php") { echo "active"; } ?>" href="./contacto.php" >Contacto</a>
            <li class="nav-item">
                <a class="btn btn-outline-light" href="#" >Login</a>
            </li>
        </ul>
    </nav>

<?php

/* echo $_SERVER['PHP_SELF'];
 */

 //echo $site[5];
?>