/* Activar menu */
$('header .burger').on('click', function(e) {
	let menu = $('nav.menu');
	if (!$(menu).hasClass('active')) {
		$(menu).addClass('active');
		$('body').on('click', function(e) {
			if (e.target == menu[0]) {
				$(menu).removeClass('active');
			}
		})
	}
});


/* ——————————————————————|
|   Inicio Flujo Login   |
|———————————————————————*/

//Mostrar ocultar contraseña
$('.icon[data-pass]').on('click', function(e) {
	let form = $(e.currentTarget).data('form');
	switch ($(e.currentTarget).data('pass')) {
		case 'hide':
			$(e.currentTarget).attr('data-pass', 'show').data('pass', 'show');
			$(e.currentTarget).removeClass('fa-eye').addClass('fa-eye-slash');
			$(form + ' input[data-type="pass"]').attr('type', 'text').focus();
			break;
		case 'show':
			$(e.currentTarget).attr('data-pass', 'hide').data('pass', 'hide');
			$(e.currentTarget).removeClass('fa-eye-slash').addClass('fa-eye');
			$(form + ' input[data-type="pass"]').attr('type', 'password');
			break;
	}
});

// Verificador login 
$('#form-login button').on('click', function(e) {
	e.preventDefault();
	let loginUser = $('#form-login input[name="login-mail"]'),
		loginPass = $('#form-login input[name="login-pass"]');
	is_valid({
		user: loginUser,
		pass: loginPass,
		form: 'form-login'
	});
});

// Verificador request restore pass
$('#form-restorePass button').on('click', function(e) {
	e.preventDefault();
	let restoreUser = $('#form-restorePass input[name="restore-mail"]');
	is_valid({
		user: restoreUser,
		form: 'form-restorePass'
	});
});

//Verificador change pass 
$('#form-restorePass-change button').on('click', function(e) {
	e.preventDefault();
	let restorePass = $('#form-restorePass-change input[name="restore-pass"]'),
		restorePass2 = $('#form-restorePass-change input[name="restore-passVerify"]')
	is_valid({
		pass: restorePass,
		passVerify: restorePass2,
		form: 'form-restorePass-change'
	});
});



//Verificar si hay token para reestablecer contraseña
let urlParams = window.location.search
if (urlParams) {
	let parametros = urlParams.split('?')[1].split('&');
	parametros.map(function(e) {
		if (e.includes('token')) {
			let token = e.split('=')[1]
			if (token) {
				$('.restorePass-request').addClass('d-none');
				$('.restorePass-change').removeClass('d-none');
			}
		}
	})
} else {}
/* Fin login */


/* Funcion para mostrar los distintos modales que tenemos */
function showAlerta(modal, state, id) {
	console.log(modal, id)
	$('#alertasGeneral .modal-dialog').addClass('d-none');
	$('#alertasGeneral').find('.modal-dialog[data-modal="' + modal + '"]').removeClass('d-none');
	$('#alertasGeneral').modal('show');
	if (state == 'redirect') {
		let href = $('#alertasGeneral .modal-dialog[data-modal="' + modal + '"]').find('button[data-dismiss]').data('href');
		$('#alertasGeneral').on('hidden.bs.modal', function(e) {
			//window.location = href
		}, )
	}
	if (id != undefined) {
		$('#alertasGeneral .modal-dialog[data-modal="' + modal + '"]').find('button[data-action="aceptar"]').attr('data-user-id', id);
		$('#alertasGeneral .modal-dialog[data-modal="' + modal + '"]').find('button[data-action="aceptar"]').data('user-id', id);
	}
}

/* Función para categorizar permisos */
function categorizarPermisos() {
	let categorias = JSON.parse(localStorage.getItem('cat-permisos')),
		optionGroup = [],
		optionItem,
		permisos = JSON.parse(localStorage.getItem('permisos'));

	categorias.map(cat => {
		if (cat.status == '1') {
			optionGroup.push('<optgroup label="' + capitalize(cat.classification.toLowerCase()) + '" data-id="' + cat.id + '"></optgroup>');
			$('select[name="permisos"]').html(optionGroup);
		}
	})
	permisos.map(permiso => {
		if (permiso.status == '1') {
			optionItem = '<option value="' + permiso.id + '">' + capitalize(permiso.permission.toLowerCase()) + '</option>'
			$('select[name="permisos"] optgroup[data-id="' + permiso.classification_id + '"]').append(optionItem);

		}
	})
	$('select[name="permisos"]').multipleSelect('refresh')
}

