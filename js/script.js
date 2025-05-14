// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars

function updateCookieCount() {
  let savedCount = localStorage.getItem("cookieCount")
  if (savedCount === null) {
    savedCount = 0
  }
  document.getElementById("cookie-count").textContent = savedCount
}

function incrementCookieCount() {
  let savedCount = localStorage.getItem("cookieCount")
  if (savedCount === null) {
    savedCount = 0
  }
  let newCount = parseInt(savedCount) + 1
  localStorage.setItem("cookieCount", newCount)
  document.getElementById("cookie-count").textContent = newCount
}
