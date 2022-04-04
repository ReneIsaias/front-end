let users = new gridjs.Grid({
	search: true,
	resizable: true,
	columns: ['Title', 'Director', 'Producer', 'Acciones'],
	server: {
		url: 'https://swapi.dev/api/films/',
		then: data => data.results.map(movie => [movie.title, movie.director, movie.producer, actions(movie.episode_id, '#modalUsers')])
	},
	className: {
		table: 'logistify-table'
	},
	pagination: {
		enabled: true,
		summary: false,
		limit: 15
	},
	sort: true
}).render(document.querySelector(".tableUsers-content"));

function actions(id, modal) {
	let iconsActions = document.createElement('div')
		//Crea y agrega boton para accion view
	let btnView = document.createElement('button');
	btnView.setAttribute('data-id', id)
	btnView.setAttribute('data-action', 'view')
	btnView.setAttribute('data-toggle', 'modal')
	btnView.setAttribute('data-target', modal)
	btnView.setAttribute('class', 'btn fas fa-eye')
		//Crea y agrega boton para accion Edit
	let btnEdit = document.createElement('button');
	btnEdit.setAttribute('data-id', id)
	btnEdit.setAttribute('data-action', 'edit')
	btnEdit.setAttribute('data-toggle', 'modal')
	btnEdit.setAttribute('data-target', modal)
	btnEdit.setAttribute('class', 'btn fas fa-pencil-alt')
		//Crea y agrega boton para accion Delete
	let btnDelete = document.createElement('button');
	btnDelete.setAttribute('data-id', id)
	btnDelete.setAttribute('data-action', 'delete')
	btnDelete.setAttribute('data-toggle', 'modal')
	btnDelete.setAttribute('data-target', modal)
	btnDelete.setAttribute('class', 'btn far fa-trash-alt')

	iconsActions.appendChild(btnView)
	iconsActions.appendChild(btnEdit)
	iconsActions.appendChild(btnDelete)
	return iconsActions;
}
$('.logistify-table_limit select').on('change', function(e) {
	let tableModify;
	let currentTable = $(e.currentTarget).data('table')
	$("." + currentTable + "-content").empty()
	let limite = e.currentTarget.value;
	console.log(users.config.pagination.limit)
	switch (currentTable) {
		case 'tableUsers':
			tableModify = users;
	}
	tableModify.updateConfig({
		pagination: {
			summary: false,
			limit: limite
		}
	}).forceRender()
	$('.logistify-table .gridjs-search').find('input[type="search"]').attr('placeholder', 'Buscador')
})

$('.logistify-table .gridjs-search').find('input[type="search"]').attr('placeholder', 'Buscador')

if (window.innerWidth < 991) {
	$('.logistify-table .gridjs-wrapper table').on('click', 'td:first-child', function(e) {
		console.log(e)
		if (e.currentTarget.parentElement.classList.contains('open')) {
			$(e.currentTarget).parent().removeClass('open');
			$(e.currentTarget).parent().height('45');

		} else {
			$(e.currentTarget).parent().addClass('open');
			let altura = ((e.currentTarget.parentElement.children.length - 1) * 21) + 45 + 40

			$(e.currentTarget).parent().height(altura);
		}
	})
}
/* Abre el modal según el id del boton que lo manda a llamar así como su acción  */
$('.logistify').on('click', 'button[data-toggle="modal"]', function(e) {
	let modalId = $(e.currentTarget).data('target');
	let modalType = $(e.currentTarget).data('action');
	if (modalType == 'add') {
		console.log(modalId)
		$(modalId + ' .modal-header h5').html('Nuevo Usuario')
		$(modalId + ' .modal-body .modal-body_add').removeClass('d-none')
		$(modalId + ' .modal-body .modal-body_add--step.active').removeClass('active');
		$(modalId + ' .modal-body .modal-body_add--step.edit').removeClass('edit');
		$(modalId + ' .modal-body .modal-body_add--step[data-step="1"]').addClass('active');
	}
	if (modalType == 'view') {
		console.log(modalId)
		$(modalId + ' .modal-header h5').html('Datos del Usuario')
		$(modalId + ' .modal-body .modal-body_view-edit').removeClass('d-none')
	}
	if (modalType == 'edit') {
		console.log(modalId)
		$(modalId + ' .modal-header h5').html('Editar Usuario')
		$(modalId + ' .modal-body .modal-body_view-edit').removeClass('d-none')
	}
	if (modalType == 'delete') {
		console.log(modalId)
		$(modalId + ' .modal-header h5').html('Eliminar Usuario')
		$(modalId + ' .modal-body .modal-body_delete').removeClass('d-none')
	}
	$('.js-example-basic-multiply').select2({
		dropdownParent: $(modalId)
	});
})