/* Función para agregar selects de puestos, areas y roles */
function listarAreasPuestosRoles(modal) {
	let areas = JSON.parse(localStorage.getItem('areas')),
		itemArea,
		stalls = JSON.parse(localStorage.getItem('stall')),
		itemStall,
		roles = JSON.parse(localStorage.getItem('rol')),
		itemRol;
	areas.map(area => {
		itemArea = '<option value="' + area.id + '">' + area.area + '</option>';
		$(modal + ' select[name="area"]').append(itemArea)
	})

	stalls.map(stall => {
		itemStall = '<option value="' + stall.id + '">' + stall.stall + '</option>';
		$(modal + ' select[name="puestos"]').append(itemStall)
	})

	roles.map(rol => {
		itemRol = '<option value="' + rol.id + '" data-clientes="' + rol.to_assign_customers + '">' + rol.rol + '</option>';
		$(modal + ' select[name="roles"]').append(itemRol)
	})
	$(modal + ' select[name="area"]').niceSelect('update');
	$(modal + ' select[name="puestos"]').niceSelect('update');
	$(modal + ' select[name="roles"]').niceSelect('update');
}



/* ———————————————————————|
| Inicio Flujo usuario    |
|————————————————————————*/

//Next steps Crear usuario
$('#crearUsuario button[data-action]').on('click', function(e) {
	let action = $(e.currentTarget).data('action'),
		currentStep = $('#form-crearUsuario .pasos.current').data('step'),
		dataForm;
	if (currentStep == 'step-1') {
		if (action = "next-step") {
			if (is_valid({
					user: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-username'),
					firstname: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-first-name'),
					lastname: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-last-name'),
					mail: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-mail'),
					phone: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-phone'),
					form: 'form-crearUsuario',
					step: 'step-1'
				})) {
				$('.pasos[data-step="step-1"]').addClass('d-none').removeClass('current');
				$('.conteo-pasos span').html('Paso 2 de 3');
				$('#crearUsuario button[data-action="prev-step"]').removeClass('d-none')
				$('.conteo-pasos ul li[data-label="step-2"]').addClass('current');
				$('.pasos[data-step="step-2"]').removeClass('d-none').addClass('current');
			}
		}
	}
	if (currentStep == 'step-2') {
		if (action == "next-step") {
			console.log($('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-birthday'))
			if (is_valid({
					birthday: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-birthday'),
					genere: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-select-genere'),
					area: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-select-areas'),
					puesto: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-select-puestos'),
					roles: $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-select-roles'),
					form: 'form-crearUsuario',
					step: 'step-2'
				})) {
				$('.pasos[data-step="step-2"]').addClass('d-none').removeClass('current');
				$('.conteo-pasos span').html('Paso 3 de 3');
				$('.conteo-pasos ul li[data-label="step-3"]').addClass('current');
				$('.pasos[data-step="step-3"]').removeClass('d-none').addClass('current');
				$('#crearUsuario button[data-action="next-step"]').html('Finalizar');
				let rol = $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] #form-usuario-select-roles'),
					currentSelected = $('#form-usuario-select-roles').find('option[value="' + rol[0].value + '"]').data('clientes')
				if (currentSelected == 'YES') {
					$('#crearUsuario .pasos .clientes').removeClass('d-none');
				} else {
					$('#crearUsuario .pasos .clientes').addClass('d-none');
				}
			} else {
				console.log('error')
			}
		}
		if (action == 'prev-step') {
			$('.pasos[data-step="step-1"]').addClass('current').removeClass('d-none');
			$('.conteo-pasos span').html('Paso 1 de 3');
			$('#crearUsuario button[data-action="prev-step"]').addClass('d-none')
			$('.conteo-pasos ul li[data-label="step-2"]').removeClass('current');
			$('.pasos[data-step="step-2"]').removeClass('current').addClass('d-none');
			$('#crearUsuario button[data-action="next-step"]').html('Siguiente');
		}
	}
	if (currentStep == 'step-3') {
		if (action == "next-step") {
			let permisos = $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] select[name="permisos"]').val(),
				clientes = $('#form-crearUsuario .pasos[data-step="' + currentStep + '"] select[name="clientes"]').val();
			dataForm = {
				username: $('#form-crearUsuario  #form-usuario-username').val(),
				name: $('#form-crearUsuario  #form-usuario-first-name').val(),
				lastname: $('#form-crearUsuario  #form-usuario-last-name').val(),
				email: $('#form-crearUsuario  #form-usuario-mail').val(),
				phone_number: $('#form-crearUsuario  #form-usuario-phone').val(),
				birth_date: $('#form-crearUsuario  #form-usuario-birthday').val(),
				sex: $('#form-crearUsuario  #form-usuario-select-genere').val(),
				area_id: $('#form-crearUsuario  #form-usuario-select-areas').val(),
				stall_id: $('#form-crearUsuario  #form-usuario-select-puestos').val(),
				role_id: $('#form-crearUsuario  #form-usuario-select-roles').val(),
				password: 'Dagon098*',
				password_confirmation: 'Dagon098*',
				is_webservices: 0,
				permissions: permisos
			}


			crearNuevoUsuario(dataForm)

		}
		if (action == 'prev-step') {
			$('.pasos[data-step="step-2"]').addClass('current').removeClass('d-none');
			$('.conteo-pasos span').html('Paso 2 de 3');
			$('.conteo-pasos ul li[data-label="step-3"]').removeClass('current');
			$('.pasos[data-step="step-3"]').removeClass('current').addClass('d-none');
			$('#crearUsuario button[data-action="next-step"]').html('Siguiente');
		}
	}
});

