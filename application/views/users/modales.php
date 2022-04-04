<!-- Modal crear usuario -->
<div class="modal fade general" id="crearUsuario" tabindex="-1" role="dialog" aria-labelledby="crearUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Colaborador nuevo
      	</p>
      	<p>
      		completa los datos para agregar un nuevo colaborador 
      	</p>
      	<div class="conteo-pasos">
      		<span>Paso 1 de 3</span>
      		<ul>
      			<li class="current" data-label="step-1"></li>
      			<li data-label="step-2"></li>
      			<li data-label="step-3"></li>
      		</ul>
      	</div>
        <form action="#" id="form-crearUsuario">

        	<div class="pasos current" data-step="step-1">
        		<p class="mb-3">
        			Datos generales
        		</p>
        		<div class="form-group">
        			<input type="text" class="form-control" placeholder="Nombre" id="form-usuario-first-name">
        		</div>
        		<div class="form-group">
        			<input type="text" class="form-control" placeholder="Apellido" id="form-usuario-last-name">
        		</div>
        		<div class="form-group">
        			<input type="text" class="form-control" placeholder="Nombre de usuario" id="form-usuario-username" >
        		</div>
        		<p class="mb-3">
        			Datos de contacto
        		</p>
        		<div class="form-group">
        			<input type="text" class="form-control" placeholder="Correo electrónico" id="form-usuario-mail">
        		</div>
        		<div class="form-group mb-0">
        			<input type="text" class="form-control" placeholder="Teléfono" id="form-usuario-phone">
        		</div>
        	</div>

        	<div class="pasos d-none" data-step="step-2">
      			<div class="form-group">
      				<input class="form-control" placeholder="Fecha de nacimiento" type="date" name="birthday" id="form-usuario-birthday">
      			</div>

        		<div class="form-group">
        			<select name="genere" id="form-usuario-select-genere" class="form-control custom-select nice-select">
        				<option value="0" disabled selected>Género</option>
        				<option value="MUJER">Femenino</option>
        				<option value="HOMBRE">Masculino</option>
        			</select>
        		</div>
        		<div class="form-group">
        			<div class="content-photoPerfil">
        				<div class="content-photoPerfil-img d-none">
        					<img src="<?= base_url() ?>assets/images/logistify/perfil.png" alt="" class="photo-perfil">
        				</div>
        				<div class="input">
	        				<span>Subir fotografía</span>
			      			<label for="imgUpload" class="btn-file">Seleccionar archivo</label>
	  							<input accept="image/*" type='file' id="imgUpload" name="imgUpload" class="d-none" />
        				</div>
      				</div>
        		</div>

        		<p class="mb-3">Informacióndel colaborador</p>

        		<div class="form-group">
        			<select name="area" id="form-usuario-select-areas" class="form-control custom-select nice-select">
        				<option value="0" disabled selected>Area</option>

        			</select>
        		</div>
        		<div class="form-group">
        			<select name="puestos" id="form-usuario-select-puestos" class="form-control custom-select nice-select">
        				<option value="0" disabled selected>Puesto</option>
        			</select>
        		</div>
        		<div class="form-group">
        			<select name="roles" id="form-usuario-select-roles" class="form-control custom-select nice-select">
        				<option value="0" disabled selected>Rol asignado</option>
        			</select>
        		</div>
        	</div>

        	<div class="pasos d-none" data-step="step-3">
        		<p class="w-50 mx-auto mb-3 text-center">
        			Seleccionar permisos adicionales
        		</p>
        		<select multiple="multiple" class="group-filter" name="permisos">
        		</select>
        		<div class="clientes d-none">
        			<p class="w-50 mx-auto mt-4 mb-4 text-center">
        				Agregar clientes
        			</p>
        			<select class="form-control select-clientes select2" name="clientes"  multiple style="width: 100%;">
							  
							</select>
        		</div>
        		
        	</div>

        	<button type="button" class="btn btn-form mt-3" data-action="next-step">
        		Siguiente
        	</button>
        	<button class="btn btn-link d-none text-default" type="button" data-action="prev-step">
        		Regresar
        	</button>
        </form>
        <div class="form-warning d-none">
        	<i class="fas fa-exclamation-circle"></i>
        	Completa la información
        </div>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>

