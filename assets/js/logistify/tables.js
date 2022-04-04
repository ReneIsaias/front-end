var _url = window.location.origin;
//Tabla de usuarios 
var users;
if (window.location.pathname == '/usuarios') {
	let dataUser;

	function renderUserTable(message) {
		console.log(message)
		$(".tableUsers-content").empty()
		fetch(_API + 'users?included=areas,roles', {
				'method': 'GET',
				'headers': headers
			})
			.then(res => {
				return res.json();
			})
			.then((result) => {
				dataUser = result.data;
				users = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [{
							name: 'id',
							hidden: true
						}, {
							name: 'Fotografía',
							hidden: true
						},
						'Nombre',
						'Correo electrónico',
						'Área', {
							name: 'Rol asignado',
							width: '10%'
						},
						''
					],
					data: dataUser.map(user => [
						user.id,
						null,
						nombre(user.name, user.lastname),
						user.email,
						areas(user.areas),
						roles(user.roles),
						gridjs.html(`<button class="btn btn-link text-morado w-auto" data-action="view-user" data-id="${user.id}"><i class="fas fa-eye mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="edit-user" data-id="${user.id}"><i class="fas fa-pencil-alt mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="delete-user" data-id="${user.id}"><i class="fas fa-trash mr-2"></i></button>`)
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
							'placeholder': 'Buscar usuario'
						},
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tableUsers-content"));
				updateTablaUsers(15);
			});
	}
	renderUserTable();


	function nombre(name, lastname) {
		let nombreCompleto;
		if (name != undefined) {
			nombreCompleto = name;
		}
		if (lastname != undefined) {
			nombreCompleto += ' ' + lastname;
		}
		return nombreCompleto
	}

	function roles(items) {
		let asignados = "";
		for (rol in items) {
			itemActual = rol
			if (parseInt(itemActual) + 1 == items.length) {
				asignados += items[rol].rol.toLowerCase()
			} else {
				asignados += items[rol].rol.toLowerCase() + ", "
			}

		}
		return capitalize(asignados);

	}

	function areas(items) {
		let asignados = [],
			itemActual;
		for (area in items) {
			itemActual = area
			if (parseInt(itemActual) + 1 == items.length) {
				asignados += items[area].area.toLowerCase()
			} else {
				asignados += items[area].area.toLowerCase() + ", "
			}
		}

		return capitalize(asignados.toString());

	}
	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		updateTablaUsers(limite)
	})

	function updateTablaUsers(limite) {
		console.log(limite)
		users.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar usuario'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender();
	}
}

