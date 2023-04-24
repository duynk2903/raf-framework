/**
 * Convert url images to base64 string
 * @param url
 */
import { FileContentType } from '@core/enums/file.enum'
import { request } from '@core/services/base.service'

const toDataURL = (url: string) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      const reader = new FileReader()
      reader.readAsDataURL(xhr.response)
      reader.onloadend = function () {
        resolve({ base64Url: reader.result })
      }
    }
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
  })
}

/**
 * Get Images from server and convert to base64 String
 * @param url
 */
function urlToBase64(url: string) {
  return request
    .getWithOption(url, {
      responseType: 'blob'
    })
    .then((response: any) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.onerror = reject
        reader.readAsDataURL(response.data)
      })
    })
    .catch(() => null)
}

/**
 * Download file from workbook of exceljs
 * @param workbook
 * @param promise
 * @param fileName
 */
const downloadFileFromWorkBook = (workbook: any, promise: any, fileName: string) => {
  promise.then(() => {
    workbook.xlsx.writeBuffer().then(function (data: any) {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      const url = window.URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = fileName
      anchor.click()
      window.URL.revokeObjectURL(url)
    })
  })
}

/**
 * Convert base64 images to blob
 * @param b64Data
 * @param contentType
 * @param sliceSize
 */
const convertBase64ImagesToBlob = (b64Data: any, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: contentType })
}

/**
 * Convert Uint8 Byte array to base64 images
 * @param arr
 * @param extension
 */
function convertUint8ArrayToBase64Images(arr: Uint8Array, extension: string) {
  const base64Images = btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''))
  return `data:image/${extension};base64,${base64Images}`
}

/**
 * Detect file extension
 * @param base64Data
 */
function detectMimeType(base64Data: string) {
  return base64Data.split(';')[0].split('/')[1]
}

/**
 * Convert file to base 64 string
 * @param file
 */
const convertFileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Check file type is URL or Base64
 * @param contentFile
 */
const checkFileImagesIsUrlOrBase64 = (contentFile: string) => {
  if (contentFile && contentFile.length > 0) {
    if (contentFile.startsWith('http') || contentFile.startsWith('https')) {
      return FileContentType.URL
    } else if (contentFile.startsWith('data:image')) {
      return FileContentType.BASE64
    }
  }
}

/**
 * Convert base64 string to Array buffer
 * @param base64String
 */
const convertBase64ToArrayBuffer = (base64String: string) => {
  return fetch(base64String)
    .then((response) => response.arrayBuffer())
    .then((buffer) => new Int8Array(buffer))
}

/**
 * Convert url to file
 * @param url
 * @param fileName
 */
const convertUrlToFile = (url: string, fileName: string) => {
  return fetch(url)
    .then((response) => response.arrayBuffer())
    .then((buffer) => new File([buffer], fileName))
}

export {
  toDataURL,
  downloadFileFromWorkBook,
  convertBase64ImagesToBlob,
  convertUint8ArrayToBase64Images,
  detectMimeType,
  convertFileToBase64,
  checkFileImagesIsUrlOrBase64,
  convertBase64ToArrayBuffer,
  convertUrlToFile,
  urlToBase64
}