/*$('.etiquetas-asignacion.edit li').on('click', function(e) {
	if ($(e.currentTarget).hasClass('active')) {
		$(e.currentTarget).removeClass('active');
		console.log('eliminar Clase')
	} else {
		$(e.currentTarget).addClass('active');
		console.log('eliminar Clase')
	}
})*/

$('#crearUsuario input#imgUpload').on('change', function(e) {
	let fileImage = e.currentTarget.files[0];
	if (fileImage) {
		$('#crearUsuario .photo-perfil').attr('src', URL.createObjectURL(fileImage))
	}
	$('.content-photoPerfil-img').removeClass('d-none');
});
//acciones cuando se oculta modal para crear usuario
$('#crearUsuario').on('hidden.bs.modal', function(e) {
	document.querySelector('#form-crearUsuario').reset();
	$('#form-crearUsuario .pasos.current').removeClass('current').addClass('d-none');
	$('#form-crearUsuario .pasos[data-step="step-1"]').removeClass('d-none').addClass('current');
	$('.conteo-pasos span').html('Paso 1 de 3');
	$('.conteo-pasos ul li').removeClass('current');
	$('.conteo-pasos ul li[data-label="step-1"]').addClass('current');
	$('select.nice-select').niceSelect('update');
	$('#crearUsuario button[data-action="prev-step"]').addClass('d-none');
	$('#crearUsuario button[data-action="next-step"]').html('Siguiente');
	$('#crearUsuario .photo-perfil').attr('src', '')
	$('.content-photoPerfil-img').addClass('d-none');
});
//acciones cuando se muestra modal para crear usuario
$('#crearUsuario').on('show.bs.modal', function(e) {
	$('.select-clientes').select2({
		dropdownParent: $('.modal .pasos[data-step=step-3]')
	});
	requestClientes('#crearUsuario');
	requestAreaPuestoRol()
	setTimeout(function() {
		listarAreasPuestosRoles('#crearUsuario')
	}, 600);
	//Init datepicker
	$('.fc-birthday').datepicker({
		showOtherMonths: true,
		selectOtherMonths: true
	});
	categorizarPermisos()
});

$('#verUsuario').on('show.bs.modal', function(e) {
	$('.select-clientes').select2({
		dropdownParent: $('#verUsuario .pasos[data-section="datos-perfil"] .clientes')
	});
	categorizarPermisos()
	requestClientes('#verUsuario')
});

if ($('body').find('select.nice-select').length > 0) {
	$('select.nice-select').niceSelect();

} else {
	console.log('no hay un nice select')
}

$('#verUsuario').on('hide.bs.modal', function(e) {
	document.querySelector('#form-ver-Usuario').reset();
});

$('#editarUsuario').on('show.bs.modal', function(e) {
	$('.select-clientes').select2({
		dropdownParent: $('#editarUsuario .pasos[data-section="datos-perfil"] .clientes')
	});
	categorizarPermisos();
	requestClientes('#editarUsuario');
	requestAreaPuestoRol()
	setTimeout(function() {
		listarAreasPuestosRoles('#editarUsuario');
	}, 700);
});

$('#editarUsuario').on('hide.bs.modal', function(e) {
	document.querySelector('#form-edit-Usuario').reset();
});

$('#editarUsuario button[data-action="save"]').on('click', function(e) {
	//actualizarUsuario($(e.currentTarget).data('id'))
});




/* Fin Modal Crear Usuario */

/* inicio Modal Ver Editar Usuario */