<!-- Modal ver usuario-->
<div class="modal fade general z-index-4" id="verUsuario" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Perfil colaborador
      	</p>
        <form action="#" id="form-ver-Usuario">
        	<div class="row">
        		<div class="col-12 ">
        			<img src="" alt="imagen de perfil" class="mb-3" id="view-user-imgPerfil" style="width: 200px;">
        			<div class="pasos current" data-section="datos-colaborador">
        				<div class="form-group">
        					<input type="text" class="form-control" placeholder="Nombre" name="view-user-firstname" value="" disabled>
        				</div>
        				<div class="form-group">
        					<input type="text" class="form-control" placeholder="Apellido" name="view-user-lastname" value="" disabled>
        				</div>
        				<div class="form-group">
        					<input type="text" class="form-control" placeholder="Nombre de usuario" name="view-user-username" value="" disabled>
        				</div>
        			</div>
        			<div class="pasos d-none" data-section="datos-perfil">
        				<div class="row">
        					<div class="col-6">
        						<p>
        							<b data-label="nombre-completo"></b>
        							<span>Nombre completo</span>
        						</p>
        					</div>
        					<div class="col-6">
        						<p>
        							<b data-label="puesto"></b>
        							<span>
        								Puesto
        							</span>
        						</p>
        					</div>
        				</div>
        			</div>
        		</div>
        		<div class="col-12 ">
        			<div class="datos-seccion">
		        		<button class="btn btn-link text-moradoMedio w-auto active" data-sectionlabel="datos-colaborador" data-labelmodal="#verUsuario" type="button">
		        			Datos del colaborador
		        		</button>
		        		<button class="btn btn-link text-moradoMedio w-auto" data-sectionlabel="datos-perfil" data-labelmodal="#verUsuario" type="button">
		        			Perfil
		        		</button>
		        	</div>
        		</div>
        		<div class="col-12 ">
		        	<div class="pasos current" data-section="datos-colaborador">
		        		<p class="mb-3">
			        		Datos de contacto
			        	</p>
		        		<div class="form-group">
		        			<input type="text" class="form-control" placeholder="Correo electrónico" name="view-user-mail" value="alfredo_perez@logistify.com.mx" disabled>
		        		</div>
		        		<div class="form-group">
			        		<input type="text" class="form-control" placeholder="Teléfono" name="view-user-phone" value="" disabled>
			        	</div>
			        	<div class="form-group">
			        		<input type="text" class="form-control" placeholder="Fecha de nacimiento" name="view-user-birthday" value="" disabled>
			        	</div>
			        	<div class="form-group">
			        		<input type="text" class="form-control" placeholder="Género" name="view-user-genere" disabled value="">
			        	</div>
		        	</div>

		        	<div class="pasos d-none" data-section="datos-perfil">
		        		<p class="mb-3">
			        		Perfil
			        	</p>
			        	<div class="form-group">
		        			<input type="text" class="form-control" name="view-user-area" value="" disabled placeholder="Área">
		        		</div>
		        		<div class="form-group">
		        			<input type="text" class="form-control" name="view-user-puesto" value="" disabled placeholder="Puesto">
		        		</div>
		        		<div class="form-group">
		        			<input type="text" class="form-control" name="view-user-rol" value="" disabled="Rol">
		        		</div>
		        		<div class="permisos">
		        			<p class="w-50 mx-auto mb-3 text-center">
		        				Seleccionar permisos adicionales
		        			</p>
		        			<select multiple="multiple" class="group-filter" name="permisos">
		        			</select>
		        		</div>
		        		<div class="clientes mb-3">
		        			<p class="w-50 mx-auto mt-4 mb-4 text-center">
		        				Agregar clientes
		        			</p>
		        			<select class="form-control select-clientes select2" name="clientes"  multiple style="width: 100%;">
									</select>
		        		</div>
		        	</div>
        		</div>
        	</div>


        	


        	<!-- <button type="button" class="btn btn-form" data-action="save">
        		Guardar
        	</button> -->
        	<button class="btn btn-link  text-moradoMedio" type="button" data-action="delete">
        		<i class="fas fa-trash"></i> Eliminar perfil
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>

