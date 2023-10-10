<?php 

function validarEmail($email){

    $emailOk = false;

    if(preg_match("/^([a-z]|[0-9]|\_|\-|)+@[a-z]+\.[a-z]+/i", $email)){
        $emailOk = true;
    }

    //echo "entra 1";

    return $emailOk;

}

function validarPassword($password){

    $passwordOk = false;

    if(!stristr($password, "password") && !stristr($password, "123456")){

        if(preg_match("/^([a-z]|[1-9]){6,}/", $password)){

            $passwordOk = true;

        }

    }

    //echo "entra 2";


    return $passwordOk;

}

function guardaImagen($imagen){

    //print_r($imagen);

    $destino = "assets/images/".$imagen['name'];

    $origen = $imagen['tmp_name'];

    if($imagen['type'] == "image/jpeg" || $imagen['type'] == "image/jpg" || $imagen['type'] == "image/png"){

        if(move_uploaded_file($origen, $destino)){

            echo "<script>console.log(`archivo subido`)</script>";
    
            $contenido = scandir("assets/images");
    
            foreach($contenido as $pos => $item){
    
                if($pos < 2){
                    continue;
                }
    
                $url = "assets/images/$item";
    
            }
    
            return $imagen['name'];
    
        }

    }else{

        return "false";

    }

}

?>