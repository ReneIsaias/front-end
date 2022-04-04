let _API = 'http://54.172.217.230/api/v1/',
	token = localStorage.getItem('token');
let headers = {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Host': '<calculated when request is sent>',
		'Authorization': 'Bearer ' + token,
		'Accept': '*/*',
		'Accept-Encoding': 'gzip, deflate, br',
		'Connection': 'keep-alive'
	},
	headers_users = {
		'Access-Control-Allow-Origin': '*',
		'Host': '<calculated when request is sent>',
		'Authorization': 'Bearer ' + token,
		'Accept': 'application/json',
		'Accept-Encoding': 'gzip, deflate, br',
		'Connection': 'keep-alive',
		'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
	}


/*
 ***************************
 *  Peticiones Generales   *
 ***************************
 */



function subirImagen(file) {
	fetch(_API + 'update-image', {
			'method': 'POST',
			'headers': {
				'Content-Type': 'multipart/form-data',
				'Accept-Encoding': 'gzip, deflate, br',
				'Authorization': 'Bearer ' + token
			},
			'body': file
		})
		.then(res => res.json())
		.then(res => {
			console.log(file.get('src'))
			console.log(res)
		})
}

function capitalize(data) {
	let categoria = data.toLowerCase(),
		capitalize = categoria.charAt(0).toUpperCase() + categoria.slice(1);
	return capitalize;
}

function listarUsuarios(modal) {
	fetch(_API + 'users?included=areas,roles', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => {
			return res.json();
		})
		.then(res => {
			if (!res.result) {
				console.log('algo aslio mal');
			}
			if (res.result) {
				if (!$(modal + ' select[name="responsable-area"]').data('cargado')) {
					$(modal + ' select[name="responsable-area"]').data('cargado', true);
					res.data.map(user => {
						let itemCliente = '<option value="' + user.id + '">' + capitalize(user.name.toLowerCase()) + ' ' + capitalize(user.lastname.toLowerCase()) + '</option>';
						$(modal + ' select[name="responsable-area"]').append(itemCliente);
					})
					console.log('no se han cargado');
				} else {
					console.log('ya se cargaron')
				}
			}
		});
}


/* Request Permisos para enlistar */
function requestPermisos() {
	fetch(_API + 'classifications', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				localStorage.setItem('cat-permisos', JSON.stringify(res.data))
			}
		})

	fetch(_API + 'permissions', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				localStorage.setItem('permisos', JSON.stringify(res.data))
			}
		})
}

function requestClientes(modal) {
	fetch(_API + 'customers', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			res.data.map(client => {
				let itemCliente = '<option value="' + client.id + '">' + capitalize(client.business_name.toLowerCase()) + '</option>'
				$(modal + ' select[name="clientes"]').append(itemCliente);
			});
			console.log('se agregaron los clientes')
		})

}

function requestAreaPuestoRol() {
	fetch(_API + 'areas', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				let areas = []
				res.data.map(item => {
					if (item.status == 1) {
						areas.push({
							'id': item.id,
							'area': capitalize(item.area.toLowerCase()),
						})
					}
				})
				localStorage.setItem('areas', JSON.stringify(areas))
			}
		});

	fetch(_API + 'stalls', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				let stalls = []
				res.data.map(item => {
					if (item.status == 1) {
						stalls.push({
							'id': item.id,
							'stall': capitalize(item.stall.toLowerCase()),
						})
					}
				})
				localStorage.setItem('stall', JSON.stringify(stalls))
			}
		});

	fetch(_API + 'roles', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				let roles = []
				res.data.map(item => {
					if (item.status == 1) {
						roles.push({
							'id': item.id,
							'rol': capitalize(item.rol.toLowerCase()),
							'to_assign_customers': item.to_assign_customers
						})
					}
				})
				localStorage.setItem('rol', JSON.stringify(roles))
			}
		});


}
if (!localStorage.getItem('permisos')) {
	requestPermisos();
}
/*
 ***************************
 *    Peticiones Usuario   *
 ***************************
 */

//Crear nuevo usuario
function crearNuevoUsuario(data) {
	fetch(_API + 'users', {
			'method': 'POST',
			'body': JSON.stringify(data),
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#crearUsuario').modal('hide')
				$('#crearUsuario').on('hidden.bs.modal', function(e) {
					$('body').addClass('modal-open');
				});
				showAlerta('create-user-success', 'success')
			}
		})
}