<!-- Modal editar usuario-->
<div class="modal fade general z-index-4" id="editarUsuario" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Perfil colaborador
      	</p>
        <form action="#" id="form-edit-Usuario">
        	<div class="row">
        		<div class="col-12 ">
        			<img src="" alt="imagen de perfil" class="mb-3" id="editar-user-imgPerfil" style="width: 200px;">
        			<div class="pasos current" data-section="datos-colaborador">
        				<div class="form-group">
        					<input type="text" class="form-control" placeholder="Nombre" name="edit-user-firstname">
        				</div>
        				<div class="form-group">
        					<input type="text" class="form-control" placeholder="Apellido" name="edit-user-lastname">
        				</div>
        				<div class="form-group">
        					<input type="text" class="form-control" placeholder="Nombre de usuario" name="edit-user-username">
        				</div>
        			</div>
        			<div class="pasos d-none" data-section="datos-perfil">
        				<div class="row">
        					<div class="col-6">
        						<p>
        							<b data-label="nombre-completo"></b>
        							<span>Nombre completo</span>
        						</p>
        					</div>
        					<div class="col-6">
        						<p>
        							<b data-label="puesto"></b>
        							<span>
        								Puesto
        							</span>
        						</p>
        					</div>
        				</div>
        			</div>
        		</div>
        		<div class="col-12 ">
        			<div class="datos-seccion">
		        		<button class="btn btn-link text-moradoMedio w-auto active" data-sectionlabel="datos-colaborador" data-labelmodal="#editarUsuario" type="button">
		        			Datos del colaborador
		        		</button>
		        		<button class="btn btn-link text-moradoMedio w-auto" data-sectionlabel="datos-perfil" data-labelmodal="#editarUsuario" type="button">
		        			Perfil
		        		</button>
		        	</div>
        		</div>
        		<div class="col-12 ">
		        	<div class="pasos current" data-section="datos-colaborador">
		        		<p class="mb-3">
			        		Datos de contacto
			        	</p>
		        		<div class="form-group">
		        			<input type="text" class="form-control" placeholder="Correo electrónico" name="edit-user-mail">
		        		</div>
		        		<div class="form-group">
			        		<input type="text" class="form-control" placeholder="Teléfono" name="edit-user-phone">
			        	</div>
		        	</div>

		        	<div class="pasos d-none" data-section="datos-perfil">
		        		<p class="mb-3">
			        		Perfil
			        	</p>
			        	<div class="form-group">
		        			<select name="area" id="select-areas" class="form-control custom-select nice-select">
		        				<option value="" disabled selected>Area</option>
		        			</select>
		        		</div>
		        		<div class="form-group">
		        			<select name="puestos" id="select-puestos" class="form-control custom-select nice-select">
		        				<option value="" disabled selected>Puesto</option>
		        			</select>
		        		</div>
		        		<div class="form-group">
		        			<select name="roles" id="select-roles" class="form-control custom-select nice-select">
		        				<option value="" disabled selected>Rol asignado</option>
		        			</select>
		        		</div>
		        		<div class="permisos">
		        			<p class="w-50 mx-auto mb-3 text-center">
		        				Seleccionar permisos adicionales
		        			</p>
		        			<select multiple="multiple" class="group-filter" name="permisos">
		        			</select>
		        		</div>
		        		<div class="clientes mb-3">
		        			<p class="w-50 mx-auto mt-4 mb-4 text-center">
		        				Agregar clientes
		        			</p>
		        			<select class="form-control select-clientes select2" name="clientes"  multiple style="width: 100%;">
									</select>
		        		</div>
		        	</div>
        		</div>
        	</div>


        	


        	<button type="button" class="btn btn-form" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>



<!-- Crear Area  -->
<div class="modal fade general" id="crearArea" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Agregar nueva área
      	</p>
      	<p class="alt">
      		Completa los campos para agregar una nueva área
      	</p>
        <form action="#" id="form-crear-area">
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Nombre" name="area">
        	</div>
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Descripción" name="descripcion">
        	</div>
        	<div class="form-group">
        		<select name="responsable-area" class="form-control responsable-area select2" style="width: 100%;">
        			<option value="0" selected disabled> Responsable del área </option>
        		</select>
        	</div>
        	<button type="button" class="btn btn-form" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>