$('.logistify .modal-Logistify').on('hidden.bs.modal', function(e) {
	$(e.currentTarget).find('.modal-body').children().addClass('d-none')
})


$('#modalUsers input#imgUpload').on('change', function(e) {
	let fileImage = e.currentTarget.files[0];
	if (fileImage) {
		$('#modalUsers .photo-perfil').attr('src', URL.createObjectURL(fileImage))
	}
})

//Manejo de steps en modal crear usuario envio a funcion con parametro de nmodal al que tiene que afectar
$('.logistify .modal-Logistify#modalUsers .btn-next').on('click', function(e) {
	changeStepsModalCreate($(e.currentTarget).data('modal'), 'step')
})

//Manejo de Steps pero estando en el modal, detectando si se quiere editar un paso que ya se habia llenado
$('.logistify .modal-Logistify#modalUsers .header-edit').on('click', 'button', function(e) {
	console.log($(e.currentTarget).data('steplabel'), 'edit')
	changeStepsModalCreate($(e.currentTarget).data('modal'), ['edit', $(e.currentTarget).data('steplabel')])
})

function changeStepsModalCreate(idModal, action) {
	console.log(action)
	let controlModal = idModal;
	let totalSteps = $(controlModal).find('.modal-body_add--step').length;
	let currentStep = $(controlModal).find('.modal-body_add--step.active').data('step');
	if (currentStep == 1) {
		if (action == 'step') {
			$(controlModal).find('.modal-body_add--step[data-step="1"]').removeClass('active').addClass('edit');
			$(controlModal).find('.modal-body_add--step[data-step="2"]').addClass('active');
			console.log('esta pàsanado bien paso 2')

		}
	}
	if (currentStep == 2) {
		console.log()
		if (action == 'step') {
			$(controlModal).find('.modal-body_add--step[data-step="2"]').removeClass('active').addClass('edit');
			$(controlModal).find('.modal-body_add--step[data-step="3"]').addClass('active');
			$(controlModal).find('.btn-next').html('Crear');
			console.log('esta pàsanado bien paso 2')
		}
	}
	if (currentStep == 3) {
		if (action == 'step') {
			$(controlModal).modal('hide');
			$(controlModal).find('.btn-next').html('Continuar');
			Swal.fire(
				'Usuario Creado!',
				'El usuario Jhon Lynn se a creado de forma correcta, se le enviara un correó con los datos de acceso.',
				'success'
			)
		}
	}
	if (action[0] == "edit") {
		if (action[1] == 1) {
			$(controlModal).find('.modal-body_add--step[data-step="3"]').removeClass('active edit');
			$(controlModal).find('.modal-body_add--step[data-step="2"]').removeClass('active edit');
			$(controlModal).find('.modal-body_add--step[data-step="1"]').addClass('active').removeClass('edit');
			$(controlModal).find('.btn-next').html('Continuar');
		}
		if (action[1] == 2) {
			$(controlModal).find('.modal-body_add--step[data-step="3"]').removeClass('active edit');
			$(controlModal).find('.modal-body_add--step[data-step="2"]').addClass('active').removeClass('edit');
			$(controlModal).find('.btn-next').html('Continuar');
		}
	}
}

$(document).ready(function() {


})