//Tabla de usuarios eliminados
if (window.location.pathname == '/usuarios_eliminados') {
	let dataUser;
	let users;

	function renderUserDeleteTable() {
		$(".tableUsersDelete-content").empty()
		fetch(_API + 'admin/users?included=areas,roles', {
				'method': 'GET',
				'headers': headers
			})
			.then(res => {
				return res.json();
			})
			.then((result) => {
				dataUser = result.data;
				users = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [{
							name: 'id',
							hidden: true
						}, {
							name: 'Fotografía',
							hidden: true
						},
						'Nombre',
						'Correo electrónico',
						'Área', {
							name: 'Rol asignado',
							width: '10%'
						},
						''
					],
					data: dataUser.map(user => [
						user.id,
						null,
						nombre(user.name, user.lastname),
						user.email,
						areas(user.areas),
						roles(user.roles),
						gridjs.html(`<button class="btn btn-link text-morado w-auto" data-action="view-user" data-id="${user.id}"><i class="fas fa-eye mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="restore-user" data-id="${user.id}"><i class="fas fa-undo mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="delete-user" data-id="${user.id}"><i class="fas fa-trash mr-2"></i></button>`)
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
							'placeholder': 'Buscar Usuario'
						},
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tableUsersDelete-content"));
				updateTablaUsers(15);
			});
	}
	renderUserDeleteTable()


	function nombre(name, lastname) {
		let nombreCompleto;
		if (name != undefined) {
			nombreCompleto = name;
		}
		if (lastname != undefined) {
			nombreCompleto += ' ' + lastname;
		}
		return nombreCompleto
	}

	function roles(items) {
		let asignados = "";
		for (rol in items) {
			itemActual = rol
			if (parseInt(itemActual) + 1 == items.length) {
				asignados += items[rol].rol.toLowerCase()
			} else {
				asignados += items[rol].rol.toLowerCase() + ", "
			}

		}
		return asignados;

	}

	function areas(items) {
		let asignados = [],
			itemActual;
		// items.forEach(item => {
		// 		if (items.length > 1) {
		// 			console.log(item.indexOf())
		// 			asignados += item.area.toLowerCase() + ", "

		// 		} else {
		// 			asignados += item.area.toLowerCase()
		// 		}
		// 	})
		for (area in items) {
			itemActual = area
			if (parseInt(itemActual) + 1 == items.length) {
				asignados += items[area].area.toLowerCase()
			} else {
				asignados += items[area].area.toLowerCase() + ", "
			}
			//asignados.push(items[area].area.toLowerCase())
		}

		return asignados.toString();

	}

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		users.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender();
		$('.logistify-table .gridjs-search').find('input[type="search"]').attr('placeholder', 'Buscar')
	})

	function updateTablaUsers(limite) {
		console.log(limite)
		users.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar usuario'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender();
	}
}

//Tablas de Areás y  areas eliminadas
if (window.location.pathname == '/areas') {
	let dataAreas;
	let areas;

	function renderAreaTable() {
		$(".tableAreas-content").empty();
		fetch(_API + 'areas?included=responsable', {
				'method': 'GET',
				'headers': headers
			})
			.then((data) => {
				return data.json()
			})
			.then((result) => {
				console.log(result.data)
				dataAreas = result.data;
				areas = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [{
							name: 'id',
							hidden: true
						},
						'Área',
						'Descripción',
						'Responsable', ''
					],
					data: dataAreas.map(area => [
						area.id,
						area.area,
						area.description,
						responsable(area.responsable),
						gridjs.html(`<button class="btn btn-link text-morado w-auto" data-action="view-area" data-id="${area.id}"><i class="fas fa-eye mr-2"></i></button>
							<button class="btn btn-link text-morado w-auto" data-action="edit-area" data-id="${area.id}"><i class="fas fa-pencil-alt mr-2"></i></button>
							<button class="btn btn-link text-morado w-auto" data-action="delete-area" data-id="${area.id}"><i class="fas fa-trash mr-2"></i></button>`)
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
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tableAreas-content"));
				updateTablaAreas(15);
			})
	}
	renderAreaTable();

	function responsable(data) {
		if (data.length > 0) {
			return data[0].name + ' ' + data[0].lastname
		} else {
			return 'Sin Responsable';
		}
	}

	function updateTablaAreas(limite) {
		console.log(limite)
		areas.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar usuario'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender();
	}

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		areas.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender()
		$('.logistify-table .gridjs-search').find('input[type="search"]').attr('placeholder', 'Buscar')
	})
}

