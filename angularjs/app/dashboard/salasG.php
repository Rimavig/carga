<?php
include ("../conect_dashboard.php");
header("Content-type: application/json");
$re = $client2->getGeneral2("general","");
$resultado = "".$re;
$usuarios= explode(';;;',$resultado);
$acum=0;
$data=[array(0,0)];
$val=0;
foreach($usuarios as $llave => $valores) {
    if($acum==0){
        $acum=1;
        $usuario =explode(',,,',$valores);
        if (isset($usuario[1])) {
            $usuario =explode(',,,',$valores);
            $val=$usuario[1];
        } 
    } else   {
        if($acum==1){
            $data=[];
            $acum=2;
            $usuario =explode(',,,',$valores);
            if (isset($usuario[1])) {
                $usuario =explode(',,,',$valores);
                //$data[]=array(date('Y-m-d H:i:s',strtotime($usuario[0])),floatval($usuario[1]));
                $data[]=array(intval( $usuario[0]),floatval($val));
                $data[]=array(intval( $usuario[0]),floatval($usuario[1]));
                $val=0;
            } 
        }  else   {
            $usuario =explode(',,,',$valores);
            if (isset($usuario[1])) {
                $usuario =explode(',,,',$valores);
                //$data[]=array(date('Y-m-d H:i:s',strtotime($usuario[0])),floatval($usuario[1]));
                $data[]=array(intval( $usuario[0]),floatval($usuario[1]));
            } 
        }
    }    
    
} 
echo json_encode($data,JSON_PRETTY_PRINT); 
?>
<?php
$transport2->close();
?>