function verUsuario(user, accion) {
	fetch(_API + 'users/' + user + '?included=stall,account,areas,areas.responsable,roles,permissions,roles.permissions,customers,logins,losses,shipments,image', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			let imgPerfil = res.data.image.id,
				nombre = res.data.name,
				apellido = res.data.lastname,
				usuario = res.data.username,
				correo = res.data.email,
				telefono = res.data.phone_number,
				fecha = res.data.account.birth_date,
				genero = capitalize(res.data.account.sex.toLowerCase()),
				area = res.data.areas,
				areaID,
				puesto = capitalize(res.data.stall.stall.toLowerCase()),
				puestoID = res.data.stall.id,
				rol = res.data.roles,
				rolID,
				permisos = res.data.permissions,
				clientes = res.data.customers;


			if (area.length > 0) {
				area = capitalize(res.data.areas[0].area.toLowerCase());
				areaID = res.data.areas[0].id;
			}
			if (rol.length > 0) {
				rol = capitalize(res.data.roles[0].rol.toLowerCase());
				rolID = res.data.roles[0].id;
			}
			if (accion == 'view') {
				$('.pasos[data-section="datos-colaborador"]').addClass('current').removeClass('d-none');
				$('.pasos[data-section="datos-perfil"]').addClass('d-none').removeClass('current');
				$('#verUsuario select[name="clientes"]').select2('destroy');
				$('#verUsuario select[name="clientes"]').html('');
				if (!res.result) {
					showAlerta('error-view-user', 'error')
				}
				if (res.result) {
					fetch(_API + 'images/image/' + imgPerfil, {
							'method': 'GET',
							'headers': headers
						})
						.then(res => res.json())
						.then(res => {
							if (!res.result) {
								if (genero == 'Hombre') {
									imgPerfil = 'assets/images/logistify/img-profile-male-default.png';

								}
								if (genero == 'Mujer') {
									imgPerfil = 'assets/images/logistify/img-profile-female-default.png';
								}
							}
							if (res.result) {
								if (res.data == null || res.data == undefined) {
									if (genero == 'Hombre') {
										imgPerfil = 'assets/images/logistify/img-profile-male-default.png';
									}
									if (genero == 'Mujer') {
										imgPerfil = 'assets/images/logistify/img-profile-female-default.png';
									}
								} else {
									imgPerfil = res.data
								}

							}
							$('#verUsuario #view-user-imgPerfil').attr('src', imgPerfil);
						});
					$('#verUsuario').find('button[data-action="delete"]').attr('data-user-id', res.data.id);
					$('#verUsuario').find('button[data-action="delete"]').data('user-id', res.data.id);
					$('#verUsuario input[name="view-user-firstname"]').val(nombre);
					$('#verUsuario input[name="view-user-lastname"]').val(apellido);
					$('#verUsuario input[name="view-user-username"]').val(usuario);
					$('#verUsuario input[name="view-user-mail"]').val(correo);
					$('#verUsuario input[name="view-user-phone"]').val(telefono);
					$('#verUsuario input[name="view-user-birthday"]').val(fecha);
					$('#verUsuario input[name="view-user-genere"]').val(genero);
					$('#verUsuario input[name="view-user-area"]').val(area);
					$('#verUsuario input[name="view-user-puesto"]').val(puesto);
					$('#verUsuario input[name="view-user-rol"]').val(rol);
					$('#verUsuario b[data-label="nombre-completo"]').html(nombre + ' ' + apellido);
					$('#verUsuario b[data-label="puesto"]').html(puesto);

					setTimeout(function() {
						$('#verUsuario select[name="permisos"] option').prop('disabled', true);
						$('#verUsuario select[name="clientes"] option').prop('disabled', true);
						$('#verUsuario select[name="clientes"]').prop('disabled', true);
						if (permisos.length > 0) {
							$('#verUsuario .permisos').removeClass('d-none');
							permisos.map(item => {
								$('#verUsuario select[name="permisos"] option[value="' + item.id + '"]').prop('selected', true);
							});
						} else {
							$('#verUsuario .permisos').addClass('d-none');
						}
						if (permisos.length > 0) {
							$('#verUsuario .clientes').removeClass('d-none');
							clientes.map(item => {
								$('#verUsuario select[name="clientes"] option[value="' + item.id + '"]').prop('selected', true)
							});
						} else {
							$('#verUsuario .clientes').addClass('d-none');
						}

						$('select[name="permisos"]').multipleSelect('refresh');
						$('.select-clientes').select2({
							dropdownParent: $('#verUsuario .pasos[data-section="datos-perfil"] .clientes')
						});

					}, 600);

				}
			}
			if (accion == 'edit') {
				$('.pasos[data-section="datos-colaborador"]').addClass('current').removeClass('d-none');
				$('.pasos[data-section="datos-perfil"]').addClass('d-none').removeClass('current');
				$('#editarUsuario select[name="clientes"]').select2('destroy');
				$('#editarUsuario select[name="clientes"]').html('');
				$('#editarUsuario button[data-action="save"]').attr('data-id', user);
				$('#editarUsuario button[data-action="save"]').data('id', user);
				$('#editarUsuario select[name="area"]').html('');
				$('#editarUsuario select[name="puestos"]').html('');
				$('#editarUsuario select[name="roles"]').html('');
				$('#editarUsuario select[name="area"]').niceSelect('destroy');
				$('#editarUsuario select[name="puestos"]').niceSelect('destroy');
				$('#editarUsuario select[name="roles"]').niceSelect('destroy');
				if (!res.result) {
					showAlerta('error-view-user', 'error')
				}
				if (res.result) {
					fetch(_API + 'images/image/' + imgPerfil, {
							'method': 'GET',
							'headers': headers
						})
						.then(res => res.json())
						.then(res => {
							if (!res.result) {
								if (genero == 'Hombre') {
									imgPerfil = 'assets/images/logistify/img-profile-male-default.png';

								}
								if (genero == 'Mujer') {
									imgPerfil = 'assets/images/logistify/img-profile-female-default.png';
								}
							}
							if (res.result) {
								if (res.data == null || res.data == undefined) {
									if (genero == 'Hombre') {
										imgPerfil = 'assets/images/logistify/img-profile-male-default.png';
									}
									if (genero == 'Mujer') {
										imgPerfil = 'assets/images/logistify/img-profile-female-default.png';
									}
								} else {
									imgPerfil = res.data
								}

							}
							$('#editarUsuario #editar-user-imgPerfil').attr('src', imgPerfil);
						})
					$('#editarUsuario input[name="edit-user-firstname"]').val(nombre);
					$('#editarUsuario input[name="edit-user-lastname"]').val(apellido);
					$('#editarUsuario input[name="edit-user-username"]').val(usuario);
					$('#editarUsuario input[name="edit-user-mail"]').val(correo);
					$('#editarUsuario input[name="edit-user-phone"]').val(telefono);
					$('#editarUsuario b[data-label="nombre-completo"]').html(nombre + ' ' + apellido)
					$('#editarUsuario b[data-label="puesto"]').html(puesto)
					setTimeout(function() {
						if (areaID != undefined) {
							$('#editarUsuario select[name="area"] option[value="' + areaID + '"]').prop('selected', true);
						} else {
							$('#editarUsuario select[name="area"]').prepend('<option selected disabled>Área</option>');
						}
						if (puestoID != undefined) {
							$('#editarUsuario select[name="puestos"] option[value="' + puestoID + '"]').prop('selected', true);
						} else {
							$('#editarUsuario select[name="puestos"]').prepend('<option selected disabled>Puesto</option>');

						}
						if (rolID != undefined) {
							$('#editarUsuario select[name="roles"] option[value="' + rolID + '"]').prop('selected', true);
						} else {
							$('#editarUsuario select[name="roles"]').prepend('<option selected disabled>Rol</option>');
						}
						permisos.map(item => {
							$('#editarUsuario select[name="permisos"] option[value="' + item.id + '"]').prop('selected', true);
						});
						clientes.map(item => {
							$('#editarUsuario select[name="clientes"] option[value="' + item.id + '"]').prop('selected', true);
						});
						$('select[name="permisos"]').multipleSelect('refresh');
						$('.select-clientes').select2({
							dropdownParent: $('#editarUsuario .pasos[data-section="datos-perfil"] .clientes')
						});
						$('#editarUsuario select[name="area"]').niceSelect();
						$('#editarUsuario select[name="puestos"]').niceSelect();
						$('#editarUsuario select[name="roles"]').niceSelect();
					}, 600);
					$('#editarUsuario button[data-action="save"]').on('click', function(e) {
						let dataForm = {
							name: $('#editarUsuario input[name="edit-user-firstname"]').val(),
							lastname: $('#editarUsuario input[name="edit-user-lastname"]').val(),
							username: $('#editarUsuario input[name="edit-user-username"]').val(),
							email: $('#editarUsuario input[name="edit-user-mail"]').val(),
							phone_number: $('#editarUsuario input[name="edit-user-phone"]').val(),
							is_webservices: res.data.is_webservices,
							stall_id: $('#editarUsuario select[name="puestos"]').val(),
							area_id: $('#editarUsuario select[name="area"]').val(),
							role_id: $('#editarUsuario select[name="roles"]').val(),
							customers: $('#editarUsuario select[name="clientes"]').val(),
							permissions: $('#editarUsuario select[name="permisos"]').val()
						}
						actualizarUsuario(dataForm, user);
					});
				}
			}
		})
}

