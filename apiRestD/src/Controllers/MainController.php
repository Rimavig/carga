<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Firebase\JWT\JWT;
use DateTime;

class MainController extends BaseController
{
    const KEY_CONST = "RimavigHotm@il003";

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6InJpbWF2aWcifX0.JthJwA5FaqTSGn3yYurhKOhG8hIiY70QOVhR2d5dwL4

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImNvcnBOYW1lIjoiUFJJTUFYIn19.dbiT-5Ilr5c4ApLRf7ZOA3IZT_oHqMYtMeWhe1W5-eE
    public function signInAdmin($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json');
        $json = $request->getBody();
        $body = json_decode($json, true);

        if (!(isset($body['id']) && isset($body['password']))) {
            $json = ["error" => "Debe proporcionar identificacion, password y tipo de usuario"];
            $response->getBody()->write(json_encode($json));
            return $response;
        }
        //conectar base y comprobar
        $_id = $body['id'];
        $sql = "SELECT password FROM info_s_usuarios where id=:id";
        $db = $this->container->get('db');
        $statement = $db->prepare($sql);
        $statement->bindValue(':id', $_id, \PDO::PARAM_STR);
        try {
            $result = $statement->execute();
        } catch (\PDOException $th) {
            $result = false;
        }
        if ($result) {
            $found = false;
            $contadorUsuarios = 0;
            $bandError = false;
            $bandConsulta = false;
            while ($row = $statement->fetch(\PDO::FETCH_ASSOC)) {
                $found = true;
                $dbpass = $row["password"];
                if (strcmp($dbpass, $body['password']) === 0 ) {
                    $contadorUsuarios++;
                }
            }
            if (!$found) {
                $user[]["status"] = "EMPTY";
                $response = $response->withStatus(401);
            } else {
                if ($contadorUsuarios > 0) {
                    $user[]["status"] = "OK";
                    //$key = "qr2020l1anM@v1G";
                    $payload = array(
                        "data" => [
                            'userId' => $_id,
                        ]
                    );
                    $jwt = JWT::encode($payload, self::KEY_CONST);
                    $user[]['token'] = $jwt;

                } else {
                    $user[]["status"] = "ERROR";
                    $response = $response->withStatus(401);
                }
            }

        } else {
            $user[]["status"] = "ERRORDB";
            $response = $response->withStatus(500);
        }
        $response->getBody()->write(json_encode($user));
        return $response;
    }

    public function createCorp($request, $response, $args){
        $userId = $request->getAttribute('userId');
        $db = $this->container->get('db');
        // VALIDACION DE TOKEN
        $sql = "SELECT * FROM info_s_usuarios WHERE id=:id";
        $statement = $db->prepare($sql);
        $statement->bindValue(':id', $userId, \PDO::PARAM_STR);
        try {
            $result = $statement->execute();
        } catch (\PDOException $th) {
            $result = false;
            return $response->withStatus(500);
        }
        if ($result && count($statement->fetchAll())==0){
            return $response->withStatus(403);
        }
        // FIN VALIDACION
        // Validacion de Body
        $json = $request->getBody();
        $body = json_decode($json, true);
        if (!isset($body["name"])){
            return $response->withStatus(400);
        }
        // FIN Validacion
        if (strpos($userId, "@Admin") !== false) {
            if (strpos($userId, "TuMundo") !== false) {
              $_name = strtoupper($body["name"])."PLTP-TuMundo";
            } else {
              $_name = strtoupper($body["name"])."PLT-Admin";
            }

        } else {
            if (strpos($userId, "TuMundo") !== false) {
              $_name = strtoupper($body["name"])."PLTD-TuMundo";
            } else {
              $_name = strtoupper($body["name"])."PLT";
            }
        }

        //Generacion Token
        $payload = array(
            "data" => [
                'corpName' => $_name,
            ]
        );
        $jwt = JWT::encode($payload, self::KEY_CONST);
        $fechaHoraActual = date("Y-m-d H:i:s");
        $fechaBase64 = base64_encode($fechaHoraActual);
        $stringConcatenado = $jwt . "2002" . $fechaBase64;
        // Fin Token
        $sql = "INSERT INTO info_corp (`name_corp`,`token`) VALUES (:name_corp, :token)";
        $statement = $db->prepare($sql);
        $statement->bindValue(':name_corp', $_name, \PDO::PARAM_STR);
        $statement->bindValue(':token', $stringConcatenado, \PDO::PARAM_STR);
        try {
            $result = $statement->execute();
        } catch (\PDOException $th) {
            $result = false;
            $errocode = $th->getCode();
            $response = $response->withHeader('Content-Type', 'application/json');
            $out["codigo"] = "201";
            $out["mensaje"] = $error_201_mensaje;
            $out["causa"] = $error_201_causa;
            $response->getBody()->write(json_encode($out));
            return $response->withStatus(500);
        }

        $response = $response->withHeader('Content-Type', 'application/json');
        $out["status"] = "OK";
        $out["token"] = $stringConcatenado;

        $response->getBody()->write(json_encode($out));
        return $response;
    }

