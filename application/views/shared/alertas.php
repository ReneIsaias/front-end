<div class="modal fade" id="alertasGeneral" tabindex="-1" role="dialog" aria-labelledby="alertasGeneralLabel" aria-hidden="true">
  <!-- Login datos incorrectos -->
  <div class="modal-dialog d-none" data-modal="login-data-error" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-exclamation-circle"></i>
        <h4>
          Datos incorrectos
        </h4>
        <p>
          El usuario y/o contraseña no son validos. Volver a intentar.
        </p>
      </div>
      <a href="restorePassword">
        Recuperar contraseña
      </a>
    </div>
  </div>

  <!-- request Pass  Error -->
  <div class="modal-dialog d-none" data-modal="request-pass-error" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-exclamation-circle"></i>
        <h4>
          Datos incorrectos
        </h4>
        <p>
          El correo electrónico no está registrado en nuestra base de datos.  Volver a intentar.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Request Pass  Success -->
  <div class="modal-dialog d-none" data-modal="request-pass-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Datos correctos
        </h4>
        <p>
          Te hemos enviado un mail para verificar tu cuenta.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close" data-href="login">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- request Pass  Error -->
  <div class="modal-dialog d-none" data-modal="restore-pass-error" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-exclamation-circle"></i>
        <h4>
          Datos incorrectos
        </h4>
        <p>
          Las contraseñas no coinciden.  Volver a intentar.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- request Pass  Error Server -->
  <div class="modal-dialog d-none" data-modal="restore-pass-error-server" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-exclamation-circle"></i>
        <h4>
          Datos incorrectos
        </h4>
        <p>
          
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Request Pass  Success -->
  <div class="modal-dialog d-none" data-modal="restore-pass-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Datos correctos
        </h4>
        <p>
          Tu contraseña se ha cambiado exitosamente.
        </p>
      </div>
      <a href="/login" class="btn btn-white">
        Iniciar sesión
      </a>
    </div>
  </div>

</div>