<?php

        $_SESSION['email'] = $_POST['email'];
        $_SESSION['password'] = $_POST['password'];

        // Para borrar sesión tras inactividad
        if (!isset($_SESSION['tiempo'])) {
                $_SESSION['tiempo'] = time();
        }
        else if (time() - $_SESSION['tiempo'] > 180) {
                session_destroy();
                /* Aquí redireccionas a la url especifica */
                header("Location: index.php");
        die();  
        }
        $_SESSION['tiempo']=time();

        $emailMuestra = explode("@",$_SESSION['email']);

?>

<div class='alert alert-success d-flex justify-content-center'>

        Bienvenido <?php echo $emailMuestra[0]; ?>

</div>

<div>

        <?php
        
/*                 print_r($_SESSION);
 */        

        if(isset($_SESSION['email'])){

        ?>

        <div class="d-flex">
                <p class="fit-content">Email: </p> 
                <p class="fit-content mx-2"><?php echo $_SESSION['email']; ?></p>
        </div>

        <div class="d-flex">
                <p class="fit-content">Password: </p> 
                <p class="fit-content mx-2"><?php echo $_SESSION['password']; ?></p>
        </div>

        <div class="m-center fit-content">
                <?php
        
                echo "<img src='assets/images/".$guardado."' class='imagenTocha'/>";

                ?>
        </div>

        <form method="POST" action='./index.php'>
                <input type='hidden' name='disc' value='1'>
                <button type='submit' class='btn btn-outline-danger' name='logout'>Logout</button>
        </form>

        <?php

        }else{

                header('Location: ../index.php');

        }

        ?>

</div>