function verUsuarioDelete(user, accion) {
	console.log('usuarios delete')
	fetch(_API + 'admin/users/' + user + '?included=stall,account,areas,areas.responsable,roles,permissions,roles.permissions,customers,logins,losses,shipments,image', {
			'method': 'GET',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			let imgPerfil = res.data.image.id,
				nombre = res.data.name,
				apellido = res.data.lastname,
				usuario = res.data.username,
				correo = res.data.email,
				telefono = res.data.phone_number,
				fecha = res.data.account.birth_date,
				genero = capitalize(res.data.account.sex.toLowerCase()),
				area = res.data.areas,
				areaID,
				puesto = capitalize(res.data.stall.stall.toLowerCase()),
				puestoID = res.data.stall.id,
				rol = res.data.roles,
				rolID,
				permisos = res.data.permissions,
				clientes = res.data.customers;


			if (area.length > 0) {
				area = capitalize(res.data.areas[0].area.toLowerCase());
				areaID = res.data.areas[0].id;
			}
			if (rol.length > 0) {
				rol = capitalize(res.data.roles[0].rol.toLowerCase());
				rolID = res.data.roles[0].id;
			}
			if (accion == 'view') {
				$('.pasos[data-section="datos-colaborador"]').addClass('current').removeClass('d-none');
				$('.pasos[data-section="datos-perfil"]').addClass('d-none').removeClass('current');
				$('#verUsuario select[name="clientes"]').select2('destroy');
				$('#verUsuario select[name="clientes"]').html('');
				if (!res.result) {
					showAlerta('error-view-user', 'error')
				}
				if (res.result) {
					fetch(_API + 'images/image/' + imgPerfil, {
							'method': 'GET',
							'headers': headers
						})
						.then(res => res.json())
						.then(res => {
							if (!res.result) {
								if (genero == 'Hombre') {
									imgPerfil = 'assets/images/logistify/img-profile-male-default.png';

								}
								if (genero == 'Mujer') {
									imgPerfil = 'assets/images/logistify/img-profile-female-default.png';
								}
							}
							if (res.result) {
								if (res.data == null || res.data == undefined) {
									if (genero == 'Hombre') {
										imgPerfil = 'assets/images/logistify/img-profile-male-default.png';
									}
									if (genero == 'Mujer') {
										imgPerfil = 'assets/images/logistify/img-profile-female-default.png';
									}
								} else {
									imgPerfil = res.data
								}

							}
							$('#verUsuario #view-user-imgPerfil').attr('src', imgPerfil);
						})
					$('#verUsuario').find('button[data-action="delete"]').attr('data-user-id', res.data.id).addClass('permanente');
					$('#verUsuario').find('button[data-action="delete"]').data('user-id', res.data.id)
					$('#verUsuario input[name="view-user-firstname"]').val(nombre);
					$('#verUsuario input[name="view-user-lastname"]').val(apellido);
					$('#verUsuario input[name="view-user-username"]').val(usuario);
					$('#verUsuario input[name="view-user-mail"]').val(correo);
					$('#verUsuario input[name="view-user-phone"]').val(telefono);
					$('#verUsuario input[name="view-user-birthday"]').val(fecha);
					$('#verUsuario input[name="view-user-genere"]').val(genero);
					$('#verUsuario input[name="view-user-area"]').val(area);
					$('#verUsuario input[name="view-user-puesto"]').val(puesto);
					$('#verUsuario input[name="view-user-rol"]').val(rol);
					$('#verUsuario b[data-label="nombre-completo"]').html(nombre + ' ' + apellido);
					$('#verUsuario b[data-label="puesto"]').html(puesto);

					setTimeout(function() {
						$('#verUsuario select[name="permisos"] option').prop('disabled', true);
						$('#verUsuario select[name="clientes"] option').prop('disabled', true);
						$('#verUsuario select[name="clientes"]').prop('disabled', true);
						if (permisos.length > 0) {
							$('#verUsuario .permisos').removeClass('d-none');
							permisos.map(item => {
								$('#verUsuario select[name="permisos"] option[value="' + item.id + '"]').prop('selected', true);
							});
						} else {
							$('#verUsuario .permisos').addClass('d-none');
						}
						if (permisos.length > 0) {
							$('#verUsuario .clientes').removeClass('d-none');
							clientes.map(item => {
								$('#verUsuario select[name="clientes"] option[value="' + item.id + '"]').prop('selected', true)
							});
						} else {
							$('#verUsuario .clientes').addClass('d-none');
						}

						$('select[name="permisos"]').multipleSelect('refresh');
						$('.select-clientes').select2({
							dropdownParent: $('#verUsuario .pasos[data-section="datos-perfil"] .clientes')
						});
					}, 600);

				}
			}
		});
}

function actualizarUsuario(user, id) {
	fetch(_API + 'users/' + id, {
			'method': 'PUT',
			'header': headers,
			'body': JSON.stringify(user)
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#editarUsuario').modal('hide');
				setTimeout(function() {
					showAlerta('edit-user-error', 'succes');
				}, 500)
			}
			if (res.result) {
				$('#editarUsuario').modal('hide');
				setTimeout(function() {
					showAlerta('edit-user-success', 'succes');
				}, 500)

			}
		})
}

function restaurarUsuario(user) {
	fetch(_API + 'admin/users/' + user, {
			'method': 'PUT',
			'header': headers
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-user-error', 'succes');
				}, 500)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-user-success', 'succes');
					renderUserTable();
				}, 500)

			}
		})
}

/* Eliminar usuario */
function eliminarUsuario(data) {
	fetch(_API + 'users/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				$('#verUsuario').modal('hide');
				$('#editarUsuario').modal('hide');
				setTimeout(function() {
					showAlerta('delete-user-success', 'succes');
					renderUserTable();
				}, 1500)
			}
		})
}

function eliminarUsuarioPermanente(data) {
	fetch(_API + 'admin/users/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				$('#verUsuario').modal('hide');
				setTimeout(function() {
					showAlerta('delete-user-success', 'succes');
					renderUserDeleteTable();
				}, 500)
			}
		})
}
/*
 ***************************
 *   Peticiones Areas      *
 ***************************
 */
let renderizada = false;

/* Ver info Area */

function crearNuevaArea(data) {
	console.log(data)
	fetch(_API + 'areas', {
			'method': 'POST',
			'body': JSON.stringify(data),
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#crearArea').modal('hide')
				setTimeout(function() {
					renderAreaTable();
					showAlerta('create-area-success', 'succes');
				}, 1500)

			}
		})
}