<!-- view Area  -->
<div class="modal fade general" id="viewArea" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" data-modal="edit-area-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          Ver área
        </h4>
        <div class="row">
        	<div class="col-12">
        		<ul class="nav nav-tabs" id="areaTab" role="tablist">
        		  <li class="nav-item" role="presentation">
        		    <a class="nav-link active" id="informacion-tab" data-toggle="tab" href="#informacion" role="tab" aria-controls="informacion" aria-selected="true">Información</a>
        		  </li>
        		  <li class="nav-item" role="presentation">
        		    <a class="nav-link" id="usuarios-tab" data-toggle="tab" href="#usuarios" role="tab" aria-controls="usuarios" aria-selected="false">Usuarios asignados</a>
        		  </li>
        		</ul>
        	</div>
        </div>
        <div class="tab-content mt-3" id="areaTabContent">
        	<div class="tab-pane fade show active" id="informacion" role="tabpanel" aria-labelledby="informacion-tab">
        		<div class="row">
		        	<div class="col-4">
		        		<p class="dato">
		        			<b data-label="area"></b>
		        			<span>
		        				Área
		        			</span>
		        		</p>
		        	</div>
		        	<div class="col-4">
		        		<p class="dato">
		        			<b data-label="descripcion"></b>
		        			<span>
		        				Descripción
		        			</span>
		        		</p>
		        	</div>
		        	<div class="col-4">
		        		<p class="dato">
		        			<b data-label="responsable"></b>
		        			<span>
		        				Responsable
		        			</span>
		        		</p>
		        	</div>
		        	<div class="col-12 text-left">
		        		<button class="btn btn-link text-moradoMedio w-auto" data-action="edit-area">
		        			<i class="fas fa-pencil-alt mr-2"></i>
		        			Editar
		        		</button>
		        		<button class="btn btn-link text-moradoMedio w-auto" data-action="delete-area">
		        			<i class="fas fa-pencil-alt mr-2"></i>
		        			Eliminar
		        		</button>
		        	</div>
		        </div>
        	</div>
        	<div class="tab-pane fade" id="usuarios" role="tabpanel" aria-labelledby="usuarios-tab">
        		<div class="logistify-table tableUsuariosAreas">
        		 	<div class="container">
        		 		<div class="row">
        		 			<div class="col-12 p-0 p-md-3">
        		 				 	<div class="tableUsuariosAreas-content"></div>	
        		 					<div class="logistify-table_limit" >
        		 						<span class="mr-3">
        		 							Mostrar: 
        		 						</span>
        		 						<div class="form-group">
        		 							<select name="" id="" data-table="tableUsuariosAreas" class=" form-control custom-select nice-select">
        		 								<option disabled selected>/</option>
        		 								<option value="25">25</option>
        		 								<option value="50">50</option>
        		 								<option value="100">100</option>
        		 							</select>
        		 						</div>
        		 					</div>
        		 			</div>
        		 		</div>
        		 	</div>
        		</div>
        	</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- edit Area  -->
<div class="modal fade general" id="editarArea" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Agregar nueva área
      	</p>
      	<div class="row">
      		<div class="col-6">
      			<p class="dato">
      				<b data-label="area"> </b>
      				<span>
      					Área
      				</span>
      			</p>
      		</div>
      		<div class="col-6">
      			<p class="dato">
      				<b data-label="descripcion"> </b>
      				<span>
      					Descripción
      				</span>
      			</p>
      		</div>
      	</div>
        <form action="#" id="form-edit-area">
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Nombre" name="form-editArea-name">
        	</div>
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Descripción" name="form-editArea-description">
        	</div>
        	<div class="form-group">
        		<select name="responsable-area" class="form-control responsable-area select2" style="width: 100%;">
        			<option value="0" selected disabled> Responsable del área </option>
        		</select>
        	</div>
        	<div class="form-group text-left">
        		<label class="custom-switch">
        			<input type="checkbox" name="status-area" class="custom-switch-input">
        			<span class="custom-switch-indicator mr-2"></span>
        			<span class="custom-switch-description">Estatus del área</span>
        		</label>
        	</div>
        	<button type="button" class="btn btn-form" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>





<!-- crear permiso  -->
<div class="modal fade general" id="crearPermiso" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Agregar nuevo permiso
      	</p>
        <form action="#" id="form-crear-permiso">
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Permiso" name="form-crearPermiso-permiso">
        	</div>
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Descripción" name="form-crearPermiso-descripcion">
        	</div>
        	<div class="form-group">
        		<select name="categorias-permisos" class="form-control custom-select nice-select">
        			<option value="0" selected disabled> Seleccionar una categoría</option>
        			
        		</select>
        	</div>

        	<div class="row">
        		<div class="col-auto">
	        		<div class="form-group h-auto text-left">
		    				<label class="custom-switch">
		    					<input type="checkbox" name="canDelete-permission" class="custom-switch-input" >
		    					<span class="custom-switch-indicator mr-2"></span>
		    					<span class="custom-switch-description">Se puede eliminar</span>
		    				</label>
		    			</div>
	        	</div>
        	</div>

        	<button type="button" class="btn btn-form" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>

