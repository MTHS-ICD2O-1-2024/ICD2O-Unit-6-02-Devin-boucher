// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars

// Cookie Clicker Logic
function updateCookieCount() {
  const count = localStorage.getItem("cookieCount") || 0
  document.getElementById("cookie-count").textContent = count
}

function incrementCookieCount() {
  let count = Number(localStorage.getItem("cookieCount")) || 0
  count++
  localStorage.setItem("cookieCount", count)
  document.getElementById("cookie-count").textContent = count
}