//Abrir modal ver/editar o eliminar usuario
$('.tableUsers').on('click', 'button[data-action]', function(e) {
		let _ID_USER = $(e.currentTarget).data('id');
		let tipoModal = $(e.currentTarget).data('action');
		switch (tipoModal) {
			case 'view-user':
				$('#verUsuario').modal('show');
				verUsuario(_ID_USER, 'view');
				break;
			case 'edit-user':
				$('#editarUsuario').modal('show');
				verUsuario(_ID_USER, 'edit');
				break;
			case 'delete-user':
				$('#alertasGeneral .modal-dialog').addClass('d-none');
				showAlerta('delete-user', 'info', _ID_USER);
				break;
		}
	})
	//Abrir modal ver restaurar o eliminar usuario eliminado

$('.tableUsersDelete').on('click', 'button[data-action]', function(e) {
	let _ID_USER = $(e.currentTarget).data('id');
	let tipoModal = $(e.currentTarget).data('action');
	switch (tipoModal) {
		case 'view-user':
			verUsuarioDelete(_ID_USER, 'view');
			$('#verUsuario').modal('show');
			break;
		case 'restore-user':
			$('#alertasGeneral .modal-dialog[data-modal="request-restore-user"] button[data-action="aceptar"]').data('id', _ID_USER)
			$('#alertasGeneral .modal-dialog[data-modal="request-restore-user"] button[data-action="aceptar"]').attr('data-id', _ID_USER)
			showAlerta('request-restore-user', 'info');
			break;
		case 'delete-user':
			$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('delete-user-permanent', 'info', _ID_USER);
			break;
	}
});

//Cambiar entre datos de colaborador y perfil 
$('.modal .datos-seccion button').on('click', function(e) {
	let current = $(e.currentTarget).data('sectionlabel'),
		modal = $(e.currentTarget).data('labelmodal');
	console.log(current)
	$(modal + ' .pasos.current').addClass('d-none').removeClass('current');
	$(modal + ' .pasos[data-section="' + current + '"]').addClass('current').removeClass('d-none');
})

//Alerta para eliminar perfil
$('#verUsuario button[data-action="delete"]').on('click', function(e) {
	let id = $(e.currentTarget).data('user-id');
	$('#verUsuario').addClass('newModal');

	if ($(e.currentTarget).hasClass('permanente')) {
		showAlerta('delete-user-permanent', 'info', id);
	} else {
		showAlerta('delete-user', 'info', id);
	}
	$('#alertasGeneral').on('hidden.bs.modal', function(e) {
		if ($('#verUsuario').hasClass('newModal')) {
			$('#verUsuario').removeClass('newModal');
			$('body').addClass('modal-open');
			$('#alertasGeneral .modal-dialog').addClass('d-none');
		}
	})
})

//Eliminar usuario succes
$('#alertasGeneral .modal-dialog[data-modal="delete-user"] button[data-action="aceptar"]').on('click', function(e) {
	console.log('intento de eliminar usuario')
	let user_ID_delete = e.currentTarget.dataset['userId'];
	eliminarUsuario(user_ID_delete)
});
//Eliminar registro de forma permanente
$('#alertasGeneral .modal-dialog[data-modal="delete-user-permanent"] button[data-action="aceptar"]').on('click', function(e) {
	let user_ID_delete = e.currentTarget.dataset['userId'];
	eliminarUsuarioPermanente(user_ID_delete);
})

//aceptar restaurar usuario
$('#alertasGeneral .modal-dialog[data-modal="request-restore-user"] button[data-action="aceptar"]').on('click', function(e) {
	restaurarUsuario($(e.currentTarget).data('id'));
})

/* Final Modal Ver Editar Usuario */


/* ——————————————————————|
|   Inicio Flujo Area    |
|———————————————————————*/


/* Inicio Modal Ver Editar Area */

$('#crearArea').on('click', 'button[data-action="save"]', function(e) {
	let areaV = $('#crearArea #form-crear-area input[name="area"]'),
		descriptionV = $('#crearArea #form-crear-area input[name="descripcion"]'),
		userV = $('#crearArea #form-crear-area select[name="responsable-area"]');
	if (is_valid({
			area: areaV,
			description: descriptionV,
			form: 'form-crearArea'
		})) {
		let dataForm = {
			area: $(areaV).val(),
			description: $(descriptionV).val(),
			is_responsable: $(userV).val()
		}
		console.log($(userV).val())
		crearNuevaArea(dataForm);
	}
});
$('#crearArea').on('show.bs.modal', function() {
	$('.responsable-area').select2({
		dropdownParent: $('#crearArea .modal-body')
	});
	listarUsuarios('#crearArea');
})
$('#crearArea').on('hide.bs.modal', function() {
	document.querySelector('#form-crear-area').reset();
	$('.responsable-area').select2({
		dropdownParent: $('#crearArea .modal-body')
	});
})

