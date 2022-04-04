<main class="perfil">
	<div class="container">
		<div class="row">
			<div class="col-12 d-none d-md-block mb-3">
				<h1>
					Colaborador
				</h1>
			</div>
			<div class="col-12 col-md-3 col-lg-4">
				<div class="perfil-user">
					<img src="<?= base_url()?>assets/images/logistify/img-perfil.png" alt="Foto de perfil" class="">
					<p data-perfil="user">
						Alfredo
					</p>
					<span>Usuario</span>
				</div>
			</div>
			<div class="col-12 col-md-4 col-lg-4">
				<div class="perfil-datosContacto">
					<p class="title">Datos de contacto</p>
					<div class="row">
						<div class="col-6 col-md-12">
							<p>
								Alfredo Pérez
							</p>
							<span>
								Nombre completo
							</span>
						</div>
						<div class="col-6 col-md-12">
							<p>
								55 6789 1234
							</p>
							<span>
								Teléfono
							</span>
						</div>
						<div class="col-6 col-md-12">
							<p>
								Ejecutivo SAC
							</p>
							<span>
								Puesto
							</span>
						</div>
						<div class="col-6 col-md-12">
							<p>
								13/04/88
							</p>
							<span>
								Fecha de nacimiento
							</span>
						</div>
						<div class="col-12">
							<p>
								Alfredo@logistify.com.mx
							</p>
							<span>
								Correo electrónico
							</span>
						</div>
					</div>
					<button class="btn btn-link w-auto" data-action="edit-perfil">
						<i class="fas fa-pencil-alt"></i>
						Editar
					</button>
				</div>
			</div>
			<div class="col-12 col-md-5 col-lg-4">
				<div class="perfil-tipo-cuenta">
					<p class="title">
						Tipo de cuenta
					</p>
					<div class="row">
						<div class="col-6">
							<p>
								Nombre Rol
							</p>
							<span>
								Rol asignado
							</span>
						</div>
						<div class="col-6">
							<p>
								Nombre área
							</p>
							<span>
								Área asignada
							</span>
						</div>
					</div>
				</div>
				<div class="perfil-clientes">
					<p class="title">
						Clientes asignados
					</p>
					<ul class="etiquetas">
						<li> Cliente 1</li>
						<li> Cliente 2</li>
					</ul>
					<button class="btn btn-link w-auto" data-action="add-cliente">
						<i class="fas fa-plus"></i>
						Agregar
					</button>
					<button class="btn btn-link w-auto" data-action="delete-cliente">
						<i class="fas fa-trash"></i>
						Eliminar Cliente
					</button>
				</div>
			</div>
		</div>
	</div>
</main>