    public function getToken($request, $response, $args){
       include("error.php");
        $response = $response->withHeader('Content-Type', 'application/json');
        $corpName = $request->getAttribute('corpName');
        $db = $this->container->get('db');
        // VALIDACION DE TOKEN
        $sql = "SELECT * FROM info_corp WHERE name_corp=:name_corp";
        $statement = $db->prepare($sql);
        $statement->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
        try {
            $result = $statement->execute();
            $sql = "DELETE FROM info_corp WHERE name_corp=:name_corp ";
            $statement1 = $db->prepare($sql);
            $statement1->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
            $result = $statement1->execute();
        } catch (\PDOException $th) {
            $result = false;
            return $response->withStatus(500);
        }
        if ($result && count($statement->fetchAll())==0){
            return $response->withStatus(401);
        }
        // FIN VALIDACION
        $json = $request->getBody();
        $body = json_decode($json, true);
        if (!(isset($body["cedula"]) && isset($body["nombre"]))){
            return $response->withStatus(400);
        }
        // FIN Validacion
        $_name = $body["cedula"];
        $nombre = $body["nombre"];
        if (strpos($corpName, "TuMundo") !== false) {
            if (strpos($corpName, "PLTD-TuMundo") !== false) {
                $_name2 =str_replace("PLTD-TuMundo", "", $corpName);;
            } else {
                $_name2 =str_replace("PLTP-TuMundo", "", $corpName);;
            }
        }else{
            return $response->withStatus(401);
        }

        if ($_name2!=$_name) {
          $out["error"] = "ERROR";
          $out["codigo"] = "101";
          $out["mensaje"] = $error_101_mensaje;
          $out["causa"] =  $error_101_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(500);
        }
        //Generacion Token
        $payload = array(
            "data" => [
                'corpName' => $_name,
            ]
        );
        $jwt = JWT::encode($payload, self::KEY_CONST);
        $fechaHoraActual = date("Y-m-d H:i:s");
        $fechaBase64 = base64_encode($fechaHoraActual);
        $stringConcatenado = $jwt . "2026" . $fechaBase64;
        // Fin Token
        $sql = "INSERT INTO info_corp (`name_corp`,`token`) VALUES (:name_corp, :token)";
        $statement = $db->prepare($sql);
        $statement->bindValue(':name_corp', $_name, \PDO::PARAM_STR);
        $statement->bindValue(':token', $stringConcatenado, \PDO::PARAM_STR);
        try {
            $result = $statement->execute();
            try {
              if (strpos($corpName, "PLTD-TuMundo") !== false) {
                  $sql = "INSERT INTO usuarios_prueba (`nombre`,`usuario`) VALUES (:nombre, :usuario)";
                  $statement = $db->prepare($sql);
                  $statement->bindValue(':nombre', $nombre, \PDO::PARAM_STR);
                  $statement->bindValue(':usuario', $_name, \PDO::PARAM_STR);
                  $result = $statement->execute();
              } else {
                  $sql = "INSERT INTO usuarios (`nombre`,`usuario`) VALUES (:nombre, :usuario)";
                  $statement = $db->prepare($sql);
                  $statement->bindValue(':nombre', $nombre, \PDO::PARAM_STR);
                  $statement->bindValue(':usuario', $_name, \PDO::PARAM_STR);
                  $result = $statement->execute();
              }
            } catch (\PDOException $th) {
              try {
                if (strpos($corpName, "PLTD-TuMundo") !== false) {
                    $sql = "UPDATE usuarios_prueba SET nombre=:nombre WHERE usuario=:usuario";
                    $statement = $db->prepare($sql);
                    $statement->bindValue(':nombre', $nombre, \PDO::PARAM_STR);
                    $statement->bindValue(':usuario', $_name, \PDO::PARAM_STR);
                    $result = $statement->execute();
                } else {
                    $sql = "UPDATE usuarios SET nombre=:nombre WHERE usuario=:usuario";
                    $statement = $db->prepare($sql);
                    $statement->bindValue(':nombre', $nombre, \PDO::PARAM_STR);
                    $statement->bindValue(':usuario', $_name, \PDO::PARAM_STR);
                    $result = $statement->execute();
                }
              } catch (\PDOException $th) {

              }
            }
        } catch (\PDOException $th) {
            $result = false;
            $errocode = $th->getCode();
            $response = $response->withHeader('Content-Type', 'application/json');
            $out[]["status"] = "ErrorServerCode: $errocode";
            $response->getBody()->write(json_encode($out));
            return $response->withStatus(500);
        }
        $t=4000;
        $out["status"] = "OK";
        $out["url"] = "https://pinlet.app/TuMundo/?token=".$stringConcatenado."&t=".$t;

        $response->getBody()->write(json_encode($out));
        return $response;
    }

    public function getPinlet($request, $response, $args){
        include("error.php");
        $response = $response->withHeader('Content-Type', 'application/json');
        $corpName = $request->getAttribute('corpName');
        $db = $this->container->get('db');
        // VALIDACION DE TOKEN
        $sql = "SELECT * FROM info_corp WHERE name_corp=:name_corp";
        $statement = $db->prepare($sql);
        $statement->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
        try {
            $result = $statement->execute();
            if ($result && count($statement->fetchAll())==0){
                return $response->withStatus(401);
            }
            $sql = "DELETE FROM info_corp WHERE name_corp=:name_corp ";
            $statement1 = $db->prepare($sql);
            $statement1->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
            $result = $statement1->execute();
        } catch (\PDOException $th) {
            $result = false;
            $out["error"] = "ERROR";
            $out["codigo"] = "100";
            $out["mensaje"] = $error_100_mensaje;
            $out["causa"] =  $error_100_causa;
            $response->getBody()->write(json_encode($out));
            return $response->withStatus(500);
        }

        // FIN VALIDACION
        $codigo = "ERROR";
        $fechaHoraActual = date("dHis");
        $cedula = $corpName;
        $codigo=$cedula."TTR";

        //$codigo=$cedula."TTR".$fechaHoraActual."DNS";
        $codigoF = base64_encode($codigo);
        $out["status"] = "OK";
        $out["codigo"] = $codigoF;
        $response->getBody()->write(json_encode($out));
        return $response;
    }
}