function verArea(data, accion) {
	let dataUserAreas,
		usersAreas;
	$('.nav-tabs .nav-link#informacion-tab').tab('show');
	fetch(_API + 'areas/' + data + '?included=users,responsable', {
			'method': 'GET',
			'headers': headers
		})
		.then((data) => {
			return data.json()
		})
		.then((result) => {
			if (accion == 'view') {
				console.log(result)
				$('#viewArea').find('b[data-label="area"]').html(capitalize(result.data.area.toLowerCase()));
				$('#viewArea').find('b[data-label="descripcion"]').html(result.data.description)
				$('#viewArea').find('b[data-label="responsable"]').html(responsable(result.data.responsable));
				$('#viewArea').find('button[data-action="edit-area"]').attr('data-area-id', result.data.id);
				$('#viewArea').find('button[data-action="edit-area"]').data('area-id', result.data.id);
				$('#viewArea').find('button[data-action="delete-area"]').attr('data-area-id', result.data.id);
				$('#viewArea').find('button[data-action="delete-area"]').data('area-id', result.data.id);
				dataUserAreas = result.data.users;
				usersAreas = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [
						'Nombre',
						'Email'
					],
					data: dataUserAreas.map(area => [
						area.name,
						area.email
					]),
					className: {
						table: 'logistify-table'
					},
					style: {
						table: {
							'white-space': 'nowrap',
							'border': '0px'
						}
					},
					pagination: {
						enabled: true,
						summary: false,
						limit: 15
					},
					sort: true,
					language: {
						'search': {
							'placeholder': 'Buscar'
						},
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tableUsuariosAreas-content"));
				updateTable(15)
				$('#viewArea').modal('show');
			}
			if (accion == 'edit') {
				if (!result.result) {}
				if (result.result) {
					$('#editarArea').find('b[data-label="area"]').html(capitalize(result.data.area.toLowerCase()));
					$('#editarArea').find('b[data-label="descripcion"]').html(result.data.description)
					$('#editarArea #form-edit-area input[name="form-editArea-name"]').val(capitalize(result.data.area.toLowerCase()))
					$('#editarArea #form-edit-area input[name="form-editArea-description"]').val(result.data.description)
					$('#editarArea').find('b[data-label="responsable"]').html(responsable(result.data.responsable));
					$('#editarArea').find('button[data-action="edit-area"]').attr('data-area-id', result.data.id);
					$('#editarArea').find('button[data-action="edit-area"]').data('area-id', result.data.id);
					$('#editarArea').find('button[data-action="delete-area"]').attr('data-area-id', result.data.id);
					$('#editarArea').find('button[data-action="delete-area"]').data('area-id', result.data.id);
					$('#editarArea input[name="status-area"]').prop('checked', parseInt(result.data.status));
					if (result.data.responsable.length > 0) {
						setTimeout(function() {

							$('#editarArea select[name="responsable-area"] option[value="' + result.data.responsable[0].id + '"]').prop('selected', true);
							$('.responsable-area').select2({
								dropdownParent: $('#editarArea .modal-body')
							});
							$('#editarArea').modal('show');
						}, 700)
					} else {
						$('#editarArea').modal('show');
						$('#editarArea select[name="responsable-area"] option[value="0"]').prop('selected', true);
						$('.responsable-area').select2({
							dropdownParent: $('#editarArea .modal-body')
						});
					}
					$('#editarArea').on('click', 'button[data-action="save"]', function(e) {
						let areaV = $('#editarArea #form-edit-area input[name="form-editArea-name"]'),
							descriptionV = $('#editarArea #form-edit-area input[name="form-editArea-description"]'),
							userV = $('#editarArea select[name="responsable-area"]'),
							status = $('#editarArea input[name="status-area"]');
						if (is_valid({
								area: areaV,
								description: descriptionV,
								form: 'form-crearArea'
							})) {
							let dataForm = {
								area: $(areaV).val(),
								description: $(descriptionV).val(),
								is_responsable: $(userV).val(),
								status: $(status).prop('checked')
							}
							actualizarArea(dataForm, data)
						}
					});
				}
			}
		});

	$('.logistify-table_limit select').on('change', function(e) {
		delete usersAreas;
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTable(limite)

	})

	$('#viewArea').on('hide.bs.modal', function() {
		$(".tableUsuariosAreas-content").empty()
	})

	function updateTable(limite) {
		usersAreas.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			columns: ['email', 'nombre'],
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender()
	}
}

function verAreaDelete(data) {
	let dataUserAreas,
		usersAreas;
	$('.nav-tabs .nav-link#informacion-tab').tab('show');
	fetch(_API + 'admin/areas/' + data + '?included=users,responsable', {
			'method': 'GET',
			'headers': headers
		})
		.then((data) => {
			return data.json()
		})
		.then((result) => {
			$('#viewArea').find('b[data-label="area"]').html(capitalize(result.data.area.toLowerCase()));
			$('#viewArea').find('b[data-label="descripcion"]').html(result.data.description)
			$('#viewArea').find('b[data-label="responsable"]').html(responsable(result.data.responsable));
			$('#viewArea').find('button[data-action="edit-area"]').addClass('d-none');
			$('#viewArea').find('button[data-action="delete-area"]').attr('data-area-id', result.data.id).addClass('permanente');
			$('#viewArea').find('button[data-action="delete-area"]').data('area-id', result.data.id);
			dataUserAreas = result.data.users;
			usersAreas = new gridjs.Grid({
				search: true,
				resizable: true,
				columns: [
					'Nombre',
					'Email'
				],
				data: dataUserAreas.map(area => [
					area.name,
					area.email
				]),
				className: {
					table: 'logistify-table'
				},
				style: {
					table: {
						'white-space': 'nowrap',
						'border': '0px'
					}
				},
				pagination: {
					enabled: true,
					summary: false,
					limit: 15
				},
				sort: true,
				language: {
					'search': {
						'placeholder': 'Buscar'
					},
					'pagination': {
						'previous': '〈',
						'next': '〉'
					}
				}
			}).render(document.querySelector(".tableUsuariosAreas-content"));
			updateTable(15)


		});

	$('.logistify-table_limit select').on('change', function(e) {
		delete usersAreas;
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTable(limite)

	})

	$('#viewArea').on('hide.bs.modal', function() {
		$(".tableUsuariosAreas-content").empty()
	})

	function updateTable(limite) {
		usersAreas.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			columns: ['email', 'nombre'],
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender()
	}
}

function actualizarArea(data, id) {
	console.log(data, id)
	fetch(_API + 'areas/' + id, {
			'method': 'PUT',
			'header': headers,
			'body': JSON.stringify(data)
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#editarUsuario').modal('hide');
				setTimeout(function() {
					showAlerta('edit-user-error', 'succes');
				}, 500)
			}
			if (res.result) {
				$('#editarArea').modal('hide')
				setTimeout(function() {
					showAlerta('edit-area-success', 'succes');
				}, 500)

			}
		})
}

function restaurarArea(area) {
	fetch(_API + 'admin/areas/' + area, {
			'method': 'PUT',
			'header': headers
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-area-error', 'error');
				}, 500)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-area-success', 'succes');
					renderUserTable();
				}, 500)

			}
		})
}

/* Eliminar usuario */
function eliminarArea(data) {
	fetch(_API + 'areas/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				$('#verArea').modal('hide');
				$('#editarArea').modal('hide');
				setTimeout(function() {
					showAlerta('delete-area-success', 'succes');
					renderAreaTable();
				}, 1500)
			}
		})
}

function eliminarAreaPermanente(data) {
	fetch(_API + 'admin/areas/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				$('#viewArea').modal('hide');
				setTimeout(function() {
					showAlerta('delete-area-success', 'succes');
					renderAreaTableDelete();
				}, 500)
			}
		})
}



/*
 ***************************
 *   Peticiones Permisos   *
 ***************************
 */

function crearPermiso(data) {
	console.log(data)
	fetch(_API + 'permissions', {
			'method': 'POST',
			'body': JSON.stringify(data),
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				showAlerta('create-permiso-error', 'succes');
			}
			if (res.result) {
				$('#crearPermiso').modal('hide')
				requestPermisos();
				setTimeout(function() {
					showAlerta('create-permiso-success', 'succes');
					permisos = localStorage.getItem('permisos')
					renderPermisosTable(JSON.parse(permisos))
				}, 1500)
			}
		})
}