$('#editarArea').on('show.bs.modal', function() {
	$('#editarArea #form-edit-area input[name="form-editArea-name"]').removeClass('is-invalid')
	$('#editarArea #form-edit-area input[name="form-editArea-description"]').removeClass('is-invalid')
	$('.responsable-area').select2({
		dropdownParent: $('#editarArea .modal-body')
	});
})

//Listening botones de tablas
$('.tableAreas').on('click', 'button[data-action]', function(e) {
	let idarea = $(e.currentTarget).data('id'),
		tipoModal = $(e.currentTarget).data('action');
	switch (tipoModal) {
		case 'view-area':
			verArea(idarea, 'view')
			break;

		case 'edit-area':
			listarUsuarios('#editarArea');
			verArea(idarea, 'edit');
			break;
		case 'delete-area':
			$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('delete-area-request', 'info', idarea);
			break;
	}
});

$('.tableAreasDelete').on('click', 'button[data-action]', function(e) {
	let idarea = $(e.currentTarget).data('id'),
		tipoModal = $(e.currentTarget).data('action');
	switch (tipoModal) {
		case 'view-area':
			verAreaDelete(idarea)
			$('#viewArea').modal('show');
			break;

		case 'restore-area':
			$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('request-restore-area', 'info', idarea);
			break;
		case 'delete-area':
			$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('delete-area-permanent', 'info', idarea);
			break;
	}
});

//Eliminar area succes
$('#alertasGeneral .modal-dialog[data-modal="delete-area-request"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewArea').hasClass('newModal')) {
		$('#viewArea').removeClass('newModal');
		$('#viewArea').modal('hide')
	}
	$('#alertasGeneral').modal('hide');
	setTimeout(function() {
		showAlerta('delete-area-success', 'succes');
	}, 500);
})

//Alerta para eliminar area
$('#viewArea button[data-action]').on('click', function(e) {
	let id = $(e.currentTarget).data('area-id');

	if ($(e.currentTarget).data('action') == 'edit-area') {
		listarUsuarios('#editarArea');
		verArea(id, 'edit')
		$('#alertasGeneral .modal-dialog').addClass('d-none');
		$('#viewArea').modal('hide');
	}

	if ($(e.currentTarget).data('action') == 'delete-area') {
		$('#viewArea').addClass('newModal');
		if ($(e.currentTarget).hasClass('permanente')) {
			showAlerta('delete-area-permanent', 'info', id);
		} else {
			console.log($(e.currentTarget).hasClass('permanente'))
			showAlerta('delete-area-request', 'info', id);
		}
		$('#alertasGeneral').on('hidden.bs.modal', function(e) {
			if ($('#viewArea').hasClass('newModal')) {
				$('#viewArea').removeClass('newModal');
				$('body').addClass('modal-open');
				$('#alertasGeneral .modal-dialog').addClass('d-none');
			}
		})
	}
})

//Eliminar area succes desde boton modal
$('#alertasGeneral .modal-dialog[data-modal="delete-area-request"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewArea').hasClass('newModal')) {
		$('#viewArea').removeClass('newModal');
	}
	let area_ID_delete = e.currentTarget.dataset['userId'];
	eliminarArea(area_ID_delete)
});
//Eliminar area de forma permanente desde boton modal
$('#alertasGeneral .modal-dialog[data-modal="delete-area-permanent"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewArea').hasClass('newModal')) {
		$('#viewArea').removeClass('newModal');
	}
	let area_ID_delete = e.currentTarget.dataset['userId'];
	eliminarAreaPermanente(area_ID_delete);
})

//aceptar restaurar usuario
$('#alertasGeneral .modal-dialog[data-modal="request-restore-area"] button[data-action="aceptar"]').on('click', function(e) {
	restaurarArea($(e.currentTarget).data('id'));
})

/* Final Modal Ver Editar Area */


/* ——————————————————————————|
|   Inicio Flujo Permisos    |
|———————————————————————————*/


/* Inicio Modal Ver Editar Permiso */

$('#crearPermiso').on('show.bs.modal', function() {
	if (localStorage.getItem('cat-permisos')) {
		permisos = localStorage.getItem('cat-permisos')
		listarCategoriasPermisos(JSON.parse(permisos), undefined, 'crearPermiso')

	} else {
		requestPermisos();
		setTimeout(function() {
			permisos = localStorage.getItem('cat-permisos')
			listarCategoriasPermisos(JSON.parse(permisos), undefined, 'crearPermiso')
		}, 1000)

	}
})
$('#crearPermiso').on('hide.bs.modal', function() {
	document.querySelector('#form-crear-permiso').reset();
})

