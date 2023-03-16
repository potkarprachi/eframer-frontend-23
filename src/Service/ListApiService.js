import axios from "axios";
const BASE_URL = "http://localhost:8080";

export function getContactQueries() {
  return axios.get(`${BASE_URL}/getqueries`);
}

export function contact(query) {
  return axios.post(`${BASE_URL}/userquery`, query);
}

export function insert(user) {
  return axios.post(`${BASE_URL}/userAdd`, user);
}

export function userLogin(loginData) {
  return axios.post(`${BASE_URL}/userLogin`, loginData);
}
export function addCrop(id, cropToSell) {
  return axios.post(`${BASE_URL}/addCrop/${id}`, cropToSell);
}
export function getAllCropList(id) {
  return axios.get(`${BASE_URL}/getAllCropList/${id}`);
}
export function getAccDetails(id) {
  return axios.get(`${BASE_URL}/getAccDetails/${id}`);
}

export function cancelCropSelling(orderId) {
  return axios.put(`${BASE_URL}/updateStatusCrop/${orderId}`);
}

export function changeStatusAxios(id, act) {
  return axios.put(`${BASE_URL}/updateStatusByAdmin/${id}/${act}`);
}
export function getAllPendingList() {
  return axios.get(`${BASE_URL}/getAllCrops`);
}

export function updateAccDetails(loginData) {
  return axios.put(`${BASE_URL}/updateAccDetails`, loginData);
}

export function getApprovedList() {
  return axios.get(`${BASE_URL}/menuPage`);
}


export function getAllDistrict() {
  return axios.get(`${BASE_URL}/getDistrict`);
}

export function getTransDetails(id) {
  return axios.get(`${BASE_URL}/getAllTransactionCust/${id}`);
}

export function getTransDetailsFarmer(id) {
  console.log(`${BASE_URL}/getAllTransactionFarmer/${id}`);
  return axios.get(`${BASE_URL}/getAllTransactionFarmer/${id}`);
}
export function buyCrop1(item) {
  return axios.post(`${BASE_URL}/addTransaction`, item);
}
export function getAllTransactions()
{
  return axios.get(`${BASE_URL}/getAllTransactions1`);
}

export function getAccDetailsbyEmail(email)
{
  return axios.get(`${BASE_URL}/getAccDetailbyemail/${email}`);
}

export function checkEmail(email) {
  console.log(email);
  return axios.post(`${BASE_URL}/checkEmail`, email);
}
export function userPasswordUpdate(formData) {
  console.log(formData);
  return axios.post(`${BASE_URL}/forgotpassword`, formData);
}
export function getCropInfo(id)
{
  return axios.get(`${BASE_URL}/getCropDetails/${id}`)
}

//done