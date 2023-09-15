<?php

    function infoUser($nombre, $edad){
        $mayor = "";

        if($edad >= 18){
            $mayor = "es mayor de edad";
        }else{
            $mayor = "no es mayor de edad";
        }

        $response = "$nombre tiene $edad años y $mayor";

        return $response;
    }

    function parImpar($num){
        $response = "";

        if($num%2 == 0){
            $response = "PAR";
        }else{
            $response = "IMPAR";
        }

        return $response;
    }

    function miMax($num1, $num2, $num3){
        $nums = [$num1, $num2, $num3];
        $cuenta = 0;
        $mayor = 0;

        for($i = 0; $i < count($nums); $i++){
             /* if($i+1 == count($nums)){
                 echo "$cuenta";
 
                $cuenta = 0;

                 echo "$cuenta";
            }else{
                $cuenta = $i+1;
                $cuenta;
            }

            //echo "  $nums[$i]  ";

            if($nums[$i] > $nums[$cuenta]){
                echo " /$cuenta/   $nums[$i] > $nums[$cuenta] |  ";
                $mayor = $nums[$i];

            } */

            //echo " $i $nums[$i] | ";


             for($j = 0; $j < 1; $j++){

                //echo "$nums[$i] ---> $nums[$j] | ";
                //echo " $j $nums[$j] | ";

                //echo " $nums[$j] | $nums[$i] ///// ";
                if($nums[$j] >= $nums[$i]){
                    $mayor = $nums[$j];

                    //echo " MAYOR $mayor + ";
                }else{

                    $mayor = $nums[$i];

                    //echo "MAYOR $nums[$i] + ";
                }
            } 
        }

        return $mayor;

    }

    function factorial($num){

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