$('#crearPermiso').on('click', 'button[data-action="save"]', function(e) {
	let permiso = $('#form-crear-permiso input[name="form-crearPermiso-permiso"]'),
		descripcion = $('#form-crear-permiso input[name="form-crearPermiso-descripcion"]'),
		categoria = $('#form-crear-permiso select[name="categorias-permisos"]'),
		canDelete = $('#form-crear-permiso input[name="canDelete-permission"]');
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
			classification_id: $(categoria).val()
		};
		crearPermiso(dataForm);


	}
})

//Guarda cambios de permiso
// $('#editarPermiso').on('click', 'button[data-action="save"]', function(e) {
// 	$('#editarPermiso').modal('hide')
// 	showAlerta('edit-permiso-success', 'succes');
// })

$('.tablePermisos').on('click', 'button[data-action]', function(e) {
	let idPermiso = $(e.currentTarget).data('id'),
		tipoModal = $(e.currentTarget).data('action');
	switch (tipoModal) {
		case 'view-permiso':
			verPermiso(idPermiso, 'view')
			break;
		case 'edit-permiso':
			requestPermisos();
			setTimeout(function() {
				permisos = localStorage.getItem('cat-permisos')
				listarCategoriasPermisos(JSON.parse(permisos), idPermiso, 'editarPermiso')
				verPermiso(idPermiso, 'edit')
			}, 1000)
			break;
		case 'delete-permiso':
			$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('delete-permiso-request', 'info', idPermiso);
			break;
	}
})

$('.tablePermisosDelete').on('click', 'button[data-action]', function(e) {
	let idPermiso = $(e.currentTarget).data('id');
	let tipoModal = $(e.currentTarget).data('action');
	switch (tipoModal) {
		case 'view-permiso':
			verPermisoDelete(idPermiso, 'view')
			$('#viewPermiso').modal('show');
			break;
		case 'restore-permiso':
			showAlerta('request-restore-permiso', 'info', idPermiso);
			break;
		case 'delete-permiso':
			$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('delete-permiso-permanent', 'info', idPermiso);
			break;
	}
})

//Alerta para eliminar area
$('#viewPermiso button[data-action]').on('click', function(e) {
	let id = $(e.currentTarget).data('permiso-id');

	if ($(e.currentTarget).data('action') == 'edit-permiso') {
		requestPermisos();
		setTimeout(function() {
			permisos = localStorage.getItem('cat-permisos')
			listarCategoriasPermisos(JSON.parse(permisos), id, 'editarPermiso')
			verPermiso(id, 'edit')
		}, 1000)
		$('#viewPermiso').modal('hide');
	}

	if ($(e.currentTarget).data('action') == 'delete-permiso') {
		$('#viewPermiso').addClass('newModal');
		if ($(e.currentTarget).hasClass('permanente')) {
			showAlerta('delete-area-permanent', 'info', id);
		} else {
			console.log($(e.currentTarget).hasClass('permanente'))
			showAlerta('delete-area-request', 'info', id);
		}
		$('#alertasGeneral').on('hidden.bs.modal', function(e) {
			if ($('#viewPermiso').hasClass('newModal')) {
				$('#viewPermiso').removeClass('newModal');
				$('body').addClass('modal-open');
				$('#alertasGeneral .modal-dialog').addClass('d-none');
			}
		})
	}
})


//Eliminar area succes
$('#alertasGeneral .modal-dialog[data-modal="delete-permiso-request"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewPermiso').hasClass('newModal')) {
		$('#viewPermiso').removeClass('newModal');
	}
	let permiso_ID_delete = e.currentTarget.dataset['userId'];
	eliminarPermiso(permiso_ID_delete)
});

//Eliminar registro de forma permanente
$('#alertasGeneral .modal-dialog[data-modal="delete-permiso-permanent"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewPermiso').hasClass('newModal')) {
		$('#viewPermiso').removeClass('newModal');
	}
	let permiso_ID_delete = e.currentTarget.dataset['userId'];
	eliminarPermisoPermanente(permiso_ID_delete)
})

//aceptar restaurar usuario
$('#alertasGeneral .modal-dialog[data-modal="request-restore-permiso"] button[data-action="aceptar"]').on('click', function(e) {
	restaurarPermiso($(e.currentTarget).data('id'));
})


function listarCategoriasPermisos(data, id, modal) {
	let permisoMatch,
		categoria;
	JSON.parse(localStorage.getItem('permisos')).map(permiso => {
		if (permiso.id == id) {
			permisoMatch = permiso.classification_id;
		}
	})
	data.map(res => {
		if (permisoMatch == res.id) {
			categoria = '<option value="' + res.id + '" selected>' + capitalize(res.classification.toLowerCase()) + '</option>';
		} else {
			categoria = '<option value="' + res.id + '">' + capitalize(res.classification.toLowerCase()) + '</option>';
		}

		$('#' + modal + ' select[name="categorias-permisos"]').append(categoria)
		$('select.nice-select').niceSelect('update')
	})
}
/* Final Modal Ver Editar permisos */



