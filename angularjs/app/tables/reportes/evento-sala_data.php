<?php
include ("../../conect.php");
include ("../../autenticacion.php");
include ("../../conect_dashboard.php");
header("Content-type: application/json");
$re = $client->getPerfilRol($_SESSION["id"],"78");
$resultado = "".$re;
$usuarios1= explode(',',$resultado);
$editar="";
$eliminar="";
$estado="";
$reset="";

foreach($usuarios1 as $llave => $valores1) {
    if($valores1==="2"){
        $editar='<a class="editarTotalSala btn btn-sm btn-dark" style="margin: 5px 0px;  "  href="javascript:;"><i class="icon-note"></i></a>';
    }
}
$re = $client2->getGeneral("getTotalSala");
$resultado= "".$re;
$usuarios =explode(';;',$resultado);
$datat=NULL;
$data=[];
$text=$editar." ".$eliminar." ".$estado;   
foreach($usuarios as $llave => $valores) {
    $usuario =explode(',,,',$valores);
    if (isset($usuario[2])) {
        $data[]=array($usuario[0],$usuario[1],$usuario[2],$usuario[3],$text);
    } 
} 
$dataT['data']=$data;   
echo json_encode($dataT,JSON_PRETTY_PRINT); 
?>
<?php
$transport->close();
$transport2->close();
?>