<!-- view permiso  -->
<div class="modal fade general" id="viewPermiso" tabindex="-1" role="dialog" aria-labelledby="viewPermisoLabel" aria-hidden="true">
	<div class="modal-dialog" data-modal="edit-area-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          Ver permiso
        </h4>
        <div class="row">
        	<div class="col-12">
        		<ul class="nav nav-tabs" id="permisoTab" role="tablist">
        		  <li class="nav-item" role="presentation">
        		    <a class="nav-link active" id="infoPermisos-tab" data-toggle="tab" href="#infoPermisos" role="tab" aria-controls="infoPermisos" aria-selected="true">Información</a>
        		  </li>
        		  <li class="nav-item" role="presentation">
        		    <a class="nav-link" id="usuariosPermisos-tab" data-toggle="tab" href="#usuariosPermisos" role="tab" aria-controls="usuariosPermisos" aria-selected="false">Usuarios asignados</a>
        		  </li>
        		</ul>
        	</div>
        </div>
        <div class="tab-content mt-3" id="permisoTabContent">
        	<div class="tab-pane fade show active" id="infoPermisos" role="tabpanel" aria-labelledby="infoPermisos-tab">
        		<div class="row">
		        	<div class="col-12 col-md-5">
		        		<p class="dato">
		        			<b class="permiso">
		        				xxxxxx
		        			</b>
		        			<span>
		        				Permiso
		        			</span>
		        		</p>
		        	</div>
		        	<div class="col-12 col-md-7">
		        		<p class="dato">
		        			<b class="descripcion">
		        				Área de usuarios SAC
		        			</b>
		        			<span>
		        				Descripción
		        			</span>
		        		</p>
		        	</div>
		        	<div class="col-12 col-md-4">
		        		<p class="dato">
		        			<b class="categoria">
		        				cat
		        			</b>
		        			<span>
		        				Categoría
		        			</span>
		        		</p>
		        	</div>
		        	<div class="col-12 col-md-4">
	        			<div class="form-group h-auto text-left">
	        				<label class="custom-switch">
	        					<input type="checkbox" name="canDelete-permission" class="custom-switch-input" disabled>
	        					<span class="custom-switch-indicator mr-2"></span>
	        					<span class="custom-switch-description">Se puede eliminar</span>
	        				</label>
	        			</div>
		        	</div>
		        	<div class="col-12 col-md-4">
	        			<div class="form-group h-auto text-left">
	        				<label class="custom-switch">
	        					<input type="checkbox" name="status-permission" class="custom-switch-input"  disabled>
	        					<span class="custom-switch-indicator mr-2"></span>
	        					<span class="custom-switch-description">Estatus del permiso</span>
	        				</label>
	        			</div>
		        	</div>
		        	<div class="col-12 text-left">
		        		<button class="btn btn-link text-moradoMedio w-auto" data-action="edit-permiso">
		        			<i class="fas fa-pencil-alt mr-2"></i>
		        			Editar
		        		</button>
		        	</div>
		        	<div class="col-12">
		        		<p class="dato">
		        			Pertenece a rol
		        		</p>
		        		<ul class="etiquetas-asignacion justify-content-start">
		        		</ul>
		        	</div>
		        </div>
        	</div>
        	<div class="tab-pane fade" id="usuariosPermisos" role="tabpanel" aria-labelledby="usuariosPermisos-tab">
        		<div class="logistify-table tableUsuariosPermisos">
        		 	<div class="container">
        		 		<div class="row">
        		 			<div class="col-12 p-0 p-md-3">
        		 				 	<div class="tableUsuariosPermisos-content"></div>	
        		 					<div class="logistify-table_limit" >
        		 						<span class="mr-3">
        		 							Mostrar: 
        		 						</span>
        		 						<div class="form-group">
        		 							<select name="" id="" data-table="tableUsuariosPermisos" class=" form-control custom-select nice-select">
        		 								<option disabled selected>/</option>
        		 								<option value="25">25</option>
        		 								<option value="50">50</option>
        		 								<option value="100">100</option>
        		 							</select>
        		 						</div>
        		 					</div>
        		 			</div>
        		 		</div>
        		 	</div>
        		</div>
        	</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- edit permiso  -->
<div class="modal fade general" id="editarPermiso" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Editar Permiso
      	</p>
      	<div class="row">
      		<div class="col-6">
      			<p class="dato">
      				<b class="permiso"></b>
      				<span>
      					Permiso
      				</span>
      			</p>
      		</div>
      		<div class="col-6">
      			<p class="dato">
      				<b class="descripcion"></b>
      				<span>
      					Descripción
      				</span>
      			</p>
      		</div>
      	</div>
        <form action="#" id="form-edit-permiso">
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Permiso" name="form-editPermiso-permiso">
        	</div>
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Descripción" name="form-editPermiso-descripcion">
        	</div>
        	<div class="form-group">
        		<select name="categorias-permisos" class="form-control custom-select nice-select">
        			<option value="0" selected disabled>Seleccionar categoría</option>
        		</select>
        	</div>

        	<div class="row">
        		<div class="col-auto">
	        		<div class="form-group h-auto text-left">
		    				<label class="custom-switch">
		    					<input type="checkbox" name="canDelete-permission" class="custom-switch-input" >
		    					<span class="custom-switch-indicator mr-2"></span>
		    					<span class="custom-switch-description">Se puede eliminar</span>
		    				</label>
		    			</div>
	        	</div>
	        	<div class="col-auto">
	        		<div class="form-group h-auto text-left">
		    				<label class="custom-switch">
		    					<input type="checkbox" name="status-permission" class="custom-switch-input" >
		    					<span class="custom-switch-indicator mr-2"></span>
		    					<span class="custom-switch-description">Estatus del permiso</span>
		    				</label>
		    			</div>
	        	</div>
        	</div>

        	<button type="button" class="btn btn-form" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>