/* Ver info Permiso */
function verPermiso(data, accion) {
	let dataUserPermiso;
	let usersPermiso;
	$('.nav-tabs .nav-link#infoPermisos-tab').tab('show');
	fetch(_API + 'permissions/' + data + '?included=users,roles,classification', {
			'method': 'GET',
			'headers': headers
		})
		.then((data) => {
			return data.json()
		})
		.then((result) => {
			if (accion == 'view') {
				mostrarInfoPermiso(result.data);
				$('#viewPermiso').find('button[data-action="edit-permiso"]').attr('data-permiso-id', result.data.id);
				$('#viewPermiso').find('button[data-action="edit-permiso"]').data('permiso-id', result.data.id);
				$('#viewPermiso').find('button[data-action="delete-permiso"]').attr('data-permiso-id', result.data.id);
				$('#viewPermiso').find('button[data-action="delete-permiso"]').data('permiso-id', result.data.id);
				if (!renderizada) {
					dataUserPermiso = result.data.users;
					usersPermiso = new gridjs.Grid({
						search: true,
						resizable: true,
						columns: [
							'Nombre',
							'Email'
						],
						data: dataUserPermiso.map(area => [
							area.name,
							area.email
						]),
						className: {
							table: 'logistify-table'
						},
						style: {
							table: {
								'white-space': 'nowrap',
								'border': '0px'
							}
						},
						pagination: {
							enabled: true,
							summary: false,
							limit: 15
						},
						sort: true,
						language: {
							'search': {
								'placeholder': 'Buscar'
							},
							'pagination': {
								'previous': '〈',
								'next': '〉'
							}
						}
					}).render(document.querySelector(".tableUsuariosPermisos-content"));
					updateTable(15)
				} else {
					updateTable(15)
				}
			}
			if (accion == 'edit') {
				editarInfoPermiso(result.data);
			}
		})

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTable(limite)

	})

	$('#viewPermiso').on('hide.bs.modal', function() {
		$(".tableUsuariosPermisos-content").empty()
	})



	function updateTable(limite) {
		usersPermiso.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender()
	}
}

function verPermisoDelete(data, accion) {
	let dataUserPermiso;
	let usersPermiso;
	$('.nav-tabs .nav-link#infoPermisos-tab').tab('show');
	fetch(_API + 'admin/permissions/' + data + '?included=users,roles,classification', {
			'method': 'GET',
			'headers': headers
		})
		.then((data) => {
			return data.json()
		})
		.then((result) => {
			if (accion == 'view') {
				mostrarInfoPermiso(result.data);
				$('#viewPermiso').find('button[data-action="edit-permiso"]').attr('data-permiso-id', result.data.id).addClass('d-none');
				$('#viewPermiso').find('button[data-action="edit-permiso"]').data('permiso-id', result.data.id);
				$('#viewPermiso').find('button[data-action="delete-permiso"]').attr('data-permiso-id', result.data.id);
				$('#viewPermiso').find('button[data-action="delete-permiso"]').data('permiso-id', result.data.id);
				if (!renderizada) {
					dataUserPermiso = result.data.users;
					usersPermiso = new gridjs.Grid({
						search: true,
						resizable: true,
						columns: [
							'Nombre',
							'Email'
						],
						data: dataUserPermiso.map(area => [
							area.name,
							area.email
						]),
						className: {
							table: 'logistify-table'
						},
						style: {
							table: {
								'white-space': 'nowrap',
								'border': '0px'
							}
						},
						pagination: {
							enabled: true,
							summary: false,
							limit: 15
						},
						sort: true,
						language: {
							'search': {
								'placeholder': 'Buscar'
							},
							'pagination': {
								'previous': '〈',
								'next': '〉'
							}
						}
					}).render(document.querySelector(".tableUsuariosPermisos-content"));
					updateTable(15)
				} else {
					updateTable(15)
				}
			}
			if (accion == 'edit') {
				editarInfoPermiso(result.data);
			}
		})

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTable(limite)

	})

	$('#viewPermiso').on('hide.bs.modal', function() {
		$(".tableUsuariosPermisos-content").empty()
	})



	function updateTable(limite) {
		usersPermiso.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender()
	}
}

function mostrarInfoPermiso(data) {
	console.log(data)
	let roles = $('#viewPermiso ul.etiquetas-asignacion'),
		categoria = data.classification.classification.toLowerCase();
	$('#viewPermiso .dato b.permiso').html(data.permission);
	$('#viewPermiso .dato b.descripcion').html(data.description);
	$('#viewPermiso input[name="canDelete-permission"]').prop('checked', data.can_delete);
	$('#viewPermiso input[name="status-permission"]').prop('checked', parseInt(data.status));
	$('#viewPermiso .dato b.categoria').html(capitalize(categoria));

	if (data.roles.length != 0) {

	} else {
		$(roles).html('No pertenece a ningun Rol')
	}
	$('#viewPermiso').modal('show');
}

function editarInfoPermiso(data) {
	console.log(data.id)
	let roles = $('#viewPermiso ul.etiquetas-asignacion'),
		categoria = data.classification.classification.toLowerCase();
	$('#editarPermiso #form-edit-permiso input[name="form-editPermiso-permiso"]').val(data.permission);
	$('#editarPermiso #form-edit-permiso input[name="form-editPermiso-descripcion"]').val(data.description);
	$('#editarPermiso .dato b.permiso').html(data.permission);
	$('#editarPermiso .dato b.descripcion').html(data.description);
	$('#editarPermiso input[name="canDelete-permission"]').prop('checked', data.can_delete);
	$('#editarPermiso input[name="status-permission"]').prop('checked', parseInt(data.status));
	//$('#editarPermiso .dato b.categoria').html(capitalize(categoria));
	$('#editarPermiso').modal('show');

	$('#editarPermiso').on('click', 'button[data-action="save"]', function(e) {

		let permiso = $('#form-edit-permiso input[name="form-editPermiso-permiso"]'),
			descripcion = $('#form-edit-permiso input[name="form-editPermiso-descripcion"]'),
			categoria = $('#form-edit-permiso select[name="categorias-permisos"]'),
			status = $('#form-edit-permiso select[name="status-permisos"]'),
			canDelete = $('#form-edit-permiso input[name="canDelete-permission"]');
		if (is_valid({
				permisos: permiso,
				description: descripcion,
				categoria: categoria,
				form: 'form-crearPermiso'
			})) {
			let dataForm = {
				permission: $(permiso).val(),
				description: $(descripcion).val(),
				can_delete: $(canDelete).prop('checked'),
				classification_id: $(categoria).val(),
				status: $(status).prop('checked')
			};
			actualizarPermiso(dataForm, data.id)
		};
	})
}

