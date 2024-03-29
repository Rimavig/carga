<?php

use Slim\Routing\RouteCollectorProxy;

//MIDDLEWARE
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Slim\Psr7\Response;
use Firebase\JWT\JWT;
//




$app->group('/v1', function (RouteCollectorProxy $group) {
    $mw_admin = function (Request $request, RequestHandler $handler) {
        //error response//////////////////////////
        $e_response = new Response();
        /////////////////////////////////////////
        //eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6InJpbWF2aWcifX0.JthJwA5FaqTSGn3yYurhKOhG8hIiY70QOVhR2d5dwL4
        //$jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6IjA5NTg5NDIwMDYifX0.5t7psQM_ZdCmJPTnK-MeR2EgbgvDw42eyZFldCx116k";
        $key = "RimavigHotm@il003";
        if (!$request->hasHeader('Authorization')) {
            return $e_response->withStatus(401);
        }
        $auth = $request->getHeader('Authorization');
        $jwt = str_replace("Bearer ", "", $auth[0]);

        try {
            $decoded = (array) ((array) JWT::decode($jwt, $key, array('HS256')))['data']; //{data: {userId: {}}}
        } catch (\Throwable $th) {
            return $e_response->withStatus(401);
        }
        //print_r($decoded['userId']);
        $request = $request->withAttribute('userId', $decoded['userId']);
        $e_response = $e_response->withHeader('Content-Type', 'application/json');
        $response = $handler->handle($request);
        return $response;
    };
    $mw_corp = function (Request $request, RequestHandler $handler) {
        //error response//////////////////////////
        $e_response = new Response();
        /////////////////////////////////////////
        //$jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6IjA5NTg5NDIwMDYifX0.5t7psQM_ZdCmJPTnK-MeR2EgbgvDw42eyZFldCx116k";
        $key = "RimavigHotm@il003";
        if (!$request->hasHeader('Authorization')) {
            return $e_response->withStatus(401);
        }
        $auth = $request->getHeader('Authorization');
        $jwt = str_replace("Bearer ", "", $auth[0]);
        try {
            $posicion2026 = strpos($jwt, "2002");
            if ($posicion2026 !== false) {
                // Divide el string en dos partes a partir de "2026"
                $parte1 = substr($jwt, 0, $posicion2026);
                $parte2 = substr($jwt, $posicion2026);
                $stringSin2026 = str_replace("2002", "", $parte2);
                $fechaDecodificada = base64_decode($stringSin2026);
                $fechaObjeto = new DateTime($fechaDecodificada);
                // Obtener la fecha y hora actual
                $fechaActual = new DateTime();
                // Calcular la diferencia en minutos entre las dos fechas
                $intervalo = $fechaActual->diff($fechaObjeto);
                $minutosDiferencia = $intervalo->i;
                if ($minutosDiferencia <= 3) {
                    $decoded = (array) ((array) JWT::decode($parte1, $key, array('HS256')))['data']; //{data: {userId: {}}}
                } else {
                      return $e_response->withStatus(401);
                }

            } else {
                return $e_response->withStatus(401);
            }

        } catch (\Throwable $th) {

            return $e_response->withStatus(401);
        }
        //print_r($decoded['userId']);
        if (!isset($decoded['corpName'])){
            return $e_response->withStatus(403);
        }
        $request = $request->withAttribute('corpName', $decoded['corpName']);
        $e_response = $e_response->withHeader('Content-Type', 'application/json');
        $response = $handler->handle($request);
        return $response;
    };
    $mw_pinlet = function (Request $request, RequestHandler $handler) {
        //error response//////////////////////////
        $e_response = new Response();
        /////////////////////////////////////////
        //$jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6IjA5NTg5NDIwMDYifX0.5t7psQM_ZdCmJPTnK-MeR2EgbgvDw42eyZFldCx116k";
        $key = "RimavigHotm@il003";
        if (!$request->hasHeader('Authorization')) {
            return $e_response->withStatus(401);
        }
        $auth = $request->getHeader('Authorization');
        $jwt = str_replace("Bearer ", "", $auth[0]);
        // Encuentra la posición de "2026"

        try {
            $posicion2026 = strpos($jwt, "2026");
            if ($posicion2026 !== false) {
                // Divide el string en dos partes a partir de "2026"
                $parte1 = substr($jwt, 0, $posicion2026);
                $parte2 = substr($jwt, $posicion2026);
                $stringSin2026 = str_replace("2026", "", $parte2);
                $fechaDecodificada = base64_decode($stringSin2026);
                $fechaObjeto = new DateTime($fechaDecodificada);
                // Obtener la fecha y hora actual
                $fechaActual = new DateTime();
                // Calcular la diferencia en minutos entre las dos fechas
                $intervalo = $fechaActual->diff($fechaObjeto);
                $minutosDiferencia = $intervalo->i;
                if ($minutosDiferencia <= 3) {
                    $decoded = (array) ((array) JWT::decode($parte1, $key, array('HS256')))['data']; //{data: {userId: {}}}
                } else {
                      return $e_response->withStatus(401);
                }

            } else {
                return $e_response->withStatus(401);
            }

        } catch (\Throwable $th) {

            return $e_response->withStatus(401);
        }
        //print_r($decoded['userId']);
        if (!isset($decoded['corpName'])){
            return $e_response->withStatus(403);
        }
        $request = $request->withAttribute('corpName', $decoded['corpName']);
        $e_response = $e_response->withHeader('Content-Type', 'application/json');
        $response = $handler->handle($request);
        return $response;
    };

    $group->post('/createToken', 'App\Controllers\MainController:createCorp')->add($mw_admin);
    $group->post('/adminsignin', 'App\Controllers\MainController:signInAdmin'); //->add($mw);
    $group->post('/getUrl', 'App\Controllers\MainController:getToken')->add($mw_corp);
    $group->get('/getPinlet', 'App\Controllers\MainController:getPinlet')->add($mw_pinlet);
    $group->post('/addInvitation', 'App\Controllers\MainController:addInvitation')->add($mw_corp);
    $group->post('/deleteInvitation', 'App\Controllers\MainController:deleteInvitation')->add($mw_corp);
    $group->post('/updateInvitation', 'App\Controllers\MainController:updateInvitation')->add($mw_corp);
    $group->post('/updateStatusInvitation', 'App\Controllers\MainController:updateStatusInvitation')->add($mw_corp);
    $group->post('/getInvitation', 'App\Controllers\MainController:getInvitation')->add($mw_corp);
    $group->post('/getGroupInvitation', 'App\Controllers\MainController:getGroupInvitation')->add($mw_corp);

      header('Access-Control-Allow-Origin:  *');
     header( 'Access-Control-Allow-Headers: Authorization, Content-Type' );
     //header('Access-Control-Allow-Origin','http://localhost:4200');
     header('Access-Control-Allow-Methods: *');
     header('Access-Control-Allow-Credentials: true');
     if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
           header('HTTP/1.1 200 OK');
         exit();
       }
});