<!-- crear rol  -->
<div class="modal fade general" id="crearRol" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Agregar Rol
      	</p>
      	<p class="alt">
      		Completa los campos para agregar un nuevo rol
      	</p>
        <form action="#" id="form-create-rol">
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Rol" name="form-createRol-rol">
        	</div>
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Descripción" name="form-createRol-descripcion">
        	</div>
        	<div class="row">
        		<div class="col-12 mb-3">
        			<p class="dato">
        				Permisos
        			</p>
        			<select multiple="multiple" class="group-filter" name="permisos"></select>
        		</div>
        		<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="accesTotal-rol" class="custom-switch-input"  >
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Acceso Total</span>
        				</label>
        			</div>
	        	</div>
	        	<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="assignClients-rol" class="custom-switch-input"  >
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Se pueden asignar clientes</span>
        				</label>
        			</div>
	        	</div>
	        	<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="isUser-rol" class="custom-switch-input" >
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Rol asignado a usuario</span>
        				</label>
        			</div>
	        	</div>
	        	<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="status-rol" class="custom-switch-input"  >
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Estatus del rol</span>
        				</label>
        			</div>
	        	</div>
	        	<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="canDelete-rol" class="custom-switch-input" >
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Se puede eliminar</span>
        				</label>
        			</div>
	        	</div>
        	</div>
        	<button type="button" class="btn btn-form mt-3" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>

<!-- view rol  -->
<div class="modal fade general" id="viewRol" tabindex="-1" role="dialog" aria-labelledby="viewPermisoLabel" aria-hidden="true">
	<div class="modal-dialog" data-modal="edit-area-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          Ver Rol
        </h4>
        <div class="row">
        	<div class="col-12">
        		<ul class="nav nav-tabs" id="rolTab" role="tablist">
        		  <li class="nav-item" role="presentation">
        		    <a class="nav-link active" id="infoRol-tab" data-toggle="tab" href="#infoRol" role="tab" aria-controls="infoRol" aria-selected="true">Información</a>
        		  </li>
        		  <li class="nav-item" role="presentation">
        		    <a class="nav-link" id="usuariosRol-tab" data-toggle="tab" href="#usuariosRol" role="tab" aria-controls="usuariosRol" aria-selected="false">Usuarios asignados</a>
        		  </li>
        		</ul>
        	</div>
        </div>
        <div class="tab-content mt-3" id="rolTabContent">
        	<div class="tab-pane fade show active" id="infoRol" role="tabpanel" aria-labelledby="infoRol-tab">
        		<div class="row">
        			<div class="col-6">
        				<p class="dato">
        					<b class="rol"></b>
        					<span>
        						Administrador
        					</span>
        				</p>
        			</div>
        			<div class="col-6">
        				<p class="dato">
        					<b class="descripcion"></b>
        					<span>
        						Descripción
        					</span>
        				</p>
        			</div>
        			<div class="col-12 mb-3">
        				<p class="dato">
        					Permisos
        				</p>
        				<select multiple="multiple" class="group-filter" name="permisos"></select>
        			</div>

        			<div class="col-12 col-md-4">
	        			<div class="form-group h-auto text-left">
	        				<label class="custom-switch">
	        					<input type="checkbox" name="accesTotal-rol" class="custom-switch-input"  disabled>
	        					<span class="custom-switch-indicator mr-2"></span>
	        					<span class="custom-switch-description">Acceso Total</span>
	        				</label>
	        			</div>
		        	</div>
		        	<div class="col-12 col-md-4">
	        			<div class="form-group h-auto text-left">
	        				<label class="custom-switch">
	        					<input type="checkbox" name="assignClients-rol" class="custom-switch-input"  disabled>
	        					<span class="custom-switch-indicator mr-2"></span>
	        					<span class="custom-switch-description">Se pueden asignar clientes</span>
	        				</label>
	        			</div>
		        	</div>
		        	<div class="col-12 col-md-4">
	        			<div class="form-group h-auto text-left">
	        				<label class="custom-switch">
	        					<input type="checkbox" name="isUser-rol" class="custom-switch-input" disabled>
	        					<span class="custom-switch-indicator mr-2"></span>
	        					<span class="custom-switch-description">Rol asignado a usuario</span>
	        				</label>
	        			</div>
		        	</div>
		        	<div class="col-12 col-md-4">
	        			<div class="form-group h-auto text-left">
	        				<label class="custom-switch">
	        					<input type="checkbox" name="status-rol" class="custom-switch-input"  disabled>
	        					<span class="custom-switch-indicator mr-2"></span>
	        					<span class="custom-switch-description">Estatus del rol</span>
	        				</label>
	        			</div>
		        	</div>
		        	<div class="col-12 col-md-4">
	        			<div class="form-group h-auto text-left">
	        				<label class="custom-switch">
	        					<input type="checkbox" name="canDelete-rol" class="custom-switch-input" disabled>
	        					<span class="custom-switch-indicator mr-2"></span>
	        					<span class="custom-switch-description">Se puede eliminar</span>
	        				</label>
	        			</div>
		        	</div>
		        	
		        	
        			<div class="col-12 text-left">
        				<button class="btn btn-link text-moradoMedio w-auto h-auto" data-action="edit-rol">
        					<i class="fas fa-pencil-alt mr-2"></i>
        					Editar
        				</button>
        			</div>
        		</div>
        	</div>
        	<div class="tab-pane fade" id="usuariosRol" role="tabpanel" aria-labelledby="usuariosRol-tab">
        		<div class="logistify-table tableUsuariosRol">
        		 	<div class="container">
        		 		<div class="row">
        		 			<div class="col-12 p-0 p-md-3">
        		 				 	<div class="tableUsuariosRol-content"></div>	
        		 					<div class="logistify-table_limit" >
        		 						<span class="mr-3">
        		 							Mostrar: 
        		 						</span>
        		 						<div class="form-group">
        		 							<select name="" id="" data-table="tableUsuariosRol" class=" form-control custom-select nice-select">
        		 								<option disabled selected>/</option>
        		 								<option value="25">25</option>
        		 								<option value="50">50</option>
        		 								<option value="100">100</option>
        		 							</select>
        		 						</div>
        		 					</div>
        		 			</div>
        		 		</div>
        		 	</div>
        		</div>
        	</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- edit rol  -->