function actualizarPermiso(data, id) {
	console.log(data, id)
	fetch(_API + 'permissions/' + id, {
			'method': 'PUT',
			'header': headers,
			'body': JSON.stringify(data)
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#editarPermiso').modal('hide');
				setTimeout(function() {
					showAlerta('edit-permiso-error', 'succes');
				}, 500)
			}
			if (res.result) {
				$('#editarPermiso').modal('hide')

				setTimeout(function() {
					showAlerta('edit-permiso-success', 'succes');
				}, 500)
			}
		})
}

function restaurarPermiso(area) {
	fetch(_API + 'admin/permissions/' + area, {
			'method': 'PUT',
			'header': headers
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-permiso-error', 'error');
				}, 500)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-permiso-success', 'succes');
					renderPermisosTableDelete();
				}, 500)

			}
		})
}

/* Eliminar usuario */
function eliminarPermiso(data) {
	fetch(_API + 'permissions/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				$('#verPermiso').modal('hide');
				$('#editarPermiso').modal('hide');
				requestPermisos();
				setTimeout(function() {
					showAlerta('delete-permiso-success', 'succes');
					permisos = localStorage.getItem('permisos')
					renderPermisosTable(JSON.parse(permisos))
				}, 1500)
			}
		})
}

function eliminarPermisoPermanente(data) {
	fetch(_API + 'admin/permissions/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				$('#viewPermiso').modal('hide');
				setTimeout(function() {
					showAlerta('delete-permiso-success', 'succes');
					renderPermisosTableDelete();
				}, 500)
			}
		})
}




/*
 ***************************
 *    Peticiones Roles     *
 ***************************
 */

function crearRol(data) {
	console.log(data)
	fetch(_API + 'roles', {
			'method': 'POST',
			'body': JSON.stringify(data),
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
				showAlerta('create-rol-error', 'succes');
			}
			if (res.result) {
				$('#crearRol').modal('hide')
				requestPermisos();
				setTimeout(function() {
					showAlerta('create-rol-success', 'succes');
					renderRolesTable();
				}, 1500)
			}
		})
}

/* Ver info Rol */
function verRol(data, accion) {
	$('.nav-tabs .nav-link#infoRol-tab').tab('show');
	console.log(data)
	let dataUserRol, usersRol;
	fetch(_API + 'roles/' + data + '?included=users,permissions', {
			'method': 'GET',
			'headers': headers
		})
		.then((data) => {
			return data.json()
		})
		.then((result) => {
			if (accion == 'view') {
				mostrarInfoRol(result.data);
				if (!renderizada) {
					dataUserRol = result.data.users;
					usersRol = new gridjs.Grid({
						search: true,
						resizable: true,
						columns: [
							'Nombre',
							'Email'
						],
						data: dataUserRol.map(user => [
							user.name,
							user.email
						]),
						className: {
							table: 'logistify-table'
						},
						style: {
							table: {
								'white-space': 'nowrap',
								'border': '0px'
							}
						},
						pagination: {
							enabled: true,
							summary: false,
							limit: 15
						},
						sort: true,
						language: {
							'search': {
								'placeholder': 'Buscar'
							},
							'pagination': {
								'previous': '〈',
								'next': '〉'
							}
						}
					}).render(document.querySelector(".tableUsuariosRol-content"));
					updateTable(15)
				} else {
					updateTable(15)
				}
				$('#viewRol').modal('show');
			}
			if (accion == 'edit') {
				editarInfoRol(result.data);
			}
		});

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTable(limite)

	})

	$('#viewRol').on('hide.bs.modal', function() {
		$(".tableUsuariosRol-content").empty()
	})



	function updateTable(limite) {
		usersRol.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender()
	}
}

function verRolDelete(data, accion) {
	$('.nav-tabs .nav-link#infoRol-tab').tab('show');
	console.log(data)
	let dataUserRol, usersRol;
	fetch(_API + 'admin/roles/' + data + '?included=users,permissions', {
			'method': 'GET',
			'headers': headers
		})
		.then((data) => {
			return data.json()
		})
		.then((result) => {
			if (accion == 'view') {
				mostrarInfoRol(result.data);
				$('button[data-action="edit-rol"]').addClass('d-none');
				if (!renderizada) {
					dataUserRol = result.data.users;
					usersRol = new gridjs.Grid({
						search: true,
						resizable: true,
						columns: [
							'Nombre',
							'Email'
						],
						data: dataUserRol.map(user => [
							user.name,
							user.email
						]),
						className: {
							table: 'logistify-table'
						},
						style: {
							table: {
								'white-space': 'nowrap',
								'border': '0px'
							}
						},
						pagination: {
							enabled: true,
							summary: false,
							limit: 15
						},
						sort: true,
						language: {
							'search': {
								'placeholder': 'Buscar'
							},
							'pagination': {
								'previous': '〈',
								'next': '〉'
							}
						}
					}).render(document.querySelector(".tableUsuariosRol-content"));
					updateTable(15)
				} else {
					updateTable(15)
				}
				$('#viewRol').modal('show');
			}
			if (accion == 'edit') {
				editarInfoRol(result.data);
			}
		});

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTable(limite)

	})

	$('#viewRol').on('hide.bs.modal', function() {
		$(".tableUsuariosRol-content").empty()
	})



	function updateTable(limite) {
		usersRol.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender()
	}
}

function mostrarInfoRol(data) {
	console.log(data.permissions)
	let roles = $('#viewRol ul.etiquetas-asignacion'),
		permisos = data.permissions;
	$('#viewRol .dato b.rol').html(capitalize(data.rol.toLowerCase()));
	$('#viewRol .dato b.descripcion').html(data.description);
	$('#viewRol input[name="accesTotal-rol"]').prop('checked', data.full_access)
	$('#viewRol input[name="assignClients-rol"]').prop('checked', data.to_assign_customers)
	$('#viewRol input[name="isUser-rol"]').prop('checked', data.is_user)
	$('#viewRol input[name="status-rol"]').prop('checked', data.status)
	$('#viewRol input[name="canDelete-rol"]').prop('checked', data.can_delete)
	setTimeout(function() {
		$('#viewRol select[name="permisos"] option').prop('disabled', true);
		permisos.map(item => {
			console.log($('#viewRol select[name="permisos"]'))
			$('#viewRol select[name="permisos"] option[value="' + item.id + '"]').prop('selected', true);
		});

		$('#viewRol select[name="permisos"]').multipleSelect('refresh');
		console.log('refres')
	}, 600)
}

