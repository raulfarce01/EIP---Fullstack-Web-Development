<?php

    session_start();

    if(isset($POST['disc']) && $POST['disc'] == 1){
 

        session_destroy();

        //print_r ($_SESSION);


    }
    
    if (isset($_POST['email']) && !empty($_POST['email'])) {
        
        if(isset($_POST['password']) && !empty($_POST['password'])){

            $email = $_POST['email'];
            $password = $_POST['password'];

        }else {
            $error = "La password no se ha introducido";
        }

    }else{
        $error = "El email no se ha insertado";
    }

    require_once "./modules/functions.php";

    if(isset($_POST["submit"])){

        if((isset($email) && !empty($email)) && (isset($password) && !empty($password))){

            if(validarEmail($email) && validarPassword($password)){

                //echo "hola";

                $loginOk = true;
    
            }else if(!validarEmail($email)){
                $error = "El formato de email no es correcto";

                $loginOk = false;

                //echo "$error";
            }else if(!validarPassword($password)){
                $error = "El formato de password no es correcto";

                $loginOk = false;


                //echo "$error";
            }

        }



    }


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda online PHP</title>
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html">LOGO</a>
        <ul class="nav justify-content-end">
            <a class="link" href="#" >Servicios</a>
            <a class="link" href="#" >Sobre nosotros</a>
            <a class="link" href="#" >Contacto</a>
            <li class="nav-item">
                <!-- <a class="btn btn-outline-light" href="#" >Login</a> -->
                <?php 
                
                    if(isset($_POST['submit'])){

                        if($loginOk){

                            $guardado = guardaImagen($_FILES['imagen']);

                            if(!isset($_POST['logout']) && $guardado != "false"){
    
                                echo "<div>
                            
                                    <img src='assets/images/".$guardado."' class='imagen'/>
                        
                                </div>";
    
                            }else{
    
                                $error = "Formato de imagen incorrecto";
    
                            }

                        }
                        

                    }

                ?>
                
            </li>
        </ul>
    </nav>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6">
                    <?php

                        if(!isset($loginOk)){
                            require_once "./modules/form.php";
                        }else if($loginOk && $guardado != "false"){
                            require_once "./modules/success.php";
                        }else{

                            if(!isset($error)){

                                $error = "Formato de imagen incorrecto";

                            }

                            require_once "./modules/form.php";
                            echo "<div class='alert alert-danger'>

                                $error

                            </div>";
                        }

                    ?>
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