if (window.location.pathname == '/areas_eliminadas') {
	let dataAreasDelete;
	let areasDelete;

	function renderAreaTableDelete() {
		$(".tableAreasDelete-content").empty();
		fetch(_API + 'admin/areas?included=responsable', {
				'method': 'GET',
				'headers': headers
			})
			.then((data) => {
				return data.json()
			})
			.then((result) => {
				console.log(result.data)
				dataAreasDelete = result.data;
				areasDelete = new gridjs.Grid({
					resizable: true,
					columns: [
						'Area',
						'Descripción',
						'Responsable', ''
					],
					data: dataAreasDelete.map(result => [
						result.area,
						result.description,
						responsable(result.responsable),
						gridjs.html(`<button class="btn btn-link text-morado w-auto" data-action="view-area" data-id="${result.id}"><i class="fas fa-eye mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="restore-area" data-id="${result.id}"><i class="fas fa-undo mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="delete-area" data-id="${result.id}"><i class="fas fa-trash mr-2"></i></button>`)
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
						limit: 5
					},
					sort: true,
					language: {
						'search': {
							'placeholder': 'Buscar'
						},
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tableAreasDelete-content"));
				updateTablaAreasDelete(15)
			})
	}

	renderAreaTableDelete();


	function responsable(data) {
		if (data.length > 0) {
			return data[0].name + ' ' + data[0].lastname
		} else {
			return 'Sin Responsable';
		}
	}

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		usersAreas.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender()
		$('.logistify-table .gridjs-search').find('input[type="search"]').attr('placeholder', 'Buscar')
	})

	function updateTablaAreasDelete(limite) {
		areasDelete.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			},
			language: {
				'search': {
					'placeholder': 'Buscar usuario'
				},
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).forceRender();
	}

}

//Tablas de permisos y permisos eliminados
if (window.location.pathname == '/permisos') {

	let dataPermisos,
		permisos;
	requestPermisos();
	setTimeout(function() {
		permisos = localStorage.getItem('permisos')
		renderPermisosTable(JSON.parse(permisos))
	}, 1000)

	function renderPermisosTable(data) {
		$(".tablePermisos-content").empty()
		dataPermisos = data;
		permisos = new gridjs.Grid({
			search: true,
			resizable: true,
			columns: [
				'Permiso',
				'Descripción',
				''
			],
			data: dataPermisos.map(permiso => [
				permiso.permission,
				permiso.description,
				gridjs.html(canDelete(permiso))

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
			noRecordsFound: 'No se encontro ningún registro',
			language: {
				'search': {
					'placeholder': 'Buscar'
				},
				'noRecordsFound': 'No se encontro ningún registro',
				'pagination': {
					'previous': '〈',
					'next': '〉'
				}
			}
		}).render(document.querySelector(".tablePermisos-content"));
		updateTablaPermisos(15);
	}

	function canDelete(data) {
		let buttons;
		if (!data.can_delete) {
			buttons = `<button class="btn btn-link text-morado w-auto" data-action="view-permiso" data-id="${data.id}"><i class="fas fa-eye mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="edit-permiso" data-id="${data.id}"><i class="fas fa-pencil-alt mr-2"></i></button>`
		} else {
			buttons = `<button class="btn btn-link text-morado w-auto" data-action="view-permiso" data-id="${data.id}"><i class="fas fa-eye mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="edit-permiso" data-id="${data.id}"><i class="fas fa-pencil-alt mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="delete-permiso" data-id="${data.id}"><i class="fas fa-trash mr-2"></i></button>`
		}
		return buttons
	}





	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		permisos.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender()
		$('.logistify-table .gridjs-search').find('input[type="search"]').attr('placeholder', 'Buscar')
	})

	function updateTablaPermisos(limite) {
		permisos.updateConfig({
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
		}).forceRender();
	}
}

if (window.location.pathname == '/permisos_eliminados') {
	let permisosDelete,
		dataPermisosDelete;

	function renderPermisosTableDelete() {
		$(".tablePermisosDelete-content").empty();
		fetch(_API + 'admin/permissions?included=responsable', {
				'method': 'GET',
				'headers': headers
			})
			.then((data) => {
				return data.json()
			})
			.then(res => {
				dataPermisosDelete = res.data
				permisosDelete = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [{
							name: 'Permiso',
							formatter: (cell) => gridjs.html(`<b>${cell}</b>`)
						},
						'Descripción',
						''
					],
					data: dataPermisosDelete.map(permiso => [
						capitalize(permiso.permission),
						permiso.description,
						gridjs.html(`<button class="btn btn-link text-morado w-auto" data-action="view-permiso" data-id="${permiso.id}"><i class="fas fa-eye mr-2"></i></button>
							<button class="btn btn-link text-morado w-auto" data-action="restore-permiso" data-id="${permiso.id}"><i class="fas fa-undo mr-2"></i></button>
							<button class="btn btn-link text-morado w-auto" data-action="delete-permiso" data-id="${permiso.id}"><i class="fas fa-trash mr-2"></i></button>`)

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
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tablePermisosDelete-content"));
				updateTablaPermisosDelete();
			})
	}
	renderPermisosTableDelete();


	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		permisosDelete.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender()
		$('.logistify-table .gridjs-search').find('input[type="search"]').attr('placeholder', 'Buscar')
	})

	function updateTablaPermisosDelete(limite) {
		permisosDelete.updateConfig({
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
		}).forceRender();
	}
}


//Tablas de roles y usuarios asignados a roles

if (window.location.pathname == '/roles') {
	let dataRoles;
	let roles;

	function renderRolesTable() {
		$(".tableRoles-content").empty();
		fetch(_API + 'roles?included=users,permissions', {
				'method': 'GET',
				'headers': headers
			})
			.then((data) => {
				return data.json()
			})
			.then((result) => {
				console.log(result.data)
				dataRoles = result.data;
				roles = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [{
							name: 'Rol',
							width: '20%'
						}, {
							name: 'Descripción',
							width: '40%'
						},
						'Acceso total', {
							name: '',
							width: '10%'
						},
					],
					data: dataRoles.map(rol => [
						capitalize(rol.rol.toLowerCase()),
						rol.description,
						rol.full_access,
						gridjs.html(canDelete(rol))
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
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tableRoles-content"));
				updateTablaRoles(15);
			})
	}
	renderRolesTable();

	function responsable(data) {
		console.log(data[0].name)
	}

	function canDelete(data) {
		let buttons;
		if (!data.can_delete) {
			buttons = `<button class="btn btn-link text-morado w-auto" data-action="view-rol" data-id="${data.id}"><i class="fas fa-eye mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="edit-rol" data-id="${data.id}"><i class="fas fa-pencil-alt mr-2"></i></button>`
		} else {
			buttons = `<button class="btn btn-link text-morado w-auto" data-action="view-rol" data-id="${data.id}"><i class="fas fa-eye mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="edit-rol" data-id="${data.id}"><i class="fas fa-pencil-alt mr-2"></i></button>
						<button class="btn btn-link text-morado w-auto" data-action="delete-rol" data-id="${data.id}"><i class="fas fa-trash mr-2"></i></button>`
		}
		return buttons
	}

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		roles.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender()
	})

	function updateTablaRoles(limite) {
		roles.updateConfig({
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
		}).forceRender();
	}
}

if (window.location.pathname == '/roles_eliminados') {
	let dataRoles;
	let roles;

	function renderRolesTableDelete() {
		$(".tableRolesDelete-content").empty();
		fetch(_API + 'admin/roles?included=users,permissions', {
				'method': 'GET',
				'headers': headers
			})
			.then((data) => {
				return data.json()
			})
			.then((result) => {
				console.log(result.data)
				dataRoles = result.data;
				roles = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [{
							name: 'Rol',
							width: '20%'
						}, {
							name: 'Descripción',
							width: '40%'
						},
						'Acceso total', {
							name: '',
							width: '10%'
						},
					],
					data: dataRoles.map(rol => [
						capitalize(rol.rol.toLowerCase()),
						rol.description,
						rol.full_access,
						gridjs.html(`<button class="btn btn-link text-morado w-auto" data-action="view-rol" data-id="${rol.id}"><i class="fas fa-eye mr-2"></i></button>
							<button class="btn btn-link text-morado w-auto" data-action="restore-rol" data-id="${rol.id}"><i class="fas fa-undo mr-2"></i></button>
							<button class="btn btn-link text-morado w-auto" data-action="delete-rol" data-id="${rol.id}"><i class="fas fa-trash mr-2"></i></button>`)
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
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tableRolesDelete-content"));
				updateTablaRolesDelete(15);
			})
	}
	renderRolesTableDelete();

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		roles.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender()
	})

	function updateTablaRolesDelete(limite) {
		roles.updateConfig({
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
		}).forceRender();
	}
}


//Tablas de roles y usuarios asignados a roles

if (window.location.pathname == '/puestos') {
	let dataPuestos;
	let puestos;

	function renderPuestosTable() {
		$(".tablePuestos-content").empty();
		fetch(_API + 'stalls?included=users', {
				'method': 'GET',
				'headers': headers
			})
			.then((data) => {
				return data.json()
			})
			.then((result) => {
				dataPuestos = result.data;
				puestos = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [{
						name: 'Puesto',
						width: '20%'
					}, {
						name: 'Descripción'
					}, {
						name: '',
						width: '10%'
					}, ],
					data: dataPuestos.map(stall => [
						capitalize(stall.stall.toLowerCase()),
						stall.description,
						gridjs.html(`<button class="btn btn-link text-morado w-auto" data-action="view-puesto" data-id="${stall.id}"><i class="fas fa-eye mr-2"></i></button>
								<button class="btn btn-link text-morado w-auto" data-action="edit-puesto" data-id="${stall.id}"><i class="fas fa-pencil-alt mr-2"></i></button>
								<button class="btn btn-link text-morado w-auto" data-action="delete-puesto" data-id="${stall.id}"><i class="fas fa-trash mr-2"></i></button>`)
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
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tablePuestos-content"));
				updateTablaPuestos(15);
			});
	}
	renderPuestosTable()

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		puestos.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender()
	})

	function updateTablaPuestos(limite) {
		puestos.updateConfig({
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
		}).forceRender();
	}
}

if (window.location.pathname == '/puestos_eliminados') {
	let dataPuestosDelete;
	let puestosDelete;

	function renderTablaPuestosDelete() {
		$(".tablePuestosDelete-content").empty();
		fetch(_API + 'admin/stalls?included=users', {
				'method': 'GET',
				'headers': headers
			})
			.then((data) => {
				return data.json()
			})
			.then((result) => {
				dataPuestosDelete = result.data;
				puestosDelete = new gridjs.Grid({
					search: true,
					resizable: true,
					columns: [{
						name: 'Puesto',
						width: '20%'
					}, {
						name: 'Descripción'
					}, {
						name: '',
						width: '10%'
					}, ],
					data: dataPuestosDelete.map(stall => [
						capitalize(stall.stall.toLowerCase()),
						stall.description,
						gridjs.html(`<button class="btn btn-link text-morado w-auto" data-action="view-puesto" data-id="${stall.id}"><i class="fas fa-eye mr-2"></i></button>
							<button class="btn btn-link text-morado w-auto" data-action="restore-puesto" data-id="${stall.id}"><i class="fas fa-undo mr-2"></i></button>
							<button class="btn btn-link text-morado w-auto" data-action="delete-puesto" data-id="${stall.id}"><i class="fas fa-trash mr-2"></i></button>`)
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
						'noRecordsFound': 'No se encontro ningún registro',
						'pagination': {
							'previous': '〈',
							'next': '〉'
						}
					}
				}).render(document.querySelector(".tablePuestosDelete-content"));
				updateTablaPuestosDelete(15)
			});
	}
	renderTablaPuestosDelete()

	$('.logistify-table_limit select').on('change', function(e) {
		let currentTable = $(e.currentTarget).data('table')
		$("." + currentTable + "-content").empty()
		let limite = e.currentTarget.value;
		puestosDelete.updateConfig({
			pagination: {
				summary: false,
				limit: limite
			}
		}).forceRender()
	})

	function updateTablaPuestosDelete(limite) {
		puestosDelete.updateConfig({
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
		}).forceRender();
	}
}