/* —————————————————————|
|   Inicio Flujo Rol    |
|—————————————————————*/

/* Inicio Modal Ver Editar Rol */

$('#crearRol').on('click', 'button[data-action="save"]', function(e) {
	let rol = $('#form-create-rol input[name="form-createRol-rol"]'),
		descripcion = $('#form-create-rol input[name="form-createRol-descripcion"]'),
		permisos = $('#form-create-rol select[name="permisos"]'),
		accesoTotal = $('#form-create-rol input[name="accesTotal-rol"]'),
		assignClientes = $('#form-create-rol input[name="assignClients-rol"]'),
		isUsuario = $('#form-create-rol input[name="isUser-rol"]'),
		status = $('#form-create-rol input[name="status-rol"]'),
		canDelete = $('#form-create-rol input[name="canDelete-rol"]');
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
			permissions: $(permisos).val(),
			full_access: accesoTotal,
			is_user: $(isUsuario).prop('checked'),
			status: $(status).prop('checked'),
			to_assign_customers: assignClientes,
			can_delete: canDelete
		}
		crearRol(dataForm)
	}
});



$('.tableRoles').on('click', 'button[data-action]', function(e) {
	let idRol = $(e.currentTarget).data('id'),
		tipoModal = $(e.currentTarget).data('action');
	console.log(tipoModal)
	switch (tipoModal) {
		case 'view-rol':
			verRol(idRol, 'view');
			break;
		case 'delete-rol':
			$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('delete-rol-request', 'info', idRol);
			break;
		case 'edit-rol':
			verRol(idRol, 'edit');
			break;
	}
})
$('.tableRolesDelete').on('click', 'button[data-action]', function(e) {
	let idRol = $(e.currentTarget).data('id');
	let tipoModal = $(e.currentTarget).data('action');
	switch (tipoModal) {
		case 'view-rol':
			verRolDelete(idRol, 'view');
			break;
		case 'restore-rol':
			showAlerta('request-restore-rol', 'info', idRol);
			break;
		case 'delete-rol':
			$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('delete-rol-permanent', 'info', idRol);
			break;
	}
})
$('#crearRol').on('show.bs.modal', function() {
	categorizarPermisos()
})
$('#crearRol').on('hide.bs.modal', function() {
	document.querySelector('#form-create-rol').reset();
})
$('#viewRol').on('show.bs.modal', function() {
	categorizarPermisos()
})
$('#editarRol').on('show.bs.modal', function() {
	categorizarPermisos()
})

//Eliminar rol succes
$('#alertasGeneral .modal-dialog[data-modal="delete-rol-request"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewRol').hasClass('newModal')) {
		$('#viewRol').removeClass('newModal');
	}
	let rol_ID_delete = e.currentTarget.dataset['userId'];
	eliminarRol(rol_ID_delete)
});

//Cerrar request de rol


/* Final Modal Ver Editar Rol */

//Eliminar registro de forma permanente
$('#alertasGeneral .modal-dialog[data-modal="delete-rol-permanent"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewPermiso').hasClass('newModal')) {
		$('#viewPermiso').removeClass('newModal');
	}
	let rol_ID_delete = e.currentTarget.dataset['userId'];
	eliminarRolPermanente(rol_ID_delete)
})

//aceptar restaurar usuario
$('#alertasGeneral .modal-dialog[data-modal="request-restore-rol"] button[data-action="aceptar"]').on('click', function(e) {
	restaurarRol($(e.currentTarget).data('id'))

})


/* ————————————————————————|
|   Inicio Flujo Puesto    |
|—————————————————————————*/

/* Inicio Modal Ver Editar Puesto */

$('#crearPuesto').on('click', 'button[data-action="save"]', function(e) {
	let puesto = $('#crearPuesto input[name="form-createPuesto-puesto"]'),
		description = $('#crearPuesto input[name="form-createPuesto-descripcion"]');
	if (is_valid({
			puesto: puesto,
			description: description,
			form: 'form-crearPuesto'
		})) {
		let dataForm = {
			stall: $(puesto).val(),
			description: $(description).val(),
		}
		crearPuesto(dataForm)

	}
})
$('#crearPuesto').on('hide.bs.modal', function() {
	document.querySelector('#form-crear-puesto').reset();
	$('#crearPuesto').find('.is-invalid').removeClass('is-invalid')
})

$('#editarPuesto').on('hide.bs.modal', function() {
	document.querySelector('#form-edit-puesto').reset();
	$('#editarPuesto').find('.is-invalid').removeClass('is-invalid')
})


