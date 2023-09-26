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

?>