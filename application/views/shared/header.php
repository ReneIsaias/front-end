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
    <!-- Datepicker -->
    <link href="<?= base_url() ?>assets/plugins/date-picker/spectrum.css" rel="stylesheet" />

    <!-- select2 Plugin -->
    <link href="../../assets/plugins/select2/select2.min.css" rel="stylesheet" />
    
    <!--Nice Select Css -->
    <link href="../../assets/plugins/nice-select/css/nice-select.css" rel="stylesheet">

    <!--mutipleselect css-->
    <link rel="stylesheet" href="../../assets/plugins/multipleselect/multiple-select.css">

    <!---Font icons-->
    <link href="<?= base_url() ?>assets/css/icons.css" rel="stylesheet" />

    <!--Grid.js (tablas) -->
    <link href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css" rel="stylesheet">

    <!--Logistify Css -->
    <link href="<?= base_url() ?>assets/css/main-logistify.css" rel="stylesheet">
  </head>
  <body>
    <header class="logistify">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-between">
          <div class="col-3">
            <button class="burger btn btn-link d-xl-none">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div class="col-6">
            <img src="<?= base_url()?>assets/images/logistify/logo-white.svg" alt="Logo | Logistify" class="logo d-xl-none">
          </div>
          <div class="col-3 col-xl-auto icons">
            <i class="fas fa-user"></i>
            <i class="fas fa-box-open notification">
              <span></span>
            </i>
          </div>
        </div>
      </div>
      <nav class="menu">
        <div class="menu-content">
          <div class="menu-content_logo">
            <img src="<?= base_url()?>assets/images/logistify/logo-white.svg" alt="Logo Logistify">
          </div>
          <div class="menu-content_notifications">
            <button class="btn btn-link">
              <p>Notificaciones</p>
              <span class="menu-notifications_count">3</span>
            </button>
          </div>
          <ul class="menu-content_nav">
            <li>
              <a href="#">Cotizar envío</a>
            </li>
            <li>
              <a href="#">Rastrear envíos</a>
            </li>
            <li>
              <a href="#">Cargos extras</a>
            </li>
            <li>
              <a href="#">Reportes</a>
            </li>
            <li>
              <a href="usuarios">Mis Usuarios</a>
            </li>
            <li>
              <a href="areas">Áreas</a>
            </li>
            <li>
              <a href="permisos">Permisos</a>
            </li>
            <li>
              <a href="roles">Roles</a>
            </li>
            <li>
              <a href="puestos">Puestos</a>
            </li>
            <li>
              <a href="#">Clientes</a>
            </li>
            <li>
              <a href="#">Estados de cuenta</a>
            </li>
            <li>
              <a href="/perfil"> Mi perfil</a>
            </li>
            <li>
              <a href="#">Configuraciones</a>
            </li>
          </ul>
          <ul class="menu-content_footer">
            <li><a href="#">Terminos y condiciones </a></li>
            <li><i class="fas fa-door-closed"></i> Cerrar sesión</li>
          </ul>
        </div>
      </nav>
    </header>
    