$('.tablePuestos').on('click', 'button[data-action]', function(e) {
	let idPuesto = $(e.currentTarget).data('id'),
		tipoModal = $(e.currentTarget).data('action');
	switch (tipoModal) {
		case 'view-puesto':
			verPuesto(idPuesto, 'view');
			// $('#viewPuesto').on('click', 'button[data-action]', function(e) {
			// 	let data = $(e.currentTarget).data('iduser'),
			// 		tipoModal_new = $(e.currentTarget).data('action');
			// 	if (tipoModal_new == 'delete-puesto') {
			// 		$('#viewPuesto').addClass('newModal');
			// 		$('#alertasGeneral .modal-dialog').addClass('d-none');
			// 		showAlerta('delete-puesto-request', 'info');
			// 	}
			// 	if (tipoModal_new == 'edit-puesto') {
			// 		$('#alertasGeneral .modal-dialog').addClass('d-none');
			// 		$('#viewPuesto').modal('hide');
			// 		$('#editarPuesto').modal('show');
			// 	}
			// })
			break;
		case 'delete-puesto':
			//$('#alertasGeneral .modal-dialog').addClass('d-none');
			showAlerta('delete-puesto-request', 'info', idPuesto);
			break;
		case 'edit-puesto':
			verPuesto(idPuesto, 'edit');
			// $('#alertasGeneral .modal-dialog').addClass('d-none');
			// $('#editarPuesto').modal('show');
			break;
	}
})
$('.tablePuestosDelete').on('click', 'button[data-action]', function(e) {
	let idPuesto = $(e.currentTarget).data('id'),
		tipoModal = $(e.currentTarget).data('action');
	switch (tipoModal) {
		case 'view-puesto':
			verPuestoDelete(idPuesto, 'view')
			break;
		case 'delete-puesto':
			showAlerta('delete-puesto-permanent', 'info', idPuesto);
			break;
		case 'restore-puesto':
			showAlerta('request-restore-puesto', 'info', idPuesto);
			break;
	}
})

//Eliminar puesto succes
$('#alertasGeneral .modal-dialog[data-modal="delete-puesto-request"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewPuesto').hasClass('newModal')) {
		$('#viewPuesto').removeClass('newModal');
	}
	let puesto_ID_delete = e.currentTarget.dataset['userId'];
	eliminarPuesto(puesto_ID_delete)
})

//Cerrar request de puesto
$('#alertasGeneral .modal-dialog[data-modal="delete-puesto-request"] button[data-action="close"]').on('click', function(e) {
	if ($('#viewPuesto').hasClass('newModal')) {
		$('#viewPuesto').removeClass('newModal');
	}
});

$('#alertasGeneral').on('hide.bs.modal', function(e) {
	if ($('#viewPuesto').hasClass('newModal')) {
		$('#viewPuesto').removeClass('newModal');
	}
});
$('#viewPuesto button[data-action]').on('click', function(e) {
	let id = $(e.currentTarget).data('puesto-id');

	if ($(e.currentTarget).data('action') == 'edit-puesto') {
		verPuesto(id, 'edit')
		$('#alertasGeneral .modal-dialog').addClass('d-none');
		$('#viewPuesto').modal('hide');
	}

	if ($(e.currentTarget).data('action') == 'delete-puesto') {
		$('#viewPuesto').addClass('newModal');
		if ($(e.currentTarget).hasClass('permanente')) {
			showAlerta('delete-puesto-permanent', 'info', id);
		} else {
			showAlerta('delete-puesto-request', 'info', id);
		}
		$('#alertasGeneral').on('hidden.bs.modal', function(e) {
			if ($('#viewPuesto').hasClass('newModal')) {
				$('#viewPuesto').removeClass('newModal');
				$('body').addClass('modal-open');
				$('#alertasGeneral .modal-dialog').addClass('d-none');
			}
		})
	}
})


//Eliminar registro de forma permanente
$('#alertasGeneral .modal-dialog[data-modal="delete-puesto-permanent"] button[data-action="aceptar"]').on('click', function(e) {
	if ($('#viewPuesto').hasClass('newModal')) {
		$('#viewPuesto').removeClass('newModal');
	}
	let puesto_ID_delete = e.currentTarget.dataset['userId'];
	eliminarPuestoPermanente(puesto_ID_delete)
})

//aceptar restaurar usuario
$('#alertasGeneral .modal-dialog[data-modal="request-restore-puesto"] button[data-action="aceptar"]').on('click', function(e) {
		restaurarPuesto($(e.currentTarget).data('id'))
	})
	/* Final Modal Ver Editar Area */