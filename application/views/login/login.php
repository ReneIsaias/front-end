<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login | Logistify</title>

    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">

    <!--Bootstrap.min css-->
    <link rel="stylesheet" href="<?= base_url() ?>assets/plugins/bootstrap/css/bootstrap.min.css">
    <!--Logistify Css -->
    <link href="<?= base_url() ?>assets/css/main-logistify.css" rel="stylesheet">
    <!---Font icons-->
    <link href="<?= base_url() ?>assets/css/icons.css" rel="stylesheet" />
  </head>
  <body>
    <main class="login">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mx-auto">
            <div class="login-logo">
              <h2>Bienvenido a </h2>
              <img src="assets/images/logistify/logo.svg" alt="">
            </div>
            <div class="login-form">
              <h3>
                Iniciar sesión
              </h3>
              <form action="#" id="form-login">
                <div class="form-group">
                  <input type="text" class="form-control" name="login-mail" placeholder="Correo electrónico">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" name="login-pass" placeholder="Contraseña" data-type="pass">
                  <i class="icon fas fa-eye" data-pass="hide" data-form="#form-login"></i>
                </div>
                <button class="btn btn-form">
                  Iniciar sesión
                </button>
              </form>
            </div>
            <div class="login-legals text-center">
              <p>
                ¿Olvidaste tu contraseña? <a href="restorePassword">Recuperar</a>
              </p>
              <p>
                Al ingresar confirmas que aceptas nuestros <a href="#">Términos y Políticas.</a>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mx-auto">
            <div class="login-footer">
              <p class="text-center">
                ¿Aún no tienes cuenta? <a href="#">Contáctanos</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <?php $this->load->view('shared/alertas') ?>

  <!-- JQuery min js -->
  <script src="<?= base_url() ?>assets/js/jquery-3.2.1.min.js"></script>

  <!--Bootstrap.min js-->
  <script src="<?= base_url() ?>assets/plugins/bootstrap/popper.min.js"></script>
  <script src="<?= base_url() ?>assets/plugins/bootstrap/js/bootstrap.min.js"></script>

  <!-- custom js -->
  <script src="<?= base_url() ?>assets/js/logistify/peticiones.js"></script>
  <script src="<?= base_url() ?>assets/js/logistify/validaciones.js"></script>
  <script src="<?= base_url() ?>assets/js/logistify/login.js"></script>

  
  </body>
</html>