function editarInfoRol(data) {
	$('#editarRol').modal('show');
	let roles = $('#editarRol ul.etiquetas-asignacion'),
		permisos = data.permissions;
	$('#editarRol .dato b.rol').html(capitalize(data.rol.toLowerCase()));
	$('#editarRol .dato b.descripcion').html(data.description);
	$('#editarRol input[name="form-editRol-rol"]').val(data.rol)
	$('#editarRol input[name="form-editRol-descripcion"]').val(data.description)
	$('#editarRol input[name="accesTotal-rol"]').prop('checked', data.full_access)
	$('#editarRol input[name="assignClients-rol"]').prop('checked', data.to_assign_customers)
	$('#editarRol input[name="isUser-rol"]').prop('checked', data.is_user)
	$('#editarRol input[name="status-rol"]').prop('checked', data.status)
	$('#editarRol input[name="canDelete-rol"]').prop('checked', data.can_delete);
	setTimeout(function() {
		permisos.map(item => {
			$('#editarRol select[name="permisos"] option[value="' + item.id + '"]').prop('selected', true);
		});
		$('#editarRol select[name="permisos"]').multipleSelect('refresh');
	}, 500);




	$('#editarRol').on('click', 'button[data-action="save"]', function(e) {
		console.log('editar')
		let rol = $('#form-edit-rol input[name="form-editRol-rol"]'),
			descripcion = $('#form-edit-rol input[name="form-editRol-descripcion"]'),
			permisos = $('#form-edit-rol select[name="permisos"]'),
			accesoTotal = $('#form-edit-rol input[name="accesTotal-rol"]'),
			assignClientes = $('#form-edit-rol input[name="assignClients-rol"]'),
			isUsuario = $('#form-edit-rol input[name="isUser-rol"]'),
			status = $('#form-edit-rol input[name="status-rol"]'),
			canDelete = $('#form-edit-rol input[name="canDelete-rol"]');
		if (is_valid({
				roles: rol,
				description: descripcion,
				form: 'form-crearRol'
			})) {
			if (!$(canDelete).prop('checked')) {
				canDelete = false
			} else {
				canDelete = true
			}

			if (!$(accesoTotal).prop('checked')) {
				accesoTotal = 'NO'
			} else {
				accesoTotal = 'YES'
			}

			if (!$(assignClientes).prop('checked')) {
				assignClientes = 'NO'
			} else {
				assignClientes = 'YES'
			}

			let dataForm = {
				rol: $(rol).val(),
				description: $(descripcion).val(),
				permisos: $(permisos).val(),
				full_access: accesoTotal,
				is_user: $(isUsuario).prop('checked'),
				status: $(status).prop('checked'),
				to_assign_customers: assignClientes,
				can_delete: canDelete
			}
			actualizarRol(dataForm, data.id)
		}
	})
}


function actualizarRol(data, id) {
	fetch(_API + 'roles/' + id, {
			'method': 'PUT',
			'header': headers,
			'body': JSON.stringify(data)
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#editarRol').modal('hide')
				setTimeout(function() {
					showAlerta('edit-rol-error', 'succes');
				}, 500)
			}
			if (res.result) {

				setTimeout(function() {
					showAlerta('edit-rol-success', 'succes');
				}, 500)
			}
		})
}

function restaurarRol(area) {
	fetch(_API + 'admin/roles/' + area, {
			'method': 'PUT',
			'header': headers
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-rol-error', 'error');
				}, 500)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-rol-success', 'succes');
					renderRolesTableDelete();
				}, 500)

			}
		})
}

/* Eliminar usuario */
function eliminarRol(data) {
	fetch(_API + 'roles/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				if ($('#viewRol').hasClass('newModal')) {
					$('#viewRol').removeClass('newModal');
					$('#viewRol').modal('hide')
				}
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('delete-rol-success', 'succes');
					renderRolesTable();
				}, 500)
			}
		})
}

function eliminarRolPermanente(data) {
	fetch(_API + 'admin/roles/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				$('#viewRol').modal('hide');
				setTimeout(function() {
					showAlerta('delete-rol-success', 'succes');
					renderRolesTableDelete();
				}, 500)
			}
		})
}



/*
 ***************************
 *   Peticiones Puestos    *
 ***************************
 */
function crearPuesto(data) {
	console.log(data)
	fetch(_API + 'stalls', {
			'method': 'POST',
			'body': JSON.stringify(data),
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
				showAlerta('create-rol-error', 'succes');
			}
			if (res.result) {
				$('#crearPuesto').modal('hide')
				requestPermisos();
				setTimeout(function() {
					showAlerta('create-puesto-success', 'succes');
					renderPuestosTable();
				}, 1500)
			}
		})
}
/* Ver info Permiso */
function verPuesto(data, accion) {
	console.log(data)
	$('.nav-tabs .nav-link#infoPuesto-tab').tab('show');
	$(".tableUsuariosPuesto-content").empty();
	let dataUserPuesto, usersPuesto;
	fetch(_API + 'stalls/' + data + '?included=users', {
			'method': 'GET',
			'headers': headers
		})
		.then((data) => {
			return data.json()
		})
		.then((result) => {
			console.log(result)
			if (accion == 'view') {
				$('#viewPuesto').find('b.puesto').html(capitalize(result.data.stall.toLowerCase()))
				$('#viewPuesto').find('b.descripcion').html(result.data.description)
				$('#viewPuesto').find('input[name="status-puesto"]').prop('checked', result.data.status);
				$('#viewPuesto').find('button[data-action="edit-puesto"]').attr('data-puesto-id', result.data.id);
				$('#viewPuesto').find('button[data-action="edit-puesto"]').data('puesto-id', result.data.id);
				$('#viewPuesto').find('button[data-action="delete-puesto"]').attr('data-puesto-id', result.data.id);
				$('#viewPuesto').find('button[data-action="delete-puesto"]').data('puesto-id', result.data.id);
				if (!renderizada) {
					dataUserPuesto = result.data.users;
					usersPuesto = new gridjs.Grid({
						search: true,
						resizable: true,
						columns: [
							'Nombre',
							'Email'
						],
						data: dataUserPuesto.map(user => [
							user.name,
							user.email
						]),
						className: {
							table: 'logistify-table'
						},
						style: {
							table: {
								'white-space': 'nowrap',
								'border': '0px'
							}
						},
						pagination: {
							enabled: true,
							summary: false,
							limit: 15
						},
						sort: true,
						language: {
							'search': {
								'placeholder': 'Buscar'
							},
							'pagination': {
								'previous': '〈',
								'next': '〉'
							}
						}
					}).render(document.querySelector(".tableUsuariosPuesto-content"));
					updateTable(15);
				} else {
					updateTable(15);
				}
				$('#viewPuesto').modal('show').removeClass('newModal');
			}
			if (accion == 'edit') {
				$('#editarPuesto').find('b.puesto').html(capitalize(result.data.stall.toLowerCase()))
				$('#editarPuesto').find('b.descripcion').html(result.data.description)
				$('#editarPuesto input[name="form-editPuesto-puesto"]').val(capitalize(result.data.stall.toLowerCase()))
				$('#editarPuesto input[name="form-editPuesto-descripcion"]').val(result.data.description)
				$('#editarPuesto').find('input[name="status-puesto"]').prop('checked', result.data.status)
				if (!renderizada) {
					dataUserPuesto = result.data.users;
					usersPuesto = new gridjs.Grid({
						search: true,
						resizable: true,
						columns: [
							'Nombre',
							'Email'
						],
						data: dataUserPuesto.map(user => [
							user.name,
							user.email
						]),
						className: {
							table: 'logistify-table'
						},
						style: {
							table: {
								'white-space': 'nowrap',
								'border': '0px'
							}
						},
						pagination: {
							enabled: true,
							summary: false,
							limit: 15
						},
						sort: true,
						language: {
							'search': {
								'placeholder': 'Buscar'
							},
							'pagination': {
								'previous': '〈',
								'next': '〉'
							}
						}
					}).render(document.querySelector(".tableUsuariosPuesto-content"));
					updateTable(15);
				} else {
					updateTable(15);
				}
				$('#editarPuesto').modal('show').removeClass('newModal');

				$('#editarPuesto').on('click', 'button[data-action="save"]', function(e) {
					let puesto = $('#editarPuesto input[name="form-editPuesto-puesto"]'),
						description = $('#editarPuesto input[name="form-editPuesto-descripcion"]');
					if (is_valid({
							puesto: puesto,
							description: description,
							form: 'form-crearPuesto'
						})) {
						let dataForm = {
							stall: $(puesto).val(),
							description: $(description).val(),
						}
						actualizarPuesto(dataForm, result.data.id)
					}
				})
			}
		});

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTable(limite)

	})

	$('#editarPuesto').on('hide.bs.modal', function() {
		$(".tableUsuariosPuesto-content").empty()
	})


	function updateTable(limite) {
		usersPuesto.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender()
	}
}

