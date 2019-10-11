import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'

const token = document.head.querySelector('meta[name="csrf-token"]')

axios.defaults.headers.common = {
  'X-CSRF-TOKEN': token.content,
  'X-Requested-With': 'XMLHttpRequest'
}