<div class="modal fade general" id="editarRol" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Editar Rol
      	</p>
      	<div class="row">
      		<div class="col-6">
      			<p class="dato">
      				<b class="rol"></b>
      				<span>
      					Administrador
      				</span>
      			</p>
      		</div>
      		<div class="col-6">
      			<p class="dato">
      				<b class="descripcion"></b>
      				<span>
      					Descripción
      				</span>
      			</p>
      		</div>
      	</div>
        <form action="#" id="form-edit-rol">
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Rol" name="form-editRol-rol">
        	</div>
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Descripción" name="form-editRol-descripcion">
        	</div>
        	<div class="row">
        		<div class="col-12 mb-3">
        			<p class="dato ">
        				Permisos
        			</p>
        			<select multiple="multiple" class="group-filter" name="permisos"></select>
        		</div>
        		<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="status-rol" class="custom-switch-input" >
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Acceso Total</span>
        				</label>
        			</div>
	        	</div>
	        	<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="assignClients-rol" class="custom-switch-input" >
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Se pueden asignar clientes</span>
        				</label>
        			</div>
	        	</div>
	        	<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="isUser-rol" class="custom-switch-input">
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Rol asignado a usuario</span>
        				</label>
        			</div>
	        	</div>
	        	<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="status-rol" class="custom-switch-input" >
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Estatus del rol</span>
        				</label>
        			</div>
	        	</div>
	        	<div class="col-12 col-md-4">
        			<div class="form-group h-auto text-left">
        				<label class="custom-switch">
        					<input type="checkbox" name="canDelete-rol" class="custom-switch-input">
        					<span class="custom-switch-indicator mr-2"></span>
        					<span class="custom-switch-description">Se puede eliminar</span>
        				</label>
        			</div>
	        	</div>
        	</div>
        	<button type="button" class="btn btn-form mt-3" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>



<!-- crear Puesto  -->
<div class="modal fade general" id="crearPuesto" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Agregar nuevo Puesto
      	</p>
      	<p class="alt">
      		Completa los campos para agregar un nuevo Puesto
      	</p>
        <form action="#" id="form-crear-puesto">
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Nombre" name="form-createPuesto-puesto">
        	</div>
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Descripción" name="form-createPuesto-descripcion">
        	</div>
        	<button type="button" class="btn btn-form mt-3" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>

