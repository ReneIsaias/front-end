<main class="restorePass">
	<section class="restorePass-request">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12  col-md-6 col-lg-4 mx-auto">
					<p>
						Ingresa el correo electrónico con el que te registraste
					</p>
					<form action="#" id="form-restorePass">
						<div class="form-group">
						  <input type="text" class="form-control" name="restore-mail" placeholder="Correo electrónico">
						</div>
						<button class="btn btn-form">
						  Recuperar contraseña
						</button>
						<a href="login" class="btn btn-link">
							Cancelar
						</a>
					</form>
				</div>
			</div>
		</div>
	</section>
	<section class="restorePass-change d-none">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-md-6 col-lg-4 mx-auto">
					<p>
						Cambiar tu contraseña
					</p>
					<form action="#" id="form-restorePass-change">
						<div class="form-group">
						  <input type="text" class="form-control" name="restore-pass" placeholder="Nueva contraseña">
						</div>
						<div class="form-group">
						  <input type="password" class="form-control" name="restore-passVerify" placeholder="Verificar contraseña" data-type="pass">
						  <i class="icon fas fa-eye" data-pass="hide" data-form="#form-restorePass-change"></i>
						</div>
						<button class="btn btn-form">
						  Recuperar contraseña
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>