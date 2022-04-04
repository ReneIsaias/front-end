<div class="modal fade" id="alertasGeneral" tabindex="-1" role="dialog" aria-labelledby="alertasGeneralLabel" aria-hidden="true">

  <!-- Create User Success -->
  <div class="modal-dialog d-none" data-modal="create-user-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Perfil creado
        </h4>
        <p>
          Has creado un nuevo perfil de colaborador. Se le enviará un correo con los datos de acceso.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Create User  Error -->
  <div class="modal-dialog d-none" data-modal="create-user-error" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-exclamation-circle"></i>
        <h4>
          Usuario existente
        </h4>
        <p>
          Este usuario o correo electrónico ya están asignados;
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

   <!-- edit area succes-->
  <div class="modal-dialog d-none" data-modal="edit-user-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Usuario actualizado
        </h4>
        <p>
          El usuario se ha actualizado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete User? -->
  <div class="modal-dialog d-none" data-modal="delete-user" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea eliminar este usuario?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Eliminar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete user succes-->
  <div class="modal-dialog d-none" data-modal="delete-user-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Perfil Eliminado
        </h4>
        <p>
          El perfil se a eliminado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete User? -->
  <div class="modal-dialog d-none" data-modal="delete-user-permanent" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea eliminar este usuario de forma permanente?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Eliminar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request  Restore User? -->
  <div class="modal-dialog d-none" data-modal="request-restore-user" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea reestablecer este usuario?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Aceptar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request Restore User Success -->
  <div class="modal-dialog d-none" data-modal="restore-user-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Perfil Restaurado
        </h4>
        <p>
          Has restaurado el perfil del colaborador.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>


  <!-- Create area Success -->
  <div class="modal-dialog d-none" data-modal="create-area-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Área creada
        </h4>
        <p>
          El área se ha creado correctamente.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Create area  Error -->
  <div class="modal-dialog d-none" data-modal="create-area-error" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-exclamation-circle"></i>
        <h4>
          Error
        </h4>
        <p>
          El área no se ha podido crear de forma correctamente.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete area request? -->
  <div class="modal-dialog d-none" data-modal="delete-area-request" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Estas seguro que deseas eliminar esta área?
        </h4>
        <div class="text-center">
          <button class="btn btn-morado btn-form" data-action="aceptar">
            Aceptar
          </button>
        </div>
      </div>
      <button class="btn btn-link text-blanco" data-dismiss="modal" aria-label="Close" data-action="close">
          Regresar
        </button>
    </div>
  </div>

  <!-- Delete area succes-->
  <div class="modal-dialog d-none" data-modal="delete-area-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Área Eliminada
        </h4>
        <p>
          El área se a eliminado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- edit area succes-->
  <div class="modal-dialog d-none" data-modal="edit-area-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Área actualizada
        </h4>
        <p>
          El área se ha actualizado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Request  Restore area? -->
  <div class="modal-dialog d-none" data-modal="request-restore-area" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea reestablecer esta área?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Aceptar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request Restore area Success -->
  <div class="modal-dialog d-none" data-modal="restore-area-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Área Restaurada
        </h4>
        <p>
          Has restaurado el área del colaborador.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete area request? -->
  <div class="modal-dialog d-none" data-modal="delete-area-permanent" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Estas seguro que deseas eliminar esta área de forma permanente?
        </h4>
        <div class="text-center">
          <button class="btn btn-morado btn-form" data-action="aceptar">
            Aceptar
          </button>
        </div>
      </div>
      <button class="btn btn-link text-blanco" data-dismiss="modal" aria-label="Close" data-action="close">
          Regresar
        </button>
    </div>
  </div>




   <!-- Delete permisos request? -->
  <div class="modal-dialog d-none" data-modal="delete-permiso-request" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Estas seguro que deseas eliminar este permiso?
        </h4>
        <div class="text-center">
          <button class="btn btn-morado btn-form" data-action="aceptar">
            Aceptar
          </button>
        </div>
      </div>
      <button class="btn btn-link text-blanco" data-dismiss="modal" aria-label="Close" data-action="close">
          Regresar
        </button>
    </div>
  </div>

  <!-- Delete permisos succes-->
  <div class="modal-dialog d-none" data-modal="delete-permiso-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Permiso Eliminado
        </h4>
        <p>
          El permiso se a eliminado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- create permisos succes-->
  <div class="modal-dialog d-none" data-modal="create-permiso-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Permiso Creado
        </h4>
        <p>
          El permiso se ha creado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- edit permisos succes-->
  <div class="modal-dialog d-none" data-modal="edit-permiso-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Permiso actualizado
        </h4>
        <p>
          El permiso se ha actualizado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete permiso permanent? -->
  <div class="modal-dialog d-none" data-modal="delete-permiso-permanent" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea eliminar este permiso de forma permanente?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Eliminar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request  Restore User? -->
  <div class="modal-dialog d-none" data-modal="request-restore-permiso" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea reestablecer este permiso?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Aceptar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request Restore User Success -->
  <div class="modal-dialog d-none" data-modal="restore-permiso-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Permiso Restaurado
        </h4>
        <p>
          Has restaurado el permiso de forma correcta.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>


  <!-- crear rol succes -->
  <div class="modal-dialog d-none" data-modal="create-rol-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Rol creado
        </h4>
        <p>
          El rol se ha creado correctamente.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete rol request? -->
  <div class="modal-dialog d-none" data-modal="delete-rol-request" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Estas seguro que deseas eliminar este rol?
        </h4>
        <div class="text-center">
          <button class="btn btn-morado btn-form" data-action="aceptar">
            Aceptar
          </button>
        </div>
      </div>
      <button class="btn btn-link text-blanco" data-dismiss="modal" aria-label="Close" data-action="close">
          Regresar
        </button>
    </div>
  </div>

  <!-- Delete rol succes-->
  <div class="modal-dialog d-none" data-modal="delete-rol-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Rol Eliminado
        </h4>
        <p>
          El rol se ha eliminado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- edit rol succes-->
  <div class="modal-dialog d-none" data-modal="edit-rol-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Rol actualizado
        </h4>
        <p>
          El rol se ha actualizado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete permiso permanent? -->
  <div class="modal-dialog d-none" data-modal="delete-rol-permanent" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea eliminar este rol de forma permanente?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Eliminar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request  Restore User? -->
  <div class="modal-dialog d-none" data-modal="request-restore-rol" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea reestablecer este rol?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Aceptar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request Restore User Success -->
  <div class="modal-dialog d-none" data-modal="restore-rol-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Rol Restaurado
        </h4>
        <p>
          Has restaurado el rol de forma correcta.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>


  <!-- crear Puesto succes -->
  <div class="modal-dialog d-none" data-modal="create-puesto-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Puesto creado
        </h4>
        <p>
          El puesto se ha creado correctamente.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete Puesto request? -->
  <div class="modal-dialog d-none" data-modal="delete-puesto-request" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Estas seguro que deseas eliminar este puesto?
        </h4>
        <div class="text-center">
          <button class="btn btn-morado btn-form" data-action="aceptar">
            Aceptar
          </button>
        </div>
      </div>
      <button class="btn btn-link text-blanco" data-dismiss="modal" aria-label="Close" data-action="close">
          Regresar
        </button>
    </div>
  </div>

  <!-- Delete Puesto succes-->
  <div class="modal-dialog d-none" data-modal="delete-puesto-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Puesto Eliminado
        </h4>
        <p>
          El puesto se ha eliminado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- edit Puesto succes-->
  <div class="modal-dialog d-none" data-modal="edit-puesto-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Puesto actualizado
        </h4>
        <p>
          El puesto se ha actualizado correctamente
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>

  <!-- Delete permiso permanent? -->
  <div class="modal-dialog d-none" data-modal="delete-puesto-permanent" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea eliminar este puesto de forma permanente?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Eliminar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request  Restore User? -->
  <div class="modal-dialog d-none" data-modal="request-restore-puesto" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          ¿Desea reestablecer este puesto?
        </h4>
        <div class="text-center">
          <button class="btn btn-amarillo btn-form" data-action="aceptar">
            Aceptar
          </button>
          <button class="btn btn-link text-moradoMedio" data-dismiss="modal" aria-label="Close">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Request Restore User Success -->
  <div class="modal-dialog d-none" data-modal="restore-puesto-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-check-circle"></i>
        <h4>
          Puesto Restaurado
        </h4>
        <p>
          Has restaurado el puesto de forma correcta.
        </p>
      </div>
      <button class="btn btn-link" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times-circle"></i>
      </button>
    </div>
  </div>


</div>