<!-- view Puesto  -->
<div class="modal fade general" id="viewPuesto" tabindex="-1" role="dialog" aria-labelledby="viewPermisoLabel" aria-hidden="true">
	<div class="modal-dialog" data-modal="edit-area-success" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h4>
          Ver Puesto
        </h4>
        <div class="row">
        	<div class="col-12">
        		<ul class="nav nav-tabs" id="puestoTab" role="tablist">
        		  <li class="nav-item" role="presentation">
        		    <a class="nav-link active" id="infoPuesto-tab" data-toggle="tab" href="#infoPuesto" role="tab" aria-controls="infoPuesto" aria-selected="true">Información</a>
        		  </li>
        		  <li class="nav-item" role="presentation">
        		    <a class="nav-link" id="usuariosPuesto-tab" data-toggle="tab" href="#usuariosPuesto" role="tab" aria-controls="usuariosPuesto" aria-selected="false">Usuarios asignados</a>
        		  </li>
        		</ul>
        	</div>
        </div>
        <div class="tab-content mt-3" id="puestoTabContent">
        	<div class="tab-pane fade show active" id="infoPuesto" role="tabpanel" aria-labelledby="infoPuesto-tab">
        		<div class="row">
		        	<div class="col-6">
		        		<p class="dato">
		        			<b class="puesto"></b>
		        			<span>
		        				Puesto
		        			</span>
		        		</p>
		        	</div>
		        	<div class="col-6">
		        		<p class="dato">
		        			<b class="descripcion"></b>
		        			<span>
		        				Descripción
		        			</span>
		        		</p>
		        	</div>
		        	<div class="col-12 col-md-4">
	        			<div class="form-group h-auto text-left">
	        				<label class="custom-switch">
	        					<input type="checkbox" name="status-puesto" class="custom-switch-input"  disabled >
	        					<span class="custom-switch-indicator mr-2"></span>
	        					<span class="custom-switch-description">Estatus del permiso</span>
	        				</label>
	        			</div>
		        	</div>
		        	<div class="col-12 text-left">
		        		<button class="btn btn-link text-moradoMedio w-auto h-auto" data-action="edit-puesto">
		        			<i class="fas fa-pencil-alt mr-2"></i>
		        			Editar
		        		</button>
		        		<button class="btn btn-link text-moradoMedio w-auto h-auto" data-action="delete-puesto">
		        			<i class="fas fa-trash mr-2"></i>
		        			Eliminar
		        		</button>
		        	</div>
		        </div>
        	</div>
        	<div class="tab-pane fade" id="usuariosPuesto" role="tabpanel" aria-labelledby="usuariosPuesto-tab">
        		<div class="logistify-table tableUsuariosPuesto">
        		 	<div class="container">
        		 		<div class="row">
        		 			<div class="col-12 p-0 p-md-3">
        		 				 	<div class="tableUsuariosPuesto-content"></div>	
        		 					<div class="logistify-table_limit" >
        		 						<span class="mr-3">
        		 							Mostrar: 
        		 						</span>
        		 						<div class="form-group">
        		 							<select name="" id="" data-table="tableUsuariosPuesto" class=" form-control custom-select nice-select">
        		 								<option disabled selected>/</option>
        		 								<option value="25">25</option>
        		 								<option value="50">50</option>
        		 								<option value="100">100</option>
        		 							</select>
        		 						</div>
        		 					</div>
        		 			</div>
        		 		</div>
        		 	</div>
        		</div>
        	</div>
        </div>
        
      </div>
    </div>
  </div>
</div>

<!-- edit Puesto  -->
<div class="modal fade general" id="editarPuesto" tabindex="-1" role="dialog" aria-labelledby="verEditarUsuarioLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
      	<p class="titulo">
      		Ver Puesto
      	</p>
      	<div class="row">
      		<div class="col-6">
      			<p class="dato">
      				<b class="puesto"></b>
      				<span>
      					Puesto
      				</span>
      			</p>
      		</div>
      		<div class="col-6">
      			<p class="dato">
      				<b class="descripcion"></b>
      				<span>
      					Descripción
      				</span>
      			</p>
      		</div>
      	</div>
        <form action="#" id="form-edit-puesto">
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Puesto" name="form-editPuesto-puesto">
        	</div>
        	<div class="form-group">
        		<input type="text" class="form-control" placeholder="Descripción" name="form-editPuesto-descripcion">
        	</div>
    	  	<div class="col-12 col-md-4">
    				<div class="form-group h-auto text-left">
    					<label class="custom-switch">
    						<input type="checkbox" name="status-puesto" class="custom-switch-input" checked>
    						<span class="custom-switch-indicator mr-2"></span>
    						<span class="custom-switch-description">Estatus del permiso</span>
    					</label>
    				</div>
    	  	</div>
        	<button type="button" class="btn btn-form mt-3" data-action="save">
        		Guardar
        	</button>
        </form>
      </div>
      <button class="btn btn-morado btn-cuadrado" type="button" data-dismiss="modal">
      	Cancelar
      </button>
    </div>
  </div>
</div>


















































