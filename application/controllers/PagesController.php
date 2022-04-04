<?php
defined('BASEPATH') or exit('No direct script access allowed');

class PagesController extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
    }

    public function index()
    {

        $this->load->view('login/login');
    }
    public function login()
    {
        $this->load->view('login/login');
    }

    public function restorePassword()
    {
        $this->load->view('shared/header-login');
        $this->load->view('login/restorePassword');
        $this->load->view('shared/alertas');
        $this->load->view('shared/footer-login');
    }
    public function perfil()
    {

        $this->load->view('shared/header');
        $this->load->view('profile/profile');
        $this->load->view('shared/alertas');
        $this->load->view('shared/footer');
    }

    public function usuarios()
    {

        $this->load->view('shared/header');
        $this->load->view('users/users');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function usuarios_eliminados()
    {

        $this->load->view('shared/header');
        $this->load->view('users/usuarios-eliminados');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function areas()
    {

        $this->load->view('shared/header');
        $this->load->view('users/areas');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function areas_eliminadas()
    {

        $this->load->view('shared/header');
        $this->load->view('users/areas-eliminadas');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function permisos()
    {

        $this->load->view('shared/header');
        $this->load->view('users/permisos');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function permisos_eliminados()
    {

        $this->load->view('shared/header');
        $this->load->view('users/permisos-eliminados');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function roles()
    {

        $this->load->view('shared/header');
        $this->load->view('users/roles');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function roles_eliminados()
    {

        $this->load->view('shared/header');
        $this->load->view('users/roles-eliminados');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function puestos()
    {

        $this->load->view('shared/header');
        $this->load->view('users/puestos');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }
    public function puestos_eliminados()
    {

        $this->load->view('shared/header');
        $this->load->view('users/puestos-eliminados');
        $this->load->view('users/modales');
        $this->load->view('users/alertas');
        $this->load->view('shared/footer');
    }

    public function form()
    {
        $this->load->view('users/forms');
    }



    public function error_404()
    {
        $this->load->view('shared/header');
        $this->load->view('error_404');
        $this->load->view('shared/footer');
    }

    // public function loginUser()
    // {
    //     header('Content-Type: application/json');
    //     switch ($this->input->post('password')) {
    //         case "partners2021":
    //             $this->load->library('session');
    //             $this->session->set_userdata(array(
    //                 'Brand'        => "Levis",
    //                 'timestamp'    => date("Y-m-d H:i:s")
    //             ));
    //             echo json_encode(array('response' => true, 'data' => base_url(), 'redirect' => base_url()));
    //             break;
    //         default:
    //             echo json_encode(array('response' => false, 'data' => "Usuario o contraseña inválidos."));
    //             break;
    //     }
    // }
}
