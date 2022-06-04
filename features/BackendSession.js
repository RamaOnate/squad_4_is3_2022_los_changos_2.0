const request = require('request')

class BackendSession {
    constructor(host, port) {
        this.url = `http://${host}:${port}`
        this.statusCode = 0
    }

    sendLicense(license) {
        
        const options = {
            url: `${this.url}/licenses`,
            method: 'POST',
            json: true,
            body: license
        }
        
        request(options, (err, res, body) => {
            this.statusCode = res.statusCode
        })

    }

    statusCode() {
        return this.statusCode
    }

    deleteLicense(license) {
        const options = {
            url: `${this.url}/licenses/${license._id}`,
            method: 'DELETE',
            json: true
        }

        request(options, (err, res, body) => {
            this.statusCode = res.statusCode
        })
    }

    getLicenses() {
        const options = {
            url: `${this.url}/licenses`,
            method: 'GET',
            json: true
        }

        request(options, (err, res, body) => {
            this.statusCode = res.statusCode
        })
    }


  }

    module.exports = BackendSession 