function verPuestoDelete(data, accion) {
	console.log(data)
	$('.nav-tabs .nav-link#infoPuesto-tab').tab('show');
	$(".tableUsuariosPuesto-content").empty();
	let dataUserPuesto, usersPuesto;
	fetch(_API + 'admin/stalls/' + data + '?included=users', {
			'method': 'GET',
			'headers': headers
		})
		.then((data) => {
			return data.json()
		})
		.then((result) => {
			console.log(result)
			if (accion == 'view') {
				$('#viewPuesto').find('b.puesto').html(capitalize(result.data.stall.toLowerCase()))
				$('#viewPuesto').find('b.descripcion').html(result.data.description)
				$('#viewPuesto').find('input[name="status-puesto"]').prop('checked', result.data.status);
				$('#viewPuesto').find('button[data-action="edit-puesto"]').attr('data-puesto-id', result.data.id).addClass('d-none');
				$('#viewPuesto').find('button[data-action="edit-puesto"]').data('puesto-id', result.data.id);
				$('#viewPuesto').find('button[data-action="delete-puesto"]').attr('data-puesto-id', result.data.id).addClass('permanente');
				$('#viewPuesto').find('button[data-action="delete-puesto"]').data('puesto-id', result.data.id);
				if (!renderizada) {
					dataUserPuesto = result.data.users;
					usersPuesto = new gridjs.Grid({
						search: true,
						resizable: true,
						columns: [
							'Nombre',
							'Email'
						],
						data: dataUserPuesto.map(user => [
							user.name,
							user.email
						]),
						className: {
							table: 'logistify-table'
						},
						style: {
							table: {
								'white-space': 'nowrap',
								'border': '0px'
							}
						},
						pagination: {
							enabled: true,
							summary: false,
							limit: 15
						},
						sort: true,
						language: {
							'search': {
								'placeholder': 'Buscar'
							},
							'pagination': {
								'previous': '〈',
								'next': '〉'
							}
						}
					}).render(document.querySelector(".tableUsuariosPuesto-content"));
					updateTable(15);
				} else {
					updateTable(15);
				}
				$('#viewPuesto').modal('show').removeClass('newModal');
			}
			if (accion == 'edit') {
				$('#editarPuesto').find('b.puesto').html(capitalize(result.data.stall.toLowerCase()))
				$('#editarPuesto').find('b.descripcion').html(result.data.description)
				$('#editarPuesto input[name="form-editPuesto-puesto"]').val(capitalize(result.data.stall.toLowerCase()))
				$('#editarPuesto input[name="form-editPuesto-descripcion"]').val(result.data.description)
				$('#editarPuesto').find('input[name="status-puesto"]').prop('checked', result.data.status)
				if (!renderizada) {
					dataUserPuesto = result.data.users;
					usersPuesto = new gridjs.Grid({
						search: true,
						resizable: true,
						columns: [
							'Nombre',
							'Email'
						],
						data: dataUserPuesto.map(user => [
							user.name,
							user.email
						]),
						className: {
							table: 'logistify-table'
						},
						style: {
							table: {
								'white-space': 'nowrap',
								'border': '0px'
							}
						},
						pagination: {
							enabled: true,
							summary: false,
							limit: 15
						},
						sort: true,
						language: {
							'search': {
								'placeholder': 'Buscar'
							},
							'pagination': {
								'previous': '〈',
								'next': '〉'
							}
						}
					}).render(document.querySelector(".tableUsuariosPuesto-content"));
					updateTable(15);
				} else {
					updateTable(15);
				}
				$('#editarPuesto').modal('show').removeClass('newModal');

				$('#editarPuesto').on('click', 'button[data-action="save"]', function(e) {
					let puesto = $('#editarPuesto input[name="form-editPuesto-puesto"]'),
						description = $('#editarPuesto input[name="form-editPuesto-descripcion"]');
					if (is_valid({
							puesto: puesto,
							description: description,
							form: 'form-crearPuesto'
						})) {
						let dataForm = {
							stall: $(puesto).val(),
							description: $(description).val(),
						}
						actualizarPuesto(dataForm, result.data.id)
					}
				})
			}
		});

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTable(limite)

	})

	$('#editarPuesto').on('hide.bs.modal', function() {
		$(".tableUsuariosPuesto-content").empty()
	})


	function updateTable(limite) {
		usersPuesto.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender()
	}
}

function actualizarPuesto(data, id) {
	console.log(data, id)
	fetch(_API + 'permissions/' + id, {
			'method': 'PUT',
			'header': headers,
			'body': JSON.stringify(data)
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#editarPermiso').modal('hide');
				setTimeout(function() {
					showAlerta('edit-puesto-error', 'succes');
				}, 500)
			}
			if (res.result) {
				$('#editarPuesto').modal('hide')
				setTimeout(function() {
					showAlerta('edit-puesto-success', 'succes');
				}, 500)
			}
		})
}

function restaurarPuesto(area) {
	fetch(_API + 'admin/stalls/' + area, {
			'method': 'PUT',
			'header': headers
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			if (!res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('restore-puesto-error', 'error');
				}, 500)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
				showAlerta('restore-puesto-success', 'succes');
					renderRolesTableDelete();
				}, 500)

			}
		})
}

/* Eliminar usuario */
function eliminarPuesto(data) {
	fetch(_API + 'stalls/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				if ($('#viewPuesto').hasClass('newModal')) {
					$('#viewPuesto').removeClass('newModal');
				}
				$('#viewPuesto').modal('hide');
				$('#alertasGeneral').modal('hide');
				setTimeout(function() {
					showAlerta('delete-puesto-success', 'succes');
					renderPuestosTable();
				}, 500)
			}
		})
}

function eliminarPuestoPermanente(data) {
	fetch(_API + 'admin/stalls/' + data, {
			'method': 'DELETE',
			'headers': headers
		})
		.then(res => res.json())
		.then(res => {
			if (!res.result) {
				console.log(res)
			}
			if (res.result) {
				$('#alertasGeneral').modal('hide');
				$('#viewPuesto').modal('hide');
				setTimeout(function() {
					showAlerta('delete-puesto-success', 'succes');
					renderTablaPuestosDelete();
				}, 500)
			}
		})
}