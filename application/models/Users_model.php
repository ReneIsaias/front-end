<?php
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

class Users_model extends CI_Model
{
    var $dbName;

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->dbName = "users";
    }

    // CRUD
    public function select()
    {
        $this->db->select("*");
        $this->db->from($this->dbName);
        $this->db->order_by("created_at", "desc");

        $query = $this->db->get();
        if ($query->num_rows() > 0) return $query->result_array();
        else return false;
    }
    public function insert($data)
    {
        if ($this->db->insert($this->dbName, $data)) {
            return $this->db->insert_id();
        } else {
            return false;
        }
    }
    public function update($id, $data)
    {
        $this->db->where('id', $id);
        return $this->db->update($this->dbName, $data);
    }
    public function delete($id)
    {
        $this->db->where('id', $id);
        $this->db->delete($this->dbName);
    }
    // END CRUD

    public function get_by_email($email)
    {
        $this->db->select("*");
        $this->db->from($this->dbName);
        $this->db->where("email", $email);

        $query = $this->db->get();
        if ($query->num_rows() > 0) return $query->row();
        else return false;
    }
    public function get_user_by_id($id)
    {
        $this->db->select("*");
        $this->db->from($this->dbName);
        $this->db->where("id", $id);

        $query = $this->db->get();
        if ($query->num_rows() > 0) return $query->row();
        else return false;
    }
    public function autenticate_user($data)
    {
        $this->db->select("*");
        $this->db->from($this->dbName);
        $this->db->where("email = '" . $data["email"] . "' AND password = '" . $data["password"] . "'");

        $query = $this->db->get();

        if ($query->num_rows() > 0) {
            return $query->row();
        } else {
            return false;
        }
    }
}
