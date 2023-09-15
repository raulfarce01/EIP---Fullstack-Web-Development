<?php

    /*
    Función que muestra una frase de tipo {nombre} tiene {edad} años y es mayor/menor de edad
    @params $nombre: String | contiene el nombre del usuario del que vamos a sacar la info
    @params $edad: Integer | almacena la edad del user, y la usaremos para identificar si es mayor de edad o no
    @return $response: String | Devuelve la cadena de texto deseada con toda la información colocada
    */
    function infoUser(string $nombre, int $edad){
        $mayor = "";

        if($edad >= 18){
            $mayor = "es mayor de edad";
        }else{
            $mayor = "no es mayor de edad";
        }

        $response = "$nombre tiene $edad años y $mayor";

        return $response;
    }

    /*
    Función que dice si un número es par o impar
    @params $num: Integer | Contiene el número a identificar
    @return $response: String | Devuelve el texto PAR/IMPAR en función del resultado de la operación
    */
    function parImpar(int $num){
        $response = "";

        if($num%2 == 0){
            $response = "PAR";
        }else{
            $response = "IMPAR";
        }

        return $response;
    }

    /*
    Función que saca el mayor número de 3 que se le pasen
    @params $num1, num2, num3: Integer | Son los números a comparar
    @return $mayor: Integer | Es el mayor número de los 3
    */
    function miMax(int $num1, int $num2, int $num3){
        $nums = [$num1, $num2, $num3];
        $cuenta = 0;
        $mayor = 0;

        for($i = 0; $i < count($nums); $i++){

            //echo $i;
            //echo "adios";

            //Comprobamos que el índice llegue al final para comparar el número final con el primero
            if($i == count($nums)-1){

                //echo "hola1  ";

                //echo " $nums[$i] > $nums[0] | ";
                
                if($nums[$i] > $nums[0]){

                    $mayor = $nums[$i];

                    //echo "hola";
    
                }else{

                    //Comprobamos que el número en la primera posición, no sea mayor que el que ya está definido como tal, ya que podría comparar el número de la posición 0 con el de la final, sin pasar por el de en medio, y asignar uno de los dos
                    if($nums[0] > $mayor){

                        $mayor = $nums[0];
                    
                    }


                }


            }else{

                //echo "hola2";

                //echo " $nums[$i] > ". $nums[$i+1] ." | ";

                if($nums[$i] > $nums[$i+1]){

                    $mayor = $nums[$i];

                    //echo "hola";
    
                }

            }

                

        }

        return $mayor;

    }

    /*
    Función que devuelve la operación factorial de un número
    @params $num: Integer | contiene el número que en el front se solicita para calcular el factorial
    @return $factorial: Integer | Devuelve el resultado de la operación
    */
    function factorial(int $num){

        $factorial = 1;

        //echo $num;

        if($num == 0){
            $factorial = 1;
        }else if($num < 0){
            $factorial = 0;
        }else{
           
            for ($i=1; $i <= $num ; $i++) { 
                $factorial *= $i;
            }

        }

        return $factorial;

    }

?>