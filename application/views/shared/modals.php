<!-- Modal users -->

<div class="modal fade modal-Logistify" id="modalUsers" tabindex="-1" role="dialog" aria-labelledby="modalUsersLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
        	
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <i class="fas fa-close"></i>
        </button>
      </div>
      <div class="modal-body">
      	<div class="modal-body_add d-none">
      		<form data-id="new-user">
      			<!-- Step 1 agregar registro -->
      			<div class="modal-body_add--step active" data-step="1">
	      			<div class="row header-edit align-items-center">
	      				<div class="col-8">
	      					<strong> Datos del contacto: </strong>
	      				</div>
	      				<div class="col-4">
	      					<button class="btn btn-link" type="button" data-steplabel="1" data-modal="#modalUsers"> Editar</button>
	      				</div>
	      			</div>
	      			<div class="row">
	      				<div class="col-12 order-1 order-md-2">
	  							Completa los datos para crear un nuevo usuario
	      				</div>
	      				<div class="col-12 order-2 order-md-1">
	      					<div class="content-photoPerfil">
		      					<img src="<?= base_url() ?>assets/images/logistify/perfil.png" alt="Photo Perfil" class="photo-perfil">
		      					<label for="imgUpload"><i class="fas fa-pencil-alt"></i></label>
		      				</div>
	  							<input accept="image/*" type='file' id="imgUpload" name="imgUpload" class="d-none" />
	  							
	      				</div>
	      			</div>
	      			<div class="row">
	      				<div class="col-12">
	      					<input type="text" name="user-name" class="form-control is-valid state-valid" value="Jhon Lynn">
	      					<label for="user-name">Nombre de usuraio</label>
	      				</div>
	      				<div class="col-12">
	      					<input type="text" name="name" class="form-control">
	      					<label for="name">Nombre</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" name="first-name" class="form-control">
	      					<label for="first-name">Apellido Paterno</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" name="last-name" class="form-control">
	      					<label for="last-name">Apellido Materno</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" name="phone" class="form-control">
	      					<label for="phone">Teléfono</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="email" name="mail" class="form-control">
	      					<label for="mail">Correo</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="date" name="birthday" class="form-control">
	      					<label for="birthday">Fecha de nacimiento</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" name="last-name" class="form-control">
	      					<label for="last-name">Genero</label>
	      				</div>
	      				<div class="col-12">
	      					<input type="text" name="direction" class="form-control">
	      					<label class="form-label"> Direccion</label>
	      				</div>
	      			</div>
      			</div>

      			<!-- Step 2 agregar registro -->
      			<div class="modal-body_add--step" data-step="2">
      				<div class="row header-edit align-items-center">
	      				<div class="col-8">
	      					<strong> Datos del Perfil: </strong>
	      				</div>
	      				<div class="col-4">
	      					<button class="btn btn-link" type="button" data-stepLabel="2" data-modal="#modalUsers"> Editar</button>
	      				</div>
	      			</div>
	      			<div class="row mt-4">
	      				<div class="col-6">
	      					<input type="text" class="form-control" name="home-phone">
	      					<label for="home-phone">Teléfono de casa (opcional)</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" class="form-control" name="link">
	      					<label for="link">Link (opcional)</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" class="form-control" name="website">
	      					<label for="website">Website (opcional)</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" class="form-control" name="facebook">
	      					<label for="facebook">@Facebook (opcional)</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" class="form-control" name="instagram">
	      					<label for="instagram">@Instagram (opcional)</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" class="form-control" name="linkedin">
	      					<label for="linkedin">@Linkedin (opcional)</label>
	      				</div>
	      				<div class="col-12">
	      					<input type="text" class="form-control" name="descripcion">
	      					<label for="descripcion">Descripción (opcional)</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" hidden name="area">
	      					<div class="nice-select form-control custom-select" tabindex="0">
	      						<span class="current">Area</span>
	      						<ul class="list">
	      							<li data-value="br" class="option">Area</li>
	      							<li data-value="cz" class="option">Area</li>
	      							<li data-value="de" class="option">Area</li>
	      							<li data-value="pl" class="option selected focus">Area</li>
	      						</ul>
	      					</div>
	      					<label for="area">Área</label>
	      				</div>
	      				<div class="col-6">
	      					<input type="text" hidden name="puesto">
	      					<div class="nice-select form-control custom-select" tabindex="0">
	      						<span class="current">Puesto</span>
	      						<ul class="list">
	      							<li data-value="br" class="option">Puesto</li>
	      							<li data-value="cz" class="option">Puesto</li>
	      							<li data-value="de" class="option">Puesto</li>
	      							<li data-value="pl" class="option selected focus">Puesto</li>
	      						</ul>
	      					</div>
	      					<label for="puesto">Puesto</label>
	      				</div>
	      				<div class="col-12">
	      					<input type="text" hidden name="area">
	      					<div class="nice-select form-control custom-select" tabindex="0">
	      						<span class="current">Rol</span>
	      						<ul class="list">
	      							<li data-value="br" class="option">Rol</li>
	      							<li data-value="cz" class="option">Rol</li>
	      							<li data-value="de" class="option">Rol</li>
	      							<li data-value="pl" class="option selected focus">Rol</li>
	      						</ul>
	      					</div>
	      					<label for="linkedin">Rol</label>
	      				</div>
	      			</div>
      			</div>

      			<div class="modal-body_add--step" data-step="3">
      				<div class="row">
      					<div class="col-12">
      						<strong>Clientes:</strong>
      					</div>
      					<div class="col-12">
      						<select class="js-example-basic-multiply w-100"  name="clientes[]" multiple="multiple" name="clientes">
      						  <option value="walmart">Walmart</option>
      						  <option value="este-lauder">Estee Lauder</option>
      						  <option value="mac">MAC</option>
      						  <option value="whirlpool">whirlpool</option>
      						  <option value="Sanofi">Sanofi</option>
      						</select>
      						<label for="clientes">Seleccionar clietes</label>
      					</div>
      				</div>
      				<div class="row mt-4">
      					<div class="col-12">
      						<strong>Permisos:</strong>
      						<select class="js-example-basic-multiply w-100"  name="permiso[]" multiple="multiple" name="permisos">
      						  <option value="permiso-1" selected>Permiso-1</option>
      						  <option value="permiso-2" selected>Permiso-2</option>
      						  <option value="permiso-3" selected>Permiso-3</option>
      						  <option value="permiso-4">Permiso-4</option>
      						  <option value="permiso-5">Permiso-5</option>
      						  <option value="permiso-6">Permiso-6</option>
      						  <option value="permiso-7">Permiso-7</option>
      						  <option value="permiso-8">Permiso-8</option>
      						  <option value="permiso-9">Permiso-9</option>
      						</select>
      						<label for="permisos">Seleccionar permisos</label>
      					</div>
      				</div>
      			</div>

      			<div class="buttons text-center">
      				<button class="btn btn-link" type="button" data-dismiss="modal" aria-label="Close">
      					Cancelar
      				</button>
      				<button class="btn btn-link btn-next" type="button" data-modal="#modalUsers">
      					Continuar
      				</button>
      			</div>
      		</form>
      	</div>
      	<div class="modal-body_view-edit d-none" >
      		cuerpo ver o editar
      	</div>
      	<div class="modal-body_delete d-none">
      		cuerpo eliminar
      	</div>
      </div>
    </div>
  </div>
</div>
