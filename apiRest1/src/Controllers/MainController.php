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
        $_name = strtoupper($body["name"])."PLT";
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
            $out["status"] = "ErrorServerCode: $errocode";
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
        if (!(isset($body["cedula"]))){
            return $response->withStatus(400);
        }
        // FIN Validacion
        $_name = $body["cedula"];
        $_name2 =str_replace("PLT", "", $corpName);;
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
        } catch (\PDOException $th) {
            $result = false;
            $errocode = $th->getCode();
            $response = $response->withHeader('Content-Type', 'application/json');
            $out[]["status"] = "ErrorServerCode: $errocode";
            $response->getBody()->write(json_encode($out));
            return $response->withStatus(500);
        }


        $out["status"] = "OK";
        $out["url"] = "https://pinlet.app?token=".$stringConcatenado;

        $response->getBody()->write(json_encode($out));
        return $response;
    }

    public function addInvitation($request, $response, $args){
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

        } catch (\PDOException $th) {
            $result = false;
            return $response->withStatus(500);
        }
        if ($result && count($statement->fetchAll())==0){
          $out["error"] = "ERROR";
          $out["codigo"] = "101";
          $out["mensaje"] = $error_101_mensaje;
          $out["causa"] = $error_101_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(401);
        }else{
          //$sql = "DELETE FROM info_corp WHERE name_corp=:name_corp ";
          //$statement1 = $db->prepare($sql);
          //$statement1->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
          //$result = $statement1->execute();
        }
        // FIN VALIDACION
        $json = $request->getBody();
        $body = json_decode($json, true);
        if (!(isset($body["id_place"]) && isset($body['resident']) && isset($body['visitor']) && isset($body['id']) && isset($body['license_plate'])
        && isset($body['observation']) && isset($body['type'])  && isset($body['id_diners']) && isset($body['start_date']) && isset($body['end_date']))){
          $out["error"] = "ERROR";
          $out["codigo"] = "201";
          $out["mensaje"] = $error_201_mensaje;
          $out["causa"] = $error_201_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }
        // FIN Validacion
        $id_place = $body["id_place"];
        $id_diners = $body["id_diners"];
        $resident = $body["resident"];
        $visitor = $body["visitor"];
        $id = $body["id"];
        $license_plate = $body["license_plate"];
        $observation = $body["observation"];
        $type = $body["type"];
        $start_date = $body["start_date"];
        $end_date = $body["end_date"];
        $current_datetime = new DateTime();
        $start_datetime = DateTime::createFromFormat('Y-m-d H:i:s', $start_date);
        $end_datetime = DateTime::createFromFormat('Y-m-d H:i:s', $end_date);
        if (!$start_datetime || !$end_datetime) {
            $errors[] = "Invalid date format.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Fechas incorrectas";
            $out["causa"] = $error_201_causa;
        } elseif ($start_datetime > $end_datetime) {
            $errors[] = "Start date must be earlier than end date.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Fechas incorrectas";
            $out["causa"] = $error_201_causa;
        } elseif ($start_datetime < $current_datetime) {
            $errors[] = "Start date must be in the future.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Fechas inicio incorrecta";
            $out["causa"] = $error_201_causa;
        }
        if (strlen($id) <= 1) {
            $errors[] = "ID must have more than 5 characters.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Id no puede estar vacio";
            $out["causa"] = $error_201_causa;
        }

        if (strlen($resident) <= 1) {
            $errors[] = "Resident must have more than 1 characters.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Resident no puede estar vacio";
            $out["causa"] = $error_201_causa;
        }

        if (!preg_match('/^[a-zA-Z]+\s[a-zA-Z]+$/', $visitor)) {
          $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Visitante debe tener Nombre y Apellido";
            $out["causa"] = $error_201_causa;
            $errors[] = "Visitor must be in the format 'Firstname Lastname'.";
        }

        if (strlen($type) !== 1) {
            $errors[] = "Type must be a single character.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Tipo de servicio es incorrecto";
            $out["causa"] = $error_201_causa;
        }

        if (!DateTime::createFromFormat('Y-m-d H:i:s', $start_date)) {
            $errors[] = "Start date is not in the correct format.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Formato incorrecto start date";
            $out["causa"] = $error_201_causa;
        }

        if (!DateTime::createFromFormat('Y-m-d H:i:s', $end_date)) {
          $out["error"] = "ERROR";
          $out["codigo"] = "201";
          $out["mensaje"] = "Formato incorrecto end date";
          $out["causa"] = $error_201_causa;
        }

        if (empty($errors)) {
          // Fin Token
          $sql = "INSERT INTO pl_invitacion_normal (`id_lugar`,`id_invitacion_diners`,`socio`,`visitante`,`cedula`,`placa`,`observacion`,`tipo`,`fecha_inicio`,`fecha_termino`)
          VALUES (:id_place, :id_diners, :resident, :visitor, :id, :license_plate, :observation, :type, :start_date, :end_date)";
          $statement = $db->prepare($sql);
          $statement->bindValue(':id_place', $id_place, \PDO::PARAM_STR);
          $statement->bindValue(':id_diners', $id_diners, \PDO::PARAM_STR);
          $statement->bindValue(':resident', $resident, \PDO::PARAM_STR);
          $statement->bindValue(':visitor', $visitor, \PDO::PARAM_STR);
          $statement->bindValue(':id', $id, \PDO::PARAM_STR);
          $statement->bindValue(':license_plate', $license_plate, \PDO::PARAM_STR);
          $statement->bindValue(':observation', $observation, \PDO::PARAM_STR);
          $statement->bindValue(':type', $type, \PDO::PARAM_STR);
          $statement->bindValue(':start_date', $start_date, \PDO::PARAM_STR);
          $statement->bindValue(':end_date', $end_date, \PDO::PARAM_STR);
          try {
              $result = $statement->execute();
              $id_invitacion=$db->lastInsertId();
          } catch (\PDOException $th) {
              $out["error"] = "ERROR";
              $out["codigo"] = "201";
              $out["mensaje"] = $error_201_mensaje;
              $out["causa"] = $error_201_causa;
              $response->getBody()->write(json_encode($out));
              return $response->withStatus(400);
          }

          $out["status"] = "OK";
          $out["message"] = $status_insert;
          $out["id_invitation"] = $id_invitacion;
        }else{
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }

        $response->getBody()->write(json_encode($out));
        return $response;
    }

    public function getInvitation($request, $response, $args){
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

        } catch (\PDOException $th) {
            $result = false;
            return $response->withStatus(500);
        }
        if ($result && count($statement->fetchAll())==0){
          $out["error"] = "ERROR";
          $out["codigo"] = "101";
          $out["mensaje"] = $error_101_mensaje;
          $out["causa"] = $error_101_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(401);
        }else{
          //$sql = "DELETE FROM info_corp WHERE name_corp=:name_corp ";
          //$statement1 = $db->prepare($sql);
          //$statement1->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
          //$result = $statement1->execute();
        }
        // FIN VALIDACION
        $json = $request->getBody();
        $body = json_decode($json, true);
        if (!(isset($body["id_invitation"]))){
          $out["error"] = "ERROR";
          $out["codigo"] = "201";
          $out["mensaje"] = $error_201_mensaje;
          $out["causa"] = $error_201_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }
        // FIN Validacion
        $id_invitation = $body["id_invitation"];
        try {
            $sql = "SELECT * FROM pl_invitacion_normal i WHERE id_invitacion_normal = :id_invitation";
            $statement = $db->prepare($sql);
            $statement->bindValue(':id_invitation',  $id_invitation, \PDO::PARAM_STR);
            $result = $statement->execute();
            while($item = $statement->fetch()){
                $out["id_invitation"] =  $id_invitation;
                $out["id_place"] = $item->id_lugar;
                $out["id_diners"] = $item->id_invitacion_diners;
                $out["resident"] = $item->socio;
                $out["visitor"] = $item->visitante;
                $out["id"] = $item->cedula;
                $out["license_plate"] = $item->placa;
                $out["observation"] = $item->observacion;
                $out["type"] = $item->tipo;
                $out["start_date"] = $item->fecha_inicio;
                $out["end_date"] = $item->fecha_termino;
                $out["status"] = $item->estado;
                $out["entry_date"] = $item->fecha_ingreso;
                $out["exit_date"] = $item->fecha_salida;
                $response->getBody()->write(json_encode($out));
                return $response;
            }
            $out["error"] = "ERROR";
            $out["codigo"] = "204";
            $out["mensaje"] = $error_204_mensaje;
            $out["causa"] = $error_204_causa;
            $response->getBody()->write(json_encode($out));
            return $response->withStatus(400);
        } catch (\PDOException $th) {
            $out["error"] = "ERROR";
            $out["codigo"] = "204";
            $out["mensaje"] = $error_204_mensaje;
            $out["causa"] = $error_204_causa;
            $response->getBody()->write(json_encode($out));
            return $response->withStatus(400);
        }
        return $response;
    }

    public function getGroupInvitation($request, $response, $args){
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

        } catch (\PDOException $th) {
            $result = false;
            return $response->withStatus(500);
        }
        if ($result && count($statement->fetchAll())==0){
          $out["error"] = "ERROR";
          $out["codigo"] = "101";
          $out["mensaje"] = $error_101_mensaje;
          $out["causa"] = $error_101_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(401);
        }else{
          //$sql = "DELETE FROM info_corp WHERE name_corp=:name_corp ";
          //$statement1 = $db->prepare($sql);
          //$statement1->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
          //$result = $statement1->execute();
        }
        // FIN VALIDACION
        $json = $request->getBody();
        $body = json_decode($json, true);
        if (!(isset($body["id_diners"]))){
          $out["error"] = "ERROR";
          $out["codigo"] = "201";
          $out["mensaje"] = $error_201_mensaje;
          $out["causa"] = $error_201_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }
        // FIN Validacion
        $id_diners = $body["id_diners"];
        try {
            $sql = "SELECT * FROM pl_invitacion_normal i WHERE id_invitacion_diners = :id_diners";
            $statement = $db->prepare($sql);
            $statement->bindValue(':id_diners',  $id_diners, \PDO::PARAM_STR);
            $result = $statement->execute();
            $out=[] ;
            while($item = $statement->fetch()){

                $out1["id_invitation"] =  $item->id_invitacion_normal;
                $out1["id_place"] = $item->id_lugar;
                $out1["id_diners"] = $item->id_invitacion_diners;
                $out1["resident"] = $item->socio;
                $out1["visitor"] = $item->visitante;
                $out1["id"] = $item->cedula;
                $out1["license_plate"] = $item->placa;
                $out1["observation"] = $item->observacion;
                $out1["type"] = $item->tipo;
                $out1["start_date"] = $item->fecha_inicio;
                $out1["end_date"] = $item->fecha_termino;
                $out1["status"] = $item->estado;
                $out1["entry_date"] = $item->fecha_ingreso;
                $out1["exit_date"] = $item->fecha_salida;
                $out[] = $out1
                ;
            }
            $response->getBody()->write(json_encode($out));
            return $response;
        } catch (\PDOException $th) {
            $out["error"] = "ERROR";
            $out["codigo"] = "204";
            $out["mensaje"] = $error_204_mensaje;
            $out["causa"] = $error_204_causa;
            $response->getBody()->write(json_encode($out));
            return $response->withStatus(400);
        }
        return $response;
    }

    public function updateInvitation($request, $response, $args){
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

        } catch (\PDOException $th) {
            $result = false;
            return $response->withStatus(500);
        }
        if ($result && count($statement->fetchAll())==0){
          $out["error"] = "ERROR";
          $out["codigo"] = "101";
          $out["mensaje"] = $error_101_mensaje;
          $out["causa"] = $error_101_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(401);
        }else{
          //$sql = "DELETE FROM info_corp WHERE name_corp=:name_corp ";
          //$statement1 = $db->prepare($sql);
          //$statement1->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
          //$result = $statement1->execute();
        }
        // FIN VALIDACION
        $json = $request->getBody();
        $body = json_decode($json, true);
        if (!(isset($body["id_invitation"]) && isset($body['visitor']) && isset($body['id']) && isset($body['license_plate'])
        && isset($body['observation']) && isset($body['type'])  && isset($body['id_diners']) && isset($body['start_date']) && isset($body['end_date']))){
          $out["error"] = "ERROR";
          $out["codigo"] = "201";
          $out["mensaje"] = $error_201_mensaje;
          $out["causa"] = $error_201_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }
        // FIN Validacion
        $id_invitation = $body["id_invitation"];
        $id_diners = $body["id_diners"];
        $visitor = $body["visitor"];
        $id = $body["id"];
        $license_plate = $body["license_plate"];
        $observation = $body["observation"];
        $type = $body["type"];
        $start_date = $body["start_date"];
        $end_date = $body["end_date"];
        $current_datetime = new DateTime();
        $start_datetime = DateTime::createFromFormat('Y-m-d H:i:s', $start_date);
        $end_datetime = DateTime::createFromFormat('Y-m-d H:i:s', $end_date);
        if (!$start_datetime || !$end_datetime) {
            $errors[] = "Invalid date format.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Fechas incorrectas";
            $out["causa"] = $error_201_causa;
        } elseif ($start_datetime > $end_datetime) {
            $errors[] = "Start date must be earlier than end date.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Fechas incorrectas";
            $out["causa"] = $error_201_causa;
        } elseif ($start_datetime < $current_datetime) {
            $errors[] = "Start date must be in the future.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Fechas inicio incorrecta";
            $out["causa"] = $error_201_causa;
        }
        if (strlen($id) <= 1) {
            $errors[] = "ID must have more than 5 characters.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Id no puede estar vacio";
            $out["causa"] = $error_201_causa;
        }
        if (!preg_match('/^[a-zA-Z]+\s[a-zA-Z]+$/', $visitor)) {
          $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Visitante debe tener Nombre y Apellido";
            $out["causa"] = $error_201_causa;
            $errors[] = "Visitor must be in the format 'Firstname Lastname'.";
        }
        if (strlen($type) !== 1) {
            $errors[] = "Type must be a single character.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Tipo de servicio es incorrecto";
            $out["causa"] = $error_201_causa;
        }
        if (!DateTime::createFromFormat('Y-m-d H:i:s', $start_date)) {
            $errors[] = "Start date is not in the correct format.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Formato incorrecto start date";
            $out["causa"] = $error_201_causa;
        }
        if (!DateTime::createFromFormat('Y-m-d H:i:s', $end_date)) {
          $out["error"] = "ERROR";
          $out["codigo"] = "201";
          $out["mensaje"] = "Formato incorrecto end date";
          $out["causa"] = $error_201_causa;
        }
        if (empty($errors)) {
          try {
              $sql = "SELECT * FROM pl_invitacion_normal i WHERE id_invitacion_normal = :id_invitation";
              $statement = $db->prepare($sql);
              $statement->bindValue(':id_invitation',  $id_invitation, \PDO::PARAM_STR);
              $result = $statement->execute();
              while($item = $statement->fetch()){
                if ($item->fecha_ingreso === null && $item->fecha_salida === null && $item->fecha_termino > date('Y-m-d H:i:s')) {
                  $sql = "UPDATE pl_invitacion_normal SET id_invitacion_diners= :id_diners, visitante= :visitor, cedula= :id, placa= :license_plate, observacion= :observation,  tipo= :type, fecha_inicio= :start_date, fecha_termino= :end_date   WHERE id_invitacion_normal=:id_invitation ";
                  $statement = $db->prepare($sql);
                  $statement->bindValue(':id_invitation',  $id_invitation, \PDO::PARAM_STR);
                  $statement->bindValue(':id_diners', $id_diners, \PDO::PARAM_STR);
                  $statement->bindValue(':visitor', $visitor, \PDO::PARAM_STR);
                  $statement->bindValue(':id', $id, \PDO::PARAM_STR);
                  $statement->bindValue(':license_plate', $license_plate, \PDO::PARAM_STR);
                  $statement->bindValue(':observation', $observation, \PDO::PARAM_STR);
                  $statement->bindValue(':type', $type, \PDO::PARAM_STR);
                  $statement->bindValue(':start_date', $start_date, \PDO::PARAM_STR);
                  $statement->bindValue(':end_date', $end_date, \PDO::PARAM_STR);
                  $result = $statement->execute();
                }else{
                  $out["error"] = "ERROR";
                  $out["codigo"] = "203";
                  $out["mensaje"] = $error_203_mensaje;
                  $out["causa"] = $error_203_causa;
                  $response->getBody()->write(json_encode($out));
                  return $response->withStatus(400);
                }
              }
          } catch (\PDOException $th) {
              $out["error"] = "ERROR";
              $out["codigo"] = "203";
              $out["mensaje"] = $error_203_mensaje;
              $out["causa"] = $error_203_causa;
              $response->getBody()->write(json_encode($out));
              return $response->withStatus(400);
          }
          $out["status"] = "OK";
          $out["message"] = $status_update;
        }else{
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }
        $response->getBody()->write(json_encode($out));
        return $response;
    }

    public function deleteInvitation($request, $response, $args){
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

        } catch (\PDOException $th) {
            $result = false;
            return $response->withStatus(500);
        }
        if ($result && count($statement->fetchAll())==0){
          $out["error"] = "ERROR";
          $out["codigo"] = "101";
          $out["mensaje"] = $error_101_mensaje;
          $out["causa"] = $error_101_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(401);
        }else{
          //$sql = "DELETE FROM info_corp WHERE name_corp=:name_corp ";
          //$statement1 = $db->prepare($sql);
          //$statement1->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
          //$result = $statement1->execute();
        }
        // FIN VALIDACION
        $json = $request->getBody();
        $body = json_decode($json, true);
        if (!(isset($body["id_invitation"]))){
          $out["error"] = "ERROR";
          $out["codigo"] = "201";
          $out["mensaje"] = $error_201_mensaje;
          $out["causa"] = $error_201_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }
        // FIN Validacion
        $id_invitation = $body["id_invitation"];
        try {
            $sql = "SELECT * FROM pl_invitacion_normal i WHERE id_invitacion_normal = :id_invitation";
            $statement = $db->prepare($sql);
            $statement->bindValue(':id_invitation',  $id_invitation, \PDO::PARAM_STR);
            $result = $statement->execute();
            while($item = $statement->fetch()){
              if ($item->fecha_ingreso === null && $item->fecha_salida === null && $item->fecha_termino > date('Y-m-d H:i:s')) {
                $sql = "DELETE FROM pl_invitacion_normal WHERE id_invitacion_normal=:id_invitation ";
                $statement = $db->prepare($sql);
                $statement->bindValue(':id_invitation',  $id_invitation, \PDO::PARAM_STR);
                $result = $statement->execute();
              }else{
                $out["error"] = "ERROR";
                $out["codigo"] = "202";
                $out["mensaje"] = $error_202_mensaje;
                $out["causa"] = $error_202_causa;
                $response->getBody()->write(json_encode($out));
                return $response->withStatus(400);
              }
            }
        } catch (\PDOException $th) {
            $out["error"] = "ERROR";
            $out["codigo"] = "202";
            $out["mensaje"] = $error_202_mensaje;
            $out["causa"] = $error_202_causa;
            $response->getBody()->write(json_encode($out));
            return $response->withStatus(400);
        }
        $out["status"] = "OK";
        $out["message"] = $status_delete;
        $response->getBody()->write(json_encode($out));
        return $response;
    }

    public function updateStatusInvitation($request, $response, $args){
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

        } catch (\PDOException $th) {
            $result = false;
            return $response->withStatus(500);
        }
        if ($result && count($statement->fetchAll())==0){
          $out["error"] = "ERROR";
          $out["codigo"] = "101";
          $out["mensaje"] = $error_101_mensaje;
          $out["causa"] = $error_101_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(401);
        }else{
          //$sql = "DELETE FROM info_corp WHERE name_corp=:name_corp ";
          //$statement1 = $db->prepare($sql);
          //$statement1->bindValue(':name_corp', $corpName, \PDO::PARAM_STR);
          //$result = $statement1->execute();
        }
        // FIN VALIDACION
        $json = $request->getBody();
        $body = json_decode($json, true);
        if (!(isset($body["id_invitation"]) && isset($body['status']))){
          $out["error"] = "ERROR";
          $out["codigo"] = "201";
          $out["mensaje"] = $error_201_mensaje;
          $out["causa"] = $error_201_causa;
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }
        // FIN Validacion

        $id_invitation = $body["id_invitation"];
        $status = $body["status"];

        if ($status !== "A" && $status !== "I") {
            $errors[] = "Status must be either 'A' or 'I'.";
            $out["error"] = "ERROR";
            $out["codigo"] = "201";
            $out["mensaje"] = "Estado incorrecto";
            $out["causa"] = $error_201_causa;
        }
        if (empty($errors)) {
          try {
              $sql = "SELECT * FROM pl_invitacion_normal i WHERE id_invitacion_normal = :id_invitation";
              $statement = $db->prepare($sql);
              $statement->bindValue(':id_invitation',  $id_invitation, \PDO::PARAM_STR);
              $result = $statement->execute();
              while($item = $statement->fetch()){
                if ($item->fecha_ingreso === null && $item->fecha_salida === null && $item->fecha_termino > date('Y-m-d H:i:s')) {
                  $sql = "UPDATE pl_invitacion_normal SET estado= :status WHERE id_invitacion_normal=:id_invitation ";
                  $statement = $db->prepare($sql);
                  $statement->bindValue(':status',  $status, \PDO::PARAM_STR);
                  $statement->bindValue(':id_invitation',  $id_invitation, \PDO::PARAM_STR);
                  $result = $statement->execute();
                }else{
                  $out["error"] = "ERROR";
                  $out["codigo"] = "203";
                  $out["mensaje"] = $error_203_mensaje;
                  $out["causa"] = $error_203_causa;
                  $response->getBody()->write(json_encode($out));
                  return $response->withStatus(400);
                }
              }
          } catch (\PDOException $th) {
              $out["error"] = "ERROR";
              $out["codigo"] = "203";
              $out["mensaje"] = $error_203_mensaje;
              $out["causa"] = $error_203_causa;
              $response->getBody()->write(json_encode($out));
              return $response->withStatus(400);
          }
          $out["status"] = "OK";
          $out["message"] = $status_update;
        }else{
          $response->getBody()->write(json_encode($out));
          return $response->withStatus(400);
        }
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
        $codigo=$cedula."TT1";
        $codigoF = base64_encode($codigo);
        $out["status"] = "OK";
        $out["codigo"] = $codigoF;
        $response->getBody()->write(json_encode($out));
        return $response;
    }
}
