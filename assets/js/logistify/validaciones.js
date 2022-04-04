//funcion para validar inputs login
function is_valid(params) {
	let valid;
	$('#alertasGeneral .modal-dialog').addClass('d-none');
	let user = params.user,
		pass = params.pass,
		passVerify = params.passVerify,
		firstname = params.firstname,
		lastname = params.lastname,
		mail = params.mail,
		phone = params.phone,
		genere = params.genere,
		birthday = params.birthday,
		imgPerfil = params.imgPerfil,
		area = params.area,
		puesto = params.puesto,
		roles = params.roles,
		permisos = params.permisos,
		clientes = params.clientes,
		description = params.description,
		form = params.form,
		categoria = params.categoria,
		can_delete = params.can_delete,
		step = params.step;
	switch (form) {
		case 'form-login':
			if (user[0].value.length > 0 && pass[0].value.length > 0) {
				let data = {
					'email': user[0].value,
					'password': pass[0].value
				}
				fetch(_API + 'sign-in', {
						'method': 'POST',
						'body': JSON.stringify(data),
						'headers': {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
							'Host': 'http://54.172.217.230',
							'Accept': 'application/json',
							'Accept-Encoding': 'gzip, deflate, br',
							'Connection': 'keep-alive'
						}
					})
					.then(res => res.json())
					.then(res => {
						if (!res.result) {
							showAlerta('login-data-error', 'error');
						}
						if (res.result) {
							localStorage.setItem('token', res.data);
							window.location = '/usuarios';
						}
					})
			} else {
				$(user).addClass('is-invalid');
				$(pass).addClass('is-invalid');
				$('#' + form + ' .form-group .icon').addClass('is-invalid');
			}
			//verificamos si typean
			$(user).on('keypress', function(e) {
				if (this.value.length > 0) {
					$(this).removeClass('is-invalid');
				}
			})
			$(pass).on('keypress', function(e) {
				if (this.value.length > 0) {
					$(this).removeClass('is-invalid');
					$('#' + form + ' .form-group .icon').removeClass('is-invalid');
				}
			})
			break;
		case 'form-restorePass':
			if (user[0].value.length > 0) {
				let data = {
					'email': user[0].value
				}
				fetch(_API + 'reset-password', {
						'method': 'POST',
						'body': JSON.stringify(data),
						'headers': {
							'Content-Type': 'application/json'
						}
					})
					.then(res => res.json())
					.then(res => {
						if (!res.result) {
							showAlerta('request-pass-error', 'error');
						}
						if (res.result) {
							showAlerta('request-pass-success', 'success');
							$('#alertasGeneral .modal-dialog[data-modal="request-pass-success"] button[data-dismiss]').on('click', function(e) {
								window.location.href = $(e.currentTarget).data('href');
							})
							setTimeout(function() {
								window.location.href = 'login';
							}, 5000);
						}
					})
			} else {
				$(user).addClass('is-invalid');
				$(user).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			break;
		case 'form-restorePass-change':
			if (pass[0].value.length > 0, passVerify[0].value.length > 0) {
				if (pass[0].value == passVerify[0].value) {
					let parametros = urlParams.split('?')[1].split('&'),
						data = {
							'password': pass[0].value,
							'password_confirmation': passVerify[0].value
						},
						tokenRestorePass;
					parametros.map(function(e) {
						tokenRestorePass = e.split('=')[1]
					})
					fetch(_API + 'change-password/' + tokenRestorePass, {
							'method': 'PUT',
							'body': JSON.stringify(data),
							'headers': {
								'Content-Type': 'application/json'
							}
						})
						.then(res => res.json())
						.then(res => {
							if (!res.result) {
								let error = res.message;
								if (error.password) {
									$('#alertasGeneral .modal-dialog[data-modal="restore-pass-error-server"] p').html(error.password)
								} else {
									$('#alertasGeneral .modal-dialog[data-modal="restore-pass-error-server"] p').html(error)
									if (error.includes('token a caducado')) {
										setTimeout(function() {
											window.location.href = "restorePassword";
										}, 4000)
									}
								}
								showAlerta('restore-pass-error-server')
							}
							if (res.result) {
								showAlerta('restore-pass-success')
							}
						})

				} else {
					pass[0].value = "";
					passVerify[0].value = "";
					showAlerta('restore-pass-error', 'error');
				}
			} else {
				$(pass).addClass('is-invalid');
				$(passVerify).addClass('is-invalid');
				$('#' + form + ' .form-group .icon').addClass('is-invalid');
			}
			//verificamos si typean
			$(pass).on('keypress', function(e) {
				if (this.value.length > 0) {
					$(this).removeClass('is-invalid');
				}
			})
			$(passVerify).on('keypress', function(e) {
				if (this.value.length > 0) {
					$(this).removeClass('is-invalid');
					$('#' + form + ' .form-group .icon').removeClass('is-invalid');
				}
			})
			break;
		case 'form-crearUsuario':
			if (step == 'step-1') {
				if (user[0].value.length <= 0) {
					$(user).addClass('is-invalid');
					$(user).on('keypress', function(e) {
						if (this.value.length > 0) {
							$(this).removeClass('is-invalid');
						}
					})
				}
				if (firstname[0].value.length <= 0) {
					$(firstname).addClass('is-invalid');
					$(firstname).on('keypress', function(e) {
						if (this.value.length > 0) {
							$(this).removeClass('is-invalid');
						}
					})
				}
				if (lastname[0].value.length <= 0) {
					$(lastname).addClass('is-invalid');
					$(lastname).on('keypress', function(e) {
						if (this.value.length > 0) {
							$(this).removeClass('is-invalid');
						}
					})
				}
				if (mail[0].value.length <= 0) {
					$(mail).addClass('is-invalid');
					$(mail).on('keypress', function(e) {
						if (this.value.length > 0) {
							$(this).removeClass('is-invalid');
						}
					})
				}
				if (phone[0].value.length <= 0) {
					$(phone).addClass('is-invalid');
					$(phone).on('keypress', function(e) {
						if (this.value.length > 0) {
							$(this).removeClass('is-invalid');
						}
					})
				}
				if (user[0].value.length > 0 && firstname[0].value.length > 0 && lastname[0].value.length > 0 && mail[0].value.length > 0 && phone[0].value.length > 0) {
					return valid = true;
				} else {
					return valid = false;
				}
			}
			if (step == 'step-2') {
				console.log(area)
				if (birthday[0].value.length <= 0) {
					$(birthday[0]).addClass('is-invalid');
					$(birthday[0]).on('change', function(e) {
						if (this.value.length > 0) {
							$(this).removeClass('is-invalid');
						}
					})
				}
				if (genere[0].selectedIndex == 0) {
					$(genere[0].nextSibling).addClass('is-invalid');
					$(genere).on('change', function(e) {
						if (this.selectedIndex != 0) {
							$(this.nextSibling).removeClass('is-invalid');
						}
					})
				}
				if (area[0].selectedIndex == 0) {
					$(area[0].nextSibling).addClass('is-invalid');
					$(area).on('change', function(e) {
						if (this.selectedIndex != 0) {
							$(this.nextSibling).removeClass('is-invalid');
						}
					})
				}
				if (puesto[0].selectedIndex == 0) {
					$(puesto[0].nextSibling).addClass('is-invalid');
					$(puesto).on('change', function(e) {
						if (this.selectedIndex != 0) {
							$(this.nextSibling).removeClass('is-invalid');
						}
					})
				}
				if (roles[0].selectedIndex == 0) {
					$(roles[0].nextSibling).addClass('is-invalid');
					$(roles).on('change', function(e) {
						if (this.selectedIndex != 0) {
							$(this.nextSibling).removeClass('is-invalid');
						}
					})
				}
				if (birthday[0].value.length > 0 && genere[0].selectedIndex != 0 && area[0].selectedIndex != 0 && puesto[0].selectedIndex != 0 && roles[0].selectedIndex != 0) {
					return valid = true;
				} else {
					return valid = false;
				}
			}
			break;
		case 'form-crearArea':
			if (area[0].value.length <= 0) {
				$(area[0]).addClass('is-invalid');
				$(area[0]).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			if (description[0].value.length <= 0) {
				$(description[0]).addClass('is-invalid');
				$(description[0]).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			if (area[0].value.length > 0 && description[0].value.length > 0) {
				return valid = true;
			} else {
				return valid = false;
			}
			break;
		case 'form-crearPermiso':
			if (permisos[0].value.length <= 0) {
				$(permisos[0]).addClass('is-invalid');
				$(permisos[0]).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			if (description[0].value.length <= 0) {
				$(description[0]).addClass('is-invalid');
				$(description[0]).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			if (categoria[0].selectedIndex == 0) {
				$(categoria[0].nextSibling).addClass('is-invalid');
				$(categoria).on('change', function(e) {
					if (this.selectedIndex != 0) {
						$(this.nextSibling).removeClass('is-invalid');
					}
				})
			}
			if (permisos[0].value.length > 0 && description[0].value.length > 0 && categoria[0].selectedIndex != 0) {
				return valid = true;
			} else {
				return valid = false;
			}
			break;
		case 'form-crearRol':
			console.log(roles, description)
			if (roles[0].value.length <= 0) {
				$(roles[0]).addClass('is-invalid');
				$(roles[0]).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			if (description[0].value.length <= 0) {
				$(description[0]).addClass('is-invalid');
				$(description[0]).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			if (roles[0].value.length > 0 && description[0].value.length > 0) {
				return valid = true;
			} else {
				return valid = false;
			}
			break;
		case 'form-crearPuesto':
			if (puesto[0].value.length <= 0) {
				$(puesto[0]).addClass('is-invalid');
				$(puesto[0]).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			if (description[0].value.length <= 0) {
				$(description[0]).addClass('is-invalid');
				$(description[0]).on('keypress', function(e) {
					if (this.value.length > 0) {
						$(this).removeClass('is-invalid');
					}
				})
			}
			if (puesto[0].value.length > 0 && description[0].value.length > 0) {
				return valid = true;
			} else {
				return valid = false;
